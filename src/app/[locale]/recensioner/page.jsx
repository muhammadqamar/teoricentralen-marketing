import Testimonials from '@/components/Testimonials/Testimonials'
import { getTranslations } from '../../../../getTranslations'

export const metadata = {
  title: 'Recensioner',
  description: 'Framtidens trafikutbildning är här',
}

export default async function Page({ params: { locale } }) {
  const lang = await getTranslations(locale)

  return <Testimonials data={lang?.testimonials} />
}
