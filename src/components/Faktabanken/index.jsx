import React from 'react'
import { SimpleLayout } from '../SimpleLayout'
import Link from 'next-intl/link'
import { Card } from '../Card'
import { ContentDateFormat } from '@/lib/formatDate'
import portraitImage from '@/images/blog-image.jpg'
import Image from 'next/image'
import PlaceholderImg from '@/images/og-image.png'

const Index = ({ data }) => {
  return (
    <SimpleLayout
      bgImage={portraitImage}
      title="Faktabanken. Innehåll för körkortsteori."
      intro="Här hittar du allt om körkortsteori."
    >
      <div className="md:border-l md:border-zinc-100 md:dark:border-zinc-700/40">
        <div className=" grid max-w-[1120px] grid-cols-4  gap-6 space-y-16">
          {data?.map((fact, index) => (
            <Link
              className="!m-0 h-full"
              href={`/faktabanken/${fact?.slug}`}
              key={fact.slug}
            >
              <div className="h-full min-h-[200px] w-full overflow-hidden rounded-md bg-white shadow-md">
                <div className="relative h-[100px] w-full">
                  <Image
                    src={fact?.image?.url || PlaceholderImg}
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
                  <p className="mb-2">{fact?.title}</p>
                  {fact?.sys?.publishedAt && (
                    <Card as="article">
                      <Card.Eyebrow
                        className="!m-0 !text-zinc-600"
                        as="date"
                        dateTime={fact?.date}
                        decorate
                      >
                        {ContentDateFormat(fact?.sys?.publishedAt || '')}
                      </Card.Eyebrow>
                    </Card>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}

export default Index
