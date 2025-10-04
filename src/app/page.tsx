'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import MosaicCard from '@/components/ui/MosaicCard'
import { ShoeIcon, FoxIcon, HatIcon, BookIcon, TatamiLogo } from '@/components/ui/Icons'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      {/* Brand Logo - Top Left */}
      <motion.div
        className="fixed top-8 left-8 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex items-center gap-6 text-white">
          <TatamiLogo size={48} className="opacity-90" />
          <span className="font-black tracking-tight" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '900', fontSize: '6.75rem' }}>
            Tatami Labs
          </span>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="mosaic-container pt-36">
        <motion.div
          className="mosaic-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Row 1: Main Hero Cards */}
          
          {/* Stories of Mastery - Large Left Card (matches reference) */}
          <motion.div 
            className="card-hero"
            variants={cardVariants}
          >
            <MosaicCard
              size="lg"
              color="beige"
              title="A Story Woven with a Master"
              description="Stories"
              tag="#5F5FE8"
              hasPattern
              href="/masters"
            />
          </motion.div>

          {/* Tatami Labs Logo - Large Middle Card */}
          <motion.div 
            className="card-feature"
            variants={cardVariants}
          >
            <MosaicCard
              size="xl"
              color="beige"
              title="Tatami Labs"
              hasPattern
            >
              <div className="flex justify-center items-center mb-4">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <Image
                    src="/images/tatami-labs-logo.svg"
                    alt="Tatami Labs Logo"
                    width={128}
                    height={128}
                    className="object-contain"
                    style={{
                      filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.1))'
                    }}
                  />
                </div>
              </div>
            </MosaicCard>
          </motion.div>

          {/* Fox Icon Card - Small Top Right */}
          <motion.div 
            className="card-sm"
            variants={cardVariants}
          >
            <MosaicCard
              size="sm"
              color="sage"
              icon={<FoxIcon size={28} />}
              hasPattern
            />
          </motion.div>

          {/* Row 2: Journey Experience */}
          
          {/* The Masters Who Shape Your World - Small Left */}
          <motion.div 
            className="card-sm"
            variants={cardVariants}
          >
            <MosaicCard
              size="sm"
              color="sage"
              title="The Masters Who Shape Your World"
              tag="#7A8A6B"
              href="/masters"
            />
          </motion.div>

          {/* Journey Into Mastery - Large Center Feature */}
          <motion.div 
            className="card-feature"
            variants={cardVariants}
          >
            <MosaicCard
              size="xl"
              color="terracotta"
              title="One Journey, a Lifetime of Insight"
              subtitle="Watari Ochre"
              href="/video-demo"
            >
              <div className="mt-4">
                <motion.button 
                  className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Stories
                </motion.button>
              </div>
            </MosaicCard>
          </motion.div>

          {/* My Tatami - Small Right */}
          <motion.div 
            className="card-sm"
            variants={cardVariants}
          >
            <MosaicCard
              size="sm"
              color="sage"
              title="My Tatami"
              tag="#D9C9B3"
              icon={<ShoeIcon size={24} />}
              href="/auth"
            />
          </motion.div>

          {/* Row 3: Community and Stories */}
          
          {/* Stories - Small */}
          <motion.div 
            className="card-sm"
            variants={cardVariants}
          >
            <MosaicCard
              size="sm"
              color="sage"
              title="Stories"
              icon={<ShoeIcon size={32} />}
              href="/video-demo"
            />
          </motion.div>

          {/* Begin Your Journey - Medium */}
          <motion.div 
            className="card-md"
            variants={cardVariants}
          >
            <MosaicCard
              size="md"
              color="terracotta"
              title="Join a Journey"
              tag="#2DDD2D"
              href="/auth"
            />
          </motion.div>

          {/* Fox Spirit - Small */}
          <motion.div 
            className="card-sm"
            variants={cardVariants}
          >
            <MosaicCard
              size="sm"
              color="beige"
              icon={<FoxIcon size={24} />}
            />
          </motion.div>

          {/* Business Plan - Medium */}
          <motion.div 
            className="card-md"
            variants={cardVariants}
          >
            <MosaicCard
              size="md"
              color="beige"
              title="Business Plan"
              subtitle="24-Month Financial Model"
              href="/business-plan"
            >
              <div className="mt-3 flex gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="w-4 h-4 bg-sage-500 rounded-full"></div>
              </div>
            </MosaicCard>
          </motion.div>
          
          {/* 12M Financial Forecast - Small */}
          <motion.div 
            className="card-sm"
            variants={cardVariants}
          >
            <MosaicCard
              size="sm"
              color="terracotta"
              title="12个月财务预测"
              subtitle="更新模型"
              href="/financial-forecast-12m"
            />
          </motion.div>

          {/* Funding Calculation - Small */}
          <motion.div 
            className="card-sm"
            variants={cardVariants}
          >
            <MosaicCard
              size="sm"
              color="sage"
              title="融资需求计算"
              subtitle="修正后模型"
              href="/funding-calculation"
            />
          </motion.div>

          {/* Product Selection Tool - Small */}
          <motion.div 
            className="card-sm"
            variants={cardVariants}
          >
            <MosaicCard
              size="sm"
              color="terracotta"
              title="智能选品推荐"
              subtitle="基于消费者画像"
              href="/tatami-demographic-selector.html"
            />
          </motion.div>

          {/* Real-time Instagram Tool - Small */}
          <motion.div 
            className="card-sm"
            variants={cardVariants}
          >
            <MosaicCard
              size="sm"
              color="sage"
              title="实时热门选品"
              subtitle="Instagram数据驱动"
              href="/tatami-realtime-selector.html"
            />
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-12 pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <p className="text-sm opacity-40 text-white">
            © 2025 Tatami Labs · Where Tradition Meets Innovation
          </p>
        </motion.div>
      </div>
    </main>
  )
}