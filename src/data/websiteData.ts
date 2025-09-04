// Master Craftsmen Data
export interface Master {
  id: string
  slug: string
  nameJa: string
  nameEn: string
  profession: string
  professionJa: string
  location: string
  experience: number
  rating: number
  imageProfile: string
  imageDetail: string
  biographyJa: string
  biographyEn: string
  achievementsJa: string
  achievementsEn: string
  specialty: string
  featured: boolean
}

export const mastersData: Master[] = [
  {
    id: "1",
    slug: "hiroki-sato",
    nameJa: "佐藤 浩樹",
    nameEn: "Hiroki Sato",
    profession: "Sake Brewer",
    professionJa: "清酒酿酒師",
    location: "Niigata Prefecture",
    experience: 25,
    rating: 4.9,
    imageProfile: "/photo/1a.png",
    imageDetail: "/photo/1b.png",
    biographyJa: "Hiroki の家族世代在新潟县酿酒，他从小在米香和酒窖的微光中长大。他曾在法国学习酿酒学，但最终选择回到家乡，将现代科学与家族传承的古法'生酛造り'相结合。他的酒以清澈、细腻和富有层次感著称，被誉为'能品尝出风土的液体艺术'。",
    biographyEn: "Hiroki's family has been brewing sake in Niigata for generations. He grew up surrounded by the aroma of rice and the dim light of the brewery cellar. After studying oenology in France, he returned to his hometown to combine modern science with his family's traditional \"Kimoto\" method. His sake is known for its clarity, delicacy, and multi-layered flavors, earning him the reputation of a \"liquid art that captures the terroir.\"",
    achievementsJa: "连续十年在'全国新酒鉴评会'上获得金奖。2015 年被授予'新潟名誉清酒酿造家'称号。他的酒'雪之吟'成为多家米其林三星餐厅的指定用酒。",
    achievementsEn: "Won the gold medal for ten consecutive years at the \"National New Sake Appraising Fair.\" Named \"Niigata's Honorary Sake Brewer\" in 2015. His sake, \"Yuki no Gin,\" is the designated choice for multiple three-Michelin-star restaurants.",
    specialty: "Traditional Kimoto Sake Brewing",
    featured: true
  },
  {
    id: "2", 
    slug: "kenzo-tanaka",
    nameJa: "田中 健三",
    nameEn: "Kenzo Tanaka",
    profession: "Iron Kettle Master",
    professionJa: "鉄壶制造師傅",
    location: "Iwate Prefecture", 
    experience: 35,
    rating: 5.0,
    imageProfile: "/photo/2a.png",
    imageDetail: "/photo/2b.png",
    biographyJa: "Kenzo 是岩手县盛冈市'南部铁器'的第五代传人。他的一生都在与铁砂、木炭和火焰打交道。他坚持使用传统的手工铸造和錾刻技术，每一把铁壶都经过上百道工序，从熔铁、铸模、脱模到最终的着色和抛光，都由他亲手完成。他的作品不仅是茶具，更是能够传承百年的艺术品。",
    biographyEn: "Kenzo is the fifth-generation successor of \"Nambu Ironware\" in Morioka, Iwate. His life has been dedicated to working with iron sand, charcoal, and fire. He insists on using traditional hand-casting and chiseling techniques, personally completing over a hundred steps for each iron kettle. His works are not just teaware but century-old pieces of art.",
    achievementsJa: "2000 年被认定为'日本传统工艺士'。他的作品《风月壶》被法国卢浮宫博物馆收藏。曾受邀为多国首脑定制国礼铁壶。",
    achievementsEn: "Recognized as a \"Traditional Japanese Craftsman\" in 2000. His work, \"Fugetsu Kettle,\" is held in the Louvre Museum in France. He has been invited to create state-gift iron kettles for multiple heads of state.",
    specialty: "Nambu Ironware Casting",
    featured: true
  },
  {
    id: "3",
    slug: "yuki-kimura", 
    nameJa: "木村 悠希",
    nameEn: "Yuki Kimura",
    profession: "Architect",
    professionJa: "建築師",
    location: "Tokyo",
    experience: 18,
    rating: 4.8,
    imageProfile: "/photo/3a.png",
    imageDetail: "/photo/3b.png", 
    biographyJa: "Yuki 是日本当代最受尊敬的日式建筑师之一。她的设计理念是'融自然于结构'，将光影、水、木和石等自然元素融入到建筑中，创造出宁静、和谐的居住空间。她最擅长使用传统榫卯结构和可持续材料，让建筑本身就像一件大型的工艺品。",
    biographyEn: "Yuki is one of Japan's most respected contemporary architects specializing in Japanese-style design. Her philosophy, \"integrating nature into structure,\" blends natural elements like light, water, wood, and stone to create serene and harmonious living spaces. She excels at using traditional joinery and sustainable materials, making her buildings large-scale works of art.",
    achievementsJa: "凭借项目《光之庵》获得普利兹克建筑奖提名。设计的'云水庭'私人庭院被评为日本最美庭院。在多个国际建筑论坛上发表关于'可持续日式建筑'的演讲。",
    achievementsEn: "Nominated for the Pritzker Architecture Prize for her \"An of Light\" project. Her private courtyard, \"Cloud and Water Garden,\" was named the most beautiful garden in Japan. Has spoken at numerous international architectural forums on \"sustainable Japanese architecture.\"",
    specialty: "Sustainable Japanese Architecture",
    featured: true
  },
  {
    id: "4",
    slug: "takeru-honda",
    nameJa: "本田 猛", 
    nameEn: "Takeru Honda",
    profession: "Sumo Wrestler",
    professionJa: "相撲運動員",
    location: "Tokyo",
    experience: 12,
    rating: 4.7,
    imageProfile: "/photo/4a.png",
    imageDetail: "/photo/4b.png",
    biographyJa: "Takeru 是日本相扑界的明日之星，以其极强的爆发力和精湛的技巧闻名。他在北海道的牧场长大，从小就展现出惊人的力量。进入相扑界后，他通过严苛的训练和纪律，将力量转化为艺术，每一次比赛都像一场仪式。他将相扑视为一种修行，相信'道'比'力'更重要。",
    biographyEn: "Takeru is a rising star in the sumo world, known for his explosive power and refined technique. Raised on a farm in Hokkaido, he showed extraordinary strength from a young age. He sees sumo as a form of spiritual practice, believing that \"the Way\" is more important than \"power.\"",
    achievementsJa: "在 26 岁时晋升为'大关'，是相扑界近年来最年轻的大关之一。连续三个'场所'（相扑比赛周期）赢得优胜。以其体育精神和慈善活动受到广泛尊敬。",
    achievementsEn: "Promoted to \"Ozeki\" (champion rank) at age 26, one of the youngest in recent sumo history. Won three consecutive \"basho\" (sumo tournaments). Widely respected for his sportsmanship and charitable activities.",
    specialty: "Traditional Sumo Wrestling",
    featured: false
  },
  {
    id: "5",
    slug: "chiyo",
    nameJa: "千代",
    nameEn: "Chiyo", 
    profession: "Geisha",
    professionJa: "藝妓",
    location: "Kyoto",
    experience: 15,
    rating: 4.9,
    imageProfile: "/photo/5a.png",
    imageDetail: "/photo/5b.png",
    biographyJa: "Chiyo 是京都祇园最顶尖的艺妓之一。她从小接受严格的传统艺术训练，精通茶道、花道、舞蹈、歌谣和三味线。她不仅是美的化身，更是日本传统文化的活化石。她的每一次表演都充满了故事和情感，让人们在优雅的艺术中感受到文化的深度和灵魂。",
    biographyEn: "Chiyo is one of the top geisha in Kyoto's Gion district. She underwent rigorous traditional arts training from a young age, mastering the tea ceremony, ikebana, dance, songs, and shamisen. Her performances are full of stories and emotion, allowing people to experience the profound depth of Japanese culture through elegant art.",
    achievementsJa: "在 28 岁时成为'一本'艺妓，代表着行业内的最高荣誉。曾受邀在联合国教科文组织的文化活动上进行表演。是多部日本传统文化纪录片的主角，致力于向世界推广艺妓艺术。",
    achievementsEn: "Awarded the title of \"Ippon\" at age 28, representing the highest honor in the geisha profession. Invited to perform at a UNESCO cultural event. Featured in numerous documentaries on Japanese traditional culture, dedicated to promoting geisha art globally.",
    specialty: "Traditional Geisha Arts",
    featured: false
  }
]

// Journey Experience Data
export interface Journey {
  id: string
  titleJa: string
  titleEn: string
  image: string
  location: string
  duration: string
  groupSize: string
  price: string
  rating: number
  category: string
  featured: boolean
  description: string
  partnerUrl: string
}

export const journeyData: Journey[] = [
  {
    id: "1",
    titleJa: "京都禪意庭院",
    titleEn: "Kyoto Zen Gardens",
    image: "/photo/aa.png",
    location: "Kyoto",
    duration: "3 days",
    groupSize: "4-8 people",
    price: "¥85,000",
    rating: 4.9,
    category: "Spiritual Journey",
    featured: true,
    description: "Experience the profound tranquility of Kyoto's most sacred temple gardens, guided by Zen masters who reveal the philosophy behind each carefully placed stone and perfectly raked sand pattern.",
    partnerUrl: "https://kyotogarden-tours.com"
  },
  {
    id: "2", 
    titleJa: "陶藝體驗",
    titleEn: "Pottery Workshop",
    image: "/photo/ab.png",
    location: "Shiga Prefecture",
    duration: "2 days",
    groupSize: "6-12 people", 
    price: "¥45,000",
    rating: 4.8,
    category: "Craft Mastery",
    featured: true,
    description: "Learn the ancient art of Japanese ceramics from master potters whose families have shaped clay for centuries, creating your own pieces with traditional techniques.",
    partnerUrl: "https://shigaraki-pottery.com"
  },
  {
    id: "3",
    titleJa: "茶道儀式", 
    titleEn: "Tea Ceremony",
    image: "/photo/ac.png",
    location: "Kyoto",
    duration: "Half day",
    groupSize: "2-6 people",
    price: "¥28,000",
    rating: 4.9,
    category: "Cultural Ritual",
    featured: true,
    description: "Immerse yourself in the precise movements and deep philosophy of the traditional Japanese tea ceremony, guided by certified tea masters in authentic settings.",
    partnerUrl: "https://kyoto-tea-ceremony.com"
  },
  {
    id: "4",
    titleJa: "竹林漫步",
    titleEn: "Bamboo Forest Walk", 
    image: "/photo/ad.png",
    location: "Arashiyama, Kyoto",
    duration: "Full day",
    groupSize: "4-10 people",
    price: "¥32,000",
    rating: 4.7,
    category: "Nature Connection",
    featured: false,
    description: "Walk through the mystical bamboo groves of Arashiyama while learning about the cultural significance of bamboo in Japanese crafts and philosophy.",
    partnerUrl: "https://arashiyama-experiences.com"
  },
  {
    id: "5",
    titleJa: "和服製作工坊",
    titleEn: "Kimono Craft Workshop",
    image: "/photo/ae.png",
    location: "Tokyo",
    duration: "4 days",
    groupSize: "3-8 people",
    price: "¥120,000", 
    rating: 4.8,
    category: "Textile Arts",
    featured: false,
    description: "Discover the intricate art of kimono creation with master textile artists, from fabric selection to final stitching, understanding the cultural meaning behind each pattern.",
    partnerUrl: "https://kimono-workshop-tokyo.com"
  },
  {
    id: "6",
    titleJa: "日式溫泉旅館",
    titleEn: "Japanese Onsen Ryokan",
    image: "/photo/af.png",
    location: "Hakone",
    duration: "2 nights",
    groupSize: "2-4 people",
    price: "¥95,000",
    rating: 4.9,
    category: "Traditional Hospitality",
    featured: false,
    description: "Experience authentic Japanese hospitality in a traditional mountain ryokan, with natural hot springs, kaiseki dining, and the art of omotenashi service.",
    partnerUrl: "https://hakone-traditional-ryokan.com"
  }
]

// Video Stories Data (for Stories page)
export interface VideoStory {
  id: number
  title: string
  coverImage: string
  duration: string
  masterName: string
  category: string
}

export const videoStoriesData: VideoStory[] = [
  {
    id: 1,
    title: "The Art of Traditional Sake Brewing: A Master's 25-Year Journey Through Rice and Fire",
    coverImage: "/photo/1b.png",
    duration: "12:34",
    masterName: "Hiroki Sato",
    category: "Sake Brewing"
  },
  {
    id: 2,
    title: "Iron and Fire: The Sacred Craft of Nambu Ironware",
    coverImage: "/photo/2b.png",
    duration: "8:45",
    masterName: "Kenzo Tanaka",
    category: "Ironwork"
  },
  {
    id: 3,
    title: "Architecture of Harmony: Building with Nature's Philosophy",
    coverImage: "/photo/3b.png",
    duration: "15:22",
    masterName: "Yuki Kimura",
    category: "Architecture"
  },
  {
    id: 4,
    title: "The Way of Sumo: Strength, Spirit, and Ancient Tradition",
    coverImage: "/photo/4b.png",
    duration: "9:17",
    masterName: "Takeru Honda",
    category: "Sumo"
  },
  {
    id: 5,
    title: "The Art of Geisha: Preserving Beauty and Cultural Soul",
    coverImage: "/photo/5b.png",
    duration: "18:03",
    masterName: "Chiyo",
    category: "Traditional Arts"
  },
  {
    id: 6,
    title: "Zen Gardens: Finding Peace in Every Stone and Sand Pattern",
    coverImage: "/photo/aa.png",
    duration: "11:28",
    masterName: "Various Masters",
    category: "Zen Gardens"
  },
  {
    id: 7,
    title: "The Philosophy of Japanese Tea Ceremony: Mindfulness in Every Movement",
    coverImage: "/photo/ac.png",
    duration: "13:56",
    masterName: "Various Masters",
    category: "Tea Ceremony"
  },
  {
    id: 8,
    title: "Bamboo Wisdom: Nature's Gift to Japanese Craftsmanship",
    coverImage: "/photo/ad.png",
    duration: "16:41",
    masterName: "Various Masters",
    category: "Bamboo Craft"
  }
]