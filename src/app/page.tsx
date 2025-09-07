import HeroSection from '@/components/layout/HeroSection';
import MastersSection from '@/components/layout/MastersSection';
import PillarsSection from '@/components/layout/PillarsSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PillarsSection />
      <MastersSection />
    </main>
  );
}