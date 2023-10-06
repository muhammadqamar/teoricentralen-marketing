import FaktabankenSlug from '@/components/Faktabanken/slug'
import { getAllFacts, getFact } from '@/lib/facts'
import { draftMode } from 'next/headers'

export async function generateStaticParams({ params }) {
  const allFacts = await getAllFacts(false, params.lang)
  return allFacts?.map((fact) => ({
    slug: fact.slug,
  }))
}

export default async function Page({ params }) {
  const { isEnabled } = draftMode()
  const { fact } = await getFact(params.slug, isEnabled, params.lang)

  return <FaktabankenSlug data={fact} />
}
