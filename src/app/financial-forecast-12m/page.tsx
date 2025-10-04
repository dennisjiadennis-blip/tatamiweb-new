'use client'

import React, { useMemo } from 'react'
import { calculateUpdatedFinancials, UPDATED_ASSUMPTIONS, type UpdatedFinancialResults } from '@/utils/updated-financial-calculator'

// Header Component
const Header = () => (
  <div className="bg-white text-black py-8 px-8 border-b-2 border-gray-900">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-2 text-black">
        Tatami Labs: 12个月财务预测模型
      </h1>
      <p className="text-lg text-black font-semibold">
        基于更新假设条件的综合财务分析 (单位：万日元)
      </p>
    </div>
  </div>
)

// Clarification Note Component
const ClarificationNote = () => (
  <div className="max-w-7xl mx-auto py-6 px-8">
    <div className="bg-red-50 border border-red-400 p-4 mb-6">
      <h3 className="text-base font-bold text-red-800 mb-2">⚠️ 数据不一致需要澄清：</h3>
      <p className="text-red-700 text-sm">
        <strong>KOL合作成本不匹配：</strong> 按10人团计算，单场线下体验的直接成本(COGS)应为¥155,000，
        但您设定的KOL合作成本为¥220,000。差额¥65,000可能是支付给KOL的额外内容制作和推广费用。
        建议明确说明这¥220,000的具体构成。
      </p>
    </div>
  </div>
)

// Key Assumptions Display
const AssumptionsDisplay = () => (
  <div className="max-w-7xl mx-auto py-6 px-8">
    <h2 className="text-2xl font-bold mb-6 text-black">核心财务假设</h2>
    
    <div className="grid grid-cols-4 gap-4">
      {/* 人力成本 */}
      <div className="bg-white border border-black p-4">
        <h3 className="text-base font-bold mb-3 text-black">人力成本结构</h3>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-black">CEO:</span>
            <span className="font-bold text-black">¥70万/月</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">内容总监:</span>
            <span className="font-bold text-black">¥25万→40万(M3)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">旅游总监:</span>
            <span className="font-bold text-black">¥50万/月</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">COO:</span>
            <span className="font-bold text-black">¥50万/月(M3起)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">电商负责人:</span>
            <span className="font-bold text-black">¥40万/月(M4起)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">M9薪资增长:</span>
            <span className="font-bold text-black">+20%(管理增员)</span>
          </div>
        </div>
      </div>

      {/* 旅游业务 */}
      <div className="bg-white border border-black p-4">
        <h3 className="text-base font-bold mb-3 text-black">旅游业务模型</h3>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-black">单场成本:</span>
            <span className="font-bold text-black">¥12.5万</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">批发价:</span>
            <span className="font-bold text-black">¥16.875万</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">毛利率:</span>
            <span className="font-bold text-black">25.9%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">合作旅行社(M1-3):</span>
            <span className="font-bold text-black">2家</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">合作旅行社(M10-12):</span>
            <span className="font-bold text-black">40家</span>
          </div>
        </div>
      </div>

      {/* 电商业务 */}
      <div className="bg-white border border-black p-4">
        <h3 className="text-base font-bold mb-3 text-black">电商业务模型</h3>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-black">启动月份:</span>
            <span className="font-bold text-black">第5个月</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">客单价:</span>
            <span className="font-bold text-black">¥2万</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">初始转化率:</span>
            <span className="font-bold text-black">1.3%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">月增长率:</span>
            <span className="font-bold text-black">8%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">总成本率:</span>
            <span className="font-bold text-black">81%(含运营外包)</span>
          </div>
        </div>
      </div>

      {/* 粉丝增长模型 */}
      <div className="bg-white border border-black p-4">
        <h3 className="text-base font-bold mb-3 text-black">粉丝增长模型</h3>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-black">爆款内容占比:</span>
            <span className="font-bold text-black">3%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">爆款粉丝增长:</span>
            <span className="font-bold text-black">3.9万/次</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">普通内容占比:</span>
            <span className="font-bold text-black">97%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">普通粉丝增长:</span>
            <span className="font-bold text-black">20个/次</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">用户激励:</span>
            <span className="font-bold text-black">电商收入7%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// P&L Table Component
const PnLTable = ({ data }: { data: UpdatedFinancialResults }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-black text-xs">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black px-2 py-1 text-left font-bold text-black">项目 (万日元)</th>
            {data.months.map(m => (
              <th key={m.month} className="border border-black px-2 py-1 text-right font-bold text-black">
                第{m.month}月
              </th>
            ))}
            <th className="border border-black px-2 py-1 text-right font-bold text-black">12月累计</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-2 py-1 font-bold text-black">旅游收入</td>
            {data.months.map(m => (
              <td key={m.month} className="border border-black px-2 py-1 text-right text-black">
                {(m.tourismRevenue / 10000).toFixed(1)}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right font-bold text-black">
              {(data.months.reduce((sum, m) => sum + m.tourismRevenue, 0) / 10000).toFixed(1)}
            </td>
          </tr>
          <tr>
            <td className="border border-black px-2 py-1 font-bold text-black">电商收入</td>
            {data.months.map(m => (
              <td key={m.month} className="border border-black px-2 py-1 text-right text-black">
                {(m.ecommerceRevenue / 10000).toFixed(1)}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right font-bold text-black">
              {(data.months.reduce((sum, m) => sum + m.ecommerceRevenue, 0) / 10000).toFixed(1)}
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-black px-2 py-1 font-bold text-black">总收入</td>
            {data.months.map(m => (
              <td key={m.month} className="border border-black px-2 py-1 text-right font-bold text-black">
                {(m.totalRevenue / 10000).toFixed(1)}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right font-bold text-black">
              {(data.summary.totalRevenue12M / 10000).toFixed(1)}
            </td>
          </tr>
          <tr>
            <td className="border border-black px-2 py-1 text-black">销货成本</td>
            {data.months.map(m => (
              <td key={m.month} className="border border-black px-2 py-1 text-right text-black">
                {(m.totalCogs / 10000).toFixed(1)}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right text-black">
              {(data.months.reduce((sum, m) => sum + m.totalCogs, 0) / 10000).toFixed(1)}
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-black px-2 py-1 font-bold text-black">毛利润</td>
            {data.months.map(m => (
              <td key={m.month} className="border border-black px-2 py-1 text-right font-bold text-black">
                {(m.grossProfit / 10000).toFixed(1)}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right font-bold text-black">
              {(data.months.reduce((sum, m) => sum + m.grossProfit, 0) / 10000).toFixed(1)}
            </td>
          </tr>
          <tr>
            <td className="border border-black px-2 py-1 text-black">运营费用</td>
            {data.months.map(m => (
              <td key={m.month} className="border border-black px-2 py-1 text-right text-black">
                {(m.totalOpex / 10000).toFixed(1)}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right text-black">
              {(data.months.reduce((sum, m) => sum + m.totalOpex, 0) / 10000).toFixed(1)}
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-black px-2 py-1 font-bold text-black">税前利润(EBIT)</td>
            {data.months.map(m => (
              <td key={m.month} className="border border-black px-2 py-1 text-right font-bold text-black">
                {(m.ebit / 10000).toFixed(1)}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right font-bold text-black">
              {(data.months.reduce((sum, m) => sum + m.ebit, 0) / 10000).toFixed(1)}
            </td>
          </tr>
          <tr>
            <td className="border border-black px-2 py-1 text-black">所得税</td>
            {data.months.map(m => (
              <td key={m.month} className="border border-black px-2 py-1 text-right text-black">
                {(m.taxes / 10000).toFixed(1)}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right text-black">
              {(data.months.reduce((sum, m) => sum + m.taxes, 0) / 10000).toFixed(1)}
            </td>
          </tr>
          <tr className="bg-black text-white">
            <td className="border border-black px-2 py-1 font-bold">净利润</td>
            {data.months.map(m => (
              <td key={m.month} className="border border-black px-2 py-1 text-right font-bold">
                {(m.netProfit / 10000).toFixed(1)}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right font-bold">
              {(data.summary.totalProfit12M / 10000).toFixed(1)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// Cash Flow Table Component
const CashFlowTable = ({ data }: { data: UpdatedFinancialResults }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-black text-xs">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black px-2 py-1 text-left font-bold text-black">现金流项目 (万日元)</th>
            {data.months.map(m => (
              <th key={m.month} className="border border-black px-2 py-1 text-right font-bold text-black">
                第{m.month}月
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-2 py-1 text-black">经营现金流</td>
            {data.months.map(m => (
              <td key={m.month} className="border border-black px-2 py-1 text-right text-black">
                {(m.operatingCashFlow / 10000).toFixed(1)}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-black px-2 py-1 text-black">用户激励支出</td>
            {data.months.map(m => (
              <td key={m.month} className="border border-black px-2 py-1 text-right text-black">
                -{(m.userIncentives / 10000).toFixed(1)}
              </td>
            ))}
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-black px-2 py-1 font-bold text-black">净现金流</td>
            {data.months.map(m => (
              <td key={m.month} className="border border-black px-2 py-1 text-right font-bold text-black">
                {(m.netCashFlow / 10000).toFixed(1)}
              </td>
            ))}
          </tr>
          <tr className="bg-black text-white">
            <td className="border border-black px-2 py-1 font-bold">累计现金流</td>
            {data.months.map(m => (
              <td key={m.month} className="border border-black px-2 py-1 text-right font-bold">
                {(m.cumulativeCash / 10000).toFixed(1)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// KPIs Table Component
const KPIsTable = ({ data }: { data: UpdatedFinancialResults }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* 线下业务KPIs */}
      <div className="bg-white border border-black p-4">
        <h3 className="text-lg font-bold mb-3 text-black">线下业务KPIs</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-black text-xs">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black px-1 py-1 font-bold text-black">月份</th>
                <th className="border border-black px-1 py-1 font-bold text-black">场次</th>
                <th className="border border-black px-1 py-1 font-bold text-black">收入(万)</th>
                <th className="border border-black px-1 py-1 font-bold text-black">利润(万)</th>
              </tr>
            </thead>
            <tbody>
              {data.months.map(m => (
                <tr key={m.month}>
                  <td className="border border-black px-1 py-1 text-center text-black">{m.month}</td>
                  <td className="border border-black px-1 py-1 text-right text-black">{m.tourismSessions}</td>
                  <td className="border border-black px-1 py-1 text-right text-black">
                    {(m.tourismRevenue / 10000).toFixed(1)}
                  </td>
                  <td className="border border-black px-1 py-1 text-right text-black">
                    {((m.tourismRevenue - m.tourismCogs) / 10000).toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 电商业务KPIs */}
      <div className="bg-white border border-black p-4">
        <h3 className="text-lg font-bold mb-3 text-black">电商业务KPIs</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-black text-xs">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black px-1 py-1 font-bold text-black">月份</th>
                <th className="border border-black px-1 py-1 font-bold text-black">粉丝数(万)</th>
                <th className="border border-black px-1 py-1 font-bold text-black">转化率</th>
                <th className="border border-black px-1 py-1 font-bold text-black">订单数</th>
                <th className="border border-black px-1 py-1 font-bold text-black">收入(万)</th>
              </tr>
            </thead>
            <tbody>
              {data.months.map(m => (
                <tr key={m.month}>
                  <td className="border border-black px-1 py-1 text-center text-black">{m.month}</td>
                  <td className="border border-black px-1 py-1 text-right text-black">
                    {(m.totalFollowers / 10000).toFixed(1)}
                  </td>
                  <td className="border border-black px-1 py-1 text-right text-black">
                    {(m.conversionRate * 100).toFixed(1)}%
                  </td>
                  <td className="border border-black px-1 py-1 text-right text-black">{m.ecommerceOrders}</td>
                  <td className="border border-black px-1 py-1 text-right text-black">
                    {(m.ecommerceRevenue / 10000).toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 整体财务KPIs */}
      <div className="bg-white border border-black p-4">
        <h3 className="text-lg font-bold mb-3 text-black">整体财务KPIs</h3>
        <div className="space-y-3 text-sm">
          <div>
            <p className="text-black font-bold">12个月总收入</p>
            <p className="text-xl font-bold text-black">{(data.summary.totalRevenue12M / 100000000).toFixed(1)}亿日元</p>
          </div>
          <div>
            <p className="text-black font-bold">12个月净利润</p>
            <p className="text-xl font-bold text-black">{(data.summary.totalProfit12M / 10000).toFixed(0)}万日元</p>
          </div>
          <div>
            <p className="text-black font-bold">净利润率</p>
            <p className="text-xl font-bold text-black">{(data.summary.netProfitMargin * 100).toFixed(1)}%</p>
          </div>
          <div>
            <p className="text-black font-bold">盈亏平衡月</p>
            <p className="text-xl font-bold text-black">第{data.summary.breakEvenMonth}个月</p>
          </div>
          <div>
            <p className="text-black font-bold">建议融资金额</p>
            <p className="text-xl font-bold text-black">{(data.summary.recommendedFunding / 10000).toFixed(0)}万日元</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Revenue Comparison Component
const RevenueComparison = ({ data }: { data: UpdatedFinancialResults }) => {
  const totalTourismRevenue = data.months.reduce((sum, m) => sum + m.tourismRevenue, 0);
  const totalEcommerceRevenue = data.months.reduce((sum, m) => sum + m.ecommerceRevenue, 0);
  const totalRevenue = totalTourismRevenue + totalEcommerceRevenue;
  
  return (
    <div className="bg-white border border-black p-6">
      <h3 className="text-xl font-bold mb-4 text-black text-center">12个月收入结构对比</h3>
      <div className="grid grid-cols-2 gap-6">
        <div className="text-center">
          <p className="text-lg font-bold text-black">旅游收入</p>
          <p className="text-3xl font-bold text-black">{(totalTourismRevenue / 10000).toFixed(0)}万</p>
          <p className="text-sm text-black">占比: {((totalTourismRevenue / totalRevenue) * 100).toFixed(1)}%</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-black">电商收入</p>
          <p className="text-3xl font-bold text-black">{(totalEcommerceRevenue / 10000).toFixed(0)}万</p>
          <p className="text-sm text-black">占比: {((totalEcommerceRevenue / totalRevenue) * 100).toFixed(1)}%</p>
        </div>
      </div>
    </div>
  )
}

// Cost Structure Analysis
const CostStructureAnalysis = ({ data }: { data: UpdatedFinancialResults }) => {
  const totalSalaries = data.months.reduce((sum, m) => sum + m.salaryTotal, 0);
  const totalTech = data.months.reduce((sum, m) => sum + m.techCosts, 0);
  const totalMarketing = data.months.reduce((sum, m) => sum + m.marketingCosts, 0);
  const totalAdmin = data.months.reduce((sum, m) => sum + m.adminCosts, 0);
  const totalKol = data.months.reduce((sum, m) => sum + m.kolCosts, 0);
  const totalCogs = data.months.reduce((sum, m) => sum + m.totalCogs, 0);
  const totalCosts = totalSalaries + totalTech + totalMarketing + totalAdmin + totalKol + totalCogs;

  return (
    <div className="bg-white border border-black p-6">
      <h3 className="text-xl font-bold mb-4 text-black text-center">12个月成本结构分析</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-sm font-bold text-black">销货成本(COGS)</p>
          <p className="text-xl font-bold text-black">{((totalCogs / totalCosts) * 100).toFixed(1)}%</p>
          <p className="text-xs text-black">{(totalCogs / 10000).toFixed(0)}万日元</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold text-black">人力成本</p>
          <p className="text-xl font-bold text-black">{((totalSalaries / totalCosts) * 100).toFixed(1)}%</p>
          <p className="text-xs text-black">{(totalSalaries / 10000).toFixed(0)}万日元</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold text-black">营销成本</p>
          <p className="text-xl font-bold text-black">{((totalMarketing / totalCosts) * 100).toFixed(1)}%</p>
          <p className="text-xs text-black">{(totalMarketing / 10000).toFixed(0)}万日元</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold text-black">KOL投入</p>
          <p className="text-xl font-bold text-black">{((totalKol / totalCosts) * 100).toFixed(1)}%</p>
          <p className="text-xs text-black">{(totalKol / 10000).toFixed(0)}万日元</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold text-black">技术成本</p>
          <p className="text-xl font-bold text-black">{((totalTech / totalCosts) * 100).toFixed(1)}%</p>
          <p className="text-xs text-black">{(totalTech / 10000).toFixed(0)}万日元</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold text-black">管理成本</p>
          <p className="text-xl font-bold text-black">{((totalAdmin / totalCosts) * 100).toFixed(1)}%</p>
          <p className="text-xs text-black">{(totalAdmin / 10000).toFixed(0)}万日元</p>
        </div>
      </div>
    </div>
  )
}

// Main Page Component
export default function FinancialForecast12MPage() {
  const financialData = useMemo(() => {
    return calculateUpdatedFinancials(UPDATED_ASSUMPTIONS)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ClarificationNote />
      <AssumptionsDisplay />
      
      {/* 1. Financial Forecast */}
      <div className="max-w-7xl mx-auto py-6 px-8">
        <h2 className="text-2xl font-bold mb-4 text-black">1. 财务预测报表</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 text-black">损益表 (P&L Statement)</h3>
          <div className="bg-white border border-black p-4">
            <PnLTable data={financialData} />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 text-black">现金流量表 (Cash Flow Statement)</h3>
          <div className="bg-white border border-black p-4">
            <CashFlowTable data={financialData} />
          </div>
        </div>
      </div>

      {/* 2. Revenue Comparison */}
      <div className="max-w-7xl mx-auto py-6 px-8">
        <h2 className="text-2xl font-bold mb-4 text-black">2. 旅游收入与电商收入对比</h2>
        <RevenueComparison data={financialData} />
      </div>

      {/* 3. KPIs Analysis */}
      <div className="max-w-7xl mx-auto py-6 px-8">
        <h2 className="text-2xl font-bold mb-4 text-black">3. 关键绩效指标分析</h2>
        <KPIsTable data={financialData} />
      </div>

      {/* 4. Cost Structure */}
      <div className="max-w-7xl mx-auto py-6 px-8">
        <h2 className="text-2xl font-bold mb-4 text-black">4. 成本结构分析</h2>
        <CostStructureAnalysis data={financialData} />
      </div>

      {/* Executive Summary */}
      <div className="max-w-7xl mx-auto py-6 px-8">
        <div className="bg-black text-white border border-black p-6 text-center">
          <h2 className="text-xl font-bold mb-3">执行摘要</h2>
          <div className="grid grid-cols-4 gap-6 text-sm">
            <div>
              <p className="text-gray-300">12个月总收入</p>
              <p className="text-lg font-bold">{(financialData.summary.totalRevenue12M / 100000000).toFixed(1)}亿日元</p>
            </div>
            <div>
              <p className="text-gray-300">净利润</p>
              <p className="text-lg font-bold">{(financialData.summary.totalProfit12M / 10000).toFixed(0)}万日元</p>
            </div>
            <div>
              <p className="text-gray-300">盈亏平衡</p>
              <p className="text-lg font-bold">第{financialData.summary.breakEvenMonth}个月</p>
            </div>
            <div>
              <p className="text-gray-300">建议融资</p>
              <p className="text-lg font-bold">{(financialData.summary.recommendedFunding / 10000).toFixed(0)}万日元</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}