'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import AuthButton from '@/components/ui/AuthButton'

const navItems = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/product-intro', label: 'Experience', icon: '📖' },
  { href: '/masters', label: 'Artisans', icon: '👨‍🎨' },
  { href: '/philosophy', label: 'Philosophy', icon: '💭' },
  { href: '/video-demo', label: 'Stories', icon: '🎬' },
  { href: '/auth', label: 'Join', icon: '🚪' }
]

const userNavItems = [
  { href: '/profile', label: 'Profile', icon: '👤' },
  { href: '/masters', label: 'Artisans', icon: '👨‍🎨' },
  { href: '/philosophy', label: 'Philosophy', icon: '💭' },
  { href: '/video-demo', label: 'Stories', icon: '🎬' }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { data: session, status } = useSession()

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }

  return (
    <>
      {/* Desktop Navigation - Fixed at top */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <button 
              onClick={() => window.location.href = '/'}
              className="font-card-subtitle font-bold text-white tracking-wider hover:text-orange-300 transition-colors"
            >
              TATAMI LABS
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {(session ? userNavItems : navItems.filter(item => item.href !== '/auth')).map((item) => (
                <button
                  key={item.href}
                  onClick={() => window.location.href = item.href}
                  className={`px-4 py-2 rounded-lg font-card-subtitle transition-all duration-200 ${
                    pathname === item.href
                      ? 'bg-orange-600 text-white'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
              
              {/* User Authentication Button */}
              <div className="ml-4 flex items-center">
                <AuthButton />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-orange-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Side Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-slate-900 shadow-xl z-50 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="p-6">
                
                {/* Menu Title */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-card-headline text-white text-xl">
                    Navigation
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-orange-300 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Menu Items */}
                <div className="space-y-2">
                  {(session ? userNavItems : navItems).map((item) => (
                    <button
                      key={item.href}
                      onClick={() => {
                        window.location.href = item.href
                        setIsOpen(false)
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg font-card-subtitle transition-all duration-200 flex items-center ${
                        pathname === item.href
                          ? 'bg-orange-600 text-white'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="mr-3 text-xl">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                  
                  {/* Mobile User Actions */}
                  {session ? (
                    <button
                      onClick={() => {
                        handleSignOut()
                        setIsOpen(false)
                      }}
                      className="w-full text-left px-4 py-3 rounded-lg font-card-subtitle transition-all duration-200 flex items-center text-red-400 hover:bg-red-500/10"
                    >
                      <span className="mr-3 text-xl">🚪</span>
                      Sign Out
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        window.location.href = '/auth'
                        setIsOpen(false)
                      }}
                      className="w-full text-left px-4 py-3 rounded-lg font-card-subtitle transition-all duration-200 flex items-center text-green-400 hover:bg-green-500/10"
                    >
                      <span className="mr-3 text-xl">🚪</span>
                      Sign In / Register
                    </button>
                  )}
                </div>

                {/* Footer Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-gray-400 text-sm font-card-subtitle">
                    © 2025 Tatami Labs
                    <br />
                    Where Tradition Meets Innovation
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Space for fixed navigation */}
      <div className="h-16"></div>
    </>
  )
}