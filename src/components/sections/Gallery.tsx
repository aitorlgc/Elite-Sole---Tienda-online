'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { staggerContainer, fadeUp } from '@/lib/animations'
import type { GalleryImage } from '@/types'

interface GalleryProps {
  images: GalleryImage[]
}

export default function Gallery({ images }: GalleryProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null)

  return (
    <section id="galeria" className="bg-deep-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Galería"
          title="Momentos en Solana"
          subtitle="Cada visita es única. Capturamos la esencia de nuestra cocina y nuestro ambiente."
        />

        {/* Masonry grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 gap-3 md:grid-cols-3"
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={fadeUp}
              layoutId={image.id}
              onClick={() => setSelected(image)}
              className={`group relative cursor-pointer overflow-hidden rounded-lg ${
                image.featured ? 'row-span-2' : ''
              }`}
              style={{ minHeight: image.featured ? '400px' : '200px' }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-deep-black/0 transition-all duration-300 group-hover:bg-deep-black/50" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-playfair text-sm italic text-cream/90">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-deep-black/95 p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-6 top-6 rounded-full bg-charcoal p-2 text-cream/70 hover:text-cream transition-colors"
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>
            <motion.div
              layoutId={selected.id}
              className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
              style={{ aspectRatio: '4/3' }}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 font-playfair italic text-cream/60 text-sm"
            >
              {selected.alt}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
