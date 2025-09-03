'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { PageTransition } from '@/components/ui/page-transition'

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 实现认证逻辑
    console.log(isRegister ? 'Register' : 'Log In')
  }

  const handleGoogleAuth = () => {
    // TODO: 实现 Google OAuth 登录流程
    console.log('Google OAuth')
  }

  return (
    <PageTransition>
      <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
        <Card backgroundColor="offwhite" className="w-full max-w-md">
          <div className="p-8">
            
            {/* 标题 */}
            <div className="text-center mb-8">
              <h1 className="font-card-headline mb-2">
                {isRegister ? '加入 Tatami Labs' : '欢迎回来'}
              </h1>
              <p className="font-card-subtitle text-gray-600">
                {isRegister ? '开启您的匠人文化探索之旅' : '继续您的文化体验'}
              </p>
            </div>

            {/* Google 认证按钮 */}
            <button
              onClick={handleGoogleAuth}
              className="w-full bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 mb-6 flex items-center justify-center"
            >
              <span className="mr-2">🌏</span>
              使用 Google 继续
            </button>

            {/* 分隔线 */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-stone-50 px-2 text-gray-500">或</span>
              </div>
            </div>

            {/* 邮箱登录表单 */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-card-subtitle text-gray-700 mb-2">
                  邮箱地址
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="输入您的邮箱"
                />
              </div>

              <div>
                <label className="block font-card-subtitle text-gray-700 mb-2">
                  密码
                </label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="输入您的密码"
                />
              </div>

              {isRegister && (
                <div>
                  <label className="block font-card-subtitle text-gray-700 mb-2">
                    确认密码
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="再次输入密码"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                {isRegister ? '创建账户' : '登录'}
              </button>
            </form>

            {/* 切换登录/注册 */}
            <div className="text-center mt-6">
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="font-card-subtitle text-gray-600 hover:text-orange-600 transition-colors"
              >
                {isRegister 
                  ? '已有账户？立即登录' 
                  : '还没有账户？立即注册'
                }
              </button>
            </div>

            {/* 返回首页链接 */}
            <div className="text-center mt-4">
              <button
                onClick={() => window.location.href = '/'}
                className="font-card-subtitle text-gray-500 hover:text-gray-700 transition-colors text-sm"
              >
                ← 返回首页
              </button>
            </div>

          </div>
        </Card>
      </div>
    </PageTransition>
  )
}