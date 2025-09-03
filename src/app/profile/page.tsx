'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ReferralDashboard } from '@/components/referral/referral-dashboard'
import { motion } from 'framer-motion'

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const [activeTab, setActiveTab] = useState('overview')

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="font-card-headline text-2xl mb-4">请先登录</h2>
          <p className="text-gray-600 mb-6">您需要登录才能查看个人资料</p>
          <Button onClick={() => window.location.href = '/auth/signin'}>
            前往登录
          </Button>
        </Card>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', label: '概览', icon: '📊' },
    { id: 'referrals', label: '推荐链接', icon: '🔗' },
    { id: 'settings', label: '设置', icon: '⚙️' }
  ]

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        
        {/* 用户信息头部 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {session?.user?.name?.[0] || session?.user?.email?.[0] || 'U'}
              </div>
              <div className="flex-1">
                <h1 className="font-card-headline text-3xl mb-2">
                  {session?.user?.name || '用户'}
                </h1>
                <p className="text-gray-600 mb-4">{session?.user?.email}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>会员状态: 活跃</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>会员等级: 普通会员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>加入时间: {new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* 标签导航 */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-card-subtitle transition-all duration-200 border-b-2 ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-600 bg-orange-50'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 标签内容 */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && <ProfileOverview />}
          {activeTab === 'referrals' && <ReferralDashboard />}
          {activeTab === 'settings' && <ProfileSettings />}
        </motion.div>
      </div>
    </div>
  )
}

// 概览组件
function ProfileOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 text-xl">🎯</span>
          </div>
          <div>
            <h3 className="font-card-subtitle">我的兴趣</h3>
            <p className="text-gray-600 text-sm">关注的大师和课程</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>关注的大师</span>
            <span className="font-medium">3 位</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>收藏的课程</span>
            <span className="font-medium">7 个</span>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <span className="text-green-600 text-xl">💰</span>
          </div>
          <div>
            <h3 className="font-card-subtitle">推荐奖励</h3>
            <p className="text-gray-600 text-sm">本月推荐收益</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>本月佣金</span>
            <span className="font-medium text-green-600">¥128</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>累计佣金</span>
            <span className="font-medium">¥456</span>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <span className="text-purple-600 text-xl">📈</span>
          </div>
          <div>
            <h3 className="font-card-subtitle">活动统计</h3>
            <p className="text-gray-600 text-sm">平台参与度</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>本月访问</span>
            <span className="font-medium">12 次</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>总访问</span>
            <span className="font-medium">89 次</span>
          </div>
        </div>
      </Card>

      {/* 最近活动 */}
      <Card className="p-6 md:col-span-2 lg:col-span-3">
        <h3 className="font-card-subtitle text-lg mb-4">最近活动</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
              👀
            </div>
            <div className="flex-1">
              <p className="text-sm">浏览了大师"山田太郎"的作品集</p>
              <p className="text-xs text-gray-500">2 小时前</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
              💰
            </div>
            <div className="flex-1">
              <p className="text-sm">推荐链接获得一次转化，获得佣金 ¥10</p>
              <p className="text-xs text-gray-500">1 天前</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm">
              🔗
            </div>
            <div className="flex-1">
              <p className="text-sm">创建了新的推荐链接"春季推广"</p>
              <p className="text-xs text-gray-500">3 天前</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

// 设置组件
function ProfileSettings() {
  return (
    <div className="max-w-2xl">
      <Card className="p-6">
        <h3 className="font-card-headline text-xl mb-6">个人设置</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">显示名称</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              defaultValue="用户名"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">邮箱地址</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
              defaultValue="user@example.com"
              disabled
            />
            <p className="text-xs text-gray-500 mt-1">邮箱地址不可修改</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">语言偏好</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
              <option value="zh-CN">简体中文</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">通知设置</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">邮件通知</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">推荐奖励通知</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">营销推广通知</span>
              </label>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <Button className="bg-orange-600 hover:bg-orange-700">
              保存设置
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}