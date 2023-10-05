import Testimonials from '@/components/Testimonials/Testimonials'
import { getTranslations } from '../../../../getTranslations'

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
  const lang = await getTranslations('en')
  return <Testimonials data={lang?.testimonials} />
}
