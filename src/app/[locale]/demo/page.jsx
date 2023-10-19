import { SimpleLayout } from '@/components/SimpleLayout'
import { Calendly } from '@/components/Calendly'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/barn.jpg'
import { translationHook } from '@/utils/translationHook'

export async function generateMetadata({ params: { locale } }) {
  const title = await translationHook(locale, 'demo', 'seoTitle')
  const description = await translationHook(locale, 'demo', 'seoDescription')
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

export default async function Demo({ params: { locale } }) {
  return (
    <>
      <PageHero
        title={await translationHook(locale, 'demo', 'seoTitle')}
        description={await translationHook(locale, 'demo', 'seoDescription')}
        backgroundImage={backgroundImage}
      />

      <SimpleLayout
        title={await translationHook(locale, 'demo', 'seoTitle')}
        intro={await translationHook(locale, 'demo', 'seoDescription')}
      >
        <Calendly />
      </SimpleLayout>
    </>
  )
}
