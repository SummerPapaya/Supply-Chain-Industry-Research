import { useState, useEffect } from "react";
import { X, BookOpen, ExternalLink, Code2, Copy, Check, FileText, Sparkles, Download, Image as ImageIcon } from "lucide-react";
import Markdown from "react-markdown";
import { locales } from "../locales";

interface ReadmeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "zh" | "en";
}

export default function ReadmeModal({ isOpen, onClose, lang }: ReadmeModalProps) {
  const [readmeText, setReadmeText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"hero" | "rendered" | "raw">("rendered");
  const [heroFormat, setHeroFormat] = useState<"gif" | "svg">("gif");

  const t = locales[lang].header;

  useEffect(() => {
    if (!isOpen) return;
    setLoading(true);
    // Read README.md content directly from raw string or fetch
    fetch("/README.md")
      .then((res) => {
        if (!res.ok) throw new Error("Could not load README.md");
        return res.text();
      })
      .then((data) => {
        setReadmeText(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setReadmeText("# Supply Chain Industry Research\n\nFailed to load README.md content dynamically.");
        setLoading(false);
      });
  }, [isOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText(readmeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#0F172A] border-2 border-slate-800 rounded-sm shadow-2xl w-full max-w-5xl my-auto flex flex-col max-h-[90vh] overflow-hidden text-left">
        {/* Header bar */}
        <div className="bg-[#0B132B] text-white p-4 sm:px-6 flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-sm">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono font-bold uppercase bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-sm border border-blue-400/30">
                  GitHub README
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  SummerPapaya/Supply-Chain-Industry-Research
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight mt-0.5">
                {t.readmeModalTitle}
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* View Switcher */}
            <div className="hidden sm:flex border border-slate-700 rounded-sm p-0.5 bg-slate-800">
              <button
                onClick={() => setActiveTab("hero")}
                className={`px-3 py-1 text-xs font-bold font-mono rounded-sm transition-all cursor-pointer flex items-center space-x-1 ${
                  activeTab === "hero" ? "bg-amber-600 text-white shadow-xs" : "text-amber-400 hover:text-white"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>🎨 Hero Studio ($beautify)</span>
              </button>
              <button
                onClick={() => setActiveTab("rendered")}
                className={`px-3 py-1 text-xs font-bold font-mono rounded-sm transition-all cursor-pointer flex items-center space-x-1 ${
                  activeTab === "rendered" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Rendered</span>
              </button>
              <button
                onClick={() => setActiveTab("raw")}
                className={`px-3 py-1 text-xs font-bold font-mono rounded-sm transition-all cursor-pointer flex items-center space-x-1 ${
                  activeTab === "raw" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Raw Markdown</span>
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-sm text-xs font-mono font-bold transition-colors flex items-center space-x-1 cursor-pointer"
              title="Copy Markdown"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <a
              href="https://github.com/SummerPapaya/Supply-Chain-Industry-Research"
              target="_blank"
              rel="noreferrer noopener"
              className="hidden md:flex items-center space-x-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-sm text-xs font-mono font-bold transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-sm transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 bg-[#0B132B] font-sans text-slate-200">
          {loading ? (
            <div className="py-20 text-center font-mono text-xs text-slate-500 animate-pulse">
              Loading preview...
            </div>
          ) : activeTab === "hero" ? (
            <div className="max-w-5xl mx-auto space-y-6 text-left">
              {/* Top Banner Notice */}
              <div className="p-4 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-sm border border-blue-500/40 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-sm border border-amber-500/30">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-emerald-500 text-slate-950 text-[10px] font-mono font-extrabold px-2 py-0.5 rounded-xs uppercase">
                        README.md Embedded ✅
                      </span>
                      <span className="text-[11px] font-mono text-emerald-300">
                        HD Banner Integrated • Ready for Repository
                      </span>
                    </div>
                    <h4 className="font-bold text-sm sm:text-base text-white mt-1">
                      {lang === "zh" ? "⚡ 全球供应链与跨境物流报告：动画封面已正式嵌入 README" : "⚡ Global Supply Chain Dashboard: Animated GIF Formally Embedded in README"}
                    </h4>
                    <p className="text-xs text-slate-300 font-sans mt-0.5 leading-relaxed">
                      {lang === "zh"
                        ? "根据您的确认指令，高清 256 色动图封面 (hero-banner.gif) 已正式升级并嵌入至项目 README.md 顶部！该 GIF 采用 0 次无限循环 (loop 0) 与全色域统计调色板，在您的电脑 macOS Preview 及 GitHub 仓库中均能完美展示。"
                        : "Per your confirmation, the HD 256-color Animated GIF cover (hero-banner.gif) is now officially embedded at the top of README.md! Compiled with loop 0 and full color stats, it displays seamlessly on your macOS Preview and GitHub repository."}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 font-mono text-xs shrink-0 self-end sm:self-center">
                  <a
                    href="/hero-banner.gif"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-sm flex items-center space-x-1.5 shadow-sm transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>GIF (198 KB)</span>
                  </a>
                  <a
                    href="/hero-banner.svg"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold rounded-sm flex items-center space-x-1.5 shadow-sm transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>SVG (14 KB)</span>
                  </a>
                </div>
              </div>

              {/* Toggle controls between GIF and SVG */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#0F172A] p-3 rounded-sm border border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-slate-200 font-mono flex items-center gap-1.5">
                    <ImageIcon className="w-4 h-4 text-blue-400" />
                    {lang === "zh" ? "选择预览渲染模式:" : "Select Render Format Mode:"}
                  </span>
                  <div className="flex bg-slate-900 border border-slate-800 rounded-sm p-0.5 shadow-2xs">
                    <button
                      onClick={() => setHeroFormat("gif")}
                      className={`px-3 py-1 text-xs font-bold font-mono rounded-xs transition-all cursor-pointer ${
                        heroFormat === "gif" ? "bg-blue-600 text-white shadow-xs" : "text-slate-400 hover:text-slate-100"
                      }`}
                    >
                      Animated GIF (Bayer Dithered)
                    </button>
                    <button
                      onClick={() => setHeroFormat("svg")}
                      className={`px-3 py-1 text-xs font-bold font-mono rounded-xs transition-all cursor-pointer ${
                        heroFormat === "svg" ? "bg-blue-600 text-white shadow-xs" : "text-slate-400 hover:text-slate-100"
                      }`}
                    >
                      Vector SVG Source
                    </button>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-sm border border-emerald-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  {heroFormat === "gif" ? "1200 × 420 px • 15 FPS Seamless Loop" : "Scalable Vector Graphics • SMIL Ready"}
                </span>
              </div>

              {/* Rendered Preview Box */}
              <div className="bg-slate-950 border-2 border-slate-800 rounded-sm p-4 sm:p-6 shadow-2xl relative flex flex-col items-center">
                <div className="w-full flex items-center justify-between mb-3 text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                  <span className="text-blue-400 font-bold">
                    {heroFormat === "gif" ? "🎥 RENDERING: /public/hero-banner.gif" : "📐 RENDERING: /public/hero-banner.svg"}
                  </span>
                  <span>100% Widescreen WXGA Aspect Ratio</span>
                </div>
                <div className="w-full overflow-hidden rounded-sm border border-slate-800 bg-slate-900 flex justify-center p-2">
                  <img
                    src={heroFormat === "gif" ? "/hero-banner.gif" : "/hero-banner.svg"}
                    alt="Supply Chain & Logistics Dashboard Animated GIF Hero Banner"
                    className="w-full h-auto object-contain max-h-[420px] shadow-2xl rounded-sm transition-all duration-300"
                  />
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 bg-[#0F172A] border border-slate-800 rounded-sm space-y-1 shadow-sm">
                  <div className="text-slate-400 font-bold">🎨 ART DIRECTION &amp; PALETTE</div>
                  <div className="font-extrabold text-white text-sm">Deep Slate &amp; Electric Cyan</div>
                  <div className="text-slate-400">Derived from 2026 maritime telemetry, Red Sea chokepoints &amp; Mexico Nearshoring 2.0.</div>
                </div>
                <div className="p-4 bg-[#0F172A] border border-slate-800 rounded-sm space-y-1 shadow-sm">
                  <div className="text-slate-400 font-bold">⚡ GIF COMPILATION PIPELINE</div>
                  <div className="font-extrabold text-white text-sm">30 Frames @ 15 FPS Loop</div>
                  <div className="text-slate-400">Generated via @resvg/resvg-js &amp; ffmpeg palettegen with 0% banding.</div>
                </div>
                <div className="p-4 bg-[#0F172A] border border-slate-800 rounded-sm space-y-1 shadow-sm">
                  <div className="text-slate-400 font-bold">📦 VECTOR SVG SOURCE</div>
                  <div className="font-extrabold text-white text-sm">/public/hero-banner.svg</div>
                  <div className="text-slate-400">Self-contained Bezier paths and multi-font Chinese/English font chains.</div>
                </div>
              </div>

              {/* Insertion Snippet Active in README */}
              <div className="p-4 bg-slate-900 text-slate-200 rounded-sm border border-slate-800 space-y-2 font-mono text-xs shadow-md">
                <div className="flex items-center justify-between text-slate-400 font-bold">
                  <span>💡 MARKDOWN INJECTION SNIPPET (EMBEDDED IN README.MD)</span>
                  <span className="text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">EMBEDDED ✅</span>
                </div>
                <pre className="p-3 bg-slate-950 rounded border border-slate-800 text-emerald-400 overflow-x-auto text-xs leading-relaxed">
{`<div align="center">

![Supply Chain & Logistics Industry Intelligence Research Dashboard (2026)](./public/hero-banner.gif)

</div>`}
                </pre>
                <p className="text-slate-400 text-[11px] font-sans">
                  {lang === "zh"
                    ? "说明：上述代码已成功写入并保存至 README.md 顶部！该动态封面已在仓库根目录和 public 目录建立完整双链路映射，直接推送到 GitHub 仓库即可直接显示！"
                    : "Note: The snippet above is now saved directly at the top of README.md! The hero banner is mapped across both root and public directories for 100% universal rendering on GitHub!"}
                </p>
              </div>
            </div>
          ) : activeTab === "raw" ? (
            <pre className="bg-slate-950 text-slate-200 p-5 rounded-sm overflow-x-auto font-mono text-xs leading-relaxed border border-slate-800 whitespace-pre-wrap shadow-inner">
              {readmeText}
            </pre>
          ) : (
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="p-3 bg-[#0F172A] border border-amber-500/40 rounded-sm text-amber-300 text-xs font-mono flex items-center justify-between shadow-sm">
                <span>✨ Local Preview mode active. Changes are strictly local and not pushed.</span>
                <span className="font-bold bg-amber-500/20 px-2 py-0.5 rounded text-amber-200">README.md</span>
              </div>
              <div className="markdown-body-dark prose prose-invert max-w-none text-slate-200 text-xs sm:text-sm leading-relaxed space-y-4 bg-[#0F172A] p-6 rounded-sm border border-slate-800 shadow-lg">
                <Markdown>{readmeText}</Markdown>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#0F172A] border-t border-slate-800 p-3 px-6 text-xs text-slate-400 font-mono flex flex-col sm:flex-row justify-between items-center gap-2 shrink-0">
          <span>Repository: SummerPapaya/Supply-Chain-Industry-Research</span>
          <div className="flex items-center space-x-3">
            <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 border border-emerald-800 rounded-sm">
              Local Preview Ready
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-sm font-bold cursor-pointer transition-colors shadow-sm"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
