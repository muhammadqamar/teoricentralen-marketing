import { createTranslator } from 'next-intl'
export const translationHook = async (locale = 'en', page, key) => {
  const messages = (await import(`../../translations/${locale}.json`)).default
  const t = createTranslator({ locale: 'en', messages: messages[page] })
  return t(key)
}
