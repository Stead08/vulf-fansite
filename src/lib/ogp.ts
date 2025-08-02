export interface OGPData {
  url: string
  title?: string
  description?: string
  image?: string
  siteName?: string
}

export async function fetchOGPData(url: string): Promise<OGPData> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; OGPFetcher/1.0)',
      },
      // キャッシュを30分に設定
      next: { revalidate: 1800 }
    })
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`)
    }

    const html = await response.text()
    
    // OGP情報を抽出
    const ogpData: OGPData = { url }
    
    // タイトル
    const titleMatch = html.match(/<meta property="og:title" content="([^"]*)"/)
    if (titleMatch) {
      ogpData.title = decodeHTMLEntities(titleMatch[1])
    } else {
      const titleTagMatch = html.match(/<title>([^<]*)<\/title>/)
      if (titleTagMatch) {
        ogpData.title = decodeHTMLEntities(titleTagMatch[1])
      }
    }

    // 説明
    const descMatch = html.match(/<meta property="og:description" content="([^"]*)"/)
    if (descMatch) {
      ogpData.description = decodeHTMLEntities(descMatch[1])
    } else {
      const metaDescMatch = html.match(/<meta name="description" content="([^"]*)"/)
      if (metaDescMatch) {
        ogpData.description = decodeHTMLEntities(metaDescMatch[1])
      }
    }

    // 画像
    const imageMatch = html.match(/<meta property="og:image" content="([^"]*)"/)
    if (imageMatch) {
      // 相対URLを絶対URLに変換
      ogpData.image = new URL(imageMatch[1], url).toString()
    }

    // サイト名
    const siteNameMatch = html.match(/<meta property="og:site_name" content="([^"]*)"/)
    if (siteNameMatch) {
      ogpData.siteName = decodeHTMLEntities(siteNameMatch[1])
    }

    return ogpData
  } catch (error) {
    console.error('Error fetching OGP data:', error)
    // エラー時はフォールバックデータを返す
    return {
      url,
      title: new URL(url).hostname,
      description: url,
    }
  }
}

// HTMLエンティティをデコード
function decodeHTMLEntities(text: string): string {
  const textArea = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
    '&#x27;': "'",
    '&#x2F;': '/',
    '&#x60;': '`',
    '&#x3D;': '='
  }
  
  return text.replace(/&[#\w]+;/g, (entity) => {
    return textArea[entity as keyof typeof textArea] || entity
  })
}