import { Container } from '@/components/Container'
import { Faq } from '@/components/Faq'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/truck.jpg'
import { translationHook } from '@/utils/translationHook'

export async function generateMetadata({ params: { locale } }) {
  const title = await translationHook(locale, 'lastbil', 'seoTitle')
  const description = await translationHook(locale, 'lastbil', 'seoDescription')
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
        title={await translationHook(locale, 'lastbil', 'seoTitle')}
        description={await translationHook(locale, 'lastbil', 'seoDescription')}
        backgroundImage={backgroundImage}
      />

      <Container className="my-16">Lastbil</Container>
    </>
  )
}
