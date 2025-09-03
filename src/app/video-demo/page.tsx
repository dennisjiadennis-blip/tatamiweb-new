'use client'

import { Card } from '@/components/ui/card'
import { CardMosaicContainer } from '@/components/ui/page-transition'
import { VideoBackground } from '@/components/video/video-background'
import { VideoGallery } from '@/components/video/video-gallery'

// 模拟视频数据
const demoVideos = [
  {
    id: '1',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: '陶艺大师的一天',
    description: '跟随山本老师，体验传统陶艺的每一个精细步骤',
    poster: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    duration: '3:24'
  },
  {
    id: '2', 
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    title: '茶道的精神世界',
    description: '田中老师演示正宗的茶道仪式，感受禅意之美',
    poster: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop',
    duration: '5:12'
  },
  {
    id: '3',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 
    title: '木工匠人的手艺',
    description: '佐藤师傅展示传统木工技法，每一刀都是艺术',
    poster: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
    duration: '4:36'
  }
]

export default function VideoDemoPage() {
  return (
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

          {/* 视频画廊 */}
          <VideoGallery videos={demoVideos} />

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
  )
}