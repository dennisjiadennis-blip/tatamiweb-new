'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import AuthModal from '@/components/ui/AuthModal'

export default function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const openAuthModal = () => setIsAuthModalOpen(true)
  const closeAuthModal = () => setIsAuthModalOpen(false)
  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-serif text-2xl font-bold text-foreground">
              Tatami Labs
            </h1>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Mendoza
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                JP Labs
              </a>
              <Button variant="default" size="sm">
                Become a Member
              </Button>
              <Button variant="outline" size="sm" onClick={openAuthModal}>
                Log In
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-foreground hover:text-primary">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </nav>
  )
}