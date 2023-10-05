import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Partners } from '@/components/Partners'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import Image from 'next/image'

// import portraitImage from '@/images/Banner.svg'

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/korkortsbloggen/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

export default async function Home({ data }) {
  let articles = (await getAllArticles()).slice(0, 4)
  console.log(data)
  return (
    <>
      {/* <div className="relative left-0 top-0 h-[650px] w-full overflow-hidden "> */}
      {/* <div className="h-full before:absolute before:top-0 before:h-full before:w-full before:bg-[#88b6fc] before:opacity-[0.3]">
          <Image
            src={portraitImage}
            alt="banner"
            layout="fill"
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square h-full w-full bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div> */}
      <Container className="mt-16">
        <div className="max-w-2xl">
          <FadeIn className="flex items-center gap-x-8">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {data.heading}
            </h1>
          </FadeIn>
          <FadeIn delay={2.2} className="flex items-center gap-x-8">
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Utvecklat tillsammans med trafikskolor i Sverige.
            </p>
          </FadeIn>
        </div>
      </Container>

      <Container className="mt-16">
        <div className="flex max-w-sm flex-col gap-2">
          <Button href="https://app.teoricentralen.se" variant="primary">
            Logga in som elev
          </Button>
          <Button href="https://admin.teoricentralen.se" variant="success">
            Logga in som trafikskola
          </Button>
        </div>
      </Container>

      <Partners />

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-8 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>

          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
