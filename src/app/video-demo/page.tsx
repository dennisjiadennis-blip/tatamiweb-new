'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CardMosaicContainer } from '@/components/ui/page-transition'
import { VideoBackground } from '@/components/video/video-background'
import { VideoGallery } from '@/components/video/video-gallery'
import { VideoPlaylist } from '@/components/video/video-playlist'
import { EnhancedVideoPlayer } from '@/components/video/enhanced-video-player'
import { PageLoader, usePageLoading } from '@/components/optimization/page-loader'
import { motion } from 'framer-motion'

// Enhanced video data with playlist functionality
const demoVideos = [
  {
    id: 'video-1',
    title: 'Master Sake Brewer - Hiroki Sato\'s Craft Journey',
    description: 'Follow Master Hiroki Sato as he reveals the essence of traditional Japanese sake brewing, from rice selection to fermentation. Each step embodies decades of wisdom and experience.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: '/images/Gemini_Generated_Image_pcmj4ppcmj4ppcmj.png',
    duration: '30:45',
    masterId: 'hiroki-sato',
    master: {
      name: 'Hiroki Sato',
      specialty: 'Sake Brewing'
    }
  },
  {
    id: 'video-2',
    title: 'Geisha Arts - Chiyo\'s World of Beauty',
    description: 'Enter the serene world of traditional Japanese arts with Master Chiyo. More than technique, it\'s a philosophy of life expressed through dance, tea ceremony, and shamisen.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    poster: '/images/Gemini_Generated_Image_e27vtie27vtie27v.png',
    duration: '25:20',
    masterId: 'chiyo',
    master: {
      name: 'Chiyo',
      specialty: 'Traditional Arts'
    }
  },
  {
    id: 'video-3',
    title: 'Nambu Ironware - Ancient Craft, Modern Legacy',
    description: 'Watch Master Kenzo Tanaka forge ironware using techniques passed down for centuries. Witness how thousand-year-old craftsmanship meets contemporary design.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: '/images/Gemini_Generated_Image_q1uu34q1uu34q1uu.png',
    duration: '18:30',
    masterId: 'kenzo-tanaka',
    master: {
      name: 'Kenzo Tanaka',
      specialty: 'Ironware Crafting'
    }
  }
]

export default function VideoDemoPage() {
  const { isLoading, finishLoading } = usePageLoading(true)
  const [selectedDemo, setSelectedDemo] = useState<'enhanced' | 'playlist' | 'gallery'>('playlist')

  useEffect(() => {
    const timer = setTimeout(() => {
      finishLoading()
    }, 1000)
    return () => clearTimeout(timer)
  }, [finishLoading])

  return (
    <>
      <PageLoader 
        isLoading={isLoading}
        loadingText="Loading video content..."
        minLoadTime={600}
      />
      
      <div className="min-h-screen">
      {/* Video background hero section */}
      <VideoBackground
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        overlay="dark"
        overlayOpacity={0.5}
        className="h-screen"
        poster="/images/Gemini_Generated_Image_78uzdf78uzdf78uz.png"
      >
        <div className="h-full flex items-center justify-center p-4">
          <div className="text-center max-w-4xl">
            <h1 className="font-brand-title mb-6">
              Artisan Stories
            </h1>
            <Card backgroundColor="offwhite" className="inline-block">
              <p className="font-card-subtitle text-xl text-gray-700">
                Step into the world of Japan&apos;s master artisans through immersive storytelling
              </p>
            </Card>
          </div>
        </div>
      </VideoBackground>

      {/* Content Area */}
      <div className="p-4 md:p-8">
        <CardMosaicContainer className="max-w-7xl mx-auto">
          
          {/* Introduction card */}
          <Card backgroundColor="blue" className="mb-8 text-center">
            <h2 className="font-card-headline mb-4">
              Immersive Video Experience
            </h2>
            <p className="font-card-subtitle text-slate-700">
              Each video is a window, bringing you close to feel the dedication and passion of Japanese craftsmen.
              From the potter&apos;s wheel to the tea master&apos;s every gesture, each carries profound cultural significance.
            </p>
          </Card>

          {/* Video demo mode selection */}
          <Card backgroundColor="offwhite" className="mb-8 text-center">
            <h2 className="font-card-headline mb-6">Choose Your Experience</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => setSelectedDemo('playlist')}
                className={`px-6 py-3 font-card-subtitle transition-all ${
                  selectedDemo === 'playlist'
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
📋 Playlist
              </Button>
              <Button
                onClick={() => setSelectedDemo('enhanced')}
                className={`px-6 py-3 font-card-subtitle transition-all ${
                  selectedDemo === 'enhanced'
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
🎬 Enhanced Player
              </Button>
              <Button
                onClick={() => setSelectedDemo('gallery')}
                className={`px-6 py-3 font-card-subtitle transition-all ${
                  selectedDemo === 'gallery'
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
🖼️ Video Gallery
              </Button>
            </div>
          </Card>

          {/* Dynamic video display area */}
          <motion.div
            key={selectedDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {selectedDemo === 'playlist' && (
              <Card backgroundColor="white" className="mb-8">
                <div className="text-center mb-6">
                  <h3 className="font-card-headline text-xl mb-2">Playlist Demo</h3>
                  <p className="text-gray-600">Supports continuous playback, comment interaction, and bookmark management</p>
                </div>
                <VideoPlaylist 
                  videos={demoVideos}
                  autoplay={false}
                  showMasterInfo={true}
                />
              </Card>
            )}

            {selectedDemo === 'enhanced' && (
              <Card backgroundColor="white" className="mb-8">
                <div className="text-center mb-6">
                  <h3 className="font-card-headline text-xl mb-2">Enhanced Video Player</h3>
                  <p className="text-gray-600">Supports comments, bookmarks, sharing and social features</p>
                </div>
                <EnhancedVideoPlayer
                  src={demoVideos[0].src}
                  title={demoVideos[0].title}
                  description={demoVideos[0].description}
                  masterId={demoVideos[0].masterId}
                  videoId={demoVideos[0].id}
                  className="w-full aspect-video rounded-lg"
                />
              </Card>
            )}

            {selectedDemo === 'gallery' && (
              <Card backgroundColor="white" className="mb-8">
                <div className="text-center mb-6">
                  <h3 className="font-card-headline text-xl mb-2">Video Gallery</h3>
                  <p className="text-gray-600">Browse mode, quick preview and video selection</p>
                </div>
                <VideoGallery videos={demoVideos} />
              </Card>
            )}
          </motion.div>

          {/* Experience invitation */}
          <Card backgroundColor="green" className="mt-12 text-center">
            <h2 className="font-card-headline mb-6">
              This is Just the Beginning
            </h2>
            <p className="font-card-subtitle text-slate-100 mb-6">
              The real experience is far more profound than any video. Join us for face-to-face encounters with master artisans.
            </p>
            <div className="space-x-4">
              <button 
                onClick={() => window.location.href = '/masters'}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Explore Masters
              </button>
              <button 
                onClick={() => window.location.href = '/auth'}
                className="bg-white hover:bg-gray-100 text-green-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Join Now
              </button>
            </div>
          </Card>

        </CardMosaicContainer>
      </div>
      </div>
    </>
  )
}