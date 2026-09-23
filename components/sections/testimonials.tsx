'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { testimonials } from '@/lib/data'

export function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">In their own words.</h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <Quote className="h-8 w-8 text-primary/50" />

          <div className="mt-4 min-h-[160px] sm:min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <p className="font-display text-xl font-medium leading-snug sm:text-2xl">
                  {current.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-semibold text-white">
                    {current.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{current.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {current.role}, {current.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-10 bg-primary' : 'w-4 bg-border hover:bg-muted-foreground/40'
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
