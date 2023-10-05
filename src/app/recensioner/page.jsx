import Testimonials from '@/components/Testimonials/Testimonials'
import { getDictionary } from '../../../getDictionaries'

export default async function Page() {
  const lang = await getDictionary('sv')

  return <Testimonials data={lang?.testimonials || ''} />
}
