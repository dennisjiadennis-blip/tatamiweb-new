'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { JapandiBlock } from '@/components/ui/japandi-block'
import { SneakersIcon, GetaSandalsIcon, SleepingFoxIcon, TatamiLabsLogo } from '@/components/ui/illustrations'
import { PageLoader, usePageLoading } from '@/components/optimization/page-loader'
import { PerformanceMonitor, PerformanceWarning } from '@/components/optimization/performance-monitor'

export default function HomePage() {
  const { isLoading, finishLoading } = usePageLoading(true)
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false)

  useEffect(() => {
    // 模拟页面内容加载完成
    const timer = setTimeout(() => {
      finishLoading()
    }, 1200)

    return () => clearTimeout(timer)
  }, [finishLoading])

  // 开发环境快捷键显示性能监控 (Ctrl/Cmd + P)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'p' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault()
          setShowPerformanceMonitor(!showPerformanceMonitor)
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [showPerformanceMonitor])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  return (
    <>
      {/* 页面加载器 */}
      <PageLoader 
        isLoading={isLoading}
        loadingText="正在加载精彩内容..."
        minLoadTime={800}
      />

      {/* 性能警告 */}
      <PerformanceWarning />

      {/* 性能监控面板 - 开发环境 */}
      {process.env.NODE_ENV === 'development' && (
        <PerformanceMonitor showMetrics={showPerformanceMonitor} />
      )}

      <div 
        className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: '#2D323A' }}
      >
        {/* 日式书法标题 - 独立浮动在左上角 */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-brush-calligraphy text-3xl md:text-6xl leading-none"
            style={{
              color: '#F5F0E8',
              fontFamily: 'Ma Shan Zheng, cursive',
              textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
              transform: 'rotate(-1.5deg)',
              filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.2))'
            }}
          >
            Tatami Labs
          </motion.h1>
        </div>

        {/* 主要的非对称拼贴布局 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="absolute inset-0 p-4 pt-20 md:p-12 md:pt-32"
        >
          <div 
            className="grid gap-3 md:gap-6 h-full max-w-7xl mx-auto"
            style={{
              gridTemplateColumns: 'repeat(12, 1fr)',
              gridTemplateRows: 'repeat(10, 1fr)'
            }}
          >
            {/* 大型横版卡片 (左上) - powder-blue */}
            <JapandiBlock 
              colorTheme="powder-blue"
              size="large-landscape"
              className="col-span-12 row-span-2 md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-3"
            >
              <div className="font-serif-elegant text-lg md:text-2xl font-light tracking-wide">
                A Story Woven with a Master
              </div>
            </JapandiBlock>

            {/* 中等横版卡片 (上中) - linen */}
            <JapandiBlock 
              colorTheme="linen"
              size="medium-landscape"
              className="col-span-6 row-span-1 md:col-start-5 md:col-end-8 md:row-start-1 md:row-end-2"
            >
              <div className="font-serif-elegant text-xl md:text-2xl font-light tracking-wide">
                Stories
              </div>
            </JapandiBlock>

            {/* 大型横版卡片 (右上) - powder-blue */}
            <JapandiBlock 
              colorTheme="powder-blue"
              size="large-landscape"
              className="col-span-6 row-span-1 md:col-start-8 md:col-end-13 md:row-start-1 md:row-end-3"
            >
              <div className="font-serif-elegant text-lg md:text-2xl font-light tracking-wide">
                The Masters Who Shape Your World
              </div>
            </JapandiBlock>

            {/* 大型竖版卡片 (左侧) - moss-green */}
            <JapandiBlock 
              colorTheme="moss-green"
              size="large-portrait"
              className="col-span-6 row-span-2 md:col-start-1 md:col-end-4 md:row-start-3 md:row-end-7"
            >
              <div className="font-serif-elegant text-xl md:text-2xl font-light tracking-wide mb-2 md:mb-4">
                My Tatami
              </div>
              <SneakersIcon size={48} className="text-current md:hidden" />
              <SneakersIcon size={72} className="text-current hidden md:block" />
            </JapandiBlock>

            {/* 大型横版卡片 (中央) - burnt-orange */}
            <JapandiBlock 
              colorTheme="burnt-orange"
              size="large-landscape"
              className="col-span-6 row-span-2 md:col-start-4 md:col-end-10 md:row-start-3 md:row-end-5"
            >
              <div className="font-serif-elegant text-xl md:text-3xl font-light tracking-wide">
                One Journey, a Lifetime of Insight
              </div>
            </JapandiBlock>

            {/* 小型竖版卡片 (中间) - burnt-orange */}
            <JapandiBlock 
              colorTheme="burnt-orange"
              size="small-portrait"
              className="col-span-4 row-span-2 md:col-start-10 md:col-end-12 md:row-start-3 md:row-end-5"
            >
              <GetaSandalsIcon size={48} className="text-current md:hidden" />
              <GetaSandalsIcon size={80} className="text-current hidden md:block" />
            </JapandiBlock>

            {/* 小型方形卡片 (右中) - moss-green */}
            <JapandiBlock 
              colorTheme="moss-green"
              size="small-square"
              className="col-span-4 row-span-1 md:col-start-8 md:col-end-10 md:row-start-5 md:row-end-6"
            >
              <SleepingFoxIcon size={32} className="text-current md:hidden" />
              <SleepingFoxIcon size={64} className="text-current hidden md:block" />
            </JapandiBlock>

            {/* 中等横版卡片 (底部) - burnt-orange */}
            <JapandiBlock 
              colorTheme="burnt-orange"
              size="medium-landscape"
              className="col-span-4 row-span-1 md:col-start-4 md:col-end-7 md:row-start-6 md:row-end-8"
            >
              <div className="font-serif-elegant text-lg md:text-2xl font-light tracking-wide">
                Join a Journey
              </div>
            </JapandiBlock>

            {/* 中等横版卡片 (右下) - linen */}
            <JapandiBlock 
              colorTheme="linen"
              size="medium-landscape"
              className="col-span-8 row-span-1 md:col-start-9 md:col-end-13 md:row-start-6 md:row-end-8"
            >
              <TatamiLabsLogo size={32} className="text-current md:hidden" />
              <TatamiLabsLogo size={48} className="text-current hidden md:block" />
            </JapandiBlock>

          </div>
        </motion.div>
      </div>
    </>
  );
}