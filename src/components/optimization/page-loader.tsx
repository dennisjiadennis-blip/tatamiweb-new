'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PageLoaderProps {
  isLoading?: boolean
  loadingText?: string
  minLoadTime?: number // 最小显示时间（毫秒）
  onLoadComplete?: () => void
}

export function PageLoader({ 
  isLoading = true, 
  loadingText = "加载中...",
  minLoadTime = 800,
  onLoadComplete
}: PageLoaderProps) {
  const [showLoader, setShowLoader] = useState(isLoading)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      setShowLoader(true)
      setProgress(0)
      
      // 模拟进度条
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + Math.random() * 15
        })
      }, 100)

      return () => clearInterval(progressInterval)
    } else {
      // 完成加载动画
      setProgress(100)
      
      setTimeout(() => {
        setShowLoader(false)
        onLoadComplete?.()
      }, Math.max(minLoadTime, 300))
    }
  }, [isLoading, minLoadTime, onLoadComplete])

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 flex items-center justify-center z-50"
        >
          <div className="text-center">
            {/* 主要加载动画 */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                {/* 外圈旋转 */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 border-4 border-transparent border-t-orange-400 border-r-orange-400 rounded-full"
                />
                
                {/* 内圈反向旋转 */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-2 border-2 border-transparent border-b-white border-l-white rounded-full"
                />
                
                {/* 中心logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                  >
                    <span className="text-slate-900 font-bold text-lg">T</span>
                  </motion.div>
                </div>
              </div>

              {/* 品牌名称 */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-card-headline text-3xl text-white mb-2 tracking-wider"
              >
                TATAMI LABS
              </motion.h1>
              
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-orange-200 font-card-subtitle"
              >
                匠心传承 · 文化桥梁
              </motion.p>
            </motion.div>

            {/* 进度条 */}
            <div className="w-64 mx-auto mb-4">
              <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
                />
              </div>
              
              <motion.p
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-white/70 text-sm mt-3 font-card-subtitle"
              >
                {loadingText}
              </motion.p>
            </div>

            {/* 装饰元素 */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
                    y: typeof window !== 'undefined' ? window.innerHeight + 100 : 800,
                    opacity: 0 
                  }}
                  animate={{ 
                    y: -100,
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{ 
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                  className="absolute w-2 h-2 bg-white rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// 简化版本的页面加载器
export function SimpleLoader({ text = "加载中..." }: { text?: string }) {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600 font-card-subtitle">{text}</p>
      </div>
    </div>
  )
}

// 骨架屏加载器
export function SkeletonLoader() {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-200 rounded-lg p-4">
            <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-2/3"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 内容加载状态管理 Hook
export function usePageLoading(initialLoading = true) {
  const [isLoading, setIsLoading] = useState(initialLoading)
  const [error, setError] = useState<string | null>(null)

  const startLoading = () => {
    setIsLoading(true)
    setError(null)
  }

  const finishLoading = () => {
    setIsLoading(false)
  }

  const setLoadingError = (errorMessage: string) => {
    setIsLoading(false)
    setError(errorMessage)
  }

  return {
    isLoading,
    error,
    startLoading,
    finishLoading,
    setLoadingError
  }
}