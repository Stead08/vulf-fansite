'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18nConfig, type Locale } from '@/lib/i18n/config'

interface LanguageSwitcherProps {
  currentLocale: Locale
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname()
  
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="flex items-center gap-2">
      {i18nConfig.locales.map((locale) => (
        <Link
          key={locale}
          href={redirectedPathname(locale)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            locale === currentLocale
              ? 'bg-forest-600 text-white'
              : 'text-brown-700 hover:bg-cream-100'
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}