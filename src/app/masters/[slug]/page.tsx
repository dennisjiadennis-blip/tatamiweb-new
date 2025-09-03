'use client'

import { Card } from '@/components/ui/card'
import { PageTransition } from '@/components/ui/page-transition'

// 模拟根据slug获取匠人数据的函数
const getMasterData = (slug: string) => {
  const masters: { [key: string]: any } = {
    'yamamoto-sensei': {
      name: '山本 雅夫',
      specialty: '陶艺大师',
      experience: '四十年',
      description: '备前烧陶艺的当代传承者，作品曾获日本文化厅长官奖',
      story: [
        '山本老师出生于备前烧的故乡冈山县，从十八岁开始跟随祖父学习陶艺。四十多年来，他始终坚持手工拉坯，拒绝使用任何现代机械辅助工具。',
        '他的作品以朴素见长，每一件都承载着土与火的对话。山本老师常说："陶艺不是我在塑造土，而是土在教导我如何成为更好的人。"',
        '近年来，山本老师开始将传统技法与现代美学相结合，创作出既保持传统精神又符合当代审美的作品。他的茶碗作品尤其受到茶道界的推崇。'
      ],
      philosophy: '真正的陶艺不在于技巧的炫耀，而在于内心的平静。只有心境如水，才能感受到泥土的呼吸，火焰的脾气。'
    }
  }
  
  return masters[slug] || null
}

interface MasterDetailPageProps {
  params: Promise<{ slug: string }>
}

export default async function MasterDetailPage({ params }: MasterDetailPageProps) {
  const { slug } = await params
  const master = getMasterData(slug)

  if (!master) {
    return (
      <PageTransition>
        <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
          <Card backgroundColor="offwhite" className="text-center">
            <h1 className="font-card-headline mb-4">匠人未找到</h1>
            <button 
              onClick={() => window.location.href = '/masters'}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
            >
              返回大师列表
            </button>
          </Card>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* 长卷轴叙事布局 */}
          <div className="prose prose-lg max-w-none" style={{ maxWidth: '80ch' }}>
            
            {/* 返回链接 */}
            <div className="mb-6">
              <button 
                onClick={() => window.location.href = '/masters'}
                className="font-card-subtitle text-gray-600 hover:text-orange-600 transition-colors"
              >
                ← 返回大师列表
              </button>
            </div>

            {/* 匠人介绍 */}
            <Card backgroundColor="offwhite" className="mb-8">
              <h1 className="font-card-headline mb-4">
                {master.name}
              </h1>
              <h2 className="font-card-subtitle text-2xl font-semibold text-gray-600 mb-2">
                {master.specialty}
              </h2>
              <p className="font-card-subtitle text-gray-700">
                从业经验：{master.experience} | {master.description}
              </p>
            </Card>

            {/* 匠人故事 */}
            <Card backgroundColor="blue" className="mb-8">
              <h2 className="font-card-headline mb-6">
                匠人之路
              </h2>
              <div className="space-y-4">
                {master.story.map((paragraph: string, index: number) => (
                  <p key={index} className="font-card-subtitle leading-relaxed text-slate-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>

            {/* 匠人哲学 */}
            <Card backgroundColor="green" className="mb-8">
              <h2 className="font-card-headline mb-4">
                匠人哲学
              </h2>
              <blockquote className="font-card-subtitle leading-relaxed text-slate-100 italic text-lg border-l-4 border-white/30 pl-6">
                "{master.philosophy}"
              </blockquote>
              <p className="font-card-subtitle text-slate-100 mt-4 text-right">
                —— {master.name}
              </p>
            </Card>

            {/* 体验作品 */}
            <Card backgroundColor="orange" className="mb-8">
              <h2 className="font-card-headline mb-4">
                代表作品
              </h2>
              <p className="font-card-subtitle leading-relaxed text-slate-100">
                山本老师的代表作品包括获得文化厅长官奖的「静寂」系列茶碗，以及近年来备受关注的「现代备前」花器系列。每一件作品都体现了他对传统与现代完美融合的深刻理解。
              </p>
              <p className="font-card-subtitle leading-relaxed text-slate-100 mt-4">
                通过 Tatami Labs，您将有机会亲眼见证这些珍贵作品的创作过程，并与山本老师面对面交流创作心得。
              </p>
            </Card>

            {/* 行动号召 */}
            <Card backgroundColor="blue" className="text-center">
              <h2 className="font-card-headline mb-6">
                想要与 {master.name} 面对面交流吗？
              </h2>
              <p className="font-card-subtitle text-slate-700 mb-6">
                加入 Tatami Labs，获得与大师深度对话的珍贵机会
              </p>
              <button 
                onClick={() => window.location.href = '/auth'}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                预约体验
              </button>
            </Card>

          </div>
        </div>
      </div>
    </PageTransition>
  )
}