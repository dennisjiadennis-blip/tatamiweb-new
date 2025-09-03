'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion, AnimatePresence } from 'framer-motion'

interface ReferralLink {
  id: string
  code: string
  name: string
  description?: string
  targetUrl: string
  isActive: boolean
  expiresAt?: string
  createdAt: string
  clickCount: number
  conversionCount: number
}

interface ReferralStats {
  totalLinks: number
  totalClicks: number
  totalConversions: number
  totalCommission: number
}

export function ReferralDashboard() {
  const [referrals, setReferrals] = useState<ReferralLink[]>([])
  const [stats, setStats] = useState<ReferralStats>({
    totalLinks: 0,
    totalClicks: 0,
    totalConversions: 0,
    totalCommission: 0
  })
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 加载推荐链接
  const loadReferrals = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/referrals')
      if (!response.ok) throw new Error('获取推荐链接失败')
      
      const data = await response.json()
      setReferrals(data.referrals)
      
      // 计算统计数据
      const totalStats = data.referrals.reduce((acc: ReferralStats, referral: ReferralLink) => ({
        totalLinks: acc.totalLinks + 1,
        totalClicks: acc.totalClicks + referral.clickCount,
        totalConversions: acc.totalConversions + referral.conversionCount,
        totalCommission: acc.totalCommission + (referral.conversionCount * 10) // 假设每转化10元佣金
      }), { totalLinks: 0, totalClicks: 0, totalConversions: 0, totalCommission: 0 })
      
      setStats(totalStats)
    } catch (err) {
      setError(err instanceof Error ? err.message : '加载失败')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadReferrals()
  }, [])

  // 复制链接到剪贴板
  const copyToClipboard = async (code: string) => {
    const fullUrl = `${window.location.origin}?ref=${code}`
    try {
      await navigator.clipboard.writeText(fullUrl)
      alert('推荐链接已复制到剪贴板')
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  // 切换链接状态
  const toggleLinkStatus = async (id: string, isActive: boolean) => {
    try {
      const response = await fetch(`/api/referrals/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !isActive })
      })
      
      if (!response.ok) throw new Error('更新状态失败')
      
      await loadReferrals() // 重新加载数据
    } catch (err) {
      alert(err instanceof Error ? err.message : '更新失败')
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <Card className="p-8 text-center">
        <p className="text-red-500 mb-4">加载失败: {error}</p>
        <Button onClick={loadReferrals}>重试</Button>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 text-center">
          <h3 className="font-card-subtitle text-sm text-gray-600 mb-2">总推荐链接</h3>
          <p className="font-card-headline text-3xl text-orange-600">{stats.totalLinks}</p>
        </Card>
        <Card className="p-6 text-center">
          <h3 className="font-card-subtitle text-sm text-gray-600 mb-2">总点击数</h3>
          <p className="font-card-headline text-3xl text-blue-600">{stats.totalClicks}</p>
        </Card>
        <Card className="p-6 text-center">
          <h3 className="font-card-subtitle text-sm text-gray-600 mb-2">总转化数</h3>
          <p className="font-card-headline text-3xl text-green-600">{stats.totalConversions}</p>
        </Card>
        <Card className="p-6 text-center">
          <h3 className="font-card-subtitle text-sm text-gray-600 mb-2">总佣金</h3>
          <p className="font-card-headline text-3xl text-purple-600">¥{stats.totalCommission}</p>
        </Card>
      </div>

      {/* 创建新链接按钮 */}
      <div className="flex justify-between items-center">
        <h2 className="font-card-headline text-2xl">我的推荐链接</h2>
        <Button 
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-orange-600 hover:bg-orange-700"
        >
          创建新链接
        </Button>
      </div>

      {/* 推荐链接列表 */}
      <div className="space-y-4">
        <AnimatePresence>
          {referrals.map((referral) => (
            <motion.div
              key={referral.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-card-subtitle text-lg">{referral.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        referral.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {referral.isActive ? '活跃' : '暂停'}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3">{referral.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span>代码: <span className="font-mono font-medium">{referral.code}</span></span>
                      <span>点击: {referral.clickCount}</span>
                      <span>转化: {referral.conversionCount}</span>
                      <span>创建: {new Date(referral.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(referral.code)}
                    >
                      复制链接
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleLinkStatus(referral.id, referral.isActive)}
                    >
                      {referral.isActive ? '暂停' : '激活'}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>

        {referrals.length === 0 && (
          <Card className="p-12 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
            </div>
            <h3 className="font-card-subtitle text-lg mb-2">还没有推荐链接</h3>
            <p className="text-gray-600 mb-4">创建您的第一个推荐链接开始赚取佣金</p>
            <Button onClick={() => setIsCreateModalOpen(true)}>
              创建推荐链接
            </Button>
          </Card>
        )}
      </div>

      {/* 创建链接模态框 */}
      <CreateReferralModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSuccess={loadReferrals}
      />
    </div>
  )
}

// 创建推荐链接模态框组件
interface CreateReferralModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

function CreateReferralModal({ isOpen, onClose, onSuccess }: CreateReferralModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    targetUrl: '',
    expiresAt: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      setIsSubmitting(true)
      
      const response = await fetch('/api/referrals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          expiresAt: formData.expiresAt || null
        })
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || '创建失败')
      }

      onSuccess()
      onClose()
      setFormData({ name: '', description: '', targetUrl: '', expiresAt: '' })
    } catch (err) {
      alert(err instanceof Error ? err.message : '创建失败')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg p-6 w-full max-w-md"
      >
        <h3 className="font-card-headline text-xl mb-4">创建推荐链接</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">链接名称</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="例如：首页推广"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">描述（可选）</label>
            <Input
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="链接用途说明"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">目标URL（可选）</label>
            <Input
              value={formData.targetUrl}
              onChange={(e) => setFormData({ ...formData, targetUrl: e.target.value })}
              placeholder="留空则跳转到首页"
              type="url"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">过期时间（可选）</label>
            <Input
              value={formData.expiresAt}
              onChange={(e) => setFormData({ ...formData, expiresAt: e.target.value })}
              type="datetime-local"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              取消
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-orange-600 hover:bg-orange-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? '创建中...' : '创建'}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}