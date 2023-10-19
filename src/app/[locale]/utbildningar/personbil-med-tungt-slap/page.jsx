import { Container } from '@/components/Container'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/barn.jpg'
import { translationHook } from '@/utils/translationHook'

export async function generateMetadata({ params: { locale } }) {
  const title = await translationHook(locale, 'carWithTrailer', 'seoTitle')
  const description = await translationHook(
    locale,
    'carWithTrailer',
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
  return (
    <>
      <PageHero
        title={await translationHook(locale, 'carWithTrailer', 'seoTitle')}
        description={await translationHook(
          locale,
          'carWithTrailer',
          'seoDescription',
        )}
        backgroundImage={backgroundImage}
      />

      <Container className="my-16">Car with trailer</Container>
    </>
  )
}
