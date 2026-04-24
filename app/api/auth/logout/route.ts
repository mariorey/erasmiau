import { NextResponse } from "next/server"

const COOKIE = "erasmiau_admin"

export async function POST() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE, "", { maxAge: 0, path: "/" })
  return res
}
