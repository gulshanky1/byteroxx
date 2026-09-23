import type { Metadata } from 'next'
import { Reveal } from '@/components/ui/reveal'
import { GridBackground } from '@/components/ui/background-fx'
import { Timeline } from '@/components/sections/timeline'
import { Values } from '@/components/sections/values'
import { Team } from '@/components/sections/team'
import { CtaBanner } from '@/components/sections/cta-banner'

export const metadata: Metadata = {
  title: 'About us',
  description:
    'Byteroxx is a full-stack technology partner founded in 2018. Meet the team and the values behind how we build.',
}

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <GridBackground />
        <div className="container relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Reveal>
              <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
                We build software like it is going to matter.
              </h1>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col justify-end">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Byteroxx started in 2018 as three engineers who were tired of being treated like a
                line item. Today we are a full-stack partner for teams who want technology handled
                by people who stay accountable to the outcome, not just the handoff.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Timeline />
      <Values />
      <Team />
      <CtaBanner />
    </>
  )
}
