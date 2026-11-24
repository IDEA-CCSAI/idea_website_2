import Link from 'next/link'
import React from 'react'

import { Logo } from '@/components/Logo/Logo'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import {
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_LINKS,
  SITE_FULL_NAME,
} from '@/utilities/siteConfig'

export async function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-2">
          <Link href="/">
            <Logo className="h-8 text-white" />
          </Link>
          <p className="text-sm">{SITE_FULL_NAME}</p>
          <p className="text-sm">
            <a className="underline" href={INSTAGRAM_URL} rel="noreferrer" target="_blank">
              {INSTAGRAM_HANDLE}
            </a>{' '}
            · <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {NAV_LINKS.map(({ href, label }) => (
              <Link className="text-white" href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
