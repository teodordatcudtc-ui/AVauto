import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Întrebări frecvente - A.V Auto Service',
  description: 'Răspunsuri la întrebările frecvente despre serviciile A.V Auto Service. Informații despre programări, garanții, prețuri și servicii oferite.',
  openGraph: {
    title: 'FAQ - Întrebări frecvente - A.V Auto Service',
    description: 'Răspunsuri la întrebările frecvente despre serviciile noastre.',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

