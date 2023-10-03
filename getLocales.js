import 'server-only'
const localsData = {
  en: () => import('./locales/en.json').then((r) => r.default),
  sv: () => import('./locales/sv.json').then((r) => r.default),
}

export const getLocales = async (lang) => {
  return localsData?.[lang]?.()
}
