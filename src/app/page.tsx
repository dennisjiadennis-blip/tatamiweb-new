'use client'

import { Card } from '@/components/ui/card'
import { CardMosaicContainer } from '@/components/ui/page-transition'

export default function HomePage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <CardMosaicContainer className="max-w-7xl mx-auto">
        {/* 非对称杂志拼贴布局 - 严格按照技术文档实现 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto">
          
          {/* 品牌主标题卡片 - 占据显著位置 */}
          <Card 
            backgroundColor="offwhite" 
            className="md:col-span-8 md:row-span-2 flex items-center justify-center p-12"
          >
            <h1 className="font-brand-title text-center">
              TATAMI LABS
            </h1>
          </Card>

          {/* 产品介绍卡片 */}
          <Card 
            backgroundColor="blue" 
            href="/product-intro"
            className="md:col-span-4 p-6"
          >
            <h2 className="font-card-headline mb-4">
              匠心体验
            </h2>
            <p className="font-card-subtitle text-slate-700">
              深入日本传统工艺的精神世界
            </p>
          </Card>

          {/* 匠人列表卡片 */}
          <Card 
            backgroundColor="orange" 
            href="/masters"
            className="md:col-span-4 p-6"
          >
            <h2 className="font-card-headline mb-4">
              大师风采
            </h2>
            <p className="font-card-subtitle text-slate-100">
              遇见日本顶级传统工艺大师
            </p>
          </Card>

          {/* 哲学理念卡片 */}
          <Card 
            backgroundColor="green" 
            href="/philosophy"
            className="md:col-span-6 p-6"
          >
            <h2 className="font-card-headline mb-4">
              匠人精神
            </h2>
            <p className="font-card-subtitle text-slate-100">
              探索日本匠人数十年如一日的专注与坚持
            </p>
          </Card>

          {/* 会员认证卡片 */}
          <Card 
            backgroundColor="blue" 
            href="/auth"
            className="md:col-span-3 p-6 text-center"
          >
            <h2 className="font-card-headline mb-4">
              开启旅程
            </h2>
            <p className="font-card-subtitle text-slate-700">
              加入我们的文化探索之旅
            </p>
          </Card>

          {/* Logo/品牌标识卡片 */}
          <Card 
            backgroundColor="offwhite" 
            className="md:col-span-3 p-6 text-center"
          >
            <div className="font-card-subtitle font-semibold tracking-wider">
              匠 · 心 · 传 · 承
            </div>
          </Card>

        </div>
      </CardMosaicContainer>
    </div>
  );
}