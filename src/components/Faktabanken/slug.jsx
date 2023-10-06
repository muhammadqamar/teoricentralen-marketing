import React from 'react'

import { ContentfulRender } from '@/utils/contentful'
import { SimpleLayout } from '../SimpleLayout'
import { Card } from '../Card'
import { ContentDateFormat } from '@/lib/formatDate'
import portraitImage from '@/images/blog-image.jpg'

const Slug = ({ data }) => {
  return (
    <SimpleLayout
      bgImage={data?.image === null ? portraitImage : data?.image?.url}
      title={data?.title}
    >
      <div className="container px-5 mx-auto">
        <div className="flex flex-col max-w-3xl space-y-16">
          {data?.date && (
            <Card as="article">
              <Card.Eyebrow
                className="!mb-3 "
                as="date"
                dateTime={data?.date}
                decorate
              >
                <p className="!text-gray-600">
                  {ContentDateFormat(data?.date || '')}
                </p>
              </Card.Eyebrow>
            </Card>
          )}
          {ContentfulRender(data?.content?.json)}
        </div>
      </div>
    </SimpleLayout>
  )
}

export default Slug
