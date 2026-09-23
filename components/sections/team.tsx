import { Reveal } from '@/components/ui/reveal'
import { team } from '@/lib/data'

export function Team() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="container">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A few of the people you will work with.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-base font-semibold text-white">
                  {member.initials}
                </div>
                <p className="mt-3 text-sm font-semibold">{member.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
