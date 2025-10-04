'use client'

import { motion } from 'framer-motion'
import { calculateFundingRequirement, FUNDING_ASSUMPTIONS } from '@/utils/funding-calculator'

export default function FundingCalculationPage() {
  const result = calculateFundingRequirement(FUNDING_ASSUMPTIONS)
  
  const formatCurrency = (amount: number) => {
    return `¥${amount.toLocaleString('ja-JP')}`
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-6">
      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-black text-gray-900 mb-2">
          融资需求计算
        </h1>
        <p className="text-lg text-gray-600">
          基于修正后的商业假设计算融资金额
        </p>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Key Result Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          variants={cardVariants}
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              推荐融资金额
            </h2>
            <div className="text-6xl font-black text-blue-600 mb-4">
              {formatCurrency(result.recommendedFundingAmount)}
            </div>
            <p className="text-lg text-gray-600">
              安全系数 1.4 × 负现金流总和
            </p>
          </div>
        </motion.div>

        {/* Calculation Details */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          variants={cardVariants}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">计算详情</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">最大负现金流</span>
                <span className="font-bold text-red-600">
                  {formatCurrency(result.maxNegativeCashFlow)}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">现金流转正月份</span>
                <span className="font-bold text-green-600">
                  第 {result.cashFlowTurnPositiveMonth} 个月
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">转正前负现金流总和</span>
                <span className="font-bold text-orange-600">
                  {formatCurrency(result.totalNegativeCashFlowBeforeTurnPositive)}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">安全系数</span>
                <span className="font-bold text-blue-600">1.4</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">12个月总营收</span>
                <span className="font-bold text-green-600">
                  {formatCurrency(result.totalRevenue12M)}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">12个月净利润</span>
                <span className="font-bold text-blue-600">
                  {formatCurrency(result.totalProfit12M)}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">净利润率</span>
                <span className="font-bold text-purple-600">
                  {(result.netProfitMargin * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Assumptions */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          variants={cardVariants}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">关键修正假设</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">KOL成本修正</h4>
              <p className="text-blue-700">
                每场会话：<span className="font-bold">¥155,000</span>
                <br />
                <span className="text-sm">(原¥220,000)</span>
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-900 mb-2">粉丝增长修正</h4>
              <p className="text-green-700">
                普通会话粉丝：<span className="font-bold">100/场</span>
                <br />
                <span className="text-sm">(原20/场)</span>
              </p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-purple-900 mb-2">安全系数</h4>
              <p className="text-purple-700">
                融资倍数：<span className="font-bold">1.4倍</span>
                <br />
                <span className="text-sm">40%安全边际</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Monthly Cash Flow Summary */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          variants={cardVariants}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">月度现金流概览</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 px-4 font-bold text-gray-900">月份</th>
                  <th className="text-right py-3 px-4 font-bold text-gray-900">总营收</th>
                  <th className="text-right py-3 px-4 font-bold text-gray-900">净利润</th>
                  <th className="text-right py-3 px-4 font-bold text-gray-900">净现金流</th>
                  <th className="text-right py-3 px-4 font-bold text-gray-900">累计现金</th>
                </tr>
              </thead>
              <tbody>
                {result.months.map((month, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-semibold text-gray-800">
                      {month.month}
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-gray-800">
                      {formatCurrency(month.totalRevenue)}
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-gray-800">
                      {formatCurrency(month.netProfit)}
                    </td>
                    <td className={`py-3 px-4 text-right font-bold ${
                      month.netCashFlow >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {formatCurrency(month.netCashFlow)}
                    </td>
                    <td className={`py-3 px-4 text-right font-bold ${
                      month.cumulativeCash >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {formatCurrency(month.cumulativeCash)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="text-center mt-12 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <p className="text-sm text-gray-500">
          © 2025 Tatami Labs · 融资需求计算基于修正后的商业模型
        </p>
      </motion.div>
    </main>
  )
}