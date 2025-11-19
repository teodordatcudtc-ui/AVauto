import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import Preloader from '@/components/Preloader'

export const metadata: Metadata = {
  metadataBase: new URL('https://av-auto-service.ro'),
  title: {
    default: 'A.V Auto Service - Service Auto Profesional în Pantelimon',
    template: '%s | A.V Auto Service',
  },
  description: 'Service auto profesional în Pantelimon. Diagnosticare, reparații, revizii și schimb ulei. Garanție 6 luni. Programează-te acum!',
  keywords: ['service auto', 'auto service Pantelimon', 'reparații auto', 'diagnoză auto', 'schimb ulei', 'reparații frâne'],
  authors: [{ name: 'A.V Auto Service' }],
  creator: 'A.V Auto Service',
  publisher: 'A.V Auto Service',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://av-auto-service.ro',
    siteName: 'A.V Auto Service',
    title: 'A.V Auto Service - Service Auto Profesional în Pantelimon',
    description: 'Service auto profesional în Pantelimon. Diagnosticare, reparații, revizii și schimb ulei. Garanție 6 luni.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'A.V Auto Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A.V Auto Service - Service Auto Profesional în Pantelimon',
    description: 'Service auto profesional în Pantelimon. Diagnosticare, reparații, revizii și schimb ulei.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here when available
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#04090f" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>
        <Preloader />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoRepair',
              name: 'A.V Auto Service',
              image: 'https://av-auto-service.ro/og-image.jpg',
              '@id': 'https://av-auto-service.ro',
              url: 'https://av-auto-service.ro',
              telephone: '+40774608362',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Strada Sfântul Gheorghe 20',
                addressLocality: 'Pantelimon',
                postalCode: '077145',
                addressCountry: 'RO',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '44.46746048256181',
                longitude: '26.206628783422122',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: '08:00',
                closes: '18:00',
              },
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  )
}

