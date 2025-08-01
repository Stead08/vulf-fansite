import Link from "next/link"
import Card from "@/components/common/Card"
import { NewsArticle } from "@/types"

// 仮のニュースデータ（後でMDXから取得）
const mockNews: NewsArticle[] = [
  {
    slug: "new-album-release-2025",
    title: "新アルバム「Schvitz」リリース決定！",
    date: "2025-01-15",
    excerpt:
      "Vulfpeckが2年ぶりとなる新作アルバム「Schvitz」を3月にリリースすることを発表しました。",
    tags: ["アルバム", "リリース"],
    image: "/images/news/schvitz-album.jpg",
  },
  {
    slug: "japan-tour-2025",
    title: "初の日本ツアー開催が決定",
    date: "2025-01-10",
    excerpt: "待望の日本初上陸！東京・大阪・名古屋での公演が6月に開催されます。",
    tags: ["ライブ", "日本ツアー"],
    image: "/images/news/japan-tour.jpg",
  },
  {
    slug: "theo-solo-project",
    title: "Theo Katzmanソロプロジェクト始動",
    date: "2025-01-05",
    excerpt: "VulfpeckのボーカリストTheo Katzmanが新たなソロプロジェクトを発表。",
    tags: ["メンバー", "ソロ活動"],
    image: "/images/news/theo-solo.jpg",
  },
]

export default function LatestNews() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brown-900 mb-4">
            最新ニュース
          </h2>
          <p className="text-lg text-brown-600 max-w-2xl mx-auto">
            Vulfpeckの最新情報、リリース情報、ライブスケジュールなどをお届けします
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
              href={`/news/${article.slug}`}
              tags={article.tags}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-700 font-medium transition-colors"
          >
            すべてのニュースを見る
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
