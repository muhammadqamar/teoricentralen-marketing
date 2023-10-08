import { getAllFacts } from '@/lib/facts'
import { draftMode } from 'next/headers'
import Faktabanken from '@/components/Faktabanken'

export const metadata = {
  title: 'Faktabanken',
}

export default async function Page({ params: { locale } }) {
  const { isEnabled } = draftMode()
  const allFacts = await getAllFacts(isEnabled, locale)

  return <Faktabanken data={allFacts} />
}
