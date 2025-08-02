import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"
import Link from "next/link"

export default async function OfficialMediaPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  
  return (
    <div className="container section-padding">
      <div className="mb-8">
        <Link 
          href={`/${locale}/media`}
          className="inline-flex items-center text-forest-600 hover:text-forest-700 font-medium mb-4"
        >
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {dictionary.media.title}
        </Link>
        <h1 className="text-4xl font-display font-bold text-brown-900 mb-2">
          {locale === 'ja' ? '公式メディア' : 'Official Media'}
        </h1>
        <p className="text-brown-600">
          {locale === 'ja' 
            ? 'Vulfpeckとメンバーの公式チャンネル' 
            : 'Official channels from Vulfpeck and band members'}
        </p>
      </div>
      
      {/* YouTube Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-brown-800 mb-6 flex items-center gap-2">
          <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          YouTube
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="https://www.youtube.com/c/Vulfpeck" target="_blank" rel="noopener noreferrer" 
             className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-video bg-cream-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-brown-900 text-lg">Vulfpeck</h3>
              <p className="text-sm text-brown-600 mt-1">
                {locale === 'ja' ? '公式チャンネル' : 'Official Channel'}
              </p>
              <p className="text-xs text-brown-500 mt-2">
                {locale === 'ja' ? 'ミュージックビデオ、ライブ映像' : 'Music videos, live performances'}
              </p>
            </div>
          </a>
          
          <a href="https://www.youtube.com/@JackStrattonVulf" target="_blank" rel="noopener noreferrer"
             className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-video bg-cream-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-brown-900 text-lg">Jack Stratton</h3>
              <p className="text-sm text-brown-600 mt-1">Vulf Vault</p>
              <p className="text-xs text-brown-500 mt-2">
                {locale === 'ja' ? 'アーカイブ映像、未公開曲' : 'Archive footage, unreleased tracks'}
              </p>
            </div>
          </a>
          
          <a href="https://www.youtube.com/@WoodyGoss" target="_blank" rel="noopener noreferrer"
             className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-video bg-cream-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-brown-900 text-lg">Woody Goss</h3>
              <p className="text-sm text-brown-600 mt-1">
                {locale === 'ja' ? '個人チャンネル' : 'Personal Channel'}
              </p>
              <p className="text-xs text-brown-500 mt-2">
                {locale === 'ja' ? 'ソロ活動、音楽理論' : 'Solo work, music theory'}
              </p>
            </div>
          </a>
          
          <a href="https://www.youtube.com/@theokatzman" target="_blank" rel="noopener noreferrer"
             className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-video bg-cream-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-brown-900 text-lg">Theo Katzman</h3>
              <p className="text-sm text-brown-600 mt-1">
                {locale === 'ja' ? 'ソロアーティスト' : 'Solo Artist'}
              </p>
              <p className="text-xs text-brown-500 mt-2">
                {locale === 'ja' ? 'ソロアルバム、ミュージックビデオ' : 'Solo albums, music videos'}
              </p>
            </div>
          </a>
          
          <a href="https://www.youtube.com/@CoryWong" target="_blank" rel="noopener noreferrer"
             className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-video bg-cream-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-brown-900 text-lg">Cory Wong</h3>
              <p className="text-sm text-brown-600 mt-1">
                {locale === 'ja' ? 'ギタリスト' : 'Guitarist'}
              </p>
              <p className="text-xs text-brown-500 mt-2">
                {locale === 'ja' ? 'ソロ活動、Wong Notes Podcast' : 'Solo work, Wong Notes Podcast'}
              </p>
            </div>
          </a>
        </div>
      </section>
      
      {/* Instagram Section */}
      <section>
        <h2 className="text-2xl font-display font-semibold text-brown-800 mb-6 flex items-center gap-2">
          <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
          </svg>
          Instagram
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <a href="https://www.instagram.com/vulfpeck/" target="_blank" rel="noopener noreferrer"
             className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-20 h-20 mx-auto mb-3 bg-cream-200 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-forest-600">V</span>
            </div>
            <h4 className="font-semibold text-brown-900">@vulfpeck</h4>
            <p className="text-xs text-brown-600 mt-1">
              {locale === 'ja' ? 'バンド公式' : 'Official Band'}
            </p>
          </a>
          
          <a href="https://www.instagram.com/jackstratton/" target="_blank" rel="noopener noreferrer"
             className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-20 h-20 mx-auto mb-3 bg-cream-200 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-forest-600">JS</span>
            </div>
            <h4 className="font-semibold text-brown-900">@jackstratton</h4>
            <p className="text-xs text-brown-600 mt-1">Jack Stratton</p>
          </a>
          
          <a href="https://www.instagram.com/theokatzman/" target="_blank" rel="noopener noreferrer"
             className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-20 h-20 mx-auto mb-3 bg-cream-200 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-forest-600">TK</span>
            </div>
            <h4 className="font-semibold text-brown-900">@theokatzman</h4>
            <p className="text-xs text-brown-600 mt-1">Theo Katzman</p>
          </a>
          
          <a href="https://www.instagram.com/joe_dart/" target="_blank" rel="noopener noreferrer"
             className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-20 h-20 mx-auto mb-3 bg-cream-200 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-forest-600">JD</span>
            </div>
            <h4 className="font-semibold text-brown-900">@joe_dart</h4>
            <p className="text-xs text-brown-600 mt-1">Joe Dart</p>
          </a>
          
          <a href="https://www.instagram.com/realwoodygoss/" target="_blank" rel="noopener noreferrer"
             className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-20 h-20 mx-auto mb-3 bg-cream-200 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-forest-600">WG</span>
            </div>
            <h4 className="font-semibold text-brown-900">@realwoodygoss</h4>
            <p className="text-xs text-brown-600 mt-1">Woody Goss</p>
          </a>
          
          <a href="https://www.instagram.com/corywongmusic/" target="_blank" rel="noopener noreferrer"
             className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-20 h-20 mx-auto mb-3 bg-cream-200 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-forest-600">CW</span>
            </div>
            <h4 className="font-semibold text-brown-900">@corywongmusic</h4>
            <p className="text-xs text-brown-600 mt-1">Cory Wong</p>
          </a>
        </div>
      </section>
    </div>
  )
}