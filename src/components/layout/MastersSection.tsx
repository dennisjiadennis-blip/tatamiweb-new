import MasterCard from '@/components/ui/MasterCard'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import GridLayout from '@/components/ui/GridLayout'
import { getMasters } from '@/lib/api'

export default async function MastersSection() {
  const masters = await getMasters();

  return (
    <section className="py-16 bg-muted/30">
      <Container>
        <SectionTitle 
          title="The Masters"
          subtitle="Meet the extraordinary artisans who have dedicated their lives to preserving and perfecting traditional Japanese crafts"
          size="lg"
        />
        
        <GridLayout cols={1} mdCols={2} lgCols={3} gap={8} marginTop={12}>
          {masters.map((master, index) => (
            <MasterCard
              key={index}
              name={master.name}
              field={master.field}
              imageUrl={master.imageUrl}
              slug={master.slug}
            />
          ))}
        </GridLayout>
      </Container>
    </section>
  )
}