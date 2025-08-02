import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 })
  }

  try {
    const response = await fetch(url)
    const html = await response.text()

    // OGP情報を抽出
    const ogpData: Record<string, string> = {}
    
    // タイトル
    const titleMatch = html.match(/<meta property="og:title" content="([^"]*)"/)
    if (titleMatch) ogpData.title = titleMatch[1]
    else {
      const titleTagMatch = html.match(/<title>([^<]*)<\/title>/)
      if (titleTagMatch) ogpData.title = titleTagMatch[1]
    }

    // 説明
    const descMatch = html.match(/<meta property="og:description" content="([^"]*)"/)
    if (descMatch) ogpData.description = descMatch[1]
    else {
      const metaDescMatch = html.match(/<meta name="description" content="([^"]*)"/)
      if (metaDescMatch) ogpData.description = metaDescMatch[1]
    }

    // 画像
    const imageMatch = html.match(/<meta property="og:image" content="([^"]*)"/)
    if (imageMatch) ogpData.image = imageMatch[1]

    // サイト名
    const siteNameMatch = html.match(/<meta property="og:site_name" content="([^"]*)"/)
    if (siteNameMatch) ogpData.siteName = siteNameMatch[1]

    return NextResponse.json({
      url,
      ...ogpData
    })
  } catch (error) {
    console.error('Error fetching OGP data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch OGP data' },
      { status: 500 }
    )
  }
}