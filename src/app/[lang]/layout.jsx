import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Mulish } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider } from 'next-intl'
import '@/styles/tailwind.css'
import { headers } from 'next/headers'

export async function generateMetadata() {
  const headersList = headers()
  const links = headersList.get('link')?.split(', ')
  const linkObjects = []
  let header_url
  if (links) {
    const header_url = new URL(headersList.get('x-url') || '')
    for (const link of links) {
      const match = /<([^>]+)>;\s*rel="([^"]+)";\s*hreflang="([^"]+)"/.exec(
        link,
      )
      if (match) {
        const [, url, rel, hreflang] = match
        const linkObject = { url, rel, hreflang }
        linkObjects.push(linkObject)
      }
    }
  }

  return {
    title: {
      template: '%s - Teoricentralen',
      default: 'Teoricentralen',
    },
    description: 'Teoricentralen en utbildningsplattform för körkortsteori',
    applicationName: 'Teoricentralen',
    referrer: 'origin-when-cross-origin',
    keywords: [
      'Teoricentralen',
      'Körkort',
      'Trafikskola',
      'Utbildningsplattform',
    ],
    metadataBase: process.env.NEXT_PUBLIC_SITE_URL,
    alternates: {
      canonical: linkObjects?.filter((data) => data.hreflang === 'x-default')[0]
        ?.url,
      languages: {
        sv: linkObjects?.filter((data) => data.hreflang === 'sv')[0]?.url,
        en: linkObjects?.filter((data) => data.hreflang === 'en')[0]?.url,
      },
    },
    openGraph: {
      title: 'Teoricentralen',
      description: 'Teoricentralen - en utbildningsplattform för körkortsteori',
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: 'Teoricentralen',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Teoricentralen',
        },
      ],
      locale: header_url?.href?.includes('/en') ? 'en' : 'sv',
      type: 'website',
    },
  }
}

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish',
})

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'sv' }]
}

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html
      lang={lang}
      className={`h-full antialiased ${mulish.variable}`}
      suppressHydrationWarning
    >
      <body className="flex h-full flex-col bg-zinc-50">
        <NextIntlClientProvider locale={lang}>
          <div className="flex min-h-full flex-col">
            <Header lang={lang} />
            <main>{children}</main>
            <Footer lang={lang} />
          </div>

          {/* Vercel Analytics */}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
