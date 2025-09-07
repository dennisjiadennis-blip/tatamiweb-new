import type { Master } from '@/types';

export const mastersData: Master[] = [
  {
    id: "1",
    slug: "hiroki-sato",
    imageUrl: "/images/Gemini_Generated_Image_pcmj4ppcmj4ppcmj.png",
    works: [ "/images/Gemini_Generated_Image_6mlp76mlp76mlp76.png" ],
    i18n: {
      en: {
        name: "Hiroki Sato",
        field: "Sake Master (Tōji)",
        bio: "Hiroki Sato is a fourth-generation Tōji (Master Brewer) from Niigata, a region famed for its pure water and premium rice. He honors centuries-old traditions while subtly innovating to create sake that speaks to a modern palate. Winner of multiple gold medals at the National New Sake Appraisal, his 'Kūsen' series was selected as state banquet sake for the G7 Summit.",
        philosophy: "Sake is a living thing. It's a conversation between rice, water, and yeast. My role is simply to be a respectful mediator in that conversation."
      }
    }
  },
  {
    id: "2",
    slug: "kenzo-tanaka",
    imageUrl: "/images/Gemini_Generated_Image_w3j2hmw3j2hmw3j2.png",
    works: [ "/images/Gemini_Generated_Image_q1uu34q1uu34q1uu.png" ],
    i18n: {
      en: {
        name: "Kenzo Tanaka",
        field: "Iron Forging Master",
        bio: "From a small workshop in Iwate, Kenzo Tanaka forges Nambu Tekki (ironware) with techniques passed down since the 17th century. Each iron kettle he creates is known to last for over a century. Recipient of the Prime Minister's Award at the Japan Traditional Crafts Exhibition, he is designated as an Iwate Prefecture Intangible Cultural Property.",
        philosophy: "Iron has a stubborn heart. You cannot force it. You must persuade it with heat, with rhythm, and with patience. The hammer is my paintbrush."
      }
    }
  },
  {
    id: "3",
    slug: "yuki-kimura",
    imageUrl: "/images/Gemini_Generated_Image_18fph818fph818fp.png",
    works: [ "/images/Gemini_Generated_Image_9zcaqq9zcaqq9zca.png" ],
    i18n: {
      en: {
        name: "Yuki Kimura",
        field: "Architectural Master",
        bio: "Yuki Kimura is a renowned architect known for her minimalist designs that harmoniously blend traditional Japanese aesthetics with modern living. Her work focuses on light, shadow, and natural materials. One of the youngest recipients of the Japan Institute of Architects Grand Prix, her 'Chapel of Light and Shadow' was named one of the 'Top 10 Spiritual Buildings in the World.'",
        philosophy: "A building should not be a monument. It should be a quiet vessel that holds the lives and memories of those within. My job is to create beautiful silence."
      }
    }
  },
  {
    id: "4",
    slug: "takeru-honda",
    imageUrl: "/images/Gemini_Generated_Image_97azq997azq997az.png",
    works: [ "/images/Gemini_Generated_Image_wgkzgawgkzgawgkz.png" ],
    i18n: {
      en: {
        name: "Takeru Honda",
        field: "Sumo Champion (Yokozuna)",
        bio: "Once a legendary Yokozuna, Takeru Honda now runs a stable to train the next generation of wrestlers. He embodies the principles of 'hinkaku' (dignity) and 'chikara' (power) central to the sport. 3-time winner of the Emperor's Cup, he holds a record of 28 consecutive wins as a Yokozuna.",
        philosophy: "The ring is small, but it contains the universe. Victory is not about defeating your opponent, but about conquering the weakness within yourself."
      }
    }
  },
  {
    id: "5",
    slug: "chiyo",
    imageUrl: "/images/Gemini_Generated_Image_pglhajpglhajpglh.png",
    works: [ "/images/Gemini_Generated_Image_e27vtie27vtie27v.png", "/images/Gemini_Generated_Image_f7owfwf7owfwf7ow.png" ],
    i18n: {
      en: {
        name: "Chiyo",
        field: "Geisha & Arts Master",
        bio: "Known simply as Chiyo in the Gion district of Kyoto, she is a master of traditional dance, the tea ceremony, and the shamisen. She is a living guardian of Japan's intangible cultural heritage. Designated by the Japanese government as a Preserver of Important Intangible Cultural Properties (Living National Treasure), she has performed for numerous foreign dignitaries.",
        philosophy: "Beauty is not something you see. It is something you feel. It is the sincerity in a gesture, the silence between notes, the dedication of a lifetime to a single art form."
      }
    }
  }
];

export function getMasters(): Master[] {
  return mastersData;
}

export function getMasterBySlug(slug: string): Master | undefined {
  return mastersData.find(master => master.slug === slug);
}