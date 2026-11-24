import configPromise from '@payload-config'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'

import { DrawnLogo } from '@/components/Notebook/DrawnLogo'
import { EventNote } from '@/components/Notebook/EventNote'
import { Ink } from '@/components/Notebook/Ink'
import { Pillars } from '@/components/Notebook/Pillars'
import { ScribbleArrow, ScribbleUnderline } from '@/components/Notebook/Scribbles'
import { SectionHeading } from '@/components/Notebook/SectionHeading'
import { eventFull } from '@/utilities/formatEventDate'
import { getEvents } from '@/utilities/getEvents'
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  SITE_DESCRIPTION,
  SITE_FULL_NAME,
} from '@/utilities/siteConfig'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })

  const [{ weekly, upcoming }, posts] = await Promise.all([
    getEvents({ upcomingLimit: 4, pastLimit: 0 }),
    payload.find({
      collection: 'posts',
      overrideAccess: false,
      sort: '-publishedAt',
      limit: 3,
      depth: 0,
      select: { title: true, slug: true, publishedAt: true, meta: true },
    }),
  ])

  const board = [...weekly, ...upcoming].slice(0, 4)

  return (
    <main className="flex flex-col gap-28 md:gap-36 pb-28">
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="container pt-8 md:pt-14">
        <div className="flex items-center gap-3 mb-10">
          <span className="label">Notebook Nº 01</span>
          <span className="h-px flex-1 bg-[var(--ink)] opacity-30" />
          <span className="label">Page 1 of ∞</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="relative text-[var(--ink)] max-w-3xl">
              <DrawnLogo />
              <div className="hidden md:flex absolute -right-4 -top-14 items-end gap-1 text-[var(--blueprint)] rotate-3">
                <span className="font-hand text-2xl leading-none">started here</span>
                <ScribbleArrow className="h-12 w-16 rotate-[40deg]" delay={2.4} />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="label">{SITE_FULL_NAME}</p>
              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
                Every big idea
                <br />
                starts on a{' '}
                <span className="relative inline-block">
                  blank page
                  <ScribbleUnderline className="absolute left-0 -bottom-3 w-full h-4 text-[var(--blueprint)]" />
                </span>
                .
              </h1>
              <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-[var(--ink-soft)]">
                We&apos;re the students who sketch it, build it, break it, and build it again.{' '}
                <span className="hl">{SITE_DESCRIPTION.split('.')[0]}.</span>
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link className="btn-ink" href="/events">
                  What&apos;s on →
                </Link>
                <a className="btn-ghost" href={INSTAGRAM_URL} rel="noreferrer" target="_blank">
                  {INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>
          </div>

          {/* to-do list note */}
          <aside className="lg:col-span-4">
            <div
              className="note max-w-sm mx-auto lg:mr-0"
              style={{ '--tilt': '3deg' } as React.CSSProperties}
            >
              <span aria-hidden className="tape" />
              <p className="label mb-3">To-do</p>
              <ul className="font-hand text-[1.75rem] leading-snug flex flex-col gap-1">
                <li>
                  <span className="mr-2">☑</span>
                  <s className="decoration-2">have an idea</s>
                </li>
                <li>
                  <span className="mr-2">☑</span>
                  <s className="decoration-2">sketch it out</s>
                </li>
                <li>
                  <span className="mr-2">☐</span>find people to build it with
                </li>
                <li>
                  <span className="mr-2">☐</span>ship it 🚀
                </li>
              </ul>
              <p className="font-hand text-xl mt-4 text-[var(--blueprint)] -rotate-2">
                ↳ that&apos;s where we come in
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ───────────────────────── WHAT WE DO ───────────────────────── */}
      <section className="container flex flex-col gap-12">
        <Ink>
          <SectionHeading
            fig="FIG. 1 — What we do"
            note="the three Ts: tinker, talk, take off"
            title={
              <>
                Grow your <span className="hl">skills</span>, your network,
                <br className="hidden md:block" /> and your career.
              </>
            }
          />
        </Ink>
        <Pillars />
      </section>

      {/* ───────────────────────── EVENTS BOARD ───────────────────────── */}
      <section className="container flex flex-col gap-14">
        <Ink>
          <SectionHeading
            fig="FIG. 2 — On the board"
            note="pinned this week"
            title={<>Come build with us.</>}
          />
        </Ink>

        {board.length === 0 ? (
          <div className="note max-w-md" style={{ '--tilt': '-1.5deg' } as React.CSSProperties}>
            <span aria-hidden className="tape" />
            <p className="font-hand text-3xl leading-tight">
              Nothing pinned yet. Follow {INSTAGRAM_HANDLE} so you catch the next one!
            </p>
          </div>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {board.map((event, i) => (
              <Ink delay={i * 120} key={event.id}>
                <EventNote event={event} index={i} />
              </Ink>
            ))}
          </div>
        )}

        <Link className="btn-ghost self-start" href="/events">
          See all events →
        </Link>
      </section>

      {/* ───────────────────────── BLOG ───────────────────────── */}
      <section className="container flex flex-col gap-10">
        <Ink>
          <SectionHeading fig="FIG. 3 — From the notebook" title="Latest entries." />
        </Ink>

        <Ink className="lined border-2 border-[var(--ink)]">
          {posts.docs.length === 0 ? (
            <p className="font-hand text-3xl px-6 py-8 text-[var(--ink-soft)]">
              These pages are still blank… first entry coming soon.
            </p>
          ) : (
            <ol>
              {posts.docs.map((post, i) => (
                <li className="border-b border-[var(--grid-major)] last:border-0" key={post.id}>
                  <Link
                    className="group grid gap-2 md:grid-cols-12 px-6 py-6 items-baseline"
                    href={`/posts/${post.slug}`}
                  >
                    <span className="label md:col-span-3">
                      Entry {String(posts.docs.length - i).padStart(2, '0')}
                      {post.publishedAt ? ` · ${eventFull(post.publishedAt)}` : ''}
                    </span>
                    <span className="md:col-span-8 font-display text-2xl md:text-3xl font-bold">
                      <span className="px-1 -mx-1 transition-colors group-hover:bg-[var(--hl)] group-hover:text-[#1d1f24]">
                        {post.title}
                      </span>
                    </span>
                    <span className="hidden md:block md:col-span-1 text-right font-hand text-3xl transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          )}
        </Ink>

        <Link className="btn-ghost self-start" href="/posts">
          Read the blog →
        </Link>
      </section>

      {/* ───────────────────────── CTA ───────────────────────── */}
      <section className="container">
        <Ink className="torn border-x-2 border-t-2 border-[var(--ink)] px-6 pt-12 md:px-16 md:pt-16 relative">
          <span className="label">FIG. 4 — Your turn</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mt-4 max-w-4xl">
            Got an idea? <span className="hl">Bring it.</span>
          </h2>
          <p className="mt-6 text-lg max-w-xl text-[var(--ink-soft)]">
            Half-baked is fine. Napkin sketches welcome. No experience needed. Just show up
            curious.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="btn-ink" href="/contact">
              Get in touch →
            </Link>
            <Link className="btn-ghost" href="/projects">
              See what members built
            </Link>
          </div>
          <p className="hidden md:block absolute right-16 top-14 font-hand text-2xl text-[var(--blueprint)] rotate-6">
            ✂ - - - tear here - - -
          </p>
        </Ink>
      </section>
    </main>
  )
}

export const metadata: Metadata = {
  title: `IDEA | ${SITE_FULL_NAME}`,
  description: SITE_DESCRIPTION,
}
