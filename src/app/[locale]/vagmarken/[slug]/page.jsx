import { getAllRoadSign, getRoadSign } from '@/lib/roadSign'
import { draftMode } from 'next/headers'

export async function generateMetadata({ params: { locale, slug } }) {
  const { isEnabled } = draftMode()
  const { fact } = await getRoadSign(slug, isEnabled, locale)
  const title = fact?.title || 'Teoricentralen'
  const description =
    fact?.excerpt ||
    'Teoricentralen - en utbildningsplattform för körkortsteori'
  const images = [
    fact?.image?.url || {
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

export async function generateStaticParams({ params: { locale } }) {
  const allRoadSign = await getAllRoadSign(false, locale)

  return allRoadSign?.map((fact) => ({
    slug: fact.slug,
  }))
}

export default async function Page({ params: { locale, slug } }) {
  const { isEnabled } = draftMode()
  const { sign } = await getRoadSign(slug, isEnabled, locale)

  console.log('sign', sign)

  return <div className="mt-32 h-1/2 w-full bg-black">{sign?.title}</div>
}
