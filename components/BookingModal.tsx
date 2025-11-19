'use client'

import { useState, FormEvent } from 'react'
import { X, Calendar, Phone, Car, Wrench } from 'lucide-react'

interface BookingModalProps {
  onClose: () => void
}

export default function BookingModal({ onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    service: '',
    date: '',
    time: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save to localStorage as fallback
      const bookings = JSON.parse(localStorage.getItem('bookings') || '[]')
      bookings.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      })
      localStorage.setItem('bookings', JSON.stringify(bookings))

      // Send to API endpoint
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'booking',
          ...formData,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setTimeout(() => {
          onClose()
          setFormData({
            name: '',
            phone: '',
            carModel: '',
            service: '',
            date: '',
            time: '',
            message: '',
          })
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // Still show success if saved to localStorage
      setSubmitStatus('success')
      setTimeout(() => {
        onClose()
        setSubmitStatus('idle')
      }, 2000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-dark border border-secondary/20 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-dark border-b border-secondary/20 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-light">Programează-te</h2>
          <button
            onClick={onClose}
            className="text-secondary hover:text-light transition-colors"
            aria-label="Închide"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {submitStatus === 'success' && (
            <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-400">
              Programarea a fost trimisă cu succes! Vă vom contacta în curând.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-400">
              A apărut o eroare. Vă rugăm să încercați din nou sau să ne sunați direct.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-light font-medium mb-2">
                Nume complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-light/5 border border-secondary/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent"
                placeholder="Ion Popescu"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-light font-medium mb-2">
                Telefon *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-light/5 border border-secondary/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent"
                placeholder="0774608362"
              />
            </div>

            <div>
              <label htmlFor="carModel" className="block text-light font-medium mb-2">
                Model mașină *
              </label>
              <input
                type="text"
                id="carModel"
                name="carModel"
                required
                value={formData.carModel}
                onChange={handleChange}
                className="w-full bg-light/5 border border-secondary/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent"
                placeholder="Volkswagen Golf 7"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-light font-medium mb-2">
                Serviciu solicitat *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-light/5 border border-secondary/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent"
              >
                <option value="">Selectează serviciul</option>
                <option value="diagnoza">Diagnoză</option>
                <option value="mecanica">Mecanică generală</option>
                <option value="revizie">Revizie & Schimb ulei</option>
                <option value="frane">Frâne & Suspensie</option>
                <option value="electrice">Instalații electrice</option>
                <option value="altul">Altul</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-light font-medium mb-2">
                Dată preferată *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-light/5 border border-secondary/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-light font-medium mb-2">
                Ora preferată *
              </label>
              <input
                type="time"
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-light/5 border border-secondary/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-light font-medium mb-2">
              Mesaj (opțional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-light/5 border border-secondary/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent resize-none"
              placeholder="Descrieți problema sau adăugați detalii suplimentare..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex-1 flex items-center justify-center space-x-2"
            >
              <Calendar size={20} />
              <span>{isSubmitting ? 'Se trimite...' : 'Trimite programarea'}</span>
            </button>
            <a
              href="tel:0774608362"
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Sună acum</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

