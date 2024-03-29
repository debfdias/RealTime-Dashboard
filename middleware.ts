import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export default async function middleware(req: NextRequest, res: NextResponse) {
  const path = req.nextUrl.pathname

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  })

  const authRoutes = ["/dashboard", "/users", "/charts", "/tables", "/settings"]

  if (!session && authRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/", req.url))
  } else if (session && (path === "/register" || path === "/")) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  return NextResponse.next()
}
