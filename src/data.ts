/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { KPIItem, TimelineEvent, FreightRateData, GrowthData, TechAdoptionData, HotTopic } from "./types";

// 2026 H1 KPI Data
export const kpis: KPIItem[] = [
  {
    label: "全球集装箱货运指数 WCI",
    labelEn: "Global Container Freight Index WCI",
    value: "$4,828",
    change: "+145% 同比",
    changeEn: "+145% YoY",
    isPositive: true, // positive meaning increased cost/rate
    desc: "由于红海局势常态化与好望角绕行导致运力长期紧张。",
    descEn: "Long-term capacity constraints due to normalized Red Sea routing via Cape of Good Hope."
  },
  {
    label: "智能物流技术采用率",
    labelEn: "Smart Logistics Tech Adoption",
    value: "68.4%",
    change: "+12.2% 较去年底",
    changeEn: "+12.2% vs. Late 2025",
    isPositive: true,
    desc: "预测性需求规划、AI智能排线及自动化仓储成为标配。",
    descEn: "Predictive demand planning, AI-driven dispatch, and automated warehousing are now standard."
  },
  {
    label: "绿色供应链合规达标率",
    labelEn: "Green SC Compliance Rate",
    value: "74.1%",
    change: "+8.5% YoY",
    changeEn: "+8.5% YoY",
    isPositive: true,
    desc: "欧盟CSDDD法案推行与Scope 3碳披露硬性要求下，ESG合规大幅提速。",
    descEn: "Under the push of EU CSDDD and Scope 3 carbon disclosure mandates, ESG compliance is accelerating."
  },
  {
    label: "全球供应链压力指数 SCSI",
    labelEn: "Global SC Pressure Index SCSI",
    value: "1.65",
    change: "高位趋稳",
    changeEn: "Stable at Highs",
    isPositive: false,
    desc: "较疫情期高点大幅回落，但仍受局部地缘冲突及港口拥堵困扰。",
    descEn: "Significantly down from pandemic peaks, but still challenged by regional conflicts and mild port congestions."
  }
];

// Timeline Events (行业动态) for 2026 H1
export const timelineEvents: TimelineEvent[] = [
  {
    id: "evt-1",
    date: "2026-01-15",
    title: "红海绕行好望角方案“常态化”",
    titleEn: "Red Sea Cape Rerouter Becomes Normalized Base Operator",
    category: "shipping",
    badge: "海运重击",
    badgeEn: "Ocean Impact",
    summary: "由于苏伊士运河通道依然受阻，几大主要航运公司确认2026年上半年全线保持好望角绕行。海运航程平均增加10-14天，燃油消耗增加近30%。",
    summaryEn: "With the Suez Canal remaining restricted, major ocean carriers confirm routing via the Cape of Good Hope as the baseline for H1 2026, extending voyages by 10-14 days and fuel consumption by 30%.",
    content: "红海通道安全局势长期悬而未决。各大船东（包括马士基、地中海航运、达飞等）在2026年首季度的财报中明确表示，绕行好望角已作为长期运营基准。这导致中欧及美东航线集装箱周转率暴跌，运价高企不退。",
    contentEn: "The security situation in the Red Sea corridor remains unresolved. Major asset operators (with Maersk, MSC, and CMA CGM leading) declared in their Q1 2026 briefs that Cape of Good Hope routing is the core operational standard. Consequently, vessel turnaround efficiency on China-Europe and Asia-US East Coast runs has dipped, holding prices at elevated plateaus."
  },
  {
    id: "evt-2",
    date: "2026-02-28",
    title: "欧盟CSDDD（企业可持续尽职调查指令）正式分步实施",
    titleEn: "EU CSDDD Sustainable Due Diligence Enters Active Step Phase",
    category: "esg",
    badge: "ESG硬合规",
    badgeEn: "ESG Mandatory",
    summary: "欧盟针对大型企业及其供应链的CSDDD正式生效。强制其对整条供应链上游的环保与劳工问题进行穿透核查与治理。",
    summaryEn: "The Corporate Sustainability Due Diligence Directive (CSDDD) officially enters into force, requiring massive companies and their global suppliers to perform strict audits on upper-tier environmental footprint and labor compliance.",
    content: "企业面临极其苛刻的供应链追溯要求。2026年上半年，所有向欧洲出口的重要中国供应链企业全面引入数字化碳普惠与ESG行为审计。不合规企业不仅可能失去准入资格，还将面临高达全球营业额5%的巨额罚款风险。",
    contentEn: "Enterprises confront extremely granular sustainability traceback audits. In H1 2026, leading exporters to European destinations have introduced digitalized Scope 3 audit trails. Non-compliant operations risk losing local market access alongside severe penalties reaching up to 5% of their total global revenues."
  },
  {
    id: "evt-3",
    date: "2026-03-10",
    title: "跨境电商包机运力需求呈“爆发性”增长",
    titleEn: "Cross-border E-Commerce Air Charters Experience Exponential Growth",
    category: "shipping",
    badge: "航空货运",
    badgeEn: "Air Cargo",
    summary: "受Temu、希音Shein和速卖通的高歌猛进与空前向欧、美发货势流，中国去欧美航空快运费率大涨22%，包机仓位创历史新高。",
    summaryEn: "Driven by the swift expansion of Shein, Temu, and AliExpress in Western consumer hubs, China-to-US/EU air freight rates jumped 22%, with cargo charter allocations hitting historic highs.",
    content: "在海运周期不确定性增加的推波助澜下，跨境快电商供应链高度依赖航空货运。珠三角、长三角机场多条货运专线常年满载，航司通过‘客改货’和加开专线极力承接此轮红利。市场竞争由货源竞争转向核心航线仓位的深度绑定。",
    contentEn: "Compounded by maritime transit delays, cross-border retail giants highly depend on air cargo channels. Regional hubs (Shenzhen, Guangzhou, Hong Kong) operate near cargo capacity year-round. Cargo carriers optimized schedules by retrofitting passenger jets and expanding special flight networks, shifting local logistics strategies to multi-year space commitments."
  },
  {
    id: "evt-4",
    date: "2026-04-20",
    title: "供应链“智能体”在采购与计划端大规模商用",
    titleEn: "Agentic SC Architectures Deploy Broadly in Procurement & Schedulers",
    category: "tech",
    badge: "AI变革",
    badgeEn: "AI Revolution",
    summary: "基于大语言模型与多模态AI的‘供应链智能算法（Agentic Planning）’在首批500强企业中实现90%以上覆盖。库存拟合及预测准确率提高超25%。",
    summaryEn: "Generative AI multi-agent 'Agentic Planning' algorithms reach over 90% deployment among surveyed Fortune 500 supply chains, elevating lead-time and stock prediction accuracy by over 25%.",
    content: "2026年被业界称为‘供应链AI智能体元年’。以往依靠Excel和手工计算的需求规划、价格谈判及跨国清关被深度集成到LLM Agent系统中，实现秒级响应与自动化派单，极大地压缩了业务冗余度。",
    contentEn: "The year 2026 is hailed as the 'Inaugural Year of Agentic Supply Chains'. Traditional procurement routines, demand calculations, and multi-border clearance logistics, once bottlenecked in Excel, are integrated into autonomous LLM systems to execute dispatch workflows in seconds with minimal human errors."
  },
  {
    id: "evt-5",
    date: "2026-05-12",
    title: "“近岸外包2.0”与墨、越供应链交货期缩短",
    titleEn: "Nearshoring 2.0 Shortens Average Lead Times in Mexico & Vietnam",
    category: "geopolitics",
    badge: "地缘重塑",
    badgeEn: "Geopolitical Shift",
    summary: "中墨、美墨供应链走廊深化，由于墨西哥及越南工业园区基建补强，其供应链平均交货周期缩短了15%。对传统跨太平洋长链条产生了强力分流。",
    summaryEn: "With US-Mexico-Vietnam supply lanes strengthening, industrial site improvements in Mexico and SE Asia reduced average delivery lead times by 15%, successfully rerouting volumes from transpacific runs.",
    content: "伴随着‘中国/亚太+1’战略走向纵深，中资企业在墨西哥与越南建设的制造及分拨中心在2026上半年释放了大量产能。虽物流成本短期难以压至最低，但规避地缘政治摩擦、获取免税待遇的红利愈加显著。",
    contentEn: "As 'Asia+1' supply strategies matured, manufacturing and distribution parks invested by global corporations in Mexico and Southeast Asian zones scaled up production in H1 2026. Despite near-term premium fees in local warehousing, avoiding tariffs and establishing adjacent inventory buffers has proven a powerful shield."
  }
];

// Drewry WCI (World Container Index) Container Freight Rate Data (Jan - Jun 2026 & 2025 comparison)
// Showing average price in USD per 40ft container
export const freightRateTrends: FreightRateData[] = [
  { month: "1月", monthEn: "Jan", rate2026: 3960, rate2025: 3200 },
  { month: "2月", monthEn: "Feb", rate2026: 4120, rate2025: 3550 },
  { month: "3月", monthEn: "Mar", rate2026: 4450, rate2025: 3100 },
  { month: "4月", monthEn: "Apr", rate2026: 4980, rate2025: 2850 },
  { month: "5月", monthEn: "May", rate2026: 5210, rate2025: 2980 },
  { month: "6月", monthEn: "Jun", rate2026: 4828, rate2025: 3370 }, // 6-month status as of current date (2026-06-08)
];

// Air vs Ocean Route Growth Rate (%) H1 2026 YoY
export const routeGrowthRates: GrowthData[] = [
  { route: "跨太平洋航线 (Asia-US)", routeEn: "Transpacific Air & Ocean (Asia-US)", airGrowth: 18.5, oceanGrowth: 2.1 },
  { route: "亚欧航线 (Asia-Europe)", routeEn: "Asia-Europe Corridors", airGrowth: 22.4, oceanGrowth: -1.5 },
  { route: "亚洲区域内 (Intra-Asia)", routeEn: "Intra-Asia Cargo Channels", airGrowth: 12.1, oceanGrowth: 6.8 },
  { route: "拉美与其它 (Transatlantic/Emerging)", routeEn: "Emerging Lanes & Transatlantic", airGrowth: 14.8, oceanGrowth: 4.2 }
];

// Tech adoption in H1 2026
export const techAdoptions: TechAdoptionData[] = [
  { tech: "大模型智能需求规划与库存决策", techEn: "LLM Agentic Planning & Stock Optimization", adoptionRate: 64, efficiencyImprovement: 28 },
  { tech: "视觉AGV与自动化无人仓储仓库", techEn: "Autonomous Vision AMR & Dark Warehousing", adoptionRate: 52, efficiencyImprovement: 35 },
  { tech: "基于物联传感器(IoT)的全流程数字孪生追踪", techEn: "IoT-linked Asset Telemetry & Digital Twins", adoptionRate: 71, efficiencyImprovement: 22 },
  { tech: "区块链防伪及低碳溯源数字凭证", techEn: "Blockchain Scope 3 Eco battery Passports", adoptionRate: 38, efficiencyImprovement: 18 }
];

// Hot Topics Details
export const hotTopics: HotTopic[] = [
  {
    id: "topic-csddd",
    title: "欧盟企业可持续发展尽职调查指令 (CSDDD) 的全面落地",
    titleEn: "Active Enforcement of the EU Sustainability Mandates (CSDDD)",
    summary: "2026年是欧盟CSDDD关键起跑年。该法案极度考验供应链上游信息披露真实性，导致低碳碳指标披露、劳工事项披露成为跨国采购的一票否决项。",
    summaryEn: "The year 2026 is the critical kick-off year for CSDDD. This regulation tests the authenticity of trace data, turning carbon reports and labor practices into absolute gatekeepers of global vendor approvals.",
    keyPoints: [
      "上游供应链溯源审计费用平均推高产品总成本2.5%-4.0%。",
      "推动‘区块链可持续碳信贷凭证’和‘电池数字护照’在整条产业链上的全面普及。",
      "不合格供应链面临欧洲重罚，促使多国出口导向型产业加速环保升级与合规认证。"
    ],
    keyPointsEn: [
      "Upstream audit requirements have systematically elevated absolute vendor product expenditures by 2.5% to 4.0%.",
      "Spurs the integration of 'blockchain sustainability credentials' and 'digital carbon passports' on regional freight lines.",
      "Non-compliant operations face total ban lists, motivating factory parks to hasten green transitions and compliance certifications."
    ],
    regulationDetails: "CSDDD明确要求营业额在1.5亿欧元以上、或高敏感行业4000万欧元以上的非欧盟企业，只要在欧业务符合规模均须纳管。对整个亚太低碳替代供应链及第三方检测合规产生了重大的产业溢出效应。",
    regulationDetailsEn: "The CSDDD governs non-EU enterprises generating over €150 million (or €40 million in high-impact operations) if they reach specific European commercial parameters. This exerts a powerful green spillover effect across manufacturing corridors in APAC and SE Asia.",
    impactLevel: "High"
  },
  {
    id: "topic-ai",
    title: "从单点人工智能到集成式“感知-响应”供应链智能体 (Agentic SC)",
    titleEn: "Transitioning to Closed-Loop Sense & Respond Agentic Networks (Agentic SC)",
    summary: "传统的独立数据仓和看板已被自动化的感知机器人替代。智能体能够在采购谈判、路由优化和实时补货决策上实现跨部门的闭环敏捷操盘。",
    summaryEn: "Traditional analytics dashboards are giving way to active automated decision managers. Generative agents oversee price negotiations, routing deviations, and real-time restocking workflows autonomously.",
    keyPoints: [
      "大语言模型AI通过调取ERP、TMS、WMS开放API，自主发起多方询价、最优化排程与多供应商自动分配。",
      "人类员工的角色已由前台操作者转变为后台审核核定和异常处理专家。",
      "物流调度人员缩减率平均达30%，而紧急特急事件处理效率提升了4倍。"
    ],
    keyPointsEn: [
      "Generative deep models coordinate with ERP, TMS, and WMS APIs to negotiate spot prices and optimize container allocation.",
      "The role of human teams has transitioned from manual record entry to active oversight and handling systemic exceptions.",
      "Direct scheduling manpower requirements fell by 30% while emergency incident resolution rates increased 4x."
    ],
    regulationDetails: "在跨国巨头（如耐克、联合利华、联想）的最新2026 H1实践中，生成式AI被嵌入多语言采购谈判模块，自动在0.3秒内计算最佳博弈价格和交付节点，对整个中介货代生态产生强烈颠覆。",
    regulationDetailsEn: "In H1 2026 deployments among retail conglomerates, generative intelligence coordinates automated multi-lingual procurement quotes and lead-time contracts in 0.3s, completely transforming brokerage operations.",
    impactLevel: "High"
  },
  {
    id: "topic-resilience",
    title: "“即时战略 Just-in-Time (JIT)” 终结，还是 “双轨并立 Hybrid”？",
    titleEn: "The Demise of Pure Just-In-Time (JIT) vs. Hybrid Resilience Models",
    summary: "地缘危机及频繁的劳工罢工事件、气温变暖引发巴拿马运河历史级水位震荡，导致企业放弃单一的最低成本采购策略，转而构建极富弹性的‘JIT + Just-in-Case (安全冗余)’混动模式。",
    summaryEn: "Friction in transit channels and water-level volatility in the Panama Canal have led companies to abandon pure low-yield inventory limits, scaling up hybrid 'JIT + Just-In-Case' inventory safety margins.",
    keyPoints: [
      "普遍在主要口岸和消费中心建立‘缓冲区’，核心零部件和原材料安全库存额度提升了20%-35%。",
      "对同一主料件维持‘主源+副源’双供应链配置，多区域地缘错位供应占比上升。",
      "虽然名义上增加了库存持有成本，但由于断供损失规避，企业整体毛利率中值在历经多轮波动后表现更优。"
    ],
    keyPointsEn: [
      "Safety thresholds for critical parts are increased by 20% to 35% within nearby domestic buffers.",
      "Active implementation of dual-sourcing (primary + redundant vendors) limits risks of single-point shipping delays.",
      "While carrying charges slightly increased, the minimization of idle factory hours has netted better consolidated profit margins."
    ],
    regulationDetails: "巴拿马运河2026年虽有降雨缓解，但吃水深度限制成为长期科学定理，结合苏伊士运河中断常态化，倒逼供应链形成‘去运河化’全球海铁空联运大循环体系。",
    regulationDetailsEn: "Although tropical rains offered minor draft relief in the Panama Canal, draft limits remain mathematically constrained. Combined with Red Sea trends, this forces logistics leads to bypass canals with ocean-rail-air corridors.",
    impactLevel: "Medium"
  }
];
