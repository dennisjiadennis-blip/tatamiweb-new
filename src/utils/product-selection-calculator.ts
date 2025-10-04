// Product Selection Tool for Tatami Labs
// 基于五大黄金法则的产品评估计算器

export interface ProductCandidate {
  id: string;
  name: string;
  category: string;
  supplier: string;
  
  // 基础信息
  wholesalePrice: number; // 批发价（美元）
  estimatedRetailPrice: number; // 预计零售价
  minimumOrderQuantity: number; // 最小订购量
  leadTime: number; // 交货时间（天）
  
  // 五大黄金法则评分 (1-10)
  madeInJapanScore: number; // 日本制造确认
  nonConsumableScore: number; // 非消耗品特性
  priceRangeScore: number; // 价格区间匹配
  personalizationScore: number; // 个性化潜力
  repeatPurchaseScore: number; // 复购逻辑
  
  // 市场潜力评估
  marketDemandEvidence: string[]; // 市场需求证据
  competitorAnalysis: string; // 竞争分析
  seasonalityFactor: number; // 季节性因素 (0.5-2.0)
  
  // 运营考虑
  shippingComplexity: number; // 运输复杂度 (1-10)
  storageRequirements: string; // 存储要求
  customizationOptions: string[]; // 定制选项
  
  // 财务预测
  estimatedMonthlySales: number; // 预计月销量
  marketingCostPerUnit: number; // 单位营销成本
  
  notes: string; // 备注
}

export interface ProductEvaluation {
  candidate: ProductCandidate;
  
  // 计算结果
  totalScore: number; // 总评分 (0-50)
  goldenRulesCompliance: boolean; // 是否符合五大法则
  profitabilityScore: number; // 盈利能力评分
  riskScore: number; // 风险评分
  priorityLevel: 'HIGH' | 'MEDIUM' | 'LOW'; // 优先级
  
  // 财务指标
  grossMarginPercentage: number; // 毛利率
  estimatedMonthlyRevenue: number; // 预计月营收
  estimatedMonthlyProfit: number; // 预计月利润
  breakEvenQuantity: number; // 盈亏平衡销量
  roiTimeframe: number; // 投资回报周期（月）
  
  // 推荐行动
  recommendation: string;
  nextSteps: string[];
}

export class ProductSelectionCalculator {
  
  static evaluateProduct(candidate: ProductCandidate): ProductEvaluation {
    // 计算五大法则总分
    const totalScore = candidate.madeInJapanScore + 
                      candidate.nonConsumableScore + 
                      candidate.priceRangeScore + 
                      candidate.personalizationScore + 
                      candidate.repeatPurchaseScore;
    
    // 检查是否符合五大法则（每项至少7分）
    const goldenRulesCompliance = 
      candidate.madeInJapanScore >= 7 &&
      candidate.nonConsumableScore >= 7 &&
      candidate.priceRangeScore >= 7 &&
      candidate.personalizationScore >= 7 &&
      candidate.repeatPurchaseScore >= 7;
    
    // 计算财务指标
    const grossMargin = candidate.estimatedRetailPrice - candidate.wholesalePrice;
    const grossMarginPercentage = (grossMargin / candidate.estimatedRetailPrice) * 100;
    
    const estimatedMonthlyRevenue = candidate.estimatedMonthlySales * candidate.estimatedRetailPrice;
    const totalMonthlyCosts = (candidate.estimatedMonthlySales * candidate.wholesalePrice) + 
                             (candidate.estimatedMonthlySales * candidate.marketingCostPerUnit);
    const estimatedMonthlyProfit = estimatedMonthlyRevenue - totalMonthlyCosts;
    
    // 计算盈亏平衡点
    const fixedCosts = candidate.minimumOrderQuantity * candidate.wholesalePrice;
    const breakEvenQuantity = Math.ceil(fixedCosts / grossMargin);
    
    // 计算投资回报周期
    const initialInvestment = fixedCosts + 10000; // 加上运营成本
    const roiTimeframe = estimatedMonthlyProfit > 0 ? 
      Math.ceil(initialInvestment / estimatedMonthlyProfit) : 999;
    
    // 计算盈利能力评分 (0-100)
    const profitabilityScore = Math.min(100, 
      (grossMarginPercentage * 0.4) + 
      (Math.min(estimatedMonthlyProfit / 5000, 1) * 30) + 
      (Math.min(50 / roiTimeframe, 1) * 30)
    );
    
    // 计算风险评分 (0-100, 越低越好)
    const riskScore = 
      (candidate.shippingComplexity * 5) +
      (candidate.leadTime / 30 * 20) +
      ((candidate.minimumOrderQuantity / 1000) * 25) +
      ((10 - candidate.marketDemandEvidence.length * 2) * 2.5) +
      (candidate.seasonalityFactor > 1.5 || candidate.seasonalityFactor < 0.8 ? 15 : 0);
    
    // 确定优先级
    let priorityLevel: 'HIGH' | 'MEDIUM' | 'LOW' = 'LOW';
    if (goldenRulesCompliance && totalScore >= 40 && profitabilityScore >= 70 && riskScore <= 40) {
      priorityLevel = 'HIGH';
    } else if (goldenRulesCompliance && totalScore >= 35 && profitabilityScore >= 50 && riskScore <= 60) {
      priorityLevel = 'MEDIUM';
    }
    
    // 生成推荐和下一步
    const recommendation = this.generateRecommendation(
      goldenRulesCompliance, totalScore, profitabilityScore, riskScore, priorityLevel
    );
    
    const nextSteps = this.generateNextSteps(candidate, priorityLevel, riskScore);
    
    return {
      candidate,
      totalScore,
      goldenRulesCompliance,
      profitabilityScore: Math.round(profitabilityScore),
      riskScore: Math.round(riskScore),
      priorityLevel,
      grossMarginPercentage: Math.round(grossMarginPercentage * 10) / 10,
      estimatedMonthlyRevenue: Math.round(estimatedMonthlyRevenue),
      estimatedMonthlyProfit: Math.round(estimatedMonthlyProfit),
      breakEvenQuantity,
      roiTimeframe,
      recommendation,
      nextSteps
    };
  }
  
  static generateRecommendation(
    compliance: boolean, 
    totalScore: number, 
    profitability: number, 
    risk: number, 
    priority: string
  ): string {
    if (!compliance) {
      return "❌ 不符合五大黄金法则，不建议选择此产品。需要重新评估或寻找替代品。";
    }
    
    if (priority === 'HIGH') {
      return "🎯 强烈推荐！此产品完全符合Tatami Labs标准，具有优秀的盈利潜力和可控风险。建议优先启动。";
    } else if (priority === 'MEDIUM') {
      return "⚖️ 可考虑选择。产品符合基本要求，但需要进一步优化供应链或营销策略以降低风险。";
    } else {
      return "⚠️ 谨慎考虑。虽然符合基本标准，但盈利能力或风险控制存在挑战，建议深入分析后再决定。";
    }
  }
  
  static generateNextSteps(candidate: ProductCandidate, priority: string, riskScore: number): string[] {
    const steps: string[] = [];
    
    if (priority === 'HIGH') {
      steps.push("🔍 立即联系供应商获取详细报价和样品");
      steps.push("📊 进行小批量测试订单（50-100件）");
      steps.push("🎨 开发个性化雕刻方案和定价");
      steps.push("📈 制定营销策略和销售渠道");
    } else if (priority === 'MEDIUM') {
      steps.push("📋 深入分析市场竞争情况");
      steps.push("💰 重新谈判批发价格以提高毛利率");
      steps.push("🚚 优化物流和存储方案");
      steps.push("🎯 明确目标客户群体和营销定位");
    } else {
      steps.push("🔄 重新评估产品是否符合五大法则");
      steps.push("🔍 寻找替代供应商或产品变体");
      steps.push("📊 收集更多市场需求证据");
    }
    
    // 基于风险因素添加具体建议
    if (riskScore > 60) {
      steps.push("⚠️ 制定详细的风险管控方案");
    }
    if (candidate.leadTime > 45) {
      steps.push("⏰ 建立库存缓冲以应对长交货周期");
    }
    if (candidate.minimumOrderQuantity > 500) {
      steps.push("💼 考虑与其他品牌合作分担大订单风险");
    }
    
    return steps;
  }
  
  static compareProducts(evaluations: ProductEvaluation[]): ProductEvaluation[] {
    return evaluations.sort((a, b) => {
      // 优先级排序
      const priorityWeight = { 'HIGH': 3, 'MEDIUM': 2, 'LOW': 1 };
      if (priorityWeight[a.priorityLevel] !== priorityWeight[b.priorityLevel]) {
        return priorityWeight[b.priorityLevel] - priorityWeight[a.priorityLevel];
      }
      
      // 然后按总评分排序
      if (a.totalScore !== b.totalScore) {
        return b.totalScore - a.totalScore;
      }
      
      // 最后按盈利能力排序
      return b.profitabilityScore - a.profitabilityScore;
    });
  }
  
  static generatePortfolioRecommendation(evaluations: ProductEvaluation[]): {
    recommendedProducts: ProductEvaluation[];
    totalInvestment: number;
    expectedMonthlyRevenue: number;
    portfolioRiskScore: number;
    diversificationAdvice: string;
  } {
    const highPriority = evaluations.filter(e => e.priorityLevel === 'HIGH');
    const mediumPriority = evaluations.filter(e => e.priorityLevel === 'MEDIUM');
    
    // 推荐产品组合：2-3个高优先级 + 1-2个中优先级
    const recommendedProducts = [
      ...highPriority.slice(0, 3),
      ...mediumPriority.slice(0, 2)
    ].slice(0, 4); // 最多4个产品
    
    const totalInvestment = recommendedProducts.reduce((sum, e) => 
      sum + (e.candidate.minimumOrderQuantity * e.candidate.wholesalePrice), 0
    );
    
    const expectedMonthlyRevenue = recommendedProducts.reduce((sum, e) => 
      sum + e.estimatedMonthlyRevenue, 0
    );
    
    const portfolioRiskScore = recommendedProducts.length > 0 ?
      recommendedProducts.reduce((sum, e) => sum + e.riskScore, 0) / recommendedProducts.length : 0;
    
    // 多样化建议
    const categories = new Set(recommendedProducts.map(e => e.candidate.category));
    let diversificationAdvice = "";
    
    if (categories.size === 1) {
      diversificationAdvice = "⚠️ 产品组合过于集中在单一品类，建议增加其他品类以分散风险。";
    } else if (categories.size >= 3) {
      diversificationAdvice = "✅ 产品组合多样化良好，有助于分散市场风险。";
    } else {
      diversificationAdvice = "📊 产品组合适中，可考虑在未来添加第三个品类。";
    }
    
    return {
      recommendedProducts,
      totalInvestment: Math.round(totalInvestment),
      expectedMonthlyRevenue: Math.round(expectedMonthlyRevenue),
      portfolioRiskScore: Math.round(portfolioRiskScore),
      diversificationAdvice
    };
  }
}