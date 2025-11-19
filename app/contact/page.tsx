'use client'

import { useState, FormEvent } from 'react'
import { Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          ...formData,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20 pb-20">
      <section className="bg-light/5 py-12 border-b border-secondary/20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Contactează-ne
          </h1>
          <p className="text-secondary text-lg max-w-3xl">
            Suntem aici să te ajutăm. Contactează-ne pentru programări, întrebări sau informații despre serviciile noastre.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-light mb-6">Informații de contact</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="text-accent mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-light font-semibold mb-1">Telefon</h3>
                      <a href="tel:0774608362" className="text-accent hover:underline">
                        0774608362
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-light font-semibold mb-1">Adresă</h3>
                      <p className="text-secondary">
                        Strada Sfântul Gheorghe 20<br />
                        Pantelimon 077145
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="text-accent mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-light font-semibold mb-1">Program</h3>
                      <p className="text-secondary">
                        Luni - Vineri: 08:00 - 18:00<br />
                        Sâmbătă: 09:00 - 14:00<br />
                        Duminică: Închis
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-light/5 border border-secondary/20 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9857.863945973888!2d26.206628783422122!3d44.46746048256181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f99df8ad76e7%3A0xdecc1597c5461a6c!2sA.V%20Auto%20Service!5e0!3m2!1sen!2sro!4v1763579208774!5m2!1sen!2sro"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-light mb-6">Trimite un mesaj</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-400">
                    Mesajul a fost trimis cu succes! Vă vom răspunde în cel mai scurt timp.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-400">
                    A apărut o eroare. Vă rugăm să încercați din nou sau să ne sunați direct.
                  </div>
                )}

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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-light font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-light/5 border border-secondary/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent"
                      placeholder="ion@example.com"
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
                </div>

                <div>
                  <label htmlFor="subject" className="block text-light font-medium mb-2">
                    Subiect *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-light/5 border border-secondary/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent"
                  >
                    <option value="">Selectează subiectul</option>
                    <option value="programare">Programare</option>
                    <option value="intrebare">Întrebare</option>
                    <option value="devis">Devis</option>
                    <option value="altul">Altul</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-light font-medium mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-light/5 border border-secondary/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent resize-none"
                    placeholder="Scrie mesajul tău aici..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? 'Se trimite...' : 'Trimite mesajul'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

