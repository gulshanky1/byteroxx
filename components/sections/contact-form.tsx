'use client'

import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Loader2, Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const serviceOptions = [
  'Web development',
  'Mobile app development',
  'Cloud & DevOps',
  'AI & machine learning',
  'Product & UX design',
  'Cybersecurity',
  'Something else',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setError('')

    const form = e.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center py-16 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
              <CheckCircle2 className="h-7 w-7 text-white" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold">Message sent</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Thanks for reaching out. Someone from the team will reply within one business day.
            </p>
            <Button variant="outline" className="mt-8" onClick={() => setStatus('idle')}>
              Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="grid gap-5 sm:grid-cols-2"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Full name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Jordan Lee"
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jordan@company.com"
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </div>
            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-medium">
                Company <span className="text-muted-foreground">(optional)</span>
              </label>
              <input
                id="company"
                name="company"
                placeholder="Company name"
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </div>
            <div>
              <label htmlFor="service" className="mb-2 block text-sm font-medium">
                Service you need
              </label>
              <select
                id="service"
                name="service"
                defaultValue={serviceOptions[0]}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
              >
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about what you are building, timeline, and budget if you have one."
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </div>

            {status === 'error' && <p className="text-sm text-red-500 sm:col-span-2">{error}</p>}

            <div className="sm:col-span-2">
              <Button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto">
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
