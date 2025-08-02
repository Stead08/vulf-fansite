import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"

export default async function LivePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  
  return (
    <div className="container section-padding">
      <h1 className="text-4xl font-display font-bold text-brown-900 mb-8">
        {dictionary.live.title}
      </h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-brown-800 mb-6">
          {dictionary.live.upcoming}
        </h2>
        <div className="bg-cream-100 rounded-lg p-8 text-center">
          <p className="text-brown-600">
            {locale === 'ja' 
              ? '現在予定されているライブはありません。' 
              : 'No upcoming shows at the moment.'}
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-display font-semibold text-brown-800 mb-6">
          {dictionary.live.past}
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brown-900">
              {locale === 'ja' ? 'Madison Square Garden' : 'Madison Square Garden'}
            </h3>
            <p className="text-brown-600 mt-1">2019-09-28</p>
            <p className="text-brown-500 text-sm mt-2">New York, NY</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brown-900">
              {locale === 'ja' ? 'Red Rocks Amphitheatre' : 'Red Rocks Amphitheatre'}
            </h3>
            <p className="text-brown-600 mt-1">2019-06-15</p>
            <p className="text-brown-500 text-sm mt-2">Morrison, CO</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brown-900">
              {locale === 'ja' ? 'The Greek Theatre' : 'The Greek Theatre'}
            </h3>
            <p className="text-brown-600 mt-1">2018-10-06</p>
            <p className="text-brown-500 text-sm mt-2">Los Angeles, CA</p>
          </div>
        </div>
      </section>
    </div>
  )
}