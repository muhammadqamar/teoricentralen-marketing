import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'

export const locales = ['sv', 'en']

export const pathnames = {
  /**
   * Hem / Home
   */
  '/': '/',

  /**
   * Utbildningar (Educations)
   */
  '/utbildningar': {
    sv: '/utbildningar',
    en: '/educations',
  },

  /**
   * Körkortsfrågor
   */
  '/korkortsfragor': {
    sv: '/korkortsfragor',
    en: '/driving-license-questions',
  },

  /**
   * Recensioner
   */
  '/recensioner': {
    sv: '/recensioner',
    en: '/reviews',
  },

  /**
   * Om oss / About us
   */
  '/om-oss': {
    sv: '/om-oss',
    en: '/about-us',
  },

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
