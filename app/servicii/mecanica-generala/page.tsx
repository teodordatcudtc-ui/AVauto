import type { Metadata } from 'next'
import Link from 'next/link'
import { Wrench, CheckCircle, Clock, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mecanică Generală - A.V Auto Service',
  description: 'Reparații mecanice complete pentru toate mărcile și modelele de autovehicule. Motor, transmisie, sistem de răcire, distribuție. Service auto profesional în Pantelimon.',
  openGraph: {
    title: 'Mecanică Generală - A.V Auto Service',
    description: 'Reparații mecanice complete pentru toate mărcile și modelele de autovehicule.',
  },
}

export default function MecanicaGeneralaPage() {
  return (
    <div className="pt-20 pb-20">
      <section className="bg-light/5 py-12 border-b border-secondary/20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Mecanică generală
          </h1>
          <p className="text-secondary text-lg max-w-3xl">
            Reparații mecanice complete pentru toate mărcile și modelele de autovehicule.
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
                  Echipa noastră de mecanicieni experimentați poate rezolva orice problemă mecanică, 
                  de la reparații simple la intervenții complexe. Oferim servicii complete pentru 
                  motor, transmisie, sistem de răcire, distribuție și multe altele.
                </p>
                <h3 className="text-xl font-semibold text-light mt-8 mb-4">Servicii oferite:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Reparații motor (pistoane, segmenți, chiulase)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Reparații transmisie (cutie de viteze, ambreiaj)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Sistem de răcire (schimb termostat, pompe apă)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Distribuție (curele, lanțuri, role)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Reparații sistem de admisie și evacuare</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Reparații generale și mentenanță preventivă</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-light/5 border border-secondary/20 rounded-lg p-6">
                <Clock className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-semibold text-light mb-2">Timp estimat</h3>
                <p className="text-secondary">2-8 ore</p>
                <p className="text-secondary text-sm mt-2">*În funcție de complexitatea reparației</p>
              </div>

              <div className="bg-light/5 border border-secondary/20 rounded-lg p-6">
                <DollarSign className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-semibold text-light mb-2">Preț indicativ</h3>
                <p className="text-secondary">De la 300 RON</p>
                <p className="text-secondary text-sm mt-2">*Prețul depinde de tipul reparației și piese</p>
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

