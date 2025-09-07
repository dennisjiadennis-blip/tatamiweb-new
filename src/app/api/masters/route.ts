import { NextResponse } from 'next/server'
import { Master, ApiError } from '@/types'

const mastersData: Master[] = [
  {
    name: "Kenji Takahashi",
    field: "Traditional Pottery Master",
    imageUrl: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=800&auto=format&fit=crop",
    slug: "kenji-takahashi"
  },
  {
    name: "Hiroshi Yamamoto",
    field: "Woodcraft & Carpentry Master",
    imageUrl: "https://images.unsplash.com/photo-1595353389896-120815a5c13b?q=80&w=800&auto=format&fit=crop",
    slug: "hiroshi-yamamoto"
  },
  {
    name: "Akiko Sato",
    field: "Textile & Kimono Master",
    imageUrl: "https://images.unsplash.com/photo-1525328437458-f3be46b5a599?q=80&w=800&auto=format&fit=crop",
    slug: "akiko-sato"
  },
  {
    name: "Toshiro Nakamura",
    field: "Blade Forging Master",
    imageUrl: "https://images.unsplash.com/photo-1554126807-6b10f600673a?q=80&w=800&auto=format&fit=crop",
    slug: "toshiro-nakamura"
  },
  {
    name: "Yuki Tanaka",
    field: "Culinary Arts Master",
    imageUrl: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
    slug: "yuki-tanaka"
  },
  {
    name: "Masato Suzuki",
    field: "Calligraphy & Ink Master",
    imageUrl: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=800&auto=format&fit=crop",
    slug: "masato-suzuki"
  }
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  
  if (slug) {
    // 查找特定的大师
    const master = mastersData.find(master => master.slug === slug)
    
    if (master) {
      return NextResponse.json(master)
    } else {
      return NextResponse.json(
        { error: 'Master not found' } as ApiError,
        { status: 404 }
      )
    }
  }
  
  // 返回所有大师
  return NextResponse.json(mastersData)
}