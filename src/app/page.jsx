import Home from '@/components/Home'
import { getLocales } from '../../getLocales'

export default async function Reviews({ Params }) {
  const lang = await getLocales('en')
  return <Home data={lang?.home || ''} />
}
