import { getAllFacts } from '@/lib/facts'
import { draftMode } from 'next/headers'
import Faktabanken from '@/components/Faktabanken'
import { PageHero } from '@/components/Hero/PageHero'

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

  return (
    <>
      <PageHero title={title} description={description} image={image} />
      <Faktabanken data={allFacts} />
    </>
  )
}
