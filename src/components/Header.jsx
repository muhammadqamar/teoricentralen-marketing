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
      {path !== '/' && <PageHero />}
    </>
  )
}
