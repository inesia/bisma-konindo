import Image from 'next/image'
import { BulletList, ContentSection } from '@/components/site/content-blocks'
import { Field } from '@/components/site/field'
import { PageShell } from '@/components/site/page-shell'
import { SiteLayout } from '@/components/site/site-layout'
import { FIELD_CLOSING_POINTS } from '@/lib/proposal-content'
import { pageMetadata } from '@/lib/page-meta'

export const metadata = pageMetadata(
  'Sistem di Lapangan',
  'Prinsip sistem pengamanan di lapangan dan dokumentasi operasional.',
)

export default function SistemLapanganPage() {
  return (
    <SiteLayout>
      <PageShell
        bab="Di lapangan"
        index="09"
        label="Lapangan"
        title="Disiplin terlihat di lapangan."
        intro="Prinsip operasi satuan pengamanan berpengalaman di lokasi klien."
        tone="white"
      >
        <ContentSection title="Prinsip operasional">
          <BulletList items={FIELD_CLOSING_POINTS} ordered />
        </ContentSection>
        <figure className="mt-8 border border-ink/10 bg-white p-4 md:p-6">
          <div className="relative aspect-[16/10] w-full bg-paper-2">
            <Image
              src="/proposal/sistem-lapangan.png"
              alt="Ilustrasi sistem pengamanan di lapangan sesuai proposal Bisma."
              fill
              className="object-contain p-4"
              sizes="(min-width: 768px) 80vw, 100vw"
            />
          </div>
          <figcaption className="meta mt-4 text-steel">
            Dokumentasi sistem di lapangan
          </figcaption>
        </figure>
      </PageShell>
      <Field />
    </SiteLayout>
  )
}
