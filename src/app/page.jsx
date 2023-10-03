import Home from '@/components/Home'
import { getLocales } from '../../getLocales'

export default async function Reviews() {
  const lang = await getLocales('sv')
  return (
    <Home data={lang?.home || ''} />
 )
}
