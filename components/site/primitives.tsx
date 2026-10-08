import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { CSSProperties, ReactNode } from 'react'

export function delay(ms: number) {
  return { '--reveal-delay': `${ms}ms` } as CSSProperties
}

export function SectionIndex({
  index,
  label,
  tone = 'dark',
  className,
}: {
  index: string
  label: string
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-3',
        tone === 'dark' ? 'text-ink' : 'text-paper',
        className,
      )}
    >
      <span className="eyebrow text-signal">{index}</span>
      <span
        aria-hidden
        className={cn('h-px w-8', tone === 'dark' ? 'bg-ink/30' : 'bg-paper/30')}
      />
      <span className="eyebrow">{label}</span>
    </div>
  )
}

export function Rule({
  className,
  tone = 'dark',
  ms = 0,
}: {
  className?: string
  tone?: 'dark' | 'light'
  ms?: number
}) {
  return (
    <div
      aria-hidden
      data-reveal="line"
      style={delay(ms)}
      className={cn('h-px w-full', tone === 'dark' ? 'bg-ink/15' : 'bg-paper/15', className)}
    />
  )
}

type ActionProps = {
  href: string
  children: ReactNode
  variant?: 'solid' | 'outline' | 'signal' | 'ghost-light' | 'solid-light'
  external?: boolean
  className?: string
}

export function Action({
  href,
  children,
  variant = 'solid',
  external,
  className,
}: ActionProps) {
  const styles = {
    solid: 'bg-ink text-paper hover:bg-signal',
    'solid-light': 'bg-paper text-ink hover:bg-signal hover:text-paper',
    signal: 'bg-signal text-white hover:bg-ink-2',
    outline: 'border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-paper',
    'ghost-light':
      'border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink',
  }[variant]

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group inline-flex h-12 items-center justify-between gap-6 px-5 text-[12.5px] font-medium uppercase tracking-[0.1em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal',
        styles,
        className,
      )}
    >
      <span>{children}</span>
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M1 8h13M9 3l5 5-5 5" />
      </svg>
    </a>
  )
}

/** `light` = white logo on dark bg; `dark` = original on light bg */
export function Wordmark({
  className,
  size = 'md',
  priority = false,
  variant = 'dark',
}: {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  priority?: boolean
  variant?: 'light' | 'dark'
}) {
  const height = size === 'sm' ? 36 : size === 'lg' ? 56 : 44
  const width = Math.round(height * (1024 / 341))
  const src = variant === 'light' ? '/logo-bisma.png' : '/logo-bisma-ori.png'

  return (
    <Image
      src={src}
      alt="PT Bisma Konindo — Perkasa, Jujur, Berani & Bertanggung Jawab"
      width={width}
      height={height}
      priority={priority}
      className={cn(
        'w-auto object-contain transition-opacity duration-500',
        size === 'sm' && 'h-9',
        size === 'md' && 'h-10 md:h-11',
        size === 'lg' && 'h-12 md:h-14',
        className,
      )}
    />
  )
}
