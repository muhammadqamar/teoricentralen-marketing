
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import {NextIntlClientProvider} from 'next-intl';
import '@/styles/tailwind.css'

export const metadata = {
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  alternates: {
    canonical: '/',
    languages: {
      sv: '/',
      en: '/en',
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
    locale: 'sv_SE',
    type: 'website',
  },
}



export default function RootLayout({ children, params }) {

  return (
    <html
      lang={params.lang}
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="flex flex-col h-full bg-zinc-50">
      <NextIntlClientProvider  lang={params.lang} locale={'en'}>
        <div className="flex flex-col min-h-full">
          <Header />
          <main>{children}</main>
          <Footer  />
        </div>

        <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
