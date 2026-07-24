import { locales } from "../locales";
import { FileText, Calendar, BookOpen, Clock, ChevronDown } from "lucide-react";
import { PeriodKey, ReportingPeriod } from "../types";
import { periodsData } from "../data";

interface ReportHeaderProps {
  lang: "zh" | "en";
  setLang: (lang: "zh" | "en") => void;
  periodKey: PeriodKey;
  setPeriodKey: (key: PeriodKey) => void;
  onOpenReadme?: () => void;
}

export default function ReportHeader({
  lang,
  setLang,
  periodKey,
  setPeriodKey,
  onOpenReadme
}: ReportHeaderProps) {
  const t = locales[lang].header;
  const currentPeriod: ReportingPeriod = periodsData[periodKey] || periodsData["2026_H1"];

  return (
    <header className="border-b border-slate-300 bg-white sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1.5 flex-wrap">
              <span className="bg-blue-600 text-white px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase rounded-sm">
                {t.confidential}
              </span>
              <span className="text-slate-400 text-[10px] font-semibold tracking-widest uppercase">
                {t.subline}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold font-mono rounded-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                {lang === "zh" ? `已选窗口: ${currentPeriod.label}` : `Active: ${currentPeriod.labelEn}`}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2 flex-wrap">
              {lang === "zh" ? `${currentPeriod.code} 全球供应链行业报告` : `${currentPeriod.code} Global Supply Chain Report`}
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-sm border border-blue-200 uppercase font-mono font-bold tracking-wider">
                {t.version}
              </span>
            </h1>
            <p className="text-slate-500 font-medium mt-1 uppercase tracking-wider text-[11px] font-mono flex items-center gap-2">
              <span>{t.period.replace("2026年6月30日", currentPeriod.asOfDate)}</span>
            </p>
          </div>
          
          <div className="flex flex-row items-center justify-between md:justify-end gap-3 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 flex-wrap">
            {/* Period Switcher Selector */}
            <div className="flex items-center bg-slate-100 p-1 rounded-md border border-slate-300">
              <div className="flex items-center space-x-1.5 px-2 text-slate-600 text-[11px] font-bold font-mono">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span className="hidden sm:inline">{t.switchPeriod || "报告期"}:</span>
              </div>
              <div className="relative inline-block">
                <select
                  value={periodKey}
                  onChange={(e) => setPeriodKey(e.target.value as PeriodKey)}
                  className="bg-white text-slate-900 border border-slate-300 rounded px-2.5 py-1 text-xs font-bold font-mono focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer pr-7 shadow-xs"
                  id="period-select-header"
                >
                  {Object.values(periodsData).map((p) => (
                    <option key={p.id} value={p.id}>
                      {lang === "zh" ? `${p.label} (${p.reportPeriodText})` : `${p.labelEn} (${p.reportPeriodTextEn})`}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2 top-2 pointer-events-none" />
              </div>
            </div>

            {/* README Preview button */}
            {onOpenReadme && (
              <button
                onClick={onOpenReadme}
                className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-300 rounded-sm transition-colors shadow-xs cursor-pointer"
                id="readme-modal-btn"
                title="View GitHub README Preview"
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span className="hidden sm:inline">{t.readmeBtn || "README / Docs"}</span>
                <span className="sm:hidden">README</span>
              </button>
            )}

            {/* Language switch button */}
            <div className="flex border border-slate-300 rounded-sm p-0.5 bg-slate-150 shadow-xs">
              <button 
                onClick={() => setLang("zh")}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-sm transition-all cursor-pointer ${
                  lang === "zh" ? "bg-slate-900 text-white shadow-xs" : "text-slate-600 hover:text-slate-950"
                }`}
              >
                中文
              </button>
              <button 
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-sm transition-all cursor-pointer ${
                  lang === "en" ? "bg-slate-900 text-white shadow-xs" : "text-slate-600 hover:text-slate-950"
                }`}
              >
                EN
              </button>
            </div>

            <button 
              onClick={() => window.print()}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-sm hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
              id="print-report-btn"
            >
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">{t.printPdf}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
