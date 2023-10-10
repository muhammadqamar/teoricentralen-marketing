import React from 'react'

import { ContentfulRender } from '@/utils/contentful'
import { SimpleLayout } from '../SimpleLayout'
import { Card } from '../Card'
import { ContentDateFormat } from '@/lib/formatDate'
import portraitImage from '@/images/blog-image.jpg'
import { Container } from '../Container'

const Slug = ({ data }) => {
  return (
    <SimpleLayout
      bgImage={data?.image === null ? portraitImage : data?.image?.url}
      title={data?.title}
    >
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
      <Container className="py-16">
        {ContentfulRender(data?.content?.json)}
      </Container>
    </SimpleLayout>
  )
}

export default Slug
