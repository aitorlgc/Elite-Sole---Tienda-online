'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} id="inicio" className="relative flex h-[100dvh] items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85"
          alt="Restaurante Solana - mesa iluminada elegantemente"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black/50 via-deep-black/30 to-deep-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-black/30 via-transparent to-deep-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 inline-block font-inter text-xs uppercase tracking-[0.4em] text-gold"
        >
          Madrid · Desde 1987
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-playfair text-5xl leading-tight text-cream sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          Una Experiencia
          <br />
          <span className="italic text-gold">Mediterránea</span>
          <br />
          Sin Igual
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto mt-6 max-w-lg font-inter text-base text-cream/70 sm:text-lg"
        >
          Cocina española de autor en el corazón de Madrid
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <button
            onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full rounded-sm bg-gold px-8 py-4 font-inter text-sm uppercase tracking-widest text-deep-black transition-all hover:bg-gold-light sm:w-auto"
          >
            Ver Carta
          </button>
          <button
            onClick={() => document.querySelector('#reservas')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full rounded-sm border border-cream/40 px-8 py-4 font-inter text-sm uppercase tracking-widest text-cream transition-all hover:border-gold hover:text-gold sm:w-auto"
          >
            Reservar Mesa
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/40 hover:text-gold transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  )
}
