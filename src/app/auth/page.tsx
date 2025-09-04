'use client'

import { useState } from 'react'
import Link from 'next/link'

// Simple SVG Icons
const ArrowLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const User = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const Lock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder functionality - no actual authentication
    alert('This is a placeholder page. Authentication functionality will be implemented in a future version.')
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-3 text-linen hover:text-burnt-orange transition-colors duration-300 group"
            title="Return to homepage"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="heading-block text-base">Back to Home</span>
          </Link>
          
          <div>
            <h1 className="heading-block text-2xl text-linen">My Tatami</h1>
            <p className="text-description text-sm text-linen/80 mt-1">
              Your personal space for craft exploration
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          
          {/* Welcome Section */}
          <div className="text-center mb-8">
            <div className="tatami-block bg-linen p-6 mb-6">
              <User className="w-12 h-12 text-burnt-orange mx-auto mb-4" />
              <h2 className="heading-block-large text-charcoal mb-3">
                {isSignIn ? 'Welcome Back' : 'Join Tatami Labs'}
              </h2>
              <p className="text-description text-charcoal/80 text-base">
                {isSignIn 
                  ? 'Continue your journey through traditional craftsmanship'
                  : 'Begin your exploration of master artisans and their wisdom'
                }
              </p>
            </div>
          </div>

          {/* Auth Form */}
          <div className="tatami-block bg-linen p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field (only for Sign Up) */}
              {!isSignIn && (
                <div>
                  <label className="block text-description text-charcoal font-medium mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal/60" />
                    <input
                      type="text"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-charcoal/20 rounded-tatami bg-linen focus:outline-none focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div>
                <label className="block text-description text-charcoal font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal/60" />
                  <input
                    type="email"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-charcoal/20 rounded-tatami bg-linen focus:outline-none focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-description text-charcoal font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal/60" />
                  <input
                    type="password"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-charcoal/20 rounded-tatami bg-linen focus:outline-none focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 transition-all duration-300"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full tatami-block bg-burnt-orange text-linen py-4 hover:bg-burnt-orange/90 transition-colors duration-300"
              >
                <span className="heading-block text-base">
                  {isSignIn ? 'Sign In' : 'Create Account'}
                </span>
              </button>
            </form>

            {/* Toggle Auth Mode */}
            <div className="text-center mt-6 pt-6 border-t border-charcoal/10">
              <p className="text-description text-charcoal/70 text-sm mb-3">
                {isSignIn ? "Don't have an account yet?" : "Already have an account?"}
              </p>
              <button
                onClick={() => setIsSignIn(!isSignIn)}
                className="text-burnt-orange hover:text-burnt-orange/80 font-medium text-sm transition-colors duration-300"
              >
                {isSignIn ? 'Create New Account' : 'Sign In Instead'}
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <div className="tatami-block bg-moss-green/20 p-6">
              <h3 className="heading-block text-lg text-charcoal mb-2">
                What You'll Get
              </h3>
              <ul className="text-description text-charcoal/80 text-sm space-y-1">
                <li>• Personalized craft journey recommendations</li>
                <li>• Exclusive access to master artisan content</li>
                <li>• Priority booking for workshop experiences</li>
                <li>• Community of like-minded craft enthusiasts</li>
              </ul>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/masters"
                className="text-linen/80 hover:text-burnt-orange text-sm transition-colors duration-300"
              >
                Browse Masters
              </Link>
              <Link 
                href="/stories"
                className="text-linen/80 hover:text-burnt-orange text-sm transition-colors duration-300"
              >
                Watch Stories  
              </Link>
              <Link 
                href="/journey"
                className="text-linen/80 hover:text-burnt-orange text-sm transition-colors duration-300"
              >
                Join a Journey
              </Link>
            </div>
            <p className="text-description text-linen/60 text-xs">
              This is a placeholder page. Full authentication will be implemented in future versions.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

