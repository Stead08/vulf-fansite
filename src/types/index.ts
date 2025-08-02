// メンバー情報の型定義
export interface Member {
  id: string
  name: string
  role: string
  description: string
  image?: string
}

// アルバム情報の型定義
export interface Album {
  id: string
  title: string
  releaseDate: string
  coverImage: string
  tracks: Track[]
  description?: string
  spotifyUrl?: string
  appleUrl?: string
  credits?: {
    producer: string[]
    engineer: string[]
    mastering: string[]
    musicians: {
      name: string
      instruments: string[]
    }[]
  }
}

// トラック情報の型定義
export interface Track {
  number: number
  title: string
  duration?: string
  featured?: string[]
}

// ニュース記事の型定義
export interface NewsArticle {
  slug: string
  title: string
  date: string
  excerpt: string
  content?: string
  author?: string
  tags?: string[]
  image?: string
}

// ライブ情報の型定義
export interface LiveEvent {
  id: string
  date: string
  venue: string
  city: string
  country: string
  ticketUrl?: string
  soldOut?: boolean
  description?: string
}

// MDXフロントマターの型定義
export interface MDXFrontmatter {
  title: string
  date: string
  excerpt?: string
  author?: string
  tags?: string[]
  image?: string
  [key: string]: any
}

// Note API レスポンスの型定義
export interface NoteArticle {
  id: string
  title: string
  url: string
  publishedAt: string
  excerpt: string
  eyecatch?: string
}

// サイト設定の型定義
export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter?: string
    instagram?: string
    youtube?: string
    spotify?: string
  }
}
