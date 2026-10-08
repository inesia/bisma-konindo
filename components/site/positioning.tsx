import { Rule, SectionIndex, delay } from './primitives'

const LAYERS = [
  {
    n: '01',
    title: 'Manusia',
    body: 'Personel terlatih dan disiplin yang diseleksi sesuai kebutuhan operasional.',
    tags: ['Seleksi', 'Pelatihan', 'Disiplin'],
  },
  {
    n: '02',
    title: 'Sistem',
    body: 'SOP jelas, shift terstruktur, manajemen pos, prosedur patroli, pelaporan, dan serah terima.',
    tags: ['SOP', 'Shift', 'Pos', 'Serah terima'],
  },
  {
    n: '03',
    title: 'Kontrol',
    body: 'Supervisi, koordinasi, tindakan preventif, respons insiden, dan evaluasi berkelanjutan.',
    tags: ['Supervisi', 'Respons', 'Evaluasi'],
  },
]

export function Positioning() {
  return (
    <section aria-labelledby="positioning-title" className="bg-paper py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-3">
            <SectionIndex index="01" label="Posisi" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              id="positioning-title"
              data-reveal
              className="display text-[44px] md:text-7xl lg:text-[88px]"
            >
              Keamanan lebih
              <br />
              dari sekadar jaga.
            </h2>
            <div className="mt-10 grid grid-cols-9 gap-x-6 md:mt-14">
              <p
                data-reveal
                style={delay(100)}
                className="col-span-9 text-xl leading-snug tracking-[-0.01em] md:col-span-5 md:text-2xl"
              >
                Kami tidak hanya menyediakan tenaga keamanan.
              </p>
              <p
                data-reveal
                style={delay(180)}
                className="col-span-9 mt-4 text-[15px] leading-relaxed text-steel md:col-span-4 md:mt-1"
              >
                Kami membangun operasi keamanan terstruktur melalui manusia, prosedur,
                supervisi, dan evaluasi berkelanjutan.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-20 md:mt-28">
          <div className="flex items-center justify-between pb-4">
            <p className="meta text-steel">Gambar 01 — Model operasi</p>
            <p className="meta hidden text-steel md:block">Tiga lapisan · satu operasi</p>
          </div>
          <Rule />

          <LayerDiagram />

          <ol className="grid grid-cols-1 md:grid-cols-3">
            {LAYERS.map((layer, i) => (
              <li
                key={layer.n}
                data-reveal
                style={delay(i * 140)}
                className="relative border-b border-ink/15 py-10 md:border-b-0 md:py-12 md:pr-8 md:pl-8 md:first:pl-0 md:[&:not(:first-child)]:border-l"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-sm text-signal">{layer.n}</span>
                  <span className="meta text-steel">Lapisan</span>
                </div>
                <h3 className="display mt-10 text-6xl uppercase md:text-[64px] lg:text-[80px]">
                  {layer.title}
                </h3>
                <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-ink/75">
                  {layer.body}
                </p>
                <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-1">
                  {layer.tags.map((t) => (
                    <li key={t} className="meta text-steel">
                      / {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <Rule ms={200} />
        </div>
      </div>
    </section>
  )
}

function LayerDiagram() {
  return (
    <div aria-hidden className="relative hidden h-16 md:block">
      <svg viewBox="0 0 1200 64" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <line x1="0" y1="32" x2="1200" y2="32" stroke="currentColor" strokeOpacity="0.2" strokeDasharray="2 6" className="text-ink" />
        <path
          d="M1180 32 V56 H20 V40"
          fill="none"
          stroke="currentColor"
          className="text-signal"
          strokeOpacity={0.55}
          strokeWidth="1"
        />
      </svg>
      {[0, 33.333, 66.666].map((left, i) => (
        <span
          key={left}
          className="absolute top-1/2 flex -translate-y-1/2 items-center gap-2 bg-paper pr-3"
          style={{ left: `${left}%` }}
        >
          <span className={i === 2 ? 'size-2 bg-signal' : 'size-2 bg-ink'} />
          <span className="meta text-ink/60">
            {['Input', 'Proses', 'Umpan balik'][i]}
          </span>
        </span>
      ))}
      <span className="meta absolute right-0 bottom-0 translate-y-1/2 bg-paper pl-3 text-signal">
        Evaluasi berkelanjutan ↺
      </span>
    </div>
  )
}
