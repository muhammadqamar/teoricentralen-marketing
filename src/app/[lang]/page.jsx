import Home from '@/components/Home'
import { getLocales } from '../../../getLocales'

export default async function Reviews({params}) {
  const lang = await getLocales(params.lang)
  return (
    <Home data={lang?.home || ''} />
 )
}
