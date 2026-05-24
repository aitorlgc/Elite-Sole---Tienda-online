'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import type { FeaturedDish } from '@/types'

interface FeaturedDishesProps {
  dishes: FeaturedDish[]
}

export default function FeaturedDishes({ dishes }: FeaturedDishesProps) {
  return (
    <section className="bg-charcoal py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-gold">
            Selección del Chef
          </span>
          <h2 className="mt-2 font-playfair text-3xl text-cream md:text-4xl">
            Platos Destacados
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {dishes.map((dish) => (
            <motion.div
              key={dish.id}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-80">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-playfair text-xl text-cream">{dish.name}</h3>
                    <p className="mt-1 font-inter text-sm text-cream/60">{dish.description}</p>
                  </div>
                  <span className="ml-4 shrink-0 font-playfair text-2xl italic text-gold">
                    {dish.price}€
                  </span>
                </div>
                <div className="mt-4 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
