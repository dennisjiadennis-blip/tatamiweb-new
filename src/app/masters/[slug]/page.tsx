import Link from 'next/link'
import { notFound } from 'next/navigation'

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

// Master data mapped by both id and slug for compatibility
const masterData = {
  // By ID (numeric)
  1: {
    id: 1,
    slug: "hiroshi-tanaka",
    name: "Hiroshi Tanaka",
    craft: "Traditional Pottery",
    location: "Kyoto, Japan",
    experience: "50+ years",
    specialty: "Raku Ceramics",
    profileImage: "/api/placeholder/400/500",
    shortDescription: "Master of traditional pottery techniques passed down through five generations.",
    
    biography: {
      introduction: "Hiroshi Tanaka represents the epitome of traditional Japanese pottery craftsmanship. Born into a family of ceramicists in Kyoto, he has dedicated over five decades to perfecting the ancient art of Raku firing, a technique that embodies the Japanese aesthetic philosophy of wabi-sabi.",
      
      journey: "His journey began at the age of 12, learning at his grandfather's kiln in the historic Gion district. Under the tutelage of master potters who traced their lineage back to the Edo period, Hiroshi developed an intimate understanding of clay, fire, and the delicate balance between control and surrender that defines true artistry.",
      
      philosophy: "\"Clay teaches patience,\" Hiroshi often says. \"Fire teaches humility. Together, they teach us about the beauty of imperfection.\" His philosophy centers around the belief that each piece of pottery carries the soul of its creator, the memory of the earth from which it came, and the breath of the fire that transformed it.",
      
      recognition: "In 2018, Hiroshi was designated as a Living National Treasure by the Japanese government, recognizing his invaluable contribution to preserving and advancing traditional ceramic arts. His works are held in permanent collections at the Tokyo National Museum, the Victoria and Albert Museum in London, and the Metropolitan Museum of Art in New York."
    },
    
    achievements: [
      "Living National Treasure (2018)",
      "UNESCO Heritage Artisan",
      "International Pottery Award 2019",
      "Kyoto Cultural Ambassador",
      "Master of Traditional Crafts"
    ],
    
    works: [
      {
        id: 1,
        title: "Moonlit Vessel",
        year: "2023",
        technique: "Raku Firing",
        image: "/api/placeholder/300/400",
        description: "A meditation on the interplay of light and shadow"
      },
      {
        id: 2,
        title: "Autumn Reflection",
        year: "2022",
        technique: "Wood-fired Ceramic",
        image: "/api/placeholder/350/300",
        description: "Inspired by the changing seasons in Kyoto"
      },
      {
        id: 3,
        title: "Zen Garden Bowl",
        year: "2023",
        technique: "Traditional Glazing",
        image: "/api/placeholder/320/320",
        description: "Embodying the essence of Japanese tea ceremony"
      },
      {
        id: 4,
        title: "Phoenix Rising",
        year: "2021",
        technique: "Raku Firing",
        image: "/api/placeholder/280/450",
        description: "A symbolic piece representing renewal and transformation"
      },
      {
        id: 5,
        title: "Morning Dew Vase",
        year: "2023",
        technique: "Natural Ash Glaze",
        image: "/api/placeholder/300/380",
        description: "Capturing the ephemeral beauty of early morning"
      },
      {
        id: 6,
        title: "Harmony in Clay",
        year: "2022",
        technique: "Multi-firing Technique",
        image: "/api/placeholder/400/300",
        description: "A masterpiece of balance and proportion"
      }
    ],
    
    relatedVideos: [
      {
        id: 1,
        title: "The Sacred Fire: Hiroshi's Raku Ceremony",
        duration: "18:42",
        thumbnail: "/api/placeholder/400/300",
        description: "Watch Master Tanaka perform the ancient Raku firing ceremony"
      },
      {
        id: 2,
        title: "From Clay to Art: 50 Years of Dedication",
        duration: "24:15",
        thumbnail: "/api/placeholder/380/280",
        description: "A comprehensive documentary about Hiroshi's journey"
      },
      {
        id: 3,
        title: "Teaching the Next Generation",
        duration: "12:30",
        thumbnail: "/api/placeholder/420/300",
        description: "Hiroshi shares his knowledge with young apprentices"
      },
      {
        id: 4,
        title: "The Philosophy of Imperfection",
        duration: "15:22",
        thumbnail: "/api/placeholder/350/280",
        description: "Understanding wabi-sabi through pottery"
      }
    ]
  },
  
  3: {
    id: 3,
    slug: "kenji-yamamoto",
    name: "Kenji Yamamoto",
    craft: "Japanese Knife Making",
    location: "Sakai, Japan",
    experience: "45 years",
    specialty: "Kitchen Knives",
    profileImage: "/api/placeholder/400/500",
    shortDescription: "Third generation knife maker specializing in traditional Japanese kitchen knives.",
    
    biography: {
      introduction: "Kenji Yamamoto stands as the third generation of master blade smiths in the renowned Sakai tradition. His family workshop has been forging exceptional Japanese knives for over a century, combining ancient techniques with modern precision.",
      
      journey: "Beginning his apprenticeship at age 16 under his father's watchful eye, Kenji spent years mastering the intricate process of folding steel, achieving the perfect balance between hardness and flexibility that defines Japanese blade craftsmanship.",
      
      philosophy: "\"A knife is not just a tool,\" Kenji explains. \"It is an extension of the chef's soul, a bridge between intention and creation. Every fold in the steel carries our ancestors' wisdom.\"",
      
      recognition: "Kenji's blades are sought after by renowned chefs worldwide. His knives grace the kitchens of Michelin-starred restaurants and are treasured by culinary artists who understand the difference that true craftsmanship makes."
    },
    
    achievements: [
      "Sakai Traditional Craftsman",
      "Blade Excellence Award",
      "International Culinary Tool Recognition",
      "Master Smith Certification",
      "Export Excellence Award"
    ],
    
    works: [
      {
        id: 1,
        title: "Sakura Santoku",
        year: "2023",
        technique: "Damascus Steel",
        image: "/api/placeholder/400/250",
        description: "Named for the cherry blossom pattern in the steel"
      },
      {
        id: 2,
        title: "Master Chef's Gyuto",
        year: "2023",
        technique: "High Carbon Steel",
        image: "/api/placeholder/450/200",
        description: "The ultimate chef's knife for professional kitchens"
      },
      {
        id: 3,
        title: "Harmony Deba",
        year: "2022",
        technique: "Traditional Forging",
        image: "/api/placeholder/350/300",
        description: "Perfect for fish preparation in Japanese cuisine"
      }
    ],
    
    relatedVideos: [
      {
        id: 1,
        title: "Forging Fire: The Making of a Master Blade",
        duration: "22:18",
        thumbnail: "/api/placeholder/400/300",
        description: "The complete process of creating a traditional Japanese knife"
      },
      {
        id: 2,
        title: "Three Generations of Steel",
        duration: "16:45",
        thumbnail: "/api/placeholder/380/280",
        description: "The Yamamoto family legacy in blade making"
      }
    ]
  }
}

// Create slug-based lookup
const masterBySlug = Object.values(masterData).reduce((acc, master) => {
  acc[master.slug] = master
  return acc
}, {} as Record<string, typeof masterData[1]>)

interface MasterDetailPageProps {
  params: Promise<{ slug: string }>
}

interface WorkItemProps {
  work: typeof masterData[1]['works'][0]
  className?: string
}

const WorkItem = ({ work, className = "" }: WorkItemProps) => (
  <div className={`tatami-block bg-linen group hover:shadow-deep transition-all duration-tatami flex-col cursor-pointer ${className}`}>
    {/* Artwork Image */}
    <div className="relative w-full h-48 bg-charcoal/10 rounded-t-tatami overflow-hidden">
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
  video: typeof masterData[1]['relatedVideos'][0]
  className?: string
}

const VideoItem = ({ video, className = "" }: VideoItemProps) => (
  <div className={`tatami-block bg-linen group hover:shadow-deep transition-all duration-tatami flex-col cursor-pointer ${className}`}>
    {/* Video Thumbnail */}
    <div className="relative w-full h-40 bg-charcoal/10 rounded-t-tatami overflow-hidden">
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
                <div className="w-full h-full bg-gradient-to-br from-powder-blue/20 to-moss-green/20 relative">
                  <div className="absolute inset-0 bg-charcoal/5" />
                </div>
              </div>
            </div>
            
            {/* Master Information */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="heading-block-large text-linen mb-2">{master.name}</h2>
                <div className="text-burnt-orange font-primary font-medium text-lg mb-4">
                  {master.craft}
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-linen/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    {master.location}
                  </div>
                  <div className="text-linen/80 text-sm">
                    {master.experience} experience
                  </div>
                  <div className="text-moss-green text-sm font-medium">
                    Specialty: {master.specialty}
                  </div>
                </div>
                
                <p className="text-description text-linen/90 text-base leading-relaxed">
                  {master.shortDescription}
                </p>
              </div>
              
              {/* Achievements */}
              <div>
                <h3 className="heading-block text-lg text-linen mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-burnt-orange" />
                  Recognition & Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {master.achievements.map((achievement, index) => (
                    <div key={index} className="tatami-block bg-powder-blue/20 py-3 px-4">
                      <span className="text-description text-charcoal text-sm font-medium">
                        {achievement}
                      </span>
                    </div>
                  ))}
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
            {Object.entries(master.biography).map(([key, content], index) => (
              <div key={key} className="tatami-block bg-linen p-8 flex-col text-left h-auto">
                <h3 className="heading-block text-lg text-charcoal mb-4 capitalize">
                  {key === 'introduction' ? 'The Beginning' : 
                   key === 'journey' ? 'The Path' : 
                   key === 'philosophy' ? 'The Wisdom' : 
                   'The Legacy'}
                </h3>
                <p className="text-description text-charcoal/90 text-sm leading-relaxed">
                  {content}
                </p>
              </div>
            ))}
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
            {master.works.map((work) => (
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
            {master.relatedVideos.map((video) => (
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
    title: `${master.name} - ${master.craft} - Tatami Labs`,
    description: `Discover the story, techniques, and masterpieces of ${master.name}, a renowned ${master.craft} master with ${master.experience} of experience. ${master.shortDescription}`,
  }
}