'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Ion Popescu',
    rating: 5,
    text: 'Serviciu excelent! Am reparat frânele la mașină și totul a fost perfect. Personalul este foarte profesionist și prețurile sunt corecte. Recomand cu încredere!',
    car: 'Volkswagen Golf',
  },
  {
    id: 2,
    name: 'Maria Ionescu',
    rating: 5,
    text: 'Am fost foarte mulțumită de serviciile oferite. Diagnosticarea a fost rapidă și precisă, iar reparația a fost efectuată în timpul promis. Mulțumesc!',
    car: 'Dacia Logan',
  },
  {
    id: 3,
    name: 'Alexandru Georgescu',
    rating: 5,
    text: 'Cel mai bun service din zonă! Am revenit de mai multe ori și de fiecare dată am fost impresionat de profesionalism și calitatea lucrărilor.',
    car: 'Ford Focus',
  },
  {
    id: 4,
    name: 'Elena Radu',
    rating: 5,
    text: 'Servicii de înaltă calitate la prețuri accesibile. Personalul este prietenos și explică totul în detaliu. Garanția oferită îmi dă încredere.',
    car: 'Renault Clio',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Ce spun clienții noștri
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Părerile clienților noștri despre serviciile oferite
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-light/5 border border-secondary/20 rounded-lg p-8 md:p-12">
            <Quote className="text-accent/20 absolute top-4 left-4" size={48} />

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-accent fill-accent"
                    size={20}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-light text-lg md:text-xl text-center mb-6 italic">
                "{currentTestimonial.text}"
              </p>

              {/* Author Info */}
              <div className="text-center">
                <p className="text-light font-semibold">{currentTestimonial.name}</p>
                <p className="text-secondary text-sm">{currentTestimonial.car}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                aria-label="Testimonial anterior"
              >
                <ChevronLeft className="text-accent" size={24} />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-accent w-8' : 'bg-secondary/50'
                    }`}
                    aria-label={`Testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                aria-label="Testimonial următor"
              >
                <ChevronRight className="text-accent" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

