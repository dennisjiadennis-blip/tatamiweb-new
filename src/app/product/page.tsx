import Link from 'next/link'

// Simple SVG Icons
const ArrowLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

const Sparkles = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
  </svg>
)

const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-3 text-linen hover:text-burnt-orange transition-colors duration-300 group"
            title="Return to homepage"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="heading-block text-base">Back to Home</span>
          </Link>
          
          <div>
            <h1 className="heading-block text-2xl text-linen">Our Story</h1>
            <p className="text-description text-sm text-linen/80 mt-1">
              Weaving tradition with innovation
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-block-large text-linen mb-8">
              A Story Woven with a Master
            </h2>
            
            {/* Decorative Element */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-16 h-px bg-burnt-orange"></div>
              <Heart className="w-6 h-6 text-burnt-orange" />
              <div className="w-16 h-px bg-burnt-orange"></div>
            </div>
            
            <p className="text-description text-linen/90 text-xl leading-relaxed">
              Where ancient wisdom meets modern vision, Tatami Labs bridges the profound gap between 
              master craftsmen and those who seek deeper understanding of traditional Japanese artistry.
            </p>
          </div>
        </section>

        {/* Story Blocks Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Our Vision */}
            <div className="tatami-block bg-linen p-8 flex-col text-left h-auto">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-burnt-orange" />
                <h3 className="heading-block text-xl text-charcoal">Our Vision</h3>
              </div>
              <p className="text-description text-charcoal/90 text-base leading-relaxed mb-4">
                In a world where mass production dominates, we believe that the intimate dialogue between master and apprentice 
                holds the key to preserving humanity's most precious creative traditions.
              </p>
              <p className="text-description text-charcoal/80 text-sm leading-relaxed">
                Tatami Labs creates bridges—not just between cultures, but between the wisdom of generations and the curiosity of today.
              </p>
            </div>

            {/* The Experience */}
            <div className="tatami-block bg-powder-blue/20 p-8 flex-col text-left h-auto">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-burnt-orange" />
                <h3 className="heading-block text-xl text-charcoal">The Experience</h3>
              </div>
              <p className="text-description text-charcoal/90 text-base leading-relaxed mb-4">
                Through immersive video stories, detailed master profiles, and curated journey experiences, 
                we offer unprecedented access to Japan's most revered artisans and their time-honored practices.
              </p>
              <p className="text-description text-charcoal/80 text-sm leading-relaxed">
                Each interaction is designed to transform mere observation into profound understanding and personal growth.
              </p>
            </div>

            {/* Our Mission */}
            <div className="tatami-block bg-moss-green/20 p-8 flex-col text-left h-auto">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-burnt-orange" />
                <h3 className="heading-block text-xl text-charcoal">Our Mission</h3>
              </div>
              <p className="text-description text-charcoal/90 text-base leading-relaxed mb-4">
                To ensure that the philosophical depth and technical mastery of traditional Japanese crafts 
                continue to inspire and educate future generations around the world.
              </p>
              <p className="text-description text-charcoal/80 text-sm leading-relaxed">
                We are custodians of stories, guardians of wisdom, and facilitators of meaningful cultural exchange.
              </p>
            </div>

            {/* The Platform */}
            <div className="tatami-block bg-burnt-orange/10 p-8 flex-col text-left h-auto">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-burnt-orange" />
                <h3 className="heading-block text-xl text-charcoal">The Platform</h3>
              </div>
              <p className="text-description text-charcoal/90 text-base leading-relaxed mb-4">
                Tatami Labs represents more than a digital platform—it's a living archive of human creativity, 
                a meeting place for seekers of authentic artistic expression, and a gateway to transformative experiences.
              </p>
              <p className="text-description text-charcoal/80 text-sm leading-relaxed">
                Here, tradition and innovation weave together to create something entirely new yet deeply rooted.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Quote Section */}
        <section className="mb-16">
          <div className="tatami-block bg-linen p-12 text-center">
            <blockquote className="text-description text-charcoal/90 text-2xl leading-relaxed italic mb-6 max-w-4xl mx-auto">
              "In the hands of a master, every tool becomes an extension of the soul. In the presence of a master, 
              every student discovers their own capacity for greatness."
            </blockquote>
            <p className="text-description text-charcoal/70 text-base">
              — Tatami Labs Philosophy
            </p>
          </div>
        </section>

        {/* Values Grid */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="heading-block-large text-linen mb-4">
              Our Values
            </h2>
            <p className="text-description text-linen/70 text-base">
              The principles that guide our mission and shape every interaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="tatami-block bg-powder-blue py-6 px-6 text-center">
              <h4 className="heading-block text-lg text-charcoal mb-3">Authenticity</h4>
              <p className="text-description text-charcoal/80 text-sm">
                Every story, every master, every technique presented with genuine respect and cultural accuracy.
              </p>
            </div>
            
            <div className="tatami-block bg-moss-green py-6 px-6 text-center">
              <h4 className="heading-block text-lg text-linen mb-3">Reverence</h4>
              <p className="text-description text-linen/90 text-sm">
                Honoring the masters, their traditions, and the profound wisdom embedded in their craft.
              </p>
            </div>
            
            <div className="tatami-block bg-burnt-orange py-6 px-6 text-center">
              <h4 className="heading-block text-lg text-linen mb-3">Connection</h4>
              <p className="text-description text-linen/90 text-sm">
                Building meaningful bridges between cultures, generations, and creative spirits.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-block-large text-linen mb-6">
              Begin Your Journey
            </h2>
            <p className="text-description text-linen/80 text-base leading-relaxed mb-8">
              Discover the masters who shape our world, watch their stories unfold, 
              and find your own path through the profound landscape of traditional Japanese craftsmanship.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link 
                href="/masters"
                className="tatami-block bg-moss-green px-8 py-4 hover:bg-moss-green/90 transition-colors duration-300 inline-flex items-center gap-3"
                title="Meet the masters"
              >
                <span className="heading-block text-base text-linen">Meet the Masters</span>
                <ArrowLeft className="w-4 h-4 text-linen rotate-180" />
              </Link>
              
              <Link 
                href="/stories"
                className="tatami-block bg-powder-blue px-8 py-4 hover:bg-powder-blue/90 transition-colors duration-300 inline-flex items-center gap-3"
                title="Watch their stories"
              >
                <span className="heading-block text-base text-charcoal">Watch Their Stories</span>
                <ArrowLeft className="w-4 h-4 text-charcoal rotate-180" />
              </Link>
              
              <Link 
                href="/journey"
                className="tatami-block bg-burnt-orange px-8 py-4 hover:bg-burnt-orange/90 transition-colors duration-300 inline-flex items-center gap-3"
                title="Join a journey"
              >
                <span className="heading-block text-base text-linen">Join a Journey</span>
                <ArrowLeft className="w-4 h-4 text-linen rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export const metadata = {
  title: 'Our Story - Tatami Labs',
  description: 'Discover the story behind Tatami Labs - where ancient wisdom meets modern vision. Learn about our mission to bridge master craftsmen with those seeking deeper understanding of traditional Japanese artistry.',
}