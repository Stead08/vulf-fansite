import { getCloudflareContext } from "@opennextjs/cloudflare/cloudflare-context"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { i18nConfig } from "@/lib/i18n/config"

// ロケールを検出する関数
function getLocale(request: NextRequest): string {
  // Accept-Languageヘッダーから言語を検出
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const languages = acceptLanguage.split(',').map((lang) => {
      const [code] = lang.trim().split(';')
      return code.split('-')[0]
    })
    
    // サポートしているロケールから最初にマッチするものを返す
    for (const lang of languages) {
      if (i18nConfig.locales.includes(lang as any)) {
        return lang
      }
    }
  }
  
  return i18nConfig.defaultLocale
}

export function middleware(request: NextRequest) {
  // パスからロケールを取得
  const pathname = request.nextUrl.pathname
  const pathnameHasLocale = i18nConfig.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // ロケールがパスに含まれていない場合、デフォルトロケールにリダイレクト
  if (!pathnameHasLocale) {
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
  }

  // 開発環境では認証をスキップ
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next()
  }

  // Basic認証の設定
  const basicAuth = request.headers.get("authorization")

  // 環境変数から認証情報を取得
  const { env } = getCloudflareContext()
  const username = env.BASIC_AUTH_USERNAME
  const password = env.BASIC_AUTH_PASSWORD

  if (!username || !password) {
    // ない場合は本番として認証なし
    return NextResponse.next()
  }

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1]
    const [user, pwd] = atob(authValue).split(":")

    if (user === username && pwd === password) {
      return NextResponse.next()
    }
  }

  // 認証が必要な場合
  return new NextResponse("認証が必要です", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  })
}

// Matcherの設定 - 全てのページに適用（ただし静的ファイルは除外）
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
