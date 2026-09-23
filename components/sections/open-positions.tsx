'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { jobs, type Department } from '@/lib/data'

const ALL = 'All roles'

export function OpenPositions() {
  const departments = useMemo(() => {
    const unique = Array.from(new Set(jobs.map((j) => j.department))) as Department[]
    return [ALL, ...unique]
  }, [])

  const [filter, setFilter] = useState<string>(ALL)

  const filtered = filter === ALL ? jobs : jobs.filter((j) => j.department === filter)

  return (
    <section id="open-roles" className="border-t border-border py-20 sm:py-28">
      <div className="container">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Open roles</h2>
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setFilter(dept)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  filter === dept
                    ? 'border-primary bg-primary text-white'
                    : 'border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            <AnimatePresence initial={false}>
              {filtered.map((job) => (
                <motion.li
                  key={job.title}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-display text-base font-semibold">{job.title}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                      <span>{job.department}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:careers@byteroxx.com?subject=Application: ${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-secondary"
                  >
                    Apply
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
          {filtered.length === 0 && (
            <p className="mt-8 text-sm text-muted-foreground">No open roles in this department right now.</p>
          )}
        </Reveal>

        <p className="mt-8 text-sm text-muted-foreground">
          Do not see the right role?{' '}
          <a href="mailto:careers@byteroxx.com" className="font-medium text-primary">
            Send us your resume anyway
          </a>
          .
        </p>
      </div>
    </section>
  )
}
