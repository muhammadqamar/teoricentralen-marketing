import { SimpleLayout } from '@/components/SimpleLayout'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

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

  console.log('Generating', allFacts)

  console.log(allFacts)

  return allFacts.map((fact) => ({
    title: fact.title,
    slug: fact.slug,
    excerpt: fact.excerpt,
    // date: fact.items.date_DESC,
  }))
}

export default function Page({ params }) {
  return (
    <div className="">
      <SimpleLayout
        bgImage
        title={params.title}
        intro="Här hittar du allt om körkortsteori."
      >
        <div className="container mx-auto px-5 md:border-l md:border-zinc-100 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            <div className="mb-12 font-medium capitalize">{params.title}</div>
            <div>
              Test Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente beatae delectus nemo quas cumque, harum accusamus, veniam
              praesentium officiis voluptate sunt voluptas maiores optio
              obcaecati, hic quasi consequatur amet. Mollitia.
              {documentToReactComponents(params.excerpt)}
            </div>
            {/* <div className="m-0">{params.date_DESC}</div> */}
          </div>
        </div>
      </SimpleLayout>
      {/* <h2 className="mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          Blog
        </Link>
        .
      </h2>
      <article>
        <h1 className="mb-12 text-6xl font-bold leading-tight tracking-tighter text-center md:text-left md:text-7xl md:leading-none lg:text-8xl">
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
        <div className="max-w-2xl mx-auto">
          <div className="block mb-6 md:hidden">
            {post.author && (
              <Avatar name={post.author.name} picture={post.author.picture} />
            )}
          </div>
          <div className="mb-6 text-lg">
            <Date dateString={post.date} />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="prose">
            <Markdown content={post.content} />
          </div>
        </div>
      </article>
      <hr className="mb-24 border-accent-2 mt-28" />
      <MoreStories morePosts={morePosts} /> */}
    </div>
  )
}
