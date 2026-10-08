import Image from 'next/image'
import { ASSESSMENT_LINK } from '@/lib/site'
import { Action, delay } from './primitives'

const STRIP = [
  'Tenaga Keamanan',
  'Sistem Operasional',
  'Pelatihan',
  'Supervisi',
  'Koordinasi',
]

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-paper"
    >
      <Image
        src="/images/hero.png"
        alt="Petugas keamanan Bisma Konindo berkoordinasi via radio di pintu masuk menara korporat saat senja."
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[72%_center] saturate-[0.7]"
      />
      <div aria-hidden className="hero-gradient absolute inset-0 -z-10" />

      <div className="shell flex flex-1 flex-col justify-end pt-32 pb-10 md:justify-center md:pb-0">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-9 lg:col-span-8">
            <div data-reveal className="flex items-center gap-3">
              <span aria-hidden className="size-1.5 bg-signal" />
              <span className="eyebrow text-paper/80">Jasa Keamanan</span>
              <span aria-hidden className="h-px w-8 bg-paper/30" />
              <span className="eyebrow text-paper/50">Bisma Konindo</span>
            </div>

            <h1
              id="hero-title"
              className="display mt-8 text-paper text-[13.5vw] uppercase leading-[0.88] md:text-[84px] lg:text-[min(104px,11.5svh)] xl:text-[min(120px,11.5svh)]"
            >
              <span data-reveal style={delay(80)} className="block">
                Keamanan
              </span>
              <span data-reveal style={delay(180)} className="block">
                yang melindungi
              </span>
              <span data-reveal style={delay(280)} className="block">
                bisnis<span className="text-signal">.</span>
              </span>
            </h1>
          </div>

          <div className="col-span-12 mt-10 md:col-span-7 md:mt-12 lg:col-span-5">
            <p
              data-reveal
              style={delay(420)}
              className="text-xl leading-snug tracking-[-0.01em] text-paper md:text-2xl"
            >
              Tenaga keamanan terintegrasi, kontrol operasional, dan eksekusi
              lapangan yang disiplin.
            </p>
            <p
              data-reveal
              style={delay(500)}
              className="mt-5 max-w-md text-[15px] leading-relaxed text-paper/65"
            >
              PT Bisma Konindo menyediakan tenaga keamanan profesional dengan
              sistem operasional terstruktur, pelatihan, supervisi, dan koordinasi.
            </p>
            <div
              data-reveal
              style={delay(580)}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Action href={ASSESSMENT_LINK} external variant="solid-light">
                Minta Penilaian Keamanan
              </Action>
              <Action href="/pelaksanaan-keamanan" variant="ghost-light">
                Jelajahi Layanan Kami
              </Action>
            </div>
          </div>
        </div>
      </div>

      <div className="shell relative mt-14 md:mt-16">
        <div data-reveal="line" style={delay(700)} className="h-px w-full bg-paper/20" />
        <ul
          aria-label="Kapabilitas operasional"
          className="grid grid-cols-2 gap-y-3 py-5 sm:grid-cols-3 md:flex md:justify-between md:py-6"
        >
          {STRIP.map((item, i) => (
            <li
              key={item}
              data-reveal
              style={delay(760 + i * 60)}
              className="meta flex items-center gap-3 text-paper/70"
            >
              <span className="text-signal">0{i + 1}</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
