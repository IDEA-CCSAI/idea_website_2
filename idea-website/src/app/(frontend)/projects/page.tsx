import configPromise from '@payload-config'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'

import { Media } from '@/components/Media'
import { Ink } from '@/components/Notebook/Ink'
import { SectionHeading } from '@/components/Notebook/SectionHeading'
import type { Project } from '@/payload-types'

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
    <main className="container pt-14 pb-28 flex flex-col gap-16">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <SectionHeading
            as="h1"
            fig="Page 05 — Student projects"
            note="patent pending (not really)"
            title="Filed by our members."
          />
        </div>
        <p className="lg:col-span-4 text-lg leading-relaxed text-[var(--ink-soft)]">
          Every project here started as a sketch. These are the ones that made it off the page.
        </p>
      </div>

      {projects.docs.length === 0 ? (
        <div className="sheet max-w-xl flex flex-col gap-4">
          <span className="label">FIG. 01 — Application pending</span>
          <div className="sheet-figure grid place-items-center">
            <span className="font-hand text-3xl text-[var(--ink-soft)]">[ your project here ]</span>
          </div>
          <p className="font-display text-2xl font-bold">Building something?</p>
          <Link className="btn-ink self-start" href="/contact">
            Tell us about it →
          </Link>
        </div>
      ) : (
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.docs.map((project, i) => (
            <Ink delay={(i % 3) * 120} key={project.id}>
              <ProjectSheet index={i} project={project} total={projects.totalDocs} />
            </Ink>
          ))}
        </div>
      )}
    </main>
  )
}

/** A project drawn up like a patent filing. */
function ProjectSheet({ project, index, total }: { project: Project; index: number; total: number }) {
  const fig = String(total - index).padStart(2, '0')
  const year = new Date(project.createdAt).getFullYear()

  return (
    <article className="sheet h-full flex flex-col gap-5">
      <header className="flex items-center justify-between gap-2 border-b border-[var(--ink)] pb-3">
        <span className="label">FIG. {fig}</span>
        <span className="label">
          IDEA-PAT-{year}-{fig}
        </span>
      </header>

      <div className="sheet-figure">
        {project.image && typeof project.image === 'object' ? (
          <Media
            fill
            imgClassName="object-cover mix-blend-multiply dark:mix-blend-normal"
            resource={project.image}
            size="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-hand text-3xl text-[var(--ink-soft)]">[ sketch pending ]</span>
          </div>
        )}
        {/* callout */}
        <span className="absolute right-3 bottom-3 font-mono text-[0.65rem] bg-[var(--paper-2)] border border-[var(--ink)] px-1.5">
          {fig}a
        </span>
      </div>

      <h2 className="font-display text-3xl font-bold leading-tight">{project.title}</h2>

      {project.summary && (
        <p className="leading-relaxed text-[var(--ink-soft)]">
          <span className="label mr-2">Abstract —</span>
          {project.summary}
        </p>
      )}

      <footer className="mt-auto flex flex-col gap-4 pt-2">
        {project.team && (
          <p className="text-sm">
            <span className="label mr-2">Inventors:</span>
            <span className="font-hand text-2xl">{project.team}</span>
          </p>
        )}
        {(project.repoUrl || project.demoUrl) && (
          <div className="flex flex-wrap gap-3">
            {project.repoUrl && (
              <a className="btn-ghost !py-2 !px-3" href={project.repoUrl} rel="noreferrer" target="_blank">
                Source ↗
              </a>
            )}
            {project.demoUrl && (
              <a className="btn-ink !py-2 !px-3" href={project.demoUrl} rel="noreferrer" target="_blank">
                Live demo ↗
              </a>
            )}
          </div>
        )}
      </footer>
    </article>
  )
}

export const metadata: Metadata = { title: 'Projects | IDEA' }
