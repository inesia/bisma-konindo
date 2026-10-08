import { Rule } from './primitives'

export function BulletList({ items, ordered }: { items: readonly string[]; ordered?: boolean }) {
  if (ordered) {
    return (
      <ol className="list-decimal space-y-2 pl-5 marker:text-signal">
        {items.map((item) => (
          <li key={item} className="pl-1 text-[15px] leading-relaxed text-ink/80">
            {item}
          </li>
        ))}
      </ol>
    )
  }
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="text-[15px] leading-relaxed text-ink/80">
          <span className="mr-2 text-signal">—</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export function DataTable({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <dl className="border-t border-ink">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-12 gap-4 border-b border-ink/15 py-3.5"
        >
          <dt className="meta col-span-12 text-steel md:col-span-4">{row.label}</dt>
          <dd className="col-span-12 text-sm font-medium md:col-span-8">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function ContentSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">{title}</h2>
      <div className="mt-4">
        <Rule />
      </div>
      <div className="mt-6">{children}</div>
    </section>
  )
}
