import configPromise from '@payload-config'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'

import { Logo } from '@/components/Logo/Logo'
import { INSTAGRAM_URL, SITE_DESCRIPTION, SITE_FULL_NAME } from '@/utilities/siteConfig'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })

  const [events, posts] = await Promise.all([
    payload.find({
      collection: 'events',
      where: { date: { greater_than_equal: new Date().toISOString() } },
      sort: 'date',
      limit: 3,
      depth: 0,
    }),
    payload.find({
      collection: 'posts',
      overrideAccess: false,
      sort: '-publishedAt',
      limit: 3,
      depth: 0,
      select: { title: true, slug: true, publishedAt: true },
    }),
  ])

  return (
    <main className="container py-16 flex flex-col gap-16">
      {/* Hero */}
      <section className="flex flex-col gap-4">
        <Logo className="h-20 text-foreground" />
        <h1 className="text-3xl font-bold">{SITE_FULL_NAME}</h1>
        <p className="text-lg">{SITE_DESCRIPTION}</p>
        <div className="flex gap-4">
          <Link className="underline" href="/events">
            See upcoming events
          </Link>
          <a className="underline" href={INSTAGRAM_URL} rel="noreferrer" target="_blank">
            Follow us on Instagram
          </a>
        </div>
      </section>

      {/* Coworking Lunches */}
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Weekly Coworking Lunches</h2>
        <p>
          Every week we host a Coworking Lunch: a relaxed space to bring your lunch, sit down with
          other builders, and focus on your projects, homework, or ideas.
        </p>
      </section>

      {/* Upcoming events */}
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Upcoming Events</h2>
        {events.docs.length === 0 ? (
          <p>No upcoming events yet. Check back soon!</p>
        ) : (
          <ul className="list-disc pl-6">
            {events.docs.map((event) => (
              <li key={event.id}>
                <strong>{event.title}</strong> — {new Date(event.date).toLocaleString()}
                {event.location ? ` @ ${event.location}` : ''}
              </li>
            ))}
          </ul>
        )}
        <Link className="underline" href="/events">
          All events →
        </Link>
      </section>

      {/* Latest posts */}
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">From the Blog</h2>
        {posts.docs.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          <ul className="list-disc pl-6">
            {posts.docs.map((post) => (
              <li key={post.id}>
                <Link className="underline" href={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Link className="underline" href="/posts">
          All posts →
        </Link>
      </section>
    </main>
  )
}

export const metadata: Metadata = {
  title: `IDEA | ${SITE_FULL_NAME}`,
  description: SITE_DESCRIPTION,
}
