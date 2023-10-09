import Image from 'next/image'
import { PageHero } from '@/components/Hero/PageHero'
import { Container } from '@/components/Container'
import { draftMode } from 'next/headers'
import { getAllRoadSign } from '@/lib/roadSign'
import { Card } from '@/components/Card'
import Link from 'next/link'
import PlaceholderImg from '@/images/og-image.png'
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

export default async function Page({ params: { locale } }) {
  const { isEnabled } = draftMode()
  const allRoadSign = await getAllRoadSign(isEnabled, locale)

  return (
    <>
      <PageHero
        title={title}
        description={description}
        backgroundImage={backgroundImage}
      />

      <Container className="my-16">
        <div className=" grid max-w-[1120px] grid-cols-4  gap-6 space-y-16">
          {allRoadSign?.map((sign) => (
            <Link
              className="!m-0 h-full"
              href={`/vagmarken/${sign?.slug}`}
              key={sign.slug}
            >
              <Card className="h-full min-h-[200px] w-full overflow-hidden rounded-md bg-white shadow-md">
                <div className="relative h-[100px] w-full">
                  <Image
                    src={sign?.image?.url || PlaceholderImg}
                    loading="lazy"
                    alt=""
                    fill
                    className="inset-0 aspect-square h-full w-full animate-pulse  "
                    placeholder={
                      'data:image/jpeg;base64,/9j/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlub...'
                    }
                  />
                </div>
                <div className="bg-white px-5 py-4 ">
                  <p className="mb-2">{sign?.title}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </>
  )
}
