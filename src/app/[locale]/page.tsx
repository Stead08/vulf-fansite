import Hero from "@/components/home/Hero"
import LatestNews from "@/components/home/LatestNews"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)
  
  return (
    <>
      <Hero dictionary={dictionary} />
      <LatestNews dictionary={dictionary} locale={locale} />
    </>
  )
}
