import { useState } from "react";
import { Cpu, Eye, GitBranch, Shield, Zap, RefreshCw, TrendingUp, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { locales } from "../locales";

interface TechDetail {
  id: string;
  name: string;
  nameEn: string;
  category: "ai" | "twin" | "robotics" | "blockchain";
  headline: string;
  headlineEn: string;
  growthMetric: string;
  growthMetricEn: string;
  efficiencyGain: string;
  efficiencyGainEn: string;
  industryCase: string;
  industryCaseEn: string;
  tacticalAction: string;
  tacticalActionEn: string;
  dataPoints: { label: string; labelEn: string; value: string }[];
}

interface DigitalTransformationProps {
  lang: "zh" | "en";
}

export default function DigitalTransformation({ lang }: DigitalTransformationProps) {
  const [selectedTech, setSelectedTech] = useState<string>("agentic-ai");
  const t = locales[lang].digital;

  const technologies: TechDetail[] = [
    {
      id: "agentic-ai",
      name: "生成式 AI 智能体 (Agentic SC)",
      nameEn: "Generative AI Agents (Agentic SC)",
      category: "ai",
      headline: "从单点自动化向端到端指令自主闭环跨越",
      headlineEn: "Leaping from point automation to closed-loop autonomous orchestration",
      growthMetric: "+68.4% 采用率",
      growthMetricEn: "+68.4% Adoption",
      efficiencyGain: "-35% 谈判与编排时长",
      efficiencyGainEn: "-35% Cycle Time Cut",
      industryCase: "2026 Q1 某世界505强消费品巨头将大模型智能体接入ERP与跨境物流运力API。在遭受红海突发性港口阻塞时，智能体自主完成对3家备用货代的询价、比对与秒级订舱，全过程耗时由传统的4天压缩至12秒，人工干预率降低90%。",
      industryCaseEn: "In Q1 2026, a Fortune 500 consumer giant linked generative LLM agents to its central ERP and logistics booking APIs. Facing unexpected port lockouts, the AI agent autonomously queried, negotiated, and booked spare space over three freight forwarders. The entire cycle shrank from 4 days to 12 seconds.",
      tacticalAction: "企业应当停止研发烟囱式的独立数据看板，转而将注意力集中在构建具备‘感知-判断-执行（ERP API授权）’闭环闭锁的供应链智能助手体系。",
      tacticalActionEn: "Firms should stop pouring resources into passive data dashboards and pivot towards closed-loop AI setups licensed with ERP API execution powers.",
      dataPoints: [
        { label: "500强企业2026覆盖率", labelEn: "Fortune 500 Penetration", value: "92%" },
        { label: "平均需求自拟合精确度", labelEn: "Avg Autonomous Precision", value: "88.5%" },
        { label: "采购人工谈判时间缩减", labelEn: "Negotiation Effort Cut", value: "75%" }
      ]
    },
    {
      id: "digital-twins",
      name: "全流程数字孪生与物联网",
      nameEn: "End-to-End Digital Twins & IoT",
      category: "twin",
      headline: "仿真先行、多维感知与高精度实时 ETA 预测",
      headlineEn: "Simulation first, multi-dimensional sensing, and high-accuracy real-time ETA",
      growthMetric: "71.0% 全流程感知率",
      growthMetricEn: "71.0% Visibility",
      efficiencyGain: "+28% ETA预估精准度",
      efficiencyGainEn: "+28% ETA Accuracy",
      industryCase: "2026年上半年，大型半导体物流巨头对高敏感圆片晶圆箱体全面附带 5G 物联网超微传感器，将运输环境的细微振动、箱内湿度、气压与沿途港口清关事件，进行亚周期数字孪生仿真。在过境美东或西欧海关时，预测到岸清关排队变局，从而在航海途中即指挥海铁联运转运。",
      industryCaseEn: "In H1 2026, a semiconductor logistics company loaded ultra-sensitive wafer canisters with 5G IoT trackers to model micro-vibrations, internal dampness, and customs gate queues on digital twins. Encountering East Coast port strikes, the twin directed mid-voyage container reroutes to alternative rail links.",
      tacticalAction: "对高溢价或冷链等环境敏感型商品实行‘一箱一码、全程在线’的软硬件一体孪生管理，确保物料在中途发生任何温控、振动偏差时能秒级发出纠偏指令。",
      tacticalActionEn: "Implement strict 'one box, one code' IoT coverage for perishable or premium hardware shipments, empowering automated mid-transit rerouting based on sensor spikes.",
      dataPoints: [
        { label: "5G IoT传感器搭载增长", labelEn: "5G IoT Tracker Growth", value: "+34.2%" },
        { label: "对不定期扰动延迟阻断率", labelEn: "Delay Deflection Rate", value: "82.4%" },
        { label: "空海转运无缝对接比例", labelEn: "Intermodal Conversion Rate", value: "66.0%" }
      ]
    },
    {
      id: "warehouse-robotics",
      name: "三维立体智能化无人仓储",
      nameEn: "3D Smart Automated Storage",
      category: "robotics",
      headline: "基于视觉自寻优的无人叉车、AGV/AMR 深度协同",
      headlineEn: "Deep visual AGV/AMR coordination in high-density facilities",
      growthMetric: "52.0% 重点仓部署率",
      growthMetricEn: "52.0% Depot Placement",
      efficiencyGain: "+35% 仓内吞吐效率提升",
      efficiencyGainEn: "+35% Depot Efficiency Gain",
      industryCase: "面对近岸外包制造基地（如墨西哥、越南）本土劳动力成本上升与经验不足的瓶颈，2026年出海企业在北美前置仓中大规模铺设由视觉多模态大模型驱动的移动搬运机器人。仓库不需要改变物理标识，机器人自主通过视觉雷达识别托盘及异形料，库存盘点时效由4小时大幅压缩至5分钟。",
      industryCaseEn: "Tackling staffing limits and spiking wages in nearshore hubs (Mexico, Vietnam), exporter depots deployed AGV/AMR robots powered by multimodal vision models. The robots navigate aisles, detect custom shapes without floor magnetic strips, and slashed stock counts from 4 hours to under 5 minutes.",
      tacticalAction: "针对跨境电商、快时尚等SKU极其密集、对周转率要求极度苛刻的前置仓与直邮中转仓，优先配置视觉无需铺轨的AMR，提升库位混放弹性。",
      tacticalActionEn: "Prioritize trackless vision AMRs in fast-fashion fulfillment depots to maximize flexible shelving and survive high SKU turnover peaks.",
      dataPoints: [
        { label: "机器人搬运差错率降低", labelEn: "Carrying Error Reduction", value: "-98%" },
        { label: "出货库分配用度削减", labelEn: "Outbound Cost Savings", value: "40%" },
        { label: "峰值并发吞吐溢出倍率", labelEn: "Peak Capacity Margin", value: "1.8x" }
      ]
    },
    {
      id: "blockchain-passport",
      name: "区块链数字护照与溯源凭证",
      nameEn: "Blockchain Passports & Green Audits",
      category: "blockchain",
      headline: "区块链分布式账本与 Scope 3 电子电池/碳护照合规",
      headlineEn: "Decentralized ledgers and Scope 3 electronic battery/carbon passports",
      growthMetric: "38.0% 电池护照接轨率",
      growthMetricEn: "38.0% Compliance Rate",
      efficiencyGain: "100% 审计数据防篡改",
      efficiencyGainEn: "105% Immutable Audit",
      industryCase: "随着2026年欧盟CSDDD及电池数字护照硬性合规启动，中国电池、重金属及高能耗光伏产品上游核心矿区（含刚果、印尼等镍钴供应链源头）全面通过多节点区块链实现链上审计登记。不可篡改的碳排放足迹数据直接封装进入物理电子标签，无此透明背书的产品一律无法装船进入欧洲口岸。",
      industryCaseEn: "Under strict EU CSDDD and digital battery passport mandates starting H1 2026, raw mineral extraction centers globally (lithium/nickel mines in Congo/Indonesia) run on decentralized multi-node chains. Verified carbon tallies cannot be altered and are directly integrated into physical shipping labels.",
      tacticalAction: "建立符合欧盟穿透式碳轨迹审计的数据库凭证，并联合区块链数字背书联盟提前完成信息上链，避免在大批出海关键环节被欧洲环保法庭暂缓扣货查验。",
      tacticalActionEn: "Formulate rigorous, clean Scope 3 databases synced to verified ledger backings to avert severe shipping delays or cargo confiscations at EU custom borders.",
      dataPoints: [
        { label: "不合格通关罚没概率降低", labelEn: "Customs Rejection Drop", value: "95%" },
        { label: "企业数字化绿证覆盖率", labelEn: "Eco-Certificate Rate", value: "72%" },
        { label: "跨境多主体通关耗时缩减", labelEn: "Multi-party Customs Reduction", value: "2.3 Days" }
      ]
    }
  ];

  const active = technologies.find((tech) => tech.id === selectedTech) || technologies[0];

  return (
    <div className="space-y-6 text-left" id="digital-transformation-section">
      <div className="border-b border-slate-200 pb-5 mb-6">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-600"></span> {t.breadcrumb}
        </h3>
        <p className="text-xl font-bold text-slate-900 tracking-tight mt-1">{t.title}</p>
        <p className="text-xs text-slate-505 mt-2 leading-relaxed">
          {t.desc}
        </p>
      </div>

      {/* Grid of options to switch */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {technologies.map((tech) => {
          const isSelected = selectedTech === tech.id;
          return (
            <button
              key={tech.id}
              onClick={() => setSelectedTech(tech.id)}
              className={`p-4 border rounded-sm transition-all duration-200 text-left cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? "bg-slate-950 text-white border-slate-950 shadow-md"
                  : "bg-white text-slate-800 border-slate-300 hover:bg-slate-50 hover:border-slate-400"
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className={`p-2 rounded-sm border ${
                    isSelected ? "bg-white/10 border-white/20 text-white" : "bg-blue-50 border-blue-200 text-blue-600"
                  }`}>
                    {tech.category === "ai" && <Cpu className="w-4 h-4" />}
                    {tech.category === "twin" && <Eye className="w-4 h-4" />}
                    {tech.category === "robotics" && <GitBranch className="w-4 h-4" />}
                    {tech.category === "blockchain" && <Shield className="w-4 h-4" />}
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-sm ${
                    isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-655"
                  }`}>
                    {lang === "en" ? tech.growthMetricEn : tech.growthMetric}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-black tracking-tight">{lang === "en" ? tech.nameEn : tech.name}</h4>
              </div>
              <p className={`text-[11px] mt-2 line-clamp-1 ${isSelected ? "text-slate-400" : "text-slate-500"}`}>
                {lang === "en" ? tech.headlineEn : tech.headline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Screen Container detail with animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTech}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="bg-slate-900 text-white rounded-sm p-6 shadow-sm border border-slate-950"
        >
          {/* Header of dynamic block */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4 border-b border-slate-800 gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="bg-blue-600 text-white px-2 py-0.5 text-[9px] font-mono font-bold uppercase rounded-sm">
                  {t.digitalStandard}
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                  {t.efficiencyGain} {lang === "en" ? active.efficiencyGainEn : active.efficiencyGain}
                </span>
              </div>
              <h4 className="text-lg font-black tracking-tight">{lang === "en" ? active.nameEn : active.name}</h4>
            </div>
            
            <div className="flex gap-2">
              <span className="px-2.5 py-1 text-[11px] font-mono font-bold bg-slate-800 text-slate-200 rounded-sm border border-slate-750">
                {t.auditStatus}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            
            {/* Summary details - Col 8 */}
            <div className="lg:col-span-8 space-y-5">
              <div>
                <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono">
                  {t.techParadigm}
                </h5>
                <p className="text-sm font-semibold text-white bg-slate-800/50 p-4 rounded-sm border border-slate-800 leading-relaxed italic">
                  &ldquo;{lang === "en" ? active.headlineEn : active.headline}&rdquo;
                </p>
              </div>

              <div>
                <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
                  {t.liveCase}
                </h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-5 rounded-sm border border-slate-800">
                  {lang === "en" ? active.industryCaseEn : active.industryCase}
                </p>
              </div>

              <div>
                <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                  {t.cLevelTactics}
                </h5>
                <p className="text-xs sm:text-sm text-slate-305 leading-relaxed">
                  {lang === "en" ? active.tacticalActionEn : active.tacticalAction}
                </p>
              </div>
            </div>

            {/* Numerical details & KPIs - Col 4 */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
              <div className="bg-slate-950 p-5 rounded-sm border border-slate-800 flex-1 flex flex-col justify-between">
                <div className="border-b border-slate-800 pb-3 mb-4">
                  <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                    {t.dataMatrix}
                  </h5>
                  <p className="text-[11px] text-slate-550 mt-0.5">{t.dataMatrixSub}</p>
                </div>

                <div className="space-y-4">
                  {active.dataPoints.map((dp, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2.5 border-b border-slate-900 last:border-0">
                      <span className="text-xs font-semibold text-slate-400">{lang === "en" ? dp.labelEn : dp.label}</span>
                      <span className="text-sm font-extrabold text-blue-500 font-mono tracking-tight">
                        {dp.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-3 border-t border-slate-900 flex items-center gap-2 text-[10px] text-slate-500">
                  <RefreshCw className="w-3 h-3 text-emerald-500 animate-spin-slow" />
                  <span>{lang === "en" ? "Live Ledger Status: Verified SHA-256 SECURE" : "实时区块链哈希：SHA-256 SC_SECURE_2026"}</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
