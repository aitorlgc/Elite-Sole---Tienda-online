'use client'

import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { staggerContainer, fadeUp } from '@/lib/animations'

const HOURS = [
  { day: 'Lunes', hours: 'Cerrado', closed: true },
  { day: 'Martes', hours: '13:00 – 16:00 / 20:00 – 23:30' },
  { day: 'Miércoles', hours: '13:00 – 16:00 / 20:00 – 23:30' },
  { day: 'Jueves', hours: '13:00 – 16:00 / 20:00 – 23:30' },
  { day: 'Viernes', hours: '13:00 – 16:30 / 20:00 – 00:00' },
  { day: 'Sábado', hours: '13:00 – 16:30 / 20:00 – 00:00' },
  { day: 'Domingo', hours: '13:00 – 16:30' },
]

const DAY_NAMES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

export default function Contact() {
  const today = DAY_NAMES[new Date().getDay()]

  return (
    <section id="contacto" className="bg-deep-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Encuéntranos"
          title="Dónde Estamos"
          subtitle="En el corazón del Barrio de Salamanca, Madrid"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-white/5 md:grid-cols-3"
        >
          {/* Hours */}
          <motion.div variants={fadeUp} className="border-b border-white/5 bg-charcoal p-8 md:border-b-0 md:border-r">
            <div className="mb-6 flex items-center gap-3">
              <Clock size={18} className="text-gold" />
              <h3 className="font-inter text-xs uppercase tracking-widest text-gold">Horarios</h3>
            </div>
            <table className="w-full font-inter text-sm">
              <tbody>
                {HOURS.map(({ day, hours, closed }) => (
                  <tr
                    key={day}
                    className={`border-b border-white/5 last:border-0 ${
                      day === today ? 'text-gold' : ''
                    }`}
                  >
                    <td className={`py-2.5 pr-4 font-medium ${day === today ? 'text-gold' : 'text-cream/70'}`}>
                      {day}
                      {day === today && (
                        <span className="ml-2 font-inter text-[10px] uppercase tracking-wider text-gold/60">
                          hoy
                        </span>
                      )}
                    </td>
                    <td className={`py-2.5 text-right text-xs ${closed ? 'text-cream/30 italic' : day === today ? 'text-gold/80' : 'text-cream/50'}`}>
                      {hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp} className="border-b border-white/5 bg-charcoal p-8 md:border-b-0 md:border-r">
            <div className="mb-6 flex items-center gap-3">
              <MapPin size={18} className="text-gold" />
              <h3 className="font-inter text-xs uppercase tracking-widest text-gold">Contacto</h3>
            </div>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold/50" />
                <div>
                  <p className="font-inter text-sm text-cream/80">Calle de Serrano, 34</p>
                  <p className="font-inter text-sm text-cream/80">28001 Madrid</p>
                  <p className="mt-1 font-inter text-xs text-cream/40">Barrio de Salamanca</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone size={16} className="shrink-0 text-gold/50" />
                <div>
                  <a href="tel:+34911234567" className="font-inter text-sm text-cream/80 hover:text-gold transition-colors">
                    +34 91 123 45 67
                  </a>
                  <p className="font-inter text-xs text-cream/40">Reservas y consultas</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail size={16} className="shrink-0 text-gold/50" />
                <div>
                  <a href="mailto:info@solana.es" className="font-inter text-sm text-cream/80 hover:text-gold transition-colors">
                    info@solana.es
                  </a>
                  <p className="font-inter text-xs text-cream/40">Eventos privados y grupos</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 border-t border-white/5 pt-6">
              <p className="mb-4 font-inter text-xs uppercase tracking-widest text-cream/40">Síguenos</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-sm border border-gold/20 px-4 py-2 font-inter text-xs text-gold/60 transition-all hover:border-gold hover:text-gold"
                >
                  <Instagram size={14} /> Instagram
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-sm border border-gold/20 px-4 py-2 font-inter text-xs text-gold/60 transition-all hover:border-gold hover:text-gold"
                >
                  <Facebook size={14} /> Facebook
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div variants={fadeUp} className="min-h-[300px] overflow-hidden bg-charcoal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.7906671780736!2d-3.6882443!3d40.4270869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422891e89b3e8f%3A0x1b94ccc0c50b6e4!2sCalle%20de%20Serrano%2C%2034%2C%2028001%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px', filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Restaurante Solana"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
