import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Events: CollectionConfig<'events'> = {
  slug: 'events',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'location', 'updatedAt'],
  },
  defaultSort: 'date',
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'date',
      type: 'date',
      required: true,
      index: true,
      admin: { date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'repeats',
      type: 'select',
      defaultValue: 'once',
      options: [
        { label: 'One-time event', value: 'once' },
        { label: 'Every week (e.g. Coworking Lunch)', value: 'weekly' },
      ],
      admin: {
        description: 'Weekly events stay pinned at the top of the Events page.',
      },
    },
    {
      name: 'schedule',
      type: 'text',
      label: 'When it repeats',
      admin: {
        placeholder: 'Every Wednesday · 12:00–1:00 PM',
        condition: (data) => data?.repeats === 'weekly',
      },
    },
    { name: 'location', type: 'text' },
    { name: 'description', type: 'textarea' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    {
      name: 'link',
      type: 'text',
      label: 'Sign-up / RSVP link',
    },
    slugField(),
  ],
}
