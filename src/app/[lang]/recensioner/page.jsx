import Testimonials from '@/components/Testimonials/Testimonials'
import { getTranslations } from '../../../../getTranslations'

export const metadata = {
  title: 'Recensioner',
  description: 'Framtidens trafikutbildning är här',
}

export default async function Reviews({ params }) {
  const lang = await getTranslations(params.lang)

  return <Testimonials data={lang?.testimonials} />
}
