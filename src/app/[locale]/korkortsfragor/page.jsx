import Image from 'next/image'

import { Container } from '@/components/Container'
import portraitImage from '@/images/logo.png'

export const metadata = {
  title: 'Vägmärken',
  description: 'Framtidens trafikutbildning är här',
}

export default async function Page({ params }) {
  return (
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
            Framtidens trafikutbildning är här.
          </h1>
          <div className="mt-6 space-y-7 font-medium text-gray-600">
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