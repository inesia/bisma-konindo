import { BulletList, ContentSection } from '@/components/site/content-blocks'
import { PageShell } from '@/components/site/page-shell'
import { Protect } from '@/components/site/protect'
import { Services } from '@/components/site/services'
import { SiteLayout } from '@/components/site/site-layout'
import { ACTION_TYPES, SECURED_OBJECTS, SECURITY_CONCEPTS } from '@/lib/proposal-content'
import { pageMetadata } from '@/lib/page-meta'

export const metadata = pageMetadata(
  'Pelaksanaan Keamanan',
  'Konsep pengamanan fisik dan non fisik, obyek yang diamankan, serta jenis tindakan.',
)

export default function PelaksanaanKeamananPage() {
  return (
    <SiteLayout>
      <PageShell
        bab="Layanan"
        index="06"
        label="Pelaksanaan"
        title="Operasi keamanan disusun untuk bisnis Anda."
        intro="Pelaksanaan pengamanan meliputi pengamanan fisik, non fisik, dan pola operasional di lapangan."
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <ContentSection title="Pengamanan fisik">
            <p className="text-[15px] leading-relaxed text-ink/80">
              {SECURITY_CONCEPTS.physical}
            </p>
          </ContentSection>
          <ContentSection title="Pengamanan non fisik">
            <p className="text-[15px] leading-relaxed text-ink/80">
              {SECURITY_CONCEPTS.nonPhysical}
            </p>
          </ContentSection>
        </div>
        <ContentSection title="Sifat & cara pengamanan">
          <ul className="space-y-4 text-[15px] leading-relaxed text-ink/80">
            <li>
              <span className="font-medium text-ink">Pencegahan — </span>
              {SECURITY_CONCEPTS.preventive}
            </li>
            <li>
              <span className="font-medium text-ink">Penanggulangan — </span>
              {SECURITY_CONCEPTS.responsive}
            </li>
            <li>
              <span className="font-medium text-ink">Langsung — </span>
              {SECURITY_CONCEPTS.direct}
            </li>
            <li>
              <span className="font-medium text-ink">Tidak langsung — </span>
              {SECURITY_CONCEPTS.indirect}
            </li>
          </ul>
        </ContentSection>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <ContentSection title="Obyek — personil">
            <BulletList items={SECURED_OBJECTS.personnel} ordered />
          </ContentSection>
          <ContentSection title="Obyek — material / gedung">
            <BulletList items={SECURED_OBJECTS.material} ordered />
          </ContentSection>
        </div>
        <ContentSection title="Jenis tindakan">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="meta text-signal">Persuasif</p>
              <div className="mt-3">
                <BulletList items={ACTION_TYPES.persuasive} ordered />
              </div>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-ink/80">
              <p>
                <span className="font-medium text-ink">Preventif — </span>
                {ACTION_TYPES.preventive}
              </p>
              <p>
                <span className="font-medium text-ink">Represif — </span>
                {ACTION_TYPES.repressive}
              </p>
              <p>
                <span className="font-medium text-ink">Kuratif — </span>
                {ACTION_TYPES.curative}
              </p>
            </div>
          </div>
        </ContentSection>
      </PageShell>
      <Services />
      <Protect />
    </SiteLayout>
  )
}
