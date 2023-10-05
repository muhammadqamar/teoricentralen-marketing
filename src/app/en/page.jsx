import Home from '@/components/Home'
import { getTranslations } from '../../../getTranslations'

export default async function Reviews() {
  const lang = await getTranslations('en')
  return <Home data={lang?.home || ''} />
}
