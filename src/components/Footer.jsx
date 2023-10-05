'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
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
  company: [
    { name: 'Om oss', href: '/om-oss' },
    { name: 'Jobba med oss', href: '/jobba-med-oss' },
  ],
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

export function Footer() {
  const [selected, setSelected] = useState()
  const path = usePathname()
  useEffect(() => {
    setSelected(path.includes('/en') ? language[1] : language[0])
  }, [path])

  return (
    <footer className="mt-32 flex-none bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
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
              <div className="top-16 w-56 text-left">
                <Menu.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <div className="flex items-center gap-2">
                    <Image
                      src={selected?.flag}
                      alt="Teoricentralen"
                      className="h-5 w-5"
                      unoptimized
                    />
                    <span className="block truncate">{selected?.name}</span>
                  </div>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Menu.Button>
                <Menu.Items className="relative mt-[10px] w-full cursor-default rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  {language.map((language, languageIdx) => (
                    <Menu.Item
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-4 ${
                          active
                            ? 'bg-amber-100 text-amber-900'
                            : 'text-gray-900'
                        }`
                      }
                    >
                      {({ active }) => (
                        <Link
                          className="block cursor-pointer"
                          href={
                            language.name === 'sv'
                              ? path === '/en'
                                ? path.replace('/en', '/')
                                : path.replace('/en', '')
                              : path.includes('/en')
                              ? path
                              : '/en' + path
                          }
                        >
                          <div className="flex items-center gap-2">
                            <Image
                              src={language.flag}
                              alt="Teoricentralen"
                              className="h-5 w-5"
                              unoptimized
                            />
                            <span
                              className={`block truncate ${
                                active ? 'font-medium' : 'font-normal'
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
            {/* {selected &&
              <div className="w-56 text-left top-16">
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      <div className="flex items-center gap-2">
                        <Image
                          src={selected.flag}
                          alt="Teoricentralen"
                          className="w-5 h-5"
                          unoptimized
                        />
                        <span className="block truncate">{selected.name}</span>
                      </div>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <ChevronDownIcon
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {language.map((language, languageIdx) => (
                          <Listbox.Option
                            key={languageIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-3 pr-4 ${active
                                ? 'bg-amber-100 text-amber-900'
                                : 'text-gray-900'
                              }`
                            }

                          >
                            {({ selected }) => (

                                <Link href={language.name === 'sv' ? path==="/en" ?  path.replace('/en', '/') : path.replace('/en', '') : path.includes('/en') ? path : '/en' + path} >

                                  <div className="flex items-center gap-2">
                                    <Image
                                      src={language.flag}
                                      alt="Teoricentralen"
                                      className="w-5 h-5"
                                      unoptimized
                                    />
                                    <span
                                      className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                        }`}
                                    >
                                      {language.name}
                                    </span>
                                  </div>
                                </Link>


                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>} */}
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
