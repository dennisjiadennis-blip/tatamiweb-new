import { NextResponse } from 'next/server'
import { Master, ApiError } from '@/types'

const mastersData: Master[] = [
  {
    id: "1",
    slug: "hiroki-sato",
    imageUrl: "https://images.unsplash.com/photo-1549237511-6b684e00b863?q=80&w=1740&auto=format&fit=crop", // Portrait of a brewer
    works: [ "https://images.unsplash.com/photo-1585412211260-8d8a7de4f274?q=80&w=1740&auto=format&fit=crop" ], // Sake bottles
    i18n: {
      en: {
        name: "Hiroki Sato",
        field: "Master Sake Brewer",
        bio: "Hiroki Sato is a fourth-generation Toji (Master Brewer) from Niigata, a region famed for its pure water and premium rice. He honors centuries-old traditions while subtly innovating to create sake that speaks to a modern palate.",
        philosophy: "Sake is a living thing. It's a conversation between rice, water, and yeast. My role is simply to be a respectful mediator in that conversation."
      }
    }
  },
  {
    id: "2",
    slug: "kenzo-tanaka",
    imageUrl: "https://images.unsplash.com/photo-1620432856538-4b7b2def23d7?q=80&w=1740&auto=format&fit=crop", // Portrait of a craftsman
    works: [ "https://images.unsplash.com/photo-1610350320312-335b2dec8283?q=80&w=1740&auto=format&fit=crop" ], // Iron Kettle
    i18n: {
      en: {
        name: "Kenzo Tanaka",
        field: "Nambu Ironware Artisan",
        bio: "From a small workshop in Iwate, Kenzo Tanaka forges Nambu Tekki (ironware) with techniques passed down since the 17th century. Each iron kettle he creates is known to last for over a century.",
        philosophy: "Iron has a stubborn heart. You cannot force it. You must persuade it with heat, with rhythm, and with patience. The hammer is my paintbrush."
      }
    }
  },
  {
    id: "3",
    slug: "yuki-kimura",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop", // Portrait of an architect
    works: [ "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1740&auto=format&fit=crop" ], // Minimalist architecture
    i18n: {
      en: {
        name: "Yuki Kimura",
        field: "Master Architect",
        bio: "Yuki Kimura is a renowned architect known for her minimalist designs that harmoniously blend traditional Japanese aesthetics with modern living. Her work focuses on light, shadow, and natural materials.",
        philosophy: "A building should not be a monument. It should be a quiet vessel that holds the lives and memories of those within. My job is to create beautiful silence."
      }
    }
  },
  {
    id: "4",
    slug: "takeru-honda",
    imageUrl: "https://images.unsplash.com/photo-1593432924968-04f8602b9370?q=80&w=1887&auto=format&fit=crop", // Portrait of a powerful man
    works: [ "https://images.unsplash.com/photo-1594911403935-b6d8a39a61d6?q=80&w=1740&auto=format&fit=crop" ], // Sumo ring
    i18n: {
      en: {
        name: "Takeru Honda",
        field: "Sumo Grand Champion (Yokozuna)",
        bio: "Once a legendary Yokozuna, Takeru Honda now runs a stable to train the next generation of wrestlers. He embodies the principles of 'hinkaku' (dignity) and 'chikara' (power) central to the sport.",
        philosophy: "The ring is small, but it contains the universe. Victory is not about defeating your opponent, but about conquering the weakness within yourself."
      }
    }
  },
  {
    id: "5",
    slug: "chiyo",
    imageUrl: "https://images.unsplash.com/photo-1545920367-e4e7c7031b67?q=80&w=1887&auto=format&fit=crop", // Portrait of a geisha
    works: [ "https://images.unsplash.com/photo-1589218292237-7752b4515126?q=80&w=1740&auto=format&fit=crop" ], // Tea ceremony
    i18n: {
      en: {
        name: "Chiyo",
        field: "Geisha & Traditional Arts Master",
        bio: "Known simply as Chiyo in the Gion district of Kyoto, she is a master of traditional dance, the tea ceremony, and the shamisen. She is a living guardian of Japan's intangible cultural heritage.",
        philosophy: "Beauty is not something you see. It is something you feel. It is the sincerity in a gesture, the silence between notes, the dedication of a lifetime to a single art form."
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