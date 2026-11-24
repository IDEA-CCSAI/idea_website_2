'use client'

import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'

/**
 * Wrap a section to make it start as a faint pencil sketch and "ink in"
 * when it scrolls into view. Styles: `.ink` / `.is-inked` in notebook.css.
 */
export const Ink: React.FC<{
  as?: 'div' | 'section' | 'article' | 'li'
  children: React.ReactNode
  className?: string
  delay?: number
  style?: React.CSSProperties
}> = ({ as: Tag = 'div', children, className, delay = 0, style }) => {
  const ref = useRef<HTMLElement>(null)
  const [inked, setInked] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInked(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      className={clsx('ink', inked && 'is-inked', className)}
      // @ts-expect-error -- ref type differs per tag, all are HTMLElements
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  )
}
