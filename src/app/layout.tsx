import { i18nConfig } from '@/lib/i18n/config'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}