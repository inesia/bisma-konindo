import { SectionIndex, delay } from './primitives'

const CATEGORIES = [
  { n: '01', name: 'Manusia', items: ['Karyawan', 'Pengunjung', 'Tamu'] },
  { n: '02', name: 'Properti', items: ['Bangunan', 'Fasilitas', 'Infrastruktur'] },
  { n: '03', name: 'Aset', items: ['Kendaraan', 'Peralatan', 'Aset Perusahaan'] },
  { n: '04', name: 'Lingkungan', items: ['Area Akses', 'Parkir', 'Perimeter'] },
]

export function Protect() {
  return (
    <section aria-labelledby="protect-title" className="bg-ink py-24 text-paper md:py-36">
      <div className="shell">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-3">
            <SectionIndex index="05" label="Ruang Lingkup Perlindungan" tone="light" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              id="protect-title"
              data-reveal
              className="display text-paper text-[44px] md:text-7xl lg:text-[88px]"
            >
              Kami melindungi
              <br />
              yang menjaga
              <br />
              bisnis Anda berjalan.
            </h2>
          </div>
        </div>

        <ol className="mt-20 border-t border-paper/15 md:mt-28">
          {CATEGORIES.map((c, i) => (
            <li
              key={c.n}
              data-reveal
              style={delay(i * 100)}
              className="group grid grid-cols-12 items-end gap-x-6 gap-y-4 border-b border-paper/15 py-8 md:py-10"
            >
              <span className="col-span-2 font-mono text-sm text-signal md:col-span-1 md:self-start md:pt-4">
                {c.n}
              </span>
              <h3 className="display col-span-10 text-[16vw] uppercase leading-[0.82] text-paper/90 transition-colors duration-500 group-hover:text-paper md:col-span-7 md:text-[120px] lg:text-[156px]">
                {c.name}
              </h3>
              <ul className="col-span-10 col-start-3 flex flex-wrap gap-x-6 gap-y-1 md:col-span-4 md:col-start-auto md:flex-col md:items-end md:pb-3">
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] text-paper/55 transition-colors duration-500 group-hover:text-paper/85 md:text-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
