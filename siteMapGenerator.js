const fs = require('fs')
const path = require('path')
const readline = require('readline')
const { SitemapStream, streamToPromise } = require('sitemap')

const nextFolder = path.join(__dirname, '.next')
const public = path.join(__dirname, 'public')
const sitemap_xml = path.join(public, 'sitemap.xml')
const traceFile = path.join(nextFolder, 'trace')

const readStream = fs.createReadStream(traceFile, 'utf8')
const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity,
})

const generateSitemap = (urls) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  for (const url of urls) {
    xml += '  <url>\n'
    xml += `    <loc>${url}</loc>\n`
    xml += '  </url>\n'
  }

  xml += '</urlset>'

  return xml
}

const stream = new SitemapStream({
  hostname: process.env.NEXT_PUBLIC_SITE_URL || 'https://beta.teoricentralen.se',
})

const routes = []
rl.on('line', (line) => {
  try {
    const jsonData = JSON.parse(line)

    const _routes = jsonData
      .filter((j) => (j.name = 'export-page'))
      .map((r) => r.tags.path)
      .filter((r) => r)
    _routes.forEach((route) =>
      stream.write({ url: route, changefreq: 'weekly', priority: 0.8 }),
    )
    routes.push(..._routes)
  } catch (parseError) {
    console.error('Error parsing JSON line:')
    console.error(parseError.message) // Print the specific parsing error message
    console.error('JSON line that caused the error:')
    console.error(line)
  }
})

rl.on('close', () => {
  stream.end()
  const writeStream = fs.createWriteStream(sitemap_xml, 'utf8')
  stream.pipe(writeStream)

  console.log('Routes:', routes, routes.length)
  console.log('Generating sitemap.xml...', generateSitemap(routes))
  console.log('Finished reading the "trace" file.')
})
