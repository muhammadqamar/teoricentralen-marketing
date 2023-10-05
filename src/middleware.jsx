import { NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['sv', 'en']
const defaultLocale = 'sv'

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  // If there is a locale, continue
  if (pathnameHasLocale) return NextResponse.next()

  // If we have no locale, redirect to the preferred locale
  const locale = defaultLocale
  request.nextUrl.pathname = `/${locale}${pathname}`

  // e.g. incoming request is /products - the new URL is now /en-US/products
  return Response.redirect(request.nextUrl)
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    '/((?!api|_next/static|_next/image|sitemap.xml|manifest.*|favicon.ico).*)',
  ],
}
