import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Mulish } from 'next/font/google'
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
    metadataBase: process.env.NEXT_PUBLIC_SITE_URL,
    alternates: {
      canonical: header_url?.href?.replace('/en', '/sv') || '',
      languages: {
        sv: header_url.href?.replace('/en', '/sv'),
        en: header_url.href?.replace('/sv', '/en'),
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

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish',
})

export function generateStaticParams() {
  return [{ locale: 'sv' }, { locale: 'en' }]
}

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html
      lang={lang}
      className={`h-full antialiased ${mulish.variable}`}
      suppressHydrationWarning
    >
      <body className="flex h-full flex-col bg-zinc-50">
        <NextIntlClientProvider lang={lang} locale={'en'}>
          <div className="flex min-h-full flex-col">
            <Header />
            <main>{children}</main>
            <Footer lang={lang} />
          </div>

          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
