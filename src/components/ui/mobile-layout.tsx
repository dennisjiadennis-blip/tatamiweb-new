'use client'

import { motion } from 'framer-motion'
import { FloatingBlock } from './floating-block'
import { SneakersIcon, GetaSandalsIcon, SleepingFoxIcon, TatamiLabsLogo } from './illustrations'

export function MobileLayout() {
  return (
    <div className="relative w-full h-full md:hidden">
      
      {/* 移动端垂直布局 */}
      <div className="space-y-4 p-4 pt-20">
        
        {/* Stories */}
        <FloatingBlock 
          colorTheme="linen"
          position={{
            top: '0',
            left: '0',
            width: '100%',
            height: '80px'
          }}
          delay={0.2}
        >
          <div className="font-serif-elegant text-lg font-light tracking-wide">
            Stories
          </div>
        </FloatingBlock>

        {/* A Story Woven with a Master */}
        <FloatingBlock 
          colorTheme="powder-blue"
          position={{
            top: '0',
            left: '0',
            width: '100%',
            height: '120px'
          }}
          delay={0.3}
        >
          <div className="font-serif-elegant text-lg font-light tracking-wide">
            A Story Woven with a Master
          </div>
        </FloatingBlock>

        {/* The Masters Who Shape Your World */}
        <FloatingBlock 
          colorTheme="powder-blue"
          position={{
            top: '0',
            left: '0',
            width: '100%',
            height: '120px'
          }}
          delay={0.4}
        >
          <div className="font-serif-elegant text-lg font-light tracking-wide">
            The Masters Who Shape Your World
          </div>
        </FloatingBlock>

        {/* My Tatami */}
        <FloatingBlock 
          colorTheme="moss-green"
          position={{
            top: '0',
            left: '0',
            width: '100%',
            height: '160px'
          }}
          delay={0.5}
        >
          <div className="font-serif-elegant text-lg font-light tracking-wide mb-3">
            My Tatami
          </div>
          <SneakersIcon size={48} className="text-current" />
        </FloatingBlock>

        {/* One Journey, a Lifetime of Insight */}
        <FloatingBlock 
          colorTheme="burnt-orange"
          position={{
            top: '0',
            left: '0',
            width: '100%',
            height: '140px'
          }}
          delay={0.6}
        >
          <div className="font-serif-elegant text-xl font-light tracking-wide">
            One Journey, a Lifetime of Insight
          </div>
        </FloatingBlock>

        {/* 小图标并排 */}
        <div className="grid grid-cols-3 gap-4">
          <FloatingBlock 
            colorTheme="burnt-orange"
            position={{
              top: '0',
              left: '0',
              width: '100%',
              height: '100px'
            }}
            delay={0.7}
          >
            <GetaSandalsIcon size={40} className="text-current" />
          </FloatingBlock>

          <FloatingBlock 
            colorTheme="moss-green"
            position={{
              top: '0',
              left: '0',
              width: '100%',
              height: '100px'
            }}
            delay={0.8}
          >
            <SleepingFoxIcon size={32} className="text-current" />
          </FloatingBlock>

          <FloatingBlock 
            colorTheme="burnt-orange"
            position={{
              top: '0',
              left: '0',
              width: '100%',
              height: '100px'
            }}
            delay={0.9}
          >
            <div className="font-serif-elegant text-sm font-light tracking-wide">
              Join a Journey
            </div>
          </FloatingBlock>
        </div>

        {/* Logo */}
        <FloatingBlock 
          colorTheme="linen"
          position={{
            top: '0',
            left: '0',
            width: '100%',
            height: '120px'
          }}
          delay={1.0}
        >
          <TatamiLabsLogo size={40} className="text-current" />
        </FloatingBlock>

      </div>
    </div>
  )
}