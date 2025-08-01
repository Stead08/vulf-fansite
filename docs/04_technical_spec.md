# Pocket Daké - 技術仕様書

## 1. アーキテクチャ概要

### 1.1 システム構成
```
┌─────────────────────────────────────────────────┐
│                   Client                        │
│              (Next.js App)                      │
└────────────────────┬────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────┐
│            Cloudflare Workers/Pages             │
│                (Edge Runtime)                   │
└────────────────────┬────────────────────────────┘
                     │
        ┌────────────┴────────────┬────────────┐
        ▼                         ▼            ▼
┌───────────────┐      ┌──────────────┐  ┌──────────┐
│  GitHub Repo  │      │ External APIs │  │  Cron    │
│  (MDX Files)  │      │ (Note, etc)   │  │  Jobs    │
└───────────────┘      └──────────────┘  └──────────┘
```

### 1.2 技術スタック
- **Frontend**: Next.js 15 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS v4
- **Runtime**: Cloudflare Workers
- **Content**: MDX
- **Package Manager**: pnpm

## 2. ディレクトリ構造

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── about/
│   │   ├── page.tsx
│   │   └── members/
│   │       └── page.tsx
│   ├── discography/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── live/
│   │   └── page.tsx
│   ├── news/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   └── media/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   └── LatestNews.tsx
│   └── common/
│       ├── Card.tsx
│       └── Button.tsx
├── lib/
│   ├── mdx.ts
│   ├── api/
│   │   ├── note.ts
│   │   └── scraper.ts
│   └── utils/
│       └── date.ts
├── content/
│   ├── news/
│   │   └── *.mdx
│   ├── albums/
│   │   └── *.mdx
│   └── lives/
│       └── *.mdx
└── types/
    └── index.ts
```

## 3. 主要コンポーネント仕様

### 3.1 MDXコンテンツ管理

```typescript
// lib/mdx.ts
import { compileMDX } from 'next-mdx-remote/rsc'

export async function getNewsArticles() {
  const files = await fs.readdir('./src/content/news')
  const articles = await Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(`./src/content/news/${file}`, 'utf-8')
      const { frontmatter, content: compiledContent } = await compileMDX({
        source: content,
        options: { parseFrontmatter: true }
      })
      return { slug: file.replace('.mdx', ''), frontmatter, content: compiledContent }
    })
  )
  return articles.sort((a, b) => b.frontmatter.date - a.frontmatter.date)
}
```

### 3.2 外部API連携

#### Note API
```typescript
// lib/api/note.ts
export async function fetchNoteArticles() {
  const response = await fetch('https://note.com/api/v2/creators/{creatorId}/contents', {
    next: { revalidate: 3600 } // 1時間キャッシュ
  })
  return response.json()
}
```

#### Cloudflare Workers Cron
```typescript
// workers/scraper.ts
export default {
  async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext) {
    const officialSiteData = await scrapeOfficialSite()
    await env.KV.put('official-news', JSON.stringify(officialSiteData))
  }
}
```

### 3.3 国際化（i18n）設定

```typescript
// next.config.ts
export default {
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  }
}
```

## 4. パフォーマンス最適化

### 4.1 画像最適化
```typescript
import Image from 'next/image'

<Image
  src="/album-cover.jpg"
  alt="Album Cover"
  width={300}
  height={300}
  loading="lazy"
  placeholder="blur"
/>
```

### 4.2 部分的事前レンダリング
```typescript
// app/page.tsx
export const runtime = 'edge'
export const preferredRegion = 'auto'

export default async function HomePage() {
  // 静的コンテンツ
  const staticContent = await getStaticContent()
  
  // 動的コンテンツはSuspenseで分離
  return (
    <>
      <Hero data={staticContent} />
      <Suspense fallback={<LoadingSkeleton />}>
        <LatestNews />
      </Suspense>
    </>
  )
}
```

### 4.3 キャッシュ戦略
- 静的アセット: ブラウザキャッシュ（1年）
- APIレスポンス: CDNキャッシュ（1時間）
- MDXコンテンツ: ビルド時生成

## 5. デプロイメント

### 5.1 ビルドプロセス
```bash
# ローカルビルド
pnpm build

# Cloudflare向けビルド
pnpm deploy
```

### 5.2 環境変数
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://pocket-dake.com
NOTE_API_ENDPOINT=https://note.com/api/v2
```

### 5.3 Cloudflare設定
```json
// wrangler.json
{
  "name": "pocket-dake",
  "main": ".open-next/worker.js",
  "compatibility_date": "2025-03-01",
  "kv_namespaces": [
    {
      "binding": "CONTENT_CACHE",
      "id": "xxx"
    }
  ],
  "triggers": {
    "crons": ["0 */6 * * *"]
  }
}
```

## 6. セキュリティ対策

### 6.1 Content Security Policy
```typescript
// next.config.ts
headers: [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; img-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'"
  }
]
```

### 6.2 Rate Limiting
Cloudflare Workers のRate Limiting機能を使用

## 7. モニタリング

### 7.1 エラートラッキング
- Cloudflare Analytics
- Web Vitals測定

### 7.2 ログ
- Cloudflare Logpush
- 構造化ログ形式

## 8. 開発ワークフロー

### 8.1 ブランチ戦略
- main: 本番環境
- develop: 開発環境
- feature/*: 機能開発

### 8.2 CI/CD
GitHub Actions → Cloudflare Pages自動デプロイ

## 9. 今後の拡張性

### 9.1 Phase 2機能の準備
- 検索機能: Algolia統合の準備
- ユーザー生成コンテンツ: Cloudflare D1の検討
- メール通知: Cloudflare Email Workers

### 9.2 スケーラビリティ
- エッジロケーション: 自動
- キャッシュ: Cloudflare CDN
- データベース: 将来的にCloudflare D1