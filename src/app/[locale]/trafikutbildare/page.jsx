import { StarIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'
import { PageHero } from '@/components/Hero/PageHero'
import { Faq } from '@/components/Faq'
import FeatureSection from '@/components/FeatureSection'
import backgroundImage from '@/images/backgrounds/trafikutbildare.jpg'
import getBase64 from '@/utils/getLocalBase64'
import { translationHook } from '@/utils/translationHook'
import Image from 'next/image'

import denny from '@/images/testimonials/denny.jpg'
import christian from '@/images/testimonials/christian.jpg'
import anders from '@/images/testimonials/anders.png'
import hevy from '@/images/testimonials/hevy.png'
import johan from '@/images/testimonials/johan.png'
import maria from '@/images/testimonials/maria.png'

export async function generateMetadata({ params: { locale } }) {
  const title = await translationHook(locale, 'förTrafikutbildare', 'seoTitle')
  const description = await translationHook(
    locale,
    'förTrafikutbildare',
    'seoDescription',
  )
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
        title={await translationHook(locale, 'förTrafikutbildare', 'seoTitle')}
        description={await translationHook(
          locale,
          'förTrafikutbildare',
          'seoDescription',
        )}
        backgroundImage={backgroundImage}
      />

      <Container className="bg-slate-100 py-8">
        <FeatureSection
          title={'Vi stöttar din verksamhet'}
          text={
            '"Vi utvecklar ditt nya affärssystem för att möta dina framtida utmaningar. Hos oss bedriver du din verksamhet på dina villkor."'
          }
          images={[
            'https://uploads-ssl.webflow.com/63eaaf48b5d45c04b3775fc9/640a4874cdb3d1770f94a5fe_enkel%20view-transcode.mp4',
          ]}
          isVideo
        >
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
          title={'Boknings\xADsystem'}
          text={
            'Aldrig har du kunnat arbeta så effektivt som nu. Vi har tagit fram ett bokningssystem efter trafikskolebranschens önskemål. Och det kommer inte sluta utvecklas där. Har du feedback så lyssnar vi.  '
          }
          images={[
            'https://uploads-ssl.webflow.com/63eaaf48b5d45c04b3775fc9/640da84b299a53198ed2d73f_New%20Recording%20Mar%2012%202023%201102%20AM-transcode.mp4',
          ]}
          isVideo
          isFlipped
        >
          <div className="mt-4">
            <CheckMarkText text="Boka in en elev med ett knapptryck." />
            <CheckMarkText text="Sista minuten bokningar tillgängliga för dina elever." />
            <CheckMarkText text="Optimera din tid och fokusera på servicen för eleven." />
          </div>
        </FeatureSection>

        <div className="flex flex-col lg:flex-row">
          <FeatureSection
            title={'Teori\xADutbildning'}
            text={
              'Vi vågar säga att vår utbildning är Sverige bästa. Framtagen av meriterade trafiklärare och granskad av trafikskolor runt om i Sverige. Utöver det så har vi  kontinuerliga dialoger med Trafikverket för att förbättra materialet.'
            }
            images={[
              'https://uploads-ssl.webflow.com/63eaaf48b5d45c04b3775fc9/640da8a94b3f34a7ff227072_utbmat%20square-transcode.mp4',
            ]}
            isVideo
            isVertical
          />

          <FeatureSection
            title={'Varumärkes\xADanpassning'}
            text={
              'Det stämmer! Vi tar detta till nästa nivå och vill att du som trafikskola ska kunna bygga upp ditt varumärke för morgondagens körkortstagare. Hänvisa dina elever till din egen hemsida.'
            }
            images={[
              'https://uploads-ssl.webflow.com/63eaaf48b5d45c04b3775fc9/640db156e1340e8ad98f5bf7_varumarke%20square-transcode.mp4',
            ]}
            isVideo
            isVertical
          />
        </div>

        <FeatureSection
          title={'Rapporter'}
          text={
            'Aldrig har det varit så enkelt att hämta hem relevanta rapporter baserat på ditt urval. Få fram SIE filen automatiskt utan någon manuell hantering.'
          }
          images={[
            'https://uploads-ssl.webflow.com/63eaaf48b5d45c04b3775fc9/63f6609043611333dcd7a73e_Antal%20elever.svg',
            'https://uploads-ssl.webflow.com/63eaaf48b5d45c04b3775fc9/63f66090f5152226ab897ad9_belaggning%201.svg',
          ]}
        >
          <div className="mt-4">
            <CheckMarkText
              text={'Skicka rapporter direkt till din bokföringsprogam.'}
            />
            <CheckMarkText text={'Slipp manuell kassa avstämning.'} />
            <CheckMarkText text={'Följ din verksamhet i realtid.'} />
          </div>
        </FeatureSection>

        {/* <FeatureSection
          title={"Vad säger våra användare?"}
          text={""}
          images={[]}>
          <div className='overflow-x-auto flex flex-row gap-8 py-4'>
            <TestimonialCard
              name={"Maria Selling"}
              text={"\"Att kunna sälja teorimaterial direkt till kund är en självklarhet för oss och det kan vi fortsätta göra med Teoricentralen.\""}
              company={"Stenstans Trafikskola"}
              image={maria} />

            <TestimonialCard
              name={"Anders Persson"}
              text={"\"Det finns inget annat alternativ som uppfyller våra krav samt att priset är konkurrenskraftigt!\""}
              company={"Ottossons Trafikskola"}
              image={anders}
            />
            <TestimonialCard
              name={"Christian Kaumi"}
              text={"\"Framtiden ser väldigt ljus ut. Ett otroligt bra gäng som utvecklar och gör det efter våra önskemål.\""}
              company={"CK Trafikskola"}
              image={christian}
            />
            <TestimonialCard
              name={"Hevy Kamal"}
              text={"\"Våra elever älskar vårt nya utbildningsmaterial. Super nöjd med supporten från Teoricentralen\""}
              company={"Hevs Trafikskola"}
              image={hevy}
            />
            <TestimonialCard
              name={"Johan Krekola"}
              text={"\"Teoricentralen delar vår ambition att ligga i framkant och vi vill vara med på tåget och utveckla oss för framtiden.\""}
              company={"Krekolas Trafikskola"}
              image={johan}
            />
          </div>
        </FeatureSection> */}

        <div className="my-16">
          <Faq />
        </div>

        {/* <div className='grid bg-black lg:p-8 p-4 rounded-[2rem] lg:grid-cols-2 gap-16'>
          <div>
            <h2 className='text-4xl lg:text-5xl font-extrabold text-white'>Sätt gång idag.</h2>
            <form className='p-1 rounded-lg bg-neutral-800 flex mt-8' >
              <input placeholder='Intresseanmälan' type="email" name="" id="" className='w-full bg-transparent border-transparent active:border-transparent' />
              <input type='submit' className='py-2 px-2 bg-lime-400 rounded-lg' value={"Vi är redo"}></input>
            </form>
          </div>
          <div className='bg-neutral-800 p-8 rounded-[2rem]'>
            <p className='text-neutral-400'>"Vi utvecklar framtidens affärssystem med Sveriges bästa utbildningsmaterial. För dig som vill ta din verksamhet till nästa nivå"</p>
            <figcaption className="mt-6 flex gap-x-4 leading-6 text-white">
              <Image
                width={64}
                height={64}
                src={denny}
                alt="Denny Soulaka"
                className="h-12 w-12 flex-none rounded-full"
              />
              <div>
                <p className="text-gray-300">Denny Soulaka</p>
                <p className="font-semibold">Teoricentralen Sverige AB </p>
              </div>
            </figcaption>
          </div>
        </div> */}

        {/* placeholder content */}
        {/* <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8"> */}

        {/* <h2 className="text-3xl font-extrabold tracking-tight text-dark">
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
        </div> */}

        {/* </div> */}
        {/* <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="flex-auto w-0 lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <div className="aspect-[7/5] overflow-hidden w-[37rem] relative max-w-none rounded-2xl bg-gray-50 object-cover"
                >
                  <Image
                    blurDataURL={await getBase64(
                      'https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80',
                    )}
                    src={
                      'https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80'
                    }
                    fill={true}
                    placeholder="blur"
                    priority
                  />
                </div>
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <div className="relative aspect-[4/3] w-[24rem] max-w-none flex-none overflow-hidden rounded-2xl bg-gray-50 object-cover">
                    <Image
                      blurDataURL={await getBase64(
                        'https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80',
                      )}
                      src={
                        'https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80'
                      }
                      fill={true}
                      placeholder="blur"
                      priority
                    />
                  </div>
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <div className="relative aspect-[7/5] w-[37rem] max-w-none flex-none overflow-hidden rounded-2xl bg-gray-50 object-cover">
                    <Image
                      blurDataURL={await getBase64(
                        'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80',
                      )}
                      src={
                        'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80'
                      }
                      fill={true}
                      placeholder="blur"
                      priority
                    />
                  </div>
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <div className="relative aspect-[4/3] w-[24rem] max-w-none overflow-hidden rounded-2xl bg-gray-50 object-cover">
                    <Image
                      blurDataURL={await getBase64(
                        'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80',
                      )}
                      src={
                        'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80'
                      }
                      fill={true}
                      placeholder="blur"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Container>
    </>
  )
}

export function CheckMarkText({ text }) {
  return (
    <div className="items-left flex shrink-0 flex-row pt-4">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-6 w-6"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <p className="pl-2">{text}</p>
    </div>
  )
}

export function TestimonialCard({ name, text, company, image, stars = true }) {
  return (
    <section className="s max-w-[12rem] shrink-0 rounded-xl bg-slate-200 bg-white p-4 lg:max-w-[24rem] lg:p-8">
      <figure className="mx-auto max-w-2xl">
        {stars ? (
          <div>
            <p className="sr-only">5 out of 5 stars</p>
            <div className="flex gap-x-1 text-yellow-600">
              <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
              <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
              <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
              <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
              <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
            </div>
          </div>
        ) : null}
        <blockquote className="mt-4 text-2xl text-lg tracking-tight text-gray-900">
          <p>{text}</p>
        </blockquote>
        <figcaption className="mt-4 flex items-center gap-x-6">
          <Image
            width={0}
            height={0}
            className="h-12 w-12 rounded-full bg-gray-50 object-cover"
            src={image}
            alt={name}
          />
          <div className="text-sm leading-6">
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="mt-0.5 font-semibold text-gray-600">{company}</div>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}
