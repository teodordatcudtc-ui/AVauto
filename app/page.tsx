import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ServicesGrid from '@/components/ServicesGrid'
import ProcessTimeline from '@/components/ProcessTimeline'
import Testimonials from '@/components/Testimonials'
import Partners from '@/components/Partners'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'A.V Auto Service - Service Auto Profesional în Pantelimon',
  description: 'Service auto profesional în Pantelimon. Oferim diagnosticare electronică, reparații mecanice, revizii, schimb ulei, reparații frâne și suspensie. Garanție 6 luni. Programează-te acum la 0774608362!',
  openGraph: {
    title: 'A.V Auto Service - Service Auto Profesional în Pantelimon',
    description: 'Service auto profesional în Pantelimon. Diagnosticare, reparații, revizii și schimb ulei. Garanție 6 luni.',
    url: 'https://av-auto-service.ro',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <ProcessTimeline />
      <Testimonials />
      <Partners />
      <CTASection />
    </>
  )
}

