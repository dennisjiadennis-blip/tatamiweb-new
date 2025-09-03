'use client'

import { useState } from 'react'
import { signIn, getSession } from 'next-auth/react'
import { Card } from '@/components/ui/card'
import { PageTransition } from '@/components/ui/page-transition'

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')
    
    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const name = formData.get('name') as string

    try {
      if (isRegister) {
        // 注册逻辑
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, name }),
        })

        const data = await response.json()

        if (response.ok) {
          setSuccess('注册成功！正在为您登录...')
          // 注册成功后自动登录
          const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
          })

          if (result?.ok) {
            window.location.href = '/'
          } else {
            setError('注册成功，但自动登录失败。请手动登录。')
          }
        } else {
          setError(data.error || '注册失败')
        }
      } else {
        // 登录逻辑
        const result = await signIn('credentials', {
          email,
          password,
          redirect: false,
        })

        if (result?.ok) {
          window.location.href = '/'
        } else {
          setError('登录失败，请检查邮箱和密码')
        }
      }
    } catch (error) {
      setError('网络错误，请稍后重试')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleAuth = async () => {
    setIsLoading(true)
    try {
      await signIn('google', { callbackUrl: '/' })
    } catch (error) {
      setError('Google 登录失败，请稍后重试')
      setIsLoading(false)
    }
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

            {/* 状态消息 */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
                {success}
              </div>
            )}

            {/* 邮箱登录表单 */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegister && (
                <div>
                  <label className="block font-card-subtitle text-gray-700 mb-2">
                    姓名
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors disabled:bg-gray-100"
                    placeholder="输入您的姓名"
                  />
                </div>
              )}

              <div>
                <label className="block font-card-subtitle text-gray-700 mb-2">
                  邮箱地址
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors disabled:bg-gray-100"
                  placeholder="输入您的邮箱"
                />
              </div>

              <div>
                <label className="block font-card-subtitle text-gray-700 mb-2">
                  密码
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors disabled:bg-gray-100"
                  placeholder="输入您的密码"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {isRegister ? '注册中...' : '登录中...'}
                  </>
                ) : (
                  isRegister ? '创建账户' : '登录'
                )}
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