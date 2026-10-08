import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SectionIndex, delay } from './primitives'

type Shot = {
  src: string
  alt: string
  label: string
  caption: string
  aspect: string
  mono?: boolean
  className?: string
  sizes: string
}

const SHOTS: Record<string, Shot> = {
  patrol: {
    src: '/images/patrol.png',
    alt: 'Dua petugas keamanan melakukan patroli perimeter di pagar fasilitas industri saat fajar.',
    label: 'Patroli',
    caption: 'Rute perimeter, shift pagi',
    aspect: 'aspect-[16/10]',
    sizes: '(min-width: 768px) 58vw, 100vw',
  },
  gate: {
    src: '/images/gate-control.png',
    alt: 'Petugas keamanan memeriksa truk yang tiba di gerbang site industri.',
    label: 'Kontrol Gerbang',
    caption: 'Inspeksi kendaraan di pintu masuk',
    aspect: 'aspect-[4/5]',
    sizes: '(min-width: 768px) 34vw, 100vw',
  },
  briefing: {
    src: '/images/briefing.png',
    alt: 'Personel keamanan berbaris saat appel pagi sementara danru memberikan briefing.',
    label: 'Briefing Keamanan',
    caption: 'Appel sebelum serah terima shift',
    aspect: 'aspect-[21/9]',
    mono: true,
    sizes: '100vw',
  },
  access: {
    src: '/images/access-control.png',
    alt: 'Petugas keamanan memeriksa kartu identitas pengunjung di meja resepsionis lobi.',
    label: 'Kontrol Akses',
    caption: 'Verifikasi pengunjung, lobi',
    aspect: 'aspect-square',
    sizes: '(min-width: 768px) 30vw, 100vw',
  },
  supervision: {
    src: '/images/supervision.png',
    alt: 'Supervisor shift meninjau buku patroli dengan petugas keamanan di pos malam.',
    label: 'Supervisi Site',
    caption: 'Tinjauan buku patroli malam',
    aspect: 'aspect-[3/2]',
    sizes: '(min-width: 768px) 50vw, 100vw',
  },
}

function Figure({ shot, index, className }: { shot: Shot; index: number; className?: string }) {
  return (
    <figure className={cn('group', className)}>
      <div
        data-reveal="image"
        style={delay(index * 80)}
        className={cn('relative overflow-hidden bg-ink', shot.aspect)}
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          sizes={shot.sizes}
          className={cn(
            'object-cover transition-[filter] duration-700',
            shot.mono ? 'grayscale' : 'saturate-[0.65] group-hover:saturate-100',
          )}
        />
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-ink/15 pt-3">
        <span className="flex items-baseline gap-3">
          <span className="meta text-signal">{String(index + 1).padStart(2, '0')}</span>
          <span className="text-[13px] font-semibold uppercase tracking-[0.06em]">{shot.label}</span>
        </span>
        <span className="meta text-right text-steel">{shot.caption}</span>
      </figcaption>
    </figure>
  )
}

export function Field() {
  return (
    <section aria-labelledby="field-title" className="overflow-hidden bg-white py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-3">
            <SectionIndex index="07" label="Keamanan di Lapangan" />
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <h2
              id="field-title"
              data-reveal
              className="display text-[44px] md:text-7xl lg:text-[88px]"
            >
              Disiplin
              <br />
              terlihat
              <br />
              di lapangan.
            </h2>
          </div>
          <p className="meta col-span-12 self-end text-steel md:col-span-4 lg:col-span-3">
            Dokumentasi lapangan — patroli, gerbang, appel, akses, dan supervisi di
            berbagai site klien.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-14 md:mt-28">
          <Figure shot={SHOTS.patrol} index={0} className="col-span-12 md:col-span-7 md:-ml-14 lg:-ml-24" />
          <Figure shot={SHOTS.gate} index={1} className="col-span-12 md:col-span-4 md:col-start-9 md:mt-40" />

          <Figure shot={SHOTS.briefing} index={2} className="col-span-12 md:-mr-10 lg:-mr-14" />

          <Figure shot={SHOTS.access} index={3} className="col-span-8 md:col-span-4 md:col-start-2" />
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:mt-24">
            <blockquote data-reveal className="border-l border-signal pl-6">
              <p className="text-2xl leading-[1.2] tracking-[-0.02em] md:text-[30px]">
                Setiap pos punya prosedur. Setiap shift punya pemimpin. Setiap serah terima
                tercatat.
              </p>
              <footer className="meta mt-5 text-steel">Prinsip operasional</footer>
            </blockquote>
            <Figure shot={SHOTS.supervision} index={4} className="mt-14" />
          </div>
        </div>
      </div>
    </section>
  )
}
