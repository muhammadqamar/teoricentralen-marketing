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
  return fetchResponse?.data?.faktabankenCollection?.items?.[0]
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.faktabankenCollection?.items
}

export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
    faktabankenCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
      items {
        ${POST_GRAPHQL_FIELDS}
      }
    }
  }`,
    true,
  )
  return extractPost(entry)
}

export async function getAllFacts(isDraftMode) {
  const entries = await fetchGraphQL(
    `query {
        faktabankenCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
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

export async function getPostAndMorePosts(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
    faktabankenCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
      items {
        ${POST_GRAPHQL_FIELDS}
      }
    }
  }`,
    preview,
  )
  const entries = await fetchGraphQL(
    `query {
        faktabankenCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
          preview ? 'true' : 'false'
        }, limit: 2) {
        items {
            ${POST_GRAPHQL_FIELDS}
        }
        }
    }`,
    preview,
  )
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  }
}
