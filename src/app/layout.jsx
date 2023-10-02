import Providers from '@/app/providers'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

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
      'sv-SE': '/sv-SE',
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

export async function generateStaticParams() {
  return [{ lang: 'sv' }, { lang: 'en' }]
}

export default function RootLayout({ children, params }) {
  return (
    <html
      lang={params.lang}
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="flex h-full flex-col bg-zinc-50">
        <Providers>
          <div className="flex min-h-full flex-col">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
