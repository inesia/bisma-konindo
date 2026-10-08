import { SERVICES } from '@/lib/site'
import { Rule, SectionIndex, delay } from './primitives'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-white py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-3">
            <SectionIndex index="02" label="Apa yang Kami Lakukan" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              id="services-title"
              data-reveal
              className="display text-[44px] md:text-7xl lg:text-[88px]"
            >
              Operasi keamanan
              <br className="hidden md:block" /> disusun untuk
              <br className="hidden md:block" /> bisnis Anda.
            </h2>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <div className="hidden grid-cols-12 gap-x-6 pb-4 md:grid">
            <p className="meta col-span-2 text-steel">No.</p>
            <p className="meta col-span-4 text-steel">Layanan</p>
            <p className="meta col-span-4 text-steel">Ruang lingkup</p>
            <p className="meta col-span-2 text-right text-steel">Fokus</p>
          </div>
          <Rule />
          <ol>
            {SERVICES.map((s, i) => (
              <li key={s.name} data-reveal style={delay(i * 80)}>
                <div className="group relative grid grid-cols-12 gap-x-6 gap-y-4 border-b border-ink/15 py-8 transition-colors duration-500 hover:bg-paper md:py-10">
                  <span
                    aria-hidden
                    className="absolute top-0 left-0 h-px w-full origin-left scale-x-0 bg-signal transition-transform duration-700 group-hover:scale-x-100"
                  />
                  <div className="col-span-3 flex items-start md:col-span-2 md:pl-2">
                    <span className="display text-5xl text-ink/20 transition-colors duration-500 group-hover:text-signal md:text-6xl">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="col-span-9 self-center text-[28px] font-medium leading-[1.05] tracking-[-0.025em] transition-transform duration-500 md:col-span-4 md:text-4xl lg:text-[44px] md:group-hover:translate-x-2">
                    {s.name}
                  </h3>
                  <p className="col-span-12 max-w-md text-[15px] leading-relaxed text-ink/70 md:col-span-4 md:self-center">
                    {s.description}
                  </p>
                  <div className="col-span-12 flex items-center justify-between gap-4 md:col-span-2 md:flex-col md:items-end md:justify-center md:pr-2">
                    <ul className="flex gap-3 md:flex-col md:items-end md:gap-1">
                      {s.scope.map((t) => (
                        <li key={t} className="meta text-steel">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Indicator active={i} />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-x-6">
          <p className="meta col-span-12 text-steel md:col-span-6 md:col-start-7">
            Setiap kerja sama dimulai dengan penilaian lokasi. Pos, model shift, dan
            prosedur ditetapkan per lokasi — bukan disalin dari template.
          </p>
        </div>
      </div>
    </section>
  )
}

function Indicator({ active }: { active: number }) {
  return (
    <span aria-hidden className="flex gap-[3px] md:mt-3">
      {SERVICES.map((_, j) => (
        <span
          key={j}
          className={
            j === active
              ? 'h-3 w-[3px] bg-signal'
              : 'h-3 w-[3px] bg-ink/15 transition-colors duration-500 group-hover:bg-ink/30'
          }
        />
      ))}
    </span>
  )
}
