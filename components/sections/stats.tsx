import { Reveal } from '@/components/ui/reveal'
import { Counter } from '@/components/ui/counter'
import { stats } from '@/lib/data'

export function Stats() {
  return (
    <section className="border-y border-border bg-muted/40 py-14">
      <div className="container">
        <Reveal variant="fade">
          <div className="grid grid-cols-2 divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1.5 py-6 sm:border-l sm:border-border sm:py-0 sm:first:border-l-0"
              >
                <p className="font-display text-3xl font-semibold sm:text-4xl">
                  <Counter to={stat.value} suffix={stat.suffix} duration={1.6 + i * 0.15} />
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
