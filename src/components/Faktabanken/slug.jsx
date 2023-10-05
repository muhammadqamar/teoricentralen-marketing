import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { SimpleLayout } from '../SimpleLayout'
import { Card } from '../Card'
import { ContentDateFormat } from '@/lib/formatDate'
import portraitImage from '@/images/blog-image.jpg'

const Slug = ({ data }) => {
  console.log('inside', data)
  return (
    <SimpleLayout
      bgImage={data?.image === null ? portraitImage : data?.image?.url}
      title="Faktabanken. Innehåll för körkortsteori."
      intro="Här hittar du allt om körkortsteori."
    >
      <div className="container mx-auto px-5 md:border-l md:border-zinc-100 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
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
          <h1 className="!m-0 !mb-4 text-2xl font-semibold capitalize">
            {data?.title}
          </h1>
          <div className="document-text !m-0 ">
            {documentToReactComponents(data?.content?.json)}
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}

export default Slug
