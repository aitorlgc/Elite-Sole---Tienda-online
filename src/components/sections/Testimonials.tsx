'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import type { Testimonial } from '@/types'

interface TestimonialsProps {
  testimonials: Testimonial[]
}

function PlatformBadge({ platform }: { platform: Testimonial['platform'] }) {
  return (
    <span className="rounded-sm bg-charcoal px-3 py-1 font-inter text-[10px] uppercase tracking-widest text-gold/70">
      {platform === 'google' ? '★ Google' : '🍃 TripAdvisor'}
    </span>
  )
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [autoplay, setAutoplay] = useState(true)

  const navigate = useCallback(
    (dir: number) => {
      setDirection(dir)
      setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length)
    },
    [testimonials.length]
  )

  useEffect(() => {
    if (!autoplay) return
    const id = setInterval(() => navigate(1), 5000)
    return () => clearInterval(id)
  }, [autoplay, navigate])

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60, transition: { duration: 0.3 } }),
  }

  const current = testimonials[index]

  return (
    <section className="bg-charcoal py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="Opiniones"
          title="Lo que dicen nuestros clientes"
        />

        <div
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Quote mark */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-playfair text-8xl text-gold/10 select-none">
            &ldquo;
          </div>

          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="rounded-xl border border-white/5 bg-deep-black p-10 text-center"
            >
              {/* Stars */}
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="mx-auto max-w-2xl font-playfair text-xl italic leading-relaxed text-cream/85">
                &ldquo;{current.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="h-px w-12 bg-gold/40" />
                <p className="font-inter text-sm uppercase tracking-widest text-cream/70">
                  {current.name}
                </p>
                <div className="flex items-center gap-3">
                  <PlatformBadge platform={current.platform} />
                  <span className="font-inter text-xs text-cream/30">{current.date}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => navigate(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold/60 transition-all hover:border-gold hover:text-gold"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-gold' : 'w-1.5 bg-gold/30'
                  }`}
                  aria-label={`Ir a reseña ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold/60 transition-all hover:border-gold hover:text-gold"
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
