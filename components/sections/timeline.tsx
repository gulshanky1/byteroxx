import { Reveal } from '@/components/ui/reveal'
import { timeline } from '@/lib/data'

export function Timeline() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A short history of getting better at this.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="mt-14 max-w-2xl">
            {timeline.map((milestone, i) => (
              <li key={milestone.year} className="relative flex gap-6">
                <div className="flex w-6 shrink-0 flex-col items-center">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary ring-4 ring-background" />
                  {i !== timeline.length - 1 && <span className="mt-1 w-px flex-1 bg-border" />}
                </div>
                <div className="flex-1 pb-10">
                  <p className="font-display text-base font-semibold text-primary">{milestone.year}</p>
                  <p className="mt-1.5 text-muted-foreground">{milestone.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
