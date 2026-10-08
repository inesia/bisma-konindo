import { BulletList, ContentSection } from '@/components/site/content-blocks'
import { Operations } from '@/components/site/operations'
import { PageShell } from '@/components/site/page-shell'
import { SiteLayout } from '@/components/site/site-layout'
import { DUTY_MECHANISM, ROLE_DUTIES } from '@/lib/proposal-content'
import { pageMetadata } from '@/lib/page-meta'

export const metadata = pageMetadata(
  'Operasional & Shift',
  'Sistem shift, tugas koordinator dan danru, mekanisme regu jaga.',
)

export default function OperasionalPage() {
  return (
    <SiteLayout>
      <PageShell
        bab="Cara kami bekerja"
        index="07"
        label="Operasional"
        title="Sistem yang dirancang tetap terkendali."
        intro="Shift 3×8 atau 2×12, pembagian tugas, dan mekanisme operasional regu jaga."
        tone="white"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <ContentSection title="Koordinator">
            <BulletList items={ROLE_DUTIES.coordinator} ordered />
          </ContentSection>
          <ContentSection title="Danru">
            <BulletList items={ROLE_DUTIES.danru} ordered />
          </ContentSection>
          <ContentSection title="Anggota security">
            <BulletList items={ROLE_DUTIES.security} ordered />
          </ContentSection>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <ContentSection title="Persiapan">
            <BulletList items={DUTY_MECHANISM.preparation} ordered />
          </ContentSection>
          <ContentSection title="Operasi regu jaga">
            <BulletList items={DUTY_MECHANISM.operation} ordered />
          </ContentSection>
          <ContentSection title="Berakhirnya operasional">
            <BulletList items={DUTY_MECHANISM.closing} ordered />
          </ContentSection>
        </div>
      </PageShell>
      <Operations />
    </SiteLayout>
  )
}
