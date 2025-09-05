'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Skeleton, SkeletonMasterCard } from '@/components/ui/Skeleton'
import { mastersData, type Master } from '@/data/websiteData'

// Simple SVG Icons
const ArrowLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Award = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)


interface MasterCardProps {
  master: Master
  className?: string
}

const MasterCard = ({ master, className = "" }: MasterCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Link
      href={`/masters/${master.slug}`}
      className={`tatami-block bg-linen group hover:shadow-deep hover:scale-[1.02] transition-all duration-tatami flex-col text-left ${className}`}
    >
      {/* Profile Image */}
      <div className="relative w-full h-48 bg-charcoal/10 rounded-t-tatami overflow-hidden">
        {/* Lazy loaded image */}
        <Image
          src={master.imageProfile}
          alt={`${master.nameEn} - ${master.profession} Master`}
          fill
          className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        
        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="absolute inset-0">
            <Skeleton className="w-full h-full" />
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-br from-powder-blue/20 to-moss-green/20" />
        
        {/* Featured Badge */}
        {master.featured && (
          <div className="absolute top-3 left-3 bg-burnt-orange text-linen text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <Award className="w-3 h-3" />
            Featured
          </div>
        )}
        
        {/* Experience Badge */}
        <div className="absolute top-3 right-3 bg-charcoal/80 text-linen text-xs px-2 py-1 rounded">
          {master.experience}+ years
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="heading-block text-xl mb-2 text-charcoal group-hover:text-burnt-orange transition-colors duration-300">
          {master.nameEn}
        </h3>
        
        <div className="text-burnt-orange font-primary font-medium text-sm mb-2">
          {master.profession}
        </div>
        
        <div className="flex items-center gap-1 text-charcoal/70 text-xs mb-3">
          <MapPin className="w-3 h-3" />
          {master.location}
        </div>
        
        <p className="text-description text-charcoal/80 text-sm leading-comfortable mb-4 flex-1 line-clamp-3 md:line-clamp-4">
          {master.biographyEn}
        </p>
        
        <div className="space-y-2">
          <div className="text-xs text-charcoal/60 font-primary">
            Specialty: {master.specialty}
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-burnt-orange">
              {'★'.repeat(Math.floor(master.rating))}
            </div>
            <span className="text-xs text-charcoal/60">{master.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function MastersPage() {
  const featuredMasters = mastersData.filter(master => master.featured)
  const otherMasters = mastersData.filter(master => !master.featured)

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
            <h1 className="heading-block text-2xl text-linen">The Masters</h1>
            <p className="text-description text-sm text-linen/80 mt-1">
              Meet the artisans who shape our world
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Featured Masters Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="heading-block-large text-linen">Featured Masters</h2>
            <div className="text-description text-linen/70 text-sm">
              Recognized for exceptional artistry and cultural preservation
            </div>
          </div>
          
          {/* Featured Grid - Larger Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMasters.map((master) => (
              <MasterCard 
                key={master.id} 
                master={master} 
                className="h-96"
              />
            ))}
          </div>
        </section>

        {/* All Masters Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="heading-block-large text-linen">All Masters</h2>
            <div className="text-description text-linen/70 text-sm">
              Discover the full community of traditional craftsmen
            </div>
          </div>
          
          {/* All Masters Grid - Compact Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mastersData.map((master) => (
              <MasterCard 
                key={master.id} 
                master={master} 
                className="h-80"
              />
            ))}
          </div>
        </section>

        {/* Explore More CTA */}
        <section className="text-center">
          <Link 
            href="/stories"
            className="tatami-block bg-moss-green px-8 py-6 hover:bg-moss-green/90 transition-colors duration-300 inline-flex items-center gap-4"
            title="Watch master craftsmen stories"
          >
            <span className="heading-block text-lg text-linen">Watch Their Stories</span>
            <ArrowLeft className="w-5 h-5 text-linen rotate-180" />
          </Link>
          
          <p className="text-description text-sm mt-4 text-linen/70">
            Experience their journeys through immersive video narratives
          </p>
        </section>
      </div>
    </main>
  )
}

