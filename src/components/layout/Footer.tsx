import Link from "next/link"

const footerLinks = {
  sitemap: [
    { name: "ホーム", href: "/" },
    { name: "バンド情報", href: "/about" },
    { name: "ディスコグラフィー", href: "/discography" },
    { name: "ライブ", href: "/live" },
    { name: "ニュース", href: "/news" },
    { name: "メディア", href: "/media" },
  ],
  social: [
    { name: "Instagram", href: "https://www.instagram.com/vulfpeck/", external: true },
    { name: "YouTube", href: "https://www.youtube.com/c/Vulfpeck", external: true },
    {
      name: "Spotify",
      href: "https://open.spotify.com/artist/7pXu47GoqSYRajmBCjxdD6",
      external: true,
    },
    { name: "Twitter", href: "https://twitter.com/vulfpeck", external: true },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-cream-200 mt-auto">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-display font-semibold text-brown-800 mb-4">Pocket Daké</h3>
            <p className="text-brown-700 text-sm leading-relaxed">
              Vulfpeckの音楽と活動を日本のファンに向けて発信する非公式ファンサイトです。
              最新情報やディスコグラフィー、ライブ情報などをお届けします。
            </p>
          </div>

          {/* Site Map */}
          <div>
            <h3 className="text-lg font-display font-semibold text-brown-800 mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              {footerLinks.sitemap.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brown-700 hover:text-forest-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-display font-semibold text-brown-800 mb-4">公式リンク</h3>
            <ul className="space-y-2">
              {footerLinks.social.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown-700 hover:text-forest-600 transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {link.name}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-cream-300">
          <p className="text-center text-sm text-brown-600">
            © 2025 Pocket Daké. This is an unofficial fan site. All rights reserved.
          </p>
          <p className="text-center text-xs text-brown-500 mt-2">
            Vulfpeck and all related logos are trademarks of Vulf Records.
          </p>
        </div>
      </div>
    </footer>
  )
}
