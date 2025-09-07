import PillarCard from '@/components/ui/PillarCard'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import GridLayout from '@/components/ui/GridLayout'
import { Pillar } from '@/types'

const pillarsData: Pillar[] = [
  {
    title: "The Dialogue",
    description: "Engage in meaningful conversations with master artisans.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop",
    borderColor: "border-green-300"
  },
  {
    title: "The Space",
    description: "Experience the serene environments where craft is born.",
    imageUrl: "https://images.unsplash.com/photo-1511406322959-44161a01b9a2?q=80&w=800&auto=format&fit=crop",
    borderColor: "border-yellow-300"
  },
  {
    title: "The Craft",
    description: "Witness the meticulous techniques passed down for generations.",
    imageUrl: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop",
    borderColor: "border-blue-300"
  },
  {
    title: "Your Story Awaits",
    description: "Become a member to unlock exclusive journeys.",
    imageUrl: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=800&auto=format&fit=crop",
    borderColor: "border-orange-400"
  }
]

export default function PillarsSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle 
          title="Pillars of Journey"
          className="mb-8"
        />
        
        <GridLayout cols={1} mdCols={2} lgCols={4}>
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