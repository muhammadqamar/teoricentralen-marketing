import Image from 'next/image'
import bgHome from '@/images/backgrounds/elk.jpg'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function HomeHero() {
  return (
    <div className="relative overflow-hidden isolate">
      <Image
        src={bgHome}
        alt="Teoricentralen"
        placeholder="blur"
        priority
        className="absolute inset-0 object-cover w-full h-full -z-10"
      />

      <div className="absolute inset-0 top-0 h-full bg-black bg-opacity-50 -z-10"></div>

      <Container className="pt-40 pb-24 sm:pb-48 sm:pt-64">
        <div className="text-center">
          <div className="flex flex-col items-center justify-center text-white gap-x-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Framtidens trafikutbildning är här
            </h1>

            <p className="mt-4 text-xl font-medium leading-8">
              Utvecklad tillsammans med trafikskolor i Sverige
            </p>

            <div className="flex flex-col max-w-md gap-2 mt-8">
              <Button href="https://app.teoricentralen.se" variant="primary">
                Logga in som elev
              </Button>
              <Button href="https://admin.teoricentralen.se" variant="success">
                Logga in som trafikskola
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
