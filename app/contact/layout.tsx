import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - A.V Auto Service',
  description: 'Contactează A.V Auto Service în Pantelimon. Telefon: 0774608362, Adresă: Strada Sfântul Gheorghe 20, Pantelimon 077145. Program: Luni-Vineri 08:00-18:00.',
  openGraph: {
    title: 'Contact - A.V Auto Service',
    description: 'Contactează A.V Auto Service în Pantelimon pentru servicii auto profesionale.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

