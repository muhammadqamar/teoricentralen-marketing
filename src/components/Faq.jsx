'use client'

import { Disclosure } from '@headlessui/react'
import { motion } from 'framer-motion'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Hur fungerar en migrering?",
    answer:
      `Vi hjälper dig att exportera ut den data du behöver från ditt existerande affärssystem och migrerar in det till ditt nya affärssystem. Smidigt och kostnadsfritt!`,
  },
  {
    question: "Kan eleven boka in en körlektion själv?",
    answer:
      `Eleverna kan logga in på plattformen (Teoricentralen.se) och se tillgängliga lektionstider, samt boka lektioner enligt deras schema. Detta underlättar din planering och eliminerar dubbelbokningar. Självklart bestämmer du om eleven får eller inte får boka körlektioner på egen hand.

      Elevbokningen är enkel att använda och tillgänglig dygnet runt, vilket gör det möjligt för eleverna att boka sina körlektioner när det passar dem bäst. Detta ger en smidigare och mer flexibel process för bokning av körlektioner.`,
  },
  {
    question: "Vad menas med varumärksanpassning?",
    answer:
      `Vi ger dig friheten och möjligheten att äga din elev hela vägen även inuti utbildningsmaterialet. Vi erbjuder alla våra nya partner en gratis domän. (Gäller de 100 första trafikskolor).

      Se exempel - elev.ottossons.nu`,
  },
  {
    question: "Schemaläggning & bokning?",
    answer:
      `Vår schemaläggningsfunktion för trafikskolor gör det enkelt att hantera bokningar och bokade körlektioner. Trafikskolor kan logga in via dator eller mobilen och få en översikt över schemat, samt se vilka körlektioner som är bokade och när de ska äga rum. Detta sparar tid och minskar risken för dubbelbokningar.`,
  },
  {
    question: "Hur hanterar jag min e-handel?",
    answer:
      `Aldrig har det varit så enkelt att publicera produkter på din egen e-handel. Du administrerar din e-handel direkt i systemet enkelt och utan någon tidigare erfarenhet av teknik. Vi stödjer även de populäraste betalmetoderna för att dina kunder ska konvertera.

      Självklart hjälper vi till att sätta upp din e-handel helt kostnadsfritt.`,
  },
  {
    question: "Får man sälja teorimaterial?",
    answer:
      `Ja! Hos oss på Teoricentralen säljer du teorimaterial direkt till eleven. Eleven kan bara köpa vårt utbildningsmaterial hos våra anslutna partner. Riktpris för vår utbildning ligger på 1995 kr.`,
  },
]

export function Faq() {
  return (
    <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
        Vanliga frågor och svar
      </h2>
      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <MinusSmallIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <motion.div
                  initial={open ? 'open' : 'closed'}
                  animate={open ? 'open' : 'closed'}
                  variants={{
                    open: {
                      height: 'auto',
                      overflow: 'visible',
                    },
                    closed: {
                      height: '0',
                      overflow: 'hidden',
                    },
                  }}
                >
                  <Disclosure.Panel
                    static
                    className="mt-2 overflow-hidden pr-12"
                  >
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </motion.div>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  )
}
