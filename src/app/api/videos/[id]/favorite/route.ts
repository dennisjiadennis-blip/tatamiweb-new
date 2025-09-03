import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// 添加收藏
export async function POST(
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

    const videoId = params.id

    // 检查视频是否存在
    const video = await prisma.video.findUnique({
      where: { id: videoId },
    })

    if (!video) {
      return NextResponse.json(
        { error: '视频不存在' },
        { status: 404 }
      )
    }

    // 检查是否已收藏
    const existingFavorite = await prisma.videoFavorite.findUnique({
      where: {
        userId_videoId: {
          userId: session.user.id,
          videoId,
        },
      },
    })

    if (existingFavorite) {
      return NextResponse.json(
        { error: '视频已收藏' },
        { status: 400 }
      )
    }

    // 添加收藏
    await prisma.videoFavorite.create({
      data: {
        userId: session.user.id,
        videoId,
      },
    })

    return NextResponse.json({
      message: '收藏成功',
    })
  } catch (error) {
    console.error('Add favorite error:', error)
    return NextResponse.json(
      { error: '收藏失败' },
      { status: 500 }
    )
  }
}

// 取消收藏
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

    const videoId = params.id

    // 删除收藏记录
    const deleted = await prisma.videoFavorite.deleteMany({
      where: {
        userId: session.user.id,
        videoId,
      },
    })

    if (deleted.count === 0) {
      return NextResponse.json(
        { error: '收藏记录不存在' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      message: '取消收藏成功',
    })
  } catch (error) {
    console.error('Remove favorite error:', error)
    return NextResponse.json(
      { error: '取消收藏失败' },
      { status: 500 }
    )
  }
}

// 检查收藏状态
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ isFavorited: false })
    }

    const videoId = params.id

    const favorite = await prisma.videoFavorite.findUnique({
      where: {
        userId_videoId: {
          userId: session.user.id,
          videoId,
        },
      },
    })

    return NextResponse.json({
      isFavorited: !!favorite,
    })
  } catch (error) {
    console.error('Check favorite status error:', error)
    return NextResponse.json(
      { error: '检查收藏状态失败' },
      { status: 500 }
    )
  }
}