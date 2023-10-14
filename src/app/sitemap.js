import { getAllFacts } from '@/lib/facts'

async function sitemap() {
  const routes = []

  const singleStatic = [
    '',
    'utbildningar',
    'utbildningar/moped',
    'utbildningar/personbil',
    'utbildningar/motorcykel',
    'utbildningar/personbil-med-tungt-slap',
    'utbildningar/lastbil',
    'utbildningar/buss',
    'korkortsfragor',
    'recensioner',
    'trafikutbildare',
    'faktabanken',
    'kontakt',
    'korkortsbloggen',
    'om-oss',
    'ordlista',
    'anvandarvillkor',
    'integritetspolicy',
  ]

  // Push all routes
  routes.push(
    ...singleStatic.map((route) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${route}`,
    })),
  )

  // /faktabanken
  // routes.push(
  //   ...(await getAllFacts(false, 'sv'))?.map((fact) => ({
  //     url: `${process.env.NEXT_PUBLIC_SITE_URL}/faktabanken/${fact.slug}`,
  //   })),
  // )

  // /en
  // routes.push(
  //   ...singleStatic.map((route) => ({
  //     url: `${process.env.NEXT_PUBLIC_SITE_URL}/en/${route}`,
  //   })),
  // )

  // /en/faktabanken
  // routes.push(
  //   ...(await getAllFacts(false, 'en'))?.map((fact) => ({
  //     url: `${process.env.NEXT_PUBLIC_SITE_URL}/en/faktabanken/${fact.slug}`,
  //   })),
  // )

  return routes.map((route) => ({
    url: route.url,
    lastModified: route.lastModified || new Date(),
    changefreq: route.changefreq || 'daily',
    priority: route.priority || 0.7,
  }))
}

export default sitemap
