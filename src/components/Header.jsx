'use client'

import { usePathname } from 'next-intl/client'
import { Navigation } from '@/components/Navigation'
import { HomeHero } from '@/components/Hero/HomeHero'
import { PageHero } from '@/components/Hero/PageHero'

export function Header({ locale }) {
  const path = usePathname()

  return (
    <>
      <Navigation locale={locale} />

      {path === '/' && <HomeHero />}
      {/* {path !== '/' && (
        <PageHero
          title="Framtidens trafikutbildning är här."
          description="Ditt körkort, dina villkor. Vi hjälper dig att hitta en trafikskola som passar just dig."
        ></PageHero>
      )} */}
    </>
  )
}
