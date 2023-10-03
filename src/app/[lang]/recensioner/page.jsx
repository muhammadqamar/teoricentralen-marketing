import Testimonials from '@/components/Testimonials/Testimonials'
import { getLocales } from '../../../../getLocales'

export const metadata = {
  title: 'Recensioner',
  description: 'Framtidens trafikutbildning är här',
}

export default async function Reviews({ params }) {
  const lang = await getLocales(params.lang)
  return (
    <Testimonials data={lang?.testominials} />

  )
}
