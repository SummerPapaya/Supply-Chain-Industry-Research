import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from "recharts";
import { freightRateTrends as defaultFreightRateTrends, routeGrowthRates as defaultRouteGrowthRates, techAdoptions as defaultTechAdoptions } from "../data";
import { Info, BarChart2, DollarSign, Zap } from "lucide-react";
import { locales } from "../locales";

interface ReportPerformanceProps {
  lang: "zh" | "en";
  freightRateTrendsData?: typeof defaultFreightRateTrends;
  routeGrowthRatesData?: typeof defaultRouteGrowthRates;
  techAdoptionsData?: typeof defaultTechAdoptions;
  lastUpdated?: string;
  isLive?: boolean;
}

export default function ReportPerformance({
  lang,
  freightRateTrendsData,
  routeGrowthRatesData,
  techAdoptionsData,
  lastUpdated,
  isLive = true
}: ReportPerformanceProps) {
  const freightTrends = freightRateTrendsData || defaultFreightRateTrends;
  const growthRates = routeGrowthRatesData || defaultRouteGrowthRates;
  const adoptions = techAdoptionsData || defaultTechAdoptions;

  const t = locales[lang].performance;

  // Custom detailed tooltips to respect the current language
  const renderAreaTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700 p-3 rounded-md text-slate-100 font-mono text-xs shadow-lg">
          <p className="font-bold border-b border-slate-700 pb-1 mb-1.5 text-slate-350">{label}</p>
          {payload.map((p: any, idx: number) => (
            <p key={idx} style={{ color: p.color }} className="flex justify-between gap-4 font-semibold mt-0.5">
              <span>{p.name}:</span>
              <span>${p.value}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderBarTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700 p-3 rounded-md text-slate-100 font-mono text-xs shadow-lg">
          <p className="font-bold border-b border-slate-700 pb-1 mb-1.5 text-slate-350">{label}</p>
          {payload.map((p: any, idx: number) => (
            <p key={idx} style={{ color: p.color }} className="flex justify-between gap-4 font-semibold mt-0.5">
              <span>{p.name}:</span>
              <span>{p.value > 0 ? `+${p.value}%` : `${p.value}%`}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8 text-left">
      {/* Live Stream Status Banner */}
      <div className="bg-slate-50 border border-slate-300 rounded-sm p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            {isLive ? (
              <>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </>
            ) : (
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-400"></span>
            )}
          </span>
          <div>
            <span className="text-[10px] font-black text-slate-400 font-mono tracking-widest uppercase">
              {t.statusBanner}
            </span>
            <p className="text-xs font-bold text-slate-800">
              {isLive ? t.liveActive : t.livePaused}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-mono text-slate-500">
          <div>
            <span className="text-slate-400 font-medium">{t.freqLabel}</span>{" "}
            <span className="text-slate-900 font-bold">{t.freqValue}</span>
          </div>
          <div className="hidden sm:block text-slate-300">|</div>
          <div>
            <span className="text-slate-400 font-medium">{t.lastSyncLabel}</span>{" "}
            <span className="text-blue-600 font-bold">{lastUpdated || "2026-06-08 09:25:27"} UTC</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-slate-900 tracking-tight">{t.h1Analysis}</h2>
        <p className="text-xs text-slate-500 font-mono">{t.h1AnalysisSub}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Chart 1: container freight rate */}
        <div className="bg-white border border-slate-200 rounded-sm p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-indigo-50 text-indigo-700 rounded-sm border border-indigo-200">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{t.freightTitle}</h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[9px] text-emerald-600 font-semibold font-mono tracking-wider uppercase">
                      {t.tickerTick}
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-medium text-slate-400">{t.unitLabel}</span>
            </div>
            
            <p className="text-xs text-slate-550 mb-4 leading-relaxed">
              {lang === "zh" ? (
                <>受红海危机常态化及全球港口二次拥堵（如新加坡港排队积压）叠加，<b>2026年上半年WCI综合指数暴涨</b>，高位盘整于 4,800 美元之上，远超2025同期历史水平。</>
              ) : (
                <>Rerouting friction and regional hubs congestion (like Singapore backlogs) have coupled to maintain **stark container levels**. Drewry WCI spots hover above $4,800/FEU, exceedingly higher than average levels in 2025.</>
              )}
            </p>

            <div className="h-64 sm:h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={freightTrends}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="color2026" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="color2025" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey={lang === "en" ? "monthEn" : "month"} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} />
                  <Tooltip content={renderAreaTooltip} />
                  <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ fontSize: '11px', fontWeight: '500' }} />
                  <Area type="monotone" name={t.year2026} dataKey="rate2026" stroke="#4f46e5" strokeWidth={2.5} fillOpacity={1} fill="url(#color2026)" />
                  <Area type="monotone" name={t.year2025} dataKey="rate2025" stroke="#94a3b8" strokeWidth={1.5} fillOpacity={1} fill="url(#color2025)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-slate-105 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1.5 text-[10px] text-slate-400">
            <div className="flex items-center space-x-1.5">
              <Info className="w-3.5 h-3.5 text-slate-350 shrink-0" />
              <span>{t.sourceWci}</span>
            </div>
            <span className="font-mono text-[9px] text-slate-400">{t.sourceWciSub}</span>
          </div>
        </div>

        {/* Chart 2: Air vs Ocean growth */}
        <div className="bg-white border border-slate-200 rounded-sm p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-blue-50 text-blue-700 rounded-sm border border-blue-200">
                  <BarChart2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{t.growthTitle}</h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span className="text-[9px] text-blue-650 font-semibold font-mono tracking-wider uppercase">
                      {t.weeklyBatch}
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-medium text-slate-400">{t.durationLabel}</span>
            </div>

            <p className="text-xs text-slate-550 mb-4 leading-relaxed">
              {lang === "zh" ? (
                <>中欧、中美航线<b>呈现极端的“陆海分化”</b>：航空货运动能因跨境电商突进在亚欧线大涨约22.4%，而传统海运量受绕道阻滞及班期不稳拖累甚至出现轻微萎缩。</>
              ) : (
                <>High-priority flows show an **asymmetric division**: Air payload capacities rose 22.4% on European lanes due to cross-border e-commerce giants, while sea cargo volumes slightly contracted from scheduling adjustments.</>
              )}
            </p>

            <div className="h-64 sm:h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={growthRates}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey={lang === "en" ? "routeEn" : "route"} tick={{ fontSize: 9.5, fill: '#64748b' }} axisLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} />
                  <Tooltip content={renderBarTooltip} />
                  <Legend verticalAlign="top" height={36} iconType="square" wrapperStyle={{ fontSize: '11px', fontWeight: '500' }} />
                  <Bar name={t.airLabel} dataKey="airGrowth" fill="#ef4444" radius={[2, 2, 0, 0]} />
                  <Bar name={t.oceanLabel} dataKey="oceanGrowth" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-105 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1.5 text-[10px] text-slate-400">
            <div className="flex items-center space-x-1.5">
              <Info className="w-3.5 h-3.5 text-slate-350 shrink-0 mt-0.5" />
              <span>{t.sourceIata}</span>
            </div>
            <span className="font-mono text-[9px] text-slate-400">{t.sourceIataSub}</span>
          </div>
        </div>

      </div>

      {/* Chart 3: Tech adoption performance list */}
      <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-emerald-50 text-emerald-700 rounded-sm border border-emerald-200">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">{t.techTitle}</h3>
              <p className="text-[9px] text-slate-400 font-mono uppercase tracking-widest mt-0.5">
                {t.techSub}
              </p>
            </div>
          </div>
          <span className="text-[10px] bg-slate-100 px-2.5 py-1 rounded-sm border border-slate-250 font-mono text-slate-650">
            {t.techLastChecked}
          </span>
        </div>
        
        <p className="text-xs text-slate-550 mb-6 leading-relaxed max-w-4xl">
          {t.techDesc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {adoptions.map((tech, i) => (
            <div key={i} className="space-y-2 border border-slate-200 rounded-sm p-4 bg-slate-50">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-800">{lang === "en" ? tech.techEn : tech.tech}</span>
                <span className="text-xs font-mono font-semibold text-slate-500">
                  {t.techUsage} <b className="text-slate-900 text-sm font-extrabold">{tech.adoptionRate}%</b>
                </span>
              </div>
              
              <div className="relative pt-1">
                {/* Adoption rate progress bar */}
                <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-200 w-full">
                  <div 
                    style={{ width: `${tech.adoptionRate}%` }} 
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-slate-950 transition-all duration-500"
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center text-[11px] text-slate-500 mt-2">
                <span>{t.techImprovement}</span>
                <span className="text-emerald-600 font-mono font-bold">+{tech.efficiencyImprovement}%{t.techImprovementSuffix}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1 text-[10px] text-slate-400 font-mono">
          <span>{t.techFooter}</span>
          <span>{t.techFooterSub}</span>
        </div>
      </div>
    </div>
  );
}
