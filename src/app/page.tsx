import Link from 'next/link'
import {
  TatamiLogo,
  GetaSandal,
  Sneakers,
  SleepingFox,
} from '@/components/ui/illustrations'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Mobile-First Brand Title */}
      <header className="px-4 py-6 md:px-6 lg:absolute lg:top-[5vh] lg:left-[5vw] lg:z-50">
        <h1 className="heading-brand text-center lg:text-left">
          Tatami Labs
        </h1>
      </header>

      {/* Responsive Grid Container - Mobile-First Approach */}
      <section 
        className="px-4 py-8 md:px-6 lg:absolute lg:top-[15vh] lg:left-[5vw] lg:w-[90vw] lg:h-[80vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 lg:grid-rows-8 gap-4 lg:gap-5"
        aria-label="Tatami Labs Navigation Grid"
      >
        
        {/* 1. "A Story Woven with a Master" - Powder Blue - Product Story Entry */}
        <Link 
          href="/product" 
          className="tatami-block bg-powder-blue sm:col-span-2 md:col-span-1 lg:col-span-4 lg:row-span-2 rounded-tatami-lg hover:scale-[1.02] transition-transform duration-tatami"
          title="Learn about our product story"
        >
          <div className="heading-block text-lg px-8">
            A Story Woven with a Master
          </div>
        </Link>

        {/* 2. "Stories" - Off-White - Video Content Navigation */}
        <Link 
          href="/stories" 
          className="tatami-block bg-linen sm:col-span-2 md:col-span-2 lg:col-start-6 lg:col-end-9 lg:row-span-1 hover:scale-[1.02] transition-transform duration-tatami"
          title="Explore video stories"
        >
          <div className="heading-block text-2xl">
            Stories
          </div>
        </Link>

        {/* 3. "The Masters Who Shape Your World" - Powder Blue - Craftsmen Directory */}
        <Link 
          href="/masters" 
          className="tatami-block bg-powder-blue sm:col-span-2 md:col-span-2 lg:col-start-9 lg:col-end-13 lg:row-start-2 lg:row-end-4 rounded-tatami-lg hover:scale-[1.02] transition-transform duration-tatami"
          title="Meet the master craftsmen"
        >
          <div className="heading-block text-lg px-8">
            The Masters Who Shape Your World
          </div>
        </Link>

        {/* 4. "My Tatami" + Sneakers - Muted Moss Green - Personal Center */}
        <Link 
          href="/auth" 
          className="tatami-block bg-moss-green md:col-span-1 lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-6 flex-col hover:scale-[1.02] transition-transform duration-tatami"
          title="Access your personal space"
        >
          <div className="heading-block text-xl text-linen mb-6">
            My Tatami
          </div>
          <Sneakers className="w-16 h-16 text-linen" />
        </Link>

        {/* 5. "One Journey, a Lifetime of Insight" - Burnt Orange - Core Value Proposition */}
        <div className="tatami-block-large bg-burnt-orange sm:col-span-2 md:col-span-3 lg:col-start-3 lg:col-end-9 lg:row-start-4 lg:row-end-6 flex-col hover:scale-[1.02] transition-transform duration-tatami cursor-pointer">
          <div className="heading-block-large mb-4">
            One Journey, a Lifetime of Insight
          </div>
          <div className="text-description max-w-md">
            Connect with master craftsmen through immersive dialogues.<br/>
            Discover wisdom in every conversation, insight in every journey.
          </div>
        </div>

        {/* 6. Geta Sandal - Burnt Orange - Traditional Culture Symbol */}
        <div 
          className="tatami-block bg-burnt-orange col-start-10 col-end-12 row-start-4 row-end-6 hover:scale-[1.02] transition-transform duration-tatami cursor-pointer"
          title="Traditional Japanese Craftsmanship"
          aria-label="Decorative Geta sandal representing traditional culture"
        >
          <GetaSandal className="w-16 h-16 text-charcoal" />
        </div>

        {/* 7. Sleeping Fox - Muted Moss Green - Zen Wisdom Symbol */}
        <div 
          className="tatami-block bg-moss-green col-start-10 col-end-12 row-start-6 row-end-8 hover:scale-[1.02] transition-transform duration-tatami cursor-pointer"
          title="Peaceful Contemplation"
          aria-label="Decorative sleeping fox representing tranquility and wisdom"
        >
          <SleepingFox className="w-14 h-14 text-linen" />
        </div>

        {/* 8. "Join a Journey" - Burnt Orange - Travel Partnership CTA */}
        <Link 
          href="/journey" 
          className="tatami-block bg-burnt-orange col-start-3 col-end-7 row-start-7 row-end-8 hover:scale-[1.02] transition-transform duration-tatami"
          title="Join our travel experiences"
        >
          <div className="heading-block text-xl">
            Join a Journey
          </div>
        </Link>

        {/* 9. Tatami Logo - Off-White - Brand Identity Display */}
        <div 
          className="tatami-block bg-linen col-start-6 col-end-10 row-start-6 row-end-8 hover:scale-[1.02] transition-transform duration-tatami cursor-pointer"
          title="Tatami Labs Brand"
          aria-label="Tatami Labs logo and brand identity"
        >
          <TatamiLogo className="h-16 w-auto text-charcoal" />
        </div>

      </section>
    </main>
  )
}