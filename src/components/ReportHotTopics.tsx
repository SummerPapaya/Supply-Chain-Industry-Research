import { useState } from "react";
import { hotTopics } from "../data";
import { AlertCircle, ArrowUpRight, Scale, Cpu, Activity } from "lucide-react";
import { locales } from "../locales";

interface ReportHotTopicsProps {
  lang: "zh" | "en";
}

export default function ReportHotTopics({ lang }: ReportHotTopicsProps) {
  const [activeTab, setActiveTab] = useState<string>(hotTopics[0].id);
  const t = locales[lang].topics;

  const getTopicIcon = (id: string) => {
    if (id.includes("csddd")) return <Scale className="w-5 h-5 text-emerald-600" />;
    if (id.includes("ai")) return <Cpu className="w-5 h-5 text-blue-600" />;
    return <Activity className="w-5 h-5 text-indigo-600" />;
  };

  const getImpactBadge = (level: string) => {
    switch (level) {
      case "High":
        return <span className="px-2.5 py-0.5 text-xs font-semibold bg-red-100 text-red-800 rounded-full font-mono">{t.impactCritical}</span>;
      case "Medium":
        return <span className="px-2.5 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full font-mono">{t.impactModerate}</span>;
      default:
        return <span className="px-2.5 py-0.5 text-xs font-semibold bg-slate-100 text-slate-700 rounded-full font-mono">{t.impactLow}</span>;
    }
  };

  const currentTopic = hotTopics.find((topic) => topic.id === activeTab) || hotTopics[0];

  return (
    <div className="space-y-6 text-left">
      <div>
        <h2 className="text-lg font-bold text-slate-900 tracking-tight">{t.title}</h2>
        <p className="text-xs text-slate-500 font-mono">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Navigation Rail - 4 Columns */}
        <div className="lg:col-span-4 flex flex-col space-y-2">
          {hotTopics.map((topic) => {
            const isSelected = activeTab === topic.id;
            const displayTitle = lang === "en" ? topic.titleEn : topic.title;
            const displaySummary = lang === "en" ? topic.summaryEn : topic.summary;

            return (
              <button
                key={topic.id}
                onClick={() => setActiveTab(topic.id)}
                className={`p-4 rounded-sm border text-left cursor-pointer transition-all flex items-start space-x-3 duration-200 ${
                  isSelected
                    ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                    : "bg-white text-slate-800 border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                <div className={`p-2 rounded-sm shrink-0 mt-0.5 ${
                  isSelected ? "bg-white/10" : "bg-slate-50"
                }`}>
                  {getTopicIcon(topic.id)}
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-relaxed line-clamp-2 md:text-sm">{displayTitle}</h4>
                  <p className={`text-xs mt-1.5 line-clamp-1 ${
                    isSelected ? "text-slate-400" : "text-slate-500"
                  }`}>
                    {displaySummary}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Content Panel - 8 Columns */}
        <div className="lg:col-span-8 bg-white border border-slate-300 rounded-sm p-6 flex flex-col justify-between shadow-xs">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <span className="p-1.5 bg-slate-50 rounded-sm border border-slate-200">
                  {getTopicIcon(currentTopic.id)}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">{t.judgeId}: #{currentTopic.id}</span>
              </div>
              {getImpactBadge(currentTopic.impactLevel)}
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                {lang === "en" ? currentTopic.titleEn : currentTopic.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-655 leading-relaxed">
                {lang === "en" ? currentTopic.summaryEn : currentTopic.summary}
              </p>
            </div>

            {/* Tactical Key Takeaways */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase flex items-center gap-1">
                <AlertCircle className="w-4 h-4 text-slate-900" />
                {t.adviceTitle}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {(lang === "en" ? currentTopic.keyPointsEn : currentTopic.keyPoints).map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-slate-900 font-bold mr-2 mt-0.5 font-mono">0{idx + 1}.</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Regulation / Impact Clause */}
            {(lang === "en" ? currentTopic.regulationDetailsEn : currentTopic.regulationDetails) && (
              <div className="p-4 bg-slate-50 rounded-sm border border-slate-200">
                <h5 className="font-bold text-slate-800 text-xs flex items-center mb-1.5 gap-1">
                  <Scale className="w-4 h-4 text-slate-500" />
                  {t.latestRegulation}
                </h5>
                <p className="text-xs text-slate-550 leading-relaxed">
                  {lang === "en" ? currentTopic.regulationDetailsEn : currentTopic.regulationDetails}
                </p>
              </div>
            )}

          </div>

          <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
            <span>{t.advisoryTeam}</span>
            <span className="flex items-center text-indigo-600 cursor-pointer hover:underline font-bold">
              {t.getPDF} <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
