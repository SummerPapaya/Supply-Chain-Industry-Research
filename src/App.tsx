/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from "react";
import ReportHeader from "./components/ReportHeader";
import ReportOverview from "./components/ReportOverview";
import ReportTimeline from "./components/ReportTimeline";
import ReportPerformance from "./components/ReportPerformance";
import SectorInsights from "./components/SectorInsights";
import DigitalTransformation from "./components/DigitalTransformation";
import ReportHotTopics from "./components/ReportHotTopics";
import FutureOutlook from "./components/FutureOutlook";
import InteractiveQA from "./components/InteractiveQA";
import ReadmeModal from "./components/ReadmeModal";

import { kpis, freightRateTrends, routeGrowthRates, techAdoptions, getPeriodData, periodsData } from "./data";
import { PeriodKey, ReportingPeriod } from "./types";
import { locales } from "./locales";
import { Compass, Clock, BarChart3, Sliders, Cpu, Target, Sparkles, CloudLightning, Calendar, RefreshCw, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const [isReadmeOpen, setIsReadmeOpen] = useState<boolean>(false);

  // Period window state
  const [periodKey, setPeriodKey] = useState<PeriodKey>("2026_H1");
  const activePeriod: ReportingPeriod = getPeriodData(periodKey);

  // Live and Periodic states
  const [isLive, setIsLive] = useState<boolean>(true);
  const [mockLatency, setMockLatency] = useState<number>(34);
  const [currentTime, setCurrentTime] = useState<string>("2026-06-08 09:25:27");
  const [kpiData, setKpiData] = useState(activePeriod.kpis);
  const [freightRateData, setFreightRateData] = useState(activePeriod.freightRateTrends);
  const [routeGrowthData, setRouteGrowthData] = useState(activePeriod.routeGrowthRates);
  const [techAdoptionData, setTechAdoptionData] = useState(activePeriod.techAdoptions);
  const [isPulling, setIsPulling] = useState<boolean>(false);
  const [periodToast, setPeriodToast] = useState<boolean>(false);

  const tTelemetry = locales[lang].telemetry;
  const tNotification = locales[lang].notification;
  const tTabs = locales[lang].tabs;
  const tDisclaimer = locales[lang].disclaimer;
  const tQa = locales[lang].qa;
  const tFooter = locales[lang].footer;

  // Synchronize datasets whenever periodKey changes
  useEffect(() => {
    const periodInfo = getPeriodData(periodKey);
    setKpiData(periodInfo.kpis);
    setFreightRateData(periodInfo.freightRateTrends);
    setRouteGrowthData(periodInfo.routeGrowthRates);
    setTechAdoptionData(periodInfo.techAdoptions);
    
    // Show quick confirmation toast for period change
    setPeriodToast(true);
    const timer = setTimeout(() => setPeriodToast(false), 3000);
    return () => clearTimeout(timer);
  }, [periodKey]);

  // UTC Running Clock - Updated every second to maintain exact real-time reliability
  useEffect(() => {
    const clock = setInterval(() => {
      const d = new Date();
      const pad = (n: number) => n.toString().padStart(2, "0");
      const formatted = `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`;
      setCurrentTime(formatted);
    }, 1000);
    return () => clearInterval(clock);
  }, []);

  // Live High-Frequency Price Ticker Fluctuation formula
  const performDataTick = useCallback((customNow?: number) => {
    const now = customNow || Date.now();
    setMockLatency(Math.floor(18 + Math.random() * 21));

    const currentPeriodInfo = getPeriodData(periodKey);
    const baseWCI = currentPeriodInfo.wciBaseRate;
    const baseSCSI = currentPeriodInfo.scsiBaseIndex;
    const baseEsg = currentPeriodInfo.esgComplianceRate;

    // WCI index fluctuation around selected period base
    const driftWCI = Math.floor(Math.sin(now / 15000) * 16 + Math.cos(now / 7000) * 5);
    const updatedWCI = baseWCI + driftWCI;

    // SCSI pressure index fluctuation
    const driftSCSI = parseFloat((Math.sin(now / 19000) * 0.04 + Math.cos(now / 8000) * 0.01).toFixed(2));
    const updatedSCSI = parseFloat((baseSCSI + driftSCSI).toFixed(2));

    // ESG compliance rate
    const driftEsg = parseFloat((Math.cos(now / 22000) * 0.18).toFixed(2));
    const updatedEsg = parseFloat((baseEsg + driftEsg).toFixed(1));

    // Sync state for primary numerical displays (KPI grid)
    setKpiData(prev => {
      if (!prev || prev.length < 4) return currentPeriodInfo.kpis;
      return prev.map((kpi, idx) => {
        if (idx === 0) {
          return { 
            ...kpi, 
            value: `$${updatedWCI.toLocaleString()}`, 
            change: `${driftWCI >= 0 ? "+" : ""}${driftWCI} 美元/FEU (4s 即时轮询)`,
            changeEn: `${driftWCI >= 0 ? "+" : ""}${driftWCI} USD/FEU (4s Spot Sync)`
          };
        }
        if (idx === 2) {
          return { 
            ...kpi, 
            value: `${updatedEsg}%`, 
            change: `${driftEsg >= 0 ? "+" : ""}${driftEsg}% 可验证碳证明`,
            changeEn: `${driftEsg >= 0 ? "+" : ""}${driftEsg}% Verified carbon proof`
          };
        }
        if (idx === 3) {
          return { 
            ...kpi, 
            value: updatedSCSI.toString(), 
            change: driftSCSI >= 0 ? "压力微增" : "压力稳定",
            changeEn: driftSCSI >= 0 ? "Pressure slightly up" : "Pressure stable"
          };
        }
        return kpi;
      });
    });

    // Update Recharts Area Chart active period trend value
    setFreightRateData(prev => prev.map((item, idx) => {
      if (idx === prev.length - 1) { // last month in trend is live
        return { ...item, rate2026: updatedWCI };
      }
      return item;
    }));

    // Update Route Growth Rates Chart slightly
    setRouteGrowthData(prev => prev.map((item, idx) => {
      const airMod = parseFloat((Math.sin(now / 9000 + idx) * 0.12).toFixed(1));
      const oceanMod = parseFloat((Math.cos(now / 11000 + idx) * 0.05).toFixed(1));
      const baseAir = currentPeriodInfo.routeGrowthRates[idx]?.airGrowth || item.airGrowth;
      const baseOcean = currentPeriodInfo.routeGrowthRates[idx]?.oceanGrowth || item.oceanGrowth;
      return {
        ...item,
        airGrowth: parseFloat((baseAir + airMod).toFixed(1)),
        oceanGrowth: parseFloat((baseOcean + oceanMod).toFixed(1))
      };
    }));

    // Update Tech Adoption Monthly levels slightly
    setTechAdoptionData(prev => prev.map((item, idx) => {
      const rateMod = parseFloat((Math.sin(now / 13000 + idx) * 0.08).toFixed(1));
      const effMod = parseFloat((Math.cos(now / 15000 + idx) * 0.04).toFixed(1));
      const baseAdopt = currentPeriodInfo.techAdoptions[idx]?.adoptionRate || item.adoptionRate;
      const baseEff = currentPeriodInfo.techAdoptions[idx]?.efficiencyImprovement || item.efficiencyImprovement;
      return {
        ...item,
        adoptionRate: Math.min(100, Math.max(0, parseFloat((baseAdopt + rateMod).toFixed(1)))),
        efficiencyImprovement: Math.min(100, Math.max(0, parseFloat((baseEff + effMod).toFixed(1))))
      };
    }));

  }, [periodKey]);

  // Interval-timer effect trigger (every 4 seconds)
  useEffect(() => {
    if (!isLive) return;
    performDataTick(); // Trigger initial tick
    const interval = setInterval(() => {
      performDataTick();
    }, 4000);
    return () => clearInterval(interval);
  }, [isLive, performDataTick]);

  // Handle immediate manual force pull gesture
  const handleForcePull = () => {
    if (!isLive) return;
    setIsPulling(true);
    setMockLatency(102); // Simulated route search latency
    setTimeout(() => {
      performDataTick(Date.now() + 12000); // Shift time to make fluctuation visible
      setIsPulling(false);
    }, 450);
  };

  const tabs = [
    {
      id: "overview",
      label: tTabs.overview,
      icon: <Compass className="w-4 h-4" />
    },
    {
      id: "timeline",
      label: tTabs.timeline,
      icon: <Clock className="w-4 h-4" />
    },
    {
      id: "performance",
      label: tTabs.performance,
      icon: <BarChart3 className="w-4 h-4" />
    },
    {
      id: "sectors",
      label: tTabs.sectors,
      icon: <Sliders className="w-4 h-4" />
    },
    {
      id: "digital",
      label: tTabs.digital,
      icon: <Cpu className="w-4 h-4" />
    },
    {
      id: "topics",
      label: tTabs.topics,
      icon: <Target className="w-4 h-4" />
    },
    {
      id: "outlook",
      label: tTabs.outlook,
      icon: <Sparkles className="w-4 h-4" />
    }
  ];

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <ReportOverview kpiData={kpiData} periodKey={periodKey} periodData={activePeriod} lang={lang} />;
      case "timeline":
        return <ReportTimeline lang={lang} />;
      case "performance":
        return (
          <ReportPerformance
            freightRateTrendsData={freightRateData}
            routeGrowthRatesData={routeGrowthData}
            techAdoptionsData={techAdoptionData}
            lastUpdated={currentTime}
            isLive={isLive}
            lang={lang}
          />
        );
      case "sectors":
        return <SectorInsights lang={lang} />;
      case "digital":
        return <DigitalTransformation lang={lang} />;
      case "topics":
        return <ReportHotTopics lang={lang} />;
      case "outlook":
        return <FutureOutlook lang={lang} />;
      default:
        return <ReportOverview kpiData={kpiData} periodKey={periodKey} periodData={activePeriod} lang={lang} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <ReportHeader 
        lang={lang} 
        setLang={setLang} 
        periodKey={periodKey} 
        setPeriodKey={setPeriodKey} 
        onOpenReadme={() => setIsReadmeOpen(true)} 
      />
      <ReadmeModal isOpen={isReadmeOpen} onClose={() => setIsReadmeOpen(false)} lang={lang} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Reporting Period Quick Selector & Banner */}
        <div className="bg-slate-900 text-white border border-slate-800 rounded-sm p-4 shadow-sm text-left">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-sm">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                    {lang === "zh" ? "报告期选择 (季度 / 半年窗口)" : "Reporting Period Window"}
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono px-1.5 py-0.2 rounded font-bold">
                    {lang === "zh" ? "实时同步" : "Live Sync"}
                  </span>
                </div>
                <p className="text-sm font-extrabold text-white mt-0.5">
                  {lang === "zh" ? `当前查看: ${activePeriod.label} (${activePeriod.reportPeriodText})` : `Viewing: ${activePeriod.labelEn} (${activePeriod.reportPeriodTextEn})`}
                </p>
              </div>
            </div>

            {/* Quick Period Switch Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {Object.values(periodsData).map((p) => {
                const isActive = p.id === periodKey;
                return (
                  <button
                    key={p.id}
                    onClick={() => setPeriodKey(p.id)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold rounded-sm transition-all cursor-pointer border ${
                      isActive
                        ? "bg-blue-600 text-white border-blue-400 shadow-sm"
                        : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    {lang === "zh" ? p.label : p.labelEn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Period Change Confirmation Toast */}
          <AnimatePresence>
            {periodToast && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2 text-xs text-emerald-400 font-mono"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {lang === "zh" 
                    ? `已成功切换至 [${activePeriod.label}]！所有运价指数、行业KPI及深度洞察已按该周期重新计算并实时呈现。` 
                    : `Switched to [${activePeriod.labelEn}]! All freight indices, KPIs, and analysis metrics have been dynamically re-aligned.`}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Telemetry MUX Controller Bar */}
        <div className="bg-white border border-slate-300 rounded-sm p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xs">
          <div className="flex items-center gap-3 text-left">
            <div className="relative flex h-3 w-3 shrink-0">
              {isLive ? (
                <>
                  <span className={`${isPulling ? "animate-ping" : ""} absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${isPulling ? "bg-blue-500" : "bg-emerald-500"}`}></span>
                </>
              ) : (
                <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-400"></span>
              )}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded-sm border ${
                  isLive ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-slate-100 text-slate-550 border-slate-200"
                }`}>
                  {tTelemetry.muxFeed} {isLive ? tTelemetry.liveStreaming : tTelemetry.tickerMuted}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {tTelemetry.latency} {mockLatency}ms ({tTelemetry.sourceSecure})
                </span>
              </div>
              <p className="text-xs font-bold text-slate-800 mt-1">
                {tTelemetry.monitoringTitle}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
            <div className="bg-slate-50 border border-slate-200 rounded-sm px-3 py-1.5 text-xs font-mono font-bold text-slate-700 flex items-center gap-1.5">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{tTelemetry.systemTime}</span>
              <span className="text-slate-900">{currentTime}</span>
            </div>
            
            <button
              onClick={() => setIsLive(!isLive)}
              className={`px-3 py-1.5 text-xs font-bold font-mono uppercase tracking-wide cursor-pointer border rounded-sm transition-all duration-200 shadow-xs ${
                isLive
                  ? "bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100 hover:border-amber-400"
                  : "bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100 hover:border-emerald-400"
              }`}
            >
              {isLive ? tTelemetry.pauseButton : tTelemetry.resumeButton}
            </button>

            <button
              onClick={handleForcePull}
              className={`bg-slate-950 text-white border border-slate-955 hover:bg-slate-850 transition-all duration-200 px-3 py-1.5 text-xs font-bold font-mono uppercase tracking-wide cursor-pointer rounded-sm shadow-xs flex items-center gap-1 ${
                (!isLive || isPulling) ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isLive || isPulling}
              title={!isLive ? tTelemetry.pausePrompt : tTelemetry.pulling}
            >
              <CloudLightning className={`w-3.5 h-3.5 ${isPulling ? "animate-bounce" : ""}`} />
              <span>{isPulling ? tTelemetry.pulling : tTelemetry.pullButton}</span>
            </button>
          </div>
        </div>
        
        {/* Quick Notification alert */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-sm p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-xs text-left">
          <div className="flex items-center space-x-3">
            <span className="p-1 px-2.5 bg-indigo-500 text-[10px] font-mono tracking-widest uppercase rounded-sm font-extrabold text-white">
              {tNotification.tag}
            </span>
            <div>
              <p className="text-xs font-bold font-mono tracking-wide text-slate-100 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                {tNotification.title}
              </p>
              <p className="text-[11px] text-slate-350 leading-relaxed">
                {tNotification.desc}
              </p>
            </div>
          </div>
          <button 
            onClick={() => {
              const element = document.getElementById("ai-search-assistant");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[11px] font-bold text-indigo-300 bg-white/10 hover:bg-white/20 transition-colors uppercase font-mono px-3 py-1.5 rounded-sm border border-indigo-450/40 self-stretch sm:self-auto text-center cursor-pointer"
          >
            {tNotification.button}
          </button>
        </div>

        {/* Tab List selectors */}
        <div className="border-b border-slate-200">
          <div className="flex space-x-2 overflow-x-auto pb-px scrollbar-none">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 border-b-2 text-xs font-bold whitespace-nowrap transition-all duration-250 cursor-pointer ${
                    isSelected
                      ? "border-slate-950 text-slate-950 font-extrabold"
                      : "border-transparent text-slate-500 hover:text-slate-850 hover:border-slate-300"
                  }`}
                >
                  {tab.icon}
                  <div className="text-left">
                    <p className="text-[12px] tracking-tight">{tab.label}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic content rendering with motion animation */}
        <div id="report-main-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {renderActiveTabContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Informative Audit Note Box for Credibility Preservation */}
        <div className="bg-slate-100 border border-slate-300 rounded-sm p-4 text-xs text-slate-655 leading-relaxed text-left space-y-2 shadow-inner">
          <span className="inline-block bg-slate-800 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded-sm uppercase">
            {tDisclaimer.title}
          </span>
          <p>
            {tDisclaimer.para1}
          </p>
          <p className="text-[11px] text-slate-500 font-mono">
            {tDisclaimer.para2}
          </p>
        </div>

        {/* Permanent Interactive Q&A Assistant at the bottom of the dashboard report */}
        <div id="ai-search-assistant" className="pt-8 border-t border-slate-200">
          <div className="flex flex-col space-y-1 mb-5 text-left">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center">
              <Sparkles className="w-5 h-5 text-indigo-600 mr-2 animate-pulse" />
              {tQa.customSearchHeader}
            </h2>
            <p className="text-xs text-slate-500 font-mono">
              {tQa.customSearchSub}
            </p>
          </div>
          <InteractiveQA lang={lang} periodKey={periodKey} />
        </div>

      </main>

      <footer className="bg-white border-t border-slate-200 py-6 mt-16 text-center text-xs text-slate-400 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>{tFooter.copyright}</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-slate-600">{tFooter.guidelines}</a>
            <a href="#" className="hover:text-slate-600">{tFooter.policies}</a>
            <a href="#" className="hover:text-slate-600">{tFooter.disclaimer}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
