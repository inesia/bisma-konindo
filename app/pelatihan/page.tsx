import { BulletList, ContentSection } from '@/components/site/content-blocks'
import { PageShell } from '@/components/site/page-shell'
import { SiteLayout } from '@/components/site/site-layout'
import { Standard } from '@/components/site/standard'
import { RECRUITMENT_REQUIREMENTS, TRAINING_PROGRAM } from '@/lib/proposal-content'
import { pageMetadata } from '@/lib/page-meta'

export const metadata = pageMetadata(
  'Pelatihan & Persyaratan',
  'Syarat rekrutmen, program 14 hari / 232 jam, dan kurikulum pelatihan keamanan.',
)

export default function PelatihanPage() {
  return (
    <SiteLayout>
      <PageShell
        bab="Standar kami"
        index="03"
        label="Pelatihan"
        title="Kami melatih orang di balik perlindungan."
        intro="Seleksi personel dan pendidikan keamanan mengikuti pola standar Polri."
      >
        <ContentSection title="Persyaratan menjadi security">
          <BulletList items={RECRUITMENT_REQUIREMENTS} ordered />
        </ContentSection>
        <ContentSection title="Pembinaan lanjutan">
          <p className="text-[15px] leading-relaxed text-ink/80">{TRAINING_PROGRAM.commitment}</p>
          <p className="mt-4 text-sm text-ink/70">
            <span className="font-medium text-ink">Teori:</span> {TRAINING_PROGRAM.theoryExamples}
          </p>
          <p className="mt-2 text-sm text-ink/70">
            <span className="font-medium text-ink">Praktik:</span>{' '}
            {TRAINING_PROGRAM.practiceExamples}
          </p>
        </ContentSection>
      </PageShell>
      <Standard />
    </SiteLayout>
  )
}
