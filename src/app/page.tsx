'use client'

import { motion } from 'framer-motion'
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
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex items-center gap-3 text-white">
          <TatamiLogo size={24} className="opacity-90" />
          <span className="text-lg font-medium tracking-wide">
            Tatami Labs
          </span>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="mosaic-container pt-20">
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

          {/* BocSot Moss Shape - Large Middle Card */}
          <motion.div 
            className="card-feature"
            variants={cardVariants}
          >
            <MosaicCard
              size="xl"
              color="sage"
              title="BocSot Moss Shape"
              tag="#2D2D2b"
              hasPattern
            />
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

          {/* Tatami Labs Brand - Medium */}
          <motion.div 
            className="card-md"
            variants={cardVariants}
          >
            <MosaicCard
              size="md"
              color="beige"
              title="TATAMI LABS"
            >
              <div className="mt-3 flex gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="w-4 h-4 bg-sage-500 rounded-full"></div>
              </div>
            </MosaicCard>
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