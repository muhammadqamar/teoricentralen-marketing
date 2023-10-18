import { getAllFacts } from '@/lib/facts'
import { draftMode } from 'next/headers'
import Faktabanken from '@/components/Faktabanken'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/barn.jpg'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'

const title = 'Faktabanken'
const description = 'Faktabanken'
const image = '/og-image.png'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: image }],
  },
}

export default async function Page({ params: { locale } }) {
  const { isEnabled } = draftMode()
  const allFacts = await getAllFacts(isEnabled, locale)

  const pages = [
    {
      name: locale === 'sv' ? 'Faktabanken' : locale === 'en' && 'Faktabanken',
      href: locale === 'sv' ? '/faktabanken' : locale === 'en' && '/facts',
      current: false,
    },
  ]

  return (
    <>
      <PageHero
        title={title}
        description={description}
        backgroundImage={backgroundImage}
      />
      <Container className="my-8">
        <Breadcrumbs pages={pages} />
      </Container>
      <Faktabanken data={allFacts} />
    </>
  )
}
