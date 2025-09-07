import MasterCard from '@/components/ui/MasterCard'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import GridLayout from '@/components/ui/GridLayout'
import { getMasters } from '@/lib/api'

export default async function MastersSection() {
  let masters
  let hasError = false
  let errorMessage = ''

  try {
    masters = await getMasters()
  } catch (error) {
    console.error('Error loading masters section:', error)
    hasError = true
    errorMessage = error instanceof Error ? error.message : 'Failed to load masters data'
    masters = [] // Fallback to empty array
  }

  if (hasError) {
    return (
      <section className="py-16 bg-muted/30">
        <Container>
          <SectionTitle 
            title="The Masters"
            subtitle="We're having trouble loading the masters data right now"
            size="lg"
          />
          <div className="mt-12 text-center">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-destructive font-medium mb-2">Error Loading Content</p>
              <p className="text-foreground/70 text-sm">{errorMessage}</p>
              <p className="text-foreground/60 text-xs mt-2">Please refresh the page to try again</p>
            </div>
          </div>
        </Container>
      </section>
    )
  }

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
              key={master.slug}
              master={master}
            />
          ))}
        </GridLayout>
      </Container>
    </section>
  )
}