import Image from 'next/image'
import { WHATSAPP_DISPLAY } from '@/lib/site'
import { SectionIndex } from './primitives'

const FACTS = [
  ['Badan hukum', 'PT. Bisma Konindo'],
  ['Bidang usaha', 'Penyedia tenaga keamanan / outsourcing keamanan'],
  ['Asosiasi', 'ABUJAPI'],
  ['Izin operasional', 'SIO Penyedia Tenaga Keamanan · SIO Pelatihan Keamanan'],
  ['Kontak', WHATSAPP_DISPLAY],
  ['Web', 'bismakonindo.com'],
]

export function Company() {
  return (
    <section id="company" aria-labelledby="company-title" className="bg-white py-24 md:py-36">
      <div className="shell grid grid-cols-12 gap-x-6 gap-y-12">
        <figure className="col-span-12 md:col-span-6 lg:col-span-6 md:-ml-10 lg:-ml-14">
          <div data-reveal="image" className="relative aspect-[4/5] overflow-hidden bg-ink">
            <Image
              src="/images/company.png"
              alt="Koordinator operasional keamanan senior memandang kota dari jendela gedung tinggi."
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover saturate-[0.5]"
            />
          </div>
          <figcaption className="meta mt-3 text-steel md:pl-10 lg:pl-14">
            Kepemimpinan operasional — koordinasi site
          </figcaption>
        </figure>

        <div className="col-span-12 flex flex-col md:col-span-6 lg:col-span-5 lg:col-start-8">
          <SectionIndex index="09" label="Perusahaan" />
          <h2
            id="company-title"
            data-reveal
            className="display mt-10 text-[40px] md:text-6xl lg:text-[64px]"
          >
            Mitra keamanan yang berlandaskan disiplin.
          </h2>
          <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-ink/75">
            <p>
              PT Bisma Konindo adalah perusahaan yang bergerak di bidang penyediaan tenaga
              keamanan / jasa outsourcing keamanan.
            </p>
            <p>
              Perusahaan beroperasi melalui perjanjian terstruktur, manajemen personel,
              pelatihan, supervisi operasional, dan prosedur keamanan.
            </p>
          </div>

          <dl className="mt-12 border-t border-ink md:mt-auto md:pt-0">
            {FACTS.map(([k, v]) => (
              <div key={k} className="grid grid-cols-5 gap-4 border-b border-ink/15 py-3.5">
                <dt className="meta col-span-2 pt-0.5 text-steel">{k}</dt>
                <dd className="col-span-3 text-sm font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
