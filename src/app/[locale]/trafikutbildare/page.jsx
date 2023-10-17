import { Container } from '@/components/Container'
import FeatureSection from '@/components/FeatureSection'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/trafikutbildare.jpg'
import denny from '@/images/testimonials/denny.jpg'
import getBase64 from '@/utils/getLocalBase64'
import Image from 'next/image'

const title = 'För trafikutbildare'
const description = 'Plattformen som hjälper trafikskolor att växa'
const ogImage = '/og-image.png'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: ogImage }],
  },
}

export default async function Page({ params }) {

  return (
    <>
      <PageHero
        title={title}
        description={description}
        backgroundImage={backgroundImage}
      />

      <Container>
        <FeatureSection
          title="Vi stöttar din verksamhet"
          text="“Vi utvecklar ditt nya affärssystem för att möta dina framtida utmaningar. Hos oss bedriver du din verksamhet på dina villkor.”"
          image={"https://uploads-ssl.webflow.com/63eaaf48b5d45c04b3775fc9/640a4874cdb3d1770f94a5fe_enkel%20view-transcode.mp4"}
          isVideo>
          <figcaption className="mt-6 flex gap-x-4 text-base leading-6">
            <Image
              width={64}
              height={64}
              src={denny}
              alt="Denny Soulaka"
              className="h-12 w-12 flex-none rounded-full"
            />
            <div>
              <p className="text-gray-900">Denny Soulaka</p>
              <p className="font-semibold">Teoricentralen Sverige AB </p>
            </div>
          </figcaption>
        </FeatureSection>

        {/* placeholder content */}
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-extrabold tracking-tight text-dark">
                {title}
              </h2>

              <p className="mt-6 text-xl leading-8 text-gray-600">
                {description}
              </p>

              <p className="mt-6 text-base leading-7 text-gray-600">
                Vill du ta din verksamhet till nästa nivå? Upptäck hur vi kan
                hjälpa dig att automatisera och digitalisera din verksamhet.
              </p>

              <div className="flex mt-6">
                <a
                  href="/demo"
                  className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Boka en demo <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="flex-auto w-0 lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <div className="aspect-[7/5] overflow-hidden w-[37rem] relative max-w-none rounded-2xl bg-gray-50 object-cover"
                >
                  <Image
                    blurDataURL={await getBase64('https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80')}
                    src={'https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80'}
                    fill={true}
                    placeholder="blur"
                    priority
                  />
                </div>
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">


                <div className="flex self-end justify-end flex-none order-first w-64 lg:w-auto">

                  <div className="relative overflow-hidden aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  >
                    <Image
                      blurDataURL={await getBase64('https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80')}
                      src={'https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80'}
                      fill={true}
                      placeholder="blur"
                      priority
                    />
                  </div>
                </div>
                <div className="flex justify-end flex-auto w-96 lg:w-auto lg:flex-none">

                  <div className="relative overflow-hidden aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  >
                    <Image
                      blurDataURL={await getBase64('https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80')}
                      src={'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80'}
                      fill={true}
                      placeholder="blur"
                      priority
                    />
                  </div>
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <div className="relative overflow-hidden aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  >
                    <Image
                      blurDataURL={await getBase64('https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80')}
                      src={'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80'}
                      fill={true}
                      placeholder="blur"
                      priority
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}