import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { referralCode, userId, ipAddress, userAgent, country, city } = await request.json()

    if (!referralCode) {
      return NextResponse.json(
        { error: '推荐码不能为空' },
        { status: 400 }
      )
    }

    // 查找推荐链接
    const referral = await prisma.referral.findUnique({
      where: {
        code: referralCode,
        isActive: true,
      },
    })

    if (!referral) {
      return NextResponse.json(
        { error: '推荐码无效或已过期' },
        { status: 404 }
      )
    }

    // 检查是否已过期
    if (referral.expiresAt && referral.expiresAt < new Date()) {
      return NextResponse.json(
        { error: '推荐码已过期' },
        { status: 410 }
      )
    }

    // 记录点击
    const click = await prisma.referralClick.create({
      data: {
        referralId: referral.id,
        userId: userId || null,
        ipAddress: ipAddress || 'unknown',
        userAgent: userAgent || 'unknown',
        country: country || null,
        city: city || null,
      },
    })

    return NextResponse.json({
      message: '追踪记录创建成功',
      clickId: click.id,
      targetUrl: referral.targetUrl,
    })
  } catch (error) {
    console.error('Tracking error:', error)
    return NextResponse.json(
      { error: '追踪记录创建失败' },
      { status: 500 }
    )
  }
}

// 获取推荐统计
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const referralCode = searchParams.get('code')
    const userId = searchParams.get('userId')

    if (!referralCode && !userId) {
      return NextResponse.json(
        { error: '需要推荐码或用户ID' },
        { status: 400 }
      )
    }

    const whereClause = referralCode 
      ? { code: referralCode }
      : { userId: userId! }

    // 获取推荐链接统计
    const referral = await prisma.referral.findFirst({
      where: whereClause,
      include: {
        clicks: {
          orderBy: { createdAt: 'desc' },
          take: 10, // 最近10次点击
        },
        conversions: {
          orderBy: { createdAt: 'desc' },
        },
        _count: {
          select: {
            clicks: true,
            conversions: true,
          },
        },
      },
    })

    if (!referral) {
      return NextResponse.json(
        { error: '推荐链接未找到' },
        { status: 404 }
      )
    }

    // 计算统计数据
    const totalClicks = referral._count.clicks
    const totalConversions = referral._count.conversions
    const conversionRate = totalClicks > 0 ? (totalConversions / totalClicks) * 100 : 0
    const totalCommission = referral.conversions.reduce((sum, conv) => sum + (conv.commission || 0), 0)

    return NextResponse.json({
      referral: {
        id: referral.id,
        code: referral.code,
        name: referral.name,
        targetUrl: referral.targetUrl,
        isActive: referral.isActive,
        createdAt: referral.createdAt,
      },
      statistics: {
        totalClicks,
        totalConversions,
        conversionRate: Math.round(conversionRate * 100) / 100,
        totalCommission,
      },
      recentClicks: referral.clicks.map(click => ({
        id: click.id,
        createdAt: click.createdAt,
        country: click.country,
        city: click.city,
      })),
    })
  } catch (error) {
    console.error('Statistics error:', error)
    return NextResponse.json(
      { error: '获取统计数据失败' },
      { status: 500 }
    )
  }
}