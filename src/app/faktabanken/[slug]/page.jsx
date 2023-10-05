import FaktabankenSlug from '@/components/Faktabanken/slug'
import { getAllFacts, getPostAndMorePosts } from '@/lib/facts'
import { draftMode } from 'next/headers'

export async function generateStaticParams() {
  const allFacts = await getAllFacts(false, 'sv')
  return allFacts.map((fact) => ({
    title: fact.title,
    slug: fact.slug,
  }))
}

export default async function Page({ params }) {
  // const { sulg } = params

  const { isEnabled } = draftMode()
  const { post, morePosts } = await getPostAndMorePosts(
    params.slug,
    isEnabled,
    'sv',
  )

  console.log('params.slug', post)

  return <FaktabankenSlug data={post} />
}
