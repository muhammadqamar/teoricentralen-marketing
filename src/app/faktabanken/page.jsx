import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllFacts } from '@/lib/facts'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { Card } from '@/components/Card'
import { draftMode } from 'next/headers'

import Link from 'next/link'

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Eyebrow
        className="!m-0 "
        as="time"
        dateTime={article.date}
        decorate
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </Card>
  )
}

export default async function Page({ data }) {
  let articles = (await getAllArticles()).slice(0, 1)
  console.log(data)

  const { isEnabled } = draftMode()
  const allFacts = await getAllFacts(isEnabled)
  console.log('allFacts', allFacts)

  return (
    <SimpleLayout
      bgImage
      title="Faktabanken. Innehåll för körkortsteori."
      intro="Här hittar du allt om körkortsteori."
    >
      <div className="md:border-l md:border-zinc-100 md:dark:border-zinc-700/40">
        <div className="flex max-w-[1120px] flex-col space-y-16">
          {allFacts.map((fact) => (
            <Link
              className="w-full rounded-lg bg-white px-[25px] py-5 shadow-md"
              href={`/faktabanken/${fact.slug}`}
              key={fact.slug}
            >
              {fact.title}
              {/* {fact.date} */}
              {articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
              {/* <p className="relative z-10 order-first flex items-center text-xs text-zinc-400 dark:text-zinc-500">
                Sep 5,2022
              </p> */}
            </Link>
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
