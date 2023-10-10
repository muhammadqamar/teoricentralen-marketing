import Image from 'next/image'
import { PageHero } from '@/components/Hero/PageHero'
import { Container } from '@/components/Container'
import { draftMode } from 'next/headers'
import { getAllRoadSignCategory } from '@/lib/roadSign'
import { Card } from '@/components/Card'
import Link from 'next-intl/link'
import { headers } from 'next/headers'

import PlaceholderImg from '@/images/og-image.png'
import backgroundImage from '@/images/backgrounds/vagmarke.jpg'
import { locales } from 'next-intl'
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

export default async function Page({ params: { locale }, params }) {
  const { isEnabled } = draftMode()
  const headersList = headers()
  const header_url = new URL(headersList.get('x-url') || '')

  const allRoadSign = await getAllRoadSignCategory(isEnabled, locale)

  return (
    <>
      <PageHero
        title={title}
        description={description}
        backgroundImage={backgroundImage}
      />

      <Container className="my-16">
        <div className=" flex max-w-[1120px] flex-col gap-8 space-y-16">
          {allRoadSign?.map((sign) => (
            <Link
              className="!m-0 h-full"
              href={`${header_url.pathname.replace('/en', '')}/${sign?.slug}`}
              locale={locale}
              key={sign.slug}
            >
              <div className="flex h-full min-h-[65px] w-full items-center overflow-hidden rounded-md bg-white py-2 pl-1 pr-2 shadow-md">
                <div className="relative h-[62px] w-[90px]">
                  <Image
                    src={sign?.image?.url || PlaceholderImg}
                    loading="lazy"
                    alt={sign?.image?.url || ''}
                    quality={90}
                    style={{ objectFit: 'contain' }}
                    fill
                    placeholder={
                      'data:image/jpeg;base64,/9j/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlub...'
                    }
                  />
                </div>

                <div className="px-5 py-4 bg-white ">
                  <p className="mb-2">{sign?.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  )
}
