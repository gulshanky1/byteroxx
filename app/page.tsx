import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Stats } from '@/components/sections/stats'
import { Process } from '@/components/sections/process'
import { Testimonials } from '@/components/sections/testimonials'
import { TechMarquee } from '@/components/sections/tech-marquee'
import { CtaBanner } from '@/components/sections/cta-banner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Process />
      <Testimonials />
      <TechMarquee />
      <CtaBanner />
    </>
  )
}
