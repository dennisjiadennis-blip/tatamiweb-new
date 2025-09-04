'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Skeleton, SkeletonVideoCard } from '@/components/ui/Skeleton'
import { videoStoriesData } from '@/data/websiteData'

// Simple SVG Icons
const ArrowLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const Play = ({ className, fill }: { className?: string, fill?: string }) => (
  <svg className={className} fill={fill || "currentColor"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <polygon points="5,3 19,12 5,21" />
  </svg>
)


interface VideoCardProps {
  story: any
  className?: string
}

const VideoCard = ({ story, className = "" }: VideoCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className={`tatami-block bg-linen group hover:shadow-deep hover:scale-[1.02] transition-all duration-tatami ${className}`}>
      {/* Video Cover */}
      <div className="relative w-full h-40 bg-charcoal/10 rounded-t-tatami overflow-hidden">
        {/* Lazy loaded image */}
        <Image
          src={story.coverImage}
          alt={story.title}
          fill
          className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="absolute inset-0">
            <Skeleton className="w-full h-full" />
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-br from-powder-blue/20 to-moss-green/20" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-burnt-orange rounded-full flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 text-linen ml-1" fill="currentColor" />
          </div>
        </div>
        
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-charcoal/80 text-linen text-xs px-2 py-1 rounded">
          {story.duration}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="heading-block text-sm mb-3 line-clamp-4 leading-comfortable">
          {story.title}
        </h3>
        
        <div className="mt-auto space-y-2">
          <div className="text-xs text-charcoal/70 font-primary">
            {story.masterName}
          </div>
          <div className="text-xs text-burnt-orange font-primary font-medium">
            {story.category}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-3 text-linen hover:text-burnt-orange transition-colors duration-300 group"
            title="Return to homepage"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="heading-block text-base">Back to Home</span>
          </Link>
          
          <div>
            <h1 className="heading-block text-2xl text-linen">Stories</h1>
            <p className="text-description text-sm text-linen/80 mt-1">
              Discover wisdom through craftsmen's journeys
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {/* Video Cards with Irregular Sizing */}
          <VideoCard story={videoStoriesData[0]} className="md:col-span-2 h-80" />
          <VideoCard story={videoStoriesData[1]} className="h-72" />
          <VideoCard story={videoStoriesData[2]} className="h-64" />
          
          {/* Explore Masters CTA Block */}
          <Link 
            href="/masters"
            className="tatami-block-large bg-moss-green col-span-1 md:col-span-2 lg:col-span-1 h-56 flex-col text-center group hover:bg-moss-green/90"
            title="Discover the master craftsmen"
          >
            <div className="heading-block-large text-linen mb-3 group-hover:scale-105 transition-transform duration-300">
              Explore the Masters
            </div>
            <div className="text-description text-linen/90 text-sm">
              Meet the artisans behind these incredible stories
            </div>
            <div className="mt-4 w-8 h-8 bg-linen/20 rounded-full flex items-center justify-center group-hover:bg-linen/30 transition-colors duration-300">
              <ArrowLeft className="w-4 h-4 text-linen rotate-180" />
            </div>
          </Link>
          
          <VideoCard story={videoStoriesData[3]} className="h-80" />
          <VideoCard story={videoStoriesData[4]} className="h-64" />
          <VideoCard story={videoStoriesData[5]} className="h-72" />
          <VideoCard story={videoStoriesData[6]} className="md:col-span-2 h-64" />
          <VideoCard story={videoStoriesData[7]} className="h-76" />
          
        </div>
        
        {/* Load More Section */}
        <div className="mt-12 text-center">
          <button className="tatami-block bg-powder-blue px-8 py-4 hover:bg-powder-blue/90 transition-colors duration-300">
            <span className="heading-block text-base">Load More Stories</span>
          </button>
          
          <p className="text-description text-sm mt-4 text-linen/70">
            Scroll through more craftsmen's journeys and discover their wisdom
          </p>
        </div>
      </div>
    </main>
  )
}

