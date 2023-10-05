import Home from '@/components/Home'
import { getDictionary } from '../../../getDictionaries'

export default async function Reviews() {
  const lang = await getDictionary('en')
  return <Home data={lang?.home || ''} />
}
