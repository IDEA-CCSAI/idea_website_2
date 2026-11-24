'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { NAV_LINKS } from '@/utilities/siteConfig'
import { cn } from '@/utilities/ui'

/** Notebook-tab style nav: "01 Home  02 About Us ..." with the current page highlighted. */
export const HeaderNav: React.FC = () => {
  const pathname = usePathname()

  return (
    <nav className="-mx-1 flex gap-1 overflow-x-auto max-w-full">
      {NAV_LINKS.map(({ href, label }, i) => {
        const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
        return (
          <Link
            aria-current={active ? 'page' : undefined}
            className={cn(
              'group whitespace-nowrap px-2 py-1 font-mono text-[0.78rem] uppercase tracking-[0.08em] transition-colors',
              active ? 'bg-[var(--hl)] text-[#1d1f24]' : 'hover:bg-[var(--hl)]/50',
            )}
            href={href}
            key={href}
          >
            <span className="opacity-50 mr-1">{String(i + 1).padStart(2, '0')}</span>
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
