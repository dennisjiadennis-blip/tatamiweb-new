// 核心数据类型定义

/**
 * 大师信息接口
 */
export interface Master {
  /** 大师姓名 */
  name: string
  /** 专业领域 */
  field: string
  /** 头像图片URL */
  imageUrl: string
  /** URL路径标识符 */
  slug: string
}

/**
 * 支柱信息接口
 */
export interface Pillar {
  /** 支柱标题 */
  title: string
  /** 支柱描述 */
  description: string
  /** 图片URL */
  imageUrl: string
  /** 边框颜色类名 */
  borderColor: string
}

/**
 * API响应通用接口
 */
export interface ApiResponse<T = unknown> {
  data?: T
  error?: string
  message?: string
}

/**
 * API错误响应接口
 */
export interface ApiError {
  error: string
  status?: number
}

/**
 * 导航菜单项接口
 */
export interface NavItem {
  /** 链接地址 */
  href: string
  /** 显示标签 */
  label: string
  /** 图标 */
  icon: string
}

/**
 * 用户会话信息接口（扩展NextAuth类型）
 */
export interface UserSession {
  id?: string
  name?: string | null
  email?: string | null
  image?: string | null
}

/**
 * 组件通用Props接口
 */
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

/**
 * 页面参数接口（用于动态路由）
 */
export interface PageParams {
  slug: string
}

/**
 * 页面Props接口
 */
export interface PageProps {
  params: Promise<PageParams>
}

/**
 * 网络连接信息接口（用于性能监控）
 */
export interface NetworkConnection {
  effectiveType?: '2g' | '3g' | '4g' | 'slow-2g'
  downlink?: number
  rtt?: number
  saveData?: boolean
}

/**
 * 性能指标接口
 */
export interface PerformanceMetrics {
  /** 首次内容绘制时间 */
  firstContentfulPaint?: number
  /** 最大内容绘制时间 */
  largestContentfulPaint?: number
  /** 首次输入延迟 */
  firstInputDelay?: number
  /** 累积布局偏移 */
  cumulativeLayoutShift?: number
}