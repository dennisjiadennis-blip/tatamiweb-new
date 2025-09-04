import React from 'react'

interface SkeletonProps {
  className?: string
  variant?: 'default' | 'card' | 'avatar' | 'text' | 'button'
  width?: string | number
  height?: string | number
  rounded?: boolean
}

export const Skeleton = ({ 
  className = "", 
  variant = "default",
  width,
  height,
  rounded = false
}: SkeletonProps) => {
  const baseClasses = "animate-pulse bg-charcoal/10"
  
  const variantClasses = {
    default: "rounded-tatami",
    card: "rounded-tatami h-48 w-full",
    avatar: "rounded-tatami aspect-square w-full",
    text: "h-4 rounded",
    button: "h-12 rounded-tatami"
  }
  
  const variantClass = variantClasses[variant]
  const roundedClass = rounded ? "rounded-full" : ""
  
  const style: React.CSSProperties = {
    width: width || undefined,
    height: height || undefined,
  }
  
  return (
    <div 
      className={`${baseClasses} ${variantClass} ${roundedClass} ${className}`}
      style={style}
    />
  )
}

// Specialized skeleton components for different use cases
export const SkeletonCard = ({ className = "" }: { className?: string }) => (
  <div className={`tatami-block bg-linen p-0 overflow-hidden ${className}`}>
    <Skeleton variant="card" />
    <div className="p-5 space-y-3">
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="text" className="w-1/2" />
      <Skeleton variant="text" className="w-full h-3" />
      <Skeleton variant="text" className="w-2/3 h-3" />
    </div>
  </div>
)

export const SkeletonMasterCard = ({ className = "" }: { className?: string }) => (
  <div className={`tatami-block bg-linen p-0 overflow-hidden flex-col text-left ${className}`}>
    <Skeleton variant="avatar" />
    <div className="p-5 space-y-3 flex-1">
      <Skeleton variant="text" className="w-3/4 h-5" />
      <Skeleton variant="text" className="w-1/2 h-4" />
      <Skeleton variant="text" className="w-full h-3" />
      <Skeleton variant="text" className="w-2/3 h-3" />
      <div className="mt-4 space-y-2">
        <Skeleton variant="text" className="w-1/3 h-3" />
        <Skeleton variant="text" className="w-1/2 h-3" />
      </div>
    </div>
  </div>
)

export const SkeletonVideoCard = ({ className = "" }: { className?: string }) => (
  <div className={`tatami-block bg-linen group flex-col ${className}`}>
    <div className="relative w-full h-40 bg-charcoal/10 rounded-t-tatami overflow-hidden">
      <Skeleton variant="card" className="h-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Skeleton className="w-12 h-12 rounded-full" />
      </div>
    </div>
    
    <div className="p-4 flex-1 flex flex-col space-y-3">
      <Skeleton variant="text" className="w-full h-4" />
      <Skeleton variant="text" className="w-3/4 h-4" />
      <Skeleton variant="text" className="w-1/2 h-3" />
    </div>
  </div>
)

// Animation keyframes are handled by Tailwind's animate-pulse utility
// which creates a subtle breathing effect perfect for Japandi aesthetic