import type { Metadata } from 'next'
import Link from 'next/link'
import { Droplet, CheckCircle, Clock, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revizii & Schimb Ulei - A.V Auto Service',
  description: 'Servicii de întreținere regulată și schimb ulei în Pantelimon. Schimb filtre, verificare nivel lichide, inspectare generală. Menține vehiculul tău în condiții optime.',
  openGraph: {
    title: 'Revizii & Schimb Ulei - A.V Auto Service',
    description: 'Servicii de întreținere regulată și schimb ulei pentru menținerea performanței vehiculului.',
  },
}

export default function ReviziiSchimbUleiPage() {
  return (
    <div className="pt-20 pb-20">
      <section className="bg-light/5 py-12 border-b border-secondary/20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Revizii & Schimb ulei
          </h1>
          <p className="text-secondary text-lg max-w-3xl">
            Servicii de întreținere regulată și schimb ulei pentru menținerea performanței și longevității vehiculului tău.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-light mb-6">Ce include serviciul</h2>
              <div className="space-y-6 text-secondary">
                <p>
                  Întreținerea regulată a vehiculului este esențială pentru menținerea performanței, 
                  siguranței și longevității acestuia. Oferim servicii complete de revizie care includ 
                  schimb ulei, filtre și verificări generale.
                </p>
                <p>
                  Folosim uleiuri de calitate și filtre originale sau compatibile pentru a asigura 
                  protecția optimă a motorului și a sistemelor vehiculului tău.
                </p>
                <h3 className="text-xl font-semibold text-light mt-8 mb-4">Servicii incluse:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Schimb ulei motor (uleiuri de calitate premium)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Schimb filtru ulei</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Schimb filtru aer (dacă este necesar)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Schimb filtru habitaclu (dacă este necesar)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Verificare nivel lichide (răcire, frâne, direcție)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Inspectare generală a vehiculului</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-light/5 border border-secondary/20 rounded-lg p-6">
                <Clock className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-semibold text-light mb-2">Timp estimat</h3>
                <p className="text-secondary">30-45 minute</p>
              </div>

              <div className="bg-light/5 border border-secondary/20 rounded-lg p-6">
                <DollarSign className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-semibold text-light mb-2">Preț indicativ</h3>
                <p className="text-secondary">De la 200 RON</p>
                <p className="text-secondary text-sm mt-2">*Prețul depinde de tipul uleiului și filtre</p>
              </div>

              <div className="bg-accent/10 border border-accent/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-light mb-4">Programează-te acum</h3>
                <p className="text-secondary text-sm mb-4">
                  Contactează-ne pentru o programare sau pentru mai multe informații
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:0774608362"
                    className="btn-primary w-full text-center block"
                  >
                    Sună: 0774608362
                  </a>
                  <Link
                    href="/contact"
                    className="btn-secondary w-full text-center block"
                  >
                    Trimite mesaj
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

