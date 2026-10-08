import Link from 'next/link'
import { NAV, PROPOSAL_HUB, WHATSAPP_DISPLAY, whatsappLink } from '@/lib/site'
import { Wordmark } from './primitives'

const CAPABILITIES = ['Tenaga Keamanan', 'Operasi Keamanan', 'Pelatihan', 'Supervisi']

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink-2 pt-16 pb-28 text-paper md:pb-10">
      <div className="shell">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-4">
            <Link href="/">
              <Wordmark size="lg" variant="light" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/50">
              Tenaga keamanan dan operasi keamanan untuk perusahaan, gedung, dan fasilitas
              industri di Indonesia.
            </p>
          </div>
          <div className="col-span-6 md:col-span-2">
            <p className="meta text-paper/40">Navigasi</p>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-paper/75 hover:text-paper">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="meta text-paper/40">Bagian utama</p>
            <ul className="mt-4 max-h-48 space-y-2 overflow-y-auto text-sm">
              {PROPOSAL_HUB.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-paper/75 hover:text-paper">
                    {n.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3">
            <p className="meta text-paper/40">Kontak</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tabular-nums text-paper/75 hover:text-paper"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href="https://bismakonindo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/75 hover:text-paper"
                >
                  bismakonindo.com
                </a>
              </li>
              <li>
                <p className="meta mt-4 text-paper/40">Kapabilitas</p>
                <ul className="mt-2 space-y-1 text-paper/75">
                  {CAPABILITIES.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-paper/10 pt-6 md:flex-row">
          <p className="meta text-paper/40">
            © {new Date().getFullYear()} PT. Bisma Konindo. Hak cipta dilindungi.
          </p>
          <p className="meta text-paper/40">Penyedia Tenaga Keamanan · Indonesia</p>
        </div>
      </div>
    </footer>
  )
}
