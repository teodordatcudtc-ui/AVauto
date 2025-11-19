'use client'

import { Calendar, Search, Wrench, CheckCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    icon: Calendar,
    title: 'Programare',
    description: 'Contactează-ne telefonic sau online pentru a programa o vizită',
  },
  {
    icon: Search,
    title: 'Diagnostic',
    description: 'Efectuăm o diagnosticare completă pentru a identifica problema',
  },
  {
    icon: Wrench,
    title: 'Execuție',
    description: 'Reparăm sau înlocuim componentele necesare cu piese de calitate',
  },
  {
    icon: CheckCircle,
    title: 'Predare',
    description: 'Predăm vehiculul curățat, testat și cu garanție pentru lucrările efectuate',
  },
]

export default function ProcessTimeline() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-gray-800/40">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Cum lucrăm
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Procesul nostru simplu și transparent în 4 pași
          </p>
        </div>

        <div ref={sectionRef} className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-secondary/20 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isVisible = visibleSteps.includes(index)
              return (
                <div
                  key={index}
                  className={`relative text-center ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } transition-all duration-600`}
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-accent/10 p-4 rounded-full mb-4 relative z-10 group-hover:bg-accent/20 transition-colors">
                      <Icon className="text-accent" size={32} />
                    </div>
                    <div className="bg-light/5 border border-secondary/20 rounded-lg p-6 min-h-[180px]">
                      <div className="text-accent font-bold text-2xl mb-2">{index + 1}</div>
                      <h3 className="text-xl font-semibold text-light mb-2">{step.title}</h3>
                      <p className="text-secondary text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

