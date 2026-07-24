import { useState } from "react";
import { Search, Compass, ExternalLink, Loader2, Send, HelpCircle, FileText } from "lucide-react";
import Markdown from "react-markdown";
import { locales } from "../locales";

interface InteractiveQAProps {
  lang: "zh" | "en";
}

export default function InteractiveQA({ lang }: InteractiveQAProps) {
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState("综合报告");
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [sources, setSources] = useState<Array<{ title: string; uri: string }>>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const t = locales[lang].qa;

  const presets = [
    {
      title: "中墨贸易通道表现",
      titleEn: "Sino-Mexican Trade Corridors",
      query: "分析25年底至2026年上半年中墨贸易通道、跨太平洋航运成本以及其因‘近岸外包2.0’发生的集装箱交货期变化。",
      queryEn: "Analyze Sino-Mexican trade corridors, transpacific ocean freight rates, and changes in container transit times in late 2025 and H1 2026 under Nearshoring 2.0.",
      section: "地缘常态化与运费",
      sectionEn: "Geopolitics & Freight"
    },
    {
      title: "欧盟CSDDD强制罚则",
      titleEn: "EU CSDDD Mandates & Fines",
      query: "2026年欧盟CSDDD正式分步推广实施后，对非欧盟主要出口型中小供应链企业的核查细节、违约罚则及硬性准入限额是多少？",
      queryEn: "What are the specific audit details, penalty structures, and compliance thresholds for non-EU exporting suppliers under the EU CSDDD implemented in 2026?",
      section: "ESG合规标准",
      sectionEn: "ESG Standards"
    },
    {
      title: "红海绕行对零部件的影响",
      titleEn: "Red Sea Bypass Impact",
      query: "2026年红海好望角绕行常态化对全球汽车零部件和重工业供应链产生了哪些实质影响？其物流周期和整车装配周转率具体如何受波及？",
      queryEn: "What was the quantitative impact of constant Cape of Good Hope reroutings on automotive parts and heavy industry in 2026? Detail assembly turnaround impacts.",
      section: "航运大通道",
      sectionEn: "Transit Channels"
    },
    {
      title: "AI智能体物流应用案例",
      titleEn: "Generative AI Agents in Logistics",
      query: "2026年业内有哪些真实的‘生成式AI智能体(Agentic AI)’在采购价格谈判、需求自拟合和自动化排线调度中的核心落地案例？",
      queryEn: "Identify major H1 2026 enterprise use cases for generative AI agents (Agentic SC) autonomously negotiating procurement rates and managing booking APIs.",
      section: "智能科技革新",
      sectionEn: "Smart Tech & Innovation"
    }
  ];

  const handlePresetClick = (preset: typeof presets[0]) => {
    const activeQuery = lang === "en" ? preset.queryEn : preset.query;
    const activeSec = lang === "en" ? preset.sectionEn : preset.section;
    setQuery(activeQuery);
    setActiveSection(activeSec);
    triggerSearch(activeQuery, activeSec);
  };

  const triggerSearch = async (targetQuery: string, sectionStr: string) => {
    if (!targetQuery.trim()) return;
    
    setLoading(true);
    setErrorMsg(null);
    setAnalysisResult(null);
    setSources([]);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: targetQuery,
          section: sectionStr
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "检索生成失败");
      }

      setAnalysisResult(data.text);
      setSources(data.sources || []);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || (lang === "en" ? "Unknown server error. Ensure a valid GEMINI_API_KEY is configured in your Secrets." : "请求服务器处理时发生未知错误。请检查是否已在 Secrets 中配置了正确的 GEMINI_API_KEY。"));
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerSearch(query, activeSection);
  };

  return (
    <div className="space-y-6">
      <div className="bg-slate-50 border border-slate-300 rounded-sm p-5 md:p-6 text-left">
        <h3 className="text-sm font-bold text-slate-900 flex items-center">
          <Compass className="w-5 h-5 mr-2 text-indigo-650" />
          {t.assistantHeader}
        </h3>
        <p className="text-xs text-slate-505 mt-1 md:max-w-3xl leading-relaxed">
          {t.assistantDesc}
        </p>

        {/* Preset grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => handlePresetClick(preset)}
              disabled={loading}
              className="text-left bg-white border border-slate-300 hover:border-slate-450 rounded-sm p-3 hover:shadow-xs cursor-pointer transition-all duration-200 disabled:opacity-60 flex flex-col justify-between"
            >
              <div className="text-xs font-bold text-slate-900 mb-1.5 flex justify-between items-center gap-1">
                <span>{lang === "en" ? preset.titleEn : preset.title}</span>
                <span className="text-[9px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-sm font-mono font-bold uppercase shrink-0">
                  {lang === "en" ? preset.sectionEn : preset.section}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                {lang === "en" ? preset.queryEn : preset.query}
              </p>
            </button>
          ))}
        </div>

        {/* Search form bar */}
        <form onSubmit={handleSubmit} className="mt-5 flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.queryPlaceholder}
              className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-300 rounded-sm text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              disabled={loading}
            />
            <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-400" />
          </div>

          <div className="flex gap-1.5 shrink-0">
            <select
              value={activeSection}
              onChange={(e) => setActiveSection(e.target.value)}
              className="hidden sm:block border border-slate-300 rounded-sm px-2 text-xs bg-white text-slate-700"
              disabled={loading}
            >
              <option value="综合报告">{t.categoryComprehensive}</option>
              <option value="海运及港口状况">{t.categorySea}</option>
              <option value="航空及跨境快货">{t.categoryAir}</option>
              <option value="AI与智能物流技术">{t.categoryTech}</option>
              <option value="ESG绿色与电池护照">{t.categoryEsg}</option>
            </select>
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="px-4 py-2.5 bg-slate-950 text-white rounded-sm font-bold text-xs hover:bg-slate-850 cursor-pointer transition-colors disabled:opacity-50 flex items-center space-x-1"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-3.5 h-3.5" />
              )}
              <span className="hidden sm:inline">{t.searchBtn}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Dynamic Results block */}
      {loading && (
        <div className="bg-white border border-slate-300 rounded-sm p-8 text-center flex flex-col items-center justify-center space-y-3 shadow-xs">
          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-800">{t.searchingHeader}</p>
            <p className="text-xs text-slate-400 font-mono">{t.searchingSub}</p>
          </div>
        </div>
      )}

      {errorMsg && (
        <div className="bg-red-50 border border-red-200 rounded-sm p-5 text-left text-xs text-red-800 space-y-2">
          <h4 className="font-bold flex items-center">
            <HelpCircle className="w-4.5 h-4.5 mr-1 text-red-650" />
            {t.errorHeader}
          </h4>
          <p>{errorMsg}</p>
          <div className="p-3 bg-white/70 rounded-sm border border-red-100 font-mono text-[11px] text-red-950">
            {t.errorPrompt}
          </div>
        </div>
      )}

      {analysisResult && (
        <div className="bg-white border border-slate-300 rounded-sm p-6 text-left space-y-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">{t.resultTitle}</span>
            </div>
            <span className="px-2.5 py-0.5 text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-800 rounded-sm border border-emerald-250">
              {t.resultBadge}
            </span>
          </div>

          <div className="markdown-body text-xs sm:text-sm text-slate-800 leading-relaxed">
            <Markdown>{analysisResult}</Markdown>
          </div>

          {/* Sources block */}
          {sources.length > 0 && (
            <div className="pt-4 border-t border-slate-200">
              <h4 className="text-xs font-bold text-slate-900 mb-2 tracking-wider flex items-center">
                <ExternalLink className="w-3.5 h-3.5 mr-1 text-slate-500" />
                {t.sourcesTitle} ({sources.length})
              </h4>
              <div className="flex flex-wrap gap-2">
                {sources.map((source, index) => (
                  <a
                    key={index}
                    href={source.uri}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center space-x-1 px-2.5 py-1 text-[11px] bg-slate-50 hover:bg-slate-100 rounded text-slate-600 border border-slate-200 transition-colors"
                  >
                    <span className="font-bold text-indigo-500 font-mono">[{index + 1}]</span>
                    <span className="max-w-[200px] truncate">{source.title}</span>
                    <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
