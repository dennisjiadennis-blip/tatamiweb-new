'use client'

import { useState, useRef, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface VideoComment {
  id: string
  content: string
  timestamp: number
  createdAt: string
  user: {
    id: string
    name: string
    email: string
  }
}

interface EnhancedVideoPlayerProps {
  src: string
  title?: string
  description?: string
  masterId?: string
  videoId?: string
  className?: string
}

export function EnhancedVideoPlayer({
  src,
  title = "视频",
  description,
  masterId,
  videoId,
  className = ""
}: EnhancedVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { data: session } = useSession()
  
  // 播放器状态
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  
  // 交互功能状态
  const [isFavorited, setIsFavorited] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState<VideoComment[]>([])
  const [newComment, setNewComment] = useState('')
  const [showShareModal, setShowShareModal] = useState(false)
  
  // 视频播放控制
  const togglePlay = () => {
    if (!videoRef.current) return
    
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    setCurrentTime(videoRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return
    setDuration(videoRef.current.duration)
    setIsLoading(false)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return
    const time = parseFloat(e.target.value)
    videoRef.current.currentTime = time
    setCurrentTime(time)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const toggleFullscreen = () => {
    if (!videoRef.current) return
    
    if (!isFullscreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  // 收藏功能
  const toggleFavorite = async () => {
    if (!session || !videoId) return
    
    try {
      const response = await fetch(`/api/videos/${videoId}/favorite`, {
        method: isFavorited ? 'DELETE' : 'POST'
      })
      
      if (response.ok) {
        setIsFavorited(!isFavorited)
      }
    } catch (error) {
      console.error('收藏操作失败:', error)
    }
  }

  // 评论功能
  const loadComments = async () => {
    if (!videoId) return
    
    try {
      const response = await fetch(`/api/videos/${videoId}/comments`)
      if (response.ok) {
        const data = await response.json()
        setComments(data.comments || [])
      }
    } catch (error) {
      console.error('加载评论失败:', error)
    }
  }

  const addComment = async () => {
    if (!session || !videoId || !newComment.trim()) return
    
    try {
      const response = await fetch(`/api/videos/${videoId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: newComment,
          timestamp: Math.round(currentTime)
        })
      })
      
      if (response.ok) {
        setNewComment('')
        await loadComments()
      }
    } catch (error) {
      console.error('添加评论失败:', error)
    }
  }

  // 分享功能
  const shareVideo = async (platform: string) => {
    const url = window.location.href
    const text = `观看这个精彩的视频: ${title}`
    
    if (platform === 'native' && navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url
        })
      } catch (error) {
        console.error('分享失败:', error)
      }
    } else if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(url)
        alert('链接已复制到剪贴板')
      } catch (error) {
        console.error('复制失败:', error)
      }
    }
    setShowShareModal(false)
  }

  // 时间格式化
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    if (showComments && videoId) {
      loadComments()
    }
  }, [showComments, videoId])

  // 控制栏自动隐藏
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    
    const resetTimeout = () => {
      clearTimeout(timeoutId)
      setShowControls(true)
      timeoutId = setTimeout(() => {
        if (isPlaying) {
          setShowControls(false)
        }
      }, 3000)
    }

    resetTimeout()
    
    return () => clearTimeout(timeoutId)
  }, [isPlaying, currentTime])

  return (
    <div className={`relative bg-black rounded-lg overflow-hidden ${className}`}>
      {/* 视频元素 */}
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        playsInline
        preload="metadata"
      />

      {/* 加载状态 */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      )}

      {/* 点击播放覆盖层 */}
      <div 
        className="absolute inset-0 flex items-center justify-center cursor-pointer"
        onClick={togglePlay}
        onMouseMove={() => setShowControls(true)}
      >
        <AnimatePresence>
          {!isPlaying && !isLoading && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="w-20 h-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
            >
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* 视频控制栏 */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
          >
            {/* 进度条 */}
            <div className="mb-3">
              <input
                type="range"
                min={0}
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            <div className="flex items-center justify-between text-white">
              {/* 播放控制 */}
              <div className="flex items-center space-x-3">
                <button onClick={togglePlay} className="hover:text-orange-300 transition-colors">
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>

                <button onClick={toggleMute} className="hover:text-orange-300 transition-colors">
                  {isMuted ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                  )}
                </button>

                <div className="text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              {/* 右侧控制 */}
              <div className="flex items-center space-x-3">
                {session && (
                  <>
                    <button 
                      onClick={toggleFavorite}
                      className={`hover:text-orange-300 transition-colors ${
                        isFavorited ? 'text-red-500' : ''
                      }`}
                    >
                      <svg className="w-6 h-6" fill={isFavorited ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    
                    <button 
                      onClick={() => setShowComments(!showComments)}
                      className="hover:text-orange-300 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                  </>
                )}

                <button 
                  onClick={() => setShowShareModal(true)}
                  className="hover:text-orange-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>

                <button onClick={toggleFullscreen} className="hover:text-orange-300 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 评论面板 */}
      <AnimatePresence>
        {showComments && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="absolute top-0 right-0 w-80 h-full bg-black/90 backdrop-blur-sm text-white overflow-y-auto"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-card-subtitle text-lg">评论</h3>
                <button 
                  onClick={() => setShowComments(false)}
                  className="hover:text-orange-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* 添加评论 */}
              {session && (
                <div className="mb-4">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="添加评论..."
                    className="w-full p-3 bg-gray-800 rounded-lg resize-none text-sm"
                    rows={3}
                  />
                  <Button 
                    onClick={addComment}
                    disabled={!newComment.trim()}
                    className="mt-2 bg-orange-600 hover:bg-orange-700"
                    size="sm"
                  >
                    发布
                  </Button>
                </div>
              )}

              {/* 评论列表 */}
              <div className="space-y-3">
                {comments.map((comment) => (
                  <div key={comment.id} className="border-b border-gray-700 pb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{comment.user.name}</span>
                      <span className="text-xs text-gray-400">
                        {formatTime(comment.timestamp)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-200">{comment.content}</p>
                    <span className="text-xs text-gray-500">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 分享模态框 */}
      <AnimatePresence>
        {showShareModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-lg p-6 w-full max-w-sm mx-4"
            >
              <h3 className="font-card-headline text-xl mb-4">分享视频</h3>
              <div className="space-y-3">
                <Button 
                  onClick={() => shareVideo('copy')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  📋 复制链接
                </Button>
                {navigator.share && (
                  <Button 
                    onClick={() => shareVideo('native')}
                    className="w-full justify-start"
                    variant="outline"
                  >
                    📤 系统分享
                  </Button>
                )}
                <Button 
                  onClick={() => setShowShareModal(false)}
                  variant="outline"
                  className="w-full"
                >
                  取消
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CSS样式 */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #D97D54;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        }
        
        .slider::-webkit-slider-track {
          width: 100%;
          height: 4px;
          cursor: pointer;
          background: rgba(255,255,255,0.3);
          border-radius: 2px;
        }
        
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #D97D54;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        }
        
        .slider::-moz-range-track {
          width: 100%;
          height: 4px;
          cursor: pointer;
          background: rgba(255,255,255,0.3);
          border-radius: 2px;
        }
      `}</style>
    </div>
  )
}