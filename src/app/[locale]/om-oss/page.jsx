import Image from 'next/image'

import { Container } from '@/components/Container'
import portraitImage from '@/images/logo.png'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/barn.jpg'
import { translationHook } from '@/utils/translationHook'

export async function generateMetadata({ params: { locale } }) {
  const title = await translationHook(locale, 'omOss', 'seoTitle')
  const description = await translationHook(locale, 'omOss', 'seoDescription')
  const ogImage = '/og-image.png'
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogImage }],
    },
  }
}
export default async function Page({ params: { locale } }) {
  return (
    <>
      <PageHero
        title={await translationHook(locale, 'omOss', 'seoTitle')}
        description={await translationHook(locale, 'omOss', 'seoDescription')}
        backgroundImage={backgroundImage}
      />

      <Container className="my-16">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 object-cover"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl">
              {await translationHook(locale, 'omOss', 'seoTitle')}
            </h1>
            <div className="mt-6 space-y-7 font-medium text-gray-600">
              {await translationHook(locale, 'omOss', 'seoDescription')}
              <p>
                Smidig inskrivning av elever. Låt dina kunder själv skriva in
                sig på din trafikskola med hjälp av enkel BankID identifiering.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
