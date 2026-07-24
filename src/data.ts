/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { KPIItem, TimelineEvent, FreightRateData, GrowthData, TechAdoptionData, HotTopic, PeriodKey, ReportingPeriod } from "./types";

// Multi-period data map
export const periodsData: Record<PeriodKey, ReportingPeriod> = {
  "2026_H1": {
    id: "2026_H1",
    code: "2026 H1",
    label: "2026年上半年",
    labelEn: "H1 2026",
    windowDesc: "半年窗口 (2026年1月 - 6月)",
    windowDescEn: "Half-Year Window (Jan - Jun 2026)",
    asOfDate: "2026年6月30日",
    asOfDateEn: "June 30, 2026",
    reportPeriodText: "2026年1月 - 6月",
    reportPeriodTextEn: "Jan - Jun 2026",
    titleOverview: "2026年上半年：地缘常态化重塑与AI智能体爆发",
    titleOverviewEn: "H1 2026: Geopolitical Normalization & Agentic SC Expansion",
    summaryText: "2026年上半年，全球供应链呈现出极其分化的发展格局。一方面，红海绕行好望角常态化推高跨太平洋与亚欧航线运价；另一方面，近岸外包2.0与AI智能体在采购计划端落地闭环。",
    summaryTextEn: "In H1 2026, global supply chains reshaped under Red Sea detours via Cape of Good Hope, boosting freight benchmarks while Nearshoring 2.0 and Agentic AI deployment accelerated across corporate networks.",
    wciBaseRate: 4828,
    scsiBaseIndex: 1.65,
    airFreightGrowth: 18.5,
    esgComplianceRate: 74.1,
    kpis: [
      {
        label: "全球集装箱货运指数 WCI",
        labelEn: "Global Container Freight Index WCI",
        value: "$4,828",
        change: "+145% 同比",
        changeEn: "+145% YoY",
        isPositive: true,
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
    ],
    freightRateTrends: [
      { month: "1月", monthEn: "Jan", rate2026: 3960, rate2025: 3200 },
      { month: "2月", monthEn: "Feb", rate2026: 4120, rate2025: 3550 },
      { month: "3月", monthEn: "Mar", rate2026: 4450, rate2025: 3100 },
      { month: "4月", monthEn: "Apr", rate2026: 4980, rate2025: 2850 },
      { month: "5月", monthEn: "May", rate2026: 5210, rate2025: 2980 },
      { month: "6月", monthEn: "Jun", rate2026: 4828, rate2025: 3370 }
    ],
    routeGrowthRates: [
      { route: "跨太平洋航线 (Asia-US)", routeEn: "Transpacific Air & Ocean (Asia-US)", airGrowth: 18.5, oceanGrowth: 2.1 },
      { route: "亚欧航线 (Asia-Europe)", routeEn: "Asia-Europe Corridors", airGrowth: 22.4, oceanGrowth: -1.5 },
      { route: "亚洲区域内 (Intra-Asia)", routeEn: "Intra-Asia Cargo Channels", airGrowth: 12.1, oceanGrowth: 6.8 },
      { route: "拉美与其它 (Transatlantic/Emerging)", routeEn: "Emerging Lanes & Transatlantic", airGrowth: 14.8, oceanGrowth: 4.2 }
    ],
    techAdoptions: [
      { tech: "大模型智能需求规划与库存决策", techEn: "LLM Agentic Planning & Stock Optimization", adoptionRate: 64, efficiencyImprovement: 28 },
      { tech: "视觉AGV与自动化无人仓储仓库", techEn: "Autonomous Vision AMR & Dark Warehousing", adoptionRate: 52, efficiencyImprovement: 35 },
      { tech: "基于物联传感器(IoT)的全流程数字孪生追踪", techEn: "IoT-linked Asset Telemetry & Digital Twins", adoptionRate: 71, efficiencyImprovement: 22 },
      { tech: "区块链防伪及低碳溯源数字凭证", techEn: "Blockchain Scope 3 Eco battery Passports", adoptionRate: 38, efficiencyImprovement: 18 }
    ]
  },
  "2026_Q1": {
    id: "2026_Q1",
    code: "2026 Q1",
    label: "2026年第1季度",
    labelEn: "Q1 2026",
    windowDesc: "季度窗口 (2026年1月 - 3月)",
    windowDescEn: "Quarterly Window (Jan - Mar 2026)",
    asOfDate: "2026年3月31日",
    asOfDateEn: "March 31, 2026",
    reportPeriodText: "2026年1月 - 3月",
    reportPeriodTextEn: "Jan - Mar 2026",
    titleOverview: "2026年第一季度：红海绕行阵痛与合规穿透启动",
    titleOverviewEn: "Q1 2026: Red Sea Rerouting Shock & CSDDD Compliance Launch",
    summaryText: "2026年首季度，绕行好望角成为四大航司标准运行线，集装箱空箱在欧洲及美西口岸出现严重堆积与失衡。强行开启的碳足迹审查让上游制造面临初查冲击。",
    summaryTextEn: "In Q1 2026, Cape detours established baseline ocean operations, triggering severe empty container bottlenecks across European ports while early CSDDD audits hit upstream suppliers.",
    wciBaseRate: 4177,
    scsiBaseIndex: 1.78,
    airFreightGrowth: 15.2,
    esgComplianceRate: 69.8,
    kpis: [
      { label: "全球集装箱货运指数 WCI", labelEn: "Global Container Freight Index WCI", value: "$4,177", change: "+112% 同比", changeEn: "+112% YoY", isPositive: true, desc: "首季度船东集中加征红海附加费与好望角绕行溢价。", descEn: "Carriers levied Red Sea surcharges and Cape detour premiums in Q1." },
      { label: "智能物流技术采用率", labelEn: "Smart Logistics Tech Adoption", value: "61.2%", change: "+5.0% 较去年底", changeEn: "+5.0% vs Late 2025", isPositive: true, desc: "急救式AI排线与预警系统迅速获得企业采购预算。", descEn: "Emergency AI rerouting and alert engines received rapid enterprise adoption." },
      { label: "绿色供应链合规达标率", labelEn: "Green SC Compliance Rate", value: "69.8%", change: "+4.2% YoY", changeEn: "+4.2% YoY", isPositive: true, desc: "欧盟CSDDD试点合规开始向一级供应商穿透。", descEn: "EU CSDDD pilot audits penetrated primary Tier-1 suppliers." },
      { label: "全球供应链压力指数 SCSI", labelEn: "Global SC Pressure Index SCSI", value: "1.78", change: "高位震荡", changeEn: "High Volatility", isPositive: false, desc: "受红海首轮改道拥堵及节后复工双重挤压。", descEn: "Squeezed by initial detour congestion and post-holiday factory restarts." }
    ],
    freightRateTrends: [
      { month: "1月", monthEn: "Jan", rate2026: 3960, rate2025: 3200 },
      { month: "2月", monthEn: "Feb", rate2026: 4120, rate2025: 3550 },
      { month: "3月", monthEn: "Mar", rate2026: 4450, rate2025: 3100 }
    ],
    routeGrowthRates: [
      { route: "跨太平洋航线 (Asia-US)", routeEn: "Transpacific Air & Ocean (Asia-US)", airGrowth: 15.2, oceanGrowth: 1.8 },
      { route: "亚欧航线 (Asia-Europe)", routeEn: "Asia-Europe Corridors", airGrowth: 19.8, oceanGrowth: -2.4 },
      { route: "亚洲区域内 (Intra-Asia)", routeEn: "Intra-Asia Cargo Channels", airGrowth: 10.5, oceanGrowth: 5.2 },
      { route: "拉美与其它 (Transatlantic/Emerging)", routeEn: "Emerging Lanes & Transatlantic", airGrowth: 12.0, oceanGrowth: 3.1 }
    ],
    techAdoptions: [
      { tech: "大模型智能需求规划与库存决策", techEn: "LLM Agentic Planning & Stock Optimization", adoptionRate: 58, efficiencyImprovement: 24 },
      { tech: "视觉AGV与自动化无人仓储仓库", techEn: "Autonomous Vision AMR & Dark Warehousing", adoptionRate: 48, efficiencyImprovement: 30 },
      { tech: "基于物联传感器(IoT)的全流程数字孪生追踪", techEn: "IoT-linked Asset Telemetry & Digital Twins", adoptionRate: 65, efficiencyImprovement: 19 },
      { tech: "区块链防伪及低碳溯源数字凭证", techEn: "Blockchain Scope 3 Eco battery Passports", adoptionRate: 32, efficiencyImprovement: 15 }
    ]
  },
  "2026_Q2": {
    id: "2026_Q2",
    code: "2026 Q2",
    label: "2026年第2季度",
    labelEn: "Q2 2026",
    windowDesc: "季度窗口 (2026年4月 - 6月)",
    windowDescEn: "Quarterly Window (Apr - Jun 2026)",
    asOfDate: "2026年6月30日",
    asOfDateEn: "June 30, 2026",
    reportPeriodText: "2026年4月 - 6月",
    reportPeriodTextEn: "Apr - Jun 2026",
    titleOverview: "2026年第二季度：美欧运价攀升与近岸外包产能释放",
    titleOverviewEn: "Q2 2026: Freight Peak Spikes & Nearshoring Production Release",
    summaryText: "进入二季度，旺季抢舱提前开启，长途运费高位再次突破$5,200美元/FEU。中墨走廊近岸外包产能全面释放，航空包机货运需求出现爆发性反弹。",
    summaryTextEn: "In Q2 2026, early peak-season bookings pushed spot container benchmarks over $5,200/FEU. Mexican Nearshoring parks expanded output while cross-border e-commerce air charter demand spiked.",
    wciBaseRate: 5006,
    scsiBaseIndex: 1.58,
    airFreightGrowth: 22.8,
    esgComplianceRate: 74.1,
    kpis: [
      { label: "全球集装箱货运指数 WCI", labelEn: "Global Container Freight Index WCI", value: "$5,006", change: "+168% 同比", changeEn: "+168% YoY", isPositive: true, desc: "二季度提前抢舱与远东缺箱再次推高现货指数。", descEn: "Early peak-season bookings and Far East box shortages pushed spot benchmarks." },
      { label: "智能物流技术采用率", labelEn: "Smart Logistics Tech Adoption", value: "68.4%", change: "+7.2% 较一季度", changeEn: "+7.2% vs Q1 2026", isPositive: true, desc: "大模型生成式智能体在多语言采购博弈中大规模应用。", descEn: "Generative AI multi-agents deployed broadly across multi-lingual negotiations." },
      { label: "绿色供应链合规达标率", labelEn: "Green SC Compliance Rate", value: "74.1%", change: "+4.3% 较一季度", changeEn: "+4.3% vs Q1 2026", isPositive: true, desc: "中国及东南亚绿电电池护照认证通过率攀升。", descEn: "Green battery passport certifications rose across China and SE Asia." },
      { label: "全球供应链压力指数 SCSI", labelEn: "Global SC Pressure Index SCSI", value: "1.58", change: "温和回落", changeEn: "Mild Easing", isPositive: false, desc: "近岸多网点分流缓和了单一港口吞吐卡顿。", descEn: "Multi-node Nearshoring distribution eased congestion at single gateway ports." }
    ],
    freightRateTrends: [
      { month: "4月", monthEn: "Apr", rate2026: 4980, rate2025: 2850 },
      { month: "5月", monthEn: "May", rate2026: 5210, rate2025: 2980 },
      { month: "6月", monthEn: "Jun", rate2026: 4828, rate2025: 3370 }
    ],
    routeGrowthRates: [
      { route: "跨太平洋航线 (Asia-US)", routeEn: "Transpacific Air & Ocean (Asia-US)", airGrowth: 21.8, oceanGrowth: 2.4 },
      { route: "亚欧航线 (Asia-Europe)", routeEn: "Asia-Europe Corridors", airGrowth: 25.0, oceanGrowth: -0.6 },
      { route: "亚洲区域内 (Intra-Asia)", routeEn: "Intra-Asia Cargo Channels", airGrowth: 13.7, oceanGrowth: 8.4 },
      { route: "拉美与其它 (Transatlantic/Emerging)", routeEn: "Emerging Lanes & Transatlantic", airGrowth: 17.6, oceanGrowth: 5.3 }
    ],
    techAdoptions: [
      { tech: "大模型智能需求规划与库存决策", techEn: "LLM Agentic Planning & Stock Optimization", adoptionRate: 64, efficiencyImprovement: 28 },
      { tech: "视觉AGV与自动化无人仓储仓库", techEn: "Autonomous Vision AMR & Dark Warehousing", adoptionRate: 52, efficiencyImprovement: 35 },
      { tech: "基于物联传感器(IoT)的全流程数字孪生追踪", techEn: "IoT-linked Asset Telemetry & Digital Twins", adoptionRate: 71, efficiencyImprovement: 22 },
      { tech: "区块链防伪及低碳溯源数字凭证", techEn: "Blockchain Scope 3 Eco battery Passports", adoptionRate: 38, efficiencyImprovement: 18 }
    ]
  },
  "2025_H2": {
    id: "2025_H2",
    code: "2025 H2",
    label: "2025年下半年",
    labelEn: "H2 2025",
    windowDesc: "半年窗口 (2025年7月 - 12月)",
    windowDescEn: "Half-Year Window (Jul - Dec 2025)",
    asOfDate: "2025年12月31日",
    asOfDateEn: "December 31, 2025",
    reportPeriodText: "2025年7月 - 12月",
    reportPeriodTextEn: "Jul - Dec 2025",
    titleOverview: "2025年下半年：巴拿马限航与跨国供应链去单一化",
    titleOverviewEn: "H2 2025: Panama Canal Draft Restrictions & Vendor Sourcing Diversification",
    summaryText: "2025年下半年，因气象干旱导致巴拿马运河通行船只限额，全球货主加速向美西美东海铁联运分流。同时，企业开始大规模测试‘JIT + Just-in-Case’双轨安全库存模型。",
    summaryTextEn: "In H2 2025, severe drought restricted Panama Canal vessel transits, forcing intermodal rerouting while enterprise supply chain teams rolled out hybrid 'JIT + Just-in-Case' stock buffers.",
    wciBaseRate: 3280,
    scsiBaseIndex: 1.42,
    airFreightGrowth: 11.4,
    esgComplianceRate: 65.6,
    kpis: [
      { label: "全球集装箱货运指数 WCI", labelEn: "Global Container Freight Index WCI", value: "$3,280", change: "+38% 同比", changeEn: "+38% YoY", isPositive: true, desc: "2025下半年受美东港口谈判及巴拿马运河限航推动。", descEn: "Driven by US East Coast contract talks and Panama draft limits in late 2025." },
      { label: "智能物流技术采用率", labelEn: "Smart Logistics Tech Adoption", value: "56.2%", change: "+8.1% 较上半年", changeEn: "+8.1% vs H1 2025", isPositive: true, desc: "大模型需求预测与WMS仓储机器人快速普及。", descEn: "LLM forecasting tools and warehouse robotics gained momentum." },
      { label: "绿色供应链合规达标率", labelEn: "Green SC Compliance Rate", value: "65.6%", change: "+6.0% YoY", changeEn: "+6.0% YoY", isPositive: true, desc: "企业应对2026 CSDDD预审计准备全面铺开。", descEn: "Enterprises initiated pre-audit readiness for upcoming CSDDD rules." },
      { label: "全球供应链压力指数 SCSI", labelEn: "Global SC Pressure Index SCSI", value: "1.42", change: "盘整修复", changeEn: "Consolidating", isPositive: false, desc: "运力适度释放但受关税预期调整扰动。", descEn: "Capacity released modestly amid tariff expectation shifts." }
    ],
    freightRateTrends: [
      { month: "7月", monthEn: "Jul", rate2026: 3120, rate2025: 2950 },
      { month: "8月", monthEn: "Aug", rate2026: 3340, rate2025: 3100 },
      { month: "9月", monthEn: "Sep", rate2026: 3250, rate2025: 2880 },
      { month: "10月", monthEn: "Oct", rate2026: 3180, rate2025: 2750 },
      { month: "11月", monthEn: "Nov", rate2026: 3390, rate2025: 2900 },
      { month: "12月", monthEn: "Dec", rate2026: 3500, rate2025: 3150 }
    ],
    routeGrowthRates: [
      { route: "跨太平洋航线 (Asia-US)", routeEn: "Transpacific Air & Ocean (Asia-US)", airGrowth: 11.2, oceanGrowth: 3.2 },
      { route: "亚欧航线 (Asia-Europe)", routeEn: "Asia-Europe Corridors", airGrowth: 12.8, oceanGrowth: 1.5 },
      { route: "亚洲区域内 (Intra-Asia)", routeEn: "Intra-Asia Cargo Channels", airGrowth: 9.4, oceanGrowth: 5.6 },
      { route: "拉美与其它 (Transatlantic/Emerging)", routeEn: "Emerging Lanes & Transatlantic", airGrowth: 10.1, oceanGrowth: 4.0 }
    ],
    techAdoptions: [
      { tech: "大模型智能需求规划与库存决策", techEn: "LLM Agentic Planning & Stock Optimization", adoptionRate: 46, efficiencyImprovement: 20 },
      { tech: "视觉AGV与自动化无人仓储仓库", techEn: "Autonomous Vision AMR & Dark Warehousing", adoptionRate: 41, efficiencyImprovement: 26 },
      { tech: "基于物联传感器(IoT)的全流程数字孪生追踪", techEn: "IoT-linked Asset Telemetry & Digital Twins", adoptionRate: 58, efficiencyImprovement: 16 },
      { tech: "区块链防伪及低碳溯源数字凭证", techEn: "Blockchain Scope 3 Eco battery Passports", adoptionRate: 26, efficiencyImprovement: 12 }
    ]
  },
  "2025_FY": {
    id: "2025_FY",
    code: "2025 FY",
    label: "2025年全年",
    labelEn: "FY 2025",
    windowDesc: "年度窗口 (2025年1月 - 12月)",
    windowDescEn: "Full-Year Window (Jan - Dec 2025)",
    asOfDate: "2025年12月31日",
    asOfDateEn: "December 31, 2025",
    reportPeriodText: "2025年1月 - 12月",
    reportPeriodTextEn: "Jan - Dec 2025",
    titleOverview: "2025年全年：从疫情后消化期向结构性分化重组转型",
    titleOverviewEn: "FY 2025: Post-Pandemic Digesting Phase to Structural Re-alignment",
    summaryText: "2025年全年记录了全球物流由极低成本追求向韧性保障的拐点转折。跨国企业在去库存完成后重建多源供应体系，为2026年全面应对地缘常态化打下基础。",
    summaryTextEn: "FY 2025 represented the inflection point from cost-driven logistics to resilience-first networks, laying structural foundations for the 2026 multi-node and ESG compliance era.",
    wciBaseRate: 3150,
    scsiBaseIndex: 1.38,
    airFreightGrowth: 9.8,
    esgComplianceRate: 61.0,
    kpis: [
      { label: "全球集装箱货运指数 WCI", labelEn: "Global Container Freight Index WCI", value: "$3,150", change: "+24% 较2024", changeEn: "+24% vs 2024", isPositive: true, desc: "2025年运价中枢较2024年适度回升，走出底部区间。", descEn: "2025 rate baseline recovered moderately above 2024 low points." },
      { label: "智能物流技术采用率", labelEn: "Smart Logistics Tech Adoption", value: "52.0%", change: "+14.0% 较2024", changeEn: "+14.0% vs 2024", isPositive: true, desc: "AI大模型进入企业供应链决策实验与试用期。", descEn: "Generative AI entered corporate supply chain pilot deployments." },
      { label: "绿色供应链合规达标率", labelEn: "Green SC Compliance Rate", value: "61.0%", change: "+10.5% vs 2024", changeEn: "+10.5% vs 2024", isPositive: true, desc: " Scope 3 排放量化统计在大型跨国零售企业率先铺开。", descEn: "Scope 3 emissions accounting expanded across multinational retail." },
      { label: "全球供应链压力指数 SCSI", labelEn: "Global SC Pressure Index SCSI", value: "1.38", change: "平缓复苏", changeEn: "Gradual Recovery", isPositive: false, desc: "港口效率保持稳定，但受局地天气与关税消息短期波动。", descEn: "Port throughput remained steady despite short-term tariff chatter." }
    ],
    freightRateTrends: [
      { month: "1月", monthEn: "Jan", rate2026: 3200, rate2025: 2800 },
      { month: "3月", monthEn: "Mar", rate2026: 3100, rate2025: 2600 },
      { month: "5月", monthEn: "May", rate2026: 2980, rate2025: 2500 },
      { month: "7月", monthEn: "Jul", rate2026: 2950, rate2025: 2700 },
      { month: "9月", monthEn: "Sep", rate2026: 2880, rate2025: 2650 },
      { month: "11月", monthEn: "Nov", rate2026: 2900, rate2025: 2750 }
    ],
    routeGrowthRates: [
      { route: "跨太平洋航线 (Asia-US)", routeEn: "Transpacific Air & Ocean (Asia-US)", airGrowth: 9.8, oceanGrowth: 2.8 },
      { route: "亚欧航线 (Asia-Europe)", routeEn: "Asia-Europe Corridors", airGrowth: 10.5, oceanGrowth: 1.2 },
      { route: "亚洲区域内 (Intra-Asia)", routeEn: "Intra-Asia Cargo Channels", airGrowth: 8.2, oceanGrowth: 4.5 },
      { route: "拉美与其它 (Transatlantic/Emerging)", routeEn: "Emerging Lanes & Transatlantic", airGrowth: 9.0, oceanGrowth: 3.5 }
    ],
    techAdoptions: [
      { tech: "大模型智能需求规划与库存决策", techEn: "LLM Agentic Planning & Stock Optimization", adoptionRate: 40, efficiencyImprovement: 18 },
      { tech: "视觉AGV与自动化无人仓储仓库", techEn: "Autonomous Vision AMR & Dark Warehousing", adoptionRate: 38, efficiencyImprovement: 22 },
      { tech: "基于物联传感器(IoT)的全流程数字孪生追踪", techEn: "IoT-linked Asset Telemetry & Digital Twins", adoptionRate: 52, efficiencyImprovement: 14 },
      { tech: "区块链防伪及低碳溯源数字凭证", techEn: "Blockchain Scope 3 Eco battery Passports", adoptionRate: 22, efficiencyImprovement: 10 }
    ]
  }
};

export const defaultPeriod: PeriodKey = "2026_H1";

export function getPeriodData(key: PeriodKey): ReportingPeriod {
  return periodsData[key] || periodsData["2026_H1"];
}

// 2026 H1 KPI Data (default export for backwards compatibility)
export const kpis: KPIItem[] = periodsData["2026_H1"].kpis;

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
