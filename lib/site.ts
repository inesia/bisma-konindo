export const WHATSAPP_DISPLAY = '0813 9847 8490'
const WHATSAPP_NUMBER = '6281398478490'

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const ASSESSMENT_LINK = whatsappLink(
  'Halo PT Bisma Konindo, saya ingin meminta penilaian keamanan untuk lokasi kami.\n\nPerusahaan:\nLokasi site:\nJenis site:\nPerkiraan jumlah pos / personel:',
)

export const NAV = [
  { label: 'Tentang', href: '/tentang' },
  { label: 'Layanan', href: '/pelaksanaan-keamanan' },
  { label: 'Pelatihan', href: '/pelatihan' },
  { label: 'Operasional', href: '/operasional' },
  { label: 'Sertifikasi', href: '/legalitas' },
  { label: 'Kontak', href: '/kontak' },
]

export { PROPOSAL_HUB } from './proposal-content'

export const SERVICES = [
  {
    name: 'Keamanan Fisik',
    description:
      'Perlindungan personel, bangunan, fasilitas, kendaraan, dan aset perusahaan.',
    scope: ['Personel', 'Bangunan', 'Aset'],
  },
  {
    name: 'Keamanan Preventif',
    description:
      'Patroli, kontrol akses, pengamatan, inspeksi, dan pencegahan dini gangguan potensial.',
    scope: ['Patroli', 'Pengamatan', 'Inspeksi'],
  },
  {
    name: 'Operasi Keamanan',
    description:
      'Manajemen pos terstruktur, shift, supervisi, pelaporan, dan koordinasi.',
    scope: ['Pos', 'Shift', 'Pelaporan'],
  },
  {
    name: 'Kontrol Akses & Area',
    description: 'Pemantauan personel, pengunjung, kendaraan, dan area terbatas.',
    scope: ['Pengunjung', 'Kendaraan', 'Area terbatas'],
  },
  {
    name: 'Tanggap Darurat',
    description:
      'Penanganan insiden sesuai prosedur keamanan dan kebutuhan koordinasi yang ditetapkan.',
    scope: ['Insiden', 'Prosedur', 'Koordinasi'],
  },
]

export const TRAINING_SUBJECTS = [
  'Pelatihan fisik',
  'Disiplin baris-berbaris',
  'Latihan tongkat & borgol keamanan',
  'Kesadaran deteksi bom dini',
  'Penanganan kerumunan / gangguan',
  'Pemadaman kebakaran',
  'Pertolongan pertama',
  'Pengawalan VIP',
  'Keunggulan layanan',
  'Pengetahuan hukum pidana / perdata',
  'Pelaporan insiden',
  'Prosedur patroli',
  'Inspeksi kendaraan & personel',
  'Pengaturan lalu lintas',
  'Pencegahan kejahatan',
  'Respons pertama di lokasi insiden',
  'Negosiasi',
  'Komunikasi',
  'Bela diri',
  'Keterampilan interpersonal',
]

export type Certification = {
  title: string
  category: string
  description: string
  authority?: string
}

export const CERTIFICATION_GROUPS: {
  group: string
  code: string
  items: Certification[]
}[] = [
  {
    group: 'Legalitas Perusahaan',
    code: 'A',
    items: [
      {
        title: 'Akta Pendirian Perseroan',
        category: 'Legalitas Perusahaan',
        description: 'Akta pendirian perseroan terbatas.',
        authority: 'Notaris',
      },
      {
        title: 'Akta Perubahan Perseroan',
        category: 'Legalitas Perusahaan',
        description: 'Akta perubahan anggaran dasar perusahaan.',
        authority: 'Notaris',
      },
      {
        title: 'Pengesahan Menteri AHU',
        category: 'Legalitas Perusahaan',
        description: 'Pengesahan status badan hukum perusahaan oleh Menteri.',
        authority: 'Kementerian Hukum — Ditjen AHU',
      },
      {
        title: 'NPWP',
        category: 'Legalitas Perusahaan',
        description: 'Nomor Pokok Wajib Pajak perusahaan.',
        authority: 'Direktorat Jenderal Pajak',
      },
      {
        title: 'NIB',
        category: 'Legalitas Perusahaan',
        description: 'Nomor Induk Berusaha untuk operasional berizin.',
        authority: 'OSS — Online Single Submission',
      },
    ],
  },
  {
    group: 'Izin Operasional Keamanan',
    code: 'B',
    items: [
      {
        title: 'ABUJAPI',
        category: 'Izin Operasional Keamanan',
        description:
          'Asosiasi Badan Usaha Jasa Pengamanan Indonesia — asosiasi usaha jasa pengamanan.',
        authority: 'ABUJAPI',
      },
      {
        title: 'SIO Pelatihan Keamanan',
        category: 'Izin Operasional Keamanan',
        description: 'Surat Izin Operasional penyelenggaraan pelatihan keamanan.',
        authority: 'Polri',
      },
      {
        title: 'SIO Penyedia Tenaga Keamanan',
        category: 'Izin Operasional Keamanan',
        description: 'Surat Izin Operasional penyedia tenaga keamanan.',
        authority: 'Polri',
      },
      {
        title: 'W.L.K. Disnaker',
        category: 'Izin Operasional Keamanan',
        description: 'Wajib Lapor Ketenagakerjaan perusahaan.',
        authority: 'Dinas Tenaga Kerja',
      },
    ],
  },
  {
    group: 'Ketenagakerjaan & Kesejahteraan',
    code: 'C',
    items: [
      {
        title: 'BPJS Kesehatan',
        category: 'Ketenagakerjaan & Kesejahteraan',
        description: 'Pendaftaran jaminan kesehatan nasional untuk personel.',
        authority: 'BPJS Kesehatan',
      },
      {
        title: 'BPJS Ketenagakerjaan',
        category: 'Ketenagakerjaan & Kesejahteraan',
        description: 'Pendaftaran jaminan sosial ketenagakerjaan untuk personel.',
        authority: 'BPJS Ketenagakerjaan',
      },
    ],
  },
  {
    group: 'Kepemimpinan & Kualifikasi Profesional',
    code: 'D',
    items: [
      {
        title: 'Gada Utama',
        category: 'Kualifikasi Profesional',
        description:
          'Tingkat tertinggi kualifikasi petugas keamanan Indonesia (level manajerial).',
      },
      {
        title: 'Auditor SMP',
        category: 'Kualifikasi Profesional',
        description: 'Auditor Sistem Manajemen Pengamanan (SMP).',
      },
      {
        title: 'Sespim Polri',
        category: 'Kualifikasi Profesional',
        description: 'Kualifikasi Sekolah Staf dan Pimpinan Polri.',
      },
      {
        title: 'K3 Umum / BNSP',
        category: 'Kualifikasi Profesional',
        description: 'Sertifikasi keselamatan dan kesehatan kerja umum.',
        authority: 'BNSP',
      },
      {
        title: 'Auditor Internal SMK3',
        category: 'Kualifikasi Profesional',
        description: 'Auditor internal sistem manajemen K3.',
      },
      {
        title: 'ToT / BNSP',
        category: 'Kualifikasi Profesional',
        description: 'Sertifikasi pelatih (ToT).',
        authority: 'BNSP',
      },
      {
        title: 'Investigasi Polri',
        category: 'Kualifikasi Profesional',
        description: 'Kualifikasi investigasi kepolisian.',
      },
      {
        title: 'Manajemen Tanggap Darurat',
        category: 'Kualifikasi Profesional',
        description: 'Manajemen respons darurat.',
      },
    ],
  },
]
