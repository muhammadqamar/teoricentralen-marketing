import { Menu } from '@headlessui/react'
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next-intl/client'
import Image from 'next/image'

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import SwedishLogo from '@/images/logos/sv-flag.svg'
import EnglishLogo from '@/images/logos/en-flag.svg'

const language = [
  { name: 'sv', code: 'sv', flag: SwedishLogo },
  { name: 'en', code: 'en', flag: EnglishLogo },
]

 const ChangeTranslation = ({lang}) => {
  const router = useRouter()
  const [selected, setSelected] = useState()
  const path = usePathname()

  useEffect(() => {
    setSelected(lang === 'en' ? language[1] : language[0])
  }, [path])

  return (
    selected && <Menu>
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
                `relative cursor-default select-none py-2 pl-3 pr-4 ${
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                }`
              }
            >
              {({ active }) => (
                <div
                  className="block cursor-pointer"
                  // href={
                  //   language.name == 'sv' ?path : "/en"
                  //     ? path.replace('/en', '/sv')
                  //     : path.replace('/sv', '/en')
                  // }
                  onClick={() => {
                    router.push(path, { locale: language.code })
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={language.flag}
                      alt="Teoricentralen"
                      className="h-5"
                      width={20}
                      height={20}
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
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </div>
    </Menu>
  )
}

export default  ChangeTranslation