import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// 生成推荐码
function generateReferralCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = ''
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

// 创建推荐链接
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: '请先登录' },
        { status: 401 }
      )
    }

    const { name, description, targetUrl, expiresAt } = await request.json()

    // 生成唯一的推荐码
    let code = generateReferralCode()
    let isUnique = false
    let attempts = 0

    while (!isUnique && attempts < 10) {
      const existing = await prisma.referral.findUnique({
        where: { code },
      })
      
      if (!existing) {
        isUnique = true
      } else {
        code = generateReferralCode()
        attempts++
      }
    }

    if (!isUnique) {
      return NextResponse.json(
        { error: '生成推荐码失败，请重试' },
        { status: 500 }
      )
    }

    const referral = await prisma.referral.create({
      data: {
        code,
        userId: session.user.id,
        name: name || `推荐链接 - ${code}`,
        description,
        targetUrl: targetUrl || '/',
        expiresAt: expiresAt ? new Date(expiresAt) : null,
      },
    })

    return NextResponse.json({
      message: '推荐链接创建成功',
      referral,
    })
  } catch (error) {
    console.error('Create referral error:', error)
    return NextResponse.json(
      { error: '创建推荐链接失败' },
      { status: 500 }
    )
  }
}

// 获取用户的推荐链接列表
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: '请先登录' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''

    const skip = (page - 1) * limit

    const whereClause = {
      userId: session.user.id,
      ...(search && {
        OR: [
          { name: { contains: search } },
          { code: { contains: search } },
          { description: { contains: search } },
        ],
      }),
    }

    const [referrals, total] = await Promise.all([
      prisma.referral.findMany({
        where: whereClause,
        include: {
          _count: {
            select: {
              clicks: true,
              conversions: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.referral.count({ where: whereClause }),
    ])

    return NextResponse.json({
      referrals: referrals.map(referral => ({
        ...referral,
        clickCount: referral._count.clicks,
        conversionCount: referral._count.conversions,
        _count: undefined, // 移除原始的 _count
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Get referrals error:', error)
    return NextResponse.json(
      { error: '获取推荐链接失败' },
      { status: 500 }
    )
  }
}