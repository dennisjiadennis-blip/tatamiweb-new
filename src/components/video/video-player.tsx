'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  playsInline?: boolean
  onLoadedData?: () => void
  onError?: (error: string) => void
  mobileOptimized?: boolean
}

export function VideoPlayer({
  src,
  poster,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  controls = false,
  playsInline = true,
  onLoadedData,
  onError,
  mobileOptimized = true
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // 检测移动设备
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoading(false)
      onLoadedData?.()
    }

    const handleError = () => {
      setIsLoading(false)
      setHasError(true)
      onError?.('视频加载失败')
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('error', handleError)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('error', handleError)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [onLoadedData, onError])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  if (hasError) {
    return (
      <div className={`bg-gray-800 flex items-center justify-center ${className}`}>
        <div className="text-center text-white">
          <div className="text-2xl mb-2">⚠️</div>
          <div className="font-card-subtitle">视频加载失败</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {/* 加载状态 */}
      {isLoading && (
        <motion.div
          className="absolute inset-0 bg-gray-800 flex items-center justify-center z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
            <div className="font-card-subtitle">加载中...</div>
          </div>
        </motion.div>
      )}

      {/* 视频元素 */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay={mobileOptimized && isMobile ? false : autoPlay}
        muted={muted}
        loop={loop}
        controls={isMobile ? true : controls}
        playsInline={playsInline}
        poster={poster}
        preload={mobileOptimized && isMobile ? "none" : "metadata"}
        style={{ 
          maxHeight: isMobile ? '60vh' : 'none' 
        }}
      >
        <source src={src} type="video/mp4" />
        <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        您的浏览器不支持视频播放。
      </video>

      {/* 自定义播放控制按钮 */}
      {!controls && (
        <motion.button
          onClick={togglePlay}
          className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-200 flex items-center justify-center group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="bg-white/80 rounded-full p-3 group-hover:bg-white/90 transition-colors"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {isPlaying ? (
              <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </motion.div>
        </motion.button>
      )}
    </div>
  )
}