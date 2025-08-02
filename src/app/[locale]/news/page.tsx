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
      id: "dummy-news-1",
      title: locale === 'ja' ? "【ダミー】新着ニュースのタイトル1" : "[DUMMY] Latest News Title 1",
      date: "2025-01-15",
      excerpt: locale === 'ja'
        ? "これはダミーテキストです。実際のニュース内容に置き換えてください。Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        : "This is dummy text. Please replace with actual news content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: locale === 'ja' ? "お知らせ" : "News"
    },
    {
      id: "dummy-news-2",
      title: locale === 'ja' ? "【ダミー】イベント情報のサンプル" : "[DUMMY] Event Information Sample",
      date: "2025-01-10",
      excerpt: locale === 'ja'
        ? "ダミーのイベント情報です。実際の内容に更新してください。sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        : "Dummy event information. Please update with actual content. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: locale === 'ja' ? "イベント" : "Event"
    },
    {
      id: "dummy-news-3",
      title: locale === 'ja' ? "【ダミー】アップデート情報" : "[DUMMY] Update Information",
      date: "2025-01-05",
      excerpt: locale === 'ja'
        ? "サンプルのアップデート情報です。実際のコンテンツで置き換えが必要です。Ut enim ad minim veniam, quis nostrud exercitation."
        : "Sample update information. Needs to be replaced with actual content. Ut enim ad minim veniam, quis nostrud exercitation.",
      category: locale === 'ja' ? "更新情報" : "Updates"
    },
    {
      id: "dummy-news-4",
      title: locale === 'ja' ? "【ダミー】メディア掲載のお知らせ" : "[DUMMY] Media Coverage Notice",
      date: "2024-12-20",
      excerpt: locale === 'ja'
        ? "ダミーのメディア掲載情報です。実際の掲載情報に変更してください。Ullamco laboris nisi ut aliquip ex ea commodo consequat."
        : "Dummy media coverage information. Please change to actual coverage details. Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      category: locale === 'ja' ? "メディア" : "Media"
    },
    {
      id: "dummy-news-5",
      title: locale === 'ja' ? "【ダミー】重要なお知らせ" : "[DUMMY] Important Announcement",
      date: "2024-12-15",
      excerpt: locale === 'ja'
        ? "これはプレースホルダーテキストです。本番環境では実際のお知らせ内容に差し替えてください。Duis aute irure dolor in reprehenderit."
        : "This is placeholder text. Replace with actual announcement content in production. Duis aute irure dolor in reprehenderit.",
      category: locale === 'ja' ? "重要" : "Important"
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