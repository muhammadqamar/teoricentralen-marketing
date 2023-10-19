import Image from 'next/image'
import PlaceholderImg from '@/images/og-image.png'
import backgroundImage from '@/images/backgrounds/vagmarke.jpg'
import { PageHero } from '@/components/Hero/PageHero'
import { Container } from '@/components/Container'
import { getAllRoadSignCategory } from '@/lib/roadSign'
import { Link } from '@/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import { translationHook } from '@/utils/translationHook'
import { draftMode } from 'next/headers'

export async function generateMetadata({ params: { locale } }) {
  const title = await translationHook(locale, 'vagmarken', 'seoTitle')
  const description = await translationHook(
    locale,
    'vagmarken',
    'seoDescription',
  )
  const ogImage = '/og-image.png'
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogImage }],
    },
  }
}

export default async function Page({ params: { locale } }) {
  const { isEnabled } = draftMode()
  const allRoadSign = await getAllRoadSignCategory(isEnabled, locale)

  const pages = [
    {
      name: locale === 'sv' ? 'Vagmarken' : locale === 'en' && 'Road Signs',
      href: locale === 'sv' ? '/vagmarken' : locale === 'en' && '/road-signs',
      current: false,
    },
  ]

  return (
    <>
      <PageHero
        title={await translationHook(locale, 'vagmarken', 'seoTitle')}
        description={await translationHook(
          locale,
          'vagmarken',
          'seoDescription',
        )}
        backgroundImage={backgroundImage}
      />
      <Container className="my-8">
        <Breadcrumbs pages={pages} />
      </Container>

      <Container className="my-16">
        <div className=" flex max-w-[1120px] flex-col gap-8 space-y-16">
          {allRoadSign?.map((sign) => (
            <Link
              className="!m-0 h-full"
              href={{
                pathname: '/vagmarken/[roadSignCategorySlug]',
                params: { roadSignCategorySlug: sign.slug },
              }}
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

                <div className="bg-white px-5 py-4 ">
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
