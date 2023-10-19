import { Container } from '@/components/Container'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/barn.jpg'
import { translationHook } from '@/utils/translationHook'

export async function generateMetadata({ params: { locale } }) {
  const title = await translationHook(locale, 'integritetspolicy', 'seoTitle')
  const description = await translationHook(
    locale,
    'integritetspolicy',
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
export default async function PrivacyPolicy({ params: { locale } }) {
  return (
    <>
      <PageHero
        title={await translationHook(locale, 'integritetspolicy', 'seoTitle')}
        description={await translationHook(
          locale,
          'integritetspolicy',
          'seoDescription',
        )}
        backgroundImage={backgroundImage}
      />

      <Container className="my-16">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {await translationHook(locale, 'integritetspolicy', 'seoTitle')}
        </h1>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
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
