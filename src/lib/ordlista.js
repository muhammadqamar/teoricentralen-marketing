const POST_GRAPHQL_FIELDS = `
slug
title
excerpt
image {
  url
}
content {
  json
}
sys {
publishedAt
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
  return fetchResponse?.data?.ordlistaCollection?.items?.[0]
}

function extractFactEntries(fetchResponse) {
  return fetchResponse?.data?.ordlistaCollection?.items
}

// export async function getPreviewordBySlug(slug) {
//   const entry = await fetchGraphQL(
//     `query {
//     ordlistaCollection( where: { slug: "${slug}" }, preview: true, limit: 1) {
//       items {
//         ${POST_GRAPHQL_FIELDS}
//       }
//     }
//   }`,
//     true,
//   )
//   return extractPost(entry)
// }

export async function getAllOrdlista(isDraftMode, locale) {
  const entries = await fetchGraphQL(
    `query {
      ordlistaCollection(locale: "${locale}" , where: { slug_exists: true }, preview: ${
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

export async function getOrdlista(slug, preview, locale) {
  const entry = await fetchGraphQL(
    `query {
      ordlistaCollection(locale: "${locale}", where: { slug: "${slug}" }, preview: ${
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
