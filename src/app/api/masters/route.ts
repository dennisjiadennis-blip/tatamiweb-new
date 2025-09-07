import { NextResponse } from 'next/server'
import { Master, ApiError } from '@/types'

const mastersData: Master[] = [
  {
    id: "1",
    slug: "yuki-tanaka",
    imageUrl: "/images/yuki-tanaka-portrait.jpg",
    works: ["/images/yuki-tanaka-work-1.jpg", "/images/yuki-tanaka-work-2.jpg"],
    i18n: {
      en: {
        name: "Yuki Tanaka",
        field: "Kaiseki Cuisine Master",
        bio: "Yuki Tanaka is a modern interpreter of kaiseki cuisine, incorporating seasonal changes into every dish. Her cuisine is not only a feast for the taste buds, but also a banquet for the eyes and soul.",
        philosophy: "Cuisine is like tea ceremony, precious in its once-in-a-lifetime encounter. Each meal is a unique meeting that should be savored with heart in the present moment."
      }
    }
  },
  {
    id: "2",
    slug: "masao-yamamoto",
    imageUrl: "/images/masao-yamamoto-portrait.jpg",
    works: ["/images/masao-yamamoto-work-1.jpg", "/images/masao-yamamoto-work-2.jpg"],
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
    id: "3",
    slug: "akiko-sato",
    imageUrl: "/images/akiko-sato-portrait.jpg",
    works: ["/images/akiko-sato-work-1.jpg", "/images/akiko-sato-work-2.jpg"],
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
    id: "4",
    slug: "toshiro-nakamura",
    imageUrl: "/images/toshiro-nakamura-portrait.jpg",
    works: ["/images/toshiro-nakamura-work-1.jpg", "/images/toshiro-nakamura-work-2.jpg"],
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
    id: "5",
    slug: "hiroto-suzuki",
    imageUrl: "/images/hiroto-suzuki-portrait.jpg",
    works: ["/images/hiroto-suzuki-work-1.jpg", "/images/hiroto-suzuki-work-2.jpg"],
    i18n: {
      en: {
        name: "Hiroto Suzuki",
        field: "Traditional Woodworking Master",
        bio: "Hiroto Suzuki is a master craftsman specializing in traditional Japanese woodworking techniques. His work exemplifies the perfect harmony between functionality and beauty that defines Japanese craftsmanship.",
        philosophy: "Wood has its own spirit and character. My role is not to dominate, but to listen and guide its natural beauty into forms that serve and inspire."
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