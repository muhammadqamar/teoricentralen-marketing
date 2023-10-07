'use client'

import { usePathname } from 'next-intl/client'
import { Navigation } from '@/components/Navigation'
import { Button } from '@/components/Button'
import bgHome from '@/images/backgrounds/elk.jpg'
import Image from 'next/image'
import { FadeIn } from './FadeIn'

export function Header({ lang }) {
  const path = usePathname()

  return (
    <div className="bg-dark">
      <Navigation lang={lang} />

      {path === '/' && <Hero />}
      {path !== '/' && <HeroImage />}
    </div>
  )
}

function HeroImage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={bgHome}
            alt="Teoricentralen"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="relative bg-black bg-opacity-50 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
            <FadeIn className="flex items-center justify-center gap-x-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Framtidens trafikutbildning är här.
              </h1>
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  )
}

function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-24">
      <Image
        src={bgHome}
        alt="Teoricentralen"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden bg-black opacity-50 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-xl pb-40 pt-32">
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
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
