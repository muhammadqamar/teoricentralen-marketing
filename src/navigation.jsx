import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'

export const locales = ['sv', 'en']

export const pathnames = {
  // If all locales use the same pathname, a single external path can be provided.
  '/': '/',

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
   * Faktabanken
   */
  '/faktabanken': {
    sv: '/faktabanken',
    en: '/facts',
  },
  '/faktabanken/[factSlug]': {
    sv: '/faktabanken/[factSlug]',
    en: '/facts/[factSlug]',
  },

  /**
   * Om oss / About us
   */
  '/om-oss': {
    sv: '/om-oss',
    en: '/about-us',
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
}

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames })
