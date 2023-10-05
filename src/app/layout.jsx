import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider } from 'next-intl'
import '@/styles/tailwind.css'
import { headers } from 'next/headers'

export async function generateMetadata() {
  const headersList = headers()
  const header_url = new URL(headersList.get('x-url') || '')
  return {
    title: {
      template: '%s - Teoricentralen',
      default: 'Teoricentralen',
    },
    description: 'Teoricentralen',
    applicationName: 'Teoricentralen',
    referrer: 'origin-when-cross-origin',
    keywords: ['Teoricentralen', 'Körkort', 'Trafikskola'],
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(header_url.href || process.env.NEXT_PUBLIC_SITE_URL),
    alternates: {
      canonical: header_url.href?.replace('/en', ''),
      languages: header_url.href?.includes('/en')
        ? {
            sv: header_url.href?.replace('/en', ''),
          }
        : {
            en: header_url.origin + '/en' + header_url.pathname,
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
      locale: header_url.href?.includes('/en') ? 'en' : 'sv',
      type: 'website',
    },
  }
}

export default function RootLayout({ children, params }) {
  return (
    <html
      lang={params.lang}
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="flex h-full flex-col bg-zinc-50">
        <NextIntlClientProvider lang={params.lang} locale={'en'}>
          <div className="flex min-h-full flex-col">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>

          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
