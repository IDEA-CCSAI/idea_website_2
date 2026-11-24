import configPromise from '@payload-config'
import { getPayload } from 'payload'

/** Weekly (pinned) events, upcoming one-time events, and past one-time events. */
export async function getEvents({ upcomingLimit = 50, pastLimit = 20 } = {}) {
  const payload = await getPayload({ config: configPromise })
  const now = new Date().toISOString()

  const [weekly, upcoming, past] = await Promise.all([
    payload.find({
      collection: 'events',
      where: { repeats: { equals: 'weekly' } },
      sort: 'date',
      limit: 10,
      depth: 1,
    }),
    payload.find({
      collection: 'events',
      where: {
        and: [{ repeats: { not_equals: 'weekly' } }, { date: { greater_than_equal: now } }],
      },
      sort: 'date',
      limit: upcomingLimit,
      depth: 1,
    }),
    pastLimit > 0
      ? payload.find({
          collection: 'events',
          where: { and: [{ repeats: { not_equals: 'weekly' } }, { date: { less_than: now } }] },
          sort: '-date',
          limit: pastLimit,
          depth: 1,
        })
      : Promise.resolve({ docs: [] }),
  ])

  return { weekly: weekly.docs, upcoming: upcoming.docs, past: past.docs }
}
