'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { TatamiLogo, ArrowIcon } from '@/components/ui/Icons'
import { getMasters } from '@/lib/data'

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

const masterCardColors = ['sage', 'beige', 'terracotta', 'slate', 'cream'] as const

export default function MastersPage() {
  const masters = getMasters()

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      {/* Navigation */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
          <TatamiLogo size={32} />
          <span className="font-display text-xl font-medium tracking-wide">
            Tatami Labs
          </span>
        </Link>
      </motion.div>

      <motion.div
        className="fixed top-6 right-6 z-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-white opacity-70 hover:opacity-100 transition-opacity"
        >
          <ArrowIcon direction="left" size={20} />
          <span className="text-small">Back</span>
        </Link>
      </motion.div>

      {/* Page Title */}
      <div className="text-center pt-24 pb-8">
        <motion.h1
          className="text-display-lg text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The Masters
        </motion.h1>
        <motion.p
          className="text-body-lg text-white opacity-70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover Japan&apos;s living treasures—artisans who carry centuries of tradition in their hands
        </motion.p>
      </div>

      {/* Masters Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {masters.map((master, index) => {
            const { name, field } = master.i18n.en
            const colorIndex = index % masterCardColors.length
            const cardColor = masterCardColors[colorIndex]

            return (
              <motion.div
                key={master.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/masters/${master.slug}`}>
                  <div className={`
                    tatami-card card-${cardColor} 
                    h-80 cursor-pointer group
                    border-2 border-transparent hover:border-white/20
                    transition-all duration-300
                  `}>
                    {/* Master Portrait */}
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 mx-auto">
                      <Image
                        src={master.imageUrl}
                        alt={name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>

                    {/* Master Info */}
                    <div className="text-center">
                      <h3 className="font-card-headline text-lg mb-2">
                        {name}
                      </h3>
                      <p className="text-caption mb-4 opacity-70">
                        {field}
                      </p>
                      
                      {/* Decorative element */}
                      <div className="w-8 h-1 bg-current opacity-30 mx-auto mb-4"></div>
                      
                      <button className="text-small font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                        Discover Their Art
                      </button>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity">
                      <ArrowIcon size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Footer Section */}
        <motion.div
          className="text-center mt-16 pb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-small opacity-50 text-white mb-8">
            © 2025 Tatami Labs · Where Tradition Meets Innovation
          </p>
        </motion.div>
      </div>
    </main>
  )
}