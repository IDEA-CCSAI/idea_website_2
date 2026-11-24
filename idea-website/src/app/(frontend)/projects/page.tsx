import configPromise from '@payload-config'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import React from 'react'

import { Media } from '@/components/Media'

export const dynamic = 'force-dynamic'

export default async function ProjectsPage() {
  const payload = await getPayload({ config: configPromise })
  const projects = await payload.find({
    collection: 'projects',
    sort: '-createdAt',
    limit: 100,
    depth: 1,
  })

  return (
    <main className="container py-16 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Student Projects</h1>
        <p>Things IDEA members have designed, built, and shipped.</p>
      </div>

      {projects.docs.length === 0 ? (
        <p>No projects yet. Building something? Tell us about it!</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.docs.map((project) => (
            <article className="border border-border rounded-lg overflow-hidden" key={project.id}>
              {project.image && typeof project.image === 'object' && (
                <Media resource={project.image} size="33vw" />
              )}
              <div className="p-4 flex flex-col gap-1">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                {project.team && <p className="text-sm">By {project.team}</p>}
                {project.summary && <p>{project.summary}</p>}
                <div className="flex gap-4">
                  {project.repoUrl && (
                    <a className="underline" href={project.repoUrl} rel="noreferrer" target="_blank">
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a className="underline" href={project.demoUrl} rel="noreferrer" target="_blank">
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}

export const metadata: Metadata = { title: 'Projects | IDEA' }
