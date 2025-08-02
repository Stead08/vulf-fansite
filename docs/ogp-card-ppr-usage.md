# OGPCard PPR対応ガイド

## 概要

OGPCardコンポーネントをPartial Pre-Rendering (PPR)に対応させました。これにより、OGPデータの取得がサーバーサイドで行われ、`useEffect`を使用したクライアントサイドでのデータ取得が不要になりました。

## 変更点

### 以前の実装（クライアントサイド）
- `useEffect`でクライアントサイドからAPIを呼び出し
- ローディング状態の管理
- エラーハンドリングの実装

### 新しい実装（PPR対応）
- サーバーサイドでのデータ取得
- `Suspense`を使用した非同期レンダリング
- シンプルなコンポーネント構造

## コンポーネント構成

### 1. `OGPCard` - プレゼンテーショナルコンポーネント
```tsx
// src/components/common/OGPCard.tsx
// 'use client'ディレクティブを削除（サーバーコンポーネント）
export default function OGPCard({ url, title, description, image, siteName, showDescription }: OGPCardProps) {
  // UIのレンダリングのみを担当
}
```

### 2. `OGPCardWrapper` - 非同期サーバーコンポーネント
```tsx
// src/components/common/OGPCardWrapper.tsx
export default async function OGPCardWrapper({ url, showDescription }: OGPCardWrapperProps) {
  // サーバーサイドでOGPデータを取得
  const ogpData = await fetchOGPData(url)
  
  return <OGPCard {...ogpData} showDescription={showDescription} />
}
```

### 3. `OGPCardWithSuspense` - Suspense統合コンポーネント
```tsx
// src/components/common/OGPCardWithSuspense.tsx
export default function OGPCardWithSuspense({ url, showDescription }: OGPCardWithSuspenseProps) {
  return (
    <Suspense fallback={<OGPCardSkeleton />}>
      <OGPCardWrapper url={url} showDescription={showDescription} />
    </Suspense>
  )
}
```

### 4. `OGPImage` - クライアントコンポーネント
```tsx
// src/components/common/OGPImage.tsx
// 'use client'を維持（onErrorハンドラーが必要なため）
```

## 使用方法

### ページでPPRを有効化
```tsx
// app/[locale]/media/page.tsx
export const experimental_ppr = true

export default function MediaPage() {
  return (
    <div>
      <h1>Media</h1>
      {/* 静的コンテンツ */}
      <p>Vulfpeck関連のメディアリンク集</p>
      
      {/* 動的コンテンツ - OGPカード */}
      <div className="grid gap-4">
        <OGPCardWithSuspense url="https://example.com/article1" />
        <OGPCardWithSuspense url="https://example.com/article2" />
      </div>
    </div>
  )
}
```

### 複数のOGPカードを表示
```tsx
const mediaLinks = [
  { url: 'https://example1.com', category: 'interview' },
  { url: 'https://example2.com', category: 'review' },
  // ...
]

export default function MediaList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mediaLinks.map((link) => (
        <OGPCardWithSuspense 
          key={link.url} 
          url={link.url} 
          showDescription={true}
        />
      ))}
    </div>
  )
}
```

## データ取得関数

```tsx
// src/lib/ogp.ts
export async function fetchOGPData(url: string): Promise<OGPData> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; OGPFetcher/1.0)',
      },
      // 30分間キャッシュ
      next: { revalidate: 1800 }
    })
    
    // HTMLからOGPメタタグを抽出
    // ...
    
    return ogpData
  } catch (error) {
    // エラー時はフォールバックデータを返す
    return {
      url,
      title: new URL(url).hostname,
      description: url,
    }
  }
}
```

## メリット

1. **パフォーマンス向上**
   - サーバーサイドでのデータ取得により、初期表示が高速化
   - PPRにより静的部分が即座に表示される

2. **シンプルな実装**
   - `useEffect`やステート管理が不要
   - エラーハンドリングがシンプル

3. **SEO改善**
   - OGPデータがサーバーサイドで解決されるため、検索エンジンがコンテンツを確実に認識

4. **キャッシュ効率**
   - Next.jsの`revalidate`オプションでキャッシュ制御が可能

## 注意事項

- PPRは現在実験的機能のため、本番環境での使用には注意が必要
- `OGPImage`コンポーネントは画像エラーハンドリングのためクライアントコンポーネントとして維持
- APIルート（`/api/ogp`）は不要になったため削除可能

## 移行ガイド

既存のコードからの移行手順：

1. `OGPCardWrapper`を新しい非同期バージョンに置き換え
2. 使用箇所で`OGPCardWithSuspense`を使用
3. ページで`export const experimental_ppr = true`を追加
4. 不要になったAPIルート（`/api/ogp/route.ts`）を削除