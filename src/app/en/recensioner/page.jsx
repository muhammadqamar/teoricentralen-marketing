import Testimonials from '@/components/Testimonials/Testimonials'
import { getDictionary } from '../../../../getDictionaries'

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

export default async function Reviews() {
  const lang = await getDictionary('en')
  return <Testimonials data={lang?.testimonials} />
}
