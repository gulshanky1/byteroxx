'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** 'up' gives a small rise + fade, 'fade' is opacity only (calmer, use for dense groups) */
  variant?: 'up' | 'fade'
}

export function Reveal({ children, className, delay = 0, variant = 'up' }: RevealProps) {
  const initial = variant === 'up' ? { opacity: 0, y: 18 } : { opacity: 0 }
  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
