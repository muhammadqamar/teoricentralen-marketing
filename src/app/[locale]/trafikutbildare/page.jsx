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

      <Container className="bg-slate-100 py-8">
        <FeatureSection
          title="Vi stöttar din verksamhet"
          text="“Vi utvecklar ditt nya affärssystem för att möta dina framtida utmaningar. Hos oss bedriver du din verksamhet på dina villkor.”"
          image={"https://uploads-ssl.webflow.com/63eaaf48b5d45c04b3775fc9/640a4874cdb3d1770f94a5fe_enkel%20view-transcode.mp4"}
          isVideo>

          {/* TODO: Move testimonial component to own file */}
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

        <FeatureSection
          title={"Boknings\xADsystem"}
          text={"Aldrig har du kunnat arbeta så effektivt som nu. Vi har tagit fram ett bokningssystem efter trafikskolebranschens önskemål. Och det kommer inte sluta utvecklas där. Har du feedback så lyssnar vi.  "}
          image={"https://uploads-ssl.webflow.com/63eaaf48b5d45c04b3775fc9/640da84b299a53198ed2d73f_New%20Recording%20Mar%2012%202023%201102%20AM-transcode.mp4"}
          isVideo
          isFlipped>
          <div className='mt-4'>
            <CheckMarkText text="Boka in en elev med ett knapptryck." />
            <CheckMarkText text="Sista minuten bokningar tillgängliga för dina elever." />
            <CheckMarkText text="Optimera din tid och fokusera på servicen för eleven." />
          </div>
        </FeatureSection>

        <div className='flex md:flex-row '>
          <FeatureSection
            title={"Teori\xADutbildning"}
            text={"Vi vågar säga att vår utbildning är Sverige bästa. Framtagen av meriterade trafiklärare och granskad av trafikskolor runt om i Sverige. Utöver det så har vi  kontinuerliga dialoger med Trafikverket för att förbättra materialet."}
            image={"https://uploads-ssl.webflow.com/63eaaf48b5d45c04b3775fc9/640da8a94b3f34a7ff227072_utbmat%20square-transcode.mp4"}
            isVideo
            isVertical />

          <FeatureSection
            title={"Varumärkes\xADanpassning"}
            text={"Det stämmer! Vi tar detta till nästa nivå och vill att du som trafikskola ska kunna bygga upp ditt varumärke för morgondagens körkortstagare. Hänvisa dina elever till din egen hemsida."}
            image={"https://uploads-ssl.webflow.com/63eaaf48b5d45c04b3775fc9/640db156e1340e8ad98f5bf7_varumarke%20square-transcode.mp4"}
            isVideo
            isVertical />
        </div>

        <FeatureSection
          title={"Rapporter"}
          text={"Aldrig har det varit så enkelt att hämta hem relevanta rapporter baserat på ditt urval. Få fram SIE filen automatiskt utan någon manuell hantering."}
          image="https://uploads-ssl.webflow.com/63eaaf48b5d45c04b3775fc9/63f6609043611333dcd7a73e_Antal%20elever.svg">
          <div className='mt-4'>
            <CheckMarkText text={"Skicka rapporter direkt till din bokföringsprogam."} />
            <CheckMarkText text={"Slipp manuell kassa avstämning."} />
            <CheckMarkText text={"Följ din verksamhet i realtid."} />
          </div>
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

export function CheckMarkText({ text }) {
  return (
    <div className='flex flex-row pt-4'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

      <p className='pl-2'>{text}</p>
    </div>
  )
}