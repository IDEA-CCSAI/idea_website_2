import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { Ink } from '@/components/Notebook/Ink'
import { Pillars } from '@/components/Notebook/Pillars'
import { ScribbleCircle } from '@/components/Notebook/Scribbles'
import { SectionHeading } from '@/components/Notebook/SectionHeading'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, SITE_FULL_NAME } from '@/utilities/siteConfig'

const PRINCIPLES = [
  { n: '01', title: 'Start from scratch.', body: 'Every project starts as a blank page. That is not scary, that is the fun part.' },
  { n: '02', title: 'Build in the open.', body: 'Show the messy version. Feedback early beats perfection late.' },
  { n: '03', title: 'Any field, any skill level.', body: 'Code, hardware, design, business: innovation needs all of it.' },
  { n: '04', title: 'Better together.', body: 'Ideas get bigger when more people are at the table, even a lunch table.' },
]

export default function AboutPage() {
  return (
    <main className="container pt-14 pb-28 flex flex-col gap-28">
      {/* Manifesto */}
      <section className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8 flex flex-col gap-8">
          <SectionHeading as="h1" fig="Page 02 — About us" title="We're an innovation club." />
          <p className="font-display text-2xl md:text-3xl leading-snug">
            Not a{' '}
            <s className="decoration-[var(--margin-line)] decoration-4 text-[var(--ink-soft)]">
              coding club
            </s>
            . Not just a{' '}
            <s className="decoration-[var(--margin-line)] decoration-4 text-[var(--ink-soft)]">
              tech club
            </s>
            . The <strong>{SITE_FULL_NAME}</strong> is for anyone who looks at something and
            thinks <span className="hl">&ldquo;I could make that better.&rdquo;</span>
          </p>
          <p className="text-lg leading-relaxed text-[var(--ink-soft)] max-w-2xl">
            We&apos;re a student organization built around one thing: innovation. We run
            workshops, socials, and weekly Coworking Lunches where members bring their projects,
            their homework, or just a half-formed idea, and work on it side by side.
          </p>
        </div>

        <aside className="lg:col-span-4 lg:pt-24">
          <div className="relative border-2 border-[var(--ink)] bg-[var(--paper-2)] p-8 rotate-1">
            <span className="label">Motto</span>
            <p className="font-hand text-4xl leading-tight mt-3">
              We innovate,
              <br />
              grow, and
              <br />
              <span className="relative inline-block px-2">
                unite as one.
                <ScribbleCircle className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+1.5rem)] h-[calc(100%+1rem)] text-[var(--margin-line)]" />
              </span>
            </p>
          </div>
        </aside>
      </section>

      {/* Pillars */}
      <section className="flex flex-col gap-12">
        <Ink>
          <SectionHeading fig="FIG. 1 — Our focus" title="Skills. Networking. Careers." />
        </Ink>
        <Pillars />
      </section>

      {/* Principles */}
      <section className="flex flex-col gap-12">
        <Ink>
          <SectionHeading fig="FIG. 2 — How we work" note="the fine print" title="House rules." />
        </Ink>
        <ol className="grid gap-x-12 md:grid-cols-2 border-t-2 border-[var(--ink)]">
          {PRINCIPLES.map((p, i) => (
            <Ink
              as="li"
              className="flex gap-6 py-8 border-b border-[var(--ink)]/30"
              delay={i * 100}
              key={p.n}
            >
              <span className="font-hand text-5xl leading-none text-[var(--blueprint)]">{p.n}</span>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                <p className="text-[var(--ink-soft)] leading-relaxed">{p.body}</p>
              </div>
            </Ink>
          ))}
        </ol>
      </section>

      {/* Join */}
      <Ink as="section" className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] max-w-3xl">
          Pull up a chair. <span className="hl">There&apos;s room at the table.</span>
        </h2>
        <div className="flex flex-wrap gap-4">
          <Link className="btn-ink" href="/events">
            Find an event →
          </Link>
          <a className="btn-ghost" href={INSTAGRAM_URL} rel="noreferrer" target="_blank">
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </Ink>
    </main>
  )
}

export const metadata: Metadata = { title: 'About Us | IDEA' }
