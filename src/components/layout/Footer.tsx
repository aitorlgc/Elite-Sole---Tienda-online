import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'
import GoldDivider from '@/components/ui/GoldDivider'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-deep-black border-t border-gold/15">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="font-playfair text-3xl tracking-widest text-cream">
              SOL<span className="text-gold">/</span>ANA
            </div>
            <p className="mt-4 font-inter text-sm leading-relaxed text-cream/50">
              Cocina española de autor en el corazón de Madrid. Una experiencia mediterránea sin igual desde 1987.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold/60 transition-all hover:border-gold hover:text-gold"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold/60 transition-all hover:border-gold hover:text-gold"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="mb-5 font-inter text-xs uppercase tracking-widest text-gold">Navegación</h4>
            <ul className="space-y-3 font-inter text-sm text-cream/50">
              {['#menu', '#nosotros', '#galeria', '#reservas', '#contacto'].map((href, i) => (
                <li key={href}>
                  <a href={href} className="hover:text-cream transition-colors">
                    {['Carta', 'Nosotros', 'Galería', 'Reservas', 'Contacto'][i]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-inter text-xs uppercase tracking-widest text-gold">Contacto</h4>
            <ul className="space-y-4 font-inter text-sm text-cream/50">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold/60" />
                <span>Calle de Serrano, 34<br />28001 Madrid</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="shrink-0 text-gold/60" />
                <a href="tel:+34911234567" className="hover:text-cream transition-colors">
                  +34 91 123 45 67
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="shrink-0 text-gold/60" />
                <a href="mailto:info@solana.es" className="hover:text-cream transition-colors">
                  info@solana.es
                </a>
              </li>
            </ul>
          </div>
        </div>

        <GoldDivider className="my-10" />

        <div className="flex flex-col items-center gap-3 text-center font-inter text-xs text-cream/30 sm:flex-row sm:justify-between">
          <p>© {year} Restaurante Solana. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream/60 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-cream/60 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-cream/60 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
