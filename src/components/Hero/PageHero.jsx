import Image from 'next/image'
import defaultBackgroundImage from '@/images/backgrounds/default.jpg'

import { Container } from '@/components/Container'

export function PageHero({ title, description, backgroundImage }) {
  return (
    <div className="relative overflow-hidden isolate">
      <Image
        src={backgroundImage || defaultBackgroundImage}
        fill={true}
        alt="Teoricentralen"
        placeholder="blur"
        className="absolute inset-0 object-cover w-full h-full -z-10"
        priority
      />

      <div className="absolute inset-0 top-0 h-full bg-black -z-10 bg-opacity-70"></div>

      <Container className="pt-40 pb-16 sm:pb-24 sm:pt-48">
        {title && (
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
        )}

        {description && (
          <p className="mt-4 text-lg leading-8 text-gray-200">{description}</p>
        )}
      </Container>
    </div>
  )
}
