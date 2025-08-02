import OGPCard from '../OGPCard'
import { fetchOGPData } from '@/lib/ogp'

interface OGPCardWrapperProps {
  url: string
  showDescription?: boolean
}

// PPR対応の非同期サーバーコンポーネント
export default async function OGPCardWrapper({ url, showDescription }: OGPCardWrapperProps) {
  // サーバーサイドでOGPデータを取得
  const ogpData = await fetchOGPData(url)

  return (
    <OGPCard
      url={ogpData.url}
      title={ogpData.title || new URL(url).hostname}
      description={ogpData.description}
      image={ogpData.image}
      siteName={ogpData.siteName}
      showDescription={showDescription}
    />
  )
}