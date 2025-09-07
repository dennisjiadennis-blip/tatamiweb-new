import { Button } from '@/components/ui/button'
import Container from '@/components/ui/Container'

export default function HeroSection() {
  return (
    <section
      className="min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1541413807996-748925232da9?q=80&w=2070&auto=format&fit=crop')`,
      }}
    >
      <Container>
        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-soft border border-black/5 max-w-2xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            A Story Woven with a Master
          </h1>
          
          {/* Description */}
          <p className="font-sans text-lg text-foreground/80 mt-4 mb-8 leading-relaxed max-w-xl mx-auto">
            More than travel, it's dialogue of creation. Connect with master craftsmen through immersive experiences and discover the wisdom embedded in every gesture, every tradition.
          </p>
          
          {/* Button */}
          <Button variant="outline" size="lg" className="rounded-full">
            View Profile
          </Button>
        </div>
      </Container>
    </section>
  )
}