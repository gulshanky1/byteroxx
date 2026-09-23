import { Reveal } from '@/components/ui/reveal'
import { perks } from '@/lib/data'

export function Culture() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            What you get, beyond the paycheck.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {perks.map((perk) => (
              <div key={perk.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                  <perk.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">{perk.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
