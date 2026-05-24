'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle, Loader2 } from 'lucide-react'
import { submitReservation, type ReservationData } from '@/app/actions/reservation'
import SectionHeader from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'

const TIME_SLOTS = [
  '13:00', '13:30', '14:00', '14:30', '15:00',
  '20:00', '20:30', '21:00', '21:30', '22:00',
]

const inputClass =
  'w-full rounded-sm border border-white/10 bg-deep-black px-4 py-3 font-inter text-sm text-cream placeholder-cream/30 outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold/30'

export default function Reservations() {
  const [form, setForm] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    notes: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    const result = await submitReservation(form)
    setMessage(result.message)
    setStatus(result.success ? 'success' : 'error')
  }

  return (
    <section id="reservas" className="bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Reservas"
          title="Reserve su Mesa"
          subtitle="Garantice su experiencia en Solana. Para grupos de más de 10 personas, contáctenos directamente."
        />

        <div className="grid grid-cols-1 overflow-hidden rounded-xl lg:grid-cols-2">
          {/* Image side */}
          <div className="relative hidden min-h-[500px] lg:block">
            <Image
              src="https://images.unsplash.com/photo-1543826173-1beeb97525d8?w=1200&q=80"
              alt="Mesa preparada en Solana"
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal/80" />
            <div className="absolute bottom-10 left-8 right-8">
              <p className="font-playfair text-2xl italic text-cream">
                &quot;La mejor mesa de Madrid espera por usted&quot;
              </p>
              <div className="mt-3 h-px w-16 bg-gold" />
            </div>
          </div>

          {/* Form side */}
          <div className="bg-deep-black p-8 md:p-10">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center text-center"
              >
                <CheckCircle size={56} className="mb-6 text-gold" />
                <h3 className="font-playfair text-2xl text-cream">¡Reserva Confirmada!</h3>
                <p className="mt-4 font-inter text-sm text-cream/60">{message}</p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: '' }) }}
                  className="mt-8 rounded-sm border border-gold px-6 py-2 font-inter text-xs uppercase tracking-widest text-gold hover:bg-gold hover:text-deep-black transition-all"
                >
                  Nueva Reserva
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-inter text-xs uppercase tracking-widest text-cream/50">
                      Nombre *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Juan García"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-inter text-xs uppercase tracking-widest text-cream/50">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="juan@email.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-inter text-xs uppercase tracking-widest text-cream/50">
                      Teléfono
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-inter text-xs uppercase tracking-widest text-cream/50">
                      Personas *
                    </label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      required
                      className={cn(inputClass, 'cursor-pointer')}
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n} className="bg-deep-black">
                          {n} {n === 1 ? 'persona' : 'personas'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-inter text-xs uppercase tracking-widest text-cream/50">
                      Fecha *
                    </label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className={cn(inputClass, '[color-scheme:dark]')}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-inter text-xs uppercase tracking-widest text-cream/50">
                      Hora *
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className={cn(inputClass, 'cursor-pointer')}
                    >
                      <option value="" className="bg-deep-black">Seleccionar hora</option>
                      <optgroup label="Comida" className="bg-deep-black">
                        {TIME_SLOTS.slice(0, 5).map((t) => (
                          <option key={t} value={t} className="bg-deep-black">{t}h</option>
                        ))}
                      </optgroup>
                      <optgroup label="Cena" className="bg-deep-black">
                        {TIME_SLOTS.slice(5).map((t) => (
                          <option key={t} value={t} className="bg-deep-black">{t}h</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block font-inter text-xs uppercase tracking-widest text-cream/50">
                    Notas especiales
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Alergias, ocasión especial, preferencias de mesa..."
                    className={cn(inputClass, 'resize-none')}
                  />
                </div>

                {status === 'error' && (
                  <p className="font-inter text-sm text-red-400">{message}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex w-full items-center justify-center gap-3 rounded-sm bg-gold py-4 font-inter text-sm uppercase tracking-widest text-deep-black transition-all hover:bg-gold-light disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Confirmando...
                    </>
                  ) : (
                    'Confirmar Reserva'
                  )}
                </button>

                <p className="text-center font-inter text-xs text-cream/30">
                  También puede llamarnos al{' '}
                  <a href="tel:+34911234567" className="text-gold hover:underline">
                    +34 91 123 45 67
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
