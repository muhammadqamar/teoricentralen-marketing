import { SimpleLayout } from '@/components/SimpleLayout'

export default async function Page({ params }) {
  return (
    <SimpleLayout
      title="Ordlista. Massa trafikrelaterade ord."
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {/* {facts.map((fact) => console.log(fact))} */}
          <div>Word: {params.slug}</div>
        </div>
      </div>
    </SimpleLayout>
  )
}