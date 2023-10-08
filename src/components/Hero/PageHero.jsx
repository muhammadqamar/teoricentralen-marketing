import Image from 'next/image'
import bgDefault from '@/images/backgrounds/moped.jpg'
import { Container } from '@/components/Container'

export function PageHero({ title, description, image }) {
  return (
    <div className="relative isolate overflow-hidden">
      <Image
        src={image || bgDefault}
        fill={true}
        alt="Teoricentralen"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="absolute inset-0 top-0 -z-10 h-full bg-black bg-opacity-70"></div>

      <Container className="pb-24 pt-48">
        {title && (
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
        )}

        {description && (
          <p className="mt-6 text-lg leading-8 text-gray-200">{description}</p>
        )}
      </Container>
    </div>
  )
}
