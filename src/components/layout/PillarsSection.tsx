import PillarCard from '@/components/ui/PillarCard'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import GridLayout from '@/components/ui/GridLayout'
import { Pillar } from '@/types'

const pillarsData: Pillar[] = [
  {
    title: "The Dialogue",
    description: "Engage in meaningful conversations with master artisans.",
    imageUrl: "/images/Gemini_Generated_Image_e27vtie27vtie27v.png",
    borderColor: "border-muted-moss"
  },
  {
    title: "The Space",
    description: "Experience the serene environments where craft is born.",
    imageUrl: "/images/Gemini_Generated_Image_nadsj1nadsj1nads.png",
    borderColor: "border-amber-400"
  },
  {
    title: "The Craft",
    description: "Witness the meticulous techniques passed down for generations.",
    imageUrl: "/images/Gemini_Generated_Image_sogwpsogwpsogwps.png",
    borderColor: "border-powder-blue"
  },
  {
    title: "Your Story Awaits",
    description: "Become a member to unlock exclusive journeys.",
    imageUrl: "/images/Gemini_Generated_Image_78uzdf78uzdf78uz.png",
    borderColor: "border-primary"
  }
]

export default function PillarsSection() {
  return (
    <section className="py-16 bg-background">
      <Container>
        <SectionTitle 
          title="Pillars of Journey"
          subtitle="Discover the core philosophies that guide every journey."
          size="lg"
          className="mb-12"
        />
        
        <GridLayout cols={1} mdCols={2} lgCols={4} gap={8}>
          {pillarsData.map((pillar, index) => (
            <PillarCard
              key={index}
              pillar={pillar}
            />
          ))}
        </GridLayout>
      </Container>
    </section>
  )
}