export type PeriodKey = "2026_H1" | "2026_Q1" | "2026_Q2" | "2025_H2" | "2025_FY";

export interface ReportingPeriod {
  id: PeriodKey;
  code: string;
  label: string;
  labelEn: string;
  windowDesc: string;
  windowDescEn: string;
  asOfDate: string;
  asOfDateEn: string;
  reportPeriodText: string;
  reportPeriodTextEn: string;
  titleOverview: string;
  titleOverviewEn: string;
  summaryText: string;
  summaryTextEn: string;
  wciBaseRate: number;
  scsiBaseIndex: number;
  airFreightGrowth: number;
  esgComplianceRate: number;
  kpis: KPIItem[];
  freightRateTrends: FreightRateData[];
  routeGrowthRates: GrowthData[];
  techAdoptions: TechAdoptionData[];
}

export interface KPIItem {
  label: string;
  labelEn: string;
  value: string | number;
  change: string;
  changeEn: string;
  isPositive: boolean;
  desc: string;
  descEn: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  titleEn: string;
  category: "shipping" | "geopolitics" | "tech" | "esg";
  badge: string;
  badgeEn: string;
  summary: string;
  summaryEn: string;
  content: string;
  contentEn: string;
}

export interface FreightRateData {
  month: string;
  monthEn: string;
  rate2026: number; // 2026 Drewry WCI Rate in USD
  rate2025: number; // 2025 Drewry WCI Rate in USD
}

export interface GrowthData {
  route: string;
  routeEn: string;
  airGrowth: number;
  oceanGrowth: number;
}

export interface TechAdoptionData {
  tech: string;
  techEn: string;
  adoptionRate: number;
  efficiencyImprovement: number;
}

export interface HotTopic {
  id: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  keyPoints: string[];
  keyPointsEn: string[];
  regulationDetails?: string;
  regulationDetailsEn?: string;
  impactLevel: "High" | "Medium" | "Low";
}

export interface SearchResult {
  text: string;
  sources: Array<{
    title: string;
    uri: string;
  }>;
}
