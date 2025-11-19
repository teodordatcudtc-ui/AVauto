import Link from 'next/link'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: 'Acasă' },
    { href: '/servicii', label: 'Servicii' },
    { href: '/despre', label: 'Despre noi' },
    { href: '/tarife', label: 'Tarife' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
  ]

  const legalLinks = [
    { href: '/politica-confidentialitate', label: 'Politică de confidențialitate' },
    { href: '/termeni-conditii', label: 'Termeni și condiții' },
  ]

  return (
    <footer className="bg-gray-900 border-t border-secondary/20 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-light mb-4">A.V Auto Service</h3>
            <p className="text-secondary text-sm mb-4">
              Service auto profesional în Pantelimon. Oferim servicii complete de diagnosticare, reparații și întreținere auto.
            </p>
            <a
              href="tel:0774608362"
              className="btn-primary inline-flex items-center space-x-2 ripple"
            >
              <Phone size={18} />
              <span>Sună acum</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-light mb-4">Linkuri rapide</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-light mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-accent mt-1 flex-shrink-0" />
                <a href="tel:0774608362" className="text-secondary hover:text-accent transition-colors">
                  0774608362
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-secondary">
                  Strada Sfântul Gheorghe 20<br />
                  Pantelimon 077145
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-secondary">
                  Luni - Vineri: 08:00 - 18:00<br />
                  Sâmbătă: 09:00 - 14:00<br />
                  Duminică: Închis
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-light mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/20 mt-8 pt-8 text-center">
          <p className="text-secondary text-sm">
            © {currentYear} A.V Auto Service. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  )
}

