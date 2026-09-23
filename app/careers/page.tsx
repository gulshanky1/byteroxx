import type { Metadata } from 'next'
import { Reveal } from '@/components/ui/reveal'
import { GridBackground } from '@/components/ui/background-fx'
import { Culture } from '@/components/sections/culture'
import { OpenPositions } from '@/components/sections/open-positions'
import { HiringProcess } from '@/components/sections/hiring-process'
import { jobs } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Byteroxx is hiring. See open roles across engineering, design, AI, and delivery.',
}

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 text-center sm:py-28">
        <GridBackground />
        <div className="container relative z-10">
          <Reveal>
            <h1 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Do the best work of your career.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              We are a remote-first team building real products for real companies. Right now we
              have {jobs.length} open roles across engineering, design, AI, and delivery.
            </p>
          </Reveal>
        </div>
      </section>

      <Culture />
      <OpenPositions />
      <HiringProcess />
    </>
  )
}
