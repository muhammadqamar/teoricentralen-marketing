import { getAllFacts } from '@/lib/facts'
import { draftMode } from 'next/headers'
import Faktabanken from '@/components/Faktabanken'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/barn.jpg'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { translationHook } from '@/utils/translationHook'

export async function generateMetadata({ params: { locale } }) {
  const title = await translationHook(locale, 'faktabanken', 'seoTitle')
  const description = await translationHook(
    locale,
    'faktabanken',
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
  const { isEnabled } = draftMode()
  const allFacts = await getAllFacts(isEnabled, locale)

  const pages = [
    {
      name: await translationHook(locale, 'faktabanken', 'seoTitle'),
      href: locale === 'sv' ? '/faktabanken' : locale === 'en' && '/facts',
      current: false,
    },
  ]

  return (
    <>
      <PageHero
        title={await translationHook(locale, 'faktabanken', 'seoTitle')}
        description={await translationHook(
          locale,
          'faktabanken',
          'seoDescription',
        )}
        backgroundImage={backgroundImage}
      />
      <Container className="my-8">
        <Breadcrumbs pages={pages} />
      </Container>
      <Faktabanken data={allFacts} />
    </>
  )
}
