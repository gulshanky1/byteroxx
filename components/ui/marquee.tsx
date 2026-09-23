import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  reverse?: boolean
}

/** Pure-CSS infinite scroller — no JS, no client boundary needed. */
export function Marquee({ children, reverse = false }: MarqueeProps) {
  return (
    <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex min-w-full shrink-0 items-center gap-10 animate-marquee group-hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {children}
      </div>
      <div
        className="flex min-w-full shrink-0 items-center gap-10 animate-marquee group-hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}
