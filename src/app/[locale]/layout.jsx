import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Mulish } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider } from 'next-intl'
import '@/styles/tailwind.css'
import { unstable_setRequestLocale } from 'next-intl/server'

export async function generateMetadata() {
  return {
    title: {
      template: '%s - Teoricentralen',
      default: 'Teoricentralen - en utbildningsplattform för körkortsteori',
    },
    description:
      'Utbildningsplattform för trafikutbildare och elever som vill ta körkort',
    applicationName: 'Teoricentralen',
    referrer: 'origin-when-cross-origin',
    keywords: [
      'Teoricentralen',
      'Körkort',
      'Trafikskola',
      'Utbildningsplattform',
    ],
    metadataBase: process.env.NEXT_PUBLIC_SITE_URL,
    // alternates: {
    //   canonical: linkObjects?.filter((data) => data.hreflang === 'x-default')[0]
    //     ?.url,
    //   languages: {
    //     sv: linkObjects?.filter((data) => data.hreflang === 'sv')[0]?.url,
    //     en: linkObjects?.filter((data) => data.hreflang === 'en')[0]?.url,
    //   },
    // },
    openGraph: {
      title: {
        template: '%s - Teoricentralen',
        default: 'Teoricentralen',
      },
      description: {
        template: '%s',
        default: 'Teoricentralen - en utbildningsplattform för körkortsteori',
      },
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: 'Teoricentralen',
      images: [
        {
          url: process.env.NEXT_PUBLIC_SITE_URL + '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Teoricentralen',
        },
      ],
      // locale: header_url?.href?.includes('/en') ? 'en' : 'sv',
      type: 'website',
    },
  }
}

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish',
})

const locales = ['sv', 'en']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(['sv', 'en'])

  return (
    <html
      lang={locale}
      className={`${mulish.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="gray-50">
        <NextIntlClientProvider>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />

          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
