import Image from 'next/image'
import Link from 'next/link'

const mockMasterData = {
  name: "Kenji Takahashi",
  field: "Traditional Pottery Master",
  bio: "With over 30 years of experience in traditional Japanese pottery, Master Kenji has dedicated his life to preserving the ancient art of ceramic craftsmanship. His work combines time-honored techniques with contemporary sensibilities, creating pieces that speak to both tradition and innovation. Born in Kyoto, he learned from his grandfather who was also a renowned potter, continuing a family legacy that spans four generations.",
  imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  creations: [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ]
}

export default function MasterDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Back Link */}
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          ← Back to Masters
        </Link>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column - Master Profile */}
        <div className="md:col-span-1">
          {/* Master Portrait with Gradient Border */}
          <div className="p-1 bg-gradient-to-tr from-yellow-400 to-red-500 rounded-xl mb-6">
            <div className="relative w-full h-80 rounded-lg overflow-hidden">
              <Image
                src={mockMasterData.imageUrl}
                alt={`${mockMasterData.name} - ${mockMasterData.field}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Master Information */}
          <div>
            <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
              {mockMasterData.name}
            </h1>
            <p className="text-primary font-medium text-lg mb-4">
              {mockMasterData.field}
            </p>
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Biography
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {mockMasterData.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Master Details */}
        <div className="md:col-span-2">
          {/* Decorative Quote */}
          <div className="mb-8">
            <span className="text-8xl font-serif text-primary/20 leading-none">"</span>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6 -mt-6 ml-8">
              Master Craftsman Detail
            </h2>
          </div>

          {/* Biography Section */}
          <div className="mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-6">
                Master {mockMasterData.name.split(' ')[0]}'s journey into the world of traditional pottery began at the tender age of seven, when he first watched his grandfather shape clay on the ancient wheel that still sits in his studio today. The rhythmic motion of the wheel, the gentle pressure of weathered hands guiding the malleable earth into form, became not just a craft but a meditation that would define his entire life's work.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                His mastery extends beyond mere technique—each piece carries the soul of centuries-old traditions while embracing the subtle innovations that keep the craft alive and relevant for contemporary collectors and tea ceremony practitioners worldwide.
              </p>
            </div>
          </div>

          {/* Creations Section */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Master Creations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {mockMasterData.creations.map((imageUrl, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={imageUrl}
                    alt={`Creation ${index + 1} by ${mockMasterData.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}