'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EnhancedVideoPlayer } from './enhanced-video-player'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface VideoItem {
  id: string
  title: string
  description: string
  src: string
  poster?: string
  duration?: string
  masterId?: string
  master?: {
    name: string
    specialty: string
  }
}

interface VideoPlaylistProps {
  videos: VideoItem[]
  autoplay?: boolean
  showMasterInfo?: boolean
  className?: string
}

export function VideoPlaylist({ 
  videos, 
  autoplay = false, 
  showMasterInfo = true,
  className = "" 
}: VideoPlaylistProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoplay)
  const [showPlaylist, setShowPlaylist] = useState(false)
  
  const currentVideo = videos[currentVideoIndex]

  // 播放下一个视频
  const playNext = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1)
    } else {
      setCurrentVideoIndex(0) // 循环播放
    }
  }

  // 播放上一个视频
  const playPrevious = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1)
    } else {
      setCurrentVideoIndex(videos.length - 1) // 循环到最后一个
    }
  }

  // 播放指定视频
  const playVideo = (index: number) => {
    setCurrentVideoIndex(index)
    setShowPlaylist(false)
  }

  // 格式化视频时长
  const formatDuration = (duration?: string) => {
    if (!duration) return '未知'
    return duration
  }

  if (!currentVideo) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <p className="text-gray-500">没有可播放的视频</p>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* 主视频播放器 */}
        <div className="lg:col-span-3">
          <div className="relative">
            <EnhancedVideoPlayer
              src={currentVideo.src}
              title={currentVideo.title}
              description={currentVideo.description}
              masterId={currentVideo.masterId}
              videoId={currentVideo.id}
              className="w-full aspect-video"
            />
            
            {/* 视频信息覆盖层 */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pointer-events-none">
              <h2 className="text-white font-card-headline text-xl mb-2">
                {currentVideo.title}
              </h2>
              {showMasterInfo && currentVideo.master && (
                <div className="flex items-center text-white/80 text-sm">
                  <span className="mr-2">👨‍🎨</span>
                  <span>{currentVideo.master.name}</span>
                  <span className="mx-2">•</span>
                  <span>{currentVideo.master.specialty}</span>
                </div>
              )}
            </div>

            {/* 播放列表切换按钮 */}
            <button
              onClick={() => setShowPlaylist(!showPlaylist)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-2 rounded-lg transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* 视频控制按钮 */}
          <div className="flex items-center justify-between mt-4">
            <Button
              onClick={playPrevious}
              disabled={videos.length <= 1}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
              </svg>
              <span>上一个</span>
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {currentVideoIndex + 1} / {videos.length}
              </p>
              <p className="text-xs text-gray-500">
                时长: {formatDuration(currentVideo.duration)}
              </p>
            </div>

            <Button
              onClick={playNext}
              disabled={videos.length <= 1}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <span>下一个</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
              </svg>
            </Button>
          </div>

          {/* 当前视频描述 */}
          {currentVideo.description && (
            <Card className="mt-4 p-4">
              <h3 className="font-card-subtitle text-lg mb-2">视频简介</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {currentVideo.description}
              </p>
            </Card>
          )}
        </div>

        {/* 播放列表侧边栏 */}
        <div className="lg:col-span-1">
          <Card className="p-4 sticky top-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-card-subtitle text-lg">播放列表</h3>
              <span className="text-sm text-gray-500">
                {videos.length} 个视频
              </span>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
              {videos.map((video, index) => (
                <motion.button
                  key={video.id}
                  onClick={() => playVideo(index)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    index === currentVideoIndex
                      ? 'bg-orange-100 border-2 border-orange-300'
                      : 'hover:bg-gray-50 border-2 border-transparent'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-3">
                    {/* 视频缩略图或播放图标 */}
                    <div className="flex-shrink-0 w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                      {video.poster ? (
                        <img 
                          src={video.poster} 
                          alt={video.title}
                          className="w-full h-full object-cover rounded"
                        />
                      ) : (
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className={`font-medium text-sm leading-tight truncate ${
                        index === currentVideoIndex ? 'text-orange-700' : 'text-gray-900'
                      }`}>
                        {video.title}
                      </h4>
                      
                      {showMasterInfo && video.master && (
                        <p className="text-xs text-gray-500 mt-1 truncate">
                          {video.master.name}
                        </p>
                      )}
                      
                      {video.duration && (
                        <p className="text-xs text-gray-400 mt-1">
                          {video.duration}
                        </p>
                      )}
                    </div>

                    {/* 当前播放指示器 */}
                    {index === currentVideoIndex && (
                      <div className="flex-shrink-0">
                        <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* 播放列表操作 */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    const shuffled = [...videos].sort(() => Math.random() - 0.5)
                    // 这里可以实现随机播放逻辑
                  }}
                >
                  🔀 随机
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    // 这里可以实现循环播放逻辑
                  }}
                >
                  🔄 循环
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* 移动端播放列表覆盖层 */}
      <AnimatePresence>
        {showPlaylist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setShowPlaylist(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-card-subtitle text-lg">播放列表</h3>
                  <button
                    onClick={() => setShowPlaylist(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-3">
                  {videos.map((video, index) => (
                    <button
                      key={video.id}
                      onClick={() => playVideo(index)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        index === currentVideoIndex
                          ? 'bg-orange-100 border border-orange-300'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-16 h-10 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                          {video.poster ? (
                            <img 
                              src={video.poster} 
                              alt={video.title}
                              className="w-full h-full object-cover rounded"
                            />
                          ) : (
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-medium text-sm ${
                            index === currentVideoIndex ? 'text-orange-700' : 'text-gray-900'
                          }`}>
                            {video.title}
                          </h4>
                          {video.master && (
                            <p className="text-xs text-gray-500 mt-1">
                              {video.master.name} • {video.duration || '未知时长'}
                            </p>
                          )}
                        </div>
                        {index === currentVideoIndex && (
                          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}