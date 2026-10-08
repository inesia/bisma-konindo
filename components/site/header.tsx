'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { ASSESSMENT_LINK, NAV, PROPOSAL_HUB, WHATSAPP_DISPLAY, whatsappLink } from '@/lib/site'
import { Wordmark } from './primitives'

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const solid = !isHome || (scrolled && !open)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-500',
        solid
          ? 'border-b border-ink/10 bg-paper text-ink'
          : 'border-b border-transparent bg-transparent text-paper',
      )}
    >
      <div
        className={cn(
          'shell flex items-center justify-between transition-[height] duration-500',
          scrolled || !isHome ? 'h-16' : 'h-20',
        )}
      >
        <Link href="/" aria-label="Bisma Konindo — beranda" className="relative z-10">
          <Wordmark
            size="md"
            priority
            variant={solid ? 'dark' : 'light'}
          />
        </Link>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'group relative py-2 text-[13px] tracking-[0.01em] transition-opacity',
                    pathname === item.href
                      ? 'opacity-100'
                      : 'opacity-80 hover:opacity-100',
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      'absolute inset-x-0 -bottom-0.5 h-px origin-left bg-signal transition-transform duration-500',
                      pathname === item.href
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100',
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={ASSESSMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'hidden h-10 items-center px-4 text-[11.5px] font-medium uppercase tracking-[0.1em] transition-colors duration-300 md:inline-flex',
              solid
                ? 'bg-ink text-paper hover:bg-signal'
                : 'border border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-ink',
            )}
          >
            <span aria-hidden className="mr-2.5 inline-block size-1.5 bg-signal" />
            Minta Penilaian Keamanan
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative z-10 flex h-10 items-center gap-3 lg:hidden"
          >
            <span className="meta">{open ? 'Tutup' : 'Menu'}</span>
            <span aria-hidden className="relative block h-3 w-6">
              <span
                className={cn(
                  'absolute left-0 block h-px w-6 bg-current transition-transform duration-300',
                  open ? 'top-1.5 rotate-45' : 'top-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 block h-px w-6 bg-current transition-transform duration-300',
                  open ? 'top-1.5 -rotate-45' : 'top-3',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 bg-ink text-paper lg:hidden"
      >
        <div className="shell flex h-full flex-col overflow-y-auto pt-28 pb-28">
          <p className="meta text-paper/50">Indeks</p>
          <ul className="mt-6 border-t border-paper/15">
            {PROPOSAL_HUB.map((item) => (
              <li key={item.href} className="border-b border-paper/15">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <span className="text-xl font-medium tracking-[-0.02em]">
                    {item.title}
                  </span>
                  <span className="meta shrink-0 text-paper/40">{item.index}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-4 pt-8">
            <a
              href={ASSESSMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-between bg-paper px-5 text-[12.5px] font-medium uppercase tracking-[0.1em] text-ink"
            >
              Minta Penilaian Keamanan
              <span aria-hidden>→</span>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="meta block text-paper/60"
            >
              WhatsApp — {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
