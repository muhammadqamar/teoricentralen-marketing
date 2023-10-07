'use client'

import { usePathname } from 'next-intl/client'
import { Navigation } from '@/components/Navigation'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components//FadeIn'
import { Container } from '@/components/Container'
import bgHome from '@/images/backgrounds/elk.jpg'
import bgDefault from '@/images/backgrounds/default.jpg'
import Image from 'next/image'

export function Header({ locale }) {
  const path = usePathname()

  return (
    <>
      <Navigation locale={locale} />

      {path === '/' && <HomeHero />}
      {path !== '/' && <PageHero />}
    </>
  )
}

function HomeHero() {
  return (
    <div className="relative isolate overflow-hidden">
      <Image
        src={bgHome}
        alt="Teoricentralen"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="absolute inset-0 top-0 -z-10 h-full bg-black bg-opacity-50"></div>

      <Container className="pb-24 pt-40 sm:pb-48 sm:pt-64">
        <div className="text-center">
          <FadeIn className="flex items-center justify-center gap-x-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Framtidens trafikutbildning är här
            </h1>
          </FadeIn>

          <FadeIn className="flex items-center justify-center gap-x-8">
            <p className="mt-4 text-xl font-medium leading-8 text-white">
              Utvecklad tillsammans med trafikskolor i Sverige.
            </p>
          </FadeIn>

          <FadeIn className="mt-10 flex items-center justify-center gap-x-6">
            <div className="flex max-w-md flex-col gap-2">
              <Button href="https://app.teoricentralen.se" variant="primary">
                Logga in som elev
              </Button>
              <Button href="https://admin.teoricentralen.se" variant="success">
                Logga in som trafikskola
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  )
}

function PageHero() {
  return (
    <div className="relative isolate overflow-hidden">
      <Image
        src={bgDefault}
        alt="Teoricentralen"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="absolute inset-0 top-0 -z-10 h-full bg-black bg-opacity-50"></div>

      <Container className="pb-24 pt-48">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Support center
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-200">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
      </Container>
    </div>
  )
}
