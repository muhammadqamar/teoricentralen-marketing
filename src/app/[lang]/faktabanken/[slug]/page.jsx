import FaktabankenSlug from '@/components/Faktabanken/slug'
import { getAllFacts, getFact } from '@/lib/facts'
import { draftMode } from 'next/headers'

export async function generateStaticParams({ params: { lang } }) {
  const allFacts = await getAllFacts(false, lang)

  // Check if allFacts is not null or undefined
  if (allFacts) {
    return allFacts.map((fact) => ({
      title: fact.title,
      slug: fact.slug,
    }))
  }

  // Return an empty array or handle the case when allFacts is null/undefined
  return []
}

export default async function Page({ params: { lang, slug } }) {
  const { isEnabled } = draftMode()
  const { fact } = await getFact(slug, isEnabled, lang)

  console.log('params.slug', fact)

  return <FaktabankenSlug data={fact} />
}
