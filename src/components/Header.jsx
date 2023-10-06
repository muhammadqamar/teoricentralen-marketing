'use client'

import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { Button } from '@/components/Button'
import logoTeoricentralen from '@/images/logos/mark.svg'
import Link from 'next-intl/link';
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import {
  Bars3Icon,
  // ChartPieIcon,
  // CursorArrowRaysIcon,
  // FingerPrintIcon,
  // SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
// import {

//   PlayCircleIcon,
//   RectangleGroupIcon,
//   CalendarDaysIcon,
// } from '@heroicons/react/20/solid'
import Image from 'next/image'

// const educations = [
//   {
//     name: 'Moped',
//     description: 'Get a better understanding where your traffic is coming from',
//     href: '/utbildningar/moped',
//     icon: ChartPieIcon,
//   },
//   {
//     name: 'Personbil',
//     description: 'Speak directly to your customers with our engagement tool',
//     href: '/utbildningar/personbil',
//     icon: CursorArrowRaysIcon,
//   },
//   {
//     name: 'Motorcykel',
//     description: 'Your customers’ data will be safe and secure',
//     href: '/utbildningar/motorcykel',
//     icon: FingerPrintIcon,
//   },
//   {
//     name: 'Tungt släp',
//     description: 'Your customers’ data will be safe and secure',
//     href: '/utbildningar/personbil-med-tungt-slap',
//     icon: SquaresPlusIcon,
//   },
// ]
// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Boka demo', href: '/demo', icon: CalendarDaysIcon },
//   { name: 'View all products', href: '#', icon: RectangleGroupIcon },
// ]

function NavItem({ href, children }) {
  let isActive = usePathname() === href
  const path = usePathname()

  return (
    <Link
      href={path.includes('/en') ? '/en' + href : href}
      className={clsx(
        'relative block text-sm font-bold leading-6 transition hover:text-primary',
        isActive ? 'text-primary' : 'text-dark',
      )}
    >
      {children}
    </Link>
  )
}

export function Header({ lang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const path = usePathname()
  return (
    <header className="relative z-10 isolate">
      <nav
        className="flex items-center justify-between py-5 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href={'/'}
            className="-m-1.5 p-1.5"
            locale={lang}
          >
            <span className="sr-only">Teoricentralen</span>
            <Image
              src={logoTeoricentralen}
              alt="Teoricentralen"
              className="w-auto h-8"
              unoptimized
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-6">


          {/* <NavItem href="/om-oss">Om oss</NavItem> */}
          <Link href="/utbildningar" locale={lang}>Utbildningar</Link>
          <Link href="/korkortsfragor" locale={lang}>Körkortsfrågor</Link>
          <Link href="/recensioner" locale={lang}>Recensioner</Link>
          {/* <NavItem href="/fragor-och-svar">Frågor och svar</NavItem> */}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button href="/demo" variant="success">
            Boka demo
          </Button>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href={'/'}
              locale={lang}
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">Teoricentralen</span>
              <img
                className="w-auto h-8"
                src="https://cdn.teoricentralen.se/teoricentralen/mark.svg"
                alt="Teoricentralen"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Alla utbildningar
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none',
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...educations, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={path.includes('/en') ? '/en/om-oss' : '/om-oss'}
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Om oss
                </Link>
              </div>
              <div className="py-6">
                <Button
                  onClick={() => setMobileMenuOpen(false)}
                  href="/demo"
                  variant="success"
                >
                  Boka demo
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
