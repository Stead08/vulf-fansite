import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"

export default async function MediaPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  
  return (
    <div className="container section-padding">
      <h1 className="text-4xl font-display font-bold text-brown-900 mb-8">
        {dictionary.media.title}
      </h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-brown-800 mb-6">
          {dictionary.media.videos}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video bg-cream-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-brown-900">Dean Town</h3>
              <p className="text-sm text-brown-600 mt-1">
                {locale === 'ja' ? '公式ミュージックビデオ' : 'Official Music Video'}
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video bg-cream-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-brown-900">1612</h3>
              <p className="text-sm text-brown-600 mt-1">
                {locale === 'ja' ? '公式ミュージックビデオ' : 'Official Music Video'}
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video bg-cream-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-brown-900">Back Pocket</h3>
              <p className="text-sm text-brown-600 mt-1">
                {locale === 'ja' ? 'ライブパフォーマンス' : 'Live Performance'}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-display font-semibold text-brown-800 mb-6">
          {dictionary.media.photos}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="aspect-square bg-cream-200 rounded-lg"></div>
          ))}
        </div>
      </section>
    </div>
  )
}