import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { mastersData, videoStoriesData } from '@/data/websiteData'

// Simple SVG Icons
const ArrowLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const Play = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <polygon points="5,3 19,12 5,21" />
  </svg>
)

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Award = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

// Create slug-based lookup from websiteData
const masterBySlug = mastersData.reduce((acc, master) => {
  acc[master.slug] = master
  return acc
}, {} as Record<string, any>)

// Create mock works for each master
const mockWorksData = {
  "hiroki-sato": [
    {
      id: 1,
      title: "Premium Junmai Daiginjo",
      year: "2023",
      technique: "Kimoto Method",
      image: "/photo/1b.png",
      description: "A premium sake showcasing traditional Kimoto brewing techniques"
    },
    {
      id: 2,
      title: "Seasonal Namazake",
      year: "2023",
      technique: "Unpasteurized Brewing",
      image: "/photo/1a.png",
      description: "Fresh, unpasteurized sake capturing the essence of each season"
    }
  ],
  "kenzo-tanaka": [
    {
      id: 1,
      title: "Fugetsu Iron Kettle",
      year: "2023",
      technique: "Traditional Hand Casting",
      image: "/photo/2b.png",
      description: "A masterpiece of Nambu ironware featuring wind and moon motifs"
    },
    {
      id: 2,
      title: "Cherry Blossom Teapot",
      year: "2022",
      technique: "Chiseled Ironwork",
      image: "/photo/2a.png",
      description: "Delicate cherry blossom patterns carved into durable iron"
    }
  ],
  "yuki-kimura": [
    {
      id: 1,
      title: "An of Light Pavilion",
      year: "2023",
      technique: "Sustainable Joinery",
      image: "/photo/3b.png",
      description: "A meditation pavilion integrating natural light and traditional construction"
    },
    {
      id: 2,
      title: "Cloud and Water Garden",
      year: "2022",
      technique: "Natural Integration",
      image: "/photo/3a.png",
      description: "A private garden design harmonizing architecture with nature"
    }
  ],
  "takeru-honda": [
    {
      id: 1,
      title: "Championship Victory Ceremony",
      year: "2023",
      technique: "Sumo Tournament",
      image: "/photo/4b.png",
      description: "Celebrating traditional victory rituals in professional sumo"
    },
    {
      id: 2,
      title: "Training at Dawn",
      year: "2023",
      technique: "Traditional Practice",
      image: "/photo/4a.png",
      description: "Daily morning training embodying the spirit of sumo discipline"
    }
  ],
  "chiyo": [
    {
      id: 1,
      title: "Gion District Performance",
      year: "2023",
      technique: "Traditional Geisha Arts",
      image: "/photo/5b.png",
      description: "An elegant performance showcasing classical Japanese dance"
    },
    {
      id: 2,
      title: "Tea Ceremony Demonstration",
      year: "2023",
      technique: "Traditional Tea Arts",
      image: "/photo/5a.png",
      description: "Demonstrating the refined movements of Japanese tea ceremony"
    }
  ]
}

interface MasterDetailPageProps {
  params: Promise<{ slug: string }>
}

interface WorkItemProps {
  work: any
  className?: string
}

const WorkItem = ({ work, className = "" }: WorkItemProps) => (
  <div className={`tatami-block bg-linen group hover:shadow-deep transition-all duration-tatami flex-col cursor-pointer ${className}`}>
    {/* Artwork Image */}
    <div className="relative w-full h-48 bg-charcoal/10 rounded-t-tatami overflow-hidden">
      <Image
        src={work.image}
        alt={work.title}
        fill
        className="object-cover"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-powder-blue/10 to-moss-green/10" />
      
      {/* Year Badge */}
      <div className="absolute top-3 right-3 bg-charcoal/80 text-linen text-xs px-2 py-1 rounded">
        {work.year}
      </div>
    </div>
    
    {/* Content */}
    <div className="p-4 flex-1 flex flex-col">
      <h4 className="heading-block text-lg mb-2 text-charcoal group-hover:text-burnt-orange transition-colors duration-300">
        {work.title}
      </h4>
      
      <div className="text-burnt-orange font-primary font-medium text-xs mb-2">
        {work.technique}
      </div>
      
      <p className="text-description text-charcoal/80 text-sm leading-comfortable flex-1">
        {work.description}
      </p>
    </div>
  </div>
)

interface VideoItemProps {
  video: any
  className?: string
}

const VideoItem = ({ video, className = "" }: VideoItemProps) => (
  <div className={`tatami-block bg-linen group hover:shadow-deep transition-all duration-tatami flex-col cursor-pointer ${className}`}>
    {/* Video Thumbnail */}
    <div className="relative w-full h-40 bg-charcoal/10 rounded-t-tatami overflow-hidden">
      <Image
        src={video.coverImage}
        alt={video.title}
        fill
        className="object-cover"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-powder-blue/20 to-moss-green/20" />
      
      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 bg-burnt-orange rounded-full flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
          <Play className="w-6 h-6 text-linen ml-1" />
        </div>
      </div>
      
      {/* Duration Badge */}
      <div className="absolute bottom-2 right-2 bg-charcoal/80 text-linen text-xs px-2 py-1 rounded">
        {video.duration}
      </div>
    </div>
    
    {/* Content */}
    <div className="p-4 flex-1 flex flex-col">
      <h4 className="heading-block text-base mb-3 line-clamp-3 leading-comfortable text-charcoal group-hover:text-burnt-orange transition-colors duration-300">
        {video.title}
      </h4>
      
      <p className="text-description text-charcoal/70 text-sm leading-comfortable flex-1">
        {video.description}
      </p>
    </div>
  </div>
)

export default async function MasterDetailPage({ params }: MasterDetailPageProps) {
  const { slug } = await params
  const master = masterBySlug[slug]
  
  // If master not found, return 404
  if (!master) {
    notFound()
  }
  
  // Get related works and videos
  const masterWorks = mockWorksData[slug] || []
  const relatedVideos = videoStoriesData.filter(video => 
    video.masterName === master.nameEn
  ).slice(0, 4)

  return (
    <main className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/masters"
            className="flex items-center gap-3 text-linen hover:text-burnt-orange transition-colors duration-300 group"
            title="Back to Masters"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="heading-block text-base">Back to Masters</span>
          </Link>
          
          <div className="text-right">
            <h1 className="heading-block text-xl text-linen">{master.name}</h1>
            <p className="text-description text-sm text-linen/80 mt-1">
              {master.craft}
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Master Profile Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="tatami-block bg-linen p-0 overflow-hidden h-96">
                <div className="w-full h-full relative">
                  <Image
                    src={master.imageDetail}
                    alt={`${master.nameEn} - Master ${master.profession}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-powder-blue/10 to-moss-green/10" />
                </div>
              </div>
            </div>
            
            {/* Master Information */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="heading-block-large text-linen mb-2">{master.nameEn}</h2>
                <div className="text-burnt-orange font-primary font-medium text-lg mb-4">
                  {master.profession}
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-linen/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    {master.location}
                  </div>
                  <div className="text-linen/80 text-sm">
                    {master.experience}+ years experience
                  </div>
                  <div className="text-moss-green text-sm font-medium">
                    Specialty: {master.specialty}
                  </div>
                </div>
                
                <p className="text-description text-linen/90 text-base leading-relaxed">
                  {master.biographyEn.substring(0, 200)}...
                </p>
              </div>
              
              {/* Achievements */}
              <div>
                <h3 className="heading-block text-lg text-linen mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-burnt-orange" />
                  Recognition & Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="tatami-block bg-powder-blue/20 py-3 px-4">
                    <span className="text-description text-charcoal text-sm font-medium">
                      {master.achievementsEn.split('.')[0]}.
                    </span>
                  </div>
                  <div className="tatami-block bg-moss-green/20 py-3 px-4">
                    <span className="text-description text-charcoal text-sm font-medium">
                      Rating: {master.rating}/5.0 ⭐
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="mb-16">
          <h2 className="heading-block-large text-linen mb-8 text-center">
            Master's Journey
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="tatami-block bg-linen p-8 flex-col text-left h-auto">
              <h3 className="heading-block text-lg text-charcoal mb-4">
                Biography (English)
              </h3>
              <p className="text-description text-charcoal/90 text-sm leading-relaxed">
                {master.biographyEn}
              </p>
            </div>
            <div className="tatami-block bg-powder-blue/20 p-8 flex-col text-left h-auto">
              <h3 className="heading-block text-lg text-charcoal mb-4">
                Biography (日本語)
              </h3>
              <p className="text-description text-charcoal/90 text-sm leading-relaxed">
                {master.biographyJa}
              </p>
            </div>
          </div>
        </section>

        {/* Works/Creations Gallery */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="heading-block-large text-linen mb-3">
              Master Creations
            </h2>
            <p className="text-description text-linen/70 text-base">
              Explore the artistry and craftsmanship in every piece
            </p>
          </div>
          
          {/* Works Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {masterWorks.map((work) => (
              <WorkItem 
                key={work.id}
                work={work}
                className="h-80"
              />
            ))}
          </div>
        </section>

        {/* Related Videos Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="heading-block-large text-linen mb-3">
              Video Stories
            </h2>
            <p className="text-description text-linen/70 text-base">
              Witness the master's techniques and philosophy in motion
            </p>
          </div>
          
          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedVideos.map((video) => (
              <VideoItem 
                key={video.id}
                video={video}
                className="h-72"
              />
            ))}
          </div>
        </section>

        {/* Navigation CTA */}
        <section className="text-center">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link 
              href="/masters"
              className="tatami-block bg-moss-green px-8 py-4 hover:bg-moss-green/90 transition-colors duration-300 inline-flex items-center gap-3"
              title="Explore more masters"
            >
              <span className="heading-block text-base text-linen">Explore More Masters</span>
              <ArrowLeft className="w-4 h-4 text-linen rotate-180" />
            </Link>
            
            <Link 
              href="/stories"
              className="tatami-block bg-powder-blue px-8 py-4 hover:bg-powder-blue/90 transition-colors duration-300 inline-flex items-center gap-3"
              title="Watch all stories"
            >
              <span className="heading-block text-base text-charcoal">Watch All Stories</span>
              <Play className="w-4 h-4 text-charcoal ml-1" />
            </Link>
          </div>
          
          <p className="text-description text-sm mt-6 text-linen/70">
            Continue your journey through traditional Japanese craftsmanship
          </p>
        </section>
      </div>
    </main>
  )
}

export async function generateMetadata({ params }: MasterDetailPageProps) {
  const { slug } = await params
  const master = masterBySlug[slug]
  
  if (!master) {
    return {
      title: 'Master Not Found - Tatami Labs',
      description: 'The requested master craftsman could not be found.',
    }
  }
  
  return {
    title: `${master.nameEn} - ${master.profession} - Tatami Labs`,
    description: `Discover the story, techniques, and masterpieces of ${master.nameEn}, a renowned ${master.profession} master with ${master.experience}+ years of experience.`,
  }
}