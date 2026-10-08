import Image from 'next/image'
import { TRAINING_SUBJECTS } from '@/lib/site'
import { CountUp } from './count-up'
import { Rule, SectionIndex, delay } from './primitives'

const PROCESS = [
  { name: 'Seleksi', note: 'Penyaringan sesuai kebutuhan operasional.' },
  { name: 'Pelatihan', note: 'Pendidikan terstruktur — teori dan praktik.' },
  { name: 'Penempatan', note: 'Penugasan ke pos sesuai rencana lokasi.' },
  { name: 'Supervisi', note: 'Pengawasan lapangan oleh danru dan koordinator.' },
  { name: 'Evaluasi', note: 'Coaching berkala dan tinjauan kinerja.' },
]

export function Standard() {
  return (
    <section id="standard" aria-labelledby="standard-title" className="bg-paper py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-3">
            <SectionIndex index="03" label="Standar Bisma" />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              id="standard-title"
              data-reveal
              className="display text-[44px] md:text-7xl lg:text-[88px]"
            >
              Kami melatih
              <br />
              orang-orang di
              <br />
              balik perlindungan<span className="text-signal">.</span>
            </h2>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <Rule />
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-6 border-r border-ink/15 py-8 md:col-span-5 md:py-12">
              <p className="meta text-steel">Durasi</p>
              <p className="display mt-4 flex items-start text-[96px] leading-[0.8] md:text-[200px] lg:text-[240px]">
                <CountUp to={14} />
              </p>
              <p className="mt-4 text-xl font-medium tracking-[-0.01em] md:text-2xl">Hari</p>
            </div>
            <div className="col-span-6 py-8 pl-2 md:col-span-4 md:py-12 md:pl-8">
              <p className="meta text-steel">Jam pelatihan</p>
              <p className="display mt-4 text-[96px] leading-[0.8] text-signal md:text-[200px] lg:text-[240px]">
                <CountUp to={232} duration={2000} />
              </p>
              <p className="mt-4 text-xl font-medium tracking-[-0.01em] md:text-2xl">Jam</p>
            </div>
            <div className="col-span-12 border-t border-ink/15 py-6 md:col-span-3 md:border-t-0 md:border-l md:py-12 md:pl-6">
              <p className="text-[15px] leading-relaxed text-ink/75">
                Pendidikan keamanan terstruktur mengikuti pola pelatihan standar Polri.
              </p>
              <p className="meta mt-6 text-steel">Teori + praktik lapangan</p>
            </div>
          </div>
          <Rule />
        </div>

        <div className="mt-20 md:mt-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-6">
            <p className="meta col-span-12 text-steel md:col-span-3">
              Gambar 02 — Siklus personel
            </p>
            <p
              data-reveal
              className="col-span-12 max-w-xl text-lg leading-snug tracking-[-0.01em] md:col-span-8 md:col-start-5 md:text-xl"
            >
              Setelah penempatan, personel keamanan menerima pengembangan berkelanjutan dan
              coaching berkala melalui pelatihan teori dan praktik.
            </p>
          </div>

          <ol className="relative mt-12 grid grid-cols-1 md:grid-cols-5">
            <div
              aria-hidden
              data-reveal="line"
              className="absolute top-[7px] left-0 hidden h-px w-full bg-ink md:block"
            />
            <div
              aria-hidden
              data-reveal="line-y"
              className="absolute top-0 bottom-0 left-[7px] w-px bg-ink md:hidden"
            />
            {PROCESS.map((step, i) => (
              <li
                key={step.name}
                data-reveal
                style={delay(200 + i * 120)}
                className="group relative pb-10 pl-10 md:pr-6 md:pb-0 md:pl-0"
              >
                <span
                  aria-hidden
                  className="absolute top-0 left-0 block size-[15px] border border-ink bg-paper transition-colors duration-300 group-hover:bg-signal group-hover:border-signal md:relative"
                />
                <p className="meta text-signal md:mt-8">Langkah 0{i + 1}</p>
                <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em] md:text-[28px]">
                  {step.name}
                  {i < PROCESS.length - 1 && (
                    <span aria-hidden className="ml-3 hidden text-steel lg:inline">
                      →
                    </span>
                  )}
                </h3>
                <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-ink/65">
                  {step.note}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-24 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-32">
          <figure className="col-span-12 md:col-span-5">
            <div data-reveal="image" className="relative aspect-[4/5] overflow-hidden bg-ink">
              <Image
                src="/images/training.png"
                alt="Peserta pelatihan keamanan melakukan latihan disiplin baris-berbaris di lapangan outdoor."
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover grayscale"
              />
            </div>
            <figcaption className="meta mt-3 flex justify-between text-steel">
              <span>Gambar 03 — Disiplin baris-berbaris</span>
              <span>Lapangan pelatihan</span>
            </figcaption>
          </figure>

          <div className="col-span-12 md:col-span-7 md:pl-6 lg:pl-12">
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                Indeks kurikulum
              </h3>
              <p className="meta text-steel">{TRAINING_SUBJECTS.length} mata pelajaran</p>
            </div>
            <div className="mt-6">
              <Rule />
            </div>
            <ol className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
              {TRAINING_SUBJECTS.map((subject, i) => (
                <li
                  key={subject}
                  className="group flex items-baseline gap-4 border-b border-ink/10 py-3 transition-colors hover:border-ink/40"
                >
                  <span className="meta w-6 shrink-0 text-steel transition-colors group-hover:text-signal">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[15px] tracking-[-0.005em]">{subject}</span>
                </li>
              ))}
            </ol>
            <p className="meta mt-6 text-steel">
              Mata pelajaran disampaikan melalui sesi teori dan praktik, serta diperkuat
              dengan coaching berkala setelah penempatan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
