import Link from "next/link"
import Card from "@/components/common/Card"
import { NewsArticle } from "@/types"
import type { Locale } from "@/lib/i18n/config"

interface LatestNewsProps {
  dictionary: any
  locale: Locale
}

// 仮のニュースデータ（後でMDXから取得）
const getMockNews = (locale: Locale): NewsArticle[] => {
  const isJapanese = locale === 'ja'
  return [
    {
      slug: "new-album-release-2025",
      title: isJapanese ? "新アルバム「Schvitz」リリース決定！" : "New Album 'Schvitz' Release Announced!",
      date: "2025-01-15",
      excerpt: isJapanese
        ? "Vulfpeckが2年ぶりとなる新作アルバム「Schvitz」を3月にリリースすることを発表しました。"
        : "Vulfpeck announced they will release their new album 'Schvitz' in March, their first in two years.",
      tags: isJapanese ? ["アルバム", "リリース"] : ["Album", "Release"],
      image: "/images/news/schvitz-album.jpg",
    },
    {
      slug: "japan-tour-2025",
      title: isJapanese ? "初の日本ツアー開催が決定" : "First Japan Tour Confirmed",
      date: "2025-01-10",
      excerpt: isJapanese
        ? "待望の日本初上陸！東京・大阪・名古屋での公演が6月に開催されます。"
        : "The long-awaited first Japan tour! Concerts will be held in Tokyo, Osaka, and Nagoya in June.",
      tags: isJapanese ? ["ライブ", "日本ツアー"] : ["Live", "Japan Tour"],
      image: "/images/news/japan-tour.jpg",
    },
    {
      slug: "theo-solo-project",
      title: isJapanese ? "Theo Katzmanソロプロジェクト始動" : "Theo Katzman Solo Project Launches",
      date: "2025-01-05",
      excerpt: isJapanese
        ? "VulfpeckのボーカリストTheo Katzmanが新たなソロプロジェクトを発表。"
        : "Vulfpeck vocalist Theo Katzman announced his new solo project.",
      tags: isJapanese ? ["メンバー", "ソロ活動"] : ["Members", "Solo Work"],
      image: "/images/news/theo-solo.jpg",
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
              ? 'Vulfpeckの最新情報、リリース情報、ライブスケジュールなどをお届けします'
              : 'Get the latest Vulfpeck news, releases, and live schedules'
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
