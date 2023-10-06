import Testimonials from '@/components/Testimonials/Testimonials'
import { getLocales } from '@/helpers/getLocales'

export const metadata = {
  title: 'Recensioner',
  description: 'Framtidens trafikutbildning är här',
  alternates: {
    canonical: '/recensioner',
    languages: {
      sv: '/recensioner',
      en: '/en/recensioner',
    },
  },
}

export default async function Reviews({params}) {
  const lang = await getLocales(params.lang)
  return <Testimonials data={lang?.testimonials} />
}
