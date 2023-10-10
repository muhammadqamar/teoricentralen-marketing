import FaktabankenSlug from '@/components/Faktabanken/slug'
import { getAllFacts, getFact } from '@/lib/facts'
import { draftMode } from 'next/headers'
import { PageHero } from '@/components/Hero/PageHero'

export async function generateMetadata({ params: { locale, slug } }) {
  const { isEnabled } = draftMode()
  const { fact } = await getFact(slug, isEnabled, locale)
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
  const allFacts = await getAllFacts(false, locale)

  return allFacts?.map((fact) => ({
    slug: fact.slug,
  }))
}

export default async function Page({ params: { locale, slug } }) {
  const { isEnabled } = draftMode()
  const { fact } = await getFact(slug, isEnabled, locale)

  return <FaktabankenSlug data={fact} />
}
