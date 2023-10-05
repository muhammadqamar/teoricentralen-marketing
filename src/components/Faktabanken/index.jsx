import React from 'react'
import { SimpleLayout } from '../SimpleLayout'
import Link from 'next/link'
import { Card } from '../Card'
import { ContentDateFormat } from '@/lib/formatDate'
import portraitImage from '@/images/blog-image.jpg'

const Index = ({ data }) => {
  console.log('data', data)
  return (
    <SimpleLayout
      bgImage={portraitImage}
      title="Faktabanken. Innehåll för körkortsteori."
      intro="Här hittar du allt om körkortsteori."
    >
      <div className="md:border-l md:border-zinc-100 md:dark:border-zinc-700/40">
        <div className="flex max-w-[1120px] flex-col gap-6 space-y-16">
          {data?.map((fact, index) => (
            <Link
              className="!m-0"
              href={`/faktabanken/${fact.slug}`}
              key={fact.slug}
            >
              <div className=" w-full rounded-lg bg-white px-[25px] py-5 shadow-md">
                <p className="mb-2">{fact.title}</p>

                <Card as="article">
                  <Card.Eyebrow
                    className="!m-0 "
                    as="date"
                    dateTime={fact?.date}
                    decorate
                  >
                    {ContentDateFormat(fact?.date || '')}
                  </Card.Eyebrow>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}

export default Index
