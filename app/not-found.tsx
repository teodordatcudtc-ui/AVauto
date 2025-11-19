'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="container-custom text-center">
        <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-light mb-6">
          Pagina nu a fost găsită
        </h2>
        <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto">
          Ne pare rău, dar pagina pe care o cauți nu există sau a fost mutată. 
          Te rugăm să verifici adresa sau să revii la pagina principală.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex items-center justify-center space-x-2">
            <Home size={20} />
            <span>Acasă</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary inline-flex items-center justify-center space-x-2"
          >
            <ArrowLeft size={20} />
            <span>Înapoi</span>
          </button>
        </div>
      </div>
    </div>
  )
}

