import FaktabankenSlug from '@/components/Faktabanken/slug'
import { getAllFacts, getFact } from '@/lib/facts'
import { draftMode } from 'next/headers'

export async function generateStaticParams({ params: { lang } }) {
  const allFacts = await getAllFacts(false, lang)

  return allFacts?.map((fact) => ({
    title: fact.title,
    slug: fact.slug,
  }))
}

export default async function Page({ params: { lang, slug } }) {
  const { isEnabled } = draftMode()
  const { fact } = await getFact(slug, isEnabled, lang)

  // console.log('hello')

  // console.log('params.slug', fact)

  return <FaktabankenSlug data={fact} />
}
