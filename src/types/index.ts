// Core data type definitions

/**
 * Master information interface
 */
export interface Master {
  /** Unique identifier */
  id: string
  /** URL path identifier */
  slug: string
  /** Avatar image URL */
  imageUrl: string
  /** Works image URL array */
  works: string[]
  /** Multi-language content */
  i18n: {
    en: {
      /** Master name */
      name: string
      /** Professional field */
      field: string
      /** Master biography */
      bio: string
      /** Personal philosophy */
      philosophy: string
    }
    // Can add jp, zh etc. in the future
  }
}

/**
 * Pillar information interface
 */
export interface Pillar {
  /** Pillar title */
  title: string
  /** Pillar description */
  description: string
  /** Image URL */
  imageUrl: string
  /** Border color class name */
  borderColor: string
}

/**
 * Generic API response interface
 */
export interface ApiResponse<T = unknown> {
  data?: T
  error?: string
  message?: string
}

/**
 * API error response interface
 */
export interface ApiError {
  error: string
  status?: number
}

/**
 * Navigation menu item interface
 */
export interface NavItem {
  /** Link address */
  href: string
  /** Display label */
  label: string
  /** Icon */
  icon: string
}

/**
 * User session info interface (extends NextAuth types)
 */
export interface UserSession {
  id?: string
  name?: string | null
  email?: string | null
  image?: string | null
}

/**
 * Component common Props interface
 */
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

/**
 * Page parameters interface (for dynamic routing)
 */
export interface PageParams {
  slug: string
}

/**
 * Page Props interface
 */
export interface PageProps {
  params: Promise<PageParams>
}

/**
 * Network connection info interface (for performance monitoring)
 */
export interface NetworkConnection {
  effectiveType?: '2g' | '3g' | '4g' | 'slow-2g'
  downlink?: number
  rtt?: number
  saveData?: boolean
}

/**
 * Performance metrics interface
 */
export interface PerformanceMetrics {
  /** First Contentful Paint time */
  firstContentfulPaint?: number
  /** Largest Contentful Paint time */
  largestContentfulPaint?: number
  /** First Input Delay */
  firstInputDelay?: number
  /** Cumulative Layout Shift */
  cumulativeLayoutShift?: number
}