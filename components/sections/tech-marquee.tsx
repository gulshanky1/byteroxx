import { Reveal } from '@/components/ui/reveal'
import { Marquee } from '@/components/ui/marquee'
import { techStack } from '@/lib/data'

export function TechMarquee() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <Reveal variant="fade" className="text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Comfortable working across the stack you already run
          </p>
        </Reveal>
      </div>

      <div className="mt-8">
        <Marquee>
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground/80"
            >
              <tech.icon className="h-4 w-4 text-primary" />
              {tech.name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
