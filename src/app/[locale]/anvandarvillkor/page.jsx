import { Container } from '@/components/Container'
import { PageHero } from '@/components/Hero/PageHero'

const title = 'Användarvillkor'
const description = 'Användarvillkor'
const image = '/og-image.png'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: image }],
  },
}

export default async function Page({ params: { locale } }) {
  return (
    <>
      <PageHero title={title} description={description} image={image} />
      <Container className="my-16">
        <h1 className="text-4xl font-bold tracking-tight text-dark sm:text-5xl">
          Användarvillkor
        </h1>
        <div className="mt-6 space-y-7 text-base text-zinc-600">
          <p>
            Din verksamhet, dina villkor. Vi hjälper dig att ta din trafikskola
            till nästa nivå. Se till att du har de verktyg som krävs för att
            erbjuda dina elever kvalité och samtidigt öka din lönsamhet.
          </p>
          <p>
            Smidig inskrivning av elever. Låt dina kunder själv skriva in sig på
            din trafikskola med hjälp av enkel BankID identifiering.
          </p>
        </div>
      </Container>
    </>
  )
}
