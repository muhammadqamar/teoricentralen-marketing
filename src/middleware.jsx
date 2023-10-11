import createMiddleware from 'next-intl/middleware'
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
export const locales = ['en', 'sv']
export const pathnames = {
  '/vagmarken': {
    en: '/road-signs',
    sv: '/vagmarken',
  },
  '/vagmarken/[categoryslug]': {
    en: '/road-signs/[categoryslug]',
    sv: '/vagmarken/[categoryslug]',
  },
  '/vagmarken/[categoryslug]/[signSlug]': {
    en: '/road-signs/[categoryslug]/[signSlug]',
    sv: '/vagmarken/[categoryslug]/[signSlug]',
  },

  '/ordlista': {
    en: '/dictionary',
    sv: '/ordlista',
  },
  '/ordlista/[slug]': {
    en: '/dictionary/[slug]',
    sv: '/ordlista/[slug]',
  },
}
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames })

export function middleware(request) {
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale: 'sv',
    pathnames,
    localeDetection: false,
  })

  const response = handleI18nRouting(request)
  response.headers.set('x-url', request.url)

  return response
}
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
