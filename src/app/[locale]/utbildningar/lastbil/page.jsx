import { Container } from '@/components/Container'
import { Faq } from '@/components/Faq'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/trafikutbildare.jpg'

const title = 'Lastbil'
const description = 'Vi svarar på de vanligaste frågorna'
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
  return (
    <>
      <PageHero
        title={title}
        description={description}
        backgroundImage={backgroundImage}
      />

      <Container className="my-16">Lastbil</Container>
    </>
  )
}
