import { Reveal } from '@/components/ui/reveal'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { services } from '@/lib/data'

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Six disciplines. One accountable team.
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-muted-foreground">
            Most vendors hand you off between teams as a project moves forward. Byteroxx keeps the
            same core group accountable from strategy through to the metrics that come after launch.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={Math.min(i * 0.06, 0.3)}>
              <SpotlightCard className="h-full p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
