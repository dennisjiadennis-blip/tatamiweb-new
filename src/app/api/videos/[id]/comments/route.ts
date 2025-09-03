import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// 获取视频评论
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const videoId = params.id

    const comments = await prisma.videoComment.findMany({
      where: { videoId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({
      comments: comments.map(comment => ({
        id: comment.id,
        content: comment.content,
        timestamp: comment.timestamp,
        createdAt: comment.createdAt,
        user: comment.user,
      })),
    })
  } catch (error) {
    console.error('Get video comments error:', error)
    return NextResponse.json(
      { error: '获取评论失败' },
      { status: 500 }
    )
  }
}

// 添加视频评论
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

    const { content, timestamp } = await request.json()
    const videoId = params.id

    if (!content?.trim()) {
      return NextResponse.json(
        { error: '评论内容不能为空' },
        { status: 400 }
      )
    }

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

    const comment = await prisma.videoComment.create({
      data: {
        content: content.trim(),
        timestamp: timestamp || 0,
        videoId,
        userId: session.user.id,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    })

    return NextResponse.json({
      message: '评论添加成功',
      comment: {
        id: comment.id,
        content: comment.content,
        timestamp: comment.timestamp,
        createdAt: comment.createdAt,
        user: comment.user,
      },
    })
  } catch (error) {
    console.error('Add video comment error:', error)
    return NextResponse.json(
      { error: '添加评论失败' },
      { status: 500 }
    )
  }
}