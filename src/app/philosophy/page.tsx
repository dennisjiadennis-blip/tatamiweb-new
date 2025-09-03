'use client'

import { Card } from '@/components/ui/card'
import { PageTransition } from '@/components/ui/page-transition'

export default function PhilosophyPage() {
  return (
    <PageTransition>
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* 长卷轴叙事布局 */}
          <div className="prose prose-lg max-w-none" style={{ maxWidth: '80ch' }}>
            
            <Card backgroundColor="offwhite" className="mb-8">
              <h1 className="font-card-headline mb-6">
                匠人精神：时间与专注的艺术
              </h1>
              <p className="font-card-subtitle leading-relaxed text-gray-700">
                在日本，有一个词叫做「職人気質」(shokunin kishitsu)，意指匠人的品格与精神。这不仅仅是对技艺的追求，更是一种生活哲学，一种对完美永不止息的渴望。
              </p>
            </Card>

            <Card backgroundColor="green" className="mb-8">
              <h2 className="font-card-headline mb-4">
                一生一事，专注如山
              </h2>
              <p className="font-card-subtitle leading-relaxed text-slate-100">
                真正的匠人，往往一生只专注于一件事。他们不追求多元化，不追求快速成功，而是在日复一日的重复中，寻找细微的改进，追求极致的完美。这种专注，如山般稳固，如水般深远。
              </p>
              <p className="font-card-subtitle leading-relaxed text-slate-100 mt-4">
                在我们的平台上，您将遇到这样的匠人：陶艺师傅四十年如一日地拉坯塑形，茶道宗师在每一次点茶中体悟人生哲理，木工大师用双手触摸木材的纹理，聆听它的故事。
              </p>
            </Card>

            <Card backgroundColor="blue" className="mb-8">
              <h2 className="font-card-headline mb-4">
                传承与创新的平衡
              </h2>
              <p className="font-card-subtitle leading-relaxed text-slate-700">
                匠人精神并非固步自封。真正的大师懂得在传承中创新，在坚守中求变。他们尊重传统的智慧，同时也敢于注入时代的新意。
              </p>
              <p className="font-card-subtitle leading-relaxed text-slate-700 mt-4">
                这种平衡，正是日本文化的精髓所在。既有对过去的敬畏，也有对未来的期许。既有不变的核心原则，也有因时而变的表现形式。
              </p>
            </Card>

            <Card backgroundColor="orange" className="mb-8">
              <h2 className="font-card-headline mb-4">
                为什么匠人精神值得学习？
              </h2>
              <div className="font-card-subtitle leading-relaxed text-slate-100 space-y-4">
                <p>
                  <strong>深度思考的力量：</strong>在快节奏的现代社会，匠人精神提醒我们放慢脚步，深度思考每一个细节的价值。
                </p>
                <p>
                  <strong>质量胜过数量：</strong>匠人告诉我们，与其追求表面的丰富，不如专注于内在的深度和质量。
                </p>
                <p>
                  <strong>过程即目的：</strong>匠人精神教导我们享受过程的美好，而不仅仅关注结果。每一次的练习、每一次的改进，本身就是意义所在。
                </p>
                <p>
                  <strong>内在的满足：</strong>真正的满足感不来自外界的认可，而来自内心对完美的追求和对工艺的热爱。
                </p>
              </div>
            </Card>

            <Card backgroundColor="green" className="mb-8">
              <h2 className="font-card-headline mb-4">
                Tatami Labs 的使命
              </h2>
              <p className="font-card-subtitle leading-relaxed text-slate-100">
                我们相信，匠人精神不应该只存在于历史的记忆中，它应该成为现代人生活的指导原则。通过与日本匠人大师的深度交流，我们希望每一位参与者都能从中汲取智慧，找到属于自己的「匠人之道」。
              </p>
              <p className="font-card-subtitle leading-relaxed text-slate-100 mt-4">
                无论您从事什么工作，无论您面临什么挑战，匠人精神都能为您提供宝贵的指导：专注、坚持、追求完美，在平凡中创造非凡。
              </p>
            </Card>

            {/* 行动号召 */}
            <Card backgroundColor="blue" className="text-center">
              <h2 className="font-card-headline mb-6">
                准备好体验匠人精神的力量了吗？
              </h2>
              <div className="space-y-4">
                <button 
                  onClick={() => window.location.href = '/masters'}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 mr-4"
                >
                  探索大师
                </button>
                <button 
                  onClick={() => window.location.href = '/auth'}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  加入我们
                </button>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </PageTransition>
  )
}