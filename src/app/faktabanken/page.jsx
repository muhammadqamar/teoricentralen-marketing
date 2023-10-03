import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllFacts } from '@/lib/facts'
import { draftMode } from 'next/headers'

export default async function Page() {
  const { isEnabled } = draftMode()
  const allFacts = await getAllFacts(isEnabled)

  return (
    <SimpleLayout
      title="Faktabanken. Innehåll för körkortsteori."
      intro="Här hittar du allt om körkortsteori."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex flex-col max-w-3xl space-y-16">
          {allFacts.map((fact) => (
            <div key={fact.slug}>{fact.title}</div>
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
