import Link from "next/link"
import { notFound } from "next/navigation"
import { Album } from "@/types"

// ダミーデータ（実際のAPIやデータベースから取得する想定）
const albums: Album[] = [
  {
    id: "the-beautiful-game",
    title: "The Beautiful Game",
    releaseDate: "2016-10-17",
    coverImage: "/images/albums/the-beautiful-game.jpg",
    description:
      "Vulfpeckの4作目のスタジオアルバム。より洗練されたプロダクションとゲストミュージシャンを迎えた意欲作。",
    tracks: [
      { number: 1, title: "The Beautiful Game", duration: "3:42" },
      { number: 2, title: "Animal Spirits", featured: ["Melissa Gardiner"], duration: "3:15" },
      { number: 3, title: "Dean Town", duration: "2:46" },
      { number: 4, title: "Conscious Club", duration: "4:11" },
      { number: 5, title: "El Chepe", duration: "3:29" },
      { number: 6, title: "Margery, My First Car", duration: "3:04" },
      { number: 7, title: "Cory Wong", duration: "2:39" },
      { number: 8, title: "Aunt Leslie", duration: "2:51" },
      {
        number: 9,
        title: "Daddy, He Got a Tesla",
        featured: ["Antwaun Stanley"],
        duration: "4:28",
      },
      { number: 10, title: "1 for 1, DiMaggio", duration: "3:57" },
    ],
    credits: {
      producer: ["Jack Stratton"],
      engineer: ["Al Sutton", "Caleb Parker"],
      mastering: ["Emily Lazar"],
      musicians: [
        { name: "Jack Stratton", instruments: ["Drums", "Keyboards"] },
        { name: "Theo Katzman", instruments: ["Guitar", "Vocals"] },
        { name: "Woody Goss", instruments: ["Keyboards"] },
        { name: "Joe Dart", instruments: ["Bass"] },
      ],
    },
  },
  {
    id: "thrill-of-the-arts",
    title: "Thrill of the Arts",
    releaseDate: "2015-10-20",
    coverImage: "/images/albums/thrill-of-the-arts.jpg",
    description: "3作目のスタジオアルバム。バンドの音楽的成熟とグルーヴの深化が感じられる作品。",
    tracks: [
      { number: 1, title: "Back Pocket", duration: "3:14" },
      { number: 2, title: "Rango II", duration: "2:48" },
      { number: 3, title: "Sweet Science", duration: "3:36" },
      { number: 4, title: "Funky Duck", duration: "3:21" },
      { number: 5, title: "Game Winner", duration: "2:59" },
      { number: 6, title: "Smile Meditation", duration: "3:42" },
      { number: 7, title: "Sky Mall", duration: "4:05" },
      { number: 8, title: "Christmas in L.A.", featured: ["David T. Walker"], duration: "3:51" },
    ],
    credits: {
      producer: ["Jack Stratton"],
      engineer: ["Al Sutton"],
      mastering: ["Emily Lazar"],
      musicians: [
        { name: "Jack Stratton", instruments: ["Drums", "Keyboards"] },
        { name: "Theo Katzman", instruments: ["Guitar", "Vocals"] },
        { name: "Woody Goss", instruments: ["Keyboards"] },
        { name: "Joe Dart", instruments: ["Bass"] },
      ],
    },
  },
  {
    id: "fugue-state",
    title: "Fugue State",
    releaseDate: "2014-11-11",
    coverImage: "/images/albums/fugue-state.jpg",
    description: "2作目のスタジオアルバム。実験的なアプローチとミニマルファンクの追求。",
    tracks: [
      { number: 1, title: "Intro", duration: "0:42" },
      { number: 2, title: "1612", duration: "3:15" },
      { number: 3, title: "Wait for the Moment", featured: ["Antwaun Stanley"], duration: "4:06" },
      { number: 4, title: "Prom", duration: "3:28" },
      { number: 5, title: "Tesla", duration: "2:51" },
      { number: 6, title: "Tomboy", duration: "3:34" },
      { number: 7, title: "Fugue State", duration: "2:19" },
    ],
    credits: {
      producer: ["Jack Stratton"],
      engineer: ["Al Sutton"],
      mastering: ["Emily Lazar"],
      musicians: [
        { name: "Jack Stratton", instruments: ["Drums", "Keyboards"] },
        { name: "Theo Katzman", instruments: ["Guitar", "Vocals"] },
        { name: "Woody Goss", instruments: ["Keyboards"] },
        { name: "Joe Dart", instruments: ["Bass"] },
      ],
    },
  },
  {
    id: "mit-peck",
    title: "Mit Peck",
    releaseDate: "2014-02-18",
    coverImage: "/images/albums/mit-peck.jpg",
    description: "デビュー作品集。ミシガン大学時代の録音を収録。バンドの原点となる作品。",
    tracks: [
      { number: 1, title: "It Gets Funkier", duration: "2:58" },
      { number: 2, title: "Beastly", duration: "3:42" },
      { number: 3, title: "Outro", duration: "1:15" },
      { number: 4, title: "Newsbeat", duration: "2:36" },
      { number: 5, title: "Walkies", duration: "3:11" },
      { number: 6, title: "A Walk to Remember", duration: "3:45" },
      { number: 7, title: "What's the Use", duration: "3:29" },
    ],
    credits: {
      producer: ["Jack Stratton"],
      engineer: ["Jack Stratton"],
      mastering: ["Jack Stratton"],
      musicians: [
        { name: "Jack Stratton", instruments: ["Drums", "Keyboards"] },
        { name: "Theo Katzman", instruments: ["Guitar", "Vocals"] },
        { name: "Woody Goss", instruments: ["Keyboards"] },
        { name: "Joe Dart", instruments: ["Bass"] },
      ],
    },
  },
]

export async function generateStaticParams() {
  return albums.map(album => ({
    id: album.id,
  }))
}

export default async function AlbumDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const album = albums.find(async a => a.id === (await params).id)

  if (!album) {
    notFound()
  }

  const totalDuration = album.tracks.reduce((acc, track) => {
    if (track.duration) {
      const [minutes, seconds] = track.duration.split(":").map(Number)
      return acc + minutes * 60 + seconds
    }
    return acc
  }, 0)

  const formattedDuration = `${Math.floor(totalDuration / 60)}:${(totalDuration % 60)
    .toString()
    .padStart(2, "0")}`

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream-200 to-cream-100 py-8">
        <div className="container">
          <Link
            href="/discography"
            className="inline-flex items-center gap-2 text-brown-600 hover:text-brown-700 mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            ディスコグラフィーに戻る
          </Link>
        </div>
      </section>

      {/* Album Info */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Album Cover */}
              <div className="relative aspect-square bg-cream-200 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-brown-200 to-forest-200" />
              </div>

              {/* Album Details */}
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-brown-900 mb-4">
                  {album.title}
                </h1>
                <div className="flex items-center gap-4 text-brown-600 mb-6">
                  <span>
                    {new Date(album.releaseDate).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span>{album.tracks.length}曲</span>
                  <span>•</span>
                  <span>{formattedDuration}</span>
                </div>
                <p className="text-lg text-brown-700 mb-8">{album.description}</p>
              </div>
            </div>

            {/* Track List */}
            <div className="mb-16">
              <h2 className="text-2xl font-display font-bold text-brown-900 mb-8">
                トラックリスト
              </h2>
              <div className="bg-cream-50 rounded-lg overflow-hidden">
                {album.tracks.map((track, index) => (
                  <div
                    key={track.number}
                    className={`flex items-center justify-between p-4 hover:bg-cream-100 transition-colors ${
                      index !== album.tracks.length - 1 ? "border-b border-cream-200" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-brown-500 font-mono text-sm">{track.number}</span>
                      <div>
                        <h3 className="font-medium text-brown-900">{track.title}</h3>
                        {track.featured && (
                          <p className="text-sm text-brown-600">
                            feat. {track.featured.join(", ")}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-brown-600">{track.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Credits */}
            {album.credits && (
              <div>
                <h2 className="text-2xl font-display font-bold text-brown-900 mb-8">クレジット</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-brown-900 mb-4">プロダクション</h3>
                    <dl className="space-y-2">
                      <div>
                        <dt className="inline text-brown-600">プロデューサー:</dt>
                        <dd className="inline text-brown-800 ml-2">
                          {album.credits.producer.join(", ")}
                        </dd>
                      </div>
                      <div>
                        <dt className="inline text-brown-600">エンジニア:</dt>
                        <dd className="inline text-brown-800 ml-2">
                          {album.credits.engineer.join(", ")}
                        </dd>
                      </div>
                      <div>
                        <dt className="inline text-brown-600">マスタリング:</dt>
                        <dd className="inline text-brown-800 ml-2">
                          {album.credits.mastering.join(", ")}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-900 mb-4">ミュージシャン</h3>
                    <dl className="space-y-2">
                      {album.credits.musicians.map((musician, index) => (
                        <div key={index}>
                          <dt className="inline text-brown-600">{musician.name}:</dt>
                          <dd className="inline text-brown-800 ml-2">
                            {musician.instruments.join(", ")}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
