import clsx from 'clsx'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Mulish } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { locales } from '@/navigation'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params: { locale } }) {
  console.log('generateMetadata', locale)

  return {
    title: {
      template: '%s | Teoricentralen',
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
    //   canonical: process.env.NEXT_PUBLIC_SITE_URL,
    //   languages: {
    //     sv: process.env.NEXT_PUBLIC_SITE_URL + '/',
    //     sv: process.env.NEXT_PUBLIC_SITE_URL + '/en',
    //   },
    // },
    openGraph: {
      title: 'Teoricentralen',
      description: 'Teoricentralen - en utbildningsplattform för körkortsteori',
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
      locale: locale,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
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
  const isValidLocale = locales.some((cur) => cur === locale)
  if (!isValidLocale) notFound()

  unstable_setRequestLocale(locale)

  return (
    <html
      lang={locale}
      className={clsx(mulish.variable, 'antialiased')}
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
