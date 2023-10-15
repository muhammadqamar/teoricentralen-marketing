export const dynamic = 'force-dynamic'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { getAllRoadSignCategory, getCategorySignDetail } from '@/lib/roadSign'
import { PageHero } from '@/components/Hero/PageHero'
import backgroundImage from '@/images/backgrounds/vagmarke.jpg'
import { Link } from '@/navigation'

export async function generateStaticParams({ params }) {
  const allCategories = await getAllRoadSignCategory(false, params.locale)
  return allCategories?.map((category) => ({
    slug: category.slug,
  }))
}

export default async function Page({ params }) {
  const { detail } = await getCategorySignDetail(
    params.roadSignCategorySlug,
    params.locale,
  )

  return (
    <>
      <PageHero
        title={detail?.[0]?.title}
        description={''}
        backgroundImage={backgroundImage}
      />

      <Container className="my-16">
        <div className="flex flex-col gap-6">
          {detail?.map((data) => {
            return data?.allsignsCollection?.items?.map((data1) => {
              return (
                <Link
                  href={{
                    pathname:
                      '/vagmarken/[roadSignCategorySlug]/[roadSignSlug]',
                    params: {
                      roadSignCategorySlug: params.roadSignCategorySlug,
                      roadSignSlug: data1.slug,
                    },
                  }}
                  locale={params.locale}
                >
                  <div className="flex h-full min-h-[65px] w-full items-center overflow-hidden rounded-md bg-white py-2 pl-1 pr-2 shadow-md">
                    <div className="relative h-[62px] w-[100px]">
                      <Image
                        src={data1?.image?.url}
                        loading="lazy"
                        alt={data1?.image?.url || ''}
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
                      <p className="mb-2">{data1?.title}</p>
                    </div>
                  </div>
                </Link>
              )
            })
          })}
        </div>
      </Container>
    </>
  )
}
