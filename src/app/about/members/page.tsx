import type { Metadata } from "next"
import Link from "next/link"
import { Member } from "@/types"

export const metadata: Metadata = {
  title: "メンバー | Vulfpeck Fan Site",
  description:
    "Vulfpeckのメンバー紹介。Jack Stratton、Theo Katzman、Woody Goss、Joe Dartの4人の天才ミュージシャンたちのプロフィール。",
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

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream-200 to-cream-100 py-16">
        <div className="container">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Link
              href="/about"
              className="text-forest-600 hover:text-forest-700 text-sm font-medium"
            >
              About
            </Link>
            <span className="text-brown-400">/</span>
            <span className="text-brown-700 text-sm font-medium">メンバー</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brown-900 text-center mb-8">
            メンバー紹介
          </h1>
          <p className="text-xl text-brown-700 text-center max-w-3xl mx-auto">
            ミシガン大学で出会った4人の天才ミュージシャンたち
          </p>
        </div>
      </section>

      {/* Band History */}
      <section className="section-padding bg-cream-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-brown-900 text-center mb-8">
              バンドの結成
            </h2>
            <div className="prose prose-lg prose-brown max-w-none text-center">
              <p className="text-brown-700 leading-relaxed mb-6">
                2011年、ミシガン大学音楽学部で運命的な出会いを果たした4人。 Jack
                Strattonの呼びかけで、友人の卒業論文プロジェクトのために
                2インチテープでのレコーディングセッションに集まったのが始まりでした。
              </p>
              <p className="text-brown-700 leading-relaxed mb-6">
                そのセッションで演奏された「Beastly」がYouTubeにアップロードされると、
                瞬く間に話題となり、Vulfpeckが誕生しました。
              </p>
              <p className="text-brown-700 leading-relaxed">
                「Low Volume Funk」というコンセプトのもと、最小限の音で最大限のグルーヴを生み出す
                彼らの音楽は、世界中のファンクファンを魅了し続けています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {members.map(member => (
              <Link
                key={member.id}
                href={`/members/${member.id}`}
                className="card p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <div className="w-full h-full bg-cream-200 rounded-full" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-display font-semibold text-brown-900 mb-2 group-hover:text-forest-600 transition-colors">
                      {member.name}
                    </h2>
                    <p className="text-forest-600 font-medium mb-3">{member.role}</p>
                    <p className="text-brown-600 leading-relaxed">{member.description}</p>
                    <div className="mt-4 text-forest-600 font-medium text-sm">詳細を見る →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-cream-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-brown-900 mb-8">
              The Fearless Flyers & その他のコラボレーター
            </h2>
            <p className="text-brown-700 leading-relaxed mb-8">
              Vulfpeckは4人のコアメンバーに加え、多くの才能あるミュージシャンとコラボレーションしています。
              特に「The Fearless
              Flyers」は、Vulfpeckのメンバーが参加するサイドプロジェクトとして知られています。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              <div className="card p-4">
                <h3 className="font-display font-semibold text-brown-900 mb-2">Cory Wong</h3>
                <p className="text-sm text-brown-600">ギタリスト、The Fearless Flyersメンバー</p>
              </div>
              <div className="card p-4">
                <h3 className="font-display font-semibold text-brown-900 mb-2">Nate Smith</h3>
                <p className="text-sm text-brown-600">ドラマー、The Fearless Flyersメンバー</p>
              </div>
              <div className="card p-4">
                <h3 className="font-display font-semibold text-brown-900 mb-2">Antwaun Stanley</h3>
                <p className="text-sm text-brown-600">ボーカリスト、頻繁なコラボレーター</p>
              </div>
              <div className="card p-4">
                <h3 className="font-display font-semibold text-brown-900 mb-2">Joey Dosik</h3>
                <p className="text-sm text-brown-600">ボーカリスト、サックス奏者</p>
              </div>
              <div className="card p-4">
                <h3 className="font-display font-semibold text-brown-900 mb-2">Charles Jones</h3>
                <p className="text-sm text-brown-600">ボーカリスト</p>
              </div>
              <div className="card p-4">
                <h3 className="font-display font-semibold text-brown-900 mb-2">Blake Mills</h3>
                <p className="text-sm text-brown-600">ギタリスト、プロデューサー</p>
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold text-brown-900 mt-12 mb-6">
              レジェンドゲスト
            </h3>
            <p className="text-brown-700 leading-relaxed mb-8">
              Vulfpeckは数多くの伝説的なミュージシャンとも共演しています。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              <div className="card p-4">
                <h3 className="font-display font-semibold text-brown-900 mb-2">Bernard Purdie</h3>
                <p className="text-sm text-brown-600">伝説のドラマー、「Purdie Shuffle」の創始者</p>
              </div>
              <div className="card p-4">
                <h3 className="font-display font-semibold text-brown-900 mb-2">Bootsy Collins</h3>
                <p className="text-sm text-brown-600">ファンクレジェンド、P-Funkベーシスト</p>
              </div>
              <div className="card p-4">
                <h3 className="font-display font-semibold text-brown-900 mb-2">David T. Walker</h3>
                <p className="text-sm text-brown-600">ソウル/R&Bギターの巨匠</p>
              </div>
              <div className="card p-4">
                <h3 className="font-display font-semibold text-brown-900 mb-2">James Gadson</h3>
                <p className="text-sm text-brown-600">モータウンドラマー</p>
              </div>
              <div className="card p-4">
                <h3 className="font-display font-semibold text-brown-900 mb-2">Michael McDonald</h3>
                <p className="text-sm text-brown-600">Doobie Brothers、ソウルシンガー</p>
              </div>
              <div className="card p-4">
                <h3 className="font-display font-semibold text-brown-900 mb-2">Trey Anastasio</h3>
                <p className="text-sm text-brown-600">Phishのギタリスト/ボーカリスト</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
