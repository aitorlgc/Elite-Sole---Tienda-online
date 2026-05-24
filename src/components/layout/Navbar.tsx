'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Carta', href: '#menu' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        animate={{
          backgroundColor: isScrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0)',
          borderBottomColor: isScrolled ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0)',
        }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 z-50 w-full border-b"
        style={{ backdropFilter: isScrolled ? 'blur(12px)' : 'none' }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-playfair text-2xl tracking-widest text-cream"
          >
            SOL<span className="text-gold">/</span>ANA
          </a>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="relative font-inter text-sm uppercase tracking-widest text-cream/70 transition-colors hover:text-cream after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('#reservas')}
              className="rounded-sm border border-gold bg-gold/10 px-6 py-2 font-inter text-sm uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-deep-black"
            >
              Reservar
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="block text-cream/80 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed left-0 top-[65px] z-40 w-full bg-deep-black/98 backdrop-blur-md border-b border-gold/10 md:hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full py-3 text-left font-inter text-sm uppercase tracking-widest text-cream/70 hover:text-gold transition-colors border-b border-white/5"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-4">
                <button
                  onClick={() => handleNavClick('#reservas')}
                  className="w-full rounded-sm border border-gold bg-gold/10 py-3 font-inter text-sm uppercase tracking-widest text-gold hover:bg-gold hover:text-deep-black transition-all"
                >
                  Reservar Mesa
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
