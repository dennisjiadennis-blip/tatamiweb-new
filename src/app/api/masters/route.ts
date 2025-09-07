import { NextResponse } from 'next/server'
import { Master, ApiError } from '@/types'

const mastersData: Master[] = [
  {
    id: "1",
    slug: "masao-yamamoto",
    imageUrl: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=800&auto=format&fit=crop",
    works: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop"
    ],
    i18n: {
      en: {
        name: "Masao Yamamoto",
        field: "Bizen Ware Pottery Master",
        bio: "A contemporary successor of Bizen ware, Master Yamamoto's work has won the Commissioner for Cultural Affairs Award. He insists on hand-shaping and refuses any modern mechanical assistance.",
        philosophy: "True pottery is not about showing off technique, but about inner peace. Only with a calm mind can one feel the breath of the clay and the temper of the fire."
      }
    }
  },
  {
    id: "2",
    slug: "akiko-sato",
    imageUrl: "https://images.unsplash.com/photo-1525328437458-f3be46b5a599?q=80&w=800&auto=format&fit=crop",
    works: [
      "https://images.unsplash.com/photo-1511406322959-44161a01b9a2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=800&auto=format&fit=crop"
    ],
    i18n: {
      en: {
        name: "Akiko Sato",
        field: "Kyo-yuzen Dyeing Master",
        bio: "As the third-generation successor of Kyo-yuzen dyeing, Akiko Sato's work blends traditional techniques with modern aesthetics, each piece a poem of Kyoto's cultural heritage.",
        philosophy: "Fabric is like life; truth is found in the interplay of warp and weft. Beauty is not in opulence, but in the perfect touch of elegance and restraint."
      }
    }
  },
  {
    id: "3",
    slug: "toshiro-nakamura",
    imageUrl: "https://images.unsplash.com/photo-1554126807-6b10f600673a?q=80&w=800&auto=format&fit=crop",
    works: [
      "https://images.unsplash.com/photo-1595353389896-120815a5c13b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop"
    ],
    i18n: {
      en: {
        name: "Toshiro Nakamura",
        field: "Blade Forging Master",
        bio: "Toshiro Nakamura is a national treasure-level master of Japanese sword forging, inheriting ancient school forging techniques. Each blade he forges embodies the spirit of bushido, with patterns flowing like water.",
        philosophy: "The sword reflects the heart, and forging is spiritual practice. Through countless hammer strikes, not only is steel refined, but the craftsman's soul is elevated."
      }
    }
  },
  {
    id: "4",
    slug: "yuki-tanaka",
    imageUrl: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
    works: [
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541413807996-748925232da9?q=80&w=2070&auto=format&fit=crop"
    ],
    i18n: {
      en: {
        name: "Yuki Tanaka",
        field: "Kaiseki Cuisine Master",
        bio: "Yuki Tanaka is a modern interpreter of kaiseki cuisine, incorporating seasonal changes into every dish. Her cuisine is not only a feast for the taste buds, but also a banquet for the eyes and soul.",
        philosophy: "Cuisine is like tea ceremony, precious in its once-in-a-lifetime encounter. Each meal is a unique meeting that should be savored with heart in the present moment."
      }
    }
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