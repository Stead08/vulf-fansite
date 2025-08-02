import { getCloudflareContext } from "@opennextjs/cloudflare/cloudflare-context";
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  // 開発環境では認証をスキップ
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next()
  }

  // Basic認証の設定
  const basicAuth = request.headers.get("authorization")

  // 環境変数から認証情報を取得
  const { env } = getCloudflareContext();
  const username = env.BASIC_AUTH_USERNAME || "admin"
  const password = env.BASIC_AUTH_PASSWORD || "password"

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

// Matcherの設定 - 全てのページに適用
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
