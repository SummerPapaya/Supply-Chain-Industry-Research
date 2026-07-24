import { locales } from "../locales";
import { FileText, Calendar } from "lucide-react";

interface ReportHeaderProps {
  lang: "zh" | "en";
  setLang: (lang: "zh" | "en") => void;
}

export default function ReportHeader({ lang, setLang }: ReportHeaderProps) {
  const t = locales[lang].header;

  return (
    <header className="border-b border-slate-300 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="bg-blue-600 text-white px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase rounded-sm">
                {t.confidential}
              </span>
              <span className="text-slate-400 text-[10px] font-semibold tracking-widest uppercase">
                {t.subline}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2 flex-wrap">
              {t.title}
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-sm border border-blue-200 uppercase font-mono font-bold tracking-wider">
                {t.version}
              </span>
            </h1>
            <p className="text-slate-500 font-medium mt-1 uppercase tracking-wider text-[11px] font-mono">
              {t.period}
            </p>
          </div>
          
          <div className="flex flex-row items-center justify-between md:justify-end gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 flex-wrap">
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

            <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-sm border border-slate-200">
              <Calendar className="w-3.5 h-3.5 text-slate-450" />
              <span>{t.reportPeriod}</span>
            </div>
            
            <button 
              onClick={() => window.print()}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-sm hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
              id="print-report-btn"
            >
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              <span>{t.printPdf}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
