import { ASSESSMENT_LINK, WHATSAPP_DISPLAY, whatsappLink } from '@/lib/site'
import { Action, SectionIndex, delay } from './primitives'

const ASSESS = ['Profil lokasi', 'Risiko & titik akses', 'Kebutuhan pos', 'Model shift']

export function FinalCta() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="bg-ink pt-24 pb-20 text-paper md:pt-36 md:pb-28">
      <div className="shell">
        <SectionIndex index="10" label="Penilaian" tone="light" />
        <h2
          id="cta-title"
          data-reveal
          className="display mt-10 text-paper text-[12vw] uppercase leading-[0.88] md:text-[96px] lg:text-[128px]"
        >
          Butuh mitra
          <br />
          keamanan yang
          <br />
          dapat dipercaya<span className="text-signal">?</span>
        </h2>

        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-12 border-t border-paper/15 pt-10 md:mt-20">
          <div className="col-span-12 md:col-span-5">
            <p data-reveal className="text-xl leading-snug tracking-[-0.01em] md:text-2xl">
              Ceritakan lokasi, kebutuhan operasional, dan persyaratan keamanan Anda.
            </p>
            <div data-reveal style={delay(100)} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Action href={ASSESSMENT_LINK} external variant="signal">
                Minta Penilaian Keamanan
              </Action>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 md:col-start-7">
            <p className="meta text-paper/50">Penilaian mencakup</p>
            <ol className="mt-4">
              {ASSESS.map((a, i) => (
                <li key={a} className="flex gap-4 border-b border-paper/10 py-2.5 text-[15px] text-paper/80">
                  <span className="meta pt-1 text-signal">0{i + 1}</span>
                  {a}
                </li>
              ))}
            </ol>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="meta text-paper/50">WhatsApp</p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 block"
            >
              <span className="block text-3xl font-medium tabular-nums tracking-[-0.02em] transition-colors group-hover:text-signal lg:text-[34px]">
                {WHATSAPP_DISPLAY}
              </span>
              <span className="meta mt-2 inline-flex items-center gap-2 text-paper/50 group-hover:text-paper">
                Buka chat <span aria-hidden>→</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
