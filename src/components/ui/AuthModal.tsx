'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [authMode, setAuthMode] = useState<'register' | 'login'>('register')

  if (!isOpen) {
    return null
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-card rounded-lg shadow-xl p-8 max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Join or Sign In
          </h2>
        </div>

        {/* Mode Toggle Buttons */}
        <div className="flex bg-muted rounded-lg p-1 mb-6">
          <button
            onClick={() => setAuthMode('register')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              authMode === 'register'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-foreground/60 hover:text-foreground'
            }`}
          >
            Register
          </button>
          <button
            onClick={() => setAuthMode('login')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              authMode === 'login'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-foreground/60 hover:text-foreground'
            }`}
          >
            Log In
          </button>
        </div>

        {/* Google Sign In */}
        <Button className="w-full mb-4" variant="outline">
          Continue with Google
        </Button>

        {/* OR Divider */}
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-muted-foreground/20"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">OR</span>
          </div>
        </div>

        {/* Email and Password Form */}
        <div className="space-y-4 mb-6">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Main Action Button */}
        <Button className="w-full">
          {authMode === 'register' ? 'Create Account' : 'Log In'}
        </Button>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}