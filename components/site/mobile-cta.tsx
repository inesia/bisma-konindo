import { ASSESSMENT_LINK, whatsappLink } from '@/lib/site'

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_auto] border-t border-paper/10 bg-ink pb-[env(safe-area-inset-bottom)] text-paper md:hidden">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 items-center gap-3 px-5 text-[12.5px] font-medium uppercase tracking-[0.1em]"
      >
        <span aria-hidden className="size-1.5 bg-signal" />
        WhatsApp Bisma
      </a>
      <a
        href={ASSESSMENT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="meta flex h-14 items-center border-l border-paper/10 px-5 text-paper/70"
      >
        Penilaian →
      </a>
    </div>
  )
}
