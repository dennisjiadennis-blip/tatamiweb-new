'use client'

import { Card } from '@/components/ui/card'
import { PageTransition } from '@/components/ui/page-transition'

export default function ProductIntroPage() {
  return (
    <PageTransition>
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* 长卷轴叙事布局 - 单列居中，最大宽度80ch */}
          <div className="prose prose-lg max-w-none" style={{ maxWidth: '80ch' }}>
            
            <Card backgroundColor="offwhite" className="mb-8">
              <h1 className="font-card-headline mb-6">
                Tatami Labs：重新定义文化体验
              </h1>
              <p className="font-card-subtitle leading-relaxed text-gray-700">
                在快节奏的现代生活中，我们很少有机会真正静下心来，去感受那些传承千年的匠人技艺。Tatami Labs 致力于打破这种隔阂，为您提供一个深度接触日本传统工艺大师的独特平台。
              </p>
            </Card>

            <Card backgroundColor="blue" className="mb-8">
              <h2 className="font-card-headline mb-4">
                不只是观看，更是体验
              </h2>
              <p className="font-card-subtitle leading-relaxed text-slate-700">
                传统的文化展示往往停留在表面的观赏层面。我们相信，真正的文化理解来自于深度的互动和体验。通过 Tatami Labs，您将有机会：
              </p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>• 与大师进行一对一的深度对话</li>
                <li>• 亲手体验传统工艺的制作过程</li>
                <li>• 了解每一件作品背后的文化内涵</li>
                <li>• 感受匠人精神的精神力量</li>
              </ul>
            </Card>

            <Card backgroundColor="green" className="mb-8">
              <h2 className="font-card-headline mb-4">
                匠人精神的现代诠释
              </h2>
              <p className="font-card-subtitle leading-relaxed text-slate-100">
                什么是匠人精神？它不仅仅是技艺的精湛，更是对完美的不懈追求，对传统的敬畏与传承。我们的大师们，有的专注陶艺数十年，有的世代传承着木工技艺，有的在茶道中寻找内心的宁静。
              </p>
              <p className="font-card-subtitle leading-relaxed text-slate-100 mt-4">
                他们的故事，就是日本文化最真实的写照。
              </p>
            </Card>

            <Card backgroundColor="orange" className="mb-8">
              <h2 className="font-card-headline mb-4">
                为什么选择 Tatami Labs？
              </h2>
              <div className="font-card-subtitle leading-relaxed text-slate-100 space-y-4">
                <div>
                  <strong>1. 独家合作关系</strong><br />
                  我们与日本最受尊敬的匠人大师建立了独家合作关系，为您提供其他平台无法提供的珍贵体验。
                </div>
                <div>
                  <strong>2. 个性化定制</strong><br />
                  每一次体验都根据您的兴趣和需求量身定制，确保您获得最有意义的文化交流。
                </div>
                <div>
                  <strong>3. 文化桥梁</strong><br />
                  我们不仅提供体验，更致力于成为东西方文化交流的桥梁，促进文化理解与传承。
                </div>
              </div>
            </Card>

            {/* 行动号召 */}
            <Card backgroundColor="blue" className="text-center">
              <h2 className="font-card-headline mb-6">
                准备好开始您的文化探索之旅了吗？
              </h2>
              <button 
                onClick={() => window.location.href = '/auth'}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                立即加入 Tatami Labs
              </button>
            </Card>

          </div>
        </div>
      </div>
    </PageTransition>
  )
}