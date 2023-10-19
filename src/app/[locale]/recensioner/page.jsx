import Testimonials from '@/components/Testimonials/Testimonials'
import { getTranslations } from '../../../../getTranslations'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/moped.jpg'
import { translationHook } from '@/utils/translationHook'

export async function generateMetadata({ params: { locale } }) {
  const title = await translationHook(locale, 'recensioner', 'seoTitle')
  const description = await translationHook(
    locale,
    'recensioner',
    'seoDescription',
  )
  const ogImage = '/og-image.png'
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogImage }],
    },
  }
}

export default async function Page({ params: { locale } }) {
  const lang = await getTranslations(locale)

  return (
    <>
      <PageHero
        title={await translationHook(locale, 'recensioner', 'seoTitle')}
        description={await translationHook(
          locale,
          'recensioner',
          'seoDescription',
        )}
        backgroundImage={backgroundImage}
      />

      <Testimonials data={lang?.testimonials} />
    </>
  )
}
