import Image from 'next/image'
import bgDefault from '@/images/backgrounds/moped.jpg'
import { Container } from '@/components/Container'

export function PageHero({ title, description }) {
  return (
    <div className="relative isolate overflow-hidden">
      <Image
        src={bgDefault}
        alt="Teoricentralen"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="absolute inset-0 top-0 -z-10 h-full bg-black bg-opacity-70"></div>

      <Container className="pb-24 pt-48">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Framtidens trafikutbildning är här
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-200">
          Ditt körkort, dina villkor. Vi hjälper dig att hitta en trafikskola
          som passar just dig.
        </p>
      </Container>
    </div>
  )
}
