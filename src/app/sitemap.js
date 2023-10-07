import { getAllFacts, getFact } from '@/lib/facts'
// import type { MetadataRoute } from "next";
// import { MetadataRoute } from 'next'

async function sitemap() {
  const routes = []
  const singleStatic = [
    '',
    'anvandarvillkor',
    'integritetspolicy',
    'faktabanken',
    'kontakt',
    'korkortsbloggen',
    'korkortsfragor',
    'om-oss',
    'ordlista',
    'recensioner',
    'utbildningar/bus',
    'utbildningar/bus-with-trailer',
    'utbildningar/car',
    'utbildningar/car-with-trailer',
    'utbildningar/motorcycle',
    'utbildningar/moped',
    'utbildningar/truck',
  ]

  // /en
  routes.push(
    ...singleStatic.map((route) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/en/${route}`,
    })),
  )

  // /sv
  routes.push(
    ...singleStatic.map((route) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${route}`,
    })),
  )

  // /en/faktabanken
  routes.push(
    ...(await getAllFacts(false, 'en'))?.map((fact) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/en/faktabanken/${fact.slug}`,
    })),
  )
  // /sv/faktabanken
  routes.push(
    ...(await getAllFacts(false, 'sv'))?.map((fact) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/faktabanken/${fact.slug}`,
    })),
  )
  // console.log()
  const sitemap = routes.map((route) => ({
    url: route.url,
    lastModified: route.lastModified || new Date(),
    changefreq: route.changefreq || 'daily',
    priority: route.priority || 0.7,
  }))
  console.log(sitemap)
  return sitemap
}

export default sitemap

// export async function generateStaticParams({ params }) {
//   const allFacts = await getAllFacts(false, params.lang)
//   console.log(
//     '✅✅✅✅',
//     allFacts?.map((fact) => ({
//       slug: fact.slug,
//     })),
//   )
//   return allFacts?.map((fact) => ({
//     slug: fact.slug,
//   }))
// }
