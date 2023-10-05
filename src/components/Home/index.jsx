import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Partners } from '@/components/Partners'

export default async function Home({ data }) {
  return (
    <>
      <Container className="mt-16">
        <div className="max-w-2xl">
          <FadeIn className="flex items-center gap-x-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl">
              {data.heading}
            </h1>
          </FadeIn>
          <FadeIn delay={2.2} className="flex items-center gap-x-8">
            <p className="mt-6 text-lg text-gray-600 dark:text-zinc-400">
              Utvecklad tillsammans med trafikskolor i Sverige.
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
    </>
  )
}
