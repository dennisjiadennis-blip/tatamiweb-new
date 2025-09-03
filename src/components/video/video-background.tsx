'use client'

import { VideoPlayer } from './video-player'
import { ReactNode } from 'react'

interface VideoBackgroundProps {
  src: string
  children?: ReactNode
  overlay?: 'light' | 'dark' | 'none'
  overlayOpacity?: number
  className?: string
  poster?: string
}

export function VideoBackground({
  src,
  children,
  overlay = 'dark',
  overlayOpacity = 0.4,
  className = '',
  poster
}: VideoBackgroundProps) {
  const overlayClasses = {
    light: 'bg-white',
    dark: 'bg-black',
    none: ''
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 视频背景 */}
      <div className="absolute inset-0">
        <VideoPlayer
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full"
        />
      </div>

      {/* 遮罩层 */}
      {overlay !== 'none' && (
        <div 
          className={`absolute inset-0 ${overlayClasses[overlay]}`}
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* 内容层 */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  )
}