import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const redirect = formData.get("redirect")?.toString() || "/"

  const response = NextResponse.redirect(new URL(redirect, req.url))
  response.cookies.set("is_logged_in", "true", {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
  })

  return response
}