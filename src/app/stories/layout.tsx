import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stories - Tatami Labs',
  description: 'Discover wisdom through immersive video stories of master craftsmen. Experience the intersection of traditional Japanese craftsmanship and modern storytelling.',
}

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}