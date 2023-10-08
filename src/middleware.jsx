import createIntlMiddleware from 'next-intl/middleware'

export function middleware(request) {
  // const pathnames = {
  //   '/vagmarken': {
  //     sv: '/vagmarken',
  //     en: '/road-signs',
  //   },
  // }

  const handleI18nRouting = createIntlMiddleware({
    locales: ['sv', 'en'],
    defaultLocale: 'sv',
    // pathnames,
    localeDetection: false,
  })

  const response = handleI18nRouting(request)
  response.headers.set('x-url', request.url)

  return response
}
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
