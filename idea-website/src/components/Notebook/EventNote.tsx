import React from 'react'

import type { Event } from '@/payload-types'
import { eventDay, eventTime, eventWeekday } from '@/utilities/formatEventDate'

const COLORS = ['var(--note-1)', 'var(--note-2)', 'var(--note-3)', 'var(--note-4)']
const TILTS = ['-2deg', '1.5deg', '-1deg', '2.2deg', '-1.6deg', '0.8deg']

/** An event as a taped-on sticky note. */
export const EventNote: React.FC<{ event: Event; index: number }> = ({ event, index }) => {
  const weekly = event.repeats === 'weekly'

  return (
    <article
      className="note h-full flex flex-col gap-3"
      style={
        {
          '--note-bg': COLORS[index % COLORS.length],
          '--tilt': TILTS[index % TILTS.length],
        } as React.CSSProperties
      }
    >
      <span aria-hidden className="tape" />

      {weekly ? (
        <div className="flex items-start justify-between gap-2">
          <p className="font-hand text-3xl leading-none">{event.schedule || 'Every week'}</p>
          <span className="label border border-current px-1.5 py-0.5 rotate-6 shrink-0">
            Weekly
          </span>
        </div>
      ) : (
        <div className="flex items-baseline gap-3">
          <p className="font-hand text-4xl leading-none">
            {eventWeekday(event.date)} {eventDay(event.date)}
          </p>
          <span className="label">{eventTime(event.date)}</span>
        </div>
      )}

      <h3 className="font-display text-2xl font-bold leading-tight">{event.title}</h3>

      {event.description && <p className="text-[0.95rem] leading-relaxed">{event.description}</p>}

      <div className="mt-auto pt-2 flex flex-wrap items-center justify-between gap-2">
        {event.location && <span className="label">📍 {event.location}</span>}
        {event.link && (
          <a
            className="font-hand text-2xl underline decoration-wavy underline-offset-4"
            href={event.link}
            rel="noreferrer"
            target="_blank"
          >
            count me in →
          </a>
        )}
      </div>
    </article>
  )
}
