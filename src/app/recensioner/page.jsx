import Testimonials from '@/components/Testimonials/Testimonials'
import { getTranslations } from '../../../getTranslations'

export default async function Page() {
  const lang = await getTranslations('sv')

  return <Testimonials data={lang?.testimonials || ''} />
}
