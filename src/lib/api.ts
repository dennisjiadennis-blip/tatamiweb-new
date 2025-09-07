import { Master, ApiError } from '@/types'

/**
 * API 服务类 - 统一管理所有API调用
 */
export class ApiService {
  private static baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  /**
   * 处理 fetch 请求的通用方法
   */
  private static async fetchApi<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}/api${endpoint}`
    
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      return response.json()
    } catch (error) {
      console.error(`API Error (${endpoint}):`, error)
      throw error
    }
  }

  /**
   * 获取所有大师信息
   */
  static async getMasters(): Promise<Master[]> {
    try {
      return await ApiService.fetchApi<Master[]>('/masters')
    } catch (error) {
      console.error('Failed to fetch masters:', error)
      return [] // 返回空数组作为 fallback
    }
  }

  /**
   * 根据 slug 获取特定大师信息
   */
  static async getMasterBySlug(slug: string): Promise<Master | null> {
    try {
      return await ApiService.fetchApi<Master>(`/masters?slug=${slug}`)
    } catch (error) {
      console.error(`Failed to fetch master with slug ${slug}:`, error)
      return null
    }
  }

  /**
   * 获取大师信息的缓存版本（用于服务器端组件）
   */
  static async getMasterBySlugSSR(slug: string): Promise<Master | null> {
    try {
      return await ApiService.fetchApi<Master>(`/masters?slug=${slug}`, {
        cache: 'no-store' // 确保获取最新数据
      })
    } catch (error) {
      console.error(`SSR: Failed to fetch master with slug ${slug}:`, error)
      return null
    }
  }
}

/**
 * 便捷的导出函数（向后兼容）
 */
export const getMasters = ApiService.getMasters
export const getMasterBySlug = ApiService.getMasterBySlug
export const getMasterBySlugSSR = ApiService.getMasterBySlugSSR