import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['sv', 'en'],
  defaultLocale: 'sv',
  localePrefix: 'always',

  pathnames: {
    /**
     * Vägmärken / Road signs
     */
    '/vagmarken': {
      sv: '/vagmarken',
      en: '/road-signs',
    },
    '/vagmarken/[roadSignCategorySlug]': {
      sv: '/vagmarken/[roadSignCategorySlug]',
      en: '/road-signs/[roadSignCategorySlug]',
    },
    '/vagmarken/[roadSignCategorySlug]/[roadSignSlug]': {
      sv: '/vagmarken/[roadSignCategorySlug]/[roadSignSlug]',
      en: '/road-signs/[roadSignCategorySlug]/[roadSignSlug]',
    },

    /**
     * Ordlista / Wordlist
     */
    '/ordlista': {
      sv: '/ordlista',
      en: '/dictionary',
    },
    '/ordlista/[slug]': {
      sv: '/ordlista/[slug]',
      en: '/dictionary/[slug]',
    },
  },

  // Locale detection
  localeDetection: true,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(sv|en)/:path*'],
}
