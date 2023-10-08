import FaktabankenSlug from '@/components/Faktabanken/slug'
import { getAllFacts, getFact } from '@/lib/facts'
import { draftMode } from 'next/headers'

export async function generateMetadata({ params: { locale, slug } }) {
  const { isEnabled } = draftMode()
  const { fact } = await getFact(slug, isEnabled, locale)
  console.log('✅✅', fact, fact?.image?.url)
  const title = fact?.title || 'Teoricentralen'
  const description =
    fact?.excerpt ||
    'Teoricentralen - en utbildningsplattform för körkortsteori'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [fact?.image?.url],
    },
    twitter: {
      title,
      description,
      images: [fact?.image?.url],
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
