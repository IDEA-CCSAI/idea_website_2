import { SITE_TIMEZONE } from './siteConfig'

// Format in the club's timezone. Servers (e.g. Vercel) run in UTC, so without
// this an event at 12:00 PM Toronto time would show as 5:00 PM.
const fmt = (date: string, options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('en-CA', { timeZone: SITE_TIMEZONE, ...options }).format(new Date(date))

export const eventWeekday = (date: string) => fmt(date, { weekday: 'short' })
export const eventDay = (date: string) => fmt(date, { day: 'numeric', month: 'short' })
export const eventTime = (date: string) => fmt(date, { hour: 'numeric', minute: '2-digit' })
export const eventFull = (date: string) =>
  fmt(date, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
