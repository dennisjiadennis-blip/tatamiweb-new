'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingBlockProps {
  children: ReactNode
  colorTheme: 'burnt-orange' | 'powder-blue' | 'moss-green' | 'linen'
  position: {
    top: string
    left: string
    width: string
    height: string
  }
  className?: string
  delay?: number
}

const colorThemes = {
  'burnt-orange': {
    bg: '#D97D54',
    text: '#2D323A',
    shadow: 'rgba(217, 125, 84, 0.2)'
  },
  'powder-blue': {
    bg: '#B0C4DE', 
    text: '#2D323A',
    shadow: 'rgba(176, 196, 222, 0.2)'
  },
  'moss-green': {
    bg: '#7A8A6B',
    text: '#F5F0E8',
    shadow: 'rgba(122, 138, 107, 0.2)'
  },
  'linen': {
    bg: '#F5F0E8',
    text: '#2D323A',
    shadow: 'rgba(245, 240, 232, 0.2)'
  }
}

export function FloatingBlock({ 
  children, 
  colorTheme,
  position,
  className = '',
  delay = 0
}: FloatingBlockProps) {
  const theme = colorThemes[colorTheme]

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0.8,
        y: 50
      }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: 0
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        scale: 1.03,
        y: -8,
        transition: { duration: 0.3 }
      }}
      className={`absolute rounded-2xl overflow-hidden cursor-pointer ${className}`}
      style={{
        top: position.top,
        left: position.left,
        width: position.width,
        height: position.height,
        backgroundColor: theme.bg,
        color: theme.text,
        boxShadow: `0 16px 48px ${theme.shadow}, 0 8px 24px rgba(0, 0, 0, 0.12)`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
        <div className="text-center w-full">
          {children}
        </div>
      </div>
    </motion.div>
  )
}