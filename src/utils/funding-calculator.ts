// Funding Requirement Calculator for Tatami Labs
export interface FundingAssumptions {
  // Startup costs
  startupCosts: {
    companyRegistration: number; // ¥300,000
    brandDesign: number; // ¥150,000
  };
  
  // Monthly costs structure (corrected)
  monthlyCosts: {
    ceo: number; // ¥700,000
    contentDirector: number; // ¥250,000 -> ¥400,000 from month 3
    tourismDirector: number; // ¥500,000
    communityDirectors: number; // ¥700,000 (2 people × ¥350,000)
    ecommerceExecutive: number; // ¥400,000 from month 4
    coo: number; // ¥500,000 from month 3
    aiConsultant: number; // ¥380,000
    videoConsultant: number; // ¥150,000
    culturalResourceManager: number; // ¥400,000
    
    // Tech costs
    server: number; // ¥50,000
    design: number; // ¥50,000
    crm: number; // ¥50,000
    domain: number; // ¥2,000
    
    // Marketing (corrected rules)
    contentSeoBase: number; // ¥15,000 base, +15% monthly, max ¥2M
    socialMediaBase: number; // ¥50,000 base, +5% monthly
    ecommerceMarketing: number; // ¥100,000
    
    // Admin
    accounting: number; // ¥50,000
    travelBase: number; // ¥200,000 base, +¥50,000 monthly
    rent: number; // ¥600,000
  };
  
  // Tourism business
  tourism: {
    cogsPer5Person: number; // ¥125,000
    wholesalePrice: number; // ¥168,750
    agenciesMonth1To3: number; // 2
    agenciesMonth4To6: number; // 10
    agenciesMonth7To9: number; // 20
    agenciesMonth10To12: number; // 40
    sessionsPerAgencyPerMonth: number; // 6
  };
  
  // E-commerce business
  ecommerce: {
    startMonth: number; // month 5
    aov: number; // ¥20,000
    initialConversionRate: number; // 1.3%
    monthlyConversionGrowth: number; // 8%
    seasonalBoostMay: number; // 20%
    
    // Cost structure
    productCostRate: number; // 65%
    platformCommission: number; // 3%
    paymentFees: number; // 3%
    operationsOutsourcing: number; // 10%
  };
  
  // Follower growth model (corrected)
  followerGrowth: {
    viralContentRate: number; // 3% of sessions become viral
    viralFollowersPerSession: number; // 39,000
    normalFollowersPerSession: number; // 100 (corrected from 20)
  };
  
  // Marketing & KOL (corrected)
  marketing: {
    kolMonths: number; // 3
    kolsPerMonth: number; // 5
    kolCostPerSession: number; // ¥155,000 (corrected)
    userIncentiveRate: number; // 7% of ecommerce revenue
  };
  
  // Financial
  taxRate: number; // 30%
  employeeBonusRate: number; // 5% of after-tax profit
  salaryIncreaseMonth: number; // month 9
  salaryIncreaseRate: number; // 20% (management additions)
  safetyFactor: number; // 1.4 for funding calculation
}

export interface MonthlyFundingData {
  month: number;
  
  // Business metrics
  totalFollowers: number;
  tourismSessions: number;
  ecommerceOrders: number;
  conversionRate: number;
  
  // Revenue
  tourismRevenue: number;
  ecommerceRevenue: number;
  totalRevenue: number;
  
  // Costs
  tourismCogs: number;
  ecommerceCogs: number;
  totalCogs: number;
  
  // Operating expenses
  salaryTotal: number;
  techCosts: number;
  marketingCosts: number;
  adminCosts: number;
  kolCosts: number;
  totalOpex: number;
  
  // P&L
  grossProfit: number;
  ebit: number;
  taxes: number;
  netProfit: number;
  
  // Cash flow
  operatingCashFlow: number;
  userIncentives: number;
  netCashFlow: number;
  cumulativeCash: number;
}

export interface FundingResult {
  months: MonthlyFundingData[];
  
  // Key funding metrics
  maxNegativeCashFlow: number; // Most negative cumulative cash flow
  cashFlowTurnPositiveMonth: number; // Month when cumulative cash turns positive
  totalNegativeCashFlowBeforeTurnPositive: number; // Sum of all negative cash flows before turn positive
  recommendedFundingAmount: number; // Total negative × 1.4
  
  // Summary
  totalRevenue12M: number;
  totalProfit12M: number;
  netProfitMargin: number;
}

export const FUNDING_ASSUMPTIONS: FundingAssumptions = {
  startupCosts: {
    companyRegistration: 300000,
    brandDesign: 150000,
  },
  
  monthlyCosts: {
    ceo: 700000,
    contentDirector: 250000, // changes to 400000 from month 3
    tourismDirector: 500000,
    communityDirectors: 700000, // 2 × 350000
    ecommerceExecutive: 400000, // from month 4
    coo: 500000, // from month 3
    aiConsultant: 380000,
    videoConsultant: 150000,
    culturalResourceManager: 400000,
    
    server: 50000,
    design: 50000,
    crm: 50000,
    domain: 2000,
    
    contentSeoBase: 15000,
    socialMediaBase: 50000,
    ecommerceMarketing: 100000,
    
    accounting: 50000,
    travelBase: 200000,
    rent: 600000,
  },
  
  tourism: {
    cogsPer5Person: 125000,
    wholesalePrice: 168750,
    agenciesMonth1To3: 2,
    agenciesMonth4To6: 10,
    agenciesMonth7To9: 20,
    agenciesMonth10To12: 40,
    sessionsPerAgencyPerMonth: 6,
  },
  
  ecommerce: {
    startMonth: 5,
    aov: 20000,
    initialConversionRate: 0.013,
    monthlyConversionGrowth: 0.08,
    seasonalBoostMay: 0.20,
    productCostRate: 0.65,
    platformCommission: 0.03,
    paymentFees: 0.03,
    operationsOutsourcing: 0.10,
  },
  
  followerGrowth: {
    viralContentRate: 0.03,
    viralFollowersPerSession: 39000,
    normalFollowersPerSession: 100, // Corrected from 20 to 100
  },
  
  marketing: {
    kolMonths: 3,
    kolsPerMonth: 5,
    kolCostPerSession: 155000, // Corrected from 220000 to 155000
    userIncentiveRate: 0.07,
  },
  
  taxRate: 0.30,
  employeeBonusRate: 0.05,
  salaryIncreaseMonth: 9,
  salaryIncreaseRate: 0.20,
  safetyFactor: 1.4,
};

export function calculateFundingRequirement(assumptions: FundingAssumptions): FundingResult {
  const months: MonthlyFundingData[] = [];
  let cumulativeCash = -(assumptions.startupCosts.companyRegistration + assumptions.startupCosts.brandDesign);
  let totalFollowers = 100000; // Starting followers
  
  for (let month = 1; month <= 12; month++) {
    // Calculate tourism agencies and sessions
    let totalAgencies = 0;
    if (month <= 3) totalAgencies = assumptions.tourism.agenciesMonth1To3;
    else if (month <= 6) totalAgencies = assumptions.tourism.agenciesMonth4To6;
    else if (month <= 9) totalAgencies = assumptions.tourism.agenciesMonth7To9;
    else totalAgencies = assumptions.tourism.agenciesMonth10To12;
    
    const tourismSessions = totalAgencies * assumptions.tourism.sessionsPerAgencyPerMonth;
    
    // Calculate follower growth
    const viralSessions = Math.floor(tourismSessions * assumptions.followerGrowth.viralContentRate);
    const normalSessions = tourismSessions - viralSessions;
    
    const viralFollowers = viralSessions * assumptions.followerGrowth.viralFollowersPerSession;
    const normalFollowers = normalSessions * assumptions.followerGrowth.normalFollowersPerSession;
    const monthlyFollowersGain = viralFollowers + normalFollowers;
    
    totalFollowers += monthlyFollowersGain;
    
    // Calculate conversion rate
    let conversionRate = 0;
    if (month >= assumptions.ecommerce.startMonth) {
      conversionRate = assumptions.ecommerce.initialConversionRate * 
        Math.pow(1 + assumptions.ecommerce.monthlyConversionGrowth, month - assumptions.ecommerce.startMonth);
      
      // May seasonal boost
      if (month === 5) {
        conversionRate *= (1 + assumptions.ecommerce.seasonalBoostMay);
      }
    }
    
    // Calculate e-commerce orders
    const ecommerceOrders = month >= assumptions.ecommerce.startMonth ? 
      Math.floor(totalFollowers * conversionRate) : 0;
    
    // Revenue calculations
    const tourismRevenue = tourismSessions * assumptions.tourism.wholesalePrice;
    const ecommerceRevenue = ecommerceOrders * assumptions.ecommerce.aov;
    const totalRevenue = tourismRevenue + ecommerceRevenue;
    
    // COGS calculations
    const tourismCogs = tourismSessions * assumptions.tourism.cogsPer5Person;
    const ecommerceCogs = ecommerceOrders * (
      assumptions.ecommerce.aov * (
        assumptions.ecommerce.productCostRate +
        assumptions.ecommerce.platformCommission +
        assumptions.ecommerce.paymentFees +
        assumptions.ecommerce.operationsOutsourcing
      )
    );
    const totalCogs = tourismCogs + ecommerceCogs;
    
    // Salary calculations
    let baseSalary = assumptions.monthlyCosts.ceo + 
      assumptions.monthlyCosts.tourismDirector + 
      assumptions.monthlyCosts.communityDirectors +
      assumptions.monthlyCosts.aiConsultant +
      assumptions.monthlyCosts.videoConsultant +
      assumptions.monthlyCosts.culturalResourceManager;
    
    // Content director adjustment from month 3
    const contentDirectorSalary = month >= 3 ? 400000 : assumptions.monthlyCosts.contentDirector;
    baseSalary += contentDirectorSalary;
    
    // COO from month 3
    if (month >= 3) baseSalary += assumptions.monthlyCosts.coo;
    
    // E-commerce executive from month 4
    if (month >= 4) baseSalary += assumptions.monthlyCosts.ecommerceExecutive;
    
    // Salary increase from month 9 (20% for management additions)
    const salaryMultiplier = month >= assumptions.salaryIncreaseMonth ? 
      1 + assumptions.salaryIncreaseRate : 1;
    const salaryTotal = baseSalary * salaryMultiplier;
    
    // Tech costs
    const techCosts = assumptions.monthlyCosts.server + 
      assumptions.monthlyCosts.design + 
      assumptions.monthlyCosts.crm + 
      assumptions.monthlyCosts.domain;
    
    // Marketing costs
    const contentSeo = Math.min(
      assumptions.monthlyCosts.contentSeoBase * Math.pow(1.15, month - 1),
      2000000 // Cap at ¥2M
    );
    const socialMedia = assumptions.monthlyCosts.socialMediaBase * Math.pow(1.05, month - 1);
    const ecommerceMarketing = assumptions.monthlyCosts.ecommerceMarketing;
    const marketingCosts = contentSeo + socialMedia + ecommerceMarketing;
    
    // Admin costs
    const travelCosts = assumptions.monthlyCosts.travelBase + (month - 1) * 50000;
    const adminCosts = assumptions.monthlyCosts.accounting + 
      travelCosts + 
      assumptions.monthlyCosts.rent;
    
    // KOL costs (corrected to ¥155,000)
    const kolCosts = month <= assumptions.marketing.kolMonths ? 
      assumptions.marketing.kolsPerMonth * assumptions.marketing.kolCostPerSession : 0;
    
    const totalOpex = salaryTotal + techCosts + marketingCosts + adminCosts + kolCosts;
    
    // P&L calculations
    const grossProfit = totalRevenue - totalCogs;
    const ebit = grossProfit - totalOpex;
    const taxes = Math.max(0, ebit * assumptions.taxRate);
    const netProfit = ebit - taxes;
    
    // Cash flow calculations
    const operatingCashFlow = netProfit;
    const userIncentives = ecommerceRevenue * assumptions.marketing.userIncentiveRate;
    const netCashFlow = operatingCashFlow - userIncentives;
    cumulativeCash += netCashFlow;
    
    months.push({
      month,
      totalFollowers: Math.floor(totalFollowers),
      tourismSessions,
      ecommerceOrders,
      conversionRate,
      tourismRevenue,
      ecommerceRevenue,
      totalRevenue,
      tourismCogs,
      ecommerceCogs,
      totalCogs,
      salaryTotal,
      techCosts,
      marketingCosts,
      adminCosts,
      kolCosts,
      totalOpex,
      grossProfit,
      ebit,
      taxes,
      netProfit,
      operatingCashFlow,
      userIncentives,
      netCashFlow,
      cumulativeCash,
    });
  }
  
  // Find when cumulative cash flow turns positive
  const cashFlowTurnPositiveMonth = months.find(m => m.cumulativeCash > 0)?.month || 12;
  
  // Calculate total negative cash flow before turning positive
  const monthsBeforeTurnPositive = months.slice(0, cashFlowTurnPositiveMonth);
  const totalNegativeCashFlowBeforeTurnPositive = Math.abs(Math.min(...monthsBeforeTurnPositive.map(m => m.cumulativeCash)));
  
  // Calculate recommended funding amount
  const recommendedFundingAmount = totalNegativeCashFlowBeforeTurnPositive * assumptions.safetyFactor;
  
  // Calculate summary metrics
  const totalRevenue12M = months.reduce((sum, m) => sum + m.totalRevenue, 0);
  const totalProfit12M = months.reduce((sum, m) => sum + m.netProfit, 0);
  const netProfitMargin = totalProfit12M / totalRevenue12M;
  const maxNegativeCashFlow = Math.min(...months.map(m => m.cumulativeCash));
  
  return {
    months,
    maxNegativeCashFlow,
    cashFlowTurnPositiveMonth,
    totalNegativeCashFlowBeforeTurnPositive,
    recommendedFundingAmount,
    totalRevenue12M,
    totalProfit12M,
    netProfitMargin,
  };
}