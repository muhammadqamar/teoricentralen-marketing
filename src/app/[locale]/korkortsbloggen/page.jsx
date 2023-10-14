import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/trafikutbildare.jpg'

const title = 'Körkortsbloggen'
const description =
  'Från nybörjare till trafikexpert. En blogg om körkort, trafiksäkerhet och trafikregler.'
const image = '/og-image.png'

// export const metadata = {
//   title,
//   description,
//   openGraph: {
//     title,
//     description,
//     url: 'https://www.teoricentralen.se',
//     siteName: 'Teoricentralen',
//     images: [
//       {
//         url: image,
//         width: 1200,
//         height: 630,
//         alt: 'Teoricentralen',
//       },
//     ],
//     locale: 'sv',
//     type: 'website',
//   },
// }

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

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <>
      <PageHero
        title={title}
        description={description}
        backgroundImage={backgroundImage}
      />

      <SimpleLayout
        title="Writing on software design, company building, and the aerospace industry."
        intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
