export const dynamic = 'force-dynamic'
import { Container } from '@/components/Container'
import {
  getAllRoadSign,
  getRoadSign,
  getCategorySignDetail,
} from '@/lib/roadSign'
import { draftMode } from 'next/headers'
import backgroundImage from '@/images/backgrounds/vagmarke.jpg'
import { PageHero } from '@/components/Hero/PageHero'
import Image from 'next/image'
import { ContentfulRender } from '@/utils/contentful'
import Breadcrumbs from '@/components/Breadcrumbs'

export async function generateMetadata({ params: { roadSignSlug, locale } }) {
  const { isEnabled } = draftMode()
  const signDetail = await getRoadSign(roadSignSlug, isEnabled, locale)

  const title = signDetail?.[0]?.title || 'Teoricentralen'

  const description =
    signDetail?.[0]?.excerpt ||
    'Teoricentralen - en utbildningsplattform för körkortsteori'

  const images = [
    signDetail?.[0]?.image?.url || {
      url: process.env.NEXT_PUBLIC_SITE_URL + '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Teoricentralen',
    },
  ]

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
    },
    twitter: {
      title,
      description,
      images,
    },
  }
}

export async function generateStaticParams({ params }) {
  const AllSigns = await getAllRoadSign(false, params.locale)
  return AllSigns?.map((sign) => ({
    slug: sign.slug,
  }))
}

export default async function Page({ params }) {
  const { isEnabled } = draftMode()
  const signDetail = await getRoadSign(
    params.roadSignSlug,
    isEnabled,
    params.locale,
  )
  const { detail } = await getCategorySignDetail(
    params.roadSignCategorySlug,
    params.locale,
  )

  const pages = [
    {
      name:
        params.locale === 'sv'
          ? 'Vägmärken'
          : params.locale === 'en' && 'Road Signs',
      href:
        params.locale === 'sv'
          ? '/vagmarken'
          : params.locale === 'en' && '/road-signs',
      current: false,
    },
    {
      name: detail?.[0]?.title,
      href:
        params.locale === 'sv'
          ? `/vagmarken/${params.roadSignCategorySlug}`
          : params.locale === 'en' &&
            `/road-signs/${params.roadSignCategorySlug}`,
      current: true,
    },
    {
      name: signDetail?.[0]?.title,
      href:
        params.locale === 'sv'
          ? `/vagmarken/${params.roadSignCategorySlug}/${params.roadSignSlug}`
          : params.locale === 'en' &&
            `/road-signs/${params.roadSignCategorySlug}/${params.roadSignSlug}`,
      current: true,
    },
  ]

  return (
    <>
      <PageHero
        title={signDetail?.[0]?.title}
        description={''}
        backgroundImage={backgroundImage}
      />

      <Container className="my-8">
        <Breadcrumbs pages={pages} />
      </Container>

      <Container className="my-16">
        <div className="flex flex-col gap-6">
          {signDetail?.map((data) => {
            return (
              <div className="flex h-full min-h-[65px] w-full items-center overflow-hidden rounded-md bg-white py-2 pl-1 pr-2 shadow-md">
                <div className="relative h-[62px] w-[100px]">
                  <Image
                    src={data?.image?.url}
                    loading="lazy"
                    alt={data?.image?.url || ''}
                    quality={90}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="inset-0 aspect-square h-full w-full animate-pulse "
                    placeholder={
                      'data:image/jpeg;base64,/9j/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlub...'
                    }
                  />
                </div>
                <div className="bg-white px-5 py-4 ">
                  <p className="mb-2">{data?.title}</p>
                  {ContentfulRender(data.content?.json)}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </>
  )
}
