import Testimonials from '@/components/Testimonials/Testimonials'
import { getLocales } from '../../../getLocales'

export default async function Reviews() {
  const lang = await getLocales('sv')
  return <Testimonials data={lang?.testimonials || ''} />
}
