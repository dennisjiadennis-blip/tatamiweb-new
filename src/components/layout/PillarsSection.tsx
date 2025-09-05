import PillarCard from '@/components/ui/PillarCard'

const pillarsData = [
  {
    id: 1,
    title: "Traditional Pottery",
    description: "Master the ancient art of ceramic creation through centuries-old techniques passed down through generations.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    borderColor: "border-green-300"
  },
  {
    id: 2,
    title: "Woodcraft Mastery",
    description: "Discover the delicate balance between tradition and innovation in Japanese woodworking craftsmanship.",
    imageUrl: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    borderColor: "border-blue-300"
  },
  {
    id: 3,
    title: "Textile Artistry",
    description: "Experience the intricate world of Japanese textile arts, from silk weaving to indigo dyeing techniques.",
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    borderColor: "border-purple-300"
  },
  {
    id: 4,
    title: "Metal Forging",
    description: "Learn from master blacksmiths who continue the legacy of Japanese sword-making and metalwork.",
    imageUrl: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    borderColor: "border-orange-300"
  },
  {
    id: 5,
    title: "Culinary Arts",
    description: "Explore the philosophy and precision behind traditional Japanese cuisine and knife craftsmanship.",
    imageUrl: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    borderColor: "border-red-300"
  }
]

export default function PillarsSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            Pillars of Journey
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Discover the master craftsmen who preserve Japan's cultural heritage through their dedication to traditional arts
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {pillarsData.map((pillar) => (
            <PillarCard
              key={pillar.id}
              title={pillar.title}
              description={pillar.description}
              imageUrl={pillar.imageUrl}
              borderColor={pillar.borderColor}
            />
          ))}
        </div>
        
        {/* Optional: Horizontal scroll for mobile */}
        <div className="xl:hidden mt-8">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {pillarsData.map((pillar) => (
              <div key={`mobile-${pillar.id}`} className="flex-shrink-0 w-72">
                <PillarCard
                  title={pillar.title}
                  description={pillar.description}
                  imageUrl={pillar.imageUrl}
                  borderColor={pillar.borderColor}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}