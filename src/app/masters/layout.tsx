import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Masters - Tatami Labs',
  description: 'Meet the master craftsmen who preserve traditional Japanese artistry. Discover their stories, techniques, and the wisdom passed down through generations.',
}

export default function MastersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}