import { SimpleLayout } from '@/components/SimpleLayout'
import { Calendly } from '@/components/Calendly'

export const metadata = {
  title: 'Demo',
  description:
    'Vill du veta hur Teoricentralen kan hjälpa dig och din verksamhet? Boka en personlig genomgång med en av våra experter.',
}

export default function Demo() {
  return (
    <SimpleLayout
      title="Boka en demo"
      intro="Vill du veta hur Teoricentralen kan hjälpa dig och din verksamhet? Boka en personlig genomgång med en av våra experter."
    >
      <Calendly />
    </SimpleLayout>
  )
}
