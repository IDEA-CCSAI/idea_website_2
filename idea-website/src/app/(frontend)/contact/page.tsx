import type { Metadata } from 'next'
import React from 'react'

import { ScribbleArrow } from '@/components/Notebook/Scribbles'
import { SectionHeading } from '@/components/Notebook/SectionHeading'
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '@/utilities/siteConfig'

const REASONS = ['join the club', 'pitch a project', 'run a workshop', 'sponsor an event']

export default function ContactPage() {
  return (
    <main className="container pt-14 pb-28 flex flex-col gap-16">
      <SectionHeading as="h1" fig="Page 06 — Contact us" title="Pass us a note." />

      <div className="grid gap-16 lg:grid-cols-12 items-start">
        {/* The torn-off slip */}
        <div className="lg:col-span-7 relative">
          <div className="torn border-x-2 border-t-2 border-[var(--ink)] px-6 pt-10 md:px-12 md:pt-12 -rotate-1">
            <div className="flex items-center justify-between gap-4 border-b border-dashed border-[var(--ink-soft)] pb-4">
              <span className="label">To: IDEA</span>
              <span className="label">From: you</span>
            </div>

            <p className="font-hand text-3xl mt-6 leading-snug">Hey! I&apos;d love to…</p>
            <ul className="mt-3 flex flex-col gap-1 font-hand text-3xl">
              {REASONS.map((r) => (
                <li key={r}>
                  <span className="mr-3">☐</span>
                  {r}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-6">
              <a
                className="group flex flex-col gap-1"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                <span className="label">Email</span>
                <span className="font-display text-2xl md:text-4xl font-bold break-all">
                  <span className="transition-colors group-hover:bg-[var(--hl)] group-hover:text-[#1d1f24]">
                    {CONTACT_EMAIL}
                  </span>
                </span>
              </a>
              <a
                className="group flex flex-col gap-1"
                href={INSTAGRAM_URL}
                rel="noreferrer"
                target="_blank"
              >
                <span className="label">Instagram (DMs open)</span>
                <span className="font-display text-2xl md:text-4xl font-bold">
                  <span className="transition-colors group-hover:bg-[var(--hl)] group-hover:text-[#1d1f24]">
                    {INSTAGRAM_HANDLE} ↗
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Side note */}
        <aside className="lg:col-span-5 flex flex-col gap-8 lg:pt-10">
          <div className="note" style={{ '--tilt': '2deg', '--note-bg': 'var(--note-3)' } as React.CSSProperties}>
            <span aria-hidden className="tape" />
            <p className="label">P.S.</p>
            <p className="font-hand text-3xl leading-tight mt-2">
              The easiest way to meet us? Drop by a weekly Coworking Lunch. Bring food, bring an
              idea.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-[var(--blueprint)] pl-6">
            <ScribbleArrow className="h-14 w-20 -rotate-[120deg]" delay={0.8} />
            <span className="font-hand text-2xl">or just slide into our DMs</span>
          </div>
        </aside>
      </div>
    </main>
  )
}

export const metadata: Metadata = { title: 'Contact Us | IDEA' }
