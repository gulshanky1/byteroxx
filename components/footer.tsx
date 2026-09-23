import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

const explore = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About us' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Get in touch' },
]

const capabilities = [
  { href: '/#services', label: 'Web & app development' },
  { href: '/#services', label: 'Cloud & DevOps' },
  { href: '/#services', label: 'AI & machine learning' },
  { href: '/#services', label: 'Product & UX design' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#020a1f] text-slate-300">
      <div className="container py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="relative block h-8 w-[150px]">
              <Image src="/logo-dark.png" alt="Byteroxx" fill sizes="150px" className="object-contain object-left" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              We design, build, and scale technology for ambitious teams, from first prototype to production scale.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Byteroxx on GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-white/30 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Byteroxx on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-white/30 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Byteroxx on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-white/30 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-3">
              {explore.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">What we do</h3>
            <ul className="mt-4 space-y-3">
              {capabilities.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="mailto:hello@byteroxx.com" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Mail className="h-3.5 w-3.5" />
                  hello@byteroxx.com
                </a>
              </li>
              <li>Remote-first team, working across time zones.</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>&copy; {year} Byteroxx. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  )
}
