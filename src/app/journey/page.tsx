import Link from 'next/link'
import Image from 'next/image'
import { journeyData } from '@/data/websiteData'

// Simple SVG Icons
const ArrowLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ExternalLink = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
)

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)


interface JourneyCardProps {
  experience: any
  className?: string
}

const JourneyCard = ({ experience, className = "" }: JourneyCardProps) => (
  <div className={`tatami-block bg-linen group hover:shadow-deep transition-all duration-tatami flex-col text-left ${className}`}>
    {/* Experience Image */}
    <div className="relative w-full h-48 bg-charcoal/10 rounded-t-tatami overflow-hidden">
      <Image
        src={experience.image}
        alt={experience.titleEn}
        fill
        className="object-cover"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-powder-blue/20 to-moss-green/20" />
      
      {/* Featured Badge */}
      {experience.featured && (
        <div className="absolute top-3 left-3 bg-burnt-orange text-linen text-xs px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3" />
          Featured
        </div>
      )}
      
      {/* Rating Badge */}
      <div className="absolute top-3 right-3 bg-charcoal/80 text-linen text-xs px-2 py-1 rounded flex items-center gap-1">
        <Star className="w-3 h-3 text-burnt-orange" />
        {experience.rating}
      </div>
    </div>
    
    {/* Content */}
    <div className="p-5 flex-1 flex flex-col">
      <h3 className="heading-block text-lg mb-2 text-charcoal group-hover:text-burnt-orange transition-colors duration-300">
        {experience.titleEn}
      </h3>
      
      <div className="text-burnt-orange font-primary font-medium text-sm mb-3">
        {experience.category}
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-charcoal/70 text-xs">
          <Calendar className="w-3 h-3" />
          {experience.duration} • {experience.location}
        </div>
        <div className="flex items-center gap-2 text-charcoal/70 text-xs">
          <Users className="w-3 h-3" />
          {experience.groupSize}
        </div>
      </div>
      
      <p className="text-description text-charcoal/80 text-sm leading-comfortable mb-4 flex-1">
        {experience.description}
      </p>
      
      {/* Japanese Title */}
      <div className="mb-4">
        <h4 className="text-xs text-charcoal/60 font-primary font-medium mb-1">日本語:</h4>
        <p className="text-sm text-charcoal/80 font-medium">{experience.titleJa}</p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm font-primary font-medium text-charcoal">
          {experience.price}
        </div>
        
        <a
          href={experience.partnerUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="tatami-block bg-burnt-orange text-linen px-4 py-2 text-sm hover:bg-burnt-orange/90 transition-colors duration-300 inline-flex items-center gap-2"
          title="Book Experience"
        >
          <span>Book Experience</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  </div>
)

export default function JourneyPage() {
  const featuredExperiences = journeyData.filter(exp => exp.featured)
  const otherExperiences = journeyData.filter(exp => !exp.featured)

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
            <h1 className="heading-block text-2xl text-linen">Join the Journey</h1>
            <p className="text-description text-sm text-linen/80 mt-1">
              Discover a deeper path through master craftsmanship
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-block-large text-linen mb-6">
              Beyond Observation: Live the Craft
            </h2>
            <p className="text-description text-linen/90 text-lg leading-relaxed mb-8">
              Experience the profound connection between master and apprentice through carefully curated journeys. 
              Our partner travel specialists offer intimate access to Japan's most revered craftsmen, 
              where ancient wisdom meets personal transformation.
            </p>
            <div className="tatami-block bg-moss-green/20 py-6 px-8 inline-block">
              <p className="text-description text-linen text-base">
                "True learning happens not through watching, but through doing. Each journey is a dialogue between tradition and your own creative spirit." 
              </p>
              <p className="text-sm text-linen/70 mt-2">— Tatami Labs Philosophy</p>
            </div>
          </div>
        </section>

        {/* Featured Experiences */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="heading-block-large text-linen mb-3">
              Featured Experiences
            </h2>
            <p className="text-description text-linen/70 text-base">
              Our most immersive and transformative craft journeys
            </p>
          </div>
          
          {/* Featured Grid - Larger Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
            {featuredExperiences.map((experience) => (
              <JourneyCard 
                key={experience.id} 
                experience={experience} 
                className="h-auto min-h-[600px]"
              />
            ))}
          </div>
        </section>

        {/* All Experiences */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="heading-block-large text-linen mb-3">
              All Craft Journeys
            </h2>
            <p className="text-description text-linen/70 text-base">
              Explore the complete collection of master craftsman experiences
            </p>
          </div>
          
          {/* All Experiences Grid - Masonry Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {journeyData.map((experience) => (
              <JourneyCard 
                key={experience.id} 
                experience={experience} 
                className="h-auto"
              />
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-16">
          <div className="tatami-block bg-powder-blue/10 p-8 text-center">
            <h2 className="heading-block-large text-linen mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-description text-linen/80 text-base leading-relaxed mb-6 max-w-3xl mx-auto">
              We collaborate with Japan's most respected cultural tour operators, ensuring authentic access to master craftsmen 
              and their traditional workshops. Each partner shares our commitment to preserving cultural heritage through meaningful experiences.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-linen/70">
              <div>Kyoto Garden Tours</div>
              <div>Shigaraki Pottery</div>
              <div>Kyoto Tea Ceremony</div>
              <div>Arashiyama Experiences</div>
              <div>Kimono Workshop Tokyo</div>
              <div>Hakone Traditional Ryokan</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-block-large text-linen mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-description text-linen/80 text-base leading-relaxed mb-8">
              Each experience is independently operated by our trusted partners. 
              Click "Book Experience" on any journey to connect directly with the tour operator.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link 
                href="/masters"
                className="tatami-block bg-moss-green px-8 py-4 hover:bg-moss-green/90 transition-colors duration-300 inline-flex items-center gap-3"
                title="Meet the masters first"
              >
                <span className="heading-block text-base text-linen">Meet the Masters</span>
                <ArrowLeft className="w-4 h-4 text-linen rotate-180" />
              </Link>
              
              <Link 
                href="/stories"
                className="tatami-block bg-burnt-orange px-8 py-4 hover:bg-burnt-orange/90 transition-colors duration-300 inline-flex items-center gap-3"
                title="Watch their stories"
              >
                <span className="heading-block text-base text-linen">Watch Their Stories</span>
                <ArrowLeft className="w-4 h-4 text-linen rotate-180" />
              </Link>
            </div>
            
            <p className="text-description text-sm mt-6 text-linen/60">
              All bookings are processed through our partner organizations • Prices in USD
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export const metadata = {
  title: 'Join the Journey - Tatami Labs',
  description: 'Experience profound master-apprentice connections through curated craft journeys in Japan. Book intimate workshops with renowned artisans through our trusted travel partners.',
}