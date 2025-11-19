'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Cum pot programa o vizită?',
    answer: 'Poți programa o vizită telefonic la 0774608362 sau folosind formularul de programare de pe site. Oferim programări flexibile pentru a se potrivi programului tău.',
  },
  {
    question: 'Ce garanție oferiți?',
    answer: 'Oferim garanție de 6 luni pentru toate lucrările efectuate. Garanția acoperă defectele de execuție și problemele care apar din cauza lucrărilor efectuate.',
  },
  {
    question: 'Cât timp durează o reparație?',
    answer: 'Timpul de reparație depinde de complexitatea lucrării. O revizie simplă durează 30-45 minute, în timp ce reparații mai complexe pot dura câteva ore sau chiar o zi. Vă informăm întotdeauna despre timpul estimat înainte de a începe lucrarea.',
  },
  {
    question: 'Folosiți piese originale sau compatibile?',
    answer: 'Lucrăm cu piese originale sau compatibile de înaltă calitate, în funcție de preferința și bugetul clientului. Vă informăm despre opțiunile disponibile și vă recomandăm cea mai bună soluție pentru cazul dumneavoastră.',
  },
  {
    question: 'Oferiți servicii de urgență?',
    answer: 'Da, oferim servicii expres pentru probleme urgente, în special pentru sistemul de frânare și alte componente critice de siguranță. Contactează-ne telefonic pentru a discuta despre situația ta.',
  },
  {
    question: 'Cum se calculează prețul unei reparații?',
    answer: 'Prețul include costul manoperei și, dacă este cazul, costul pieselor. Oferim devis gratuit pentru toate lucrările, astfel încât să știi exact ce costuri vei avea înainte de a începe lucrarea.',
  },
  {
    question: 'Lucrați cu toate mărcile de mașini?',
    answer: 'Da, lucrăm cu toate mărcile și modelele de autovehicule. Echipa noastră are experiență cu o gamă largă de vehicule, de la mașini mici la SUV-uri și vehicule comerciale.',
  },
  {
    question: 'Ce metode de plată acceptați?',
    answer: 'Acceptăm plăți în numerar și cu cardul. Pentru lucrări mai mari, discutăm opțiunile de plată disponibile.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="pt-20 pb-20">
      <section className="bg-light/5 py-12 border-b border-secondary/20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Întrebări frecvente
          </h1>
          <p className="text-secondary text-lg max-w-3xl">
            Răspunsuri la cele mai frecvente întrebări despre serviciile noastre și procesul de lucru.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-light/5 border border-secondary/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-light/10 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-light font-semibold text-lg pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-accent flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-accent flex-shrink-0" size={24} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-secondary animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-accent/10 border border-accent/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-light mb-4">
              Nu ai găsit răspunsul căutat?
            </h2>
            <p className="text-secondary mb-6">
              Contactează-ne și îți vom răspunde la orice întrebare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0774608362"
                className="btn-primary"
              >
                Sună acum: 0774608362
              </a>
              <a
                href="/contact"
                className="btn-secondary"
              >
                Trimite mesaj
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

