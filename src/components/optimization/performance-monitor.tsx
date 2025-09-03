'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
  timeToInteractive: number
}

interface PerformanceMonitorProps {
  showMetrics?: boolean
  autoHide?: boolean
  hideDelay?: number
}

export function PerformanceMonitor({ 
  showMetrics = false, 
  autoHide = true,
  hideDelay = 5000 
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({})
  const [isVisible, setIsVisible] = useState(showMetrics)
  const [networkInfo, setNetworkInfo] = useState<any>(null)
  const observerRef = useRef<PerformanceObserver | null>(null)

  // 收集性能指标
  useEffect(() => {
    const collectMetrics = () => {
      // 页面加载时间
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart
        }))
      }

      // 观察性能指标
      if ('PerformanceObserver' in window) {
        // First Contentful Paint & Largest Contentful Paint
        observerRef.current = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                firstContentfulPaint: entry.startTime
              }))
            }
            if (entry.entryType === 'largest-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                largestContentfulPaint: entry.startTime
              }))
            }
            if (entry.entryType === 'first-input') {
              setMetrics(prev => ({
                ...prev,
                firstInputDelay: (entry as any).processingStart - entry.startTime
              }))
            }
            if (entry.entryType === 'layout-shift') {
              setMetrics(prev => ({
                ...prev,
                cumulativeLayoutShift: (prev.cumulativeLayoutShift || 0) + (entry as any).value
              }))
            }
          }
        })

        observerRef.current.observe({ type: 'paint', buffered: true })
        observerRef.current.observe({ type: 'largest-contentful-paint', buffered: true })
        observerRef.current.observe({ type: 'first-input', buffered: true })
        observerRef.current.observe({ type: 'layout-shift', buffered: true })
      }

      // 网络信息
      if ('connection' in navigator) {
        setNetworkInfo((navigator as any).connection)
      }
    }

    collectMetrics()

    // 自动隐藏
    if (autoHide && showMetrics) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, hideDelay)
      
      return () => clearTimeout(timer)
    }

    return () => {
      observerRef.current?.disconnect()
    }
  }, [showMetrics, autoHide, hideDelay])

  // 获取性能评级
  const getPerformanceGrade = (metric: keyof PerformanceMetrics, value: number): string => {
    const thresholds = {
      firstContentfulPaint: { good: 1800, poor: 3000 },
      largestContentfulPaint: { good: 2500, poor: 4000 },
      firstInputDelay: { good: 100, poor: 300 },
      cumulativeLayoutShift: { good: 0.1, poor: 0.25 },
      timeToInteractive: { good: 3800, poor: 7300 }
    }

    const threshold = thresholds[metric]
    if (!threshold) return 'N/A'

    if (value <= threshold.good) return 'good'
    if (value <= threshold.poor) return 'needs-improvement'
    return 'poor'
  }

  // 格式化时间
  const formatTime = (ms: number): string => {
    if (ms < 1000) return `${Math.round(ms)}ms`
    return `${(ms / 1000).toFixed(2)}s`
  }

  // 格式化文件大小
  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // 获取网络状态图标
  const getConnectionIcon = (effectiveType: string) => {
    const icons = {
      'slow-2g': '📶',
      '2g': '📶',
      '3g': '📶',
      '4g': '📶'
    }
    return icons[effectiveType as keyof typeof icons] || '📶'
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded-full shadow-lg hover:bg-black/90 transition-colors z-40"
        title="显示性能监控"
      >
        📊
      </button>
    )
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl border p-4 w-80 max-h-96 overflow-y-auto z-40"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-card-subtitle text-lg flex items-center">
              📊 性能监控
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Core Web Vitals */}
          <div className="space-y-3">
            <div className="border-b pb-2">
              <h4 className="font-medium text-sm text-gray-700 mb-2">Core Web Vitals</h4>
              
              {metrics.firstContentfulPaint && (
                <div className="flex justify-between text-sm">
                  <span>FCP</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    getPerformanceGrade('firstContentfulPaint', metrics.firstContentfulPaint) === 'good' 
                      ? 'bg-green-100 text-green-800' 
                      : getPerformanceGrade('firstContentfulPaint', metrics.firstContentfulPaint) === 'needs-improvement'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {formatTime(metrics.firstContentfulPaint)}
                  </span>
                </div>
              )}

              {metrics.largestContentfulPaint && (
                <div className="flex justify-between text-sm mt-1">
                  <span>LCP</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    getPerformanceGrade('largestContentfulPaint', metrics.largestContentfulPaint) === 'good' 
                      ? 'bg-green-100 text-green-800' 
                      : getPerformanceGrade('largestContentfulPaint', metrics.largestContentfulPaint) === 'needs-improvement'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {formatTime(metrics.largestContentfulPaint)}
                  </span>
                </div>
              )}

              {metrics.firstInputDelay !== undefined && (
                <div className="flex justify-between text-sm mt-1">
                  <span>FID</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    getPerformanceGrade('firstInputDelay', metrics.firstInputDelay) === 'good' 
                      ? 'bg-green-100 text-green-800' 
                      : getPerformanceGrade('firstInputDelay', metrics.firstInputDelay) === 'needs-improvement'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {formatTime(metrics.firstInputDelay)}
                  </span>
                </div>
              )}

              {metrics.cumulativeLayoutShift !== undefined && (
                <div className="flex justify-between text-sm mt-1">
                  <span>CLS</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    getPerformanceGrade('cumulativeLayoutShift', metrics.cumulativeLayoutShift) === 'good' 
                      ? 'bg-green-100 text-green-800' 
                      : getPerformanceGrade('cumulativeLayoutShift', metrics.cumulativeLayoutShift) === 'needs-improvement'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {metrics.cumulativeLayoutShift.toFixed(3)}
                  </span>
                </div>
              )}
            </div>

            {/* 网络信息 */}
            {networkInfo && (
              <div className="border-b pb-2">
                <h4 className="font-medium text-sm text-gray-700 mb-2">网络状态</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>连接类型</span>
                    <span className="flex items-center">
                      {getConnectionIcon(networkInfo.effectiveType)}
                      <span className="ml-1">{networkInfo.effectiveType?.toUpperCase()}</span>
                    </span>
                  </div>
                  {networkInfo.downlink && (
                    <div className="flex justify-between">
                      <span>下载速度</span>
                      <span>{networkInfo.downlink} Mbps</span>
                    </div>
                  )}
                  {networkInfo.rtt && (
                    <div className="flex justify-between">
                      <span>延迟</span>
                      <span>{networkInfo.rtt}ms</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 内存使用情况 */}
            {(performance as any).memory && (
              <div>
                <h4 className="font-medium text-sm text-gray-700 mb-2">内存使用</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>已用内存</span>
                    <span>{formatBytes((performance as any).memory.usedJSHeapSize)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>总内存</span>
                    <span>{formatBytes((performance as any).memory.totalJSHeapSize)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>内存限制</span>
                    <span>{formatBytes((performance as any).memory.jsHeapSizeLimit)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* 操作按钮 */}
            <div className="pt-2 border-t">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded text-sm transition-colors"
              >
                重新加载页面
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// 性能警告组件
export function PerformanceWarning() {
  const [warnings, setWarnings] = useState<string[]>([])
  const [showWarnings, setShowWarnings] = useState(false)

  useEffect(() => {
    const checkPerformance = () => {
      const newWarnings: string[] = []

      // 检查网络条件
      if ('connection' in navigator) {
        const connection = (navigator as any).connection
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          newWarnings.push('网络连接较慢，建议在WiFi环境下使用')
        }
      }

      // 检查内存使用
      if ((performance as any).memory) {
        const memory = (performance as any).memory
        const memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit
        if (memoryUsage > 0.8) {
          newWarnings.push('内存使用较高，可能影响页面性能')
        }
      }

      // 检查设备性能
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        newWarnings.push('设备性能较低，某些功能可能运行缓慢')
      }

      setWarnings(newWarnings)
      setShowWarnings(newWarnings.length > 0)
    }

    checkPerformance()
  }, [])

  if (!showWarnings || warnings.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 left-4 right-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow-lg z-50 max-w-md mx-auto"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-yellow-800">性能提示</h3>
          <div className="mt-1 text-sm text-yellow-700">
            <ul className="list-disc list-inside space-y-1">
              {warnings.map((warning, index) => (
                <li key={index}>{warning}</li>
              ))}
            </ul>
          </div>
        </div>
        <button
          onClick={() => setShowWarnings(false)}
          className="ml-3 text-yellow-400 hover:text-yellow-500"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </motion.div>
  )
}