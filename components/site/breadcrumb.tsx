import Link from 'next/link'
import { cn } from '@/lib/utils'

export type Crumb = {
  label: string
  href?: string
}

export function Breadcrumb({
  items,
  className,
}: {
  items: Crumb[]
  className?: string
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn('mb-8', className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={`${item.label}-${i}`} className="meta flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden className="text-ink/25">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-steel transition-colors hover:text-signal"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? 'text-ink' : 'text-steel'}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
