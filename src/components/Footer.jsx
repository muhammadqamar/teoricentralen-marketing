'use client'

import { usePathname } from 'next-intl/client';
import Link from 'next/link';
import logoTeoricentralen from '@/images/logos/mark.svg'
import  ChangeTranslation  from '@/utils/changeTranslation'
import Image from 'next/image'

const navigation = {
  educations: [
    { name: 'Alla utbildningar', href: '/utbildningar' },
    { name: 'Faktabanken', href: '/faktabanken' },
    { name: 'Körkortsbloggen', href: '/korkortsbloggen' },
    // { name: 'Ordlista', href: '/ordlista' },
  ],
  company: [{ name: 'Om oss', href: '/om-oss' }],
  support: [{ name: 'Kontakta oss', href: '/kontakt' }],
  legal: [
    { name: 'Användarvillkor', href: '/anvandarvillkor' },
    { name: 'Integritetspolicy', href: '/integritetspolicy' },
  ],
}



export function Footer(props) {
  const path = usePathname()
  return (
    <footer className="flex-none mt-32 bg-gray-100">
      <div className="px-6 pt-16 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <Image
              src={logoTeoricentralen}
              alt="Teoricentralen"
              className="h-7"
              width={20}
              height={20}
              unoptimized
            />
            <p className="text-sm leading-6 text-gray-600">
              Plattformen som hjälper trafikskolor att växa. Utvecklat
              tillsammans med Trafikskolor i Sverige.
            </p>
            <ChangeTranslation  {...props} />
          </div>
          <div className="grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold leading-6 text-dark">
                  Utbildningar
                </h3>
                <ul role="list" className="mt-6 space-y-2">
                  {navigation.educations.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={
                          path.includes('/en') ? '/en' + item.href : item.href
                        }
                        className="text-sm leading-6 text-gray-600 hover:text-dark"
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
                        href={
                          path.includes('/en') ? '/en' + item.href : item.href
                        }
                        className="text-sm leading-6 text-gray-600 hover:text-dark"
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
                        href={
                          path.includes('/en') ? '/en' + item.href : item.href
                        }
                        className="text-sm leading-6 text-gray-600 hover:text-dark"
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
                        href={
                          path.includes('/en') ? '/en' + item.href : item.href
                        }
                        className="text-sm leading-6 text-gray-600 hover:text-dark"
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
        <div className="pt-8 mt-16 border-t border-gray-900/10 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            Copyright &copy; {new Date().getFullYear()} Teoricentralen Sverige
            AB. Alla rättigheter reserveras.
          </p>
        </div>
      </div>
    </footer>
  )
}
