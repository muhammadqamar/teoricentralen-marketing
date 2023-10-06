import Image from 'next/image'
import logoStenstans from '@/images/logos/stenstans.svg'
import logoKrekolas from '@/images/logos/krekolas.svg'

export function Partners({ lang }) {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center font-extrabold uppercase leading-6 text-dark">
          Betrodd av trafikutbildare i Sverige
        </h2>

        <div className="mx-auto mt-6 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={logoKrekolas}
            alt="Krekolas"
            width={158}
            height={48}
          />

          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={logoStenstans}
            alt="Stenstans"
            width={158}
            height={48}
          />

          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={logoKrekolas}
            alt="Krekolas"
            width={158}
            height={48}
          />

          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={logoStenstans}
            alt="Stenstans"
            width={158}
            height={48}
          />

          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={logoKrekolas}
            alt="Krekolas"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  )
}
