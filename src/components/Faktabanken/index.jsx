import React from 'react'
import { Card } from '../Card'
import { ContentDateFormat } from '@/lib/formatDate'
import Image from 'next/image'
import PlaceholderImg from '@/images/og-image.png'
import { Container } from '@/components/Container'

import { createSharedPathnamesNavigation } from 'next-intl/navigation'

import { locales } from '@/navigation'
const { Link } = createSharedPathnamesNavigation({ locales })

const Index = ({ data }) => {
  return (
    <Container className="py-16">
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
    </Container>
  )
}

export default Index
