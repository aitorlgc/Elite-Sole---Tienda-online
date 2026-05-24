'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import type { MenuItem } from '@/types'

const TAG_LABELS: Record<string, string> = {
  vg: 'Vegano',
  gf: 'Sin Gluten',
  chef: 'Especial Chef',
}

interface MenuCardProps {
  item: MenuItem
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="group overflow-hidden rounded-lg bg-charcoal"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
        {item.tags && item.tags.length > 0 && (
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm bg-deep-black/80 px-2 py-0.5 font-inter text-[10px] uppercase tracking-wider text-gold"
              >
                {TAG_LABELS[tag]}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-playfair text-lg text-cream leading-snug">{item.name}</h3>
          <span className="shrink-0 font-playfair text-xl italic text-gold">
            {item.price}€
          </span>
        </div>
        <p className="mt-2 font-inter text-sm leading-relaxed text-cream/55 line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}
