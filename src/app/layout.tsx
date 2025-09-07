import { Inter, Noto_Serif_JP } from 'next/font/google'
import './globals.css'
import { NextAuthProvider } from './Providers'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans' 
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-serif',
})

export const metadata = {
  title: 'Tatami Labs',
  description: 'One Journey, a Lifetime of Insight',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${notoSerifJP.variable} font-sans antialiased bg-background text-foreground`}
      >
        <NextAuthProvider>
          <main>{children}</main>
        </NextAuthProvider>
      </body>
    </html>
  )
}