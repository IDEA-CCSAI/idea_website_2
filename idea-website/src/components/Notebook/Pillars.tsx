import React from 'react'

import { Ink } from './Ink'

/** Skills / Networking / Careers as three numbered figures with doodles. */
const PILLARS = [
  {
    fig: 'FIG. 1.1',
    title: 'Skills',
    body: 'Hands-on workshops where you learn by building, not by watching slides.',
    doodle: (
      // wrench + spark
      <g>
        <path d="M18 62 L 46 34" />
        <path d="M46 34 C 40 22, 52 10, 64 14 L 56 24 L 62 30 L 72 22 C 76 34, 62 46, 50 40" />
        <path d="M14 58 L 22 66" />
        <path d="M78 52 l 6 -6 M 84 58 l 8 0 M 78 64 l 6 6" />
      </g>
    ),
  },
  {
    fig: 'FIG. 1.2',
    title: 'Networking',
    body: 'Meet the people you will build with: students, alumni, and folks in industry.',
    doodle: (
      // connected nodes
      <g>
        <circle cx="20" cy="24" r="7" />
        <circle cx="74" cy="18" r="7" />
        <circle cx="50" cy="58" r="9" />
        <circle cx="86" cy="64" r="5" />
        <path d="M26 28 L 43 52 M 68 23 L 55 50 M 27 24 L 67 19 M 59 60 L 81 63" />
      </g>
    ),
  },
  {
    fig: 'FIG. 1.3',
    title: 'Careers',
    body: 'Portfolios, internships, and the confidence to pitch what you made.',
    doodle: (
      // rocket
      <g>
        <path d="M50 8 C 64 20, 66 40, 60 56 L 40 56 C 34 40, 36 20, 50 8 Z" />
        <circle cx="50" cy="30" r="5" />
        <path d="M40 46 L 30 58 L 40 56 M 60 46 L 70 58 L 60 56" />
        <path d="M44 62 L 42 72 M 50 62 L 50 76 M 56 62 L 58 72" />
      </g>
    ),
  },
]

export const Pillars: React.FC = () => (
  <div className="grid gap-6 md:grid-cols-3">
    {PILLARS.map((p, i) => (
      <Ink
        as="article"
        className="relative border-2 border-[var(--ink)] bg-[var(--paper-2)] p-6 flex flex-col gap-4"
        delay={i * 140}
        key={p.title}
      >
        <div className="flex items-center justify-between">
          <span className="label">{p.fig}</span>
          <span className="label">0{i + 1}/03</span>
        </div>
        <svg
          aria-hidden
          className="h-24 w-24 text-[var(--blueprint)]"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          viewBox="0 0 100 80"
        >
          {p.doodle}
        </svg>
        <h3 className="font-display text-3xl font-bold">{p.title}</h3>
        <p className="text-[var(--ink-soft)] leading-relaxed">{p.body}</p>
      </Ink>
    ))}
  </div>
)
