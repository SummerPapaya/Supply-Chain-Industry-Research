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

import { kpis, freightRateTrends, routeGrowthRates, techAdoptions } from "./data";
import { locales } from "./locales";
import { Compass, Clock, BarChart3, Sliders, Cpu, Target, Sparkles, CloudLightning } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [lang, setLang] = useState<"zh" | "en">("zh");

  // Live and Periodic states
  const [isLive, setIsLive] = useState<boolean>(true);
  const [mockLatency, setMockLatency] = useState<number>(34);
  const [currentTime, setCurrentTime] = useState<string>("2026-06-08 09:25:27");
  const [kpiData, setKpiData] = useState(kpis);
  const [freightRateData, setFreightRateData] = useState(freightRateTrends);
  const [routeGrowthData, setRouteGrowthData] = useState(routeGrowthRates);
  const [techAdoptionData, setTechAdoptionData] = useState(techAdoptions);
  const [isPulling, setIsPulling] = useState<boolean>(false);

  const tTelemetry = locales[lang].telemetry;
  const tNotification = locales[lang].notification;
  const tTabs = locales[lang].tabs;
  const tDisclaimer = locales[lang].disclaimer;
  const tQa = locales[lang].qa;
  const tFooter = locales[lang].footer;

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

    // WCI index fluctuation (baseline 4828, sinusoidal drift)
    const driftWCI = Math.floor(Math.sin(now / 15000) * 16 + Math.cos(now / 7000) * 5);
    const updatedWCI = 4828 + driftWCI;

    // SCSI pressure index fluctuation (baseline 1.65)
    const driftSCSI = parseFloat((Math.sin(now / 19000) * 0.04 + Math.cos(now / 8000) * 0.01).toFixed(2));
    const updatedSCSI = parseFloat((1.65 + driftSCSI).toFixed(2));

    // Smart tech adoption rate fluctuation (baseline 68.4)
    const driftTech = parseFloat((Math.sin(now / 26000) * 0.28).toFixed(2));
    const updatedTech = parseFloat((68.4 + driftTech).toFixed(1));

    // ESG compliance rate (baseline 74.1)
    const driftEsg = parseFloat((Math.cos(now / 22000) * 0.18).toFixed(2));
    const updatedEsg = parseFloat((74.1 + driftEsg).toFixed(1));

    // Sync state for primary numerical displays (KPI grid)
    setKpiData(prev => prev.map((kpi, idx) => {
      if (idx === 0) {
        return { 
          ...kpi, 
          value: `$${updatedWCI.toLocaleString()}`, 
          change: `${driftWCI >= 0 ? "+" : ""}${driftWCI} 美元/40箱 (4s 即时报价监控)`,
          changeEn: `${driftWCI >= 0 ? "+" : ""}${driftWCI} USD/FEU (4s Spot Rate)`
        };
      }
      if (idx === 1) {
        return { 
          ...kpi, 
          value: `${updatedTech}%`, 
          change: `${driftTech >= 0 ? "+" : ""}${driftTech}% 今日决策拟合`,
          changeEn: `${driftTech >= 0 ? "+" : ""}${driftTech}% Today's AI sync`
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
    }));

    // Update Recharts Area Chart June value to synchronize with live WCI Rate state
    setFreightRateData(prev => prev.map((item, idx) => {
      if (idx === 5) { // 6月 is the current active month (index 5)
        return { ...item, rate2026: updatedWCI };
      }
      return item;
    }));

    // Update Route Growth Rates Chart slightly
    setRouteGrowthData(prev => prev.map((item, idx) => {
      const airMod = parseFloat((Math.sin(now / 9000 + idx) * 0.12).toFixed(1));
      const oceanMod = parseFloat((Math.cos(now / 11000 + idx) * 0.05).toFixed(1));
      return {
        ...item,
        airGrowth: parseFloat((routeGrowthRates[idx].airGrowth + airMod).toFixed(1)),
        oceanGrowth: parseFloat((routeGrowthRates[idx].oceanGrowth + oceanMod).toFixed(1))
      };
    }));

    // Update Tech Adoption Monthly levels slightly
    setTechAdoptionData(prev => prev.map((item, idx) => {
      const rateMod = parseFloat((Math.sin(now / 13000 + idx) * 0.08).toFixed(1));
      const effMod = parseFloat((Math.cos(now / 15000 + idx) * 0.04).toFixed(1));
      return {
        ...item,
        adoptionRate: Math.min(100, Math.max(0, parseFloat((techAdoptions[idx].adoptionRate + rateMod).toFixed(1)))),
        efficiencyImprovement: Math.min(100, Math.max(0, parseFloat((techAdoptions[idx].efficiencyImprovement + effMod).toFixed(1))))
      };
    }));

  }, []);

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
        return <ReportOverview kpiData={kpiData} lang={lang} />;
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
        return <ReportOverview kpiData={kpiData} lang={lang} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <ReportHeader lang={lang} setLang={setLang} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
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
          <InteractiveQA lang={lang} />
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
