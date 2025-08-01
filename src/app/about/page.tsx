import Image from "next/image"
import Link from "next/link"
import { Member } from "@/types"

const bandInfo = {
  formed: "2011年",
  origin: "ミシガン州アナーバー",
  genre: "ファンク、R&B、ソウル",
  label: "Vulf Records",
  description: `Vulfpeckは2011年にミシガン大学の学生だった4人によって結成されたファンクバンドです。
彼らの音楽は、70年代のファンクとソウルの影響を受けながらも、現代的なアプローチとミニマルな編成で独自のサウンドを生み出しています。

「Low Volume Funk（小音量ファンク）」というコンセプトのもと、必要最小限の音で最大限のグルーヴを生み出すことを追求。
その革新的な音楽活動は、音楽業界に新たな風を吹き込んでいます。`,
  achievements: [
    "「Sleepify」で音楽業界の常識を覆す",
    "Madison Square Gardenでのソールドアウト公演",
    "グラミー賞ノミネート",
    "YouTube再生回数1億回突破",
  ],
}

const members: Member[] = [
  {
    id: "jack-stratton",
    name: "Jack Stratton",
    role: "ドラム、キーボード、プロデューサー",
    description:
      "バンドの創設者でありプロデューサー。Vulfpeckのビジュアルとサウンドの方向性を決定づける中心人物。",
    image: "/images/members/jack-stratton.jpg",
  },
  {
    id: "theo-katzman",
    name: "Theo Katzman",
    role: "ボーカル、ギター、ドラム",
    description: "マルチ奏者としてバンドの多彩なサウンドを支える。ソロアーティストとしても活動。",
    image: "/images/members/theo-katzman.jpg",
  },
  {
    id: "woody-goss",
    name: "Woody Goss",
    role: "キーボード、ピアノ",
    description: "卓越したキーボードテクニックでVulfpeckサウンドの核を担う。",
    image: "/images/members/woody-goss.jpg",
  },
  {
    id: "joe-dart",
    name: "Joe Dart",
    role: "ベース",
    description:
      "「ベース界の新星」と呼ばれ、そのグルーヴ感溢れるプレイで世界中のベーシストに影響を与える。",
    image: "/images/members/joe-dart.jpg",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream-200 to-cream-100 py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brown-900 text-center mb-8">
            Vulfpeckについて
          </h1>
          <p className="text-xl text-brown-700 text-center max-w-3xl mx-auto">
            ミニマル・ファンクの革命児たちの物語
          </p>
        </div>
      </section>

      {/* Band Info Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-display font-semibold text-brown-900 mb-6">
                  バンド情報
                </h2>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-semibold text-brown-800">結成</dt>
                    <dd className="text-brown-600">{bandInfo.formed}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brown-800">出身地</dt>
                    <dd className="text-brown-600">{bandInfo.origin}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brown-800">ジャンル</dt>
                    <dd className="text-brown-600">{bandInfo.genre}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brown-800">レーベル</dt>
                    <dd className="text-brown-600">{bandInfo.label}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-brown-900 mb-6">
                  主な功績
                </h2>
                <ul className="space-y-3">
                  {bandInfo.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-forest-600 mt-1">•</span>
                      <span className="text-brown-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none">
              {bandInfo.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-brown-700 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="section-padding bg-cream-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brown-900 text-center mb-12">
            メンバー
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {members.map(member => (
              <div key={member.id} className="card p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <div className="w-full h-full bg-cream-200 rounded-full" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-display font-semibold text-brown-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-forest-600 font-medium mb-3">{member.role}</p>
                    <p className="text-brown-600 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/about/members" className="btn-primary inline-block">
              メンバーの詳細を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
