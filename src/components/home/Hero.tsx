import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-cream-100 to-cream-200 overflow-hidden">
      <div className="container section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-brown-900 mb-6 animate-in">
            VULFPECK
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-brown-700 mb-8">ミニマル・ファンクの革命児たち</p>

          {/* Description */}
          <p className="text-lg text-brown-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            音楽業界の常識を覆し続ける4人組ファンクバンド、Vulfpeck。
            <br />
            そのグルーヴと革新的な活動を日本のファンにお届けします。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary inline-block">
              バンドについて知る
            </Link>
            <Link href="/discography" className="btn-secondary inline-block">
              ディスコグラフィーを見る
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-forest-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-brown-200 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Featured Image Section */}
      <div className="container pb-16">
        <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
          <Image
            src="/images/placeholder.svg"
            alt="Vulfpeck Band"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <p className="text-white text-sm font-medium">
              Jack Stratton, Theo Katzman, Woody Goss, Joe Dart
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
