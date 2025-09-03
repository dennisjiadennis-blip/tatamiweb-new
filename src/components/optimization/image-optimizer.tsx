'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState<string>('')
  const imgRef = useRef<HTMLImageElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // 生成优化的图片URL
  const generateOptimizedSrc = (originalSrc: string, targetWidth?: number, targetQuality?: number) => {
    // 这里可以集成图片CDN服务，如Cloudinary, ImageKit等
    // 现在先返回原始URL
    return originalSrc
  }

  // 检测设备像素密度和网络条件
  const getOptimalImageSrc = () => {
    const devicePixelRatio = window.devicePixelRatio || 1
    const connection = (navigator as any).connection
    
    let targetWidth = width
    let targetQuality = quality

    // 根据设备像素密度调整
    if (targetWidth) {
      targetWidth = Math.round(targetWidth * devicePixelRatio)
    }

    // 根据网络条件调整质量
    if (connection) {
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        targetQuality = Math.min(quality, 60)
        if (targetWidth) targetWidth = Math.round(targetWidth * 0.7)
      } else if (connection.effectiveType === '3g') {
        targetQuality = Math.min(quality, 75)
        if (targetWidth) targetWidth = Math.round(targetWidth * 0.85)
      }
    }

    return generateOptimizedSrc(src, targetWidth, targetQuality)
  }

  // 懒加载逻辑
  useEffect(() => {
    if (priority) {
      setCurrentSrc(getOptimalImageSrc())
      return
    }

    if (imgRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentSrc(getOptimalImageSrc())
            observerRef.current?.disconnect()
          }
        },
        {
          rootMargin: '50px' // 提前50px开始加载
        }
      )

      observerRef.current.observe(imgRef.current)
    }

    return () => {
      observerRef.current?.disconnect()
    }
  }, [src, priority, width, quality])

  const handleLoad = () => {
    setIsLoaded(true)
    setIsError(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsError(true)
    setIsLoaded(false)
    onError?.()
  }

  // 生成模糊占位符
  const generateBlurPlaceholder = () => {
    if (blurDataURL) return blurDataURL
    
    // 生成简单的颜色占位符
    const canvas = document.createElement('canvas')
    canvas.width = 10
    canvas.height = 10
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.fillStyle = '#f3f4f6'
      ctx.fillRect(0, 0, 10, 10)
      return canvas.toDataURL()
    }
    return undefined
  }

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* 占位符 */}
      {!isLoaded && placeholder === 'blur' && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            backgroundImage: generateBlurPlaceholder() ? `url(${generateBlurPlaceholder()})` : undefined,
            backgroundSize: 'cover',
            filter: 'blur(5px)'
          }}
        />
      )}

      {!isLoaded && placeholder === 'empty' && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4h16v12l-4-4-4 4-4-4-4 4V4z"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
          </svg>
        </div>
      )}

      {/* 实际图片 */}
      {currentSrc && (
        <motion.img
          ref={imgRef}
          src={currentSrc}
          alt={alt}
          className={`object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ width: '100%', height: '100%' }}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* 错误状态 */}
      {isError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <p className="text-sm">图片加载失败</p>
          </div>
        </div>
      )}

      {/* 加载指示器 */}
      {currentSrc && !isLoaded && !isError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}

// 图片画廊组件
interface ImageGalleryProps {
  images: Array<{
    src: string
    alt: string
    caption?: string
  }>
  columns?: number
  gap?: number
  className?: string
}

export function OptimizedImageGallery({ 
  images, 
  columns = 3, 
  gap = 4,
  className = "" 
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <div 
        className={`grid gap-${gap} ${className}`}
        style={{ 
          gridTemplateColumns: `repeat(${columns}, 1fr)` 
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedImage(index)}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              className="w-full aspect-square rounded-lg"
              placeholder="blur"
            />
            {image.caption && (
              <p className="text-sm text-gray-600 mt-2 text-center">
                {image.caption}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* 全屏查看模态框 */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <OptimizedImage
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-full object-contain rounded-lg"
              priority
            />
            
            {/* 关闭按钮 */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* 导航箭头 */}
            {selectedImage > 0 && (
              <button
                onClick={() => setSelectedImage(selectedImage - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {selectedImage < images.length - 1 && (
              <button
                onClick={() => setSelectedImage(selectedImage + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* 图片信息 */}
            {images[selectedImage].caption && (
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
                <p className="text-sm">{images[selectedImage].caption}</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </>
  )
}