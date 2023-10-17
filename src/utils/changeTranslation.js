'use client'
import Image from 'next/image'
import { Menu } from '@headlessui/react'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import SwedishLogo from '@/images/logos/sv-flag.svg'
import EnglishLogo from '@/images/logos/en-flag.svg'
import { useRouter, usePathname, getPathname } from '@/navigation'
import {useParams} from 'next/navigation';
const language = [
  { name: 'Svenska', code: 'sv', flag: SwedishLogo },
  { name: 'English', code: 'en', flag: EnglishLogo },
]

const ChangeTranslation = ({ locale }) => {
  const router = useRouter()
  const path = usePathname()
  const params = useParams();

  // set the default language to lang
  const [selected, setSelected] = useState(
    locale === 'en' ? language[1] : language[0],
  )
  console.log(path, params)
  return (
    <Menu>
      <div className="w-56 text-left top-16">
        <Menu.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-md shadow cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
        <Menu.Items className="relative w-full mt-2 text-left bg-white rounded-md shadow-md cursor-default focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          {language.map((language, languageIdx) => (
            <Menu.Item
              key={languageIdx}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-3 pr-4 ${
                  active ? 'bg-primary text-white' : 'text-dark'
                }`
              }
            >
              {({ active }) => (
                <div
                  className="block cursor-pointer"
                  onClick={() => {
                    // router.replace({path}, { locale: language.code })
                    router.push({
                      pathname: path,
                      params
                    },{ locale: language.code });
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

export default ChangeTranslation
