import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Projects: CollectionConfig<'projects'> = {
  slug: 'projects',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'team', 'updatedAt'],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'summary', type: 'textarea' },
    { name: 'team', type: 'text', label: 'Team members' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'repoUrl', type: 'text', label: 'Code repository URL' },
    { name: 'demoUrl', type: 'text', label: 'Live demo URL' },
    slugField(),
  ],
}
