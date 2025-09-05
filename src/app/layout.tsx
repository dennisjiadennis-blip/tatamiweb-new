import { Inter, Lora } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/providers/session-provider'
import Navbar from '@/components/layout/Navbar'

// Primary Sans Serif Font - Inter for body text
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
})

// Primary Serif Font - Lora for headings
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata = {
  title: 'Tatami Labs - One Journey, a Lifetime of Insight',
  description: 'Connect with master craftsmen through immersive dialogues. Discover wisdom in every conversation, insight in every journey. Experience the intersection of traditional Japanese craftsmanship and modern storytelling.',
  keywords: 'Tatami Labs, Japanese craftsmanship, master craftsmen, traditional culture, immersive dialogues, artisan stories, cultural heritage',
  authors: [{ name: 'Tatami Labs Team' }],
  creator: 'Tatami Labs',
  publisher: 'Tatami Labs',
  robots: 'index, follow',
  openGraph: {
    title: 'Tatami Labs - One Journey, a Lifetime of Insight',
    description: 'Connect with master craftsmen through immersive dialogues and discover the wisdom of traditional Japanese craftsmanship.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tatami Labs - One Journey, a Lifetime of Insight',
    description: 'Connect with master craftsmen through immersive dialogues and discover the wisdom of traditional Japanese craftsmanship.',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#2D323A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#F8F5F2" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}