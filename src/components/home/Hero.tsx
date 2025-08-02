import Link from "next/link"
import OGPCardWrapper from "@/components/common/OGPCardWrapper"

interface HeroProps {
  dictionary: any
}

export default function Hero({ dictionary }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-cream-100 to-cream-200 overflow-hidden">
      <div className="container section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-brown-900 mb-6 animate-in">
            {dictionary.home.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-brown-700 mb-8">{dictionary.home.hero.subtitle}</p>

          {/* Description */}
          <p className="text-lg text-brown-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            {dictionary.home.welcome}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary inline-block">
              {dictionary.navigation.about}
            </Link>
            <Link href="/discography" className="btn-secondary inline-block">
              {dictionary.navigation.discography}
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-forest-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-brown-200 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Featured Article Section */}
      <div className="container pb-16">
        <div className="max-w-4xl mx-auto">
          <OGPCardWrapper url="https://rollingstonejapan.com/articles/detail/42971" showDescription={false} />
        </div>
      </div>
    </section>
  )
}
