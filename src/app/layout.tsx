import { Cormorant_Garamond, Ma_Shan_Zheng } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/providers/session-provider'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant-garamond',
})

const maShanZheng = Ma_Shan_Zheng({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ma-shan-zheng',
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
        className={`${cormorantGaramond.variable} ${maShanZheng.variable} font-serif bg-japandi-background text-japandi-charcoal`}
      >
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}