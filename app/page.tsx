import { FinalCta } from '@/components/site/final-cta'
import { Hero } from '@/components/site/hero'
import { PageHub } from '@/components/site/page-hub'
import { Positioning } from '@/components/site/positioning'
import { SiteLayout } from '@/components/site/site-layout'
import { TrustStrip } from '@/components/site/trust-strip'

export default function Page() {
  return (
    <SiteLayout>
      <main>
        <Hero />
        <TrustStrip />
        <Positioning />
        <PageHub />
        <FinalCta />
      </main>
    </SiteLayout>
  )
}
