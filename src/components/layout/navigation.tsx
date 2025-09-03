'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: '首页', icon: '🏠' },
  { href: '/product-intro', label: '产品介绍', icon: '📖' },
  { href: '/masters', label: '大师', icon: '👨‍🎨' },
  { href: '/philosophy', label: '理念', icon: '💭' },
  { href: '/video-demo', label: '视频体验', icon: '🎬' },
  { href: '/auth', label: '加入', icon: '🚪' }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* 桌面端导航 - 固定在顶部 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <button 
              onClick={() => window.location.href = '/'}
              className="font-card-subtitle font-bold text-white tracking-wider hover:text-orange-300 transition-colors"
            >
              TATAMI LABS
            </button>

            {/* 桌面端菜单 */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => window.location.href = item.href}
                  className={`px-4 py-2 rounded-lg font-card-subtitle transition-all duration-200 ${
                    pathname === item.href
                      ? 'bg-orange-600 text-white'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>

            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-orange-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* 移动端侧边菜单 */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 遮罩层 */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* 侧边菜单 */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-slate-900 shadow-xl z-50 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="p-6">
                
                {/* 菜单标题 */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-card-headline text-white text-xl">
                    导航菜单
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-orange-300 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* 菜单项 */}
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => {
                        window.location.href = item.href
                        setIsOpen(false)
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg font-card-subtitle transition-all duration-200 flex items-center ${
                        pathname === item.href
                          ? 'bg-orange-600 text-white'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="mr-3 text-xl">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* 底部信息 */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-gray-400 text-sm font-card-subtitle">
                    © 2024 Tatami Labs
                    <br />
                    匠心传承 · 文化桥梁
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 为固定导航留出空间 */}
      <div className="h-16"></div>
    </>
  )
}