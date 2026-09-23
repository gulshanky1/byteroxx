import { Reveal } from '@/components/ui/reveal'
import { hiringProcess } from '@/lib/data'

export function HiringProcess() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="container">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            How hiring works here.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-y-8 sm:grid-cols-2 sm:divide-x sm:divide-border lg:grid-cols-4">
            {hiringProcess.map((step, i) => (
              <div key={step.title} className="px-0 sm:px-8 sm:first:pl-0">
                <p className="font-display text-2xl font-semibold text-primary">{i + 1}</p>
                <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
