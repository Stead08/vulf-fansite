import Image from "next/image"
import Link from "next/link"
import { Album } from "@/types"

const albums: Album[] = [
  {
    id: "the-beautiful-game",
    title: "The Beautiful Game",
    releaseDate: "2016-10-17",
    coverImage: "/images/albums/the-beautiful-game.jpg",
    description:
      "Vulfpeckの4作目のスタジオアルバム。より洗練されたプロダクションとゲストミュージシャンを迎えた意欲作。",
    tracks: [
      { number: 1, title: "The Beautiful Game" },
      { number: 2, title: "Animal Spirits", featured: ["Melissa Gardiner"] },
      { number: 3, title: "Dean Town" },
      { number: 4, title: "Conscious Club" },
      { number: 5, title: "El Chepe" },
      { number: 6, title: "Margery, My First Car" },
      { number: 7, title: "Cory Wong" },
      { number: 8, title: "Aunt Leslie" },
      { number: 9, title: "Daddy, He Got a Tesla", featured: ["Antwaun Stanley"] },
      { number: 10, title: "1 for 1, DiMaggio" },
    ],
  },
  {
    id: "thrill-of-the-arts",
    title: "Thrill of the Arts",
    releaseDate: "2015-10-20",
    coverImage: "/images/albums/thrill-of-the-arts.jpg",
    description: "3作目のスタジオアルバム。バンドの音楽的成熟とグルーヴの深化が感じられる作品。",
    tracks: [
      { number: 1, title: "Back Pocket" },
      { number: 2, title: "Rango II" },
      { number: 3, title: "Sweet Science" },
      { number: 4, title: "Funky Duck" },
      { number: 5, title: "Game Winner" },
      { number: 6, title: "Smile Meditation" },
      { number: 7, title: "Sky Mall" },
      { number: 8, title: "Christmas in L.A.", featured: ["David T. Walker"] },
    ],
  },
  {
    id: "fugue-state",
    title: "Fugue State",
    releaseDate: "2014-11-11",
    coverImage: "/images/albums/fugue-state.jpg",
    description: "2作目のスタジオアルバム。実験的なアプローチとミニマルファンクの追求。",
    tracks: [
      { number: 1, title: "Intro" },
      { number: 2, title: "1612" },
      { number: 3, title: "Wait for the Moment", featured: ["Antwaun Stanley"] },
      { number: 4, title: "Prom" },
      { number: 5, title: "Tesla" },
      { number: 6, title: "Tomboy" },
      { number: 7, title: "Fugue State" },
    ],
  },
  {
    id: "mit-peck",
    title: "Mit Peck",
    releaseDate: "2014-02-18",
    coverImage: "/images/albums/mit-peck.jpg",
    description: "デビュー作品集。ミシガン大学時代の録音を収録。バンドの原点となる作品。",
    tracks: [
      { number: 1, title: "It Gets Funkier" },
      { number: 2, title: "Beastly" },
      { number: 3, title: "Outro" },
      { number: 4, title: "Newsbeat" },
      { number: 5, title: "Walkies" },
      { number: 6, title: "A Walk to Remember" },
      { number: 7, title: "What's the Use" },
    ],
  },
]

export default function DiscographyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream-200 to-cream-100 py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brown-900 text-center mb-8">
            ディスコグラフィー
          </h1>
          <p className="text-xl text-brown-700 text-center max-w-3xl mx-auto">
            Vulfpeckの音楽的進化を辿る作品群
          </p>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {albums.map(album => (
              <article key={album.id} className="card overflow-hidden group">
                <div className="md:flex">
                  {/* Album Cover */}
                  <div className="relative aspect-square md:w-48 flex-shrink-0 bg-cream-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-brown-200 to-forest-200 opacity-50" />
                  </div>

                  {/* Album Info */}
                  <div className="p-6 flex-grow">
                    <h2 className="text-2xl font-display font-semibold text-brown-900 mb-2 group-hover:text-forest-600 transition-colors">
                      <Link href={`/discography/${album.id}`}>{album.title}</Link>
                    </h2>
                    <p className="text-sm text-brown-600 mb-4">
                      {new Date(album.releaseDate).toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-brown-700 text-sm mb-4 line-clamp-2">{album.description}</p>
                    <p className="text-sm text-brown-600">{album.tracks.length}曲収録</p>

                    {/* CTA */}
                    <Link
                      href={`/discography/${album.id}`}
                      className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-700 font-medium text-sm mt-4 transition-colors"
                    >
                      詳細を見る
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EP/Singles Section */}
      <section className="section-padding bg-cream-50">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-brown-900 text-center mb-12">
            EP & シングル
          </h2>
          <p className="text-center text-brown-600 mb-8">
            スタジオアルバム以外にも、多数のEPやシングルをリリースしています
          </p>
          <div className="text-center">
            <Link href="/discography/singles" className="btn-secondary inline-block">
              すべてのリリースを見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
