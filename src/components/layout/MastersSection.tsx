import MasterCard from '@/components/ui/MasterCard'

// Mock data for masters - in a real app, this would come from an API
const mastersData = [
  {
    id: 1,
    name: "Kenji Takahashi",
    field: "Traditional Pottery Master",
    slug: "kenji-takahashi",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Hiroshi Yamamoto", 
    field: "Woodcraft & Carpentry Master",
    slug: "hiroshi-yamamoto",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Akiko Sato",
    field: "Textile & Kimono Master",
    slug: "akiko-sato",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616c56c5b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Toshiro Nakamura",
    field: "Blade Forging Master",
    slug: "toshiro-nakamura",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Yuki Tanaka",
    field: "Culinary Arts Master",
    slug: "yuki-tanaka",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Masato Suzuki",
    field: "Calligraphy & Ink Master",
    slug: "masato-suzuki",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
]

export default function MastersSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
            The Masters
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Meet the extraordinary artisans who have dedicated their lives to preserving and perfecting traditional Japanese crafts
          </p>
        </div>
        
        {/* Masters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {mastersData.map((master) => (
            <MasterCard
              key={master.id}
              name={master.name}
              field={master.field}
              slug={master.slug}
              imageUrl={master.imageUrl}
            />
          ))}
        </div>
        
        {/* Optional: View All Masters Button */}
        <div className="text-center mt-12">
          <p className="text-foreground/60 text-sm">
            Discover more master craftsmen and their incredible stories
          </p>
        </div>
      </div>
    </section>
  )
}