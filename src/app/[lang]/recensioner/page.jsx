import Testimonials from '@/components/Testimonials/Testimonials'
import { getTranslations } from '../../../../getTranslations'

export const metadata = {
  title: 'Recensioner',
  description: 'Framtidens trafikutbildning är här',
}

export default async function Page({ params: { lang } }) {
  const translations = await getTranslations(lang)

  return <Testimonials data={translations?.testimonials} />
}
