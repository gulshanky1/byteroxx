'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { GridBackground } from '@/components/ui/background-fx'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-24">
      <GridBackground />
      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-7xl font-semibold text-gradient sm:text-8xl"
        >
          404
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-display text-2xl font-semibold sm:text-3xl"
        >
          This page did not compile.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 max-w-md text-muted-foreground"
        >
          The page you are looking for does not exist or has moved. Let us get you back to solid ground.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <Button href="/">Back to home</Button>
        </motion.div>
      </div>
    </section>
  )
}
