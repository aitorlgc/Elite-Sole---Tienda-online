'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring, useTransform, motion } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  label: string
}

export default function AnimatedCounter({ value, suffix = '', label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 60, damping: 18 })
  const display = useTransform(spring, (current) => Math.round(current).toString())
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    return display.on('change', (v) => setDisplayValue(v))
  }, [display])

  return (
    <div ref={ref} className="text-center">
      <div className="font-playfair text-5xl text-gold">
        {displayValue}
        <span className="text-3xl">{suffix}</span>
      </div>
      <p className="mt-2 font-inter text-sm uppercase tracking-widest text-cream/60">{label}</p>
    </div>
  )
}
