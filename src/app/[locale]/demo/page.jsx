import { SimpleLayout } from '@/components/SimpleLayout'
import { Calendly } from '@/components/Calendly'
import { PageHero } from '@/components/Hero/PageHero'

const title = 'Demo'
const description =
  'Vill du veta hur Teoricentralen kan hjälpa dig och din verksamhet? Boka en personlig genomgång med en av våra experter.'
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
