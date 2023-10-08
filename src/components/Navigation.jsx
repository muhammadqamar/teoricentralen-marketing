import { Fragment, useEffect, useState, useRef } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { usePathname } from 'next/navigation'
import logoTeoricentralen from '@/images/logos/mark.svg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

const educations = [
  {
    name: 'Moped',
    description: 'Get a better understanding where your traffic is coming from',
    href: '/utbildningar/moped',
    icon: ChartPieIcon,
  },
  {
    name: 'Personbil',
    description: 'Speak directly to your customers with our engagement tool',
    href: '/utbildningar/personbil',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Motorcykel',
    description: 'Your customers’ data will be safe and secure',
    href: '/utbildningar/motorcykel',
    icon: FingerPrintIcon,
  },
  {
    name: 'Personbil med tungt släp',
    description: 'Your customers’ data will be safe and secure',
    href: '/utbildningar/personbil-med-tungt-slap',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Lastbil',
    description: 'Your customers’ data will be safe and secure',
    href: '/utbildningar/lastbil',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Buss',
    description: 'Your customers’ data will be safe and secure',
    href: '/utbildningar/buss',
    icon: SquaresPlusIcon,
  },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
  { name: 'View all products', href: '#', icon: RectangleGroupIcon },
]

function NavItem({ href, locale, open, children }) {
  let isActive = usePathname() === href

  return (
    <Link
      href={href}
      className={clsx(
        'relative block text-sm font-bold leading-6 transition hover:text-primary',
        isActive ? 'text-primary' : open ? 'text-dark' : 'text-white',
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  let [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          const attributeName = mutation.attributeName
          const newValue = mutation.target.getAttribute(attributeName)
          if (attributeName == 'aria-expanded') {
            setOpen(newValue === 'true')
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
                open ? 'text-dark' : 'text-white'
              }`}
            >
              Utbildningar
              <ChevronDownIcon
                className={`h-5 w-5 flex-none ${
                  open ? 'text-dark' : 'text-white'
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
                <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {educations.map((item) => (
                    <div
                      key={item.name}
                      className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>

                      <Link
                        href={item.href}
                        className="mt-6 block font-bold text-dark"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>

                      <p className="mt-1 font-semibold text-gray-600">
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
              </Popover.Panel>
            </Transition>
          </Popover>

          <NavItem href="/korkortsfragor" locale={locale} open={open}>
            Körkortsfrågor
          </NavItem>
          <NavItem href="/recensioner" locale={locale} open={open}>
            Recensioner
          </NavItem>
          <NavItem href="/trafikutbildare" locale={locale} open={open}>
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
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-dark hover:bg-gray-50">
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
                        {[...educations].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-bold leading-7 text-dark hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link
                  href="/korkortsfragor"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-dark hover:bg-gray-50"
                >
                  Körkortsfrågor
                </Link>
                <Link
                  href="/vagmarken"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-dark hover:bg-gray-50"
                >
                  Vägmärken
                </Link>
                <Link
                  href="/recensioner"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-dark hover:bg-gray-50"
                >
                  Recensioner
                </Link>
                <Link
                  href="/trafikutbildare"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-dark hover:bg-gray-50"
                >
                  För trafikutbildare
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-dark hover:bg-gray-50"
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
