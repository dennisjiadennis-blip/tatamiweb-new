import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Handle referral tracking
  const refCode = request.nextUrl.searchParams.get('ref')
  
  if (refCode) {
    // Set referral code cookie, valid for 30 days
    response.cookies.set('referral_code', refCode, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    })
    
    // Remove ref parameter from URL to keep user experience clean
    const cleanUrl = new URL(request.url)
    cleanUrl.searchParams.delete('ref')
    
    // Async record click (non-blocking user request)
    trackReferralClick(refCode, request).catch(console.error)
    
    // Redirect to clean URL
    return NextResponse.redirect(cleanUrl)
  }
  
  return response
}

// Async track referral link clicks
async function trackReferralClick(refCode: string, request: NextRequest) {
  try {
    const trackingData = {
      referralCode: refCode,
      ipAddress: getClientIP(request),
      userAgent: request.headers.get('user-agent') || 'unknown',
      country: request.headers.get('cf-ipcountry') || null, // Cloudflare country header
      city: request.headers.get('cf-ipcity') || null, // Cloudflare city header (if available)
    }

    // Call tracking API
    await fetch(`${request.nextUrl.origin}/api/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trackingData),
    })
  } catch (error) {
    // Silently handle errors, don't affect user experience
    console.error('Referral link tracking failed:', error)
  }
}

// Get client IP address
function getClientIP(request: NextRequest): string {
  // Try to get real IP from various common headers
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
     * Match all paths except:
     * - api routes (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
}