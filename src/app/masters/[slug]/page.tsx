import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Container from '@/components/ui/Container'
import { getMasterBySlugSSR } from '@/lib/api'
import { PageProps } from '@/types'

interface MasterDetailPageProps extends PageProps {}

export default async function MasterDetailPage({ params }: MasterDetailPageProps) {
  const { slug } = await params
  const master = await getMasterBySlugSSR(slug)

  if (!master) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link 
            href="/"
            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-xl font-serif font-semibold text-foreground">
            Master Profile
          </h1>
        </div>
      </header>

      <Container maxWidth="4xl" className="py-12">
        {/* Master Profile Section */}
        <div className="bg-card rounded-xl p-8 mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Master Image */}
            <div className="md:col-span-1">
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <Image
                  src={master.imageUrl}
                  alt={`${master.name} - ${master.field}`}
                  fill
                  className="object-cover"
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
            
            {/* Master Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
                {master.name}
              </h1>
              <h2 className="text-xl text-primary font-medium mb-4">
                {master.field}
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                Meet {master.name}, a renowned {master.field.toLowerCase()} who has dedicated their life to preserving and perfecting traditional Japanese craftsmanship.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                With decades of experience, {master.name.split(' ')[0]} represents the finest traditions of Japanese artistry, combining time-honored techniques with contemporary vision. Their work embodies the essence of mono no aware - the beautiful impermanence that defines Japanese aesthetic philosophy.
              </p>
              
              <div className="flex gap-4">
                <Button size="lg">
                  Book Experience
                </Button>
                <Button variant="outline" size="lg">
                  View Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Master's Philosophy Section */}
        <div className="bg-muted/30 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
            Master's Philosophy
          </h2>
          <blockquote className="text-lg italic text-foreground/80 border-l-4 border-primary pl-6">
            "True mastery comes not from perfection, but from the endless pursuit of harmony between tradition and innovation. Every piece tells a story, and every story connects us to the eternal flow of Japanese craftsmanship."
          </blockquote>
          <p className="text-right mt-4 text-foreground/60">
            — {master.name}
          </p>
        </div>

        {/* Experience Section */}
        <div className="bg-card rounded-xl p-8 mb-8 shadow-sm">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
            Craft Experience with {master.name.split(' ')[0]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">What You'll Learn</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>• Traditional techniques passed down through generations</li>
                <li>• The philosophy behind Japanese craftsmanship</li>
                <li>• Hands-on creation of your own masterpiece</li>
                <li>• Cultural insights into Japanese artistry</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Experience Details</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>• Duration: 3-4 hours</li>
                <li>• Language: English & Japanese</li>
                <li>• Group size: Maximum 6 participants</li>
                <li>• Includes: Materials & tea ceremony</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary/5 rounded-xl p-8">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Experience the profound connection between artisan and craft. Book your exclusive session with {master.name} and discover the timeless wisdom of Japanese craftsmanship.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Book Now
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/">
                Explore More Masters
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  )
}

// Generate metadata for SEO
export async function generateMetadata({ params }: MasterDetailPageProps) {
  const { slug } = await params
  const master = await getMasterBySlugSSR(slug)
  
  if (!master) {
    return {
      title: 'Master Not Found - Tatami Labs',
      description: 'The requested master craftsman could not be found.',
    }
  }
  
  return {
    title: `${master.name} - ${master.field} - Tatami Labs`,
    description: `Experience traditional Japanese craftsmanship with ${master.name}, a master ${master.field.toLowerCase()}. Book your exclusive artisan experience today.`,
    openGraph: {
      title: `${master.name} - ${master.field}`,
      description: `Experience traditional Japanese craftsmanship with ${master.name}`,
      images: [master.imageUrl],
    },
  }
}