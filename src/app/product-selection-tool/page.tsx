'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProductCandidate, ProductEvaluation, ProductSelectionCalculator } from '@/utils/product-selection-calculator'

export default function ProductSelectionTool() {
  const [products, setProducts] = useState<ProductCandidate[]>([])
  const [evaluations, setEvaluations] = useState<ProductEvaluation[]>([])
  const [activeTab, setActiveTab] = useState<'input' | 'results' | 'portfolio'>('input')
  const [currentProduct, setCurrentProduct] = useState<Partial<ProductCandidate>>({
    id: '',
    name: '',
    category: '',
    supplier: '',
    wholesalePrice: 0,
    estimatedRetailPrice: 0,
    minimumOrderQuantity: 0,
    leadTime: 0,
    madeInJapanScore: 5,
    nonConsumableScore: 5,
    priceRangeScore: 5,
    personalizationScore: 5,
    repeatPurchaseScore: 5,
    marketDemandEvidence: [],
    competitorAnalysis: '',
    seasonalityFactor: 1,
    shippingComplexity: 5,
    storageRequirements: '',
    customizationOptions: [],
    estimatedMonthlySales: 0,
    marketingCostPerUnit: 0,
    notes: ''
  })

  const addProduct = useCallback(() => {
    if (currentProduct.name && currentProduct.wholesalePrice && currentProduct.estimatedRetailPrice) {
      const newProduct: ProductCandidate = {
        ...currentProduct,
        id: Date.now().toString(),
        marketDemandEvidence: currentProduct.marketDemandEvidence || [],
        customizationOptions: currentProduct.customizationOptions || []
      } as ProductCandidate

      const newProducts = [...products, newProduct]
      setProducts(newProducts)
      
      // 重新计算所有评估
      const newEvaluations = newProducts.map(p => ProductSelectionCalculator.evaluateProduct(p))
      const sortedEvaluations = ProductSelectionCalculator.compareProducts(newEvaluations)
      setEvaluations(sortedEvaluations)
      
      // 重置表单
      setCurrentProduct({
        id: '',
        name: '',
        category: '',
        supplier: '',
        wholesalePrice: 0,
        estimatedRetailPrice: 0,
        minimumOrderQuantity: 0,
        leadTime: 0,
        madeInJapanScore: 5,
        nonConsumableScore: 5,
        priceRangeScore: 5,
        personalizationScore: 5,
        repeatPurchaseScore: 5,
        marketDemandEvidence: [],
        competitorAnalysis: '',
        seasonalityFactor: 1,
        shippingComplexity: 5,
        storageRequirements: '',
        customizationOptions: [],
        estimatedMonthlySales: 0,
        marketingCostPerUnit: 0,
        notes: ''
      })
      
      setActiveTab('results')
    }
  }, [currentProduct, products])

  const removeProduct = useCallback((id: string) => {
    const newProducts = products.filter(p => p.id !== id)
    setProducts(newProducts)
    
    if (newProducts.length > 0) {
      const newEvaluations = newProducts.map(p => ProductSelectionCalculator.evaluateProduct(p))
      const sortedEvaluations = ProductSelectionCalculator.compareProducts(newEvaluations)
      setEvaluations(sortedEvaluations)
    } else {
      setEvaluations([])
    }
  }, [products])

  const portfolioRecommendation = evaluations.length > 0 ? 
    ProductSelectionCalculator.generatePortfolioRecommendation(evaluations) : null

  const loadSampleProducts = () => {
    const sampleProducts: ProductCandidate[] = [
      {
        id: '1',
        name: 'Kaweco Brass Sport 钢笔',
        category: '高端文具',
        supplier: 'Kaweco Japan',
        wholesalePrice: 65,
        estimatedRetailPrice: 95,
        minimumOrderQuantity: 50,
        leadTime: 30,
        madeInJapanScore: 8,
        nonConsumableScore: 10,
        priceRangeScore: 9,
        personalizationScore: 10,
        repeatPurchaseScore: 9,
        marketDemandEvidence: ['Reddit r/fountainpens 156赞', 'EDC社区推荐', '礼品市场需求'],
        competitorAnalysis: '相比Lamy价格有优势，质量更佳',
        seasonalityFactor: 1.2,
        shippingComplexity: 3,
        storageRequirements: '常温干燥',
        customizationOptions: ['激光雕刻姓名', '日期雕刻', '图案定制'],
        estimatedMonthlySales: 25,
        marketingCostPerUnit: 8,
        notes: '黄铜材质会自然包浆，增加独特性'
      },
      {
        id: '2',
        name: 'Higo no Kami 折叠刀',
        category: 'EDC工具',
        supplier: '日本传统刀具厂',
        wholesalePrice: 45,
        estimatedRetailPrice: 75,
        minimumOrderQuantity: 100,
        leadTime: 45,
        madeInJapanScore: 10,
        nonConsumableScore: 9,
        priceRangeScore: 8,
        personalizationScore: 8,
        repeatPurchaseScore: 8,
        marketDemandEvidence: ['EDC社区203赞', '户外爱好者推荐'],
        competitorAnalysis: '传统工艺独特性强',
        seasonalityFactor: 1.0,
        shippingComplexity: 7,
        storageRequirements: '防潮存放',
        customizationOptions: ['黄铜套环雕刻', '刀身蚀刻'],
        estimatedMonthlySales: 20,
        marketingCostPerUnit: 12,
        notes: '需要了解各地法律法规'
      },
      {
        id: '3',
        name: 'Midori 黄铜直尺套装',
        category: '办公用品',
        supplier: 'Midori Corporation',
        wholesalePrice: 35,
        estimatedRetailPrice: 65,
        minimumOrderQuantity: 80,
        leadTime: 25,
        madeInJapanScore: 9,
        nonConsumableScore: 10,
        priceRangeScore: 8,
        personalizationScore: 9,
        repeatPurchaseScore: 9,
        marketDemandEvidence: ['办公美学社区', 'BIFL 189赞'],
        competitorAnalysis: '设计感强于普通办公用品',
        seasonalityFactor: 1.3,
        shippingComplexity: 2,
        storageRequirements: '常温存放',
        customizationOptions: ['激光雕刻Logo', '个人姓名', '公司标识'],
        estimatedMonthlySales: 30,
        marketingCostPerUnit: 6,
        notes: '企业客户潜力大'
      }
    ]
    
    setProducts(sampleProducts)
    const newEvaluations = sampleProducts.map(p => ProductSelectionCalculator.evaluateProduct(p))
    const sortedEvaluations = ProductSelectionCalculator.compareProducts(newEvaluations)
    setEvaluations(sortedEvaluations)
    setActiveTab('results')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-6">
      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-black text-gray-900 mb-2">
          Tatami Labs 选品工具
        </h1>
        <p className="text-lg text-gray-600">
          基于五大黄金法则的智能产品评估系统
        </p>
      </motion.div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg">
          {['input', 'results', 'portfolio'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`flex-1 py-3 px-6 rounded-md font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab === 'input' && '📝 产品录入'}
              {tab === 'results' && '📊 评估结果'}
              {tab === 'portfolio' && '🎯 组合推荐'}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {/* Product Input Tab */}
          {activeTab === 'input' && (
            <motion.div
              key="input"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Input Form */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">产品信息录入</h2>
                  <button
                    onClick={loadSampleProducts}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
                  >
                    载入样例数据
                  </button>
                </div>
                
                <div className="space-y-6">
                  {/* 基础信息 */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">基础信息</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <input
                        type="text"
                        placeholder="产品名称"
                        value={currentProduct.name}
                        onChange={(e) => setCurrentProduct({...currentProduct, name: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="产品类别"
                        value={currentProduct.category}
                        onChange={(e) => setCurrentProduct({...currentProduct, category: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="供应商"
                        value={currentProduct.supplier}
                        onChange={(e) => setCurrentProduct({...currentProduct, supplier: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* 价格信息 */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">价格信息</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">批发价（美元）</label>
                        <input
                          type="number"
                          value={currentProduct.wholesalePrice}
                          onChange={(e) => setCurrentProduct({...currentProduct, wholesalePrice: Number(e.target.value)})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">预计零售价（美元）</label>
                        <input
                          type="number"
                          value={currentProduct.estimatedRetailPrice}
                          onChange={(e) => setCurrentProduct({...currentProduct, estimatedRetailPrice: Number(e.target.value)})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 五大黄金法则评分 */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">五大黄金法则评分 (1-10)</h3>
                    <div className="space-y-4">
                      {[
                        { key: 'madeInJapanScore', label: '日本制造确认' },
                        { key: 'nonConsumableScore', label: '非消耗品特性' },
                        { key: 'priceRangeScore', label: '价格区间匹配' },
                        { key: 'personalizationScore', label: '个性化潜力' },
                        { key: 'repeatPurchaseScore', label: '复购逻辑强度' }
                      ].map(({ key, label }) => (
                        <div key={key}>
                          <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium text-gray-700">{label}</label>
                            <span className="text-sm font-bold text-blue-600">
                              {currentProduct[key as keyof typeof currentProduct] || 5}
                            </span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="10"
                            value={currentProduct[key as keyof typeof currentProduct] as number || 5}
                            onChange={(e) => setCurrentProduct({
                              ...currentProduct, 
                              [key]: Number(e.target.value)
                            })}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 运营数据 */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">运营数据</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">最小订购量</label>
                        <input
                          type="number"
                          value={currentProduct.minimumOrderQuantity}
                          onChange={(e) => setCurrentProduct({...currentProduct, minimumOrderQuantity: Number(e.target.value)})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">交货时间（天）</label>
                        <input
                          type="number"
                          value={currentProduct.leadTime}
                          onChange={(e) => setCurrentProduct({...currentProduct, leadTime: Number(e.target.value)})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">预计月销量</label>
                        <input
                          type="number"
                          value={currentProduct.estimatedMonthlySales}
                          onChange={(e) => setCurrentProduct({...currentProduct, estimatedMonthlySales: Number(e.target.value)})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">单位营销成本</label>
                        <input
                          type="number"
                          value={currentProduct.marketingCostPerUnit}
                          onChange={(e) => setCurrentProduct({...currentProduct, marketingCostPerUnit: Number(e.target.value)})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={addProduct}
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    添加产品到评估列表
                  </button>
                </div>
              </div>

              {/* Quick Preview */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">产品预览</h2>
                
                {currentProduct.name ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-bold text-lg">{currentProduct.name}</h3>
                      <p className="text-gray-600">{currentProduct.category}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">批发价:</span> ${currentProduct.wholesalePrice}
                      </div>
                      <div>
                        <span className="font-medium">零售价:</span> ${currentProduct.estimatedRetailPrice}
                      </div>
                      <div>
                        <span className="font-medium">毛利率:</span> {
                          currentProduct.estimatedRetailPrice > 0 ? 
                          Math.round(((currentProduct.estimatedRetailPrice - currentProduct.wholesalePrice) / currentProduct.estimatedRetailPrice) * 100) : 0
                        }%
                      </div>
                      <div>
                        <span className="font-medium">五大法则评分:</span> {
                          (currentProduct.madeInJapanScore || 0) + 
                          (currentProduct.nonConsumableScore || 0) + 
                          (currentProduct.priceRangeScore || 0) + 
                          (currentProduct.personalizationScore || 0) + 
                          (currentProduct.repeatPurchaseScore || 0)
                        }/50
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500">请填写产品信息以查看预览</p>
                )}

                {/* Current Products List */}
                {products.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">已添加的产品 ({products.length})</h3>
                    <div className="space-y-2">
                      {products.map((product) => (
                        <div key={product.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <span className="font-medium">{product.name}</span>
                            <span className="text-gray-500 ml-2">${product.estimatedRetailPrice}</span>
                          </div>
                          <button
                            onClick={() => removeProduct(product.id)}
                            className="text-red-500 hover:text-red-700 font-bold"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Results Tab */}
          {activeTab === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              {evaluations.length > 0 ? (
                <div className="space-y-6">
                  {evaluations.map((evaluation, index) => (
                    <div key={evaluation.candidate.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl font-bold text-gray-900">#{index + 1}</span>
                            <h3 className="text-2xl font-bold text-gray-900">{evaluation.candidate.name}</h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                              evaluation.priorityLevel === 'HIGH' ? 'bg-green-100 text-green-800' :
                              evaluation.priorityLevel === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {evaluation.priorityLevel === 'HIGH' ? '高优先级' :
                               evaluation.priorityLevel === 'MEDIUM' ? '中优先级' : '低优先级'}
                            </span>
                          </div>
                          <p className="text-gray-600">{evaluation.candidate.category} · {evaluation.candidate.supplier}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-black text-blue-600">{evaluation.totalScore}/50</div>
                          <div className="text-sm text-gray-500">总评分</div>
                        </div>
                      </div>

                      {/* Scores Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{evaluation.profitabilityScore}</div>
                          <div className="text-sm text-gray-600">盈利能力评分</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">{evaluation.riskScore}</div>
                          <div className="text-sm text-gray-600">风险评分</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{evaluation.grossMarginPercentage}%</div>
                          <div className="text-sm text-gray-600">毛利率</div>
                        </div>
                      </div>

                      {/* Financial Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div>
                          <div className="text-sm text-gray-600">预计月营收</div>
                          <div className="text-lg font-bold">${evaluation.estimatedMonthlyRevenue.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">预计月利润</div>
                          <div className="text-lg font-bold">${evaluation.estimatedMonthlyProfit.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">盈亏平衡销量</div>
                          <div className="text-lg font-bold">{evaluation.breakEvenQuantity}件</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">投资回报周期</div>
                          <div className="text-lg font-bold">{evaluation.roiTimeframe}个月</div>
                        </div>
                      </div>

                      {/* Recommendation */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">推荐意见</h4>
                        <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">{evaluation.recommendation}</p>
                      </div>

                      {/* Next Steps */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">下一步行动</h4>
                        <ul className="space-y-2">
                          {evaluation.nextSteps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-2">
                              <span className="text-blue-600 mt-1">•</span>
                              <span className="text-gray-700">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">暂无评估结果</h3>
                  <p className="text-gray-600 mb-6">请先在"产品录入"页面添加产品信息</p>
                  <button
                    onClick={() => setActiveTab('input')}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    开始录入产品
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* Portfolio Tab */}
          {activeTab === 'portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              {portfolioRecommendation ? (
                <div className="space-y-8">
                  {/* Portfolio Overview */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">推荐产品组合</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                      <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <div className="text-3xl font-black text-blue-600">{portfolioRecommendation.recommendedProducts.length}</div>
                        <div className="text-sm text-gray-600">推荐产品数量</div>
                      </div>
                      <div className="text-center p-6 bg-green-50 rounded-lg">
                        <div className="text-3xl font-black text-green-600">${portfolioRecommendation.totalInvestment.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">总投资金额</div>
                      </div>
                      <div className="text-center p-6 bg-purple-50 rounded-lg">
                        <div className="text-3xl font-black text-purple-600">${portfolioRecommendation.expectedMonthlyRevenue.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">预期月营收</div>
                      </div>
                      <div className="text-center p-6 bg-orange-50 rounded-lg">
                        <div className="text-3xl font-black text-orange-600">{portfolioRecommendation.portfolioRiskScore}</div>
                        <div className="text-sm text-gray-600">组合风险评分</div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                      <h3 className="font-semibold text-yellow-800 mb-2">多样化建议</h3>
                      <p className="text-yellow-700">{portfolioRecommendation.diversificationAdvice}</p>
                    </div>
                  </div>

                  {/* Recommended Products */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">推荐产品详情</h3>
                    
                    <div className="space-y-4">
                      {portfolioRecommendation.recommendedProducts.map((evaluation, index) => (
                        <div key={evaluation.candidate.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-4">
                            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                              {index + 1}
                            </span>
                            <div>
                              <h4 className="font-semibold text-gray-900">{evaluation.candidate.name}</h4>
                              <p className="text-sm text-gray-600">{evaluation.candidate.category}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-6 text-sm">
                            <div className="text-center">
                              <div className="font-bold text-green-600">${evaluation.candidate.estimatedRetailPrice}</div>
                              <div className="text-gray-500">零售价</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-blue-600">{evaluation.grossMarginPercentage}%</div>
                              <div className="text-gray-500">毛利率</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-purple-600">{evaluation.totalScore}/50</div>
                              <div className="text-gray-500">总评分</div>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                              evaluation.priorityLevel === 'HIGH' ? 'bg-green-100 text-green-800' :
                              evaluation.priorityLevel === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {evaluation.priorityLevel === 'HIGH' ? '高' :
                               evaluation.priorityLevel === 'MEDIUM' ? '中' : '低'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">暂无组合推荐</h3>
                  <p className="text-gray-600 mb-6">请先添加产品并完成评估</p>
                  <button
                    onClick={() => setActiveTab('input')}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    开始选品分析
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}