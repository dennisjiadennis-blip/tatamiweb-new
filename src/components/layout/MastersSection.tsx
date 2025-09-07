import MasterCard from '@/components/ui/MasterCard'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import GridLayout from '@/components/ui/GridLayout'
import { getMasters } from '@/lib/data'

export default function MastersSection() {
  const masters = getMasters()

  return (
    <section className="py-16 bg-background">
      <Container>
        <SectionTitle 
          title="The Masters"
          subtitle="Meet the artisans who dedicate their lives to the soul of Japanese craft."
          size="xl"
        />
        
        <GridLayout cols={1} mdCols={2} lgCols={3} gap={8} marginTop={12}>
          {masters.map((master) => (
            <MasterCard
              key={master.id}
              master={master}
            />
          ))}
        </GridLayout>
      </Container>
    </section>
  )
}