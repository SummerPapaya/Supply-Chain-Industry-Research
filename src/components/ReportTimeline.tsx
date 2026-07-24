import { useState } from "react";
import { timelineEvents } from "../data";
import { ArrowLeftRight, Clock, Cpu, Leaf, Globe, CheckCircle2 } from "lucide-react";
import { locales } from "../locales";

interface ReportTimelineProps {
  lang: "zh" | "en";
}

export default function ReportTimeline({ lang }: ReportTimelineProps) {
  const [selectedEventId, setSelectedEventId] = useState<string>(timelineEvents[0].id);
  const [filter, setFilter] = useState<string>("all");
  const t = locales[lang].timeline;

  const getEventIcon = (category: string) => {
    switch (category) {
      case "shipping":
        return <ArrowLeftRight className="w-4 h-4 text-blue-600" />;
      case "esg":
        return <Leaf className="w-4 h-4 text-emerald-600" />;
      case "tech":
        return <Cpu className="w-4 h-4 text-indigo-600" />;
      case "geopolitics":
        return <Globe className="w-4 h-4 text-amber-600" />;
      default:
        return <Clock className="w-4 h-4 text-slate-600" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "shipping":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "esg":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "tech":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "geopolitics":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  const getTimelineLeftBorder = (category: string) => {
    switch (category) {
      case "shipping":
        return "border-l-4 border-blue-500";
      case "esg":
        return "border-l-4 border-emerald-500";
      case "tech":
        return "border-l-4 border-indigo-500";
      case "geopolitics":
        return "border-l-4 border-amber-500";
      default:
        return "border-l-4 border-slate-500";
    }
  };

  const filteredEvents = timelineEvents.filter(
    (evt) => filter === "all" || evt.category === filter
  );

  const activeEvent = timelineEvents.find((e) => e.id === selectedEventId) || timelineEvents[0];

  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0 pb-4 border-b border-slate-350">
        <div>
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600"></span> {t.tagline}
          </h2>
          <p className="text-xl font-bold text-slate-900 tracking-tight mt-1">{t.title}</p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 text-xs font-semibold rounded-sm border transition-all cursor-pointer ${
              filter === "all"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
            }`}
          >
            {t.all}
          </button>
          <button
            onClick={() => setFilter("shipping")}
            className={`px-3 py-1 text-xs font-semibold rounded-sm border transition-all cursor-pointer ${
              filter === "shipping"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
            }`}
          >
            {t.shipping}
          </button>
          <button
            onClick={() => setFilter("esg")}
            className={`px-3 py-1 text-xs font-semibold rounded-sm border transition-all cursor-pointer ${
              filter === "esg"
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
            }`}
          >
            {t.esg}
          </button>
          <button
            onClick={() => setFilter("tech")}
            className={`px-3 py-1 text-xs font-semibold rounded-sm border transition-all cursor-pointer ${
              filter === "tech"
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
            }`}
          >
            {t.tech}
          </button>
          <button
            onClick={() => setFilter("geopolitics")}
            className={`px-3 py-1 text-xs font-semibold rounded-sm border transition-all cursor-pointer ${
              filter === "geopolitics"
                ? "bg-amber-600 text-white border-amber-600"
                : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
            }`}
          >
            {t.geopolitics}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Events Stream Left */}
        <div className="lg:col-span-5 space-y-3 max-h-[500px] overflow-y-auto pr-2" id="timeline-events-list">
          {filteredEvents.length === 0 ? (
            <div className="bg-slate-50 border border-slate-200 rounded-sm p-8 text-center text-slate-400 text-xs">
              {t.noEvents}
            </div>
          ) : (
            filteredEvents.map((evt) => {
              const displayTitle = lang === "en" ? evt.titleEn : evt.title;
              const displayBadge = lang === "en" ? evt.badgeEn : evt.badge;
              const displaySummary = lang === "en" ? evt.summaryEn : evt.summary;

              return (
                <button
                   key={evt.id}
                   onClick={() => setSelectedEventId(evt.id)}
                   className={`w-full p-4 border rounded-sm cursor-pointer transition-all duration-200 text-left relative flex flex-col justify-between ${
                     selectedEventId === evt.id
                       ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                       : `bg-white text-slate-800 border-slate-300 hover:bg-slate-50 ${getTimelineLeftBorder(evt.category)}`
                   }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-[11px] font-mono font-bold ${
                      selectedEventId === evt.id ? "text-slate-300" : "text-slate-400"
                    }`}>
                      {evt.date}
                    </span>
                    <span className={`px-2 py-0.5 text-[9px] font-mono font-bold rounded-sm border ${
                      selectedEventId === evt.id
                        ? "bg-white/10 text-white border-white/20"
                        : getCategoryColor(evt.category)
                    }`}>
                      {displayBadge}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold tracking-tight line-clamp-1">{displayTitle}</h4>
                  <p className={`text-xs mt-2 line-clamp-2 ${
                    selectedEventId === evt.id ? "text-slate-300" : "text-slate-500"
                  }`}>
                    {displaySummary}
                  </p>
                </button>
              );
            })
          )}
        </div>

        {/* Detailed Stream Content Panel Right */}
        <div className="lg:col-span-7 bg-white border border-slate-300 rounded-sm p-6 min-h-[380px] flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex flex-wrap justify-between items-center pb-4 border-b border-slate-200 gap-2">
              <div className="flex items-center space-x-3.5">
                <div className="p-2 bg-slate-50 border border-slate-200 rounded-sm">
                  {getEventIcon(activeEvent.category)}
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-400">{activeEvent.date}</span>
                  <h3 className="text-sm font-black text-slate-900 sm:text-base">
                    {lang === "en" ? activeEvent.titleEn : activeEvent.title}
                  </h3>
                </div>
              </div>
              <span className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-sm border ${getCategoryColor(activeEvent.category)}`}>
                {lang === "en" ? activeEvent.badgeEn : activeEvent.badge}
              </span>
            </div>

            <div className="mt-5 space-y-4 text-xs sm:text-sm text-slate-705">
              <div className="bg-slate-50 border-l-4 border-blue-600 p-4 rounded-sm font-medium leading-relaxed italic text-slate-750">
                &ldquo;{lang === "en" ? activeEvent.summaryEn : activeEvent.summary}&rdquo;
              </div>
              
              <div className="leading-relaxed space-y-3">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider">{t.analysisTitle}</h4>
                <p className="text-slate-650 leading-7 text-xs sm:text-sm">
                  {lang === "en" ? activeEvent.contentEn : activeEvent.content}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200">
            <div className="flex items-center space-x-2 text-xs text-blue-600 font-bold">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>{t.verified}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
