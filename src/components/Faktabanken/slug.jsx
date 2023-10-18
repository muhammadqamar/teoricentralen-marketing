import React from 'react'

import { ContentfulRender } from '@/utils/contentful'
import { SimpleLayout } from '../SimpleLayout'
import { Card } from '../Card'
import { ContentDateFormat } from '@/lib/formatDate'
import { Container } from '@/components/Container'
import portraitImage from '@/images/blog-image.jpg'
import Breadcrumbs from '../Breadcrumbs'

const Slug = ({ data, factSlug, locale }) => {
  const pages = [
    {
      name: locale === 'sv' ? 'Faktabanken' : locale === 'en' && 'Faktabanken',
      href: locale === 'sv' ? '/faktabanken' : locale === 'en' && '/facts',
      current: false,
    },
    {
      name: data?.title,
      href:
        locale === 'sv'
          ? `/faktabanken/${factSlug}`
          : locale === 'en' && `/facts/${factSlug}`,
      current: true,
    },
  ]

  return (
    <SimpleLayout
      bgImage={data?.image === null ? portraitImage : data?.image?.url}
      title={data?.title}
    >
      <Container className="my-8">
        <Breadcrumbs pages={pages} />
      </Container>

      {data?.date && (
        <Card as="article">
          <Card.Eyebrow
            className="mb-3"
            as="date"
            dateTime={data?.date}
            decorate
          >
            <p className="text-gray-600">
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
