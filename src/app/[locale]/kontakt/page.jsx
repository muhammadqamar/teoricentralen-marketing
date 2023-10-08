import { Container } from '@/components/Container'

export const metadata = {
  title: 'Kontakt',
  description: 'Framtidens trafikutbildning är här',
}

export default function Page() {
  return (
    <Container className="my-16">
      <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl">
        Kontakt
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
  )
}