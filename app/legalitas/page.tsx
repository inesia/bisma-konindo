import { Certifications } from '@/components/site/certifications'
import { BulletList, ContentSection, DataTable } from '@/components/site/content-blocks'
import { PageShell } from '@/components/site/page-shell'
import { SiteLayout } from '@/components/site/site-layout'
import { EXTRA_CERTIFICATES, KBLI, LEGAL_RECORDS } from '@/lib/proposal-content'
import { pageMetadata } from '@/lib/page-meta'

export const metadata = pageMetadata(
  'Legalitas & Sertifikasi',
  'Data legalitas, NIB/KBLI, dan sertifikat PT Bisma Konindo.',
)

export default function LegalitasPage() {
  return (
    <SiteLayout>
      <PageShell
        bab="Kredensial"
        index="02"
        label="Legalitas"
        title="Landasan kepatuhan operasi."
        intro="Data badan hukum, izin operasional, dan kualifikasi profesional yang menopang layanan kami."
        tone="white"
      >
        <ContentSection title="Data legalitas">
          <DataTable rows={LEGAL_RECORDS} />
        </ContentSection>
        <ContentSection title="Main Business Number (NIB) — KBLI">
          <dl className="border-t border-ink">
            {KBLI.map((row) => (
              <div
                key={row.code}
                className="grid grid-cols-12 gap-4 border-b border-ink/15 py-3"
              >
                <dt className="meta col-span-3 text-signal md:col-span-2">{row.code}</dt>
                <dd className="col-span-9 text-sm md:col-span-10">{row.name}</dd>
              </div>
            ))}
          </dl>
        </ContentSection>
        <ContentSection title="Sertifikat keprofesian">
          <BulletList items={EXTRA_CERTIFICATES} />
        </ContentSection>
      </PageShell>
      <Certifications />
    </SiteLayout>
  )
}
