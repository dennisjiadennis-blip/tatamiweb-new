import { Cormorant_Garamond, Ma_Shan_Zheng } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/providers/session-provider'

// Primary Serif Font - Cormorant Garamond for elegance and readability
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-garamond',
  display: 'swap', // Optimize font loading performance
  preload: true,
})

// Secondary Font - Ma Shan Zheng for Japanese aesthetic (future use)
const maShanZheng = Ma_Shan_Zheng({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ma-shan-zheng',
  display: 'swap',
  preload: false, // Less critical, load when needed
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
    <html lang="en" className={`${cormorantGaramond.variable} ${maShanZheng.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2D323A" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`font-serif antialiased`}
        style={{
          fontFamily: 'var(--font-cormorant-garamond), serif',
          backgroundColor: '#2D323A',
          color: '#1C1C1C',
          margin: 0,
          padding: 0,
          minHeight: '100vh',
        }}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}