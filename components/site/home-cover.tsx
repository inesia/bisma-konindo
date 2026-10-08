import Link from 'next/link'
import { COMPANY } from '@/lib/proposal-content'
import { PROPOSAL_HUB } from '@/lib/proposal-content'
import { ASSESSMENT_LINK, WHATSAPP_DISPLAY } from '@/lib/site'
import { Action, delay } from './primitives'

export function HomeCover() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-32 pb-16 text-paper md:pb-24 md:pt-40">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-ink via-ink-2 to-signal"
        />
        <div className="shell relative">
          <p data-reveal className="meta text-paper/70">
            {COMPANY.domain} · {WHATSAPP_DISPLAY}
          </p>
          <h1
            data-reveal
            style={delay(80)}
            className="display mt-8 text-paper text-[14vw] uppercase leading-[0.88] md:text-[88px] lg:text-[104px]"
          >
            Proposal
            <br />
            Security
          </h1>
          <p
            data-reveal
            style={delay(160)}
            className="mt-8 max-w-xl text-lg leading-snug text-paper/85 md:text-xl"
          >
            {COMPANY.name} — tenaga pengamanan profesional dengan legalitas lengkap,
            pelatihan standar Polri, dan operasional terstruktur.
          </p>
          <div
            data-reveal
            style={delay(240)}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Action href={ASSESSMENT_LINK} external variant="solid-light">
              Minta Penilaian Keamanan
            </Action>
            <Action href="/tentang" variant="ghost-light">
              Jelajahi Layanan
            </Action>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper py-16 md:py-24">
        <div className="shell">
          <p className="meta text-steel">Bagian utama</p>
          <ol className="mt-10 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 md:grid-cols-2">
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
                  <h2 className="mt-4 text-2xl font-medium tracking-[-0.02em] transition-transform group-hover:translate-x-1 md:text-[28px]">
                    {page.title}
                  </h2>
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
    </>
  )
}
