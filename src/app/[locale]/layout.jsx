import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Mulish } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { locales } from '@/navigation'
import { notFound } from 'next/navigation'
import '@/styles/tailwind.css'

export async function generateMetadata({ params }) {
  console.log(params)
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
    // openGraph: {
    //   title: {
    //     template: '%s - Teoricentralen',
    //     default: 'Teoricentralen',
    //   },
    //   description: {
    //     template: '%s',
    //     default: 'Teoricentralen - en utbildningsplattform för körkortsteori',
    //   },
    //   url: process.env.NEXT_PUBLIC_SITE_URL,
    //   siteName: 'Teoricentralen',
    //   images: [
    //     {
    //       url: process.env.NEXT_PUBLIC_SITE_URL + '/og-image.png',
    //       width: 1200,
    //       height: 630,
    //       alt: 'Teoricentralen',
    //     },
    //   ],
    // locale: useLocale(),
    // type: 'website',
    // },
  }
}

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish',
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound()

  unstable_setRequestLocale(['sv', 'en'])

  return (
    <html
      lang={locale}
      className={`${mulish.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="gray-50">
        <NextIntlClientProvider locales={locale}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />

          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
