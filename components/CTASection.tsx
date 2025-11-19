'use client'

import { useState } from 'react'
import { Phone, Calendar } from 'lucide-react'
import BookingModal from './BookingModal'

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ce0d14 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-light mb-6">
              Gata să începem?
            </h2>
            <p className="text-secondary text-lg mb-8">
              Programează-te acum pentru o diagnosticare gratuită sau contactează-ne pentru mai multe informații
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary flex items-center justify-center space-x-2 ripple"
              >
                <Calendar size={20} />
                <span>Programează-te</span>
              </button>
              <a
                href="tel:0774608362"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Sună acum: 0774608362</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}

