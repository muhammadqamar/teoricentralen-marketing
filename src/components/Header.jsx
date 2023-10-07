'use client'

import { usePathname } from 'next-intl/client'
import { Navigation } from '@/components/Navigation'
import { Button } from '@/components/Button'
import bgHome from '@/images/backgrounds/elk.jpg'
import bgDefault from '@/images/backgrounds/default.jpg'
import Image from 'next/image'
import { FadeIn } from './FadeIn'
import { Container } from './Container'

export function Header({ lang }) {
  const path = usePathname()

  return (
    <div className="bg-dark">
      <Navigation lang={lang} />

      {path === '/' && <HomeHero />}
      {path !== '/' && <PageHero />}
    </div>
  )
}

function HeroImage2() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <Image
        src={bgHome}
        alt="Teoricentralen"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Data to enrich your online business
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
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
              Framtidens trafikutbildning är här.
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
