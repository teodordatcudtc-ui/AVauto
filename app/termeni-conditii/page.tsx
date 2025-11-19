import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termeni și condiții - A.V Auto Service',
  description: 'Termenii și condițiile de utilizare a serviciilor A.V Auto Service. Regulile, responsabilitățile și condițiile generale.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function TermeniConditiiPage() {
  return (
    <div className="pt-20 pb-20">
      <section className="bg-light/5 py-12 border-b border-secondary/20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Termeni și condiții
          </h1>
          <p className="text-secondary text-lg">
            Ultima actualizare: ianuarie 2024
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <div className="text-secondary space-y-6 text-lg">
              <h2 className="text-2xl font-bold text-light mt-8 mb-4">1. Introducere</h2>
              <p>
                Prin utilizarea serviciilor A.V Auto Service, accepti termenii și condițiile prezentate mai jos. 
                Dacă nu ești de acord cu acești termeni, te rugăm să nu utilizezi serviciile noastre.
              </p>

              <h2 className="text-2xl font-bold text-light mt-8 mb-4">2. Servicii oferite</h2>
              <p>
                A.V Auto Service oferă servicii de diagnosticare, reparații și întreținere auto. Toate serviciile 
                sunt executate de personal calificat folosind echipamente și piese de calitate.
              </p>

              <h2 className="text-2xl font-bold text-light mt-8 mb-4">3. Garanție</h2>
              <p>
                Oferim garanție de 6 luni pentru toate lucrările efectuate. Garanția acoperă defectele de execuție 
                și problemele care apar din cauza lucrărilor efectuate, în condițiile specificate la predarea vehiculului.
              </p>

              <h2 className="text-2xl font-bold text-light mt-8 mb-4">4. Prețuri și plată</h2>
              <p>
                Prețurile pentru servicii sunt comunicate înainte de începerea lucrărilor. Oferim devis gratuit 
                pentru toate lucrările. Plățile se pot face în numerar sau cu cardul.
              </p>

              <h2 className="text-2xl font-bold text-light mt-8 mb-4">5. Responsabilități</h2>
              <p>
                Clientul este responsabil să furnizeze informații corecte despre vehicul și să permită accesul 
                necesar pentru efectuarea lucrărilor. A.V Auto Service nu este responsabil pentru daunele 
                preexistente sau pentru problemele care apar din cauza utilizării incorecte a vehiculului.
              </p>

              <h2 className="text-2xl font-bold text-light mt-8 mb-4">6. Contact</h2>
              <p>
                Pentru întrebări despre termenii și condițiile noastre, ne poți contacta la:
              </p>
              <p>
                A.V Auto Service<br />
                Strada Sfântul Gheorghe 20, Pantelimon 077145<br />
                Telefon: 0774608362
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

