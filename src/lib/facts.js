const POST_GRAPHQL_FIELDS = `
  slug
  title
  date
  excerpt
  image {
    url
  }
  content {
    json

  }
`

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ['posts'] },
      cache: 'no-store',
    },
  ).then((response) => response.json())
}

function extractFact(fetchResponse) {
  return fetchResponse?.data?.faktabankenCollection?.items?.[0]
}

function extractFactEntries(fetchResponse) {
  return fetchResponse?.data?.faktabankenCollection?.items
}

export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
    faktabankenCollection( where: { slug: "${slug}" }, preview: true, limit: 1) {
      items {
        ${POST_GRAPHQL_FIELDS}
      }
    }
  }`,
    true,
  )
  return extractPost(entry)
}

export async function getAllFacts(isDraftMode, locale) {
  const entries = await fetchGraphQL(
    `query {
        faktabankenCollection(locale: "${locale}" , where: { slug_exists: true }, order: date_DESC, preview: ${
          isDraftMode ? 'true' : 'false'
        }) {
        items {
            ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  )

  return extractFactEntries(entries)
}

export async function getFact(slug, preview, locale) {
  const entry = await fetchGraphQL(
    `query {
    faktabankenCollection(locale: "${locale}", where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
      items {
        ${POST_GRAPHQL_FIELDS}
      }
    }
  }`,
    preview,
  )

  return {
    fact: extractFact(entry),
  }
}
