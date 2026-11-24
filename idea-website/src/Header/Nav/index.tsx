'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { NAV_LINKS } from '@/utilities/siteConfig'
import { cn } from '@/utilities/ui'

export const HeaderNav: React.FC = () => {
  const pathname = usePathname()

  return (
    <nav className="flex flex-wrap gap-x-5 gap-y-2 items-center">
      {NAV_LINKS.map(({ href, label }) => {
        const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
        return (
          <Link
            className={cn('hover:underline', active && 'font-semibold underline')}
            href={href}
            key={href}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
