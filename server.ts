import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy initialize Google GenAI so it won't crash on boot if API key is not present initially
let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required. Please set it in the Secrets panel in the AI Studio UI.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        }
      }
    });
  }
  return aiClient;
}

// Endpoint to serve README.md, README_preview.md, and hero banner assets
app.get("/README.md", (req, res) => {
  res.sendFile(path.join(process.cwd(), "README.md"));
});
app.get("/README_preview.md", (req, res) => {
  res.sendFile(path.join(process.cwd(), "README_preview.md"));
});
app.get("/public/README_preview.md", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "README_preview.md"));
});
app.get("/public/hero-banner.gif", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "hero-banner.gif"));
});
app.get("/public/hero-banner.svg", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "hero-banner.svg"));
});
app.get("/hero-banner.gif", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "hero-banner.gif"));
});
app.get("/hero-banner.svg", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "hero-banner.svg"));
});

// 1. API Endpoint for AI grounded supply chain search and analysis
app.post("/api/analyze", async (req, res) => {
  const { query, section, period } = req.body;
  
  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  const periodContext = period ? period.replace('_', ' ') : '2026 H1';

  try {
    const ai = getAiClient();
    
    // Construct dynamic prompts or specific sector report prompts.
    let fullPrompt = query;
    if (section) {
      fullPrompt = `
You are an expert global supply chain analyst specializing in global logistics and trade analysis for period window: ${periodContext}. 
Your task is to analyze the following query and provide a professional, deeply-researched, and data-backed response for period ${periodContext}.
Use Google Search grounding to retrieve real, actual facts, numbers, and events.

Reporting Period Window: ${periodContext}
Focus sector/report section: ${section}

User request: "${query}"

Format your response in beautiful, clear, and highly professional Markdown (with headings, bold highlights, bullets, and table formatting where appropriate). 
Do NOT mention internal engineering details, ports, or AI system guidelines. Focus on real-world industry realities: Shipping rates, port congestions, the Red Sea Cape of Good Hope rerouting, green corridors, European CSDDD due diligence, global nearshoring policies (US, Mexico, India, China), and warehouse robotics.
`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: fullPrompt,
      config: {
        tools: [{ googleSearch: {} }],
      }
    });

    const text = response.text || "No analysis could be generated.";
    
    // Extract search grounding links and sources to return to client
    const rawChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = rawChunks
      .map((chunk: any) => {
        if (chunk.web) {
          return {
            title: chunk.web.title || "Web Reference",
            uri: chunk.web.uri || "",
          };
        }
        return null;
      })
      .filter((s: any) => s && s.uri);

    // Remove duplicates from sources
    const uniqueSources: Array<{ title: string; uri: string }> = [];
    const seenUris = new Set<string>();
    for (const source of sources) {
      if (source && !seenUris.has(source.uri)) {
        seenUris.add(source.uri);
        uniqueSources.push(source);
      }
    }

    res.json({
      text,
      sources: uniqueSources,
    });

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: error.message || "An error occurred while generating analysis.",
      isKeyError: !process.env.GEMINI_API_KEY,
    });
  }
});

// Serve Vite SPA in dev and production
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Core running on http://0.0.0.0:${PORT}`);
  });
}

setupServer().catch((err) => {
  console.error("Failed to start server:", err);
});
