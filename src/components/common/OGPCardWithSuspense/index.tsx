import { Suspense } from 'react'
import OGPCardWrapper from '../OGPCardWrapper'
import OGPCardSkeleton from '../OGPCardSkeleton'

interface OGPCardWithSuspenseProps {
  url: string
  showDescription?: boolean
}

// PPR対応: Suspenseで動的コンテンツをラップ
export default function OGPCardWithSuspense({ url, showDescription }: OGPCardWithSuspenseProps) {
  return (
    <Suspense fallback={<OGPCardSkeleton />}>
      <OGPCardWrapper url={url} showDescription={showDescription} />
    </Suspense>
  )
}