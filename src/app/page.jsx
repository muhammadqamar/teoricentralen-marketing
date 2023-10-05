import Home from '@/components/Home'
import { getTranslations } from '../../getTranslations'

export default async function Page({ params: { lang } }) {
  const dict = await getTranslations(lang)
  console.log(dict)

  return <Home data={dict?.home || ''} />
}
