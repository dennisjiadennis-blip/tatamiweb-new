'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

const pageVariants = {
  initial: { 
    opacity: 0 
  },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.4 
    } 
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.4 
    } 
  }
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 用于包装整个页面内容的组件
interface CardMosaicContainerProps {
  children: ReactNode
  className?: string
}

const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function CardMosaicContainer({ children, className }: CardMosaicContainerProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  )
}