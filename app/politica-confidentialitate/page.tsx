import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politică de confidențialitate - A.V Auto Service',
  description: 'Politica de confidențialitate a A.V Auto Service. Informații despre colectarea, utilizarea și protejarea datelor personale.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PoliticaConfidentialitatePage() {
  return (
    <div className="pt-20 pb-20">
      <section className="bg-light/5 py-12 border-b border-secondary/20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Politică de confidențialitate
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
                A.V Auto Service respectă confidențialitatea vizitatorilor site-ului nostru și se angajează să protejeze 
                datele personale colectate în conformitate cu legislația în vigoare privind protecția datelor personale.
              </p>

              <h2 className="text-2xl font-bold text-light mt-8 mb-4">2. Datele colectate</h2>
              <p>
                Colectăm date personale doar când este necesar pentru furnizarea serviciilor noastre, cum ar fi numele, 
                numărul de telefon, adresa de email și informații despre vehicul, atunci când completezi formularul de 
                programare sau contact.
              </p>

              <h2 className="text-2xl font-bold text-light mt-8 mb-4">3. Utilizarea datelor</h2>
              <p>
                Datele personale colectate sunt utilizate exclusiv pentru procesarea programărilor, comunicarea cu 
                clienții și îmbunătățirea serviciilor noastre. Nu vindem sau partajăm datele tale cu terți fără 
                consimțământul tău explicit.
              </p>

              <h2 className="text-2xl font-bold text-light mt-8 mb-4">4. Securitatea datelor</h2>
              <p>
                Implementăm măsuri de securitate tehnice și organizatorice pentru a proteja datele tale personale împotriva 
                accesului neautorizat, pierderii sau distrugerii.
              </p>

              <h2 className="text-2xl font-bold text-light mt-8 mb-4">5. Drepturile tale</h2>
              <p>
                Ai dreptul de a accesa, rectifica, șterge sau restricționa prelucrarea datelor tale personale. Pentru 
                exercitarea acestor drepturi, ne poți contacta la 0774608362 sau prin formularul de contact de pe site.
              </p>

              <h2 className="text-2xl font-bold text-light mt-8 mb-4">6. Contact</h2>
              <p>
                Pentru întrebări despre politica noastră de confidențialitate, ne poți contacta la:
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

