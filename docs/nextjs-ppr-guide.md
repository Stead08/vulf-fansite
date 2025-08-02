# Next.js Partial Pre-Rendering (PPR) 完全ガイド

## 概要

Partial Pre-Rendering (PPR) は、Next.js 14で導入された実験的なレンダリング戦略で、同一ルート内で静的コンテンツと動的コンテンツを組み合わせることができます。これにより、初期ページロードのパフォーマンスを向上させながら、パーソナライズされた動的データをサポートできます。

## PPRの仕組み

PPRは以下のように動作します：

1. **静的シェル**: ビルド時に生成される静的HTMLシェルが、エッジから高速に配信されます
2. **動的ホール**: 動的コンテンツ用の「穴」が残され、非同期的にロードされます
3. **並列ストリーミング**: 動的コンテンツは並列でストリーミングされ、全体的なロード時間を短縮します

```
ユーザーアクセス → 静的シェル（即座に表示）
                ↓
                動的コンテンツのストリーミング（並列）
                ↓
                完全なページ
```

## 主な利点

- **高速な初期ロード**: 静的コンテンツが即座に表示されるため、ユーザーは待ち時間なくページを閲覧できます
- **改善されたUX**: 動的コンテンツが準備でき次第シームレスにロードされます
- **サーバー負荷の軽減**: 静的部分はビルド時に生成されるため、サーバーは動的部分のみをレンダリングします
- **SEOの最適化**: 静的コンテンツは事前レンダリングされるため、検索エンジンが確実にインデックスできます

## 実装方法

### 1. Next.js設定でPPRを有効化

`next.config.ts`でPPRを有効にします：

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental', // 特定のルートでPPRを採用
  },
}

export default nextConfig
```

### 2. ルートでPPRを有効化

各ルートで明示的にPPRをオプトインする必要があります：

```typescript
// app/layout.tsx または app/page.tsx
export const experimental_ppr = true

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
```

### 3. Suspenseで動的コンテンツをラップ

動的コンテンツは`Suspense`コンポーネントでラップします：

```typescript
import { Suspense } from 'react'
import StaticHeader from './StaticHeader'
import DynamicUserInfo from './DynamicUserInfo'
import LoadingSkeleton from './LoadingSkeleton'

export const experimental_ppr = true

export default function Page() {
  return (
    <div>
      {/* 静的コンテンツ - ビルド時にプリレンダリング */}
      <StaticHeader />
      
      {/* 動的コンテンツ - リクエスト時にストリーミング */}
      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicUserInfo />
      </Suspense>
    </div>
  )
}
```

## 実装パターン

### 基本パターン

```typescript
export const experimental_ppr = true

export default function ProductPage() {
  return (
    <>
      {/* 静的: 商品情報 */}
      <ProductDetails />
      
      {/* 動的: 在庫状況 */}
      <Suspense fallback={<StockSkeleton />}>
        <StockStatus />
      </Suspense>
      
      {/* 動的: レビュー */}
      <Suspense fallback={<ReviewsSkeleton />}>
        <CustomerReviews />
      </Suspense>
    </>
  )
}
```

### 複数の動的セクション

```typescript
export const experimental_ppr = true

export default function DashboardPage() {
  return (
    <div className="dashboard">
      <h1>管理ダッシュボード</h1>
      
      <div className="grid">
        {/* 静的: レイアウトとナビゲーション */}
        <DashboardNav />
        
        {/* 動的: リアルタイムメトリクス */}
        <Suspense fallback={<MetricsSkeleton />}>
          <RealTimeMetrics />
        </Suspense>
        
        {/* 動的: ユーザーアクティビティ */}
        <Suspense fallback={<ActivitySkeleton />}>
          <UserActivity />
        </Suspense>
        
        {/* 動的: 売上グラフ */}
        <Suspense fallback={<ChartSkeleton />}>
          <SalesChart />
        </Suspense>
      </div>
    </div>
  )
}
```

### ネストされたレイアウトでのPPR

```typescript
// app/dashboard/layout.tsx
export const experimental_ppr = true // ダッシュボード全体でPPRを有効化

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Suspense fallback={<NavSkeleton />}>
        <DynamicNavigation />
      </Suspense>
      {children}
    </div>
  )
}

// app/dashboard/analytics/page.tsx
// 親レイアウトからPPRを継承
export default function AnalyticsPage() {
  return (
    <>
      <StaticAnalyticsHeader />
      <Suspense fallback={<DataSkeleton />}>
        <RealTimeAnalytics />
      </Suspense>
    </>
  )
}
```

## 実用的なユースケース

### 1. ECサイトの商品ページ

```typescript
export const experimental_ppr = true

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <>
      {/* 静的: SEOに重要な商品情報 */}
      <ProductInfo productId={params.id} />
      <ProductImages productId={params.id} />
      
      {/* 動的: パーソナライズされた配送情報 */}
      <Suspense fallback={<DeliverySkeleton />}>
        <PersonalizedDelivery />
      </Suspense>
      
      {/* 動的: 在庫とカート数 */}
      <Suspense fallback={<CartSkeleton />}>
        <AddToCart productId={params.id} />
      </Suspense>
      
      {/* 動的: レコメンド商品 */}
      <Suspense fallback={<RecommendationsSkeleton />}>
        <PersonalizedRecommendations />
      </Suspense>
    </>
  )
}
```

### 2. ニュースサイトの記事ページ

```typescript
export const experimental_ppr = true

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <>
      {/* 静的: 記事コンテンツ */}
      <ArticleContent slug={params.slug} />
      
      {/* 動的: ユーザーの閲読履歴に基づく関連記事 */}
      <Suspense fallback={<RelatedSkeleton />}>
        <PersonalizedRelatedArticles />
      </Suspense>
      
      {/* 動的: コメントセクション */}
      <Suspense fallback={<CommentsSkeleton />}>
        <Comments articleSlug={params.slug} />
      </Suspense>
    </>
  )
}
```

## 技術的詳細

### HTTPリクエストの最適化

PPRでは、静的HTMLとストリーミングされる動的パーツを含む完全なレスポンスが**単一のHTTPリクエスト**で送信されます。これにより：

- 追加のラウンドトリップを回避
- ネットワークオーバーヘッドを削減
- 初期ロードと全体的なパフォーマンスを改善

### 動的境界の判定

Next.jsは`Suspense`境界を使用して、ルートのどの部分が静的でどの部分が動的かを自動的に判断します：

```typescript
// Next.jsは自動的に以下を判断：
// - StaticComponent: ビルド時にプリレンダリング
// - DynamicComponent: リクエスト時にストリーミング
<>
  <StaticComponent />
  <Suspense fallback={<Loading />}>
    <DynamicComponent />
  </Suspense>
</>
```

## 注意事項とベストプラクティス

### 1. 実験的機能

- PPRは現在実験的機能であり、本番環境での使用は推奨されません
- 大規模なコードベースではDX（開発体験）の問題が発生する可能性があります
- Next.jsのcanaryリリース（`next@canary`）が必要です

### 2. 子セグメントでのPPR無効化

特定の子セグメントでPPRを無効にすることができます：

```typescript
// app/dashboard/settings/page.tsx
export const experimental_ppr = false // このルートではPPRを無効化
```

### 3. Suspenseの適切な使用

- 動的コンテンツは必ず`Suspense`でラップする
- 適切なフォールバックUIを提供する
- 複数の動的セクションは個別の`Suspense`境界を使用する

### 4. パフォーマンスの考慮事項

- 静的コンテンツと動的コンテンツのバランスを考慮
- Above-the-fold（ファーストビュー）の重要なコンテンツは静的にする
- Below-the-fold（スクロール後）のコンテンツは動的でも問題ない

## 将来の展望

Vercelチームは、PPRがWebアプリケーションのデフォルトレンダリングモデルになる可能性があると考えています。今後の開発計画には以下が含まれます：

- `dynamicIO`フラグの削除（PPRに内在的に含まれるため）
- PPRで使用される単一ストリーミングアプローチのCDNサポートの拡張
- プロダクション環境での安定性向上

## トラブルシューティング

### PPRが機能しない場合

1. `next.config.ts`で`experimental.ppr`が設定されているか確認
2. ルートファイルで`export const experimental_ppr = true`が宣言されているか確認
3. 動的コンテンツが`Suspense`でラップされているか確認
4. Next.jsのバージョンが14以上であることを確認

### パフォーマンスの問題

- 静的/動的コンテンツの分割を再評価
- Suspenseの境界が適切に設定されているか確認
- ネットワークタブでストリーミングの動作を確認

## まとめ

PPRは、静的サイト生成（SSG）と動的配信（SSR）の利点を組み合わせた革新的なアプローチです。実験的機能ではありますが、適切に実装することで、優れたパフォーマンスとユーザー体験を提供できます。

## 参考リンク

- [Next.js公式ドキュメント - Partial Prerendering](https://nextjs.org/docs/app/getting-started/partial-prerendering)
- [Next.js設定リファレンス - PPR](https://nextjs.org/docs/app/api-reference/config/next-config-js/ppr)
- [Next.js Learn - Partial Prerendering](https://nextjs.org/learn/dashboard-app/partial-prerendering)
- [Vercel Blog - Partial Prerendering](https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model)