import 'server-only'

const translations = {
  en: () => import('./translations/en.json').then((module) => module.default),
  sv: () => import('./translations/sv.json').then((module) => module.default),
}

export const getTranslations = async (locale) => {
  return translations?.[locale]?.()
}
