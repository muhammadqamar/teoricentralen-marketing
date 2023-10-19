import { Container } from '@/components/Container'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/motorcycle.jpg'
import { translationHook } from '@/utils/translationHook'

export async function generateMetadata({ params: { locale } }) {
  const title = await translationHook(locale, 'motorcykel', 'seoTitle')
  const description = await translationHook(
    locale,
    'motorcykel',
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
        title={await translationHook(locale, 'motorcykel', 'seoTitle')}
        description={await translationHook(
          locale,
          'motorcykel',
          'seoDescription',
        )}
        backgroundImage={backgroundImage}
      />

      <Container className="my-16">Körkortsteori för motorcykel</Container>
    </>
  )
}
