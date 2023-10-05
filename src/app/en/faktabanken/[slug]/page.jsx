import FaktabankenSlug from '@/components/Faktabanken/slug'
import { getAllFacts, getPostAndMorePosts } from '@/lib/facts'
import { draftMode } from 'next/headers'

export async function generateStaticParams({ params }) {
  const paramsData = params.slug
  console.log('paramsData', paramsData)
  const allFacts = await getAllFacts(false, 'en')
  return allFacts?.map((fact) => ({
    slug: fact.slug,
  }))
}

export default async function Page({ params }) {
  const { sulg } = params

  const { isEnabled } = draftMode()
  const { post, morePosts } = await getPostAndMorePosts(
    params.slug,
    isEnabled,
    'en',
  )

  console.log('params.slug', post)

  return <FaktabankenSlug data={post} />
}
