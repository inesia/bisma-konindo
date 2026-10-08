import { Rule, SectionIndex, delay } from './primitives'
import { ShiftChart } from './shift-chart'

const CHAIN = [
  { role: 'Koordinator', note: 'Tanggung jawab level site & hubungan klien' },
  { role: 'Danru / Pemimpin Shift', note: 'Komando shift, appel, distribusi tugas' },
  { role: 'Tenaga Keamanan', note: 'Eksekusi pos sesuai SOP' },
]

const OUTPUTS = ['Pos', 'Patroli', 'Pelaporan']

const CYCLE = [
  'Persiapan',
  'Appel',
  'Absensi',
  'Distribusi Tugas',
  'Serah Terima',
  'Patroli',
  'Pelaporan',
  'Evaluasi',
]

export function Operations() {
  return (
    <section id="operations" aria-labelledby="operations-title" className="bg-white py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-3">
            <SectionIndex index="04" label="Cara Kami Beroperasi" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              id="operations-title"
              data-reveal
              className="display text-[44px] md:text-7xl lg:text-[88px]"
            >
              Sistem keamanan
              <br className="hidden md:block" /> dirancang tetap
              <br className="hidden md:block" /> terkendali.
            </h2>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-16 md:mt-28">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-baseline justify-between pb-4">
              <p className="meta text-steel">Gambar 04 — Rantai komando</p>
              <p className="meta text-steel">Atas → lapangan</p>
            </div>
            <Rule />
            <ol className="relative mt-8">
              <div
                aria-hidden
                data-reveal="line-y"
                className="absolute top-3 bottom-24 left-[5px] w-px bg-ink/40"
              />
              {CHAIN.map((node, i) => (
                <li
                  key={node.role}
                  data-reveal
                  style={delay(i * 140)}
                  className="relative pb-10 pl-10"
                >
                  <span
                    aria-hidden
                    className={
                      i === 0
                        ? 'absolute top-2 left-0 size-[11px] bg-signal'
                        : 'absolute top-2 left-0 size-[11px] border border-ink bg-white'
                    }
                  />
                  <p className="meta text-steel">Level 0{i + 1}</p>
                  <h3 className="mt-1 text-[28px] font-medium uppercase leading-none tracking-[-0.02em] md:text-[34px]">
                    {node.role}
                  </h3>
                  <p className="mt-2 text-sm text-ink/60">{node.note}</p>
                </li>
              ))}
              <li data-reveal style={delay(420)} className="relative pl-10">
                <span aria-hidden className="absolute top-2 left-0 size-[11px] bg-ink" />
                <p className="meta text-steel">Level 04 — Output lapangan</p>
                <div className="mt-3 grid grid-cols-3 border-t border-l border-ink">
                  {OUTPUTS.map((o) => (
                    <span
                      key={o}
                      className="border-r border-b border-ink px-3 py-4 text-center text-sm font-semibold uppercase tracking-[0.06em]"
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </li>
            </ol>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:pl-10">
            <ShiftChart />
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <div className="flex items-baseline justify-between pb-4">
            <p className="meta text-steel">Gambar 06 — Siklus tugas, setiap shift</p>
            <p className="meta hidden text-steel md:block">Berulang di setiap serah terima</p>
          </div>
          <div className="h-px w-full bg-ink" data-reveal="line" />
          <ol className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
            {CYCLE.map((step, i) => (
              <li
                key={step}
                data-reveal
                style={delay(i * 70)}
                className="relative border-b border-ink/10 py-5 pr-3 lg:border-b-0"
              >
                <span
                  aria-hidden
                  className={
                    step === 'Serah Terima'
                      ? 'absolute -top-px left-0 h-[3px] w-10 bg-signal'
                      : 'absolute -top-px left-0 h-[3px] w-4 bg-ink'
                  }
                />
                <p className="meta text-steel">{String(i + 1).padStart(2, '0')}</p>
                <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.06em]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
