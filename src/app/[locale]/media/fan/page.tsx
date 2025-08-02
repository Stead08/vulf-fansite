import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"
import Link from "next/link"
import OGPCardWrapper from "@/components/common/OGPCardWrapper"

export default async function FanMediaPage({
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
          {locale === 'ja' ? 'ファンメディア' : 'Fan Media'}
        </h1>
        <p className="text-brown-600">
          {locale === 'ja' 
            ? 'ファンによる素晴らしいコンテンツ' 
            : 'Amazing content created by fans'}
        </p>
      </div>
      
      {/* YouTube Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-brown-800 mb-6 flex items-center gap-2">
          <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          YouTube {locale === 'ja' ? 'カバー・解説' : 'Covers & Analysis'}
        </h2>
        <div className="bg-cream-100 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-brown-900 mb-3">
                {locale === 'ja' ? '人気のカバー動画' : 'Popular Cover Videos'}
              </h3>
              <ul className="space-y-2 text-sm text-brown-700">
                <li>{locale === 'ja' ? '• Dean Town ベースカバー' : '• Dean Town bass covers'}</li>
                <li>{locale === 'ja' ? '• Back Pocket ギターカバー' : '• Back Pocket guitar covers'}</li>
                <li>{locale === 'ja' ? '• 1612 フルバンドカバー' : '• 1612 full band covers'}</li>
                <li>{locale === 'ja' ? '• Wait for the Moment ピアノカバー' : '• Wait for the Moment piano covers'}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-brown-900 mb-3">
                {locale === 'ja' ? '楽曲解析・チュートリアル' : 'Analysis & Tutorials'}
              </h3>
              <ul className="space-y-2 text-sm text-brown-700">
                <li>{locale === 'ja' ? '• Joe Dart ベーステクニック解説' : '• Joe Dart bass technique breakdowns'}</li>
                <li>{locale === 'ja' ? '• Cory Wong リズムギター講座' : '• Cory Wong rhythm guitar lessons'}</li>
                <li>{locale === 'ja' ? '• Vulfpeck音楽理論解説' : '• Vulfpeck music theory explained'}</li>
                <li>{locale === 'ja' ? '• Woody Goss キーボード解析' : '• Woody Goss keyboard analysis'}</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-brown-600 text-sm">
            {locale === 'ja' 
              ? '素晴らしいカバーや解説動画を作成されている皆様に感謝します！' 
              : 'Thanks to all the creators making amazing covers and tutorials!'}
          </p>
        </div>
      </section>
      
      {/* Featured Fan Content */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-brown-800 mb-6">
          {locale === 'ja' ? '注目のファンコンテンツ' : 'Featured Fan Content'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <OGPCardWrapper url="https://www.youtube.com/watch?v=le0BLAEO93g" />
          <OGPCardWrapper url="https://www.youtube.com/watch?v=jRHQPG1xd9o" />
          <OGPCardWrapper url="https://note.com/n/n1234567890" />
        </div>
      </section>
      
      {/* Instagram Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-brown-800 mb-6 flex items-center gap-2">
          <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
          </svg>
          Instagram {locale === 'ja' ? 'ファンアート' : 'Fan Art'}
        </h2>
        <div className="bg-cream-100 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-3 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <svg className="w-12 h-12 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-brown-900 mb-2">
                {locale === 'ja' ? 'イラスト・アート' : 'Illustrations & Artwork'}
              </h3>
              <p className="text-sm text-brown-700">
                {locale === 'ja' ? 'メンバーの似顔絵やファンアート' : 'Member portraits and fan art'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-3 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <svg className="w-12 h-12 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-brown-900 mb-2">
                {locale === 'ja' ? 'ライブ写真' : 'Concert Photos'}
              </h3>
              <p className="text-sm text-brown-700">
                {locale === 'ja' ? 'ファンが撮影したライブの瞬間' : 'Live moments captured by fans'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-3 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-2xl font-bold text-forest-600">#</span>
              </div>
              <h3 className="font-semibold text-brown-900 mb-2">
                {locale === 'ja' ? 'ハッシュタグ' : 'Hashtags'}
              </h3>
              <p className="text-sm text-brown-700">
                #vulfpeck #vulfpeckfan
              </p>
            </div>
          </div>
          <p className="text-center text-brown-600 text-sm">
            {locale === 'ja' 
              ? '@vulfpeckをタグ付けして、あなたの作品をシェアしてください！' 
              : 'Tag @vulfpeck to share your creations!'}
          </p>
        </div>
      </section>
      
      {/* Note Section */}
      <section>
        <h2 className="text-2xl font-display font-semibold text-brown-800 mb-6 flex items-center gap-2">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          note {locale === 'ja' ? '記事' : 'Articles'}
        </h2>
        <div className="bg-cream-100 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-brown-900 mb-3">
                {locale === 'ja' ? '人気の記事テーマ' : 'Popular Article Topics'}
              </h3>
              <ul className="space-y-2 text-sm text-brown-700">
                <li>{locale === 'ja' ? '• ライブレポート・感想' : '• Live reports and impressions'}</li>
                <li>{locale === 'ja' ? '• アルバムレビュー' : '• Album reviews'}</li>
                <li>{locale === 'ja' ? '• メンバー紹介・解説' : '• Member introductions and profiles'}</li>
                <li>{locale === 'ja' ? '• Vulfpeckの魅力を語る' : '• Why we love Vulfpeck'}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-brown-900 mb-3">
                {locale === 'ja' ? '投稿のヒント' : 'Writing Tips'}
              </h3>
              <ul className="space-y-2 text-sm text-brown-700">
                <li>{locale === 'ja' ? '• #Vulfpeck タグを付ける' : '• Use #Vulfpeck tag'}</li>
                <li>{locale === 'ja' ? '• 写真や動画を活用' : '• Include photos and videos'}</li>
                <li>{locale === 'ja' ? '• 個人的な体験を共有' : '• Share personal experiences'}</li>
                <li>{locale === 'ja' ? '• 他のファンと交流' : '• Connect with other fans'}</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <a 
              href="https://note.com/hashtag/Vulfpeck" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-forest-600 px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all font-medium"
            >
              {locale === 'ja' ? 'noteで#Vulfpeckの記事を読む' : 'Read #Vulfpeck articles on note'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      <div className="mt-12 p-6 bg-forest-50 rounded-lg text-center">
        <h3 className="text-lg font-semibold text-forest-800 mb-2">
          {locale === 'ja' 
            ? 'あなたのコンテンツをシェアしよう！' 
            : 'Share Your Content!'}
        </h3>
        <p className="text-forest-700 text-sm">
          {locale === 'ja' 
            ? 'Vulfpeckへの愛を表現したコンテンツを作成したら、ぜひSNSでシェアしてください。このページで紹介させていただくかもしれません！' 
            : 'Created content expressing your love for Vulfpeck? Share it on social media - we might feature it on this page!'}
        </p>
      </div>
    </div>
  )
}