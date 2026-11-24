'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = () => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="sticky top-0 z-30 border-b-2 border-[var(--ink)] bg-[var(--paper)]/90 backdrop-blur-sm"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container py-4 flex flex-wrap gap-x-8 gap-y-3 justify-between items-center">
        <Link aria-label="IDEA home" className="flex items-center gap-3 group" href="/">
          <Logo className="h-7 text-[var(--ink)] transition-transform group-hover:-rotate-3" />
          <span className="label hidden sm:inline">Innovative Developers &amp; Engineers</span>
        </Link>
        <HeaderNav />
      </div>
    </header>
  )
}
