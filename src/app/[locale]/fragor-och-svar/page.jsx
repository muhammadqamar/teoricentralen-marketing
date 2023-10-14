import { Container } from '@/components/Container'
import { Faq } from '@/components/Faq'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/barn.jpg'

const title = 'Frågor och svar'
const description = 'Vi har svar på de vanligaste frågorna'
const image = '/og-image.png'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
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

      <Container className="my-16">
        <Faq />
      </Container>
    </>
  )
}
