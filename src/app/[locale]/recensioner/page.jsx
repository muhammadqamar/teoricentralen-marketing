import Testimonials from '@/components/Testimonials/Testimonials'
import { getTranslations } from '../../../../getTranslations'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/moped.jpg'

const title = 'Recensioner'
const description = 'Framtidens trafikutbildning är här'
const image = '/og-image.png'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: image }],
  },
}

export default async function Page({ params: { locale } }) {
  const lang = await getTranslations(locale)

  return (
    <>
      <PageHero
        title={title}
        description={description}
        backgroundImage={backgroundImage}
      />

      <Testimonials data={lang?.testimonials} />
    </>
  )
}
