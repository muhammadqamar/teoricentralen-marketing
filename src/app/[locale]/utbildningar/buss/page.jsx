import { Container } from '@/components/Container'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/bus.jpg'

const title = 'Körkort för buss'
const description =
  'Vi utbildar på alla fyra olika körkortsbehörigheter för bussar: D1, D1E, D och D.'
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

      <Container className="my-16">Buss</Container>
    </>
  )
}
