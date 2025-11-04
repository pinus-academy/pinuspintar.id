import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { codes } from './lib/accessCodes'

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl

  if (pathname.startsWith('/_next/image')) {
    return NextResponse.next()
  }

  if (pathname.match(/^\/talents\/.*\.(png|jpg|jpeg|gif|webp|svg)$/i)) {
    return NextResponse.next()
  }

  const isProtected = pathname.startsWith('/talents')
  if (!isProtected) return NextResponse.next()

  const token = searchParams.get('token')
  if (!token) return NextResponse.redirect(new URL('/', req.url))

  const decoded = decodeBase64(token)
  const isValid = codes.some(code => code.code === decoded)

  if (!isValid) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/talents/:path*',
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
   ],
}

function decodeBase64(str: string) {
    try {
      return Buffer.from(str, 'base64').toString('utf-8')
    } catch {
      return ''
    }
}
