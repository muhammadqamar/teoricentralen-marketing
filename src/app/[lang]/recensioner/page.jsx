import Testimonials from '@/components/Testimonials/Testimonials'
import { getDictionary } from '../../../../getDictionaries'

export const metadata = {
  title: 'Recensioner',
  description: 'Framtidens trafikutbildning är här',
}

export default async function Page({ params: { lang } }) {
  const dictionary = await getDictionary(lang)

  return <Testimonials data={dictionary?.testimonials} />
}
