import { getAllFacts } from '@/lib/facts'

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

  // /
  routes.push(
    ...singleStatic.map((route) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${route}`,
    })),
  )

  // /faktabanken
  routes.push(
    ...(await getAllFacts(false, 'sv'))?.map((fact) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/faktabanken/${fact.slug}`,
    })),
  )

  // /en
  routes.push(
    ...singleStatic.map((route) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/en/${route}`,
    })),
  )

  // /en/faktabanken
  routes.push(
    ...(await getAllFacts(false, 'en'))?.map((fact) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/en/faktabanken/${fact.slug}`,
    })),
  )

  return routes.map((route) => ({
    url: route.url,
    lastModified: route.lastModified || new Date(),
    changefreq: route.changefreq || 'daily',
    priority: route.priority || 0.7,
  }))
}

export default sitemap
