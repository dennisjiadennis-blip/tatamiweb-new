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

// 增强的视频数据 - 支持播放列表功能
const demoVideos = [
  {
    id: 'video-1',
    title: '传统陶艺大师 - 山田太郎的工艺之路',
    description: '跟随山田太郎大师学习传统日本陶艺的精髓，从选土到成型，每一个步骤都凝聚着数十年的经验与智慧。',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    duration: '30:45',
    masterId: 'master-1',
    master: {
      name: '山田太郎',
      specialty: '传统陶艺'
    }
  },
  {
    id: 'video-2',
    title: '茶道艺术 - 细川美子的禅意人生',
    description: '茶道不仅仅是泡茶的技艺，更是一种生活的哲学。细川美子老师将带您走进茶道的静谧世界。',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    poster: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop',
    duration: '25:20',
    masterId: 'master-2',
    master: {
      name: '细川美子',
      specialty: '茶道艺术'
    }
  },
  {
    id: 'video-3',
    title: '和纸制作 - 古老技艺的现代传承',
    description: '和纸制作是日本传统文化的重要组成部分。观看田中花子大师如何将千年技艺与现代设计相结合。',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
    duration: '18:30',
    masterId: 'master-3',
    master: {
      name: '田中花子',
      specialty: '和纸工艺'
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
        loadingText="正在加载视频内容..."
        minLoadTime={600}
      />
      
      <div className="min-h-screen">
      {/* 视频背景英雄区域 */}
      <VideoBackground
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        overlay="dark"
        overlayOpacity={0.5}
        className="h-screen"
        poster="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop"
      >
        <div className="h-full flex items-center justify-center p-4">
          <div className="text-center max-w-4xl">
            <h1 className="font-brand-title mb-6">
              匠心视界
            </h1>
            <Card backgroundColor="offwhite" className="inline-block">
              <p className="font-card-subtitle text-xl text-gray-700">
                通过镜头，走进日本匠人的精神世界
              </p>
            </Card>
          </div>
        </div>
      </VideoBackground>

      {/* 内容区域 */}
      <div className="p-4 md:p-8">
        <CardMosaicContainer className="max-w-7xl mx-auto">
          
          {/* 介绍卡片 */}
          <Card backgroundColor="blue" className="mb-8 text-center">
            <h2 className="font-card-headline mb-4">
              深度视频体验
            </h2>
            <p className="font-card-subtitle text-slate-700">
              每一个视频都是一扇窗，让您近距离感受日本匠人的专注与热爱。
              从陶艺师的手工拉坯，到茶道宗师的每一个动作，都承载着深厚的文化内涵。
            </p>
          </Card>

          {/* 视频演示模式选择 */}
          <Card backgroundColor="offwhite" className="mb-8 text-center">
            <h2 className="font-card-headline mb-6">选择体验模式</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => setSelectedDemo('playlist')}
                className={`px-6 py-3 font-card-subtitle transition-all ${
                  selectedDemo === 'playlist'
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                📋 播放列表
              </Button>
              <Button
                onClick={() => setSelectedDemo('enhanced')}
                className={`px-6 py-3 font-card-subtitle transition-all ${
                  selectedDemo === 'enhanced'
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                🎬 增强播放器
              </Button>
              <Button
                onClick={() => setSelectedDemo('gallery')}
                className={`px-6 py-3 font-card-subtitle transition-all ${
                  selectedDemo === 'gallery'
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                🖼️ 视频画廊
              </Button>
            </div>
          </Card>

          {/* 动态视频展示区域 */}
          <motion.div
            key={selectedDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {selectedDemo === 'playlist' && (
              <Card backgroundColor="white" className="mb-8">
                <div className="text-center mb-6">
                  <h3 className="font-card-headline text-xl mb-2">播放列表演示</h3>
                  <p className="text-gray-600">支持连续播放、评论互动、收藏管理等功能</p>
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
                  <h3 className="font-card-headline text-xl mb-2">增强视频播放器</h3>
                  <p className="text-gray-600">支持评论、收藏、分享等社交功能</p>
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
                  <h3 className="font-card-headline text-xl mb-2">视频画廊</h3>
                  <p className="text-gray-600">浏览模式，快速预览和选择视频</p>
                </div>
                <VideoGallery videos={demoVideos} />
              </Card>
            )}
          </motion.div>

          {/* 体验邀请 */}
          <Card backgroundColor="green" className="mt-12 text-center">
            <h2 className="font-card-headline mb-6">
              这只是开始
            </h2>
            <p className="font-card-subtitle text-slate-100 mb-6">
              真正的体验远比视频更加震撼。加入我们，获得与大师面对面交流的机会。
            </p>
            <div className="space-x-4">
              <button 
                onClick={() => window.location.href = '/masters'}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                探索大师
              </button>
              <button 
                onClick={() => window.location.href = '/auth'}
                className="bg-white hover:bg-gray-100 text-green-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                立即加入
              </button>
            </div>
          </Card>

        </CardMosaicContainer>
      </div>
      </div>
    </>
  )
}