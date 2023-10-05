import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { SimpleLayout } from '../SimpleLayout'
import { Card } from '../Card'
import { ContentDateFormat } from '@/lib/formatDate'
import portraitImage from '@/images/blog-image.jpg'

const Slug = ({ data }) => {
  return (
    <SimpleLayout
      bgImage={data?.image === null ? portraitImage : data?.image?.url}
      title={data.title}
    >
      <div className="container mx-auto px-5 md:border-l md:border-zinc-100 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
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

          <div className="document-text !m-0 ">
            {documentToReactComponents(data?.content?.json)}
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}

export default Slug
