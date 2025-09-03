'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  backgroundColor?: 'blue' | 'orange' | 'green' | 'offwhite'
  href?: string
  onClick?: () => void
}

const backgroundColors = {
  blue: 'var(--color-blue)',
  orange: 'var(--color-orange)', 
  green: 'var(--color-green)',
  offwhite: 'var(--color-offwhite)'
}

const borderColors = {
  blue: '#9BB1D4',      // 淡蓝色的深色变体
  orange: '#C66B47',    // 桔红色的深色变体  
  green: '#6A7A5D',     // 苔绿色的深色变体
  offwhite: '#E5DDD0'   // 米白色的深色变体
}

export function Card({ 
  children, 
  className, 
  backgroundColor = 'offwhite',
  href,
  onClick 
}: CardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: 'easeOut' 
      } 
    }
  }

  const cardStyle = {
    backgroundColor: backgroundColors[backgroundColor],
    padding: 'var(--gap-md)',
    borderRadius: '12px',
    border: `1px solid ${borderColors[backgroundColor]}`,
    boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.2)',
    cursor: href || onClick ? 'pointer' : 'default'
  }

  const Component = href ? 'a' : 'div'

  const handleClick = () => {
    if (href) {
      window.location.href = href
    } else if (onClick) {
      onClick()
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -6,
        boxShadow: '0px 15px 40px -8px rgba(0, 0, 0, 0.3)',
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      style={cardStyle}
      className={clsx('transition-transform duration-300 ease-out relative paper-texture', className)}
      onClick={handleClick}
    >
      {children}
    </motion.div>
  )
}