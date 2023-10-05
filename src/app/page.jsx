import Home from '@/components/Home'
import { getDictionary } from '../../getDictionaries'

export default async function Reviews({ Params }) {
  const lang = await getDictionary('sv')

  return <Home data={lang?.home || ''} />
}
