import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"
import Link from "next/link"

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  
  const newsItems = [
    {
      id: "new-album-release-2025",
      title: locale === 'ja' ? "新アルバム「Schvitz」リリース決定！" : "New Album 'Schvitz' Release Announced!",
      date: "2025-01-15",
      excerpt: locale === 'ja'
        ? "Vulfpeckが2年ぶりとなる新作アルバム「Schvitz」を3月にリリースすることを発表しました。"
        : "Vulfpeck announced they will release their new album 'Schvitz' in March, their first in two years.",
      category: locale === 'ja' ? "リリース" : "Release"
    },
    {
      id: "japan-tour-2025",
      title: locale === 'ja' ? "初の日本ツアー開催が決定" : "First Japan Tour Confirmed",
      date: "2025-01-10",
      excerpt: locale === 'ja'
        ? "待望の日本初上陸！東京・大阪・名古屋での公演が6月に開催されます。"
        : "The long-awaited first Japan tour! Concerts will be held in Tokyo, Osaka, and Nagoya in June.",
      category: locale === 'ja' ? "ライブ" : "Live"
    },
    {
      id: "theo-solo-project",
      title: locale === 'ja' ? "Theo Katzmanソロプロジェクト始動" : "Theo Katzman Solo Project Launches",
      date: "2025-01-05",
      excerpt: locale === 'ja'
        ? "VulfpeckのボーカリストTheo Katzmanが新たなソロプロジェクトを発表。"
        : "Vulfpeck vocalist Theo Katzman announced his new solo project.",
      category: locale === 'ja' ? "メンバー" : "Members"
    },
    {
      id: "wong-notes-podcast",
      title: locale === 'ja' ? "Wong Notes ポッドキャスト新エピソード" : "New Wong Notes Podcast Episode",
      date: "2024-12-20",
      excerpt: locale === 'ja'
        ? "Cory Wongのポッドキャストに全メンバーが出演。制作秘話を語る。"
        : "All members appear on Cory Wong's podcast, sharing behind-the-scenes stories.",
      category: locale === 'ja' ? "メディア" : "Media"
    },
    {
      id: "vulfpeck-documentary",
      title: locale === 'ja' ? "ドキュメンタリー映画制作決定" : "Documentary Film in Production",
      date: "2024-12-15",
      excerpt: locale === 'ja'
        ? "Vulfpeckの10年間の軌跡を追うドキュメンタリー映画の制作が発表されました。"
        : "A documentary film following Vulfpeck's 10-year journey has been announced.",
      category: locale === 'ja' ? "メディア" : "Media"
    }
  ]
  
  return (
    <div className="container section-padding">
      <h1 className="text-4xl font-display font-bold text-brown-900 mb-8">
        {dictionary.news.title}
      </h1>
      
      <div className="space-y-6">
        {newsItems.map((item) => (
          <article key={item.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-forest-100 text-forest-700 rounded-full">
                {item.category}
              </span>
              <time className="text-sm text-brown-500">{item.date}</time>
            </div>
            
            <h2 className="text-xl font-display font-semibold text-brown-900 mb-3">
              <Link 
                href={`/${locale}/news/${item.id}`}
                className="hover:text-forest-600 transition-colors"
              >
                {item.title}
              </Link>
            </h2>
            
            <p className="text-brown-600 mb-4">{item.excerpt}</p>
            
            <Link 
              href={`/${locale}/news/${item.id}`}
              className="inline-flex items-center text-forest-600 hover:text-forest-700 font-medium transition-colors"
            >
              {dictionary.news.readMore}
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}