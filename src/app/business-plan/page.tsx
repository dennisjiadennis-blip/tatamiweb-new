'use client'

import React, { useState, useMemo } from 'react'
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend, 
  ArcElement,
  BarElement,
  Filler
} from 'chart.js'
import { Line, Doughnut, Bar } from 'react-chartjs-2'
import { calculateFinancials, DEFAULT_ASSUMPTIONS, type FinancialResults } from '@/utils/financialCalculator'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  Filler
)

// Header Component
const Header = () => (
  <div className="bg-white text-black py-8 px-8 border-b-2 border-gray-900">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-2 text-black">
        Tatami Labs: 24-Month Financial Forecast & Business Plan
      </h1>
      <p className="text-lg text-black font-semibold">
        A Data-Driven Blueprint for Growth and Profitability
      </p>
    </div>
  </div>
)

// Assumptions Dashboard Component
const AssumptionsDashboard = () => (
  <div className="max-w-7xl mx-auto py-6 px-8">
    <div className="bg-gray-100 border border-black p-4 mb-6">
      <h3 className="text-base font-bold text-black mb-2">Clarification Note:</h3>
      <p className="text-black text-sm">
        The KOL partnership cost is set at ¥220,000 per session. This covers the direct COGS of ¥155,000 
        for a 10-person group and includes an additional ¥65,000 as a direct fee for content creation and promotion.
      </p>
    </div>

    <h2 className="text-2xl font-bold mb-6 text-black">Core Business Assumptions</h2>
    
    <div className="grid grid-cols-4 gap-4">
      {/* Cost Structure */}
      <div className="bg-white border border-black p-4">
        <h3 className="text-base font-bold mb-3 text-black">Cost Structure</h3>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-black">CEO Salary:</span>
            <span className="font-bold text-black">¥700,000/month</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Content Director:</span>
            <span className="font-bold text-black">¥400,000/month</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Tourism Director:</span>
            <span className="font-bold text-black">¥500,000/month</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Community Directors (2):</span>
            <span className="font-bold text-black">¥700,000/month</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">AI Engineer:</span>
            <span className="font-bold text-black">¥600,000/month</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">E-commerce Director:</span>
            <span className="font-bold text-black">¥700,000/month (M4+)</span>
          </div>
        </div>
      </div>

      {/* Tourism Business */}
      <div className="bg-white border border-black p-4">
        <h3 className="text-base font-bold mb-3 text-black">Tourism Business</h3>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-black">Start Month:</span>
            <span className="font-bold text-black">Month 1</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">COGS per Session:</span>
            <span className="font-bold text-black">¥125,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Wholesale Price:</span>
            <span className="font-bold text-black">¥168,750</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Gross Margin:</span>
            <span className="font-bold text-black">25.9%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Sessions/Agency/Month:</span>
            <span className="font-bold text-black">6</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Agencies (M1-3):</span>
            <span className="font-bold text-black">2</span>
          </div>
        </div>
      </div>

      {/* E-commerce Business */}
      <div className="bg-white border border-black p-4">
        <h3 className="text-base font-bold mb-3 text-black">E-commerce Business</h3>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-black">Start Month:</span>
            <span className="font-bold text-black">Month 5</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Average Order Value:</span>
            <span className="font-bold text-black">¥20,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Initial Conversion:</span>
            <span className="font-bold text-black">1.3%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Monthly Growth:</span>
            <span className="font-bold text-black">8%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Product Cost:</span>
            <span className="font-bold text-black">65%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Platform Fees:</span>
            <span className="font-bold text-black">6% total</span>
          </div>
        </div>
      </div>

      {/* Marketing Strategy */}
      <div className="bg-white border border-black p-4">
        <h3 className="text-base font-bold mb-3 text-black">Marketing Strategy</h3>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-black">KOL Campaign:</span>
            <span className="font-bold text-black">First 3 months</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">KOLs per Month:</span>
            <span className="font-bold text-black">5</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Cost per KOL:</span>
            <span className="font-bold text-black">¥220,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">User Incentives:</span>
            <span className="font-bold text-black">7% of e-commerce</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Content Marketing:</span>
            <span className="font-bold text-black">¥5,000+ (growing)</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-2 gap-4 mt-4">
      {/* Financial Parameters */}
      <div className="bg-white border border-black p-4">
        <h3 className="text-base font-bold mb-3 text-black">Financial Parameters</h3>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-black">Corporate Tax Rate:</span>
            <span className="font-bold text-black">30%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Employee Bonus:</span>
            <span className="font-bold text-black">5% of profit</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Startup Costs:</span>
            <span className="font-bold text-black">¥450,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Safety Margin:</span>
            <span className="font-bold text-black">40%</span>
          </div>
        </div>
      </div>

      {/* Growth Projections */}
      <div className="bg-white border border-black p-4">
        <h3 className="text-base font-bold mb-3 text-black">Growth Projections</h3>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-black">Starting Followers:</span>
            <span className="font-bold text-black">100,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">24M Target Followers:</span>
            <span className="font-bold text-black">7.8M+</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Tourism Agencies (M24):</span>
            <span className="font-bold text-black">70+</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Final Conversion Rate:</span>
            <span className="font-bold text-black">2.8%+</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// P&L Table Component
const PnLTable = ({ data }: { data: FinancialResults }) => {
  const keyMonths = [3, 6, 12, 18, 24]
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-black text-xs">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black px-2 py-1 text-left font-bold text-black">Item (¥)</th>
            {keyMonths.map(month => (
              <th key={month} className="border border-black px-2 py-1 text-right font-bold text-black">
                Month {month}
              </th>
            ))}
            <th className="border border-black px-2 py-1 text-right font-bold text-black">24M Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-2 py-1 font-bold text-black">Tourism Revenue</td>
            {keyMonths.map(month => (
              <td key={month} className="border border-black px-2 py-1 text-right text-black">
                {data.months[month - 1].tourismRevenue.toLocaleString()}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right font-bold text-black">
              {data.months.reduce((sum, m) => sum + m.tourismRevenue, 0).toLocaleString()}
            </td>
          </tr>
          <tr>
            <td className="border border-black px-2 py-1 font-bold text-black">E-commerce Revenue</td>
            {keyMonths.map(month => (
              <td key={month} className="border border-black px-2 py-1 text-right text-black">
                {data.months[month - 1].ecommerceRevenue.toLocaleString()}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right font-bold text-black">
              {data.months.reduce((sum, m) => sum + m.ecommerceRevenue, 0).toLocaleString()}
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-black px-2 py-1 font-bold text-black">Total Revenue</td>
            {keyMonths.map(month => (
              <td key={month} className="border border-black px-2 py-1 text-right font-bold text-black">
                {data.months[month - 1].totalRevenue.toLocaleString()}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right font-bold text-black">
              {data.summary.totalRevenue24M.toLocaleString()}
            </td>
          </tr>
          <tr>
            <td className="border border-black px-2 py-1 text-black">Total COGS</td>
            {keyMonths.map(month => (
              <td key={month} className="border border-black px-2 py-1 text-right text-black">
                {data.months[month - 1].totalCogs.toLocaleString()}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right text-black">
              {data.months.reduce((sum, m) => sum + m.totalCogs, 0).toLocaleString()}
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-black px-2 py-1 font-bold text-black">Gross Profit</td>
            {keyMonths.map(month => (
              <td key={month} className="border border-black px-2 py-1 text-right font-bold text-black">
                {data.months[month - 1].grossProfit.toLocaleString()}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right font-bold text-black">
              {data.months.reduce((sum, m) => sum + m.grossProfit, 0).toLocaleString()}
            </td>
          </tr>
          <tr>
            <td className="border border-black px-2 py-1 text-black">Total OPEX</td>
            {keyMonths.map(month => (
              <td key={month} className="border border-black px-2 py-1 text-right text-black">
                {data.months[month - 1].totalOpex.toLocaleString()}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right text-black">
              {data.months.reduce((sum, m) => sum + m.totalOpex, 0).toLocaleString()}
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-black px-2 py-1 font-bold text-black">EBIT</td>
            {keyMonths.map(month => (
              <td key={month} className="border border-black px-2 py-1 text-right font-bold text-black">
                {data.months[month - 1].ebit.toLocaleString()}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right font-bold text-black">
              {data.months.reduce((sum, m) => sum + m.ebit, 0).toLocaleString()}
            </td>
          </tr>
          <tr>
            <td className="border border-black px-2 py-1 text-black">Taxes</td>
            {keyMonths.map(month => (
              <td key={month} className="border border-black px-2 py-1 text-right text-black">
                {data.months[month - 1].taxes.toLocaleString()}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right text-black">
              {data.months.reduce((sum, m) => sum + m.taxes, 0).toLocaleString()}
            </td>
          </tr>
          <tr className="bg-black text-white">
            <td className="border border-black px-2 py-1 font-bold">Net Profit</td>
            {keyMonths.map(month => (
              <td key={month} className="border border-black px-2 py-1 text-right font-bold">
                {data.months[month - 1].netProfit.toLocaleString()}
              </td>
            ))}
            <td className="border border-black px-2 py-1 text-right font-bold">
              {data.summary.totalProfit24M.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// Cash Flow Table Component
const CashFlowTable = ({ data }: { data: FinancialResults }) => {
  const keyMonths = [3, 6, 12, 18, 24]
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-black text-xs">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black px-2 py-1 text-left font-bold text-black">Cash Flow Item (¥)</th>
            {keyMonths.map(month => (
              <th key={month} className="border border-black px-2 py-1 text-right font-bold text-black">
                Month {month}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-2 py-1 text-black">Operating Cash Flow</td>
            {keyMonths.map(month => (
              <td key={month} className="border border-black px-2 py-1 text-right text-black">
                {data.months[month - 1].operatingCashFlow.toLocaleString()}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-black px-2 py-1 text-black">User Incentives</td>
            {keyMonths.map(month => (
              <td key={month} className="border border-black px-2 py-1 text-right text-black">
                -{data.months[month - 1].userIncentives.toLocaleString()}
              </td>
            ))}
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-black px-2 py-1 font-bold text-black">Net Cash Flow</td>
            {keyMonths.map(month => (
              <td key={month} className="border border-black px-2 py-1 text-right font-bold text-black">
                {data.months[month - 1].netCashFlow.toLocaleString()}
              </td>
            ))}
          </tr>
          <tr className="bg-black text-white">
            <td className="border border-black px-2 py-1 font-bold">Cumulative Cash</td>
            {keyMonths.map(month => (
              <td key={month} className="border border-black px-2 py-1 text-right font-bold">
                {data.months[month - 1].cumulativeCash.toLocaleString()}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// Revenue Mix Chart Component
const RevenueMixChart = ({ data }: { data: FinancialResults }) => {
  const chartData = {
    labels: data.months.map(m => `M${m.month}`),
    datasets: [
      {
        label: 'Tourism Revenue',
        data: data.months.map(m => m.tourismRevenue / 1000000),
        backgroundColor: 'rgba(100, 100, 100, 0.8)',
        borderColor: 'black',
        borderWidth: 1,
      },
      {
        label: 'E-commerce Revenue',
        data: data.months.map(m => m.ecommerceRevenue / 1000000),
        backgroundColor: 'rgba(200, 200, 200, 0.8)',
        borderColor: 'black',
        borderWidth: 1,
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'black',
          font: {
            size: 10,
            weight: 'bold'
          }
        }
      },
      title: {
        display: true,
        text: 'Tourism vs E-commerce Revenue (¥ Millions)',
        color: 'black',
        font: {
          size: 12,
          weight: 'bold'
        }
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          color: 'black',
          font: {
            size: 9
          }
        }
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          color: 'black',
          font: {
            size: 9
          }
        }
      },
    },
  }

  return (
    <div style={{ height: '250px' }}>
      <Bar data={chartData} options={options} />
    </div>
  )
}

// Cash Flow Chart Component
const CashFlowChart = ({ data }: { data: FinancialResults }) => {
  const chartData = {
    labels: data.months.map(m => `M${m.month}`),
    datasets: [
      {
        label: 'Cumulative Cash Flow (¥ Millions)',
        data: data.months.map(m => m.cumulativeCash / 1000000),
        borderColor: 'black',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        fill: true,
        tension: 0.1,
        borderWidth: 2,
        pointBackgroundColor: 'black',
        pointBorderColor: 'white',
        pointBorderWidth: 1,
        pointRadius: 2,
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'black',
          font: {
            size: 10,
            weight: 'bold'
          }
        }
      },
      title: {
        display: true,
        text: `Cash Flow Analysis - Break-even: Month ${data.summary.breakEvenMonth}`,
        color: 'black',
        font: {
          size: 12,
          weight: 'bold'
        }
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          color: 'black',
          font: {
            size: 9
          }
        }
      },
      y: {
        beginAtZero: false,
        grid: {
          color: function(context: any) {
            return context.tick.value === 0 ? 'rgba(255, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'
          }
        },
        ticks: {
          color: 'black',
          font: {
            size: 9
          }
        }
      }
    }
  }

  return (
    <div style={{ height: '250px' }}>
      <Line data={chartData} options={options} />
    </div>
  )
}

// Cost Structure Chart Component  
const CostStructureChart = ({ data }: { data: FinancialResults }) => {
  const month12 = data.months[11] // Month 12 (index 11)
  const totalCosts = month12.totalCogs + month12.totalOpex
  
  const chartData = {
    labels: [
      'Tourism COGS',
      'E-commerce COGS', 
      'Salaries',
      'Tech Costs',
      'Marketing',
      'Admin & Travel',
      'KOL Costs'
    ],
    datasets: [{
      data: [
        (month12.tourismCogs / totalCosts * 100).toFixed(1),
        (month12.ecommerceCogs / totalCosts * 100).toFixed(1),
        (month12.salaries / totalCosts * 100).toFixed(1),
        (month12.techCosts / totalCosts * 100).toFixed(1),
        (month12.marketingCosts / totalCosts * 100).toFixed(1),
        (month12.adminCosts / totalCosts * 100).toFixed(1),
        (month12.kolCosts / totalCosts * 100).toFixed(1),
      ],
      backgroundColor: [
        'rgba(50, 50, 50, 0.8)',
        'rgba(100, 100, 100, 0.8)', 
        'rgba(150, 150, 150, 0.8)',
        'rgba(200, 200, 200, 0.8)',
        'rgba(75, 75, 75, 0.8)',
        'rgba(125, 125, 125, 0.8)',
        'rgba(175, 175, 175, 0.8)'
      ],
      borderColor: 'black',
      borderWidth: 2,
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: 'black',
          font: {
            size: 9,
            weight: 'bold'
          }
        }
      },
      title: {
        display: true,
        text: 'Cost Structure - Month 12 (%)',
        color: 'black',
        font: {
          size: 12,
          weight: 'bold'
        }
      },
    },
  }

  return (
    <div style={{ height: '250px' }}>
      <Doughnut data={chartData} options={options} />
    </div>
  )
}


// Main Business Plan Page
export default function BusinessPlanPage() {
  const [activeTab, setActiveTab] = useState<'pnl' | 'cashflow'>('pnl')
  
  const financialData = useMemo(() => {
    return calculateFinancials(DEFAULT_ASSUMPTIONS)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AssumptionsDashboard />
      
      {/* Financial Statements Section */}
      <div className="max-w-7xl mx-auto py-6 px-8">
        <h2 className="text-2xl font-bold mb-4 text-black">Financial Statements</h2>
        
        <div className="bg-white border border-black p-4">
          <div className="flex space-x-1 mb-4">
            <button
              className={`px-3 py-1 border border-black font-bold text-sm ${
                activeTab === 'pnl' 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('pnl')}
            >
              P&L Statement
            </button>
            <button
              className={`px-3 py-1 border border-black font-bold text-sm ${
                activeTab === 'cashflow' 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('cashflow')}
            >
              Cash Flow Statement
            </button>
          </div>
          
          {activeTab === 'pnl' ? (
            <PnLTable data={financialData} />
          ) : (
            <CashFlowTable data={financialData} />
          )}
        </div>
      </div>

      {/* Visual Dashboard Section */}
      <div className="max-w-7xl mx-auto py-6 px-8">
        <h2 className="text-2xl font-bold mb-4 text-black">Visual Dashboard</h2>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Revenue Mix Chart */}
          <div className="bg-white border border-black p-4">
            <RevenueMixChart data={financialData} />
          </div>
          
          {/* Cash Flow Chart */}
          <div className="bg-white border border-black p-4">
            <CashFlowChart data={financialData} />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* Cost Structure Chart */}
          <div className="bg-white border border-black p-4">
            <div className="max-w-sm mx-auto">
              <CostStructureChart data={financialData} />
            </div>
          </div>
          
          {/* KPI Summary */}
          <div className="bg-white border border-black p-4">
            <h3 className="text-lg font-bold mb-3 text-black">Key Metrics</h3>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-black">24M Revenue</p>
                <p className="font-bold text-black">¥{(financialData.summary.totalRevenue24M / 1000000000).toFixed(1)}B</p>
              </div>
              <div>
                <p className="text-black">Net Profit</p>
                <p className="font-bold text-black">{(financialData.summary.netProfitMargin * 100).toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-black">Funding Need</p>
                <p className="font-bold text-black">¥{(financialData.summary.recommendedFunding / 1000000).toFixed(1)}M</p>
              </div>
              <div>
                <p className="text-black">Break-even</p>
                <p className="font-bold text-black">Month {financialData.summary.breakEvenMonth}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Summary Section */}
      <div className="max-w-7xl mx-auto py-6 px-8">
        <div className="bg-black text-white border border-black p-6 text-center">
          <h2 className="text-xl font-bold mb-3">Executive Summary</h2>
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-gray-300">Peak Funding Requirement</p>
              <p className="text-lg font-bold">¥{(financialData.summary.recommendedFunding / 1000000).toFixed(1)}M</p>
            </div>
            <div>
              <p className="text-gray-300">24-Month Revenue</p>
              <p className="text-lg font-bold">¥{(financialData.summary.totalRevenue24M / 1000000000).toFixed(1)}B</p>
            </div>
            <div>
              <p className="text-gray-300">Return on Investment</p>
              <p className="text-lg font-bold">{((financialData.summary.totalProfit24M / financialData.summary.recommendedFunding) * 100).toFixed(0)}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}