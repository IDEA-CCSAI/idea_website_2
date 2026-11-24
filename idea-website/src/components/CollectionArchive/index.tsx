import Link from 'next/link'
import React, { Fragment } from 'react'

import type { CardPostData } from '@/components/Card'
import { Media } from '@/components/Media'
import { eventDay, eventFull } from '@/utilities/formatEventDate'

export type Props = {
  posts: CardPostData[]
}

/** Blog posts as dated entries on lined notebook paper. */
export const CollectionArchive: React.FC<Props> = ({ posts }) => {
  const docs = (posts || []).filter((p) => typeof p === 'object' && p !== null)

  return (
    <div className="container">
      {docs.length === 0 ? (
        <div className="lined border-2 border-[var(--ink)] px-6 py-10">
          <p className="font-hand text-3xl text-[var(--ink-soft)]">
            These pages are still blank… first entry coming soon.
          </p>
        </div>
      ) : (
        <ol className="lined border-2 border-[var(--ink)]">
          {docs.map((post, i) => {
            const image = post.meta?.image
            const categories = (post.categories || []).filter(
              (c): c is Exclude<typeof c, string | number> => typeof c === 'object',
            )
            return (
              <li className="border-b-2 border-[var(--ink)] last:border-0" key={post.slug || i}>
                <Link
                  className="group grid gap-6 md:grid-cols-12 p-6 md:p-8 items-start"
                  href={`/posts/${post.slug}`}
                >
                  <div className="md:col-span-3 flex flex-col gap-2">
                    <span className="font-hand text-4xl leading-none text-[var(--blueprint)]">
                      {post.publishedAt ? eventDay(post.publishedAt) : 'Draft'}
                    </span>
                    {post.publishedAt && <span className="label">{eventFull(post.publishedAt)}</span>}
                    {categories.length > 0 && (
                      <span className="label">
                        {categories.map((c, ci) => (
                          <Fragment key={ci}>
                            {ci > 0 && ' · '}#{c.title}
                          </Fragment>
                        ))}
                      </span>
                    )}
                  </div>

                  <div className="md:col-span-6 flex flex-col gap-3">
                    <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                      <span className="transition-colors group-hover:bg-[var(--hl)] group-hover:text-[#1d1f24]">
                        {post.title}
                      </span>
                    </h2>
                    {post.meta?.description && (
                      <p className="text-[var(--ink-soft)] leading-relaxed">
                        {post.meta.description.replace(/\s/g, ' ')}
                      </p>
                    )}
                    <span className="font-hand text-2xl mt-1 transition-transform group-hover:translate-x-1">
                      keep reading →
                    </span>
                  </div>

                  <div className="md:col-span-3">
                    {image && typeof image === 'object' && (
                      <div className="relative border-2 border-[var(--ink)] bg-white p-2 pb-6 rotate-2 shadow-[4px_4px_0_var(--ink)] transition-transform group-hover:rotate-0">
                        <Media imgClassName="w-full h-auto" resource={image} size="25vw" />
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            )
          })}
        </ol>
      )}
    </div>
  )
}
