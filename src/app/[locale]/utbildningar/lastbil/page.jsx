import { Container } from '@/components/Container'
import { Faq } from '@/components/Faq'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/truck.jpg'

const title = 'Körkort för tung lastbil'
const description =
  'Vi utbildar på alla fyra olika körkortsbehörigheter för tunga lastbilar: C1, C1E, C och CE.'
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
