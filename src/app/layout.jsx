import { Providers } from '@/app/providers'
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
  metadataBase: new URL('https://www.teoricentralen.se'),
  alternates: {
    canonical: '/',
    languages: {
      'sv-SE': '/sv-SE',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="sv-SE" className="h-full antialiased" suppressHydrationWarning>
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
