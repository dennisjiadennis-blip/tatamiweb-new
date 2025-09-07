'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TatamiLogo, ArrowIcon, QuoteIcon } from '@/components/ui/Icons';
import type { Master } from '@/types';

interface MasterDetailClientProps {
  master: Master;
}

export default function MasterDetailClient({ master }: MasterDetailClientProps) {
  const { name, field, bio, philosophy } = master.i18n.en;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Navigation */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/" className="flex items-center gap-3 text-gray-800 hover:opacity-80 transition-opacity">
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
          href="/masters"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowIcon direction="left" size={20} />
          <span className="text-small">Back</span>
        </Link>
      </motion.div>

      {/* Main Content Card */}
      <div className="flex items-center justify-center min-h-screen p-6">
        <motion.div
          className="bg-white rounded-3xl shadow-elevated max-w-5xl w-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Header */}
          <div className="p-8 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-headline text-gray-800 mb-2">MasterCard</h1>
                <p className="text-body text-gray-600">The Field</p>
              </div>
              <div className="w-12 h-8 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column - Master Info */}
              <div className="space-y-8">
                {/* Master Portrait with signature styling */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-4 border-orange-500 shadow-lg">
                    <Image
                      src={master.imageUrl}
                      alt={name}
                      fill
                      className="object-cover"
                    />
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500 rounded-bl-full opacity-20"></div>
                  </div>
                  
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                    <QuoteIcon size={20} className="text-orange-500" />
                  </div>
                </motion.div>

                {/* Master Details */}
                <motion.div
                  className="bg-gray-50 rounded-2xl p-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h2 className="text-display-md text-gray-800 mb-2">{name}</h2>
                  <p className="text-body-lg text-orange-600 font-medium mb-4">{field}</p>
                  
                  {/* Signature placeholder */}
                  <div className="w-32 h-8 bg-gray-200 rounded mb-4"></div>
                  
                  <h3 className="font-medium text-gray-700 mb-3">Biography</h3>
                  <p className="text-body text-gray-600 leading-relaxed">
                    {bio}
                  </p>
                </motion.div>
              </div>

              {/* Right Column - Master Craftsman Detail */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <QuoteIcon size={32} className="text-orange-500" />
                    <div>
                      <h2 className="text-headline text-gray-800">Master Craftsman</h2>
                      <h3 className="text-headline text-gray-800">Detail</h3>
                    </div>
                  </div>
                  
                  {/* Signature placeholder */}
                  <div className="w-48 h-12 bg-gray-100 rounded mb-8"></div>
                </motion.div>

                {/* Biography Section */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <h3 className="font-medium text-gray-700">Biography</h3>
                  
                  {/* Work images grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {master.works.map((workImage, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={workImage}
                          alt={`${name} work ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Creations Section */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h3 className="font-medium text-gray-700">Creations</h3>
                  
                  {/* Creation thumbnails */}
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                      <div key={item} className="aspect-square bg-gray-200 rounded-lg"></div>
                    ))}
                  </div>
                </motion.div>

                {/* Philosophy Section */}
                <motion.div
                  className="bg-orange-50 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <h3 className="font-medium text-orange-800 mb-4">Master's Philosophy</h3>
                  <blockquote className="text-body text-orange-700 italic leading-relaxed">
                    "{philosophy}"
                  </blockquote>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex gap-4 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <button className="btn btn-primary flex-1">
                    Book Experience
                  </button>
                  <button className="btn btn-secondary flex-1">
                    View Gallery
                  </button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 px-8 py-6">
            <p className="text-center text-small text-gray-500">
              © 2024 Tatami Labs
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}