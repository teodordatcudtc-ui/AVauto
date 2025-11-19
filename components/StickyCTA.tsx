'use client'

import { Phone, MessageCircle } from 'lucide-react'

export default function StickyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="tel:0774608362"
        className="bg-accent text-white rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Sună acum la 0774608362"
      >
        <Phone size={24} />
      </a>
      <a
        href="https://wa.me/40774608362"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Contactează-ne pe WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  )
}

