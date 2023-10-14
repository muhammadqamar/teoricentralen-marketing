import { Fragment, useEffect, useState, useRef } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import amIcon from '@/images/icons/am.svg'
import bIcon from '@/images/icons/b.svg'
import aIcon from '@/images/icons/a.svg'
import beIcon from '@/images/icons/be.svg'
import cIcon from '@/images/icons/c.svg'
import dIcon from '@/images/icons/d.svg'
import logoTeoricentralen from '@/images/logos/mark.svg'
import clsx from 'clsx'
import Image from 'next/image'

import { createSharedPathnamesNavigation } from 'next-intl/navigation'

import { locales } from '@/navigation'
const { Link, usePathname } = createSharedPathnamesNavigation({ locales })

const educations = [
  {
    name: 'Moped',
    description: 'Behörighet AM',
    href: '/utbildningar/moped',
    icon: amIcon,
  },
  {
    name: 'Personbil',
    description: 'Behörighet B',
    href: '/utbildningar/personbil',
    icon: bIcon,
  },
  {
    name: 'Motorcykel',
    description: 'Behörighet A1, A2, A',
    href: '/utbildningar/motorcykel',
    icon: aIcon,
  },
  {
    name: 'Personbil med tungt släp',
    description: 'Behörighet BE',
    href: '/utbildningar/personbil-med-tungt-slap',
    icon: beIcon,
  },
  {
    name: 'Lastbil',
    description: 'Behörighet C1, C, CE samt C1E',
    href: '/utbildningar/lastbil',
    icon: cIcon,
  },
  {
    name: 'Buss',
    description: 'Behörighet D1, D, DE samt D1E',
    href: '/utbildningar/buss',
    icon: dIcon,
  },
]

const callsToAction = [
  { name: 'Alla utbildningar', href: '/utbildningar', icon: PlayCircleIcon },
  { name: 'Recensioner', href: '/recensioner', icon: PhoneIcon },
  {
    name: 'Frågor och svar',
    href: '/fragor-och-svar',
    icon: RectangleGroupIcon,
  },
]

function NavItem({ href, locale, desktopOpen, children }) {
  let isActive = usePathname() === href

  return (
    <Link
      href={href}
      className={clsx(
        'relative block text-sm font-bold leading-6 transition hover:text-primary',
        isActive ? 'text-primary' : desktopOpen ? 'text-dark' : 'text-white',
      )}
      locale={locale}
    >
      {children}
    </Link>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Navigation({ locale }) {
  const [desktopOpen, setDesktopOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          const attributeName = mutation.attributeName
          const newValue = mutation.target.getAttribute(attributeName)
          if (attributeName == 'aria-expanded') {
            setDesktopOpen(newValue === 'true')
          }
          // console.log(`Attribute "${attributeName}" changed to "${newValue}"`)
        }
      }
    })

    const observerConfig = { attributes: true }

    if (ref.current) {
      observer.observe(ref.current, observerConfig)
    }

    return () => {
      if (ref.current) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5" locale={locale}>
            <span className="sr-only">Teoricentralen</span>
            <Image
              src={logoTeoricentralen}
              alt="Teoricentralen"
              className="h-8 w-auto"
              unoptimized
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white ${
              mobileMenuOpen ? 'hidden' : ''
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <Popover.Button
              ref={ref}
              className={`flex items-center gap-x-1 text-sm font-bold leading-6 ${
                desktopOpen ? 'text-dark' : 'text-white'
              }`}
            >
              Utbildningar
              <ChevronDownIcon
                className={`h-5 w-5 flex-none ${
                  desktopOpen ? 'text-dark' : 'text-white'
                }`}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel
                // ref={setReferenceElement}
                className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5"
              >
                {({ close }) => (
                  <>
                    <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-4">
                      {educations.map((item) => (
                        <div
                          key={item.name}
                          className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-12 w-12 items-center justify-center">
                            <Image
                              src={item.icon}
                              alt={item.name}
                              className="h-8"
                              unoptimized
                            />
                          </div>

                          <Link
                            href={item.href}
                            className="mt-4 block font-bold text-dark"
                            locale={locale}
                            onClick={() => close()}
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>

                          <p className="font-semibold text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50">
                      <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                          {callsToAction.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-dark hover:bg-gray-100"
                              locale={locale}
                              onClick={() => close()}
                            >
                              <item.icon
                                className="h-5 w-5 flex-none text-gray-500"
                                aria-hidden="true"
                              />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </Popover.Panel>
            </Transition>
          </Popover>

          <NavItem
            href="/korkortsfragor"
            locale={locale}
            open={desktopOpen}
            onClick={() => close()}
          >
            Körkortsfrågor
          </NavItem>

          <NavItem
            href="/recensioner"
            locale={locale}
            open={desktopOpen}
            onClick={() => close()}
          >
            Recensioner
          </NavItem>

          <NavItem
            href="/trafikutbildare"
            locale={locale}
            open={desktopOpen}
            onClick={() => close()}
          >
            För trafikutbildare
          </NavItem>
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" locale={locale}>
              <span className="sr-only">Teoricentralen</span>
              <Image
                src={logoTeoricentralen}
                alt="Teoricentralen"
                className="h-8 w-auto"
                unoptimized
              />
            </Link>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ desktopOpen }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-dark hover:bg-gray-50">
                        Alla utbildningar
                        <ChevronDownIcon
                          className={classNames(
                            desktopOpen ? 'rotate-180' : '',
                            'h-5 w-5 flex-none',
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>

                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...educations].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-bold leading-7 text-dark hover:bg-gray-50"
                          >
                            <Link
                              key={item.name}
                              href={item.href}
                              locale={locale}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link
                  href="/korkortsfragor"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-dark hover:bg-gray-50"
                  locale={locale}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Körkortsfrågor
                </Link>
                <Link
                  href="/vagmarken"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-dark hover:bg-gray-50"
                  locale={locale}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Vägmärken
                </Link>
                <Link
                  href="/recensioner"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-dark hover:bg-gray-50"
                  locale={locale}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Recensioner
                </Link>
                <Link
                  href="/trafikutbildare"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-dark hover:bg-gray-50"
                  locale={locale}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  För trafikutbildare
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-dark hover:bg-gray-50"
                  locale={locale}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Boka demo
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
