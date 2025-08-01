import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Pocket Daké - Vulfpeck ファンサイト",
  description:
    "Vulfpeckの音楽と活動を日本のファンに向けて発信する非公式ファンサイトです。最新情報やディスコグラフィー、ライブ情報などをお届けします。",
  keywords: [
    "Vulfpeck",
    "ヴルフペック",
    "ファンク",
    "音楽",
    "バンド",
    "Jack Stratton",
    "Theo Katzman",
    "Woody Goss",
    "Joe Dart",
  ],
  openGraph: {
    title: "Pocket Daké - Vulfpeck ファンサイト",
    description: "Vulfpeckの音楽と活動を日本のファンに向けて発信する非公式ファンサイトです。",
    url: "https://pocket-dake.com",
    siteName: "Pocket Daké",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pocket Daké - Vulfpeck ファンサイト",
    description: "Vulfpeckの音楽と活動を日本のファンに向けて発信する非公式ファンサイトです。",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
