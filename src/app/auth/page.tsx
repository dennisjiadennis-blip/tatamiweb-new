'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { TatamiLogo, ArrowIcon } from '@/components/ui/Icons'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 flex items-center justify-center p-6">
      {/* Navigation */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
          <TatamiLogo size={32} />
          <span className="font-display text-xl font-medium tracking-wide">
            Tatami Labs
          </span>
        </Link>
      </motion.div>

      <motion.div
        className="fixed top-6 right-6 z-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-white opacity-70 hover:opacity-100 transition-opacity"
        >
          <ArrowIcon direction="left" size={20} />
          <span className="text-small">Back</span>
        </Link>
      </motion.div>

      {/* Auth Card */}
      <motion.div
        className="bg-white rounded-2xl shadow-elevated p-8 w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-display-md text-gray-800 mb-2">
            Join or Sign In
          </h1>
          <p className="text-body text-gray-600">
            Access your journey with master artisans
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              !isLogin
                ? 'bg-orange-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Register
          </button>
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              isLogin
                ? 'bg-orange-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Log In
          </button>
        </div>

        {/* Social Login */}
        <motion.button
          className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium mb-6 flex items-center justify-center gap-3 hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </motion.button>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">OR</span>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {!isLogin && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              />
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </motion.button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center">
          {isLogin ? (
            <p className="text-small text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => setIsLogin(false)}
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p className="text-small text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => setIsLogin(true)}
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                Sign in
              </button>
            </p>
          )}
        </div>

        {/* Terms */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            By continuing, you agree to our{' '}
            <a href="#" className="text-orange-500 hover:text-orange-600">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-orange-500 hover:text-orange-600">
              Privacy Policy
            </a>
          </p>
        </div>
      </motion.div>
    </main>
  )
}