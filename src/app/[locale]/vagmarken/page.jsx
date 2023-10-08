import Image from 'next/image'
import { PageHero } from '@/components/Hero/PageHero'
import { Container } from '@/components/Container'
import portraitImage from '@/images/logo.png'
import backgroundImage from '@/images/backgrounds/vagmarke.jpg'

const title = 'Vägmärken'
const description = 'Alla Sveriges Vägmärken'
const ogImage = '/og-image.png'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: ogImage }],
  },
}

export default async function Page({ params }) {
  return (
    <>
      <PageHero
        image={backgroundImage}
        title={title}
        description={description}
      />

      <Container className="my-16">Alla Sveriges vägmärken</Container>
    </>
  )
}
