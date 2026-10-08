import { BulletList, ContentSection } from '@/components/site/content-blocks'
import { PageShell } from '@/components/site/page-shell'
import { SiteLayout } from '@/components/site/site-layout'
import { PERSONNEL_ADMIN } from '@/lib/proposal-content'
import { pageMetadata } from '@/lib/page-meta'

export const metadata = pageMetadata(
  'Personil & Administrasi',
  'Personil aktif Korlap TNI/Polri dan standar perlengkapan operasional.',
)

export default function PersonilAdministrasiPage() {
  return (
    <SiteLayout>
      <PageShell
        bab="Dukungan penuh"
        index="08"
        label="Personil"
        title="Personil & administrasi."
        intro="Penyediaan personel khusus dan standar perlengkapan keamanan."
      >
        <ContentSection title="Personil aktif">
          <p className="text-[15px] leading-relaxed text-ink/80">
            {PERSONNEL_ADMIN.activePersonnel}
          </p>
        </ContentSection>
        <ContentSection title="Susunan personil satpam">
          <BulletList items={PERSONNEL_ADMIN.structure} ordered />
        </ContentSection>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <ContentSection title="Perlengkapan penyedia jasa">
            <BulletList items={PERSONNEL_ADMIN.equipmentProvider} ordered />
          </ContentSection>
          <ContentSection title="Perlengkapan pengguna jasa">
            <BulletList items={PERSONNEL_ADMIN.equipmentClient} ordered />
          </ContentSection>
        </div>
      </PageShell>
    </SiteLayout>
  )
}
