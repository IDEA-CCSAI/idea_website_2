import type { Metadata } from 'next'
import React from 'react'

import { INSTAGRAM_HANDLE, INSTAGRAM_URL, SITE_FULL_NAME } from '@/utilities/siteConfig'

export default function AboutPage() {
  return (
    <main className="container py-16 flex flex-col gap-8 max-w-3xl">
      <h1 className="text-3xl font-bold">About Us</h1>

      <p>
        The <strong>{SITE_FULL_NAME} (IDEA)</strong> is a student organization focused on
        innovation. We bring together students who like to build things: developers, engineers,
        designers, and anyone curious about turning ideas into reality.
      </p>

      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Our Motto</h2>
        <p>We innovate, grow, and unite as one.</p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">What We Focus On</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>Skills</strong>: hands-on workshops and learning sessions.
          </li>
          <li>
            <strong>Networking</strong>: meet fellow students, alumni, and industry folks.
          </li>
          <li>
            <strong>Careers</strong>: get ready for internships and jobs.
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Weekly Coworking Lunches</h2>
        <p>
          Our signature event. Once a week we set up a space where members can eat, focus, and work
          side by side on whatever they are building.
        </p>
      </section>

      <p>
        Follow us on Instagram at{' '}
        <a className="underline" href={INSTAGRAM_URL} rel="noreferrer" target="_blank">
          {INSTAGRAM_HANDLE}
        </a>
        .
      </p>
    </main>
  )
}

export const metadata: Metadata = { title: 'About Us | IDEA' }
