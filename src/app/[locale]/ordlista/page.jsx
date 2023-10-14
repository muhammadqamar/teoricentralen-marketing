import { getAllOrdlista } from '@/lib/ordlista'
import { Container } from '@/components/Container'
import { PageHero } from '@/components/Hero/PageHero'
import { Card } from '@/components/Card'
import { draftMode } from 'next/headers'
import { ContentDateFormat } from '@/lib/formatDate'
import Image from 'next/image'
import backgroundImage from '@/images/backgrounds/trafikutbildare.jpg'
import PlaceholderImg from '@/images/og-image.png'
import { locales } from '@/navigation'

import { createSharedPathnamesNavigation } from 'next-intl/navigation'
const { Link } = createSharedPathnamesNavigation({ locales })

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

export default async function Page({ params: { locale } }) {
  const { isEnabled } = draftMode()
  const allList = await getAllOrdlista(isEnabled, locale)

  return (
    <>
      <PageHero
        title={title}
        description={description}
        backgroundImage={backgroundImage}
      />

      <Container className="my-16">
        <div className="md:border-l md:border-zinc-100 md:dark:border-zinc-700/40">
          <div className=" grid max-w-[1120px] grid-cols-4  gap-6 space-y-16">
            {allList?.map((fact, index) => (
              <Link
                className="!m-0 h-full"
                href={fact.slug}
                locale={locale}
                key={fact.slug}
              >
                <div className="h-full min-h-[200px] w-full overflow-hidden rounded-md bg-white shadow-md">
                  <div className="relative h-[100px] w-full">
                    <Image
                      src={fact?.image?.url || PlaceholderImg}
                      loading="lazy"
                      alt=""
                      fill
                      className="inset-0 aspect-square h-full w-full animate-pulse "
                      placeholder={
                        'data:image/jpeg;base64,/9j/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlub...'
                      }
                    />
                  </div>
                  <div className="bg-white px-5 py-4 ">
                    <p className="mb-2">{fact?.title}</p>
                    {fact?.sys?.publishedAt && (
                      <Card as="article">
                        <Card.Eyebrow
                          className="!mb-3 "
                          as="date"
                          dateTime={fact?.sys?.publishedAt}
                          decorate
                        >
                          <p className="!text-gray-600">
                            {ContentDateFormat(fact?.sys?.publishedAt || '')}
                          </p>
                        </Card.Eyebrow>
                      </Card>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
