import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter_Tight, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3030'),
  title: 'PT. Bisma Konindo — Tenaga Keamanan & Operasional Keamanan',
  description:
    'PT Bisma Konindo menyediakan tenaga keamanan profesional dengan sistem operasional terstruktur, pelatihan, supervisi, dan koordinasi untuk perusahaan, gedung, dan fasilitas industri di Indonesia.',
  generator: 'v0.app',
  openGraph: {
    title: 'PT. Bisma Konindo — Keamanan yang Melindungi Bisnis',
    description:
      'Tenaga keamanan terintegrasi, kontrol operasional, dan eksekusi lapangan yang disiplin.',
    images: ['/images/hero.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#262262',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${interTight.variable} ${plexMono.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
