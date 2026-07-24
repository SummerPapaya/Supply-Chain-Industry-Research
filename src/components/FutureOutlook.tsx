import { Compass, Lightbulb, Target } from "lucide-react";
import { locales } from "../locales";

interface FutureOutlookProps {
  lang: "zh" | "en";
}

export default function FutureOutlook({ lang }: FutureOutlookProps) {
  const t = locales[lang].outlook;

  return (
    <div className="space-y-6 text-left">
      <div>
        <h2 className="text-lg font-bold text-slate-900 tracking-tight">{t.title}</h2>
        <p className="text-xs text-slate-505 font-mono">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Trend Group 1: 2026 H2 Immediate Priorities */}
        <div className="bg-white border border-slate-300 rounded-sm p-6 space-y-4 shadow-xs">
          <div className="flex items-center space-x-2 pb-3 border-b border-slate-205">
            <div className="p-1.5 bg-blue-50 text-blue-700 rounded-sm border border-blue-200">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">{t.tacticsTitle}</h3>
              <p className="text-[10px] text-slate-400 font-mono tracking-widest">{t.tacticsLabel}</p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-655 leading-relaxed">
            <div className="space-y-1">
              <h4 className="font-extrabold text-slate-900 flex items-center pr-2 leading-tight">
                <span className="w-4 h-4 bg-slate-900 text-white rounded-none font-mono text-[9px] mr-1.5 flex items-center justify-center font-bold shrink-0">1</span>
                {lang === "en" ? "Establish Multi-Tier Supplier Mapping (Tier-N Mapping)" : "建立多级多轨供应商图谱 (Tier-N Mapping)"}
              </h4>
              <p className="text-slate-500 pl-5 text-xs">
                {lang === "en" 
                  ? "Move beyond the blind spot of only tracking Tier-1 suppliers. Enterprises must map upstream suppliers down to Tier-3/4 before late 2026 to preempt delays caused by raw mineral or sensitive component shortages."
                  : "摆脱仅追踪一级供应商的盲区。企业需要在2026年底前将原材料上游供应链绘制到3-4级（Tier-3/Tier-4），预警由于小矿产或高灵敏元器件断货引发的核心总成延误。"}
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="font-extrabold text-slate-900 flex items-center pr-2 leading-tight">
                <span className="w-4 h-4 bg-slate-900 text-white rounded-none font-mono text-[9px] mr-1.5 flex items-center justify-center font-bold shrink-0">2</span>
                {lang === "en" ? "Hedge Container & Fuel Rate Volatility" : "灵活对冲集装箱与燃油费率长期通胀"}
              </h4>
              <p className="text-slate-500 pl-5 text-xs">
                {lang === "en"
                  ? "While summer shipping rates may cool slightly, they will not return to pre-crisis baselines. Procurement contracts should integrate flexible rerouting clauses and rail-water intermodal hedges to anchor base capacity."
                  : "2026年下半年运费虽有望季节性理性微降，但不会回到疫前极低底线。采购合同中应加入灵活变向和海铁联运联锁机制，锁定长期基准箱量契约。"}
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="font-extrabold text-slate-900 flex items-center pr-2 leading-tight">
                <span className="w-4 h-4 bg-slate-900 text-white rounded-none font-mono text-[9px] mr-1.5 flex items-center justify-center font-bold shrink-0">3</span>
                {lang === "en" ? "Enforce Strict Scope 3 Eco Traceability" : "强化绿色 Scope 3 穿透级追溯审计"}
              </h4>
              <p className="text-slate-505 pl-5 text-xs">
                {lang === "en"
                  ? "For exporters serving Western markets, fast-track connections with certified blockchain carbon tracers to auto-generate mandatory digital product carbon passports."
                  : "针对出口欧美的制造厂，建议快速对接具有权威区块链低碳溯源资质的第三方系统，形成随货附带的“电子电池/低碳物料护照”。"}
              </p>
            </div>
          </div>
        </div>

        {/* Trend Group 2: Mid to Long-Term Vision */}
        <div className="bg-white border border-slate-300 rounded-sm p-6 space-y-4 shadow-xs">
          <div className="flex items-center space-x-2 pb-3 border-b border-slate-205">
            <div className="p-1.5 bg-emerald-50 text-emerald-700 rounded-sm border border-emerald-200">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">{t.visionTitle}</h3>
              <p className="text-[10px] text-slate-400 font-mono tracking-widest">{t.visionLabel}</p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-655 leading-relaxed">
            <div className="space-y-1">
              <h4 className="font-extrabold text-slate-900 flex items-center pr-2 leading-tight">
                <span className="w-4 h-4 bg-emerald-600 text-white rounded-none font-mono text-[9px] mr-1.5 flex items-center justify-center font-bold shrink-0">A</span>
                {lang === "en" ? "Autonomous Flow: Dark Warehouses & Automated Depots" : "全域自主流转：“无灯仓储”与“无灯货台”"}
              </h4>
              <p className="text-slate-500 pl-5 text-xs">
                {lang === "en"
                  ? "As advanced planning algorithms scale across freight machinery in 2026-2027, automated dark warehouses will become accessible even to mid-market operators, slashing manual picking failures by 40%."
                  : "随着2026-2027人工智能算法在先进工程车辆上的全线商用，港口与中央无灯智能化无人立体仓（Dark Warehouse）将向中型企业下沉，节省高达40%的人力操作故障。"}
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="font-extrabold text-slate-900 flex items-center pr-2 leading-tight">
                <span className="w-4 h-4 bg-emerald-600 text-white rounded-none font-mono text-[9px] mr-1.5 flex items-center justify-center font-bold shrink-0">B</span>
                {lang === "en" ? "Restructuring the Zero-Carbon Axis" : "绿色零碳供应链轴心重整"}
              </h4>
              <p className="text-slate-500 pl-5 text-xs">
                {lang === "en"
                  ? "New-generation cargo liners running on green methanol or pure hydrogen will see mass deployment starting 2027. Selecting eco-certified carriers will trigger massive carbon-tax relief, altering ocean freight cost models."
                  : "航海新能源大吨位班轮（绿色甲醇、纯氢动力）在2027年实现规模化入列。企业选择零碳货轮将享有更低的碳关税返还，改变跨境物流综合溢价逻辑。"}
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="font-extrabold text-slate-900 flex items-center pr-2 leading-tight">
                <span className="w-4 h-4 bg-emerald-600 text-white rounded-none font-mono text-[9px] mr-1.5 flex items-center justify-center font-bold shrink-0">C</span>
                {lang === "en" ? "Decentralized Regionalization: Parallel Networks" : "区域网格化：跨国多供应链体系并行"}
              </h4>
              <p className="text-slate-505 pl-5 text-xs">
                {lang === "en"
                  ? "Decentralized, smaller regional micro-manufacturing units will flourish. Central CAD models will be dispatched in real-time to multi-shoring 3D hubs located across LATAM, the EU, and APAC to achieve 'global design, localized assembly'."
                  : "去中心化、小单元化的微制造中心将成为常态。通过云端设计模型分发至分布在拉美、欧洲、亚太的多个3D打印及模块精装点，实现“设计全球化，组装极本土化”。"}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* General summary advisory box */}
      <div className="bg-slate-950 text-slate-205 rounded-sm p-6 border border-slate-900">
        <div className="flex items-start space-x-3">
          <Lightbulb className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs">
            <h4 className="text-sm font-bold text-slate-100">{t.advisorTitle}</h4>
            <p className="leading-relaxed text-slate-300 text-xs">
              {t.advisorDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
