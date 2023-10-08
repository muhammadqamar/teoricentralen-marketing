'use client'

import Link from 'next-intl/link'
import logoTeoricentralen from '@/images/logos/mark.svg'
import ChangeTranslation from '@/utils/changeTranslation'
import Image from 'next/image'

const navigation = {
  educations: [
    { name: 'Alla utbildningar', href: '/utbildningar' },
    { name: 'Moped', href: '/utbildningar/moped' },
    { name: 'Personbil', href: '/utbildningar/personbil' },
    { name: 'Motorcykel', href: '/utbildningar/motorcykel' },
    {
      name: 'Personbil med tungt släp',
      href: '/utbildningar/personbil-med-tungt-slap',
    },
    { name: 'Lastbil', href: '/utbildningar/lastbil' },
    { name: 'Buss', href: '/utbildningar/buss' },
  ],
  company: [
    { name: 'Om oss', href: '/om-oss' },
    { name: 'Körkortsfrågor', href: '/korkortsfragor' },
    { name: 'Vägmärken', href: '/vagmarken' },
    { name: 'Faktabanken', href: '/faktabanken' },
    { name: 'Körkortsbloggen', href: '/korkortsbloggen' },
    // { name: 'Ordlista', href: '/ordlista' },
  ],
  support: [
    { name: 'Kontakta oss', href: '/kontakt' },
    { name: 'Frågor och svar', href: '/fragor-och-svar' },
    { name: 'Jobba med oss', href: '/jobba-med-oss' },
  ],
  legal: [
    { name: 'Användarvillkor', href: '/anvandarvillkor' },
    { name: 'Integritetspolicy', href: '/integritetspolicy' },
  ],
}

export function Footer({ locale }) {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <Image
              src={logoTeoricentralen}
              alt="Teoricentralen"
              className="h-8"
            />

            <p className="text-sm font-semibold leading-6 text-gray-600">
              Plattformen som hjälper trafikskolor att växa. Utvecklad i
              samarbeta med trafikskolor runt om i landet.
            </p>

            <ChangeTranslation locale={locale} />
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold leading-6 text-dark">
                  Utbildningar
                </h3>
                <ul role="list" className="mt-6 space-y-2">
                  {navigation.educations.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        locale={locale}
                        className="text-sm font-semibold leading-6 text-gray-600 hover:text-dark"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-bold leading-6 text-dark">
                  Teoricentralen
                </h3>
                <ul role="list" className="mt-6 space-y-2">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        locale={locale}
                        className="text-sm font-semibold leading-6 text-gray-600 hover:text-dark"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold leading-6 text-dark">
                  Kundservice
                </h3>
                <ul role="list" className="mt-6 space-y-2">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        locale={locale}
                        className="text-sm font-semibold leading-6 text-gray-600 hover:text-dark"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-bold leading-6 text-dark">
                  Juridik
                </h3>
                <ul role="list" className="mt-6 space-y-2">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        locale={locale}
                        className="text-sm font-semibold leading-6 text-gray-600 hover:text-dark"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            Copyright &copy; {new Date().getFullYear()} Teoricentralen Sverige
            AB. Alla rättigheter reserveras.
          </p>
        </div>
      </div>
    </footer>
  )
}
