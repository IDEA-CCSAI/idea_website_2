import configPromise from '@payload-config'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import React from 'react'

import { Media } from '@/components/Media'
import type { Event } from '@/payload-types'

export const dynamic = 'force-dynamic'

export default async function EventsPage() {
  const payload = await getPayload({ config: configPromise })
  const now = new Date().toISOString()

  const [upcoming, past] = await Promise.all([
    payload.find({
      collection: 'events',
      where: { date: { greater_than_equal: now } },
      sort: 'date',
      limit: 50,
      depth: 1,
    }),
    payload.find({
      collection: 'events',
      where: { date: { less_than: now } },
      sort: '-date',
      limit: 20,
      depth: 1,
    }),
  ])

  return (
    <main className="container py-16 flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Events</h1>
        <p>Workshops, socials, and our weekly Coworking Lunches.</p>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Upcoming</h2>
        <EventList events={upcoming.docs} empty="No upcoming events yet." />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Past Events</h2>
        <EventList events={past.docs} empty="No past events." />
      </section>
    </main>
  )
}

function EventList({ events, empty }: { events: Event[]; empty: string }) {
  if (events.length === 0) return <p>{empty}</p>

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <article className="border border-border rounded-lg overflow-hidden" key={event.id}>
          {event.image && typeof event.image === 'object' && (
            <Media resource={event.image} size="33vw" />
          )}
          <div className="p-4 flex flex-col gap-1">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-sm">
              {new Date(event.date).toLocaleString()}
              {event.location ? ` · ${event.location}` : ''}
            </p>
            {event.description && <p>{event.description}</p>}
            {event.link && (
              <a className="underline" href={event.link} rel="noreferrer" target="_blank">
                Sign up / RSVP
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

export const metadata: Metadata = { title: 'Events | IDEA' }
