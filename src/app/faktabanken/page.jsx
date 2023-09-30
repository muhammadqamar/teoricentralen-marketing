import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/korkortsbloggen/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata = {
  openGraph: {
    title: 'Körkortsbloggen',
    description:
      'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
    url: 'https://beta.teoricentralen.se',
    siteName: 'Teoricentralen',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'sv_SE',
    type: 'website',
  },
}

export default async function ArticlesIndex() {
  // let facts = await getAllFacts()

  // console.log(facts)

  return (
    <SimpleLayout
      title="Faktabanken. Innehåll för körkortsteori."
      intro="Här hittar du allt om körkortsteori."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {/* {facts.map((fact) => console.log(fact))} */}
        </div>
      </div>
    </SimpleLayout>
  )
}
