import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// 获取单个推荐链接详情
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: '请先登录' },
        { status: 401 }
      )
    }

    const referral = await prisma.referral.findFirst({
      where: {
        id: params.id,
        userId: session.user.id,
      },
      include: {
        _count: {
          select: {
            clicks: true,
            conversions: true,
          },
        },
        clicks: {
          orderBy: { createdAt: 'desc' },
          take: 10, // 最近10次点击
          select: {
            id: true,
            createdAt: true,
            ipAddress: true,
            userAgent: true,
            country: true,
            city: true,
          },
        },
        conversions: {
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            createdAt: true,
            amount: true,
            commission: true,
            status: true,
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
        description: referral.description,
        targetUrl: referral.targetUrl,
        isActive: referral.isActive,
        expiresAt: referral.expiresAt,
        createdAt: referral.createdAt,
      },
      statistics: {
        totalClicks,
        totalConversions,
        conversionRate: Math.round(conversionRate * 100) / 100,
        totalCommission,
      },
      recentClicks: referral.clicks,
      conversions: referral.conversions,
    })
  } catch (error) {
    console.error('Get referral detail error:', error)
    return NextResponse.json(
      { error: '获取推荐链接详情失败' },
      { status: 500 }
    )
  }
}

// 更新推荐链接
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: '请先登录' },
        { status: 401 }
      )
    }

    const { name, description, targetUrl, isActive, expiresAt } = await request.json()

    // 验证权限
    const existingReferral = await prisma.referral.findFirst({
      where: {
        id: params.id,
        userId: session.user.id,
      },
    })

    if (!existingReferral) {
      return NextResponse.json(
        { error: '推荐链接未找到或无权限' },
        { status: 404 }
      )
    }

    const updatedReferral = await prisma.referral.update({
      where: { id: params.id },
      data: {
        name: name !== undefined ? name : existingReferral.name,
        description: description !== undefined ? description : existingReferral.description,
        targetUrl: targetUrl !== undefined ? targetUrl : existingReferral.targetUrl,
        isActive: isActive !== undefined ? isActive : existingReferral.isActive,
        expiresAt: expiresAt !== undefined ? (expiresAt ? new Date(expiresAt) : null) : existingReferral.expiresAt,
      },
    })

    return NextResponse.json({
      message: '推荐链接更新成功',
      referral: updatedReferral,
    })
  } catch (error) {
    console.error('Update referral error:', error)
    return NextResponse.json(
      { error: '更新推荐链接失败' },
      { status: 500 }
    )
  }
}

// 删除推荐链接
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: '请先登录' },
        { status: 401 }
      )
    }

    // 验证权限
    const existingReferral = await prisma.referral.findFirst({
      where: {
        id: params.id,
        userId: session.user.id,
      },
    })

    if (!existingReferral) {
      return NextResponse.json(
        { error: '推荐链接未找到或无权限' },
        { status: 404 }
      )
    }

    // 软删除 - 设置为非活跃状态而不是真正删除
    await prisma.referral.update({
      where: { id: params.id },
      data: { isActive: false },
    })

    return NextResponse.json({
      message: '推荐链接已删除',
    })
  } catch (error) {
    console.error('Delete referral error:', error)
    return NextResponse.json(
      { error: '删除推荐链接失败' },
      { status: 500 }
    )
  }
}