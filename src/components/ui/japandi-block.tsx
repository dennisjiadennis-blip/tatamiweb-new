'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface JapandiBlockProps {
  children: ReactNode
  className?: string
  colorTheme: 'burnt-orange' | 'powder-blue' | 'moss-green' | 'linen'
  size: 'large-landscape' | 'large-portrait' | 'medium-landscape' | 'small-portrait' | 'small-square'
}

const colorThemes = {
  'burnt-orange': {
    bg: '#D97D54',
    text: '#2D323A',
    shadow: 'rgba(217, 125, 84, 0.15)'
  },
  'powder-blue': {
    bg: '#B0C4DE', 
    text: '#2D323A',
    shadow: 'rgba(176, 196, 222, 0.15)'
  },
  'moss-green': {
    bg: '#7A8A6B',
    text: '#F5F0E8',
    shadow: 'rgba(122, 138, 107, 0.15)'
  },
  'linen': {
    bg: '#F5F0E8',
    text: '#2D323A',
    shadow: 'rgba(245, 240, 232, 0.15)'
  }
}

const sizeClasses = {
  'large-landscape': 'col-span-6 row-span-2 md:col-span-4 md:row-span-2',
  'large-portrait': 'col-span-4 row-span-3 md:col-span-2 md:row-span-3', 
  'medium-landscape': 'col-span-6 row-span-1 md:col-span-3 md:row-span-1',
  'small-portrait': 'col-span-3 row-span-2 md:col-span-2 md:row-span-2',
  'small-square': 'col-span-3 row-span-1 md:col-span-2 md:row-span-1'
}

export function JapandiBlock({ 
  children, 
  className,
  colorTheme,
  size
}: JapandiBlockProps) {
  const theme = colorThemes[colorTheme]
  const sizeClass = sizeClasses[size]

  const blockVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    }
  }

  return (
    <motion.div
      variants={blockVariants}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      className={clsx(
        sizeClass,
        'rounded-lg shadow-lg overflow-hidden cursor-pointer',
        'flex items-center justify-center p-3 md:p-6',
        className
      )}
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        boxShadow: `0 8px 32px ${theme.shadow}, 0 2px 8px rgba(0, 0, 0, 0.1)`
      }}
    >
      <div className="text-center w-full">
        {children}
      </div>
    </motion.div>
  )
}