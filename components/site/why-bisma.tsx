import { SectionIndex, delay } from './primitives'

const STATEMENTS = [
  {
    title: 'Personel Terlatih',
    body: 'Personel dilatih melalui pendidikan terstruktur dan pengembangan berkelanjutan.',
  },
  {
    title: 'Operasi Terstruktur',
    body: 'Eksekusi keamanan didukung SOP, struktur shift, koordinasi pos, dan pelaporan.',
  },
  {
    title: 'Kepemimpinan Berpengalaman',
    body: 'Didukung personel operasional berpengalaman dan keahlian terkait keamanan.',
  },
  {
    title: 'Koordinasi Kuat',
    body: 'Dirancang untuk berkoordinasi dengan pihak keamanan dan lingkungan terkait.',
  },
]

const EXPERTISE = ['Keamanan', 'Operasional', 'Telekomunikasi', 'Manajemen Perubahan']

export function WhyBisma() {
  return (
    <section aria-labelledby="why-title" className="bg-paper py-24 md:py-36">
      <div className="shell grid grid-cols-12 gap-x-6 gap-y-14">
        <div className="col-span-12 lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionIndex index="06" label="Mengapa Bisma" />
            <h2
              id="why-title"
              data-reveal
              className="display mt-10 text-[44px] md:text-7xl lg:text-[80px]"
            >
              Dibangun untuk
              <br />
              operasi
              <br />
              di lapangan.
            </h2>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <ol className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10">
            {STATEMENTS.map((s, i) => (
              <li
                key={s.title}
                data-reveal
                style={delay(i * 100)}
                className="border-t border-ink pt-6 pb-12"
              >
                <span className="meta text-signal">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-6 text-[26px] font-medium leading-[1.05] tracking-[-0.025em] md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink/70">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>

          <div data-reveal className="mt-6 bg-white p-8 md:p-12">
            <p className="meta text-steel">Latar belakang tim</p>
            <p className="mt-6 text-2xl leading-[1.2] tracking-[-0.02em] md:text-[32px]">
              Tim kami berpengalaman melayani{' '}
              <span className="text-signal">perusahaan multinasional</span> dan
              layanan keamanan khusus, didukung konsultan dari empat disiplin.
            </p>
            <ul className="mt-10 grid grid-cols-2 border-t border-ink/15 md:grid-cols-4">
              {EXPERTISE.map((e, i) => (
                <li
                  key={e}
                  className="border-b border-ink/15 py-4 pr-3 md:border-b-0 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-4"
                >
                  <span className="meta text-steel">C.0{i + 1}</span>
                  <p className="mt-1 text-[15px] font-medium">{e}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
