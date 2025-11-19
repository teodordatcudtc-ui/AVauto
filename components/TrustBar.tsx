import { Shield, Award, CheckCircle } from 'lucide-react'

const trustItems = [
  {
    icon: Shield,
    title: 'Garanție 6 luni',
    description: 'Pe toate lucrările efectuate',
  },
  {
    icon: Award,
    title: 'Diagnosticare profesională',
    description: 'Echipament modern și personal calificat',
  },
  {
    icon: CheckCircle,
    title: 'Piese originale sau compatibile',
    description: 'Calitate garantată pentru fiecare reparație',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-gray-900/50 py-12 border-y border-secondary/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex items-start space-x-4 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Icon className="text-accent" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-light font-semibold mb-1">{item.title}</h3>
                  <p className="text-secondary text-sm">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

