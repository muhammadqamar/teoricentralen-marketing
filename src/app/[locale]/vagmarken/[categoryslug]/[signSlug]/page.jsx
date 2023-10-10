import { Container } from '@/components/Container'
import { getAllRoadSign, getRoadSign } from '@/lib/roadSign'
import { draftMode } from 'next/headers'
import backgroundImage from '@/images/backgrounds/vagmarke.jpg'
import { PageHero } from '@/components/Hero/PageHero'
import Image from 'next/image'
import { ContentfulRender } from '@/utils/contentful'
export async function generateStaticParams({ params }) {
  const AllSigns = await getAllRoadSign(false, params.locale)
  return AllSigns?.map((sign) => ({
    slug: sign.slug,
  }))
}

export default async function Page({ params }) {

  const { isEnabled } = draftMode()
  const signDetail = await getRoadSign(params.signSlug, isEnabled, params.locale)

  return (
    <>
      <PageHero
        title={signDetail?.[0]?.title}
        description={''}
        backgroundImage={backgroundImage}
      />
      <Container className="my-16 ">
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
                    className="inset-0 w-full h-full aspect-square animate-pulse "
                    placeholder={
                      'data:image/jpeg;base64,/9j/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlub...'
                    }
                  />
                </div>
                <div className="px-5 py-4 bg-white ">
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
