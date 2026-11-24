import type { Metadata } from 'next'
import React from 'react'

import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '@/utilities/siteConfig'

export default function ContactPage() {
  return (
    <main className="container py-16 flex flex-col gap-6 max-w-3xl">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>Want to join, collaborate, or sponsor an event? Reach out!</p>

      <ul className="flex flex-col gap-2">
        <li>
          <strong>Instagram:</strong>{' '}
          <a className="underline" href={INSTAGRAM_URL} rel="noreferrer" target="_blank">
            {INSTAGRAM_HANDLE}
          </a>{' '}
          (DMs are open)
        </li>
        <li>
          <strong>Email:</strong>{' '}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </li>
        <li>
          <strong>In person:</strong> drop by one of our weekly Coworking Lunches.
        </li>
      </ul>
    </main>
  )
}

export const metadata: Metadata = { title: 'Contact Us | IDEA' }
