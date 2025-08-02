import Link from "next/link"
import Card from "@/components/common/Card"
import { NewsArticle } from "@/types"
import type { Locale } from "@/lib/i18n/config"

interface LatestNewsProps {
  dictionary: any
  locale: Locale
}

// ダミーニュースデータ（後でMDXから取得）
const getMockNews = (locale: Locale): NewsArticle[] => {
  const isJapanese = locale === 'ja'
  return [
    {
      slug: "dummy-news-1",
      title: isJapanese ? "【ダミー】新着ニュースのタイトル1" : "[DUMMY] Latest News Title 1",
      date: "2025-01-15",
      excerpt: isJapanese
        ? "これはダミーテキストです。実際のニュース内容に置き換えてください。Lorem ipsum dolor sit amet."
        : "This is dummy text. Please replace with actual news content. Lorem ipsum dolor sit amet.",
      tags: isJapanese ? ["ダミー", "サンプル"] : ["Dummy", "Sample"],
      image: "/images/placeholder.svg",
    },
    {
      slug: "dummy-news-2",
      title: isJapanese ? "【ダミー】イベント情報のサンプル" : "[DUMMY] Event Information Sample",
      date: "2025-01-10",
      excerpt: isJapanese
        ? "ダミーのイベント情報です。実際の内容に更新してください。Consectetur adipiscing elit."
        : "Dummy event information. Please update with actual content. Consectetur adipiscing elit.",
      tags: isJapanese ? ["イベント", "テスト"] : ["Event", "Test"],
      image: "/images/placeholder.svg",
    },
    {
      slug: "dummy-news-3",
      title: isJapanese ? "【ダミー】アップデート情報" : "[DUMMY] Update Information",
      date: "2025-01-05",
      excerpt: isJapanese
        ? "サンプルのアップデート情報です。実際のコンテンツで置き換えが必要です。"
        : "Sample update information. Needs to be replaced with actual content.",
      tags: isJapanese ? ["更新", "プレースホルダー"] : ["Update", "Placeholder"],
      image: "/images/placeholder.svg",
    },
  ]
}

export default function LatestNews({ dictionary, locale }: LatestNewsProps) {
  const mockNews = getMockNews(locale)
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brown-900 mb-4">
            {dictionary.news.title}
          </h2>
          <p className="text-lg text-brown-600 max-w-2xl mx-auto">
            {locale === 'ja' 
              ? 'ここにはダミーのニュース情報が表示されています。実際のコンテンツに置き換えてください。'
              : 'This section displays dummy news content. Please replace with actual content.'
            }
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockNews.map(article => (
            <Card
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              date={article.date}
              image={article.image}
              href={`/${locale}/news/${article.slug}`}
              tags={article.tags}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-700 font-medium transition-colors"
          >
            {locale === 'ja' ? 'すべてのニュースを見る' : 'View All News'}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
