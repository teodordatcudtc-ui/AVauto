'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { href: '/', label: 'Acasă' },
    { href: '/servicii', label: 'Servicii' },
    { href: '/despre', label: 'Despre noi' },
    { href: '/tarife', label: 'Tarife' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-sm shadow-lg' : 'bg-dark'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" aria-label="A.V Auto Service - Acasă">
            <Logo />
            <span className="text-xl font-bold text-light">A.V Auto Service</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary hover:text-accent transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:0774608362"
              className="btn-primary flex items-center space-x-2 ripple"
              aria-label="Sună acum la 0774608362"
            >
              <Phone size={18} />
              <span>0774608362</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-light p-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-secondary hover:text-accent transition-colors duration-200 font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:0774608362"
                className="btn-primary flex items-center justify-center space-x-2 ripple mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} />
                <span>Sună acum</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

