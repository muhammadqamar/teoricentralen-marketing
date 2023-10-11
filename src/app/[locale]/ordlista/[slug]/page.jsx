import { getAllOrdlista, getOrdlista } from '@/lib/ordlista'
import { draftMode } from 'next/headers'
import { PageHero } from '@/components/Hero/PageHero'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/backgrounds/trafikutbildare.jpg'

import { ContentfulRender } from '@/utils/contentful'
import { Card } from '@/components/Card'
import { ContentDateFormat } from '@/lib/formatDate'

export async function generateMetadata({ params: { locale, slug } }) {
  const { isEnabled } = draftMode()
  const { fact } = await getOrdlista(slug, isEnabled, locale)
  const title = fact?.title || 'Teoricentralen'
  const description =
    fact?.excerpt ||
    'Teoricentralen - en utbildningsplattform för körkortsteori'
  const images = [
    fact?.image?.url || {
      url: process.env.NEXT_PUBLIC_SITE_URL + '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Teoricentralen',
    },
  ]

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
    },
    twitter: {
      title,
      description,
      images,
    },
  }
}

export async function generateStaticParams({ params: { locale } }) {
  const allLists = await getAllOrdlista(false, locale)

  return allLists?.map((list) => ({
    slug: list.slug,
  }))
}

export default async function Page({ params: { locale, slug } }) {
  console.log(slug)
  const { isEnabled } = draftMode()
  const { fact } = await getOrdlista(slug, isEnabled, locale)

  return (
    <>
      <PageHero
        title={fact?.title}
        description={''}
        backgroundImage={fact?.image?.url || backgroundImage}
      />
      <Container className="my-16 ">
        <div className="flex flex-col gap-6">
          {fact?.sys?.publishedAt && (
            <Card as="article">
              <Card.Eyebrow
                className="!mb-3 "
                as="date"
                dateTime={fact?.sys?.publishedAt}
                decorate
              >
                <p className="!text-gray-600">
                  {ContentDateFormat(fact?.sys?.publishedAt || '')}
                </p>
              </Card.Eyebrow>
            </Card>
          )}

          {ContentfulRender(fact?.content?.json)}
        </div>
      </Container>
    </>
  )
}
