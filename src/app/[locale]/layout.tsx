import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../globals.css"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { i18nConfig, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const isJapanese = locale === 'ja'
  
  return {
    title: isJapanese ? "Pocket Daké - Vulfpeck ファンサイト" : "Pocket Daké - Vulfpeck Fan Site",
    description: isJapanese
      ? "Vulfpeckの音楽と活動を日本のファンに向けて発信する非公式ファンサイトです。最新情報やディスコグラフィー、ライブ情報などをお届けします。"
      : "An unofficial fan site dedicated to sharing Vulfpeck's music and activities. Get the latest news, discography, and live information.",
    keywords: [
      "Vulfpeck",
      isJapanese ? "ヴルフペック" : "Vulfpeck",
      isJapanese ? "ファンク" : "Funk",
      isJapanese ? "音楽" : "Music",
      isJapanese ? "バンド" : "Band",
      "Jack Stratton",
      "Theo Katzman",
      "Woody Goss",
      "Joe Dart",
    ],
    openGraph: {
      title: isJapanese ? "Pocket Daké - Vulfpeck ファンサイト" : "Pocket Daké - Vulfpeck Fan Site",
      description: isJapanese
        ? "Vulfpeckの音楽と活動を日本のファンに向けて発信する非公式ファンサイトです。"
        : "An unofficial fan site dedicated to sharing Vulfpeck's music and activities.",
      url: "https://pocket-dake.com",
      siteName: "Pocket Daké",
      locale: isJapanese ? "ja_JP" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isJapanese ? "Pocket Daké - Vulfpeck ファンサイト" : "Pocket Daké - Vulfpeck Fan Site",
      description: isJapanese
        ? "Vulfpeckの音楽と活動を日本のファンに向けて発信する非公式ファンサイトです。"
        : "An unofficial fan site dedicated to sharing Vulfpeck's music and activities.",
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) {
  const dictionary = await getDictionary(params.locale)
  
  return (
    <html lang={params.locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header locale={params.locale} dictionary={dictionary} />
          <main className="flex-grow">{children}</main>
          <Footer locale={params.locale} dictionary={dictionary} />
        </div>
      </body>
    </html>
  )
}
