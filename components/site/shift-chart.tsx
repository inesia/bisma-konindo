'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const MODELS = {
  three: {
    label: 'Model 3 Shift',
    shifts: [
      { name: 'Shift I', from: '08:00', to: '16:00', start: 0, span: 8, tone: 'day' },
      { name: 'Shift II', from: '16:00', to: '24:00', start: 8, span: 8, tone: 'dusk' },
      { name: 'Shift III', from: '24:00', to: '08:00', start: 16, span: 8, tone: 'night' },
    ],
  },
  two: {
    label: 'Model 2 Shift',
    shifts: [
      { name: 'Shift I', from: '08:00', to: '20:00', start: 0, span: 12, tone: 'day' },
      { name: 'Shift II', from: '20:00', to: '08:00', start: 12, span: 12, tone: 'night' },
    ],
  },
} as const

type ModelKey = keyof typeof MODELS

const TICKS = ['08:00', '12:00', '16:00', '20:00', '24:00', '04:00', '08:00']

const TONE = {
  day: 'bg-paper text-ink',
  dusk: 'bg-steel/25 text-ink',
  night: 'bg-ink text-paper',
}

export function ShiftChart() {
  const [model, setModel] = useState<ModelKey>('three')
  const current = MODELS[model]

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4">
        <p className="meta text-steel">Gambar 05 — Struktur shift, cakupan 24 jam</p>
        <div role="tablist" aria-label="Model shift" className="flex border border-ink/20">
          {(Object.keys(MODELS) as ModelKey[]).map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={model === key}
              onClick={() => setModel(key)}
              className={cn(
                'meta px-3 py-2 transition-colors duration-300',
                model === key ? 'bg-ink text-paper' : 'text-ink/60 hover:text-ink',
              )}
            >
              {MODELS[key].label}
            </button>
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-ink/15" />

      <div className="mt-10">
        <div className="flex items-baseline gap-4">
          <p className="display text-[64px] md:text-[96px]">
            {current.shifts.length}
            <span className="text-signal">×</span>
          </p>
          <p className="text-lg font-medium tracking-[-0.01em]">
            {current.shifts.length === 3 ? 'Shift 8 jam' : 'Shift 12 jam'}
            <span className="meta mt-1 block text-steel">Cakupan pos 24 jam tanpa putus</span>
          </p>
        </div>

        <div className="mt-10" role="img" aria-label={`${current.label}: ${current.shifts.map((s) => `${s.name} ${s.from} hingga ${s.to}`).join(', ')}`}>
          <div className="relative flex h-24 border border-ink">
            {current.shifts.map((s, i) => (
              <div
                key={`${model}-${s.name}`}
                className={cn(
                  'flex flex-col justify-between p-3 transition-all duration-700 animate-in fade-in',
                  TONE[s.tone],
                  i > 0 && 'border-l border-ink',
                )}
                style={{ width: `${(s.span / 24) * 100}%` }}
              >
                <span className="meta opacity-70">{s.name}</span>
                <span className="text-[13px] font-semibold tabular-nums tracking-[0.02em] md:text-[15px]">
                  {s.from} — {s.to}
                </span>
              </div>
            ))}
            {current.shifts.slice(1).map((s) => (
              <span
                key={`hand-${model}-${s.start}`}
                aria-hidden
                className="absolute -top-3 -bottom-3 w-[2px] -translate-x-1/2 bg-signal"
                style={{ left: `${(s.start / 24) * 100}%` }}
              />
            ))}
          </div>

          <div aria-hidden className="relative mt-3 h-5">
            {TICKS.map((t, i) => (
              <span
                key={`${t}-${i}`}
                className={cn(
                  'meta absolute top-0 text-steel tabular-nums',
                  i === 0 ? 'translate-x-0' : i === TICKS.length - 1 ? '-translate-x-full' : '-translate-x-1/2',
                  i % 2 === 1 && 'max-sm:hidden',
                )}
                style={{ left: `${(i / (TICKS.length - 1)) * 100}%` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-3 border-t border-ink/15">
          {[
            ['Titik serah terima', String(current.shifts.length)],
            ['Cakupan', '24 / 7'],
            ['Pemimpin shift', 'Setiap shift'],
          ].map(([k, v]) => (
            <div key={k} className="border-r border-ink/15 py-4 pr-3 last:border-r-0 [&:not(:first-child)]:pl-4">
              <dt className="meta text-steel">{k}</dt>
              <dd className="mt-1 text-lg font-medium tracking-[-0.01em]">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="meta mt-4 flex items-center gap-2 text-steel">
          <span aria-hidden className="inline-block h-3 w-[2px] bg-signal" />
          Serah terima — transfer pos, peralatan, dan laporan situasi yang terdokumentasi.
        </p>
      </div>
    </div>
  )
}
