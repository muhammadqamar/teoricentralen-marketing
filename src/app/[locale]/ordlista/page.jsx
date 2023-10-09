import Image from 'next/image'
import { PageHero } from '@/components/Hero/PageHero'
import { Container } from '@/components/Container'
import portraitImage from '@/images/logo.png'

const title = 'Ordlista'
const description = 'Framtidens trafikutbildning är här'
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

export default async function Page({ params }) {
  return (
    <>
      <PageHero title={title} description={description} image={image} />

      <Container className="my-16">Ordlista here</Container>
    </>
  )
}
