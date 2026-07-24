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
