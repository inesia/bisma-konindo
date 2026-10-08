import { BulletList, ContentSection } from '@/components/site/content-blocks'
import { Company } from '@/components/site/company'
import { PageShell } from '@/components/site/page-shell'
import { SiteLayout } from '@/components/site/site-layout'
import { WhyBisma } from '@/components/site/why-bisma'
import { OUTSOURCING_INTRO } from '@/lib/proposal-content'
import { pageMetadata } from '@/lib/page-meta'

export const metadata = pageMetadata(
  'Tentang & Pendahuluan',
  'Profil PT Bisma Konindo dan dasar hukum outsourcing tenaga keamanan.',
)

export default function TentangPage() {
  return (
    <SiteLayout>
      <PageShell
        bab="Kenali Bisma"
        index="01"
        label="Tentang Perusahaan"
        title="Mitra keamanan berbasis disiplin."
        intro={OUTSOURCING_INTRO.lead}
      >
        <ContentSection title="Landasan kerja sama">
          <p className="text-[15px] leading-relaxed text-ink/80">{OUTSOURCING_INTRO.body}</p>
        </ContentSection>
        <ContentSection title={OUTSOURCING_INTRO.rationaleTitle}>
          <BulletList items={OUTSOURCING_INTRO.rationale} ordered />
        </ContentSection>
      </PageShell>
      <Company />
      <WhyBisma />
    </SiteLayout>
  )
}
