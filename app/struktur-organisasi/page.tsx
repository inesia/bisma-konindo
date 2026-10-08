import Image from 'next/image'
import { PageShell } from '@/components/site/page-shell'
import { SiteLayout } from '@/components/site/site-layout'
import { pageMetadata } from '@/lib/page-meta'

export const metadata = pageMetadata(
  'Struktur Organisasi',
  'Diagram struktur organisasi operasional keamanan PT Bisma Konindo.',
)

export default function StrukturOrganisasiPage() {
  return (
    <SiteLayout>
      <PageShell
        bab="Tim & struktur"
        index="05"
        label="Struktur Organisasi"
        title="Struktur organisasi operasional."
        intro="Bagaimana tanggung jawab dibagi agar operasi di setiap site tetap terkendali."
        tone="white"
      >
        <figure className="border border-ink/10 bg-white p-4 md:p-6">
          <div className="relative aspect-[4/3] w-full bg-paper-2">
            <Image
              src="/proposal/struktur-organisasi.png"
              alt="Diagram struktur organisasi PT Bisma Konindo."
              fill
              className="object-contain p-4"
              sizes="(min-width: 768px) 80vw, 100vw"
            />
          </div>
          <figcaption className="meta mt-4 text-steel">
            Struktur operasional Bisma Konindo
          </figcaption>
        </figure>
      </PageShell>
    </SiteLayout>
  )
}
