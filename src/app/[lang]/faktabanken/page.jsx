import { getAllFacts } from '@/lib/facts'
import { draftMode } from 'next/headers'
import Faktabanken from '@/components/Faktabanken'

export default async function Page({ data }) {
  const { isEnabled } = draftMode()
  const allFacts = await getAllFacts(isEnabled, 'en')

  return <Faktabanken data={allFacts} />
}
