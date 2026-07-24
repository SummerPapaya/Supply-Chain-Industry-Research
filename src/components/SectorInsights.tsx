import { useState } from "react";
import { Car, Cpu, ShoppingBag, Zap, ShieldAlert, Clock, CornerDownRight, CheckCircle2, Activity, Package, Factory } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { locales } from "../locales";

interface SectorData {
  id: string;
  name: string;
  nameEn: string;
  engName: string;
  icon: React.ReactNode;
  summary: string;
  summaryEn: string;
  bgGradient: string;
  accentColor: string;
  metrics: {
    label: string;
    labelEn: string;
    value: string;
    valueEn: string;
    change: string;
    changeEn: string;
    isCritical: boolean;
  }[];
  painPoints: string[];
  painPointsEn: string[];
  leadTimeTrend: string;
  leadTimeTrendEn: string;
  leadTimeStatus: "increase" | "stable" | "decrease";
  strategicAdvice: string[];
  strategicAdviceEn: string[];
  complianceFocus: string;
  complianceFocusEn: string;
}

interface SectorInsightsProps {
  lang: "zh" | "en";
}

export default function SectorInsights({ lang }: SectorInsightsProps) {
  const [activeSector, setActiveSector] = useState<string>("auto");
  const t = locales[lang].sectors;

  const sectors: SectorData[] = [
    {
      id: "auto",
      name: "汽车与高端零部件",
      nameEn: "Automotive & Heavy Industry",
      engName: "Automotive & Heavy Industry",
      icon: <Car className="w-4 h-4" />,
      summary: "汽车零部件供应链复杂度极高。2026年受苏伊士运河中断与好望角绕行常态化影响，欧洲整车厂来自亚洲的变速器、转向系统及电机材料货期显著延宕，倒逼跨太平洋与美墨鲁走廊（近岸外包2.0）的快速集成。",
      summaryEn: "Automotive supply chains operate on highly complex linkages. Due to Red Sea delays and Cape of Good Hope routings in H1 2026, European factories face severe delivery backlogs on APAC gears, steering parts, and battery cells, driving swift integration across US-Mexico and Transpacific nearshoring hubs.",
      bgGradient: "from-blue-50 to-slate-50",
      accentColor: "border-blue-600 text-blue-600 bg-blue-50",
      metrics: [
        { label: "平均物流交付延长", labelEn: "Avg Transit Delay", value: "12-16 天", valueEn: "12-16 Days", change: "同比 +140%", changeEn: "+140% YoY", isCritical: true },
        { label: "近岸采购零部件比例", labelEn: "Nearshoring Share", value: "48.2%", valueEn: "48.2%", change: "较 2025 年底 +8.5%", changeEn: "+8.5% vs Late 2025", isCritical: false },
        { label: "整车装配周转降低", labelEn: "Assembly Turn Rate Gap", value: "3.2%", valueEn: "-3.2%", change: "属于中高度扰动", changeEn: "Medium-High Constraint", isCritical: true },
        { label: "欧盟电池数字护照达标", labelEn: "EU Battery Passport Success", value: "92.5%", valueEn: "92.5%", change: "硬性准入限额已达成", changeEn: "Hard Access Attained", isCritical: false }
      ],
      painPoints: [
        "核心电子控制单元(ECU)及动力电池化学原料远洋多港口停摆或滞港，安全库存由2周紧急提升至1.5个月量级。",
        "滚装船(Ro-Ro)运力全球阶段性错配，欧洲传统港口（勒阿弗尔、安特卫普等）由于集卡运力瓶颈出现内陆运输阻塞。",
        "中国车企上游电芯、结构件由于中墨墨京-德克萨斯陆路口岸清关延时，导致组装节奏受阻。"
      ],
      painPointsEn: [
        "Vital ECU components and battery chemicals sit in congested port yards, forcing safety stock buffers to rise from 2 weeks to 1.5 months.",
        "Global Roll-on/Roll-off (Ro-Ro) vessel shortfalls combined with dispatcher truck bottlenecks jam European gateways (Antwerp, Le Havre).",
        "EV battery cells shipped via China-Mexico-Texas gateways suffer land border clearance stalls, delaying factory assembly paces."
      ],
      leadTimeTrend: "由于绕行好望角，由中国华东港口发出至地中海北岸港口的综合交货时间(Transit Time)已由28天拉长到42、45天。",
      leadTimeTrendEn: "Bypassing Suez via the Cape of Good Hope has stretched transit periods from East China terminals to Mediterranean hubs from 28 days to over 42-45 days.",
      leadTimeStatus: "increase",
      strategicAdvice: [
        "‘CKD(完全散件组装)’模式下沉，强化在墨西哥和东欧（匈牙利、波兰）的本土三电仓储中心部署。",
        "启用‘海铁联运’（通过中亚及波斯湾陆桥）对冲极速断料风险，常态化保障12%的高时效保供缓冲区。"
      ],
      strategicAdviceEn: [
        "Deepen 'Complete Knock-Down (CKD)' assembly lines, reinforcing regional warehousing in Mexico and Eastern Europe (Poland, Hungary).",
        "Deploy hybrid sea-rail routes through Central Asian rail links to safeguard critical materials buffers (targeting 12% reserve margins)."
      ],
      complianceFocus: "欧盟《电池法案》最新数字凭证审核。不仅要求提供电芯原材料原产地证明，还需包含全线上游Scope 3制造过程的绿色能耗审计报告。",
      complianceFocusEn: "EU Batteries Regulation Digital Passport compliance. Demands verified proof of metal origins paired with comprehensive Scope 3 footprint audits along the energy path."
    },
    {
      id: "electronics",
      name: "消费电子与半导体",
      nameEn: "High-Tech & Semiconductors",
      engName: "High-Tech & Semiconductors",
      icon: <Cpu className="w-4 h-4" />,
      summary: "由于产品迭代极快且单价高昂，高科技电子供应链对时效具有绝对的刚性要求。2026年航空货运运费上涨，对中小封装、测试及晶圆周转成本带来了极大挑战，引发企业在采购端运用AI智能体自拟合谈判和自动化排线调度。",
      summaryEn: "With short lifecycles and high values, semiconductor electronics have absolute speed requirements. Spiking air rates in H1 2026 challenge packaging and foundry logistics, pushing retail operations to integrate AI agents for autonomous dispatching and booking.",
      bgGradient: "from-indigo-50 to-slate-50",
      accentColor: "border-indigo-600 text-indigo-600 bg-indigo-50",
      metrics: [
        { label: "空运舱位锁定量", labelEn: "Air Charter Allocation", value: "84.5%", valueEn: "84.5%", change: "同比 +12%", changeEn: "+12% YoY", isCritical: false },
        { label: "单公斤平均空运价格", labelEn: "Average Air Rate / kg", value: "$6.82", valueEn: "$6.82", change: "较去年同期 +22.4%", changeEn: "+22.4% YoY", isCritical: true },
        { label: "物料通关自动化占比", labelEn: "Automated Clearance Hub", value: "78%", valueEn: "78%", change: "采用AI Agent自申报", changeEn: "Via Generative Agents", isCritical: false },
        { label: "核心芯片物流损耗率", labelEn: "Loss and Damage Index", value: "0.12%", valueEn: "0.12%", change: "全时数字孪生监控", changeEn: "Under Digital Twins", isCritical: false }
      ],
      painPoints: [
        "航空物流运费震荡不仅压缩了高溢价芯片的毛利，更严重挤压了印制电路板(PCB)、电容电阻等中低额辅料航空快线利润。",
        "越南、印度等封装新地基电力稳定性受高温季影响波动，影响上游晶圆向成品交付转换的时效稳定性。",
        "由于地缘追溯限额，美东、西欧海关对含敏感元器件的消费电子启动穿透式核查，通关平均滞留时间拉长5天。"
      ],
      painPointsEn: [
        "Volatile air space prices compress high-end chip margins and severely erode air shipping yields on low-cost components (PCBs, capacitors).",
        "Grid blackouts during thermal peaks in Vietnam and India packaging hubs disrupt the throughput of foundry wafer lots.",
        "Regulatory tracing pushes US and European customs to enforce extensive audits on key computing assemblies, adding 5 days to clearing."
      ],
      leadTimeTrend: "航空干线仓位偏紧，机场交货期整体持平，但海运替代货期的芯片材料平均运输时长仍表现为不确定性上升。",
      leadTimeTrendEn: "Air channels remain crowded. Airport handling timelines remain flat, but ocean-based substitute component transits face highly variable dates.",
      leadTimeStatus: "stable",
      strategicAdvice: [
        "针对核心Soc芯片 and 贵价晶圆进行跨国‘空仓硬包机’季度锁定协议，防止因快时尚电商包机需求暴增而遭到物流排挤。",
        "高可靠性温控数字化箱体装货，运用基于5G IoT芯片在运输全程对振动、湿度和地缘通关节点状态进行孪生模拟。"
      ],
      strategicAdviceEn: [
        "Sign quarterly block space agreements (BSAs) for premium SoC silicon, preventing cargo bump-offs by consumer retail charters.",
        "Use smart thermal protection containers linked to 5G IoT sensors, simulating humidity and customs releases via real-time digital twins."
      ],
      complianceFocus: "非关税贸易地缘管制与敏感物料申报。对原产地证书及第三国转口贸易真实性审查提出极高穿透要求。",
      complianceFocusEn: "Non-tariff barriers and dual-use classification compliance. Entails verified proof of ultimate beneficial ownership and port transshipment logs."
    },
    {
      id: "ecommerce",
      name: "跨境电商与快时尚",
      nameEn: "Cross-border E-commerce & Retail",
      engName: "Cross-border E-commerce & Retail",
      icon: <ShoppingBag className="w-4 h-4" />,
      summary: "2026年在拼多多Temu、希音Shein和速卖通的高歌猛进下，直邮零售与DTC(直面消费者)小包物流占满了所有中国主出海口岸航空腹舱。极速履约与海关对小包免税政策(De Minimis)的严加管护构成了本年度最大供应链红线。",
      summaryEn: "Under Temu, Shein, and AliExpress expansion in H1 2026, direct-to-consumer (DTC) air packages saturated export hubs. Immediate delivery promises coupled with severe regulatory crackdowns on small-parcel tax-free (De Minimis) caps represent the year's greatest compliance barrier.",
      bgGradient: "from-emerald-50 to-slate-50",
      accentColor: "border-emerald-600 text-emerald-600 bg-emerald-50",
      metrics: [
        { label: "直邮航空小包投递期", labelEn: "Direct Air Transit Speed", value: "5-7 天", valueEn: "5-7 Days", change: "基本与去年底持平", changeEn: "Flat vs. Late 2025", isCritical: false },
        { label: "口岸清关抽检通过率", labelEn: "Customs Clearance Rate", value: "94.2%", valueEn: "94.2%", change: "同减 -3.1% (审计趋严)", changeEn: "-3.1% YoY (Audit strictness)", isCritical: true },
        { label: "干线包机使用比例", labelEn: "Charter Capacity Ratio", value: "41%", valueEn: "41%", change: "同比 +25.3%", changeEn: "+25.3% YoY", isCritical: false },
        { label: "逆向物流(退货)重组率", labelEn: "Reverse Logistics Rate", value: "28.5%", valueEn: "28.5%", change: "属零售合规痛点", changeEn: "Significant Retail Painpoint", isCritical: true }
      ],
      painPoints: [
        "欧美主要口岸针对低于税额豁免限额(De Minimis)的小邮包实施‘海关反规避查验标准’，抽单率与核定时间均有倍数级增加。",
        "由中国南方中心（深圳、广州、香港）飞往欧美核心转运枢纽的包机费用波动大，严重影响即时毛利率预测。",
        "空运时效如果因旺季排仓或罢工事件发生超过3日延误，极易引发大规模买家申请售后退款或罚没。"
      ],
      painPointsEn: [
        "Western regulators enforce extensive checks underneath 'De Minimis' caps, compounding inspection ratios and audit bottlenecks.",
        "High charter price volatility from South China hubs (Shenzhen, Guangzhou, Hong Kong) degrades weekly unit economics margins.",
        "Failure to resolve 3-day airport backlogs during peak parcel spikes sparks massive customer refunds and administrative disputes."
      ],
      leadTimeTrend: "仓位绑定使基础干线保持时效，但由于进口海关合规穿透核验，末端清关时效从0.5天延长至2.2天。",
      leadTimeTrendEn: "Charter deals secure fundamental speeds, but rigorous compliance reviews expand final custom clearing from 0.5 to over 2.2 days.",
      leadTimeStatus: "increase",
      strategicAdvice: [
        "向‘前置本国仓/海外仓群’模式和‘直邮模式’并行的双轨制转型。在美东、西欧、拉美主力消费中心建立分销前置储备。",
        "提前在AI申报系统中进行海量SKU商品归类与环保声明备案，降低海关合规抽查的驳回概率。"
      ],
      strategicAdviceEn: [
        "Adopt a multi-channel hybrid setup featuring localized overseas fulfillment caches alongside optimized direct courier routes.",
        "Pre-register product catalog and eco-attestations inside automated AI customs engines, minimizing border rejection chances."
      ],
      complianceFocus: "由于高密度的产品输入，多国环境绿税及循环利用法案（例如法国服装快时尚碳税以及德国包材可降解指令）开始针对每个快件包裹追税。",
      complianceFocusEn: "Extended Producer Responsibility (EPR) requirements. Advanced clothing eco-taxes (French Fast Fashion limits) and packaging laws track individual mailers."
    },
    {
      id: "greentech",
      name: "清洁能源与绿氢材料",
      nameEn: "Clean Energy & Renewable Hydrogen",
      engName: "Clean Energy & Renewable Hydrogen",
      icon: <Zap className="w-4 h-4" />,
      summary: "代表2026全球最高含绿量的新能源整机、光伏组件和储能货柜出口，迎来了欧盟CSDDD强制处罚条例的全面考核。供应链两端由于强制低碳审计，被迫摒弃落后的电力模式，建设全面绿电及低排放的大宗水路‘零碳绿色通道’。",
      summaryEn: "High-value solar cells, wind turbine structures, and mass battery packs face intense EU CSDDD implementation in 2026. Upstream partners are abandoning high-energy manufacturing baselines, instituting ocean-based corridors running on certified zero-carbon vessels.",
      bgGradient: "from-amber-50 to-slate-50",
      accentColor: "border-amber-600 text-amber-600 bg-amber-50",
      metrics: [
        { label: "绿色能源组件出口", labelEn: "Green Export Value", value: "$41.6B", valueEn: "$41.6B", change: "同比增加 +18.4%", changeEn: "+18.4% YoY", isCritical: false },
        { label: "零碳绿证覆盖占比", labelEn: "Zero-Carbon Certificate Rate", value: "72.0%", valueEn: "72.0%", change: "同比 +15%", changeEn: "+15% YoY", isCritical: false },
        { label: "涉海特大特重运输延时", labelEn: "Oversized Marine Delay", value: "18-22 天", valueEn: "18-22 Days", change: "好望角大风浪增加", changeEn: "Cape Wind/Wave Factor", isCritical: true },
        { label: "由于未合规受处罚风险", labelEn: "Non-compliance Penalty Risk", value: "18.2%", valueEn: "18.2%", change: "需警惕5%全球营业额罚则", changeEn: "Alert on 10% Global Fine", isCritical: true }
      ],
      painPoints: [
        "大型储能逆变器、风机主轴以及叶片属于特特大特重件(Oversized Cargo)，红海中断导致常规重吊船无法过苏伊士运河，绕行好望角极易在非洲南岸遭遇复杂洋流和大风浪限制。",
        "光伏硅片、电池组件上游原材料采购信息与美国/欧盟不溯源政策对撞，需要极精确的检测机构出海认证 and 物理隔离凭证。",
        "欧盟地区绿色基础设施交付不匹配，上岸通货卡车调度及当地高压电网并网节点排程经常出现严重的衔接延期。"
      ],
      painPointsEn: [
        "Turbines, wind blades, and battery cabins represent heavy/oversized payloads; Suez bypasses around the Cape exposure ships to severe Southern Ocean storms.",
        "Solar polysilicon origins frequently conflict with Western trace protocols, prompting requirements for secure hardware ledger audits.",
        "Weak European dockside logistics, truck deficits, and grid-connection backlogs frequently stall terminal unloading schemes."
      ],
      leadTimeTrend: "重吊海运航程延长极其明显。由于无法使用苏伊士运河，超大尺寸绿色风电/光储设备交付周期普遍在55-65天以上。",
      leadTimeTrendEn: "Oversized ocean dispatch lengths have soared. Blocked Suez transit forces super-heavy equipment cycles to exceed 55-65 days.",
      leadTimeStatus: "increase",
      strategicAdvice: [
        "在中国上游生产园区实施全面的‘零碳工厂’与‘绿电自足闭环’，在集装箱端通过电子封签与海关进行预对接。",
        "开展针对全球超限大件重运租船的长期运力锁定(COA协议)，提前配置好望角特许航道优先通行协议。"
      ],
      strategicAdviceEn: [
        "Deploy 100% 'zero-carbon microgrids' in upstream gigafactories, linking smart electronic seals for pre-clearance programs.",
        "Establish long-term Contracts of Affreightment (COAs) for specialized heavy-lift vessels, acquiring ocean route priority options."
      ],
      complianceFocus: "2026年正式分步实施的非欧盟国家硬性ESG溯源、欧盟企业可持续发展尽职调查(CSDDD)，违约面临暂停市场准入以及极高的销售连带责任罚款。",
      complianceFocusEn: "EU CSDDD compliance. Demands active upstream due diligence with penalty benchmarks exceeding up to 5% of global sales."
    },
    {
      id: "pharma",
      name: "医疗医药与生命科学",
      nameEn: "Pharma & Life Sciences",
      engName: "Pharmaceuticals & Life Sciences",
      icon: <Activity className="w-4 h-4" />,
      summary: "生物医药与高级医疗器械供应链面临着极端严苛的温度控制（冷链）与极高的法规准入限制。2026年，受地缘海关政治核查、温控冷链空运舱位抢夺以及原料药（API）跨国流转限制影响，跨大西洋和欧亚航线的医药包机价格涨幅明显，加速了温控数字传感器包装在国际运输中的全线普及。",
      summaryEn: "The pharma and life sciences supply chain demands extreme cold-chain integrity and stringent regulatory approvals. In H1 2026, rising inspection blockades, competitive bidding for pharmaceutical air charters, and restrictions on Active Pharmaceutical Ingredients (APIs) drove sharp transit premium costs, accelerating smart IoT temperature packaging adoption.",
      bgGradient: "from-teal-50 to-slate-50",
      accentColor: "border-teal-600 text-teal-600 bg-teal-50",
      metrics: [
        { label: "全球冷链空运缺口", labelEn: "Chilled Air Cargo Gap", value: "18.5%", valueEn: "18.5%", change: "同比 +22%", changeEn: "+22% YoY", isCritical: true },
        { label: "核心原料药到货延时", labelEn: "Avg API Transit Delay", value: "8.5 天", valueEn: "8.5 Days", change: "清关阻碍导致", changeEn: "Due to customs block", isCritical: true },
        { label: "全程冷链温箱达标率", labelEn: "Temp Deviation Safe Rate", value: "99.82%", valueEn: "99.82%", change: "物联网全链路监控", changeEn: "Via IoT Sensors", isCritical: false },
        { label: "欧盟/美国进口合规率", labelEn: "Regulator Clearance Rate", value: "96.4%", valueEn: "96.4%", change: "电子追溯申报加速", changeEn: "Digital tracing speed", isCritical: false }
      ],
      painPoints: [
        "海关对原料药（API）及生物原料实施针对原产地的物理穿透式审核，平均导致通关放行滞后55%的时间。",
        "空运动力冷链（如Active ULD）在全球骨干冷港（法兰克福、新加坡、芝加哥）因快件拥挤而出现返箱周转失衡。",
        "温度传感器偶发性失效或虚报，由于传统提货单据缺乏实时链上同步，常导致多方责任拉扯与高值针剂直接报废。"
      ],
      painPointsEn: [
        "Customs offices enforce exhaustive site origin tracing for biological ingredients, resulting in a 55% average increase in clearance holds.",
        "Active Unit Load Devices (ULDs) for air-cargo cold-chains face container inventory imbalance at critical hubs (FRA, SIN, ORD).",
        "Sensor failure or offline periods, combined with archaic data logging, trigger product rejection and finger-pointing over liability."
      ],
      leadTimeTrend: "基础运输周期表现为增加，尤其是跨欧亚空运温控集装箱的舱位排队时间从本年度Q1的0.8天增至3.5天。",
      leadTimeTrendEn: "Baseline lead times grew for chilled parcels, with airport sorting queues in central European hubs expanding from 0.8 to 3.5 days.",
      leadTimeStatus: "increase",
      strategicAdvice: [
        "推动‘物联网有源测温+区块链哈希’联动管理，对昂贵的靶向制剂和抗体冷链实现全程秒级温漂监控与不可篡改记录。",
        "建立原料药（API）的本国前置保税特殊监管仓，常态化保留3.5个月的战略缓冲周转量，用以平抑海运改道或空运舱位剧震。"
      ],
      strategicAdviceEn: [
        "Deploy dual-active IoT sensors coupled with blockchain verification to establish real-time, tamper-proof temperature histories for high-value biologics.",
        "Position core active ingredient buffers in bonded free-trade warehouses, keeping 3.5 months of backup stock to counteract freight swings."
      ],
      complianceFocus: "欧盟GMP Annex 1（无菌药品制造）和国家进出口检疫电子可追溯系统。要求提供从工厂第一批投料直到终端口岸无间断、不被篡改的温湿度传感器数据记录。",
      complianceFocusEn: "EU GMP Annex 1 and global sterile medicine regulations. Entails unbroken temperature records directly linked back to automated digital records from batch synthesis to airport handover."
    },
    {
      id: "fmcg",
      name: "快速消费品与现代零售",
      nameEn: "FMCG & Packaging",
      engName: "Fast-Moving Consumer Goods & Retail",
      icon: <Package className="w-4 h-4" />,
      summary: "快消品（FMCG）供应链高度追求极低成本与高周转率。2026年，受国际红土镍矿、油脂和包装原纸等上游大宗原料海运成本上涨带来的间接压力，全球快消巨头正在由‘及时制(JIT)’全面向‘确保制(Just-in-case)’进行本地多点近岸网仓重组。多渠道（DTC、零售电商与传统商超）数据孤岛让库存积压和断货风险共存，拉动了AI需求预测系统的渗透。",
      summaryEn: "Fast-Moving Consumer Goods (FMCG) require rock-bottom operating costs and rapid turnover. In H1 2026, rising marine rates heavily pressured raw items (vegetable oils, paper pulp, resins). Global retail brands are rewriting Just-In-Time (JIT) methods in favor of local multi-node Nearshoring storage while using AI forecasting to bridge DTC and brick-and-mortar sales channels.",
      bgGradient: "from-purple-50 to-slate-50",
      accentColor: "border-purple-600 text-purple-600 bg-purple-50",
      metrics: [
        { label: "货架在库率维持水平", labelEn: "On-Shelf Availability", value: "94.8%", valueEn: "94.8%", change: "同比上升 +1.2%", changeEn: "+1.2% YoY", isCritical: false },
        { label: "全球上游包装原材成本", labelEn: "Avg Packaging Cost", value: "上涨 +15.4%", valueEn: "+15.4%", change: "增加末端毛利压力", changeEn: "Eroding retail margins", isCritical: true },
        { label: "逆向循环包装使用率", labelEn: "Reusable Packaging Share", value: "32.5%", valueEn: "32.5%", change: "较2025年底 +6.2%", changeEn: "+6.2% vs end 2025", isCritical: false },
        { label: "多渠道多级库存预测度", labelEn: "Forecasting Precision", value: "89.2%", valueEn: "89.2%", change: "库存超配量同降24%", changeEn: "Excess stock down 24%", isCritical: false }
      ],
      painPoints: [
        "大豆油、棕榈油、改性淀粉等重要基础精细化工和食品油脂由于好望角避航延迟了15-20天，在西欧加工厂引发局部减产。",
        "多渠道销售（传统分销、自营DTC与短视频即时电商）数据严重脱节，旺季遭遇爆发式退货时逆向物流堵库。",
        "欧盟与北美正在陆续起草对一次性塑料包装征收高额环境清障税，传统快消巨头面临严重的合规和成本核算洗牌。"
      ],
      painPointsEn: [
        "Key fats, food oils, and starch imports struggle under 15-20 day maritime detours, causing temporary output slowdowns in European plants.",
        "Siloed transactional data across social platforms, e-stores, and physical depots triggers severe whiplash effects and holiday return jams.",
        "New plastic wrapping carbon fees implemented in Europe force immediate redesigns on high-density packaging materials."
      ],
      leadTimeTrend: "陆港多式联运在大型配送中心接车排班等待期微降运行，物流整体较为平滑，但海运大宗延误使原料端存在突发断料可能。",
      leadTimeTrendEn: "Domestic fulfillment routes run smoothly, but raw global food imports are highly sensitive to coastal shipping vessel delays.",
      leadTimeStatus: "stable",
      strategicAdvice: [
        "全面引入基于LLM大模型的‘多渠道排产预测’算法，拉通商超、快时尚以及即时电商流量的库存联动，削减多级调拨费。",
        "在中西欧和拉美等中心，用‘轻量级铝制绿色周转箱’和‘数字循环仓’替代一次性瓦楞纸箱，提前对冲环境惩罚性绿税。"
      ],
      strategicAdviceEn: [
        "Integrate multimodal forecasting engines to parse live consumer traffic trends, minimizing transit warehouse transfers and stock mismatches.",
        "Adopt recycled standard modular shipping crates across European hubs, establishing an early shield against environmental fees."
      ],
      complianceFocus: "全球扩展生产者责任（EPR）延伸制度、ESG供应链强制人权审查与新版包装废弃物指令罚金。若不合规，面临上游源头追溯核查暂停出口限制。",
      complianceFocusEn: "Global EPR frameworks and plastics packaging directives. Companies run the risk of market suspension if high-recycle thresholds are not met on retail tiers."
    },
    {
      id: "industrial",
      name: "高端装备与工业设备",
      nameEn: "Heavy & Industrial Eq",
      engName: "Industrial Equipment & Heavy Machinery",
      icon: <Factory className="w-4 h-4" />,
      summary: "重型装备、高端机床与精密测量仪器的生产供应链对精度、可靠性和不可震动等安全运输有硬性要求。由于绕行好望角海运多颠荡和红海风浪，跨洲精密设备运输不得不向昂贵的定制海运动态稳定装置和超限大件重运空运服务靠拢。2026年欧洲及本土重工业投资高企，精密工业母机、机床关键伺服、数控系统到岸时效在美东和沿海出现局部承压。",
      summaryEn: "Precision machinery, machine tools, and specialized energy units rely on zero-defect, low-vibration transit. With Suez unavailable, global heavy industries utilize specialized ships with motion stabilizers or pay premiums for oversized air charters. As infrastructure spending surges, major assembly and CNC drive modules face land-based port clearing delays.",
      bgGradient: "from-neutral-50 to-slate-50",
      accentColor: "border-neutral-600 text-neutral-600 bg-neutral-50",
      metrics: [
        { label: "超大重载装备到货周期", labelEn: "Oversized Transit Lead", value: "55-66 天", valueEn: "55-66 Days", change: "相比去年 +18 天", changeEn: "+18 Days vs 2025", isCritical: true },
        { label: "高精仪表海运抗震合格率", labelEn: "Vibration-Safe Rate", value: "98.42%", valueEn: "98.42%", change: "长途海上风阻振荡增加", changeEn: "Cape wave impact", isCritical: false },
        { label: "在途高精度状态测度率", labelEn: "Status Tracking Rate", value: "82.6%", valueEn: "82.6%", change: "陀螺仪云端监控覆盖", changeEn: "Via Gyroscopic dynamic", isCritical: false },
        { label: "大件通关特殊项批放时效", labelEn: "Special Custom Permit Time", value: "缩短 -15.2%", valueEn: "-15.2%", change: "提前采用数字预申报", changeEn: "Via automated filing", isCritical: false }
      ],
      painPoints: [
        "五轴联动数控系统、大功率伺服电机等核心大体量元器件极度敏感，长途绕行非洲南岸遭遇特大风浪易引发高频次标定偏差。",
        "工业装备的售前定制、售后配品配属周期极其漫长，传统的国际零拼箱(LCL)拼散拼箱面临码头严重的等待周期折让。",
        "重载货物的通关和港区行车许可证审批程序复杂，在目的港（如美西、西欧港口）拖车和特种底盘司机不足阻碍陆内交付。"
      ],
      painPointsEn: [
        "High-precision multi-axis CNC systems suffer calibration drifts due to extreme ship motions on Cape of Good Hope detours.",
        "Highly customized machine auxiliary spares face prolonged container packing queues when using standard Less-than-Container Load (LCL) grids.",
        "Oversized load clearances and local transport permits remain complex, creating landward delivery bottlenecks at inland rail heads."
      ],
      leadTimeTrend: "交付时效明显被长线海运和内河驳船、大件公路车辆排挡限制拉长，高精尖制造业客户供应链确定性持续受阻。",
      leadTimeTrendEn: "Delivery lead times are heavily inflated by Cape maritime bypasses and inland Heavy Special Transport permit delays.",
      leadTimeStatus: "increase",
      strategicAdvice: [
        "在重点销售中心设立‘高端特种备件全功能前置数字分销仓’，支持24小时内极速现场配件交付，对冲跨洋供应阻隔。",
        "在昂贵的跨境重箱或多功能吊架箱上全面加装‘5G多轴陀螺仪+云端自振荡数据链’，在交付港进行预验收数字化定级，避免卸货后的二次延误。"
      ],
      strategicAdviceEn: [
        "Establish regional specialized spare-parts warehouses near critical markets to sustain 24-hour field repairs.",
        "Embed 5G-linked multi-axis gyroscopic sensors directly onto equipment cradles to run virtual diagnostics and accelerate border handovers."
      ],
      complianceFocus: "大宗大尺寸特特大特重货物安全吊装通行认证、国际标准化组织(ISO)重载防爆标准、以及针对进口母机原产国成分的可追溯法律审计细则。",
      complianceFocusEn: "Specialized heavy-transport permits, and stringent component country-of-origin auditing guidelines enforced at destination hubs."
    }
  ];

  const active = sectors.find((s) => s.id === activeSector) || sectors[0];

  return (
    <div className="bg-white border border-slate-300 rounded-sm p-6 shadow-xs text-left">
      <div className="border-b border-slate-200 pb-5 mb-6">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-600"></span> {t.breadcrumb}
        </h3>
        <p className="text-xl font-bold text-slate-900 tracking-tight mt-1">{t.title}</p>
        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
          {t.desc}
        </p>
      </div>

      {/* Tabs navigation list */}
      <div className="flex flex-wrap gap-2 mb-6">
        {sectors.map((sec) => (
          <button
            key={sec.id}
            onClick={() => setActiveSector(sec.id)}
            className={`flex items-center space-x-2 px-4 py-2.5 text-xs font-bold rounded-sm border cursor-pointer transition-all duration-200 ${
              activeSector === sec.id
                ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                : "bg-slate-50 text-slate-655 border-slate-300 hover:bg-slate-100 hover:border-slate-400"
            }`}
          >
            {sec.icon}
            <span>{lang === "en" ? sec.nameEn : sec.name}</span>
          </button>
        ))}
      </div>

      {/* Segment content viewport */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSector}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`border border-slate-200 rounded-sm p-5 md:p-6 ${active.bgGradient} transition-colors`}
        >
          {/* Header element for active vertical */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4 border-b border-slate-200 gap-3">
            <div className="flex items-center space-x-3">
              <span className={`p-2.5 rounded-sm border-2 ${active.accentColor}`}>
                {active.icon}
              </span>
              <div>
                <span className="text-[10px] font-bold text-blue-600 font-mono tracking-widest uppercase">
                  {t.activeVertical}
                </span>
                <h4 className="text-base font-black text-slate-900 tracking-tight">{lang === "en" ? active.nameEn : active.name}</h4>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 font-mono tracking-tight uppercase">
                {active.engName}
              </span>
              <div className="flex items-center gap-1.5 mt-0.5 justify-end">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs font-bold text-slate-700">{t.leadTimeLabel}</span>
                {active.leadTimeStatus === "increase" ? (
                  <span className="text-xs px-2 py-0.5 bg-rose-50 text-rose-700 font-bold border border-rose-200 rounded-sm animate-pulse">
                    {t.leadTimeIncrease}
                  </span>
                ) : active.leadTimeStatus === "stable" ? (
                  <span className="text-xs px-2 py-0.5 bg-amber-50 text-amber-700 font-bold border border-amber-200 rounded-sm">
                    {t.leadTimeStable}
                  </span>
                ) : (
                  <span className="text-xs px-2 py-0.5 bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 rounded-sm">
                    {t.leadTimeDecrease}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quick Stats Grid specific to sector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {active.metrics.map((met, index) => (
              <div key={index} className="bg-white border border-slate-200 p-4 rounded-sm shadow-xs">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                  {lang === "en" ? met.labelEn : met.label}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className={`text-xl font-extrabold ${met.isCritical ? "text-rose-600" : "text-slate-900"}`}>
                    {lang === "en" ? met.valueEn : met.value}
                  </span>
                  <span className={`text-[10px] font-mono font-bold ${met.isCritical ? "text-rose-500" : "text-emerald-600"}`}>
                    {lang === "en" ? met.changeEn : met.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Core breakdown text */}
          <div className="mt-6">
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              {t.overviewTitle}
            </h5>
            <p className="text-xs sm:text-sm text-slate-705 leading-relaxed bg-white p-4 rounded-sm border border-slate-200">
              {lang === "en" ? active.summaryEn : active.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Sector PainPoints / 核心痛点与风险 */}
            <div className="space-y-3 bg-white/70 border border-slate-200 p-5 rounded-sm">
              <h5 className="text-xs font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1.5 border-b border-rose-100 pb-2">
                <ShieldAlert className="w-4 h-4" />
                {t.riskTitle}
              </h5>
              <ul className="space-y-3 text-xs text-slate-650">
                {(lang === "en" ? active.painPointsEn : active.painPoints).map((pt, i) => (
                  <li key={i} className="flex gap-2 leading-relaxed">
                    <span className="text-rose-500 font-bold">&#8226;</span>
                    <div>{pt}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical advice & solutions / 破局路径与建议 */}
            <div className="space-y-3 bg-white/70 border border-slate-200 p-5 rounded-sm">
              <h5 className="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5 border-b border-blue-100 pb-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                {t.tacticalTitle}
              </h5>
              <ul className="space-y-3 text-xs text-slate-650">
                {(lang === "en" ? active.strategicAdviceEn : active.strategicAdvice).map((sa, i) => (
                  <li key={i} className="flex gap-2 items-start leading-relaxed">
                    <CornerDownRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>{sa}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hard compliance focus bottom note */}
          <div className="mt-6 bg-slate-900 text-white rounded-none p-4 text-xs font-sans border-l-4 border-blue-600">
            <div className="flex gap-2 items-center mb-1">
              <span className="bg-blue-600 text-white px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase rounded-sm border border-blue-400">
                {t.complianceTag}
              </span>
              <span className="font-bold text-slate-100 uppercase tracking-widest font-mono text-[10px]">
                {t.complianceHeader}
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed font-sans text-xs">
              {lang === "en" ? active.complianceFocusEn : active.complianceFocus}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
