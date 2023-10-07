import FaktabankenSlug from '@/components/Faktabanken/slug'
import { getAllFacts, getFact } from '@/lib/facts'
import { draftMode } from 'next/headers'

export const metadata = {
  title: 'Faktabanken',
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
