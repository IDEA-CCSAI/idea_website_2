import type { Metadata } from 'next'
import React from 'react'

import { EventNote } from '@/components/Notebook/EventNote'
import { Ink } from '@/components/Notebook/Ink'
import { SectionHeading } from '@/components/Notebook/SectionHeading'
import type { Event } from '@/payload-types'
import { eventFull } from '@/utilities/formatEventDate'
import { getEvents } from '@/utilities/getEvents'
import { INSTAGRAM_HANDLE } from '@/utilities/siteConfig'

export const dynamic = 'force-dynamic'

export default async function EventsPage() {
  const { weekly, upcoming, past } = await getEvents()

  return (
    <main className="container pt-14 pb-28 flex flex-col gap-24">
      <SectionHeading
        as="h1"
        fig="Page 03 — Events"
        note="pin it to your calendar"
        title="The board."
      />

      {/* Weekly / recurring */}
      {weekly.length > 0 && (
        <section className="flex flex-col gap-12">
          <Ink>
            <SectionHeading fig="FIG. 1 — Every week" title="On repeat." />
          </Ink>
          <NoteGrid events={weekly} />
        </section>
      )}

      {/* Upcoming */}
      <section className="flex flex-col gap-12">
        <Ink>
          <SectionHeading fig={`FIG. ${weekly.length ? 2 : 1} — Coming up`} title="Next on the calendar." />
        </Ink>
        {upcoming.length === 0 ? (
          <div className="note max-w-md" style={{ '--tilt': '-1.5deg' } as React.CSSProperties}>
            <span aria-hidden className="tape" />
            <p className="font-hand text-3xl leading-tight">
              Nothing scheduled yet. Follow {INSTAGRAM_HANDLE} to hear first!
            </p>
          </div>
        ) : (
          <NoteGrid events={upcoming} offset={weekly.length} />
        )}
      </section>

      {/* Archive */}
      {past.length > 0 && (
        <section className="flex flex-col gap-8">
          <Ink>
            <SectionHeading fig="Archive" title="Already happened." />
          </Ink>
          <ol className="border-t-2 border-[var(--ink)]">
            {past.map((event) => (
              <li
                className="grid gap-2 md:grid-cols-12 py-4 border-b border-[var(--ink)]/25 items-baseline"
                key={event.id}
              >
                <span className="label md:col-span-3">{eventFull(event.date)}</span>
                <span className="md:col-span-6 font-display text-xl font-bold line-through decoration-[var(--ink-soft)]/50">
                  {event.title}
                </span>
                <span className="md:col-span-3 font-hand text-2xl text-[var(--blueprint)] md:text-right">
                  ✓ done
                </span>
              </li>
            ))}
          </ol>
        </section>
      )}
    </main>
  )
}

function NoteGrid({ events, offset = 0 }: { events: Event[]; offset?: number }) {
  return (
    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event, i) => (
        <Ink delay={(i % 3) * 120} key={event.id}>
          <EventNote event={event} index={i + offset} />
        </Ink>
      ))}
    </div>
  )
}

export const metadata: Metadata = { title: 'Events | IDEA' }
