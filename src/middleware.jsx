import createMiddleware from 'next-intl/middleware'
import { locales, pathnames } from '@/navigation'

export default createMiddleware({
  // Default locale
  defaultLocale: 'sv',

  // All locales
  locales,

  // Localized pathnames
  pathnames,

  // Locale prefix
  localePrefix: 'always',

  // Locale detection
  localeDetection: true,
})

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
