import { Container } from '@/components/Container'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/barn.jpg'
import { translationHook } from '@/utils/translationHook'

export async function generateMetadata({ params: { locale } }) {
  const title = await translationHook(locale, 'car', 'seoTitle')
  const description = await translationHook(locale, 'car', 'seoDescription')
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
        title={await translationHook(locale, 'car', 'seoTitle')}
        description={await translationHook(locale, 'car', 'seoDescription')}
        backgroundImage={backgroundImage}
      />

      <Container className="my-16">Car</Container>
    </>
  )
}
