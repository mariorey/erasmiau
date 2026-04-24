import { NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"

const COOKIE = "erasmiau_admin"
const PUBLIC_PATHS = ["/login", "/api/auth"]

function secret() {
  const s = process.env.NEXTAUTH_SECRET
  if (!s) throw new Error("NEXTAUTH_SECRET env var is not set")
  return new TextEncoder().encode(s)
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Only guard admin and Tina API routes
  const isProtected =
    pathname.startsWith("/admin") || pathname.startsWith("/api/tina")

  if (!isProtected) return NextResponse.next()

  // Allow the login page and auth API through
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) return NextResponse.next()

  const token = req.cookies.get(COOKIE)?.value

  if (token) {
    try {
      await jwtVerify(token, secret())
      return NextResponse.next()
    } catch {
      // Token invalid or expired — fall through to redirect
    }
  }

  const loginUrl = req.nextUrl.clone()
  loginUrl.pathname = "/login"
  loginUrl.searchParams.set("from", pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ["/admin/:path*", "/api/tina/:path*"],
}
