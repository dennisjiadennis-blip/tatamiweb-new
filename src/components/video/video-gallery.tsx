'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { VideoPlayer } from './video-player'
import { Card } from '@/components/ui/card'

interface VideoItem {
  id: string
  src: string
  title: string
  description: string
  poster?: string
  duration?: string
}

interface VideoGalleryProps {
  videos: VideoItem[]
  className?: string
}

export function VideoGallery({ videos, className = '' }: VideoGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)

  return (
    <div className={className}>
      {/* 视频网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card
            key={video.id}
            backgroundColor="blue"
            className="cursor-pointer overflow-hidden"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="aspect-video mb-4 relative">
              <VideoPlayer
                src={video.src}
                poster={video.poster}
                className="rounded-lg"
                controls={false}
              />
              {/* 播放按钮覆盖层 */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="bg-white rounded-full p-3">
                  <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              {/* 时长标签 */}
              {video.duration && (
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              )}
            </div>
            <h3 className="font-card-headline text-lg mb-2">
              {video.title}
            </h3>
            <p className="font-card-subtitle text-slate-700 text-sm">
              {video.description}
            </p>
          </Card>
        ))}
      </div>

      {/* 模态播放器 */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="bg-white rounded-lg overflow-hidden max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 视频播放区域 */}
              <div className="aspect-video">
                <VideoPlayer
                  src={selectedVideo.src}
                  poster={selectedVideo.poster}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              </div>
              
              {/* 视频信息 */}
              <div className="p-6">
                <h2 className="font-card-headline text-xl mb-2">
                  {selectedVideo.title}
                </h2>
                <p className="font-card-subtitle text-gray-600">
                  {selectedVideo.description}
                </p>
              </div>

              {/* 关闭按钮 */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}