import type { Metadata } from 'next'
import { Reveal } from '@/components/ui/reveal'
import { ContactInfo } from '@/components/sections/contact-info'
import { ContactForm } from '@/components/sections/contact-form'

export const metadata: Metadata = {
  title: 'Get in touch',
  description: 'Tell Byteroxx about your project. We typically reply within one business day.',
}

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <Reveal className="max-w-xl">
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Tell us what you are building.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Share a few details below and a real person on the team will get back to you, not an
            autoresponder.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal delay={0.05}>
            <ContactInfo />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
