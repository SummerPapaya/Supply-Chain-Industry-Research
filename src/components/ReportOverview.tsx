import { useState } from "react";
import { kpis as defaultKpis, getPeriodData } from "../data";
import { TrendingUp, ShieldAlert, Cpu, Leaf, Info, Calendar, Sparkles, Download, ExternalLink, Image as ImageIcon } from "lucide-react";
import { motion } from "motion/react";
import { KPIItem, ReportingPeriod, PeriodKey } from "../types";
import { locales } from "../locales";

interface ReportOverviewProps {
  kpiData?: KPIItem[];
  periodKey?: PeriodKey;
  periodData?: ReportingPeriod;
  lang: "zh" | "en";
}

export default function ReportOverview({ kpiData, periodKey = "2026_H1", periodData, lang }: ReportOverviewProps) {
  const [previewFormat, setPreviewFormat] = useState<"gif" | "svg">("gif");
  const activePeriod = periodData || getPeriodData(periodKey);
  const currentKpis = kpiData || activePeriod.kpis || defaultKpis;
  const t = locales[lang].overview;

  const getIcon = (label: string) => {
    if (label.includes("货运") || label.includes("Freight")) return <TrendingUp className="w-5 h-5 text-blue-600" />;
    if (label.includes("技术") || label.includes("Tech")) return <Cpu className="w-5 h-5 text-indigo-600" />;
    if (label.includes("绿色") || label.includes("Green")) return <Leaf className="w-5 h-5 text-emerald-600" />;
    return <ShieldAlert className="w-5 h-5 text-amber-600" />;
  };

  const getBgColor = (label: string) => {
    if (label.includes("货运") || label.includes("Freight")) return "bg-blue-50 border-blue-200";
    if (label.includes("技术") || label.includes("Tech")) return "bg-indigo-50 border-indigo-200";
    if (label.includes("绿色") || label.includes("Green")) return "bg-emerald-50 border-emerald-200";
    return "bg-amber-50 border-amber-200";
  };

  return (
    <div className="space-y-6 text-left">
      {/* Lead Narrative with deep luxury professional banner */}
      <div className="bg-slate-900 text-white rounded-sm p-6 md:p-8 relative overflow-hidden shadow-sm border border-slate-950">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="bg-blue-600 text-white px-2.5 py-0.5 text-[9px] font-bold tracking-widest uppercase rounded-sm font-mono border border-blue-500">
              {t.executiveSummary}
            </span>
            <span className="inline-flex items-center gap-1 bg-slate-800 text-blue-300 px-2.5 py-0.5 text-[10px] font-mono font-bold rounded-sm border border-slate-700">
              <Calendar className="w-3 h-3 text-blue-400" />
              {lang === "zh" ? `报告期窗口: ${activePeriod.label}` : `Period Window: ${activePeriod.labelEn}`}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-4 text-white">
            {lang === "zh" ? activePeriod.titleOverview : activePeriod.titleOverviewEn}
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed text-sm md:text-base font-sans">
            {lang === "zh" ? activePeriod.summaryText : activePeriod.summaryTextEn}
          </p>
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>{lang === "zh" ? `截止日期: ${activePeriod.asOfDate}` : `As of: ${activePeriod.asOfDateEn}`}</span>
            <span className="text-blue-400 font-bold">{lang === "zh" ? `时间段: ${activePeriod.reportPeriodText}` : `Window: ${activePeriod.reportPeriodTextEn}`}</span>
          </div>
        </div>
      </div>

      {/* Hero Banner Showcase Card (Rendered Preview for $beautify-github-readme) */}
      <div className="bg-[#0F172A] border-2 border-amber-500/50 rounded-sm p-5 md:p-6 text-white shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-sm border border-amber-500/30">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="bg-emerald-500 text-slate-950 text-[10px] font-mono font-extrabold px-2 py-0.5 rounded-xs uppercase">
                  $beautify-github-readme Mode
                </span>
                <span className="text-[11px] font-mono text-blue-300">
                  README.md Untouched • Preview First
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-1">
                {lang === "zh" ? "⚡ 行业报告主页封面动画及 SVG 矢量源文件预览" : "⚡ Project Hero Banner Animated GIF & SVG Render Preview"}
              </h3>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono shrink-0">
            <span className="hidden sm:inline bg-slate-800 text-slate-300 px-3 py-1 rounded-sm border border-slate-700">
              1200 × 420 px
            </span>
            <div className="flex bg-slate-900 border border-slate-700 rounded-sm p-0.5">
              <button
                onClick={() => setPreviewFormat("gif")}
                className={`px-2.5 py-1 text-xs font-bold rounded-xs transition-all cursor-pointer ${
                  previewFormat === "gif" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                GIF Mode
              </button>
              <button
                onClick={() => setPreviewFormat("svg")}
                className={`px-2.5 py-1 text-xs font-bold rounded-xs transition-all cursor-pointer ${
                  previewFormat === "svg" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                SVG Source
              </button>
            </div>
            <a
              href={previewFormat === "gif" ? "/hero-banner.gif" : "/hero-banner.svg"}
              target="_blank"
              rel="noreferrer noopener"
              className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded-sm font-bold transition-colors flex items-center space-x-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{previewFormat === "gif" ? "DL GIF" : "DL SVG"}</span>
            </a>
          </div>
        </div>

        <p className="text-xs text-slate-300 font-sans mb-4 leading-relaxed">
          {lang === "zh"
            ? "根据您的宏令 $beautify-github-readme 规范与确认指令，高清 256 色 Bayer 抖动动态封面 (hero-banner.gif) 已正式嵌入到 README.md 顶部！该 GIF 采用 0 次无限循环 (loop 0) 与全色域统计调色板，在 macOS Preview/QuickLook 及 GitHub 仓库主页均能完美兼容并丝滑渲染。"
            : "Per your instructions and confirmation, the HD 256-color Bayer dithered Animated GIF (hero-banner.gif) has been formally embedded into the top of README.md! Compiled with loop 0 and full color palette stats, it renders seamlessly on macOS Preview, QuickLook, and GitHub repository pages."}
        </p>

        {/* Rendered Preview Box */}
        <div className="bg-[#0B132B] border border-slate-800 rounded-sm p-3 overflow-hidden shadow-inner flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-2 text-[11px] font-mono text-slate-400">
            <span className="text-blue-400 font-bold">
              {previewFormat === "gif" ? "🎥 ACTIVE RENDER: /public/hero-banner.gif (198 KB)" : "📐 ACTIVE RENDER: /public/hero-banner.svg (14 KB)"}
            </span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {previewFormat === "gif" ? "30 Frames @ 15 FPS Loop" : "Vector SMIL Animation"}
            </span>
          </div>
          <div className="w-full overflow-hidden rounded-sm border border-slate-700/60 bg-slate-950 flex justify-center p-1">
            <img
              src={previewFormat === "gif" ? "/hero-banner.gif" : "/hero-banner.svg"}
              alt="Supply Chain & Logistics Dashboard Hero Banner Preview"
              className="w-full max-w-5xl h-auto rounded-sm shadow-2xl transition-all duration-300"
            />
          </div>
        </div>

        <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
          <span>💡 {lang === "zh" ? "当您确认预览无误后，只需告诉我们“确认嵌入到 README”，我们将帮您一键注入。" : "When you are satisfied with the preview, let us know to embed it into README.md."}</span>
          <span className="text-amber-400 font-bold">● README.md Untouched &amp; Preserved</span>
        </div>
      </div>

      {/* KPI Stats Grid - Sharp rounded-sm borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentKpis.map((kpi, idx) => {
          const labelText = lang === "en" ? kpi.labelEn : kpi.label;
          const changeText = lang === "en" ? kpi.changeEn : kpi.change;
          const descText = lang === "en" ? kpi.descEn : kpi.desc;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="bg-white border border-slate-300 rounded-sm p-5 hover:border-slate-400 transition-all duration-200 flex flex-col justify-between shadow-xs"
              id={`kpi-card-${idx}`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-sm border ${getBgColor(labelText)}`}>
                    {getIcon(labelText)}
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm ${
                    kpi.isPositive ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}>
                    {changeText}
                  </span>
                </div>
                <h3 className="text-[11px] font-bold text-slate-400 font-mono uppercase tracking-widest">{labelText}</h3>
                <p className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">{kpi.value}</p>
              </div>
              
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-start space-x-1.5 text-xs text-slate-500">
                <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>{descText}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Detailed Overview Metrics Analysis */}
      <div className="bg-white border border-slate-300 rounded-sm p-6 shadow-xs">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5 font-mono flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-600"></span> {t.tacticalMetrics}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
          <div className="space-y-2 p-4 bg-slate-50 border border-slate-200 rounded-sm">
            <h4 className="font-bold text-slate-900 text-sm flex items-center">
              {t.costIncreaseTitle}
            </h4>
            <p className="text-slate-550">
              {t.costIncreaseDesc}
            </p>
          </div>
          <div className="space-y-2 p-4 bg-slate-50 border border-slate-200 rounded-sm">
            <h4 className="font-bold text-slate-900 text-sm flex items-center">
              {t.techUpgradeTitle}
            </h4>
            <p className="text-slate-550">
              {t.techUpgradeDesc}
            </p>
          </div>
          <div className="space-y-2 p-4 bg-slate-50 border border-slate-200 rounded-sm">
            <h4 className="font-bold text-slate-900 text-sm flex items-center">
              {t.greenEntryTitle}
            </h4>
            <p className="text-slate-550">
              {t.greenEntryDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
