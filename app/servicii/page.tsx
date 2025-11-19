import type { Metadata } from 'next'
import Link from 'next/link'
import { Wrench, Gauge, Droplet, CircleDot, Zap, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servicii - A.V Auto Service',
  description: 'Servicii complete de diagnosticare, reparații mecanice, revizii, schimb ulei, frâne, suspensie și instalații electrice. Service auto profesional în Pantelimon.',
  openGraph: {
    title: 'Servicii - A.V Auto Service',
    description: 'Servicii complete de diagnosticare, reparații mecanice, revizii și întreținere auto.',
  },
}

const services = [
  {
    icon: Gauge,
    title: 'Diagnoză',
    description: 'Diagnosticare electronică completă pentru identificarea precisă a problemelor vehiculului tău. Folosim echipamente moderne și software specializat pentru a detecta orice defecțiune în sistemele electronice, motor, transmisie și alte componente.',
    href: '/servicii/diagnoza',
    features: ['Diagnosticare electronică', 'Scanare erori', 'Testare sisteme', 'Raport detaliat'],
  },
  {
    icon: Wrench,
    title: 'Mecanică generală',
    description: 'Reparații mecanice complete pentru toate mărcile și modelele de autovehicule. Echipa noastră de mecanicieni experimentați poate rezolva orice problemă mecanică, de la reparații simple la intervenții complexe.',
    href: '/servicii/mecanica-generala',
    features: ['Reparații motor', 'Transmisie', 'Sistem de răcire', 'Distribuție'],
  },
  {
    icon: Droplet,
    title: 'Revizii & Schimb ulei',
    description: 'Servicii de întreținere regulată și schimb ulei pentru menținerea performanței și longevității vehiculului. Folosim uleiuri de calitate și filtre originale sau compatibile.',
    href: '/servicii/revizii-schimb-ulei',
    features: ['Schimb ulei', 'Schimb filtre', 'Verificare nivel lichide', 'Inspectare generală'],
  },
  {
    icon: CircleDot,
    title: 'EXPRES: Frâne & Suspensie',
    description: 'Reparații rapide pentru sistemul de frânare și suspensie cu piese de calitate. Oferim servicii expres pentru probleme urgente de siguranță.',
    href: '/servicii/frane-suspensie',
    features: ['Schimb plăcuțe frâne', 'Schimb discuri', 'Reparații suspensie', 'Alineare roți'],
  },
  {
    icon: Zap,
    title: 'Instalări electrice',
    description: 'Diagnosticare și reparații pentru sistemele electrice și electronice auto. Rezolvăm probleme de baterie, alternator, demaror și alte componente electrice.',
    href: '/servicii/instalatii-electrice',
    features: ['Reparații baterie', 'Alternator', 'Demaror', 'Instalații electrice'],
  },
  {
    icon: Settings,
    title: 'Alte servicii',
    description: 'Schimb filtre, climatizare, geamuri, și multe alte servicii complete pentru întreținerea completă a vehiculului tău.',
    href: '/servicii',
    features: ['Climatizare', 'Geamuri', 'Filtre', 'Consultanță'],
  },
]

export default function ServiciiPage() {
  return (
    <div className="pt-20 pb-20">
      <section className="bg-light/5 py-12 border-b border-secondary/20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Serviciile noastre
          </h1>
          <p className="text-secondary text-lg max-w-3xl">
            Oferim o gamă completă de servicii auto profesionale pentru toate nevoile vehiculului tău. 
            Fiecare serviciu este executat cu precizie și profesionalism, folosind piese de calitate și echipamente moderne.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-light/5 border border-secondary/20 rounded-lg p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-4">
                    <div className="bg-accent/10 p-3 rounded-lg inline-block">
                      <Icon className="text-accent" size={32} />
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold text-light mb-3">{service.title}</h2>
                  <p className="text-secondary mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-secondary text-sm flex items-center">
                        <span className="text-accent mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="text-accent font-medium hover:underline inline-flex items-center"
                  >
                    Află mai multe →
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-light/5">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-light mb-4">
            Ai nevoie de un serviciu personalizat?
          </h2>
          <p className="text-secondary mb-6">
            Contactează-ne pentru o consultanță gratuită și un devis personalizat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0774608362"
              className="btn-primary"
            >
              Sună acum: 0774608362
            </a>
            <Link href="/contact" className="btn-secondary">
              Trimite mesaj
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

