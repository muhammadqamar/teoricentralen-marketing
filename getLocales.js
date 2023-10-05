import 'server-only'

const dictionaries = {
  en: () => import('./locales/en.json').then((module) => module.default),
  sv: () => import('./locales/sv.json').then((module) => module.default),
}

export const getLocales = async (lang) => {
  return dictionaries?.[lang]?.()
}
