import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Breadcrumb, type Crumb } from './breadcrumb'
import { SectionIndex } from './primitives'

type PageShellProps = {
  index: string
  label: string
  title: string
  bab?: string
  intro?: string
  children: ReactNode
  className?: string
  tone?: 'paper' | 'white'
  /** Override breadcrumb trail; defaults to Beranda / bab? / label */
  breadcrumbs?: Crumb[]
}

export function PageShell({
  index,
  label,
  title,
  bab,
  intro,
  children,
  className,
  tone = 'paper',
  breadcrumbs,
}: PageShellProps) {
  const crumbs: Crumb[] = breadcrumbs ?? [
    { label: 'Beranda', href: '/' },
    ...(bab ? [{ label: bab }] : []),
    { label },
  ]

  return (
    <main
      className={cn(
        'pb-24 pt-28 md:pb-36 md:pt-32',
        tone === 'paper' ? 'bg-paper' : 'bg-white',
        className,
      )}
    >
      <div className="shell">
        <Breadcrumb items={crumbs} />
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 lg:col-span-3">
            {bab && <p className="meta mb-3 text-signal">{bab}</p>}
            <SectionIndex index={index} label={label} />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h1
              data-reveal
              className="display text-[40px] md:text-6xl lg:text-[72px]"
            >
              {title}
            </h1>
            {intro && (
              <p
                data-reveal
                className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink/75 md:text-base"
              >
                {intro}
              </p>
            )}
          </div>
        </div>
        <div className="mt-14 md:mt-20">{children}</div>
      </div>
    </main>
  )
}
