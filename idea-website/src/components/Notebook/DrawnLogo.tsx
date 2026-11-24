import clsx from 'clsx'
import React from 'react'

import { SITE_FULL_NAME } from '@/utilities/siteConfig'

/**
 * The IDEA logo, split into its four letters so each one can be
 * "pencilled in" (stroke draws on) and then inked (fill fades in), one after another.
 * Blueprint construction lines and a dimension label sit behind it.
 * Animations live in notebook.css (.drawn-logo).
 */
const LETTERS = [
  // I
  'M 0,122.0788 V 109.95383 H 8.4874411 V 82.066524 54.179143 H 21.824851 v 27.810534 27.810543 l 8.562943,0.13058 0.05717,12.14792 z',
  // D
  'M 40.012252,122.0788 V 94.191455 h 13.524977 v 14.424275 c 13.514614,0 24.382491,-4.15134 24.382491,-20.486738 0,-16.335362 -10.911989,-20.639705 -24.426348,-20.639705 l 0.03842,14.577237 H 40.012763 V 54.179143 h 23.80974 c 13.897308,0 27.434495,14.090087 27.434495,33.949849 0,18.311438 -12.481354,33.923568 -27.600559,33.923568 z',
  // E
  'M 103.06191,122.0788 V 54.179143 h 34.07653 l 3e-5,13.472756 -19.52663,-0.03413 v 13.235388 h 26.67481 v 13.337488 h -26.67481 v 14.447865 h 19.52663 l -3e-5,13.43943 z',
  // A
  'M 155.28616,122.21028 L 182.64307,53.734449 210,122.21022 l -13.93118,-5e-5 -13.42575,-35.417779 c 0,0 -9.49419,23.993899 -13.42568,35.417829 z',
]

export const DrawnLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      aria-label={SITE_FULL_NAME}
      className={clsx('drawn-logo w-full h-auto overflow-visible', className)}
      role="img"
      viewBox="-8 -10 226 86"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* construction lines */}
      <g className="guides" fill="none">
        <line x1="-8" x2="218" y1="0.45" y2="0.45" />
        <line x1="-8" x2="218" y1="68.4" y2="68.4" />
        <line x1="-8" x2="218" y1="34.4" y2="34.4" />
        <line x1="0" x2="0" y1="-10" y2="76" />
        <line x1="210" x2="210" y1="-10" y2="76" />
        <line x1="182.64" x2="182.64" y1="-10" y2="76" />
        <circle cx="64" cy="34.4" r="27" />
      </g>
      <text className="dim" x="0" y="-4">
        FIG. 0 — IDEA / 210.00 × 68.48 MM
      </text>
      <text className="dim" textAnchor="end" x="210" y="75">
        DRAWN BY: EVERY MEMBER
      </text>

      <g transform="translate(0,-53.734449)">
        {LETTERS.map((d, i) => (
          <path
            className="letter"
            d={d}
            key={i}
            pathLength={1}
            style={{ '--d': `${0.25 + i * 0.45}s` } as React.CSSProperties}
          />
        ))}
      </g>
    </svg>
  )
}
