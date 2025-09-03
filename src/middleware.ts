import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // 处理推荐链接追踪
  const refCode = request.nextUrl.searchParams.get('ref')
  
  if (refCode) {
    // 设置推荐代码 cookie，有效期30天
    response.cookies.set('referral_code', refCode, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30天
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    })
    
    // 移除URL中的ref参数，保持用户体验清洁
    const cleanUrl = new URL(request.url)
    cleanUrl.searchParams.delete('ref')
    
    // 异步记录点击（不阻塞用户请求）
    trackReferralClick(refCode, request).catch(console.error)
    
    // 重定向到清洁的URL
    return NextResponse.redirect(cleanUrl)
  }
  
  return response
}

// 异步追踪推荐链接点击
async function trackReferralClick(refCode: string, request: NextRequest) {
  try {
    const trackingData = {
      referralCode: refCode,
      ipAddress: getClientIP(request),
      userAgent: request.headers.get('user-agent') || 'unknown',
      country: request.headers.get('cf-ipcountry') || null, // Cloudflare country header
      city: request.headers.get('cf-ipcity') || null, // Cloudflare city header (如果可用)
    }

    // 调用追踪API
    await fetch(`${request.nextUrl.origin}/api/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trackingData),
    })
  } catch (error) {
    // 静默处理错误，不影响用户体验
    console.error('推荐链接追踪失败:', error)
  }
}

// 获取客户端IP地址
function getClientIP(request: NextRequest): string {
  // 尝试从各种常见的header中获取真实IP
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  const realIP = request.headers.get('x-real-ip')
  if (realIP) {
    return realIP
  }
  
  const cfConnectingIP = request.headers.get('cf-connecting-ip')
  if (cfConnectingIP) {
    return cfConnectingIP
  }
  
  return request.ip || 'unknown'
}

export const config = {
  matcher: [
    /*
     * 匹配所有路径除了:
     * - api routes (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
}