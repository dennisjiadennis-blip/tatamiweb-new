'use client'

import { Card } from '@/components/ui/card'
import { PageTransition, CardMosaicContainer } from '@/components/ui/page-transition'

// 模拟匠人数据
const masters = [
  {
    id: 'yamamoto-sensei',
    name: '山本 雅夫',
    specialty: '陶艺大师',
    description: '四十年专注于备前烧的制作，作品曾获日本文化厅长官奖',
    backgroundColor: 'blue' as const
  },
  {
    id: 'tanaka-sensei', 
    name: '田中 慧子',
    specialty: '茶道宗师',
    description: '里千家流派第十五代传人，致力于茶道文化的国际传播',
    backgroundColor: 'green' as const
  },
  {
    id: 'sato-sensei',
    name: '佐藤 信一',
    specialty: '木工匠人',
    description: '世代传承的指物师，擅长制作精美的传统家具',
    backgroundColor: 'orange' as const
  },
  {
    id: 'kimura-sensei',
    name: '木村 美智子',
    specialty: '和纸艺人',
    description: '师承人间国宝，坚持手工制作最高品质的和纸',
    backgroundColor: 'blue' as const
  },
  {
    id: 'nakamura-sensei',
    name: '中村 正树',
    specialty: '刀剑锻造师',
    description: '无鉴查刀匠，作品被多家博物馆收藏',
    backgroundColor: 'green' as const
  },
  {
    id: 'suzuki-sensei',
    name: '铃木 花子',
    specialty: '漆器职人',
    description: '蒔絵技法的当代传承者，作品融合传统与现代美学',
    backgroundColor: 'orange' as const
  }
]

export default function MastersPage() {
  return (
    <PageTransition>
      <div className="min-h-screen p-4 md:p-8">
        <CardMosaicContainer className="max-w-7xl mx-auto">
          
          {/* 页面标题 */}
          <Card backgroundColor="offwhite" className="mb-8 text-center">
            <h1 className="font-brand-title mb-4">
              匠人大师
            </h1>
            <p className="font-card-subtitle text-gray-700">
              遇见日本顶级传统工艺大师，感受匠人精神的传承力量
            </p>
          </Card>

          {/* CSS Grid 布局 - 响应式网格 */}
          <div className="grid gap-6" style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
          }}>
            {masters.map((master) => (
              <Card
                key={master.id}
                backgroundColor={master.backgroundColor}
                href={`/masters/${master.id}`}
                className="p-6"
              >
                <h2 className="font-card-headline mb-2">
                  {master.name}
                </h2>
                <h3 className="font-card-subtitle font-semibold mb-4 text-slate-600">
                  {master.specialty}
                </h3>
                <p className="font-card-subtitle text-slate-700 leading-relaxed">
                  {master.description}
                </p>
              </Card>
            ))}
          </div>

          {/* 底部行动号召 */}
          <Card backgroundColor="blue" className="mt-12 text-center">
            <h2 className="font-card-headline mb-4">
              想要与大师面对面交流？
            </h2>
            <p className="font-card-subtitle text-slate-700 mb-6">
              加入 Tatami Labs，获得独家的匠人体验机会
            </p>
            <button 
              onClick={() => window.location.href = '/auth'}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              立即注册
            </button>
          </Card>

        </CardMosaicContainer>
      </div>
    </PageTransition>
  )
}