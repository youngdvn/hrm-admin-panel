import { NextRequest, NextResponse } from "next/server"

const authPages = ["/login", "/register", "/forgot-password"]

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname === "/favicon.ico") {
    return NextResponse.next()
  }

  const isLoggedIn = req.cookies.get("is_logged_in")?.value === "true"
  const isAuthPage = authPages.includes(pathname)

  if (!isLoggedIn && !isAuthPage) {
    const loginUrl = new URL("/login", req.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  if (isLoggedIn && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
}