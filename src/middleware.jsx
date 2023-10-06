import { NextResponse } from 'next/server'

let locales = ['sv', 'en']

export function middleware(request) {

  const pathname = request.nextUrl.pathname
  if (
    [
      '/manifest.json',
      '/favicon.ico',
    ].includes(pathname)
  )
    return
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {


    return NextResponse.redirect(
      new URL(
        `/${'sv'}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);

  return NextResponse.next({
    request: {

      headers: requestHeaders,
    }
  });
}

export const config = {

  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
