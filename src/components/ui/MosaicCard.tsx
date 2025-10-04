'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface MosaicCardProps {
  children?: ReactNode
  className?: string
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  color: 'sage' | 'beige' | 'terracotta' | 'slate' | 'cream'
  href?: string
  onClick?: () => void
  image?: string
  icon?: ReactNode
  title?: string
  subtitle?: string
  description?: string
  tag?: string
  hasPattern?: boolean
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}


export default function MosaicCard({
  children,
  className = '',
  size,
  color,
  href,
  onClick,
  image,
  icon,
  title,
  subtitle,
  description,
  tag,
  hasPattern = false
}: MosaicCardProps) {
  const cardClasses = `
    tatami-card 
    card-${color} 
    card-${size}
    ${hasPattern ? 'woven-texture' : 'tatami-texture'}
    ${className}
  `.trim()

  const cardContent = (
    <motion.div
      className={cardClasses}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onClick={onClick}
      style={{ cursor: href || onClick ? 'pointer' : 'default' }}
    >
      {/* Background Pattern for certain cards */}
      {hasPattern && (
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-transparent via-white/30 to-transparent" />
        </div>
      )}

      {/* Image if provided */}
      {image && (
        <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title || 'Card image'}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Icon */}
      {icon && (
        <div className="card-icon">
          {icon}
        </div>
      )}

      {/* Tag */}
      {tag && (
        <div className="card-tag">
          {tag}
        </div>
      )}

      {/* Title */}
      {title && (
        <h3 className="card-title">
          {title}
        </h3>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className="card-subtitle">
          {subtitle}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className="card-description">
          {description}
        </p>
      )}

      {/* Custom children content */}
      {children}

      {/* Click indicator for interactive cards */}
      {(href || onClick) && (
        <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </div>
      )}
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} className="group">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}