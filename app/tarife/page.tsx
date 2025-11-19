import type { Metadata } from 'next'
import Link from 'next/link'
import { DollarSign, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tarife - A.V Auto Service',
  description: 'Ghid de prețuri pentru serviciile auto oferite de A.V Auto Service în Pantelimon. Prețuri transparente pentru diagnosticare, reparații, revizii și alte servicii auto.',
  openGraph: {
    title: 'Tarife - A.V Auto Service',
    description: 'Ghid de prețuri transparente pentru serviciile auto oferite.',
  },
}

const pricing = [
  {
    category: 'Diagnosticare',
    services: [
      { name: 'Diagnosticare electronică completă', price: '150 - 300 RON' },
      { name: 'Scanare erori', price: '100 - 200 RON' },
      { name: 'Testare sisteme', price: '80 - 150 RON' },
    ],
  },
  {
    category: 'Revizii & Întreținere',
    services: [
      { name: 'Schimb ulei + filtru ulei', price: '200 - 400 RON' },
      { name: 'Schimb filtru aer', price: '50 - 100 RON' },
      { name: 'Schimb filtru habitaclu', price: '80 - 150 RON' },
      { name: 'Revizie completă', price: '300 - 600 RON' },
    ],
  },
  {
    category: 'Frâne & Suspensie',
    services: [
      { name: 'Schimb plăcuțe frâne (față)', price: '200 - 400 RON' },
      { name: 'Schimb plăcuțe frâne (spate)', price: '180 - 350 RON' },
      { name: 'Schimb discuri frâne', price: '400 - 800 RON' },
      { name: 'Schimb lichid frâne', price: '100 - 200 RON' },
      { name: 'Alineare roți (geometrie)', price: '150 - 250 RON' },
      { name: 'Echilibrare roți', price: '80 - 150 RON' },
    ],
  },
  {
    category: 'Mecanică Generală',
    services: [
      { name: 'Reparații motor', price: '300 - 2000 RON' },
      { name: 'Reparații transmisie', price: '500 - 3000 RON' },
      { name: 'Schimb distribuție', price: '800 - 2000 RON' },
      { name: 'Reparații sistem răcire', price: '200 - 800 RON' },
    ],
  },
  {
    category: 'Instalații Electrice',
    services: [
      { name: 'Schimb baterie', price: '300 - 800 RON' },
      { name: 'Reparații alternator', price: '400 - 1000 RON' },
      { name: 'Reparații demaror', price: '300 - 800 RON' },
      { name: 'Reparații instalații electrice', price: '150 - 500 RON' },
    ],
  },
]

export default function TarifePage() {
  return (
    <div className="pt-20 pb-20">
      <section className="bg-light/5 py-12 border-b border-secondary/20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Ghid de prețuri
          </h1>
          <p className="text-secondary text-lg max-w-3xl">
            Prețuri transparente pentru serviciile noastre. Prețurile pot varia în funcție de marca și modelul vehiculului, precum și de complexitatea lucrării.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-12">
            {pricing.map((category, index) => (
              <div key={index} className="bg-light/5 border border-secondary/20 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-light mb-6 flex items-center">
                  <DollarSign className="text-accent mr-3" size={28} />
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b border-secondary/10 last:border-0"
                    >
                      <span className="text-light font-medium mb-2 sm:mb-0">{service.name}</span>
                      <span className="text-accent font-semibold">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-accent/10 border border-accent/50 rounded-lg p-8">
            <div className="flex items-start space-x-4">
              <Info className="text-accent mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-light mb-3">Informații importante</h3>
                <ul className="space-y-2 text-secondary">
                  <li>• Prețurile sunt orientative și pot varia în funcție de marca și modelul vehiculului</li>
                  <li>• Prețurile nu includ piese (dacă nu este menționat altfel)</li>
                  <li>• Oferim devis gratuit pentru toate lucrările</li>
                  <li>• Pentru prețuri exacte, vă rugăm să ne contactați</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-light mb-4">
              Ai nevoie de un devis personalizat?
            </h2>
            <p className="text-secondary mb-6">
              Contactează-ne pentru o consultanță gratuită și un devis detaliat
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
        </div>
      </section>
    </div>
  )
}

