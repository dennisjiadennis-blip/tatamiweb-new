import HeroSection from '@/components/layout/HeroSection'
import PillarsSection from '@/components/layout/PillarsSection'
import MastersSection from '@/components/layout/MastersSection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PillarsSection />
      <MastersSection />
    </main>
  )
}