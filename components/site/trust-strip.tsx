const MARKERS = [
  { label: 'ABUJAPI', note: 'Asosiasi' },
  { label: 'SIO Keamanan', note: 'Izin operasional' },
  { label: 'Pelatihan Keamanan', note: 'Pola standar Polri' },
  { label: 'K3', note: 'Bersertifikasi BNSP' },
  { label: 'SMP', note: 'Kapabilitas audit' },
  { label: 'Operasi Profesional', note: 'Berbasis SOP' },
]

export function TrustStrip() {
  return (
    <section aria-label="Kredensial" className="border-b border-ink/10 bg-paper">
      <div className="shell grid grid-cols-12 gap-x-6 py-8 md:py-10">
        <p className="meta col-span-12 text-steel lg:col-span-2 lg:pt-1">
          Kredensial
          <br className="hidden lg:block" /> tercatat
        </p>
        <ul className="col-span-12 mt-5 grid grid-cols-2 border-l border-ink/10 sm:grid-cols-3 lg:col-span-10 lg:mt-0 lg:grid-cols-6">
          {MARKERS.map((m, i) => (
            <li
              key={m.label}
              data-reveal
              style={{ '--reveal-delay': `${i * 60}ms` } as React.CSSProperties}
              className="border-r border-b border-ink/10 px-4 py-3 lg:border-b-0"
            >
              <p className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                {m.label}
              </p>
              <p className="meta mt-1 text-steel">{m.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
