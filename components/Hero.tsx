'use client'

import Link from 'next/link'
import BookingModal from './BookingModal'
import { useState } from 'react'
import { Shield, Award, Wrench } from 'lucide-react'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center bg-dark overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
            }}
          >
            <div className="absolute inset-0 bg-dark/90"></div>
          </div>
        </div>

        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ce0d14 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating circles */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 left-10 w-20 h-20 bg-accent/8 rounded-full blur-2xl animate-pulse md:hidden" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Decorative icons */}
          <div className="absolute top-32 right-32 hidden lg:block opacity-20">
            <Wrench size={60} className="text-accent rotate-12 animate-float" />
          </div>
          <div className="absolute bottom-32 left-32 hidden lg:block opacity-20">
            <Shield size={50} className="text-accent -rotate-12 animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="absolute top-1/3 left-20 hidden xl:block opacity-20">
            <Award size={45} className="text-accent rotate-45 animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <div className="inline-block mb-4">
                <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                  Service Auto Profesional
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-6 leading-tight">
                A.V Auto Service — Service auto profesional în{' '}
                <span className="text-accent">Pantelimon</span>
              </h1>
              <p className="text-secondary text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                Oferim servicii complete de diagnosticare electronică, reparații mecanice, revizii și întreținere auto. 
                <span className="hidden md:inline"> Experiență, profesionalism și garanție 6 luni pentru toate lucrările.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary ripple"
                >
                  Programează-te
                </button>
                <Link href="/servicii" className="btn-secondary">
                  Vezi servicii
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>

      {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}

