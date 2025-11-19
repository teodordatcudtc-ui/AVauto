'use client'

import Link from 'next/link'
import { Wrench, Gauge, Droplet, CircleDot, Zap, Settings } from 'lucide-react'

const services = [
  {
    icon: Gauge,
    title: 'Diagnoză',
    description: 'Diagnosticare electronică completă pentru identificarea precisă a problemelor',
    href: '/servicii/diagnoza',
  },
  {
    icon: Wrench,
    title: 'Mecanică generală',
    description: 'Reparații mecanice complete pentru toate mărcile și modelele de autovehicule',
    href: '/servicii/mecanica-generala',
  },
  {
    icon: Droplet,
    title: 'Revizii & Schimb ulei',
    description: 'Servicii de întreținere regulată și schimb ulei pentru menținerea performanței',
    href: '/servicii/revizii-schimb-ulei',
  },
  {
    icon: CircleDot,
    title: 'EXPRES: Frâne & Suspensie',
    description: 'Reparații rapide pentru sistemul de frânare și suspensie cu piese de calitate',
    href: '/servicii/frane-suspensie',
  },
  {
    icon: Zap,
    title: 'Instalări electrice',
    description: 'Diagnosticare și reparații pentru sistemele electrice și electronice auto',
    href: '/servicii/instalatii-electrice',
  },
  {
    icon: Settings,
    title: 'Alte servicii',
    description: 'Schimb filtre, climatizare, geamuri, și multe alte servicii complete',
    href: '/servicii',
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Serviciile noastre
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Oferim o gamă completă de servicii auto profesionale pentru toate nevoile vehiculului tău
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href={service.href}
                className="group bg-light/5 border border-secondary/20 rounded-lg p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg inline-block group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-light mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary text-sm">{service.description}</p>
                <div className="mt-4 text-accent font-medium text-sm group-hover:translate-x-2 transition-transform inline-block">
                  Află mai multe →
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

