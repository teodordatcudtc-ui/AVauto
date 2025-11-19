import type { Metadata } from 'next'
import Link from 'next/link'
import { Gauge, CheckCircle, Clock, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Diagnoză Auto - A.V Auto Service',
  description: 'Servicii de diagnosticare electronică auto în Pantelimon. Scanare erori, testare sisteme, identificare probleme cu echipamente moderne. Diagnosticare profesională pentru toate mărcile.',
  openGraph: {
    title: 'Diagnoză Auto - A.V Auto Service',
    description: 'Servicii de diagnosticare electronică auto profesionale în Pantelimon.',
  },
}

export default function DiagnozaPage() {
  return (
    <div className="pt-20 pb-20">
      <section className="bg-light/5 py-12 border-b border-secondary/20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Diagnosticare electronică auto
          </h1>
          <p className="text-secondary text-lg max-w-3xl">
            Diagnosticare profesională cu echipamente moderne pentru identificarea precisă a problemelor vehiculului tău.
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
                  Diagnosticarea electronică este primul pas esențial în identificarea și rezolvarea problemelor 
                  vehiculului tău. Folosim echipamente moderne de scanare și software specializat pentru a 
                  detecta orice defecțiune în sistemele electronice, motor, transmisie și alte componente.
                </p>
                <p>
                  Serviciul nostru de diagnosticare include scanarea completă a tuturor sistemelor, identificarea 
                  codurilor de eroare, testarea componentelor și generarea unui raport detaliat cu toate 
                  problemele identificate și recomandările de reparație.
                </p>
                <h3 className="text-xl font-semibold text-light mt-8 mb-4">Procesul de diagnosticare:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Conectare la sistemul electronic al vehiculului</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Scanare completă a tuturor modulelor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Identificare și analiză coduri de eroare</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Testare funcțională a componentelor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Raport detaliat cu recomandări</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-light/5 border border-secondary/20 rounded-lg p-6">
                <Clock className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-semibold text-light mb-2">Timp estimat</h3>
                <p className="text-secondary">30-60 minute</p>
              </div>

              <div className="bg-light/5 border border-secondary/20 rounded-lg p-6">
                <DollarSign className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-semibold text-light mb-2">Preț indicativ</h3>
                <p className="text-secondary">De la 150 RON</p>
                <p className="text-secondary text-sm mt-2">*Prețul poate varia în funcție de complexitate</p>
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

