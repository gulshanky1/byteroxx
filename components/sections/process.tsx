import { Reveal } from '@/components/ui/reveal'
import { processSteps } from '@/lib/data'

export function Process() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Five steps. No surprises along the way.
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-muted-foreground">
            Every engagement follows the same rhythm, so you always know what happens next and why.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative flex flex-col items-start lg:items-center lg:text-center">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="mt-4 text-xs font-medium text-muted-foreground">Step {i + 1}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground lg:max-w-[220px]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
