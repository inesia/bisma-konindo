import Link from 'next/link'
import { PROPOSAL_HUB } from '@/lib/site'

export function PageHub() {
  return (
    <section aria-labelledby="hub-title" className="border-t border-ink/10 bg-paper py-20 md:py-28">
      <div className="shell">
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          <p className="meta col-span-12 text-steel lg:col-span-3">Bagian utama</p>
          <h2
            id="hub-title"
            className="display col-span-12 text-[36px] md:text-5xl lg:col-span-8 lg:col-start-5"
          >
            Jelajahi layanan dan standar kami.
          </h2>
        </div>
        <ol className="mt-12 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 md:grid-cols-2">
          {PROPOSAL_HUB.map((page) => (
            <li key={page.href} data-reveal className="bg-paper">
              <Link
                href={page.href}
                className="group flex h-full flex-col p-6 transition-colors hover:bg-white md:p-8"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="meta text-signal">{page.bab}</span>
                  <span className="font-mono text-sm text-steel">{page.index}</span>
                </div>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.02em] transition-transform group-hover:translate-x-1 md:text-[28px]">
                  {page.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                  {page.summary}
                </p>
                <span className="meta mt-6 text-ink/50 group-hover:text-signal">
                  Buka halaman →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
