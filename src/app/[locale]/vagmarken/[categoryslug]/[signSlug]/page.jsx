import { Container } from '@/components/Container'
import { getAllRoadSign, getRoadSign } from '@/lib/roadSign'
import { draftMode } from 'next/headers'

export async function generateStaticParams({ params }) {
  const AllSigns = await getAllRoadSign(false, params.locale)
  return AllSigns?.map((sign) => ({
    slug: sign.slug,
  }))
}

export default async function Page({ params }) {
  console.log('sdfsd', params)
  // const { isEnabled } = draftMode()
  // const { fact } = await getRoadSign(params.slug, isEnabled, params.locale)

  return (
    <Container className="my-16">
      <div className="">
        <h1>dta </h1>
      </div>
    </Container>
  )
}
