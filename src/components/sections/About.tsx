'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { slideInLeft, slideInRight, staggerContainer, fadeUp } from '@/lib/animations'

export default function About() {
  return (
    <section id="nosotros" className="bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Images column */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            {/* Primary image */}
            <div className="relative h-[480px] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Salón principal de Solana"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Secondary overlapping image */}
            <div className="absolute -bottom-8 -right-6 h-52 w-48 overflow-hidden rounded-lg border-4 border-charcoal shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
                alt="Chef Miguel Fernández"
                fill
                className="object-cover object-top"
                sizes="192px"
              />
            </div>

            {/* Founding year badge */}
            <div className="absolute -left-4 bottom-12 rounded-sm bg-gold px-5 py-4 shadow-xl">
              <p className="font-inter text-xs uppercase tracking-widest text-deep-black">Desde</p>
              <p className="font-playfair text-3xl font-bold text-deep-black">1987</p>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="pb-8 lg:pb-0"
          >
            <motion.span variants={fadeUp} className="font-inter text-xs uppercase tracking-[0.3em] text-gold">
              Nuestra Historia
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 font-playfair text-4xl text-cream md:text-5xl">
              Pasión por la <br />
              <span className="italic text-gold">Cocina Auténtica</span>
            </motion.h2>

            {/* Chef quote */}
            <motion.div variants={fadeUp} className="relative mt-8 border-l-2 border-gold/40 pl-6">
              <Quote size={28} className="mb-3 text-gold/40" />
              <p className="font-playfair text-lg italic leading-relaxed text-cream/80">
                &quot;Cada plato que sale de nuestra cocina lleva décadas de tradición y el alma del Mediterráneo.
                Cocinamos con el producto como protagonista y el fuego como herramienta.&quot;
              </p>
              <p className="mt-4 font-inter text-sm uppercase tracking-widest text-gold">
                Miguel Fernández · Chef & Fundador
              </p>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 font-inter text-sm leading-relaxed text-cream/55">
              Nacido en Valencia y formado en las mejores cocinas de España y Francia, Miguel abrió Solana con
              la convicción de que la cocina mediterránea merece el mismo respeto que cualquier gastronomía del
              mundo. Más de 35 años después, ese sueño se ha convertido en una de las mesas más reconocidas de Madrid.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-10"
            >
              <AnimatedCounter value={37} suffix="+" label="Años de historia" />
              <AnimatedCounter value={3} suffix="" label="Premios nacionales" />
              <AnimatedCounter value={85} suffix="" label="Platos en carta" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
