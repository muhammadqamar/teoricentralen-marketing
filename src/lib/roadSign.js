const POST_GRAPHQL_FIELDS = `
  slug
  title
  image {
    url
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
  return fetchResponse?.data?.vagmarkeskategoriCollection?.items?.[0]
}

function extractFactEntries(fetchResponse) {
  return fetchResponse?.data?.vagmarkeskategoriCollection?.items
}

export async function getPreviewSignBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
    vagmarkeskategoriCollection( where: { slug: "${slug}" }, preview: true, limit: 1) {
      items {
        ${POST_GRAPHQL_FIELDS}
      }
    }
  }`,
    true,
  )

  return extractPost(entry)
}

export async function getAllRoadSignCategory(isDraftMode, locale) {
  const entries = await fetchGraphQL(
    `query {
      vagmarkeskategoriCollection(locale: "${locale}" , where: { slug_exists: true }, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  )

  return entries?.data?.vagmarkeskategoriCollection?.items
}

export async function getCategorySignDetail(slug, locale) {
  const entry = await fetchGraphQL(
    `query {
      vagmarkeskategoriCollection(locale: "${locale}", where: { slug: "${slug}" }, limit: 1) {
        items {
          slug
          title
          allsignsCollection(locale: "${locale}" ) {
            items {
              title
              slug
              image {
                url
              }
              
            }
        }
        }
      }
    }`,
  )
  console.log('all detail', entry)
  return {
    detail: entry?.data?.vagmarkeskategoriCollection.items,
  }
}

export async function getAllRoadSign(isDraftMode, locale) {
  const entries = await fetchGraphQL(
    `query {
      vagmarkeCollection(locale: "${locale}" , where: { slug_exists: true }, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
          slug
        }
      }
    }`,
    isDraftMode,
  )

  return entries?.data?.vagmarkeCollection?.items
}

export async function getRoadSign(slug, preview, locale) {
  const entry = await fetchGraphQL(
    `query {
      vagmarkeskategoriCollection(locale: "${locale}", where: { slug: "${slug}" }, preview: ${
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
