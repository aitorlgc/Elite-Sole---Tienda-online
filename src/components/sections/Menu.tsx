'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import MenuCard from '@/components/ui/MenuCard'
import { staggerContainer } from '@/lib/animations'
import type { MenuCategory } from '@/types'

interface MenuProps {
  categories: MenuCategory[]
}

export default function Menu({ categories }: MenuProps) {
  const [activeId, setActiveId] = useState(categories[0].id)
  const activeCategory = categories.find((c) => c.id === activeId)!

  return (
    <section id="menu" className="bg-deep-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Gastronomía"
          title="Nuestra Carta"
          subtitle="Productos de temporada seleccionados con pasión, cocinados con técnica y amor por la tradición mediterránea."
        />

        {/* Tab Bar */}
        <div className="mb-14 flex justify-center">
          <div className="relative flex overflow-x-auto scrollbar-hide rounded-sm border border-gold/20 bg-charcoal/50">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`relative z-10 whitespace-nowrap px-5 py-3 font-inter text-xs uppercase tracking-widest transition-colors duration-200 ${
                  activeId === cat.id ? 'text-deep-black' : 'text-cream/50 hover:text-cream'
                }`}
              >
                {activeId === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gold"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeId + '-desc'}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mb-10 text-center font-inter text-sm italic text-cream/40"
          >
            {activeCategory.description}
          </motion.p>
        </AnimatePresence>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {activeCategory.items.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="mb-6 font-inter text-sm text-cream/40">
            Todos nuestros platos pueden adaptarse a intolerancias alimentarias
          </p>
          <button
            onClick={() => document.querySelector('#reservas')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-sm border border-gold px-8 py-3 font-inter text-sm uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-deep-black"
          >
            Reservar Mesa
          </button>
        </motion.div>
      </div>
    </section>
  )
}
