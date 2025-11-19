import type { Metadata } from 'next'
import { Award, Users, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Despre noi - A.V Auto Service',
  description: 'A.V Auto Service - Service auto profesional în Pantelimon cu experiență, profesionalism și garanție 6 luni. Echipa noastră de mecanicieni experimentați oferă servicii complete de diagnosticare și reparații auto.',
  openGraph: {
    title: 'Despre noi - A.V Auto Service',
    description: 'A.V Auto Service - Service auto profesional în Pantelimon cu experiență și profesionalism.',
  },
}

export default function DesprePage() {
  return (
    <div className="pt-20 pb-20">
      <section className="bg-light/5 py-12 border-b border-secondary/20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Despre A.V Auto Service
          </h1>
          <p className="text-secondary text-lg max-w-3xl">
            Service auto profesional în Pantelimon, dedicat oferirii serviciilor de cea mai bună calitate pentru vehiculele clienților noștri.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-light mb-6">Misiunea noastră</h2>
              <div className="space-y-4 text-secondary">
                <p>
                  A.V Auto Service este un service auto profesional situat în Pantelimon, dedicat 
                  oferirii serviciilor de cea mai bună calitate pentru vehiculele clienților noștri. 
                  Cu o experiență solidă în domeniul auto, ne propunem să oferim soluții complete 
                  pentru toate nevoile de diagnosticare, reparații și întreținere auto.
                </p>
                <p>
                  Echipa noastră de mecanicieni experimentați folosește echipamente moderne și 
                  tehnologii de ultimă generație pentru a identifica și rezolva orice problemă 
                  mecanică sau electronică. Ne mândrim cu profesionalismul, transparența și 
                  atenția la detalii în fiecare lucrare pe care o executăm.
                </p>
              </div>
            </div>
            <div className="bg-light/5 border border-secondary/20 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-light mb-6">De ce să ne alegi?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Award className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-light font-semibold mb-1">Experiență și profesionalism</h4>
                    <p className="text-secondary text-sm">
                      Ani de experiență în domeniul auto și echipă de mecanicieni calificați
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-light font-semibold mb-1">Garanție 6 luni</h4>
                    <p className="text-secondary text-sm">
                      Oferim garanție pentru toate lucrările efectuate
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-light font-semibold mb-1">Transparență totală</h4>
                    <p className="text-secondary text-sm">
                      Informăm clienții despre toate lucrările necesare și prețuri clare
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-light font-semibold mb-1">Servicii rapide</h4>
                    <p className="text-secondary text-sm">
                      Efectuăm lucrările în timpul promis, fără întârzieri
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light/5 border border-secondary/20 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-light mb-6">Valorile noastre</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-light mb-3">Calitate</h3>
                <p className="text-secondary">
                  Folosim doar piese originale sau compatibile de înaltă calitate și echipamente moderne pentru a asigura rezultate optime.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-light mb-3">Încredere</h3>
                <p className="text-secondary">
                  Construim relații de încredere cu clienții noștri prin transparență, profesionalism și servicii de calitate.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-light mb-3">Excelență</h3>
                <p className="text-secondary">
                  Ne străduim să oferim servicii de excelență în fiecare lucrare, de la diagnosticare la predarea finală.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

