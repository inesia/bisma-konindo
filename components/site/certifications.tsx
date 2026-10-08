'use client'

import { useEffect, useRef, useState } from 'react'
import { CERTIFICATION_GROUPS, type Certification, whatsappLink } from '@/lib/site'
import { SectionIndex } from './primitives'

type Selected = Certification & { ref: string }

export function Certifications() {
  const [selected, setSelected] = useState<Selected | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const total = CERTIFICATION_GROUPS.reduce((n, g) => n + g.items.length, 0)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (selected && !dialog.open) dialog.showModal()
    if (!selected && dialog.open) dialog.close()
  }, [selected])

  return (
    <section id="certifications" aria-labelledby="cert-title" className="bg-paper py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-3">
            <SectionIndex index="08" label="Terpercaya. Bersertifikat. Akuntabel." />
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <h2 id="cert-title" data-reveal className="display text-[44px] md:text-7xl lg:text-[80px]">
              Landasan
              <br />
              di balik
              <br />
              operasi kami.
            </h2>
          </div>
          <div className="col-span-12 self-end md:col-span-4 lg:col-span-3">
            <p className="display text-6xl">
              {total}
              <span className="text-signal">.</span>
            </p>
            <p className="meta mt-2 text-steel">Dokumen dalam arsip kepatuhan</p>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <div className="hidden grid-cols-12 gap-x-6 border-b border-ink pb-3 md:grid">
            <p className="meta col-span-1 text-steel">Ref.</p>
            <p className="meta col-span-5 text-steel">Dokumen</p>
            <p className="meta col-span-4 text-steel">Penerbit</p>
            <p className="meta col-span-2 text-right text-steel">Rekam</p>
          </div>

          {CERTIFICATION_GROUPS.map((group) => (
            <div key={group.code} className="mt-10 first:mt-0 md:mt-14">
              <div className="flex items-baseline justify-between border-b border-ink/15 py-4">
                <h3 className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-signal">{group.code}</span>
                  <span className="text-xl font-medium tracking-[-0.015em] md:text-2xl">
                    {group.group}
                  </span>
                </h3>
                <span className="meta text-steel">{group.items.length} item</span>
              </div>
              <ul>
                {group.items.map((item, i) => {
                  const ref = `${group.code}.${String(i + 1).padStart(2, '0')}`
                  return (
                    <li key={item.title}>
                      <button
                        type="button"
                        onClick={() => setSelected({ ...item, ref })}
                        className="group grid w-full grid-cols-12 items-baseline gap-x-6 border-b border-ink/10 py-4 text-left transition-colors duration-300 hover:bg-white focus-visible:bg-white focus-visible:outline-none md:py-5"
                      >
                        <span className="meta col-span-2 text-steel group-hover:text-signal md:col-span-1 md:pl-2">
                          {ref}
                        </span>
                        <span className="col-span-10 text-[17px] font-medium tracking-[-0.01em] transition-transform duration-300 md:col-span-5 md:text-lg md:group-hover:translate-x-1">
                          {item.title}
                        </span>
                        <span className="meta col-span-10 col-start-3 mt-1 text-steel md:col-span-4 md:col-start-auto md:mt-0">
                          {item.authority ?? 'Rekam personel bersertifikat'}
                        </span>
                        <span className="meta col-span-2 hidden items-center justify-end gap-2 text-ink/60 group-hover:text-ink md:flex md:pr-2">
                          Lihat
                          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
          <p className="meta mt-8 max-w-xl text-steel">
            Nomor dokumen dan salinan lengkap disediakan kepada calon klien selama proses
            penilaian dan pengadaan.
          </p>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setSelected(null)}
        onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        aria-labelledby="doc-title"
        className="m-auto w-[min(920px,calc(100vw-2rem))] max-h-[calc(100svh-2rem)] bg-transparent p-0 text-ink backdrop:bg-ink/70"
      >
        {selected && (
          <div className="grid animate-in fade-in slide-in-from-bottom-2 duration-500 bg-paper md:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col p-6 md:p-10">
              <div className="flex items-baseline justify-between">
                <p className="meta text-signal">Ref. {selected.ref}</p>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="meta text-ink/60 hover:text-ink"
                  autoFocus
                >
                  Tutup [Esc]
                </button>
              </div>
              <p className="meta mt-10 text-steel">{selected.category}</p>
              <h3 id="doc-title" className="display mt-3 text-4xl md:text-5xl">
                {selected.title}
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
                {selected.description}
              </p>
              <dl className="mt-8 border-t border-ink/15">
                {[
                  ['Penerbit', selected.authority ?? 'Rekam personel bersertifikat'],
                  ['Status', 'Tersedia di arsip'],
                  ['Verifikasi', 'Dapat diminta'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-ink/15 py-3">
                    <dt className="meta text-steel">{k}</dt>
                    <dd className="text-right text-sm font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={whatsappLink(
                  `Halo PT Bisma Konindo, kami ingin meminta verifikasi dokumen: ${selected.title}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-12 items-center justify-between bg-ink px-5 text-[12.5px] font-medium uppercase tracking-[0.1em] text-paper transition-colors hover:bg-signal md:mt-auto"
              >
                Minta salinan dokumen
                <span aria-hidden>→</span>
              </a>
            </div>

            <DocumentPreview doc={selected} />
          </div>
        )}
      </dialog>
    </section>
  )
}

function DocumentPreview({ doc }: { doc: Selected }) {
  return (
    <div aria-hidden className="hidden bg-paper-2 p-8 md:block">
      <div className="relative mx-auto aspect-[1/1.414] max-h-[70svh] bg-white p-8 shadow-[0_1px_0_color-mix(in_srgb,var(--brand-navy)_8%,transparent)]">
        <div className="flex items-start justify-between">
          <span className="grid size-4 grid-cols-2 gap-[2px]">
            <span className="bg-ink" />
            <span className="bg-ink" />
            <span className="bg-ink" />
            <span className="bg-signal" />
          </span>
          <span className="meta text-steel">{doc.ref}</span>
        </div>
        <p className="mt-8 text-center text-[11px] font-semibold uppercase tracking-[0.16em]">
          {doc.title}
        </p>
        <p className="meta mt-2 text-center text-steel">PT. Bisma Konindo</p>
        <p className="meta mt-1 text-center text-steel/70">No. ████████████</p>
        <div className="mt-8 space-y-2.5">
          {[92, 100, 86, 97, 74, 100, 88, 63].map((w, i) => (
            <div key={i} className="h-[5px] bg-ink/[0.07]" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="mt-6 space-y-2.5">
          {[100, 81, 95, 58].map((w, i) => (
            <div key={i} className="h-[5px] bg-ink/[0.07]" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="absolute right-8 bottom-8 left-8 flex items-end justify-between">
          <div className="space-y-2">
            <div className="h-px w-24 bg-ink/30" />
            <p className="meta text-steel/70">Disahkan</p>
          </div>
          <div className="grid size-16 place-items-center rounded-full border border-signal/40">
            <span className="meta text-[8px] text-signal/70">Stempel</span>
          </div>
        </div>
        <div className="absolute inset-0 grid place-items-center">
          <span className="meta -rotate-12 border border-ink/20 bg-white/80 px-3 py-1.5 text-ink/50">
            Pratinjau · Disensor
          </span>
        </div>
      </div>
    </div>
  )
}
