import { Master, ApiError } from '@/types'

/**
 * API 服务类 - 统一管理所有API调用
 */
export class ApiService {
  private static baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

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
      throw new Error('Unable to fetch masters data. Please check your network connection and try again.')
    }
  }

  /**
   * 根据 slug 获取特定大师信息
   */
  static async getMasterBySlug(slug: string): Promise<Master | null> {
    try {
      return await ApiService.fetchApi<Master>(`/masters?slug=${slug}`)
    } catch (error) {
      throw new Error(`Unable to fetch master data for "${slug}". Please verify the master exists and try again.`)
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
      throw new Error(`Server-side fetch failed for master "${slug}". The requested master may not exist.`)
    }
  }
}

/**
 * 便捷的导出函数（向后兼容）
 */
export const getMasters = ApiService.getMasters
export const getMasterBySlug = ApiService.getMasterBySlug
export const getMasterBySlugSSR = ApiService.getMasterBySlugSSR