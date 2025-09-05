import { Button } from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section 
      className="min-h-[500px] flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="bg-card/90 backdrop-blur-sm rounded-xl p-8 shadow-lg text-center">
          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Story Woven with a Master
          </h1>
          
          {/* Subtitle/Description */}
          <p className="font-sans text-lg text-foreground/80 mb-6 leading-relaxed">
            More than travel, it's dialogue of creation. Experience the intersection of traditional Japanese craftsmanship and modern storytelling through immersive conversations with master artisans.
          </p>
          
          {/* Call to Action Button */}
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/90 hover:bg-white border-primary text-primary hover:text-primary font-medium"
          >
            View Profile
          </Button>
        </div>
      </div>
    </section>
  )
}