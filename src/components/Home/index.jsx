import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Partners } from '@/components/Partners'

export default async function Home({ data }) {
  return (
    <>
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
