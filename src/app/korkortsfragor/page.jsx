import Image from 'next/image'

import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'

export const metadata = {
  title: 'Körkortsfrågor',
  description: 'Framtidens trafikutbildning är här',
}

export default function Page() {
  return (
    <Container className="mt-16">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Körkortsfrågor 2023
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Din verksamhet, dina villkor. Vi hjälper dig att ta din
              trafikskola till nästa nivå. Se till att du har de verktyg som
              krävs för att erbjuda dina elever kvalité och samtidigt öka din
              lönsamhet.
            </p>
            <p>
              Smidig inskrivning av elever. Låt dina kunder själv skriva in sig
              på din trafikskola med hjälp av enkel BankID identifiering.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
