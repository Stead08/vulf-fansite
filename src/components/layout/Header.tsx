"use client"

import Link from "next/link"
import { useState } from "react"
import type { Locale } from "@/lib/i18n/config"
import LanguageSwitcher from "./LanguageSwitcher"

interface HeaderProps {
  locale: Locale
  dictionary: any
}

export default function Header({ locale, dictionary }: HeaderProps) {
  const navigation = [
    { name: dictionary.navigation.home, href: `/${locale}` },
    { name: dictionary.navigation.about, href: `/${locale}/about` },
    { name: dictionary.navigation.discography, href: `/${locale}/discography` },
    { name: dictionary.navigation.live, href: `/${locale}/live` },
    { name: dictionary.navigation.news, href: `/${locale}/news` },
    { name: dictionary.navigation.media, href: `/${locale}/media` },
  ]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="text-2xl font-display font-bold text-forest-700 hover:text-forest-600 transition-colors"
          >
            Pocket Daké
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-brown-700 hover:text-forest-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-brown-700 hover:bg-cream-100 transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-label="メニューを開く"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-cream-200 animate-in">
            <div className="flex flex-col space-y-4">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-brown-700 hover:text-forest-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-2 py-1">
                <LanguageSwitcher currentLocale={locale} />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
