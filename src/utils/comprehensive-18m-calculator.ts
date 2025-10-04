// Comprehensive 18-Month Financial Forecast for Tatami Labs (v3.0)
// 基于最终版商业假设的18个月财务预测模型

export interface Comprehensive18MAssumptions {
  // 一次性启动成本
  startupCosts: {
    companyRegistration: number; // ¥300,000
    brandDesign: number; // ¥150,000
  };
  
  // 每月固定运营费用
  monthlyCosts: {
    // 人力成本
    ceo: number; // ¥700,000
    contentDirector: number; // ¥250,000 -> ¥400,000 from month 3
    tourismDirector: number; // ¥500,000
    communityDirectors: number; // ¥700,000 (2 × ¥350,000)
    ecommerceExecutive: number; // ¥400,000 from month 4
    coo: number; // ¥500,000 from month 3
    aiConsultant: number; // ¥380,000
    videoConsultant: number; // ¥150,000
    culturalResourceManager: number; // ¥400,000
    
    // 技术与软件成本
    server: number; // ¥50,000
    design: number; // ¥50,000
    crm: number; // ¥50,000
    domain: number; // ¥2,000
    
    // 市场营销费用
    contentSeoBase: number; // ¥15,000 起，每月递增15%，上限¥200万
    socialMediaBase: number; // ¥50,000 起，每月递增5%
    ecommerceMarketing: number; // ¥100,000
    
    // 一般与行政费用
    accounting: number; // ¥50,000
    travelBase: number; // ¥200,000 起，此后每月增加¥50,000
    rent: number; // ¥600,000
  };
  
  // 线下业务：深度对话体验
  tourismBusiness: {
    cogsPer5Person: number; // ¥125,000
    salesRevenue: number; // ¥168,750 (每场销售收入)
    grossMargin: number; // ¥43,750 (毛利)
    
    // 合作旅行社增长
    agenciesMonth1To3: number; // 2
    agenciesMonth4To6: number; // 10
    agenciesMonth7To9: number; // 20
    agenciesMonth10To12: number; // 40
    agenciesMonth13To18: number; // 每季度增加10家
    
    sessionsPerAgencyPerMonth: number; // 6
  };
  
  // TikTok电商业务
  ecommerceBusiness: {
    startMonth: number; // 第5个月开始
    aov: number; // ¥20,000
    initialConversionRate: number; // 1.3%
    monthlyConversionGrowth: number; // 8%
    maySeasonalBoost: number; // 20%
    
    // 电商销货成本结构
    productCostRate: number; // 65%
    tiktokCommission: number; // 3%
    paymentFees: number; // 3%
    operationsOutsourcing: number; // 10%
  };
  
  // 粉丝增长模型（更新版）
  followerGrowth: {
    initialFollowers: number; // 初始粉丝数
    viralContentRate: number; // 3%有传播力
    viralFollowersPerSession: number; // 39,000
    normalFollowersPerSession: number; // 200
    
    // 18个月具体增长数据
    monthlyGrowthData: {
      [key: number]: { viral: number; normal: number };
    };
  };
  
  // 市场营销与用户激励
  marketing: {
    kolMonths: number; // 前3个月
    kolsPerMonth: number; // 5位KOL/月
    kolCostPerSession: number; // ¥155,000
    userIncentiveRate: number; // 电商收入的7%
  };
  
  // 财务与公司治理
  financial: {
    taxRate: number; // 30%
    employeeBonusRate: number; // 税后净利润的5%
    salaryIncreaseMonth: number; // 第9个月开始
    salaryIncreaseRate: number; // 20%
    safetyFactor: number; // 1.4
  };
}

export interface Comprehensive18MData {
  month: number;
  
  // 业务关键指标
  totalFollowers: number;
  monthlyFollowersGain: number;
  tourismSessions: number;
  ecommerceOrders: number;
  conversionRate: number;
  
  // 损益表 (P&L)
  tourismRevenue: number;
  ecommerceRevenue: number;
  totalRevenue: number;
  
  tourismCogs: number;
  ecommerceCogs: number;
  totalCogs: number;
  grossProfit: number;
  
  salaryTotal: number;
  techCosts: number;
  marketingCosts: number;
  adminCosts: number;
  kolCosts: number;
  totalOpex: number;
  
  ebit: number;
  taxes: number;
  netProfit: number;
  
  // 现金流量表
  operatingCashFlow: number;
  userIncentives: number;
  netCashFlow: number;
  cumulativeCash: number;
  
  // KPIs
  tourismGrossMargin: number;
  ecommerceGrossMargin: number;
  overallGrossMargin: number;
  netProfitMargin: number;
  
  // 成本结构分析
  salaryPercentage: number;
  techPercentage: number;
  marketingPercentage: number;
  adminPercentage: number;
  kolPercentage: number;
}

export interface Comprehensive18MResult {
  months: Comprehensive18MData[];
  
  // 融资计算
  maxNegativeCashFlow: number;
  cashFlowTurnPositiveMonth: number;
  totalNegativeCashFlowBeforeTurnPositive: number;
  recommendedFundingAmount: number;
  
  // 18个月汇总
  totalRevenue18M: number;
  totalProfit18M: number;
  netProfitMargin18M: number;
  finalFollowerCount: number;
  
  // 收入对比分析
  tourismVsEcommerce: {
    tourismTotal: number;
    ecommerceTotal: number;
    tourismPercentage: number;
    ecommercePercentage: number;
  };
  
  // 成本结构分析
  costBreakdown: {
    totalCosts: number;
    salaryPercentage: number;
    techPercentage: number;
    marketingPercentage: number;
    adminPercentage: number;
    kolPercentage: number;
    cogsPercentage: number;
  };
  
  // 数据不一致警告
  dataInconsistencies: string[];
}

export const COMPREHENSIVE_18M_ASSUMPTIONS: Comprehensive18MAssumptions = {
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
  
  tourismBusiness: {
    cogsPer5Person: 125000,
    salesRevenue: 168750,
    grossMargin: 43750,
    agenciesMonth1To3: 2,
    agenciesMonth4To6: 10,
    agenciesMonth7To9: 20,
    agenciesMonth10To12: 40,
    agenciesMonth13To18: 10, // 每季度增加10家
    sessionsPerAgencyPerMonth: 6,
  },
  
  ecommerceBusiness: {
    startMonth: 5,
    aov: 20000,
    initialConversionRate: 0.013,
    monthlyConversionGrowth: 0.08,
    maySeasonalBoost: 0.20,
    productCostRate: 0.65,
    tiktokCommission: 0.03,
    paymentFees: 0.03,
    operationsOutsourcing: 0.10,
  },
  
  followerGrowth: {
    initialFollowers: 0,
    viralContentRate: 0.03,
    viralFollowersPerSession: 39000,
    normalFollowersPerSession: 200,
    
    // 具体的18个月增长数据
    monthlyGrowthData: {
      1: { viral: 19800, normal: 3290 },   // 月1-3
      2: { viral: 19800, normal: 3290 },
      3: { viral: 19800, normal: 3290 },
      4: { viral: 70200, normal: 11640 },  // 月4-6
      5: { viral: 70200, normal: 11640 },
      6: { viral: 70200, normal: 11640 },
      7: { viral: 140400, normal: 23800 }, // 月7-9
      8: { viral: 140400, normal: 23800 },
      9: { viral: 140400, normal: 23800 },
      10: { viral: 280800, normal: 46500 }, // 月10-12
      11: { viral: 280800, normal: 46500 },
      12: { viral: 280800, normal: 46500 },
      // 月13-18延续月10-12的增长率
      13: { viral: 280800, normal: 46500 },
      14: { viral: 280800, normal: 46500 },
      15: { viral: 280800, normal: 46500 },
      16: { viral: 280800, normal: 46500 },
      17: { viral: 280800, normal: 46500 },
      18: { viral: 280800, normal: 46500 },
    },
  },
  
  marketing: {
    kolMonths: 3,
    kolsPerMonth: 5,
    kolCostPerSession: 155000,
    userIncentiveRate: 0.07,
  },
  
  financial: {
    taxRate: 0.30,
    employeeBonusRate: 0.05,
    salaryIncreaseMonth: 9,
    salaryIncreaseRate: 0.20,
    safetyFactor: 1.4,
  },
};

export function calculateComprehensive18M(assumptions: Comprehensive18MAssumptions): Comprehensive18MResult {
  const months: Comprehensive18MData[] = [];
  let cumulativeCash = -(assumptions.startupCosts.companyRegistration + assumptions.startupCosts.brandDesign);
  let totalFollowers = assumptions.followerGrowth.initialFollowers;
  
  // 数据不一致警告
  const dataInconsistencies = [
    "KOL合作成本一致性: 单次¥155,000与10人团线下体验直接成本(COGS)相符",
    "粉丝增长模型: 普通内容每次200个粉丝（与之前模型的20个不同）",
    "电商启动: 第5个月开始，与12个月累计粉丝数1,789,290个一致"
  ];
  
  for (let month = 1; month <= 18; month++) {
    // 计算旅游业务代理商数量
    let totalAgencies = 0;
    if (month <= 3) {
      totalAgencies = assumptions.tourismBusiness.agenciesMonth1To3;
    } else if (month <= 6) {
      totalAgencies = assumptions.tourismBusiness.agenciesMonth4To6;
    } else if (month <= 9) {
      totalAgencies = assumptions.tourismBusiness.agenciesMonth7To9;
    } else if (month <= 12) {
      totalAgencies = assumptions.tourismBusiness.agenciesMonth10To12;
    } else {
      // 月13-18: 每季度增加10家，从月13开始基数为40+10=50家
      const quartersAfter12 = Math.floor((month - 13) / 3) + 1;
      totalAgencies = 40 + (quartersAfter12 * assumptions.tourismBusiness.agenciesMonth13To18);
    }
    
    const tourismSessions = totalAgencies * assumptions.tourismBusiness.sessionsPerAgencyPerMonth;
    
    // 粉丝增长计算
    const growthData = assumptions.followerGrowth.monthlyGrowthData[month] || 
                      assumptions.followerGrowth.monthlyGrowthData[12]; // 默认使用月12数据
    const monthlyFollowersGain = growthData.viral + growthData.normal;
    totalFollowers += monthlyFollowersGain;
    
    // 电商转化率计算
    let conversionRate = 0;
    if (month >= assumptions.ecommerceBusiness.startMonth) {
      conversionRate = assumptions.ecommerceBusiness.initialConversionRate * 
        Math.pow(1 + assumptions.ecommerceBusiness.monthlyConversionGrowth, month - assumptions.ecommerceBusiness.startMonth);
      
      // 5月季节性提升（每年5月）
      if (month === 5 || month === 17) { // 月5和月17（第二年5月）
        conversionRate *= (1 + assumptions.ecommerceBusiness.maySeasonalBoost);
      }
    }
    
    // 电商订单数
    const ecommerceOrders = month >= assumptions.ecommerceBusiness.startMonth ? 
      Math.floor(totalFollowers * conversionRate) : 0;
    
    // 收入计算
    const tourismRevenue = tourismSessions * assumptions.tourismBusiness.salesRevenue;
    const ecommerceRevenue = ecommerceOrders * assumptions.ecommerceBusiness.aov;
    const totalRevenue = tourismRevenue + ecommerceRevenue;
    
    // 销货成本计算
    const tourismCogs = tourismSessions * assumptions.tourismBusiness.cogsPer5Person;
    const ecommerceCogs = ecommerceOrders * (
      assumptions.ecommerceBusiness.aov * (
        assumptions.ecommerceBusiness.productCostRate +
        assumptions.ecommerceBusiness.tiktokCommission +
        assumptions.ecommerceBusiness.paymentFees +
        assumptions.ecommerceBusiness.operationsOutsourcing
      )
    );
    const totalCogs = tourismCogs + ecommerceCogs;
    const grossProfit = totalRevenue - totalCogs;
    
    // 薪资计算
    let baseSalary = assumptions.monthlyCosts.ceo + 
      assumptions.monthlyCosts.tourismDirector + 
      assumptions.monthlyCosts.communityDirectors +
      assumptions.monthlyCosts.aiConsultant +
      assumptions.monthlyCosts.videoConsultant +
      assumptions.monthlyCosts.culturalResourceManager;
    
    // 内容总监从第3个月调整
    const contentDirectorSalary = month >= 3 ? 400000 : assumptions.monthlyCosts.contentDirector;
    baseSalary += contentDirectorSalary;
    
    // COO从第3个月开始
    if (month >= 3) baseSalary += assumptions.monthlyCosts.coo;
    
    // 电商执行负责人从第4个月开始
    if (month >= 4) baseSalary += assumptions.monthlyCosts.ecommerceExecutive;
    
    // 第9个月开始薪资增加20%
    const salaryMultiplier = month >= assumptions.financial.salaryIncreaseMonth ? 
      1 + assumptions.financial.salaryIncreaseRate : 1;
    const salaryTotal = baseSalary * salaryMultiplier;
    
    // 技术成本
    const techCosts = assumptions.monthlyCosts.server + 
      assumptions.monthlyCosts.design + 
      assumptions.monthlyCosts.crm + 
      assumptions.monthlyCosts.domain;
    
    // 营销成本
    const contentSeo = Math.min(
      assumptions.monthlyCosts.contentSeoBase * Math.pow(1.15, month - 1),
      2000000 // 上限200万日元
    );
    const socialMedia = assumptions.monthlyCosts.socialMediaBase * Math.pow(1.05, month - 1);
    const ecommerceMarketing = assumptions.monthlyCosts.ecommerceMarketing;
    const marketingCosts = contentSeo + socialMedia + ecommerceMarketing;
    
    // 行政成本
    const travelCosts = assumptions.monthlyCosts.travelBase + (month - 1) * 50000;
    const adminCosts = assumptions.monthlyCosts.accounting + 
      travelCosts + 
      assumptions.monthlyCosts.rent;
    
    // KOL成本（前3个月）
    const kolCosts = month <= assumptions.marketing.kolMonths ? 
      assumptions.marketing.kolsPerMonth * assumptions.marketing.kolCostPerSession : 0;
    
    const totalOpex = salaryTotal + techCosts + marketingCosts + adminCosts + kolCosts;
    
    // 损益表计算
    const ebit = grossProfit - totalOpex;
    const taxes = Math.max(0, ebit * assumptions.financial.taxRate);
    const netProfit = ebit - taxes;
    
    // 现金流计算
    const operatingCashFlow = netProfit;
    const userIncentives = ecommerceRevenue * assumptions.marketing.userIncentiveRate;
    const netCashFlow = operatingCashFlow - userIncentives;
    cumulativeCash += netCashFlow;
    
    // KPIs计算
    const tourismGrossMargin = tourismRevenue > 0 ? ((tourismRevenue - tourismCogs) / tourismRevenue) * 100 : 0;
    const ecommerceGrossMargin = ecommerceRevenue > 0 ? ((ecommerceRevenue - ecommerceCogs) / ecommerceRevenue) * 100 : 0;
    const overallGrossMargin = totalRevenue > 0 ? (grossProfit / totalRevenue) * 100 : 0;
    const netProfitMargin = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0;
    
    // 成本结构分析
    const totalCostsForPercentage = totalOpex;
    const salaryPercentage = (salaryTotal / totalCostsForPercentage) * 100;
    const techPercentage = (techCosts / totalCostsForPercentage) * 100;
    const marketingPercentage = (marketingCosts / totalCostsForPercentage) * 100;
    const adminPercentage = (adminCosts / totalCostsForPercentage) * 100;
    const kolPercentage = (kolCosts / totalCostsForPercentage) * 100;
    
    months.push({
      month,
      totalFollowers: Math.floor(totalFollowers),
      monthlyFollowersGain,
      tourismSessions,
      ecommerceOrders,
      conversionRate,
      tourismRevenue,
      ecommerceRevenue,
      totalRevenue,
      tourismCogs,
      ecommerceCogs,
      totalCogs,
      grossProfit,
      salaryTotal,
      techCosts,
      marketingCosts,
      adminCosts,
      kolCosts,
      totalOpex,
      ebit,
      taxes,
      netProfit,
      operatingCashFlow,
      userIncentives,
      netCashFlow,
      cumulativeCash,
      tourismGrossMargin,
      ecommerceGrossMargin,
      overallGrossMargin,
      netProfitMargin,
      salaryPercentage,
      techPercentage,
      marketingPercentage,
      adminPercentage,
      kolPercentage,
    });
  }
  
  // 融资计算
  const cashFlowTurnPositiveMonth = months.find(m => m.cumulativeCash > 0)?.month || 18;
  const monthsBeforeTurnPositive = months.slice(0, cashFlowTurnPositiveMonth);
  const totalNegativeCashFlowBeforeTurnPositive = Math.abs(
    Math.min(...monthsBeforeTurnPositive.map(m => m.cumulativeCash))
  );
  const recommendedFundingAmount = totalNegativeCashFlowBeforeTurnPositive * assumptions.financial.safetyFactor;
  
  // 汇总计算
  const totalRevenue18M = months.reduce((sum, m) => sum + m.totalRevenue, 0);
  const totalProfit18M = months.reduce((sum, m) => sum + m.netProfit, 0);
  const netProfitMargin18M = totalProfit18M / totalRevenue18M;
  const maxNegativeCashFlow = Math.min(...months.map(m => m.cumulativeCash));
  const finalFollowerCount = totalFollowers;
  
  // 收入对比分析
  const tourismTotal = months.reduce((sum, m) => sum + m.tourismRevenue, 0);
  const ecommerceTotal = months.reduce((sum, m) => sum + m.ecommerceRevenue, 0);
  const tourismVsEcommerce = {
    tourismTotal,
    ecommerceTotal,
    tourismPercentage: (tourismTotal / totalRevenue18M) * 100,
    ecommercePercentage: (ecommerceTotal / totalRevenue18M) * 100,
  };
  
  // 成本结构分析
  const totalCosts = months.reduce((sum, m) => sum + m.totalOpex + m.totalCogs, 0);
  const totalSalary = months.reduce((sum, m) => sum + m.salaryTotal, 0);
  const totalTech = months.reduce((sum, m) => sum + m.techCosts, 0);
  const totalMarketing = months.reduce((sum, m) => sum + m.marketingCosts, 0);
  const totalAdmin = months.reduce((sum, m) => sum + m.adminCosts, 0);
  const totalKol = months.reduce((sum, m) => sum + m.kolCosts, 0);
  const totalCogsSum = months.reduce((sum, m) => sum + m.totalCogs, 0);
  
  const costBreakdown = {
    totalCosts,
    salaryPercentage: (totalSalary / totalCosts) * 100,
    techPercentage: (totalTech / totalCosts) * 100,
    marketingPercentage: (totalMarketing / totalCosts) * 100,
    adminPercentage: (totalAdmin / totalCosts) * 100,
    kolPercentage: (totalKol / totalCosts) * 100,
    cogsPercentage: (totalCogsSum / totalCosts) * 100,
  };
  
  return {
    months,
    maxNegativeCashFlow,
    cashFlowTurnPositiveMonth,
    totalNegativeCashFlowBeforeTurnPositive,
    recommendedFundingAmount,
    totalRevenue18M,
    totalProfit18M,
    netProfitMargin18M,
    finalFollowerCount,
    tourismVsEcommerce,
    costBreakdown,
    dataInconsistencies,
  };
}