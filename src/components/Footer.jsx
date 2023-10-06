'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { Menu } from '@headlessui/react'
import logoTeoricentralen from '@/images/logos/mark.svg'
import SwedishLogo from '@/images/logos/sv-flag.svg'
import EnglishLogo from '@/images/logos/en-flag.svg'

import { ChevronDownIcon } from '@heroicons/react/20/solid'
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

const language = [
  { name: 'sv', code: 'sv', flag: SwedishLogo },
  { name: 'en', code: 'en', flag: EnglishLogo },
]

export function Footer({ lang }) {
  const [selected, setSelected] = useState()
  const path = usePathname()
  console.log(path)
  useEffect(() => {
    setSelected(path.includes('/en') ? language[1] : language[0])
  }, [path])

  return (
    <footer className="flex-none mt-32 bg-gray-100">
      <div className="px-6 pt-16 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <Image
              src={logoTeoricentralen}
              alt="Teoricentralen"
              className="h-7"
              unoptimized
            />
            <p className="text-sm leading-6 text-gray-600">
              Plattformen som hjälper trafikskolor att växa. Utvecklat
              tillsammans med Trafikskolor i Sverige.
            </p>
            <Menu>
              <div className="w-56 text-left top-16">
                <Menu.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <div className="flex items-center gap-2">
                    <Image
                      src={selected?.flag}
                      alt="Teoricentralen"
                      className="w-5 h-5"
                      unoptimized
                    />
                    <span className="block truncate">{selected?.name}</span>
                  </div>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDownIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Menu.Button>
                <Menu.Items className="relative mt-[10px] w-full cursor-default rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  {language.map((language, languageIdx) => (
                    <Menu.Item
                      key={languageIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-4 ${active
                          ? 'bg-amber-100 text-amber-900'
                          : 'text-gray-900'
                        }`
                      }

                    >
                      {({ active }) => (
                        <Link
                          className="block cursor-pointer"
                          href={
                            language.name == 'sv'
                              ? path.replace('/en', '/sv') : path.replace('/sv', '/en')
                          }
                        >
                          <div className="flex items-center gap-2">
                            <Image
                              src={language.flag}
                              alt="Teoricentralen"
                              className="w-5 h-5"
                              unoptimized
                            />
                            <span
                              className={`block truncate ${active ? 'font-medium' : 'font-normal'
                                }`}
                            >
                              {language.name}
                            </span>
                          </div>
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </div>
            </Menu>

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
