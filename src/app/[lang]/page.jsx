import Home from '@/components/Home'
import { getTranslations } from '../../../getTranslations'

export default async function Reviews({ params }) {
  const lang = await getTranslations(params.lang)

  return <Home data={lang?.home || ''} />
}
