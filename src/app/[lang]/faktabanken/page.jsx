import { getAllFacts } from '@/lib/facts'
import { draftMode } from 'next/headers'
import Faktabanken from '@/components/Faktabanken'

export default async function Page({ params }) {
  const { isEnabled } = draftMode()
  const allFacts = await getAllFacts(isEnabled, params.lang)

  // console.log('allFacts', allFacts)

  return <Faktabanken data={allFacts} />
}
