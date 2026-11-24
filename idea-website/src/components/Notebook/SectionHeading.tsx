import clsx from 'clsx'
import React from 'react'

/** "FIG. 02 —— ON THE BOARD" style heading with an optional margin note. */
export const SectionHeading: React.FC<{
  as?: 'h1' | 'h2'
  className?: string
  fig: string
  note?: string
  title: React.ReactNode
}> = ({ as: Tag = 'h2', className, fig, note, title }) => (
  <div className={clsx('flex flex-col gap-3', className)}>
    <div className="flex items-center gap-3">
      <span className="label whitespace-nowrap">{fig}</span>
      <span className="h-px flex-1 bg-[var(--ink)] opacity-30" />
      {note && (
        <span className="font-hand text-xl text-[var(--blueprint)] -rotate-2 whitespace-nowrap">
          {note}
        </span>
      )}
    </div>
    <Tag
      className={clsx(
        'font-display font-bold tracking-tight leading-[0.95]',
        Tag === 'h1' ? 'text-5xl md:text-7xl' : 'text-4xl md:text-5xl',
      )}
    >
      {title}
    </Tag>
  </div>
)
