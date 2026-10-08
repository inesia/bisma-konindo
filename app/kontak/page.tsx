import { FinalCta } from '@/components/site/final-cta'
import { PageShell } from '@/components/site/page-shell'
import { SiteLayout } from '@/components/site/site-layout'
import { COMPANY } from '@/lib/proposal-content'
import { pageMetadata } from '@/lib/page-meta'

export const metadata = pageMetadata(
  'Penutup & Kontak',
  'Kontak PT Bisma Konindo untuk penilaian keamanan dan kerja sama.',
)

export default function KontakPage() {
  return (
    <SiteLayout>
      <PageShell
        bab="Mulai kerja sama"
        index="10"
        label="Kontak"
        title="Mitra keamanan yang dapat dipercaya."
        intro="Ceritakan lokasi dan kebutuhan operasional Anda. Kami siap membantu menilai dan menyusun solusi pengamanan yang tepat."
      >
        <div className="max-w-xl space-y-4 border-t border-ink pt-8 text-[15px] leading-relaxed text-ink/80">
          <p>{COMPANY.closingDate}</p>
          <p className="text-lg font-medium text-ink">{COMPANY.name}</p>
          <p>
            {COMPANY.director}
            <br />
            <span className="text-steel">{COMPANY.directorTitle}</span>
          </p>
          <p className="text-sm text-steel">{COMPANY.address}</p>
        </div>
      </PageShell>
      <FinalCta />
    </SiteLayout>
  )
}
