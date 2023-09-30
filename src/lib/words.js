const POST_GRAPHQL_FIELDS = `
  slug
  title
  date
  excerpt
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
    },
  ).then((response) => response.json())
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.ordlistaCollection?.items?.[0]
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.ordlistaCollection?.items
}

export async function getPreviewWordBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      ordlistaCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true,
  )
  return extractPost(entry)
}

export async function getAllWords(isDraftMode) {
  const entries = await fetchGraphQL(
    `query {
      ordlistaCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  )

  return extractPostEntries(entries)
}
