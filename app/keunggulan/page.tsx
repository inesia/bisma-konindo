import { BulletList, ContentSection } from '@/components/site/content-blocks'
import { PageShell } from '@/components/site/page-shell'
import { Protect } from '@/components/site/protect'
import { SiteLayout } from '@/components/site/site-layout'
import { WhyBisma } from '@/components/site/why-bisma'
import { ADVANTAGES, CLIENT_BENEFITS, SCOPE_OF_WORK } from '@/lib/proposal-content'
import { pageMetadata } from '@/lib/page-meta'

export const metadata = pageMetadata(
  'Keunggulan & Ruang Lingkup',
  'Keuntungan memakai jasa security, keunggulan Bisma Konindo, dan ruang lingkup pengamanan.',
)

export default function KeunggulanPage() {
  return (
    <SiteLayout>
      <PageShell
        bab="Nilai kami"
        index="04"
        label="Keunggulan"
        title="Nilai yang kami bawa ke lapangan."
        intro="Keuntungan bagi pengguna jasa, diferensiasi operasional, dan cakupan tugas pengamanan."
      >
        <ContentSection title="Keuntungan memakai jasa security">
          <BulletList items={CLIENT_BENEFITS} ordered />
        </ContentSection>
        <ContentSection title="Keunggulan kami">
          <BulletList items={ADVANTAGES} ordered />
        </ContentSection>
        <ContentSection title="Ruang lingkup pengamanan">
          <BulletList items={SCOPE_OF_WORK} ordered />
        </ContentSection>
      </PageShell>
      <Protect />
      <WhyBisma />
    </SiteLayout>
  )
}
