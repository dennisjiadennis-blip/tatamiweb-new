// Final Funding Calculator for Tatami Labs (v3.0 - 最终版)
// Based on updated business assumptions provided

export interface FinalBusinessAssumptions {
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
    wholesalePrice: number; // ¥168,750
    agenciesMonth1To3: number; // 2
    agenciesMonth4To6: number; // 10
    agenciesMonth7To9: number; // 20
    agenciesMonth10To12: number; // 40
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
  
  // 粉丝增长模型（已更新）
  followerGrowth: {
    initialFollowers: number; // 初始粉丝数
    viralContentRate: number; // 3%有传播力
    viralFollowersPerSession: number; // 39,000
    normalFollowersPerSession: number; // 200
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

export interface FinalMonthlyData {
  month: number;
  
  // 业务指标
  totalFollowers: number;
  monthlyFollowersGain: number;
  tourismSessions: number;
  ecommerceOrders: number;
  conversionRate: number;
  
  // 收入
  tourismRevenue: number;
  ecommerceRevenue: number;
  totalRevenue: number;
  
  // 销货成本
  tourismCogs: number;
  ecommerceCogs: number;
  totalCogs: number;
  
  // 运营费用详细
  salaryTotal: number;
  techCosts: number;
  marketingCosts: number;
  adminCosts: number;
  kolCosts: number;
  totalOpex: number;
  
  // 损益表
  grossProfit: number;
  ebit: number;
  taxes: number;
  netProfit: number;
  
  // 现金流
  operatingCashFlow: number;
  userIncentives: number;
  netCashFlow: number;
  cumulativeCash: number;
}

export interface FinalFundingResult {
  months: FinalMonthlyData[];
  
  // 关键融资指标
  maxNegativeCashFlow: number;
  cashFlowTurnPositiveMonth: number;
  totalNegativeCashFlowBeforeTurnPositive: number;
  recommendedFundingAmount: number;
  
  // 汇总
  totalRevenue12M: number;
  totalProfit12M: number;
  netProfitMargin: number;
  finalFollowerCount: number;
  
  // 数据不一致警告
  dataInconsistencies: string[];
}

export const FINAL_ASSUMPTIONS: FinalBusinessAssumptions = {
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
    wholesalePrice: 168750,
    agenciesMonth1To3: 2,
    agenciesMonth4To6: 10,
    agenciesMonth7To9: 20,
    agenciesMonth10To12: 40,
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
    initialFollowers: 0, // Starting from 0 based on provided data
    viralContentRate: 0.03,
    viralFollowersPerSession: 39000,
    normalFollowersPerSession: 200,
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

export function calculateFinalFunding(assumptions: FinalBusinessAssumptions): FinalFundingResult {
  const months: FinalMonthlyData[] = [];
  let cumulativeCash = -(assumptions.startupCosts.companyRegistration + assumptions.startupCosts.brandDesign);
  let totalFollowers = assumptions.followerGrowth.initialFollowers;
  
  // 数据不一致警告
  const dataInconsistencies = [
    "KOL合作成本不一致: 单次合作成本¥155,000与10人团线下体验直接成本相符",
    "粉丝增长模型中普通内容粉丝数量: 文档中提到200个/次，与之前的20个不同"
  ];
  
  for (let month = 1; month <= 12; month++) {
    // 计算旅游业务代理商和场次
    let totalAgencies = 0;
    if (month <= 3) totalAgencies = assumptions.tourismBusiness.agenciesMonth1To3;
    else if (month <= 6) totalAgencies = assumptions.tourismBusiness.agenciesMonth4To6;
    else if (month <= 9) totalAgencies = assumptions.tourismBusiness.agenciesMonth7To9;
    else totalAgencies = assumptions.tourismBusiness.agenciesMonth10To12;
    
    const tourismSessions = totalAgencies * assumptions.tourismBusiness.sessionsPerAgencyPerMonth;
    
    // 计算粉丝增长（基于提供的具体数据）
    let monthlyFollowersGain = 0;
    if (month <= 3) {
      monthlyFollowersGain = 19800 + 3290; // 爆款 + 普通内容
    } else if (month <= 6) {
      monthlyFollowersGain = 70200 + 11640;
    } else if (month <= 9) {
      monthlyFollowersGain = 140400 + 23800;
    } else {
      monthlyFollowersGain = 280800 + 46500;
    }
    
    totalFollowers += monthlyFollowersGain;
    
    // 计算电商转化率
    let conversionRate = 0;
    if (month >= assumptions.ecommerceBusiness.startMonth) {
      conversionRate = assumptions.ecommerceBusiness.initialConversionRate * 
        Math.pow(1 + assumptions.ecommerceBusiness.monthlyConversionGrowth, month - assumptions.ecommerceBusiness.startMonth);
      
      // 5月季节性提升
      if (month === 5) {
        conversionRate *= (1 + assumptions.ecommerceBusiness.maySeasonalBoost);
      }
    }
    
    // 计算电商订单数
    const ecommerceOrders = month >= assumptions.ecommerceBusiness.startMonth ? 
      Math.floor(totalFollowers * conversionRate) : 0;
    
    // 收入计算
    const tourismRevenue = tourismSessions * assumptions.tourismBusiness.wholesalePrice;
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
    
    // 第9个月开始薪资增加20%（管理人员增加）
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
    const grossProfit = totalRevenue - totalCogs;
    const ebit = grossProfit - totalOpex;
    const taxes = Math.max(0, ebit * assumptions.financial.taxRate);
    const netProfit = ebit - taxes;
    
    // 现金流计算
    const operatingCashFlow = netProfit;
    const userIncentives = ecommerceRevenue * assumptions.marketing.userIncentiveRate;
    const netCashFlow = operatingCashFlow - userIncentives;
    cumulativeCash += netCashFlow;
    
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
  
  // 寻找现金流转正月份
  const cashFlowTurnPositiveMonth = months.find(m => m.cumulativeCash > 0)?.month || 12;
  
  // 计算转正前负现金流总和
  const monthsBeforeTurnPositive = months.slice(0, cashFlowTurnPositiveMonth);
  const totalNegativeCashFlowBeforeTurnPositive = Math.abs(
    Math.min(...monthsBeforeTurnPositive.map(m => m.cumulativeCash))
  );
  
  // 计算推荐融资金额
  const recommendedFundingAmount = totalNegativeCashFlowBeforeTurnPositive * assumptions.financial.safetyFactor;
  
  // 计算汇总指标
  const totalRevenue12M = months.reduce((sum, m) => sum + m.totalRevenue, 0);
  const totalProfit12M = months.reduce((sum, m) => sum + m.netProfit, 0);
  const netProfitMargin = totalProfit12M / totalRevenue12M;
  const maxNegativeCashFlow = Math.min(...months.map(m => m.cumulativeCash));
  const finalFollowerCount = totalFollowers;
  
  return {
    months,
    maxNegativeCashFlow,
    cashFlowTurnPositiveMonth,
    totalNegativeCashFlowBeforeTurnPositive,
    recommendedFundingAmount,
    totalRevenue12M,
    totalProfit12M,
    netProfitMargin,
    finalFollowerCount,
    dataInconsistencies,
  };
}