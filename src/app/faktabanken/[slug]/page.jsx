import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import { draftMode } from 'next/headers'

// import MoreStories from "../../more-stories"
// import Avatar from "../../avatar"
// import Date from "../../date"
// import CoverImage from "../../cover-image"

// import { Markdown } from '@/lib/markdown'
import { getAllFacts } from '@/lib/facts'

export async function generateStaticParams() {
  const allFacts = await getAllFacts(false)

  console.log(allFacts)

  return allFacts.map((fact) => ({
    slug: fact.slug,
  }))
}

export default function Page({ params }) {
  const { slug } = params

  return (
    <div className="container mx-auto px-5">
      <SimpleLayout
        title="Faktabanken. Innehåll för körkortsteori."
        intro="Här hittar du allt om körkortsteori."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {/* {facts.map((fact) => console.log(fact))} */}
            <div>Fact: {params.slug}</div>
          </div>
        </div>
      </SimpleLayout>
      {/* <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          Blog
        </Link>
        .
      </h2>
      <article>
        <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
          {post.title}
        </h1>
        <div className="hidden md:mb-12 md:block">
          {post.author && (
            <Avatar name={post.author.name} picture={post.author.picture} />
          )}
        </div>
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage title={post.title} url={post.coverImage.url} />
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 block md:hidden">
            {post.author && (
              <Avatar name={post.author.name} picture={post.author.picture} />
            )}
          </div>
          <div className="mb-6 text-lg">
            <Date dateString={post.date} />
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="prose">
            <Markdown content={post.content} />
          </div>
        </div>
      </article>
      <hr className="border-accent-2 mb-24 mt-28" />
      <MoreStories morePosts={morePosts} /> */}
    </div>
  )
}
