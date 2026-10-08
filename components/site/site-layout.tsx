import type { ReactNode } from 'react'
import { Footer } from './footer'
import { Header } from './header'
import { MobileCta } from './mobile-cta'
import { RevealObserver } from './reveal-observer'

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <MobileCta />
      <RevealObserver />
    </>
  )
}
