'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { GradientText } from '@/components/ui/gradient-text'
import { GridBackground, GradientBlobs } from '@/components/ui/background-fx'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28 sm:pt-28 sm:pb-36">
      <GridBackground />
      <GradientBlobs />

      {/* Brand chevron watermark — echoes the arrow mark in the Byteroxx logo */}
      <svg
        viewBox="0 0 400 500"
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[640px] w-[520px] -translate-y-1/2 opacity-[0.07] lg:block"
      >
        <defs>
          <linearGradient id="heroChevron" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" />
            <stop offset="100%" stopColor="hsl(262 83% 62%)" />
          </linearGradient>
        </defs>
        <path
          d="M20 40 L260 40 L140 250 L260 460 L20 460 L140 250 Z"
          fill="url(#heroChevron)"
        />
      </svg>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container relative z-10 flex flex-col items-center text-center"
      >
        <motion.h1
          variants={item}
          className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
        >
          Building the technology behind{' '}
          <GradientText>tomorrow&rsquo;s best products</GradientText>.
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
          Byteroxx is a full-stack technology partner. We design, build, and scale web, mobile,
          cloud, and AI-driven products for ambitious teams, from first prototype to production scale.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Button href="/contact" size="lg">
            Start a project
          </Button>
          <Button href="#services" variant="outline" size="lg">
            See what we build
          </Button>
        </motion.div>

        <motion.p variants={item} className="mt-10 text-sm text-muted-foreground">
          Trusted by teams at Northwind Goods, Fintrail, Solara Health, and Cartway.
        </motion.p>
      </motion.div>
    </section>
  )
}
