import clsx from 'clsx'
import React from 'react'

/** Hand-drawn curved arrow. Draws itself on load (.scribble in notebook.css). */
export const ScribbleArrow: React.FC<{ className?: string; delay?: number; flip?: boolean }> = ({
  className,
  delay = 0.4,
  flip,
}) => (
  <svg
    aria-hidden
    className={clsx('scribble', flip && '-scale-x-100', className)}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.2"
    style={{ '--d': `${delay}s` } as React.CSSProperties}
    viewBox="0 0 80 50"
  >
    <path d="M4 8 C 20 2, 48 6, 62 34" pathLength={1} />
    <path d="M50 30 L 63 37 L 68 22" pathLength={1} style={{ '--d': `${delay + 0.6}s` } as React.CSSProperties} />
  </svg>
)

/** Wobbly hand-drawn underline. Put it absolutely under a word. */
export const ScribbleUnderline: React.FC<{ className?: string; delay?: number }> = ({
  className,
  delay = 1.2,
}) => (
  <svg
    aria-hidden
    className={clsx('scribble', className)}
    fill="none"
    preserveAspectRatio="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeWidth="3"
    style={{ '--d': `${delay}s` } as React.CSSProperties}
    viewBox="0 0 200 14"
  >
    <path d="M3 9 C 40 3, 80 12, 120 6 S 180 4, 197 8" pathLength={1} />
  </svg>
)

/** Hand-drawn circle around something. */
export const ScribbleCircle: React.FC<{ className?: string; delay?: number }> = ({
  className,
  delay = 1.6,
}) => (
  <svg
    aria-hidden
    className={clsx('scribble pointer-events-none', className)}
    fill="none"
    preserveAspectRatio="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeWidth="2"
    style={{ '--d': `${delay}s` } as React.CSSProperties}
    viewBox="0 0 200 80"
  >
    <path
      d="M120 6 C 60 0, 6 14, 6 40 C 6 66, 70 76, 120 72 C 170 68, 196 52, 194 36 C 192 18, 150 6, 96 10"
      pathLength={1}
    />
  </svg>
)
