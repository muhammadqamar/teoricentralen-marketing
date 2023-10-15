export const dynamic = 'force-dynamic'
import FaktabankenSlug from '@/components/Faktabanken/slug'
import { getAllFacts, getFact } from '@/lib/facts'
import { draftMode } from 'next/headers'

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
    slug: fact.factSlug,
  }))
}

export default async function Page({ params: { locale, factSlug } }) {
  const { isEnabled } = draftMode()
  const { fact } = await getFact(factSlug, isEnabled, locale)

  return <FaktabankenSlug data={fact} />
}

