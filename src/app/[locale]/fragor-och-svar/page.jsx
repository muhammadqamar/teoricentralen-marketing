import { Container } from '@/components/Container'
import { Faq } from '@/components/Faq'
import { PageHero } from '@/components/Hero/PageHero'

const title = 'Användarvillkor'
const description = 'Användarvillkor'
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
      <PageHero title={title} description={description} image={image} />

      <Container className="my-16">
        <Faq />
      </Container>
    </>
  )
}
