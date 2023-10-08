import { SimpleLayout } from '@/components/SimpleLayout'
import { Calendly } from '@/components/Calendly'
import { PageHero } from '@/components/Hero/PageHero'

const title = 'Demo'
const description =
  'Vill du veta hur Teoricentralen kan hjälpa dig och din verksamhet? Boka en personlig genomgång med en av våra experter.'

export const metadata = {
  title,
  description,
}

export default function Demo() {
  return (
    <>
      <PageHero title={title} description={description} image={image} />
      <SimpleLayout title={title} intro={description}>
        <Calendly />
      </SimpleLayout>
    </>
  )
}
