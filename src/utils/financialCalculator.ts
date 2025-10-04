// Financial calculation engine for Tatami Labs
export interface BusinessAssumptions {
  // Startup costs
  startupCosts: {
    companyRegistration: number;
    brandDesign: number;
  };
  
  // Monthly fixed costs
  monthlyCosts: {
    ceo: number;
    contentDirector: number;
    tourismDirector: number;
    communityDirectors: number; // 2 people
    aiEngineer: number;
    ecommerceDirector: number; // starts month 4
    
    // Tech costs
    server: number;
    design: number;
    crm: number;
    domain: number;
    
    // Marketing
    contentSeoBase: number;
    socialMediaBase: number;
    ecommerceMarketing: number;
    
    // Admin
    accounting: number;
    travelBase: number;
    travelIncrement: number;
  };
  
  // Tourism business
  tourism: {
    startMonth: number;
    cogsPer5Person: number;
    wholesalePrice: number;
    agenciesMonth1To3: number;
    agenciesMonth4To6: number;
    agenciesMonth7To9: number;
    agenciesMonth10To12: number;
    agenciesQuarterlyIncrease: number;
    sessionsPerAgencyPerMonth: number;
  };
  
  // E-commerce business
  ecommerce: {
    startMonth: number;
    aov: number;
    initialConversionRate: number;
    monthlyConversionGrowth: number;
    seasonalBoostMay: number;
    productCostRate: number;
    platformCommission: number;
    paymentFees: number;
    shippingCostPerOrder: number;
  };
  
  // Marketing & KOL
  marketing: {
    kolMonths: number;
    kolsPerMonth: number;
    kolCostPerSession: number;
    userIncentiveRate: number; // % of ecommerce revenue
  };
  
  // Financial
  taxRate: number;
  employeeBonusRate: number; // % of after-tax profit
}

export interface FinancialResults {
  months: MonthlyFinancials[];
  summary: {
    totalRevenue24M: number;
    totalProfit24M: number;
    netProfitMargin: number;
    maxCashShortfall: number;
    breakEvenMonth: number;
    recommendedFunding: number;
  };
}

export interface MonthlyFinancials {
  month: number;
  
  // Followers and business metrics
  followers: number;
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
  salaries: number;
  techCosts: number;
  marketingCosts: number;
  adminCosts: number;
  kolCosts: number;
  totalOpex: number;
  
  // Profit & Loss
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

export const DEFAULT_ASSUMPTIONS: BusinessAssumptions = {
  startupCosts: {
    companyRegistration: 300000,
    brandDesign: 150000,
  },
  
  monthlyCosts: {
    ceo: 700000,
    contentDirector: 400000,
    tourismDirector: 500000,
    communityDirectors: 700000, // 2 * 350k
    aiEngineer: 600000,
    ecommerceDirector: 700000,
    
    server: 50000,
    design: 50000,
    crm: 50000,
    domain: 2000,
    
    contentSeoBase: 5000,
    socialMediaBase: 5000,
    ecommerceMarketing: 100000,
    
    accounting: 50000,
    travelBase: 200000,
    travelIncrement: 50000,
  },
  
  tourism: {
    startMonth: 1,
    cogsPer5Person: 125000,
    wholesalePrice: 168750,
    agenciesMonth1To3: 2,
    agenciesMonth4To6: 10,
    agenciesMonth7To9: 20,
    agenciesMonth10To12: 40,
    agenciesQuarterlyIncrease: 10,
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
    shippingCostPerOrder: 1500,
  },
  
  marketing: {
    kolMonths: 3,
    kolsPerMonth: 5,
    kolCostPerSession: 220000,
    userIncentiveRate: 0.07,
  },
  
  taxRate: 0.30,
  employeeBonusRate: 0.05,
};

// Follower growth model based on tourism sessions
function calculateFollowers(month: number, tourismSessions: number, currentFollowers: number): number {
  if (month <= 3) {
    // Phase 1: 1-3 months, baseline growth + KOL boost
    const baseGrowth = tourismSessions * 10 * 50; // 10 videos per session * 50 followers per video
    const kolBoost = 5000; // Additional KOL-driven growth
    return currentFollowers + baseGrowth + kolBoost;
  } else if (month <= 6) {
    // Phase 2: 4-6 months, organic growth increases
    const baseGrowth = tourismSessions * 10 * 50;
    const organicBoost = currentFollowers * 0.05; // 5% organic growth
    return currentFollowers + baseGrowth + organicBoost;
  } else if (month <= 9) {
    // Phase 3: 7-9 months, viral effect begins
    const baseGrowth = tourismSessions * 10 * 50;
    const viralBoost = currentFollowers * 0.08; // 8% viral growth
    return currentFollowers + baseGrowth + viralBoost;
  } else {
    // Phase 4: 10+ months, mature growth
    const baseGrowth = tourismSessions * 10 * 50;
    const matureBoost = currentFollowers * 0.10; // 10% mature growth
    return currentFollowers + baseGrowth + matureBoost;
  }
}

export function calculateFinancials(assumptions: BusinessAssumptions): FinancialResults {
  const months: MonthlyFinancials[] = [];
  let cumulativeCash = -(assumptions.startupCosts.companyRegistration + assumptions.startupCosts.brandDesign);
  let currentFollowers = 100000; // Starting followers
  
  for (let month = 1; month <= 24; month++) {
    // Calculate tourism agencies and sessions
    let totalAgencies = 0;
    if (month <= 3) totalAgencies = assumptions.tourism.agenciesMonth1To3;
    else if (month <= 6) totalAgencies = assumptions.tourism.agenciesMonth4To6;
    else if (month <= 9) totalAgencies = assumptions.tourism.agenciesMonth7To9;
    else if (month <= 12) totalAgencies = assumptions.tourism.agenciesMonth10To12;
    else {
      const quartersAfter12 = Math.floor((month - 13) / 3) + 1;
      totalAgencies = assumptions.tourism.agenciesMonth10To12 + (quartersAfter12 * assumptions.tourism.agenciesQuarterlyIncrease);
    }
    
    const tourismSessions = totalAgencies * assumptions.tourism.sessionsPerAgencyPerMonth;
    
    // Update followers based on tourism sessions
    currentFollowers = calculateFollowers(month, tourismSessions, currentFollowers);
    
    // Calculate conversion rate
    let conversionRate = assumptions.ecommerce.initialConversionRate * 
      Math.pow(1 + assumptions.ecommerce.monthlyConversionGrowth, Math.max(0, month - assumptions.ecommerce.startMonth));
    
    // Apply seasonal boost for May
    if (month % 12 === 5) {
      conversionRate *= (1 + assumptions.ecommerce.seasonalBoostMay);
    }
    
    // Calculate e-commerce orders
    const ecommerceOrders = month >= assumptions.ecommerce.startMonth ? 
      Math.floor(currentFollowers * conversionRate) : 0;
    
    // Revenue calculations
    const tourismRevenue = tourismSessions * assumptions.tourism.wholesalePrice;
    const ecommerceRevenue = ecommerceOrders * assumptions.ecommerce.aov;
    const totalRevenue = tourismRevenue + ecommerceRevenue;
    
    // COGS calculations
    const tourismCogs = tourismSessions * assumptions.tourism.cogsPer5Person;
    const ecommerceCogs = ecommerceOrders * (
      assumptions.ecommerce.aov * assumptions.ecommerce.productCostRate +
      assumptions.ecommerce.aov * assumptions.ecommerce.platformCommission +
      assumptions.ecommerce.aov * assumptions.ecommerce.paymentFees +
      assumptions.ecommerce.shippingCostPerOrder
    );
    const totalCogs = tourismCogs + ecommerceCogs;
    
    // Operating expenses
    const baseSalaries = assumptions.monthlyCosts.ceo + 
      assumptions.monthlyCosts.contentDirector + 
      assumptions.monthlyCosts.tourismDirector + 
      assumptions.monthlyCosts.communityDirectors + 
      assumptions.monthlyCosts.aiEngineer;
    
    const ecommerceDirectorSalary = month >= 4 ? assumptions.monthlyCosts.ecommerceDirector : 0;
    const salaries = baseSalaries + ecommerceDirectorSalary;
    
    const techCosts = assumptions.monthlyCosts.server + 
      assumptions.monthlyCosts.design + 
      assumptions.monthlyCosts.crm + 
      assumptions.monthlyCosts.domain;
    
    // Marketing costs with growth caps
    const maxMarketingBudget = totalRevenue * 0.05;
    const contentSeo = Math.min(
      assumptions.monthlyCosts.contentSeoBase * Math.pow(1.05, month - 1),
      maxMarketingBudget / 3
    );
    const socialMedia = Math.min(
      assumptions.monthlyCosts.socialMediaBase * Math.pow(1.05, month - 1),
      maxMarketingBudget / 3
    );
    const ecommerceMarketing = assumptions.monthlyCosts.ecommerceMarketing;
    const marketingCosts = contentSeo + socialMedia + ecommerceMarketing;
    
    // Admin costs
    const travelCosts = assumptions.monthlyCosts.travelBase + 
      (month - 1) * assumptions.monthlyCosts.travelIncrement;
    const adminCosts = assumptions.monthlyCosts.accounting + travelCosts;
    
    // KOL costs
    const kolCosts = month <= assumptions.marketing.kolMonths ? 
      assumptions.marketing.kolsPerMonth * assumptions.marketing.kolCostPerSession : 0;
    
    const totalOpex = salaries + techCosts + marketingCosts + adminCosts + kolCosts;
    
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
      followers: Math.floor(currentFollowers),
      tourismSessions,
      ecommerceOrders,
      conversionRate,
      tourismRevenue,
      ecommerceRevenue,
      totalRevenue,
      tourismCogs,
      ecommerceCogs,
      totalCogs,
      salaries,
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
  
  // Calculate summary metrics
  const totalRevenue24M = months.reduce((sum, m) => sum + m.totalRevenue, 0);
  const totalProfit24M = months.reduce((sum, m) => sum + m.netProfit, 0);
  const netProfitMargin = totalProfit24M / totalRevenue24M;
  const maxCashShortfall = Math.min(...months.map(m => m.cumulativeCash));
  const breakEvenMonth = months.find(m => m.cumulativeCash > 0)?.month || 24;
  const recommendedFunding = Math.abs(maxCashShortfall) * 1.4; // 40% safety margin
  
  return {
    months,
    summary: {
      totalRevenue24M,
      totalProfit24M,
      netProfitMargin,
      maxCashShortfall,
      breakEvenMonth,
      recommendedFunding,
    },
  };
}