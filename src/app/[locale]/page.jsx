import Home from '@/components/Home'
import { getTranslations } from '../../../getTranslations'

export default async function Page({ params: { locale } }) {
  const lang = await getTranslations(locale)

  return <Home data={lang?.home || ''} />
}
