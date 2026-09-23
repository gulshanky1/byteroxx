import { Mail, Clock, Github, Linkedin, Instagram } from 'lucide-react'

const items = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@byteroxx.com',
    href: 'mailto:hello@byteroxx.com',
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'Within one business day',
  },
]

export function ContactInfo() {
  return (
    <div className="lg:pr-8">
      <h2 className="font-display text-2xl font-semibold">Other ways to reach us</h2>
      <p className="mt-3 text-muted-foreground">
        Prefer email, or already know which service you need? Reach out directly and a real
        person on the team will follow up.
      </p>

      <ul className="mt-8 space-y-6">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted">
              <item.icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="font-medium hover:text-primary">
                  {item.value}
                </a>
              ) : (
                <p className="font-medium">{item.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 border-t border-border pt-8">
        <p className="text-sm text-muted-foreground">Follow along</p>
        <div className="mt-3 flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Byteroxx on GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Byteroxx on LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Byteroxx on Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
