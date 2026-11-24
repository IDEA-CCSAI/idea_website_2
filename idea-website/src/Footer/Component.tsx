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
    <footer className="mt-auto relative z-10 bg-[#1b1e24] text-[#eef1f6] border-t-2 border-[var(--ink)]">
      <div className="container py-14 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-6 flex flex-col gap-5">
          <Link aria-label="IDEA home" href="/">
            <Logo className="h-12 text-[#eef1f6]" />
          </Link>
          <p className="label !text-[#9aa3b2]">{SITE_FULL_NAME}</p>
          <p className="font-hand text-3xl leading-tight text-[var(--hl)] -rotate-1 max-w-sm">
            We innovate, grow, and unite as one.
          </p>
        </div>

        <nav className="md:col-span-3 flex flex-col gap-2">
          <span className="label !text-[#9aa3b2] mb-2">Index</span>
          {NAV_LINKS.map(({ href, label }, i) => (
            <Link className="font-mono text-sm hover:text-[var(--hl)]" href={href} key={href}>
              <span className="opacity-40 mr-2">{String(i + 1).padStart(2, '0')}</span>
              {label}
            </Link>
          ))}
        </nav>

        <div className="md:col-span-3 flex flex-col gap-2">
          <span className="label !text-[#9aa3b2] mb-2">Say hi</span>
          <a
            className="font-mono text-sm hover:text-[var(--hl)]"
            href={INSTAGRAM_URL}
            rel="noreferrer"
            target="_blank"
          >
            {INSTAGRAM_HANDLE} ↗
          </a>
          <a className="font-mono text-sm hover:text-[var(--hl)] break-all" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <div className="mt-4 [&_button]:text-[#eef1f6] [&_button]:font-mono [&_button]:text-sm">
            <span className="label !text-[#9aa3b2]">Paper</span>
            <ThemeSelector />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-wrap justify-between gap-2">
          <span className="label !text-[#6f7889]">© {new Date().getFullYear()} IDEA</span>
          <span className="label !text-[#6f7889]">End of page. Turn over →</span>
        </div>
      </div>
    </footer>
  )
}
