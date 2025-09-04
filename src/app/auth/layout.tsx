import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Tatami - Tatami Labs',
  description: 'Sign in or create your account to access personalized craft journey recommendations, exclusive master artisan content, and priority booking for workshop experiences.',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}