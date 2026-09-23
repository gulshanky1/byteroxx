interface GridBackgroundProps {
  className?: string
}

/** Static decorative grid — no hooks, renders on the server. */
export function GridBackground({ className = '' }: GridBackgroundProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,#000_40%,transparent_100%)] ${className}`}
      aria-hidden="true"
    />
  )
}

/** Slow-drifting gradient blobs, matched to the brand blue/violet pair. */
export function GradientBlobs({ className = '' }: GridBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/25 blur-[100px] animate-blob-float" />
      <div
        className="absolute top-1/3 -right-16 h-80 w-80 rounded-full bg-secondary/25 blur-[110px] animate-blob-float"
        style={{ animationDelay: '-5s' }}
      />
    </div>
  )
}
