import Link from 'next/link'
import {
  TatamiLogo,
  GetaSandal,
  Sneakers,
  SleepingFox,
} from '@/components/ui/illustrations'

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #4A5B6C 0%, #6B7B8C 30%, #5A6B7C 100%)'
    }}>
      {/* Brand Logo - Top Left */}
      <div className="absolute top-8 left-8 z-50">
        <h1 className="text-4xl font-bold text-white italic tracking-wide">
          Tatami<br/>
          <span className="text-3xl">LABS</span>
        </h1>
      </div>

      {/* Floating Cards Container */}
      <section 
        className="absolute inset-0 p-8 flex items-center justify-center floating-cards-container"
        aria-label="Tatami Labs Navigation Cards"
      >
        {/* Floating Cards Layout */}
        <div className="floating-cards-wrapper relative w-full max-w-5xl">
          
          {/* Card 1: A Story Woven with a Master - Top Left */}
          <Link 
            href="/product" 
            className="floating-card floating-card-large absolute top-0 left-0 w-80 h-48 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col justify-center"
            style={{ transform: 'rotate(-2deg)', zIndex: 10 }}
            title="Learn about our product story"
          >
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-2">
              A Story Woven with a Master
            </h3>
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              TRADITION
            </div>
          </Link>

          {/* Card 2: Stories - Top Center */}
          <Link 
            href="/stories" 
            className="floating-card floating-card-small absolute top-16 left-80 w-64 h-36 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 flex items-center justify-center"
            style={{ zIndex: 8 }}
            title="Explore video stories"
          >
            <div className="text-center">
              <h3 className="text-3xl font-serif font-bold text-gray-800">
                Stories
              </h3>
              <div className="text-xs text-gray-400 uppercase tracking-wide mt-2">
                OH WHITE LINED
              </div>
            </div>
          </Link>

          {/* Card 3: The Masters - Top Right */}
          <Link 
            href="/masters" 
            className="floating-card floating-card-large absolute -top-4 right-0 w-72 h-52 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col justify-center"
            style={{ transform: 'rotate(1deg)', zIndex: 12 }}
            title="Meet the master craftsmen"
          >
            <h3 className="text-xl font-serif font-semibold text-gray-800 leading-tight">
              The Masters...<br/>
              Who Shape<br/>
              Your World
            </h3>
          </Link>

          {/* Card 4: My Tatami - Left Middle with Icon */}
          <Link 
            href="/auth" 
            className="floating-card floating-card-large absolute top-32 -left-8 w-56 h-56 bg-green-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col items-center justify-center text-white"
            style={{ transform: 'rotate(-3deg)', zIndex: 15 }}
            title="Access your personal space"
          >
            <h3 className="text-xl font-serif font-bold mb-4">
              My<br/>Tatami
            </h3>
            <div className="text-xs uppercase tracking-wide mb-4">
              MUTED MOSS
            </div>
            <Sneakers className="w-16 h-16 text-white" />
          </Link>

          {/* Card 5: One Journey - Center Large */}
          <div 
            className="floating-card floating-card-large absolute top-32 left-60 w-80 h-40 bg-orange-500 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col justify-center text-white cursor-pointer"
            style={{ zIndex: 20 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-3 leading-tight">
              One Journey,<br/>
              A Lifetime of Insight
            </h3>
            <p className="text-sm opacity-90">
              Connect with master craftsmen through immersive dialogues.
            </p>
          </div>

          {/* Card 6: Geta Sandal - Right Middle */}
          <div 
            className="floating-card floating-card-small absolute top-44 right-24 w-20 h-20 bg-orange-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
            style={{ transform: 'rotate(8deg)', zIndex: 18 }}
            title="Traditional Japanese Craftsmanship"
          >
            <GetaSandal className="w-12 h-12 text-white" />
          </div>

          {/* Card 7: Join a Journey - Bottom Center */}
          <Link 
            href="/journey" 
            className="floating-card floating-card-small absolute top-80 left-72 w-60 h-28 bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 flex items-center justify-center"
            style={{ zIndex: 14 }}
            title="Join our travel experiences"
          >
            <h3 className="text-xl font-serif font-semibold text-gray-800">
              Join a Journey
            </h3>
          </Link>

          {/* Card 8: Sleeping Fox - Bottom Right */}
          <div 
            className="floating-card floating-card-small absolute top-68 right-12 w-18 h-18 bg-green-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
            style={{ transform: 'rotate(-5deg)', zIndex: 16 }}
            title="Peaceful Contemplation"
          >
            <SleepingFox className="w-10 h-10 text-white" />
          </div>

          {/* Card 9: Tatami Labs Logo - Bottom Right Corner */}
          <div 
            className="floating-card floating-card-small absolute bottom-0 right-0 w-32 h-24 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
            style={{ transform: 'rotate(2deg)', zIndex: 22 }}
            title="Tatami Labs Brand"
          >
            <div className="text-center">
              <div className="w-8 h-4 bg-orange-500 rounded mb-1"></div>
              <div className="w-8 h-4 bg-orange-500 rounded"></div>
              <div className="text-xs font-bold text-gray-800 mt-1">TATAMI LABS</div>
            </div>
          </div>

        </div>

      </section>
    </main>
  )
}