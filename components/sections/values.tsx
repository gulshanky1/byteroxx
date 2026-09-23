import { Reveal } from '@/components/ui/reveal'
import { values } from '@/lib/data'

export function Values() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="container">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Six things we do not compromise on.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border-t-2 border-primary/40 pt-5">
                <value.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
