import { Container } from '@/components/Container'
import { PageHero } from '@/components/Hero/PageHero'
import { ReadMore } from '@/utils/readMore'
import backgroundImage from '@/images/backgrounds/barn.jpg'
const title = 'Användarvillkor'
const description = 'Användarvillkor'
const image = '/og-image.png'

import { getPathname } from '@/navigation'

export async function generateMetadata({ params: { locale } }) {
  return {
    title,
    description,
    alternates: {
      canonical: getPathname({
        locale: locale,
        href: {
          pathname: '/anvandarvillkor',
        },
      }),
      languages: {
        sv: getPathname({
          locale: 'sv',
          href: {
            pathname: '/anvandarvillkor',
          },
        }),
        en: getPathname({
          locale: 'en',
          href: {
            pathname: '/en/anvandarvillkor',
          },
        }),
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
  }
}

export default async function Page({ params: { locale } }) {
  return (
    <>
      <PageHero
        title={title}
        description={description}
        backgroundImage={backgroundImage}
      />

      <Container className="my-16">
        <h2 className="text-2xl font-extrabold tracking-tight text-dark">
          Våra användarvillkor
        </h2>
        <ReadMore
          content=" Din verksamhet, dina villkor. Vi hjälper dig att ta din trafikskola
            till nästa nivå. Se till att du har de verktyg som krävs för att
            erbjuda dina elever kvalité och samtidigt öka din lönsamhet."
          moreContent="     Smidig inskrivning av elever. Låt dina kunder själv skriva in sig på
          din trafikskola med hjälp av enkel BankID identifiering.
          Din verksamhet, dina villkor. Vi hjälper dig att ta din trafikskola
            till nästa nivå. Se till att du har de verktyg som krävs för att
            erbjuda dina elever kvalité och samtidigt öka din lönsamhetDin verksamhet, dina villkor. Vi hjälper dig att ta din trafikskola
            till nästa nivå. Se till att du har de verktyg som krävs för att
            erbjuda dina elever kvalité och samtidigt öka din lönsamhetDin verksamhet, dina villkor. Vi hjälper dig att ta din trafikskola
            till nästa nivå. Se till att du har de verktyg som krävs för att
            erbjuda dina elever kvalité och samtidigt öka din lönsamhetDin verksamhet, dina villkor. Vi hjälper dig att ta din trafikskola
            till nästa nivå. Se till att du har de verktyg som krävs för att
            erbjuda dina elever kvalité och samtidigt öka din lönsamhetDin verksamhet, dina villkor. Vi hjälper dig att ta din trafikskola
            till nästa nivå. Se till att du har de verktyg som krävs för att
            erbjuda dina elever kvalité och samtidigt öka din lönsamhetDin verksamhet, dina villkor. Vi hjälper dig att ta din trafikskola
            till nästa nivå. Se till att du har de verktyg som krävs för att
            erbjuda dina elever kvalité och samtidigt öka din lönsamhetDin verksamhet, dina villkor. Vi hjälper dig att ta din trafikskola
            till nästa nivå. Se till att du har de verktyg som krävs för att
            erbjuda dina elever kvalité och samtidigt öka din lönsamhetDin verksamhet, dina villkor. Vi hjälper dig att ta din trafikskola
            till nästa nivå. Se till att du har de verktyg som krävs för att
            erbjuda dina elever kvalité och samtidigt öka din lönsamhet


          "
        />
      </Container>
    </>
  )
}
