'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={cn('mb-14', centered && 'text-center')}
    >
      <motion.span
        variants={fadeUp}
        className="mb-3 inline-block font-inter text-xs tracking-[0.3em] uppercase text-gold"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className={cn(
          'font-playfair text-4xl md:text-5xl leading-tight',
          light ? 'text-deep-black' : 'text-cream'
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={cn(
            'mt-4 max-w-xl text-base leading-relaxed',
            centered && 'mx-auto',
            light ? 'text-charcoal' : 'text-cream/60'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
