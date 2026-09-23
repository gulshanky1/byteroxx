import { Reveal } from '@/components/ui/reveal'
import { Magnetic } from '@/components/ui/magnetic'
import { Button } from '@/components/ui/button'

export function CtaBanner() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary px-6 py-16 text-center sm:px-16 sm:py-20">
            <div
              className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,#000_40%,transparent_100%)]"
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                Ready to build something that actually ships?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-white/85">
                Tell us what you are working on. We will reply within one business day with next
                steps, not a sales script.
              </p>
              <div className="mt-8 flex justify-center">
                <Magnetic>
                  <Button href="/contact" size="lg" className="bg-white text-primary shadow-none hover:opacity-90">
                    Start a project
                  </Button>
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
