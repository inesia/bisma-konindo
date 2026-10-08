/** Content sourced from doc/PROPOSAL BISMA.pdf */

export const COMPANY = {
  name: 'PT. Bisma Konindo',
  domain: 'bismakonindo.com',
  phone: '0813 9847 8490',
  address:
    'Ruko Sentra Niaga Kalimalang Blok B1/5, Jl. Jenderal A. Yani, Ds. Kayuringin, Kec. Bekasi Selatan, Kota Bekasi, Jawa Barat.',
  director: 'Supatmo, SH',
  directorTitle: 'Direktur Utama',
  closingDate: 'Bekasi, 03 November 2025',
} as const

export const OUTSOURCING_INTRO = {
  lead:
    'PT. Bisma Konindo adalah perseroan yang bergerak di bidang pemborongan pekerjaan Tenaga Pengamanan / Security (outsourcing) berpedoman kepada Undang-undang No. 13/2003 dan Undang-undang Cipta Kerja No. 11 Tahun 2020.',
  body: 'Pekerjaan dapat diserahkan sebagian pelaksanaannya kepada perusahaan lain melalui perjanjian pemborongan pekerjaan atau jasa pekerja/buruh yang dibuat secara tertulis.',
  rationaleTitle: 'Dasar pertimbangan pemborongan pekerjaan kepada perusahaan jasa (outsourcing)',
  rationale: [
    'Perusahaan dapat melakukan efisiensi.',
    'Perusahaan lebih kompetitif dalam menghadapi media massa.',
    'Perusahaan dapat mempertahankan jumlah tenaga kerja tetap seminimal mungkin.',
    'Perusahaan tidak perlu menangani masalah ketenagakerjaan secara langsung.',
  ],
} as const

export const LEGAL_RECORDS: { label: string; value: string }[] = [
  { label: 'Akta Pendirian Perseroan', value: '81 Tanggal 08-12-2010' },
  { label: 'Akta Perubahan Perseroan', value: '10 Tanggal 09-08-2023' },
  { label: 'Pengesahan Menteri AHU', value: 'AHU-00500404.AH.01.02 Tahun 2023, 25-08-2023' },
  { label: 'NPWP', value: '31.257.905.5-435.000' },
  { label: 'Surat Keterangan Terdaftar', value: '100714607898' },
  { label: 'NIB', value: '0412230063841' },
  { label: 'Asosiasi Pengamanan', value: 'ABUJAPI 04654/05-12-2023' },
  { label: 'Domisili', value: COMPANY.address },
  { label: 'SIO Pelatihan Keamanan', value: 'Polri' },
  { label: 'SIO Penyedia Tenaga Keamanan', value: 'Polri' },
  { label: 'Layanan terkait', value: 'Cleaning Service' },
  { label: 'BPJS Kesehatan', value: 'Terdaftar' },
  { label: 'BPJS Ketenagakerjaan', value: 'Terdaftar' },
  { label: 'W.L.K. Disnaker', value: 'Wajib Lapor Ketenagakerjaan' },
  { label: 'Bank Accounting', value: 'Tersedia' },
]

export const KBLI: { code: string; name: string }[] = [
  { code: '81210', name: 'Aktivitas kebersihan umum bangunan' },
  { code: '82110', name: 'Aktivitas penyedia gabungan jasa administrasi kantor' },
  { code: '52215', name: 'Aktivitas perparkiran' },
  { code: '47511', name: 'Perdagangan tekstil' },
  { code: '80100', name: 'Aktivitas keamanan swasta' },
  { code: '81100', name: 'Aktivitas penyedia gabungan jasa penunjang fasilitas' },
  { code: '81300', name: 'Aktivitas perawatan dan pemeliharaan taman' },
  { code: '52214', name: 'Aktivitas perparkiran di badan jalan' },
  { code: '78200', name: 'Aktivitas penyediaan tenaga kerja waktu tertentu' },
]

export const EXTRA_CERTIFICATES = [
  'Gada Utama',
  'Auditor SMP (Sistem Manajemen Pengamanan)',
  'Sespim Polri',
  'K3 Umum / BNSP',
  'Auditor Internal SMK3',
  'ToT (Training of Trainer) / BNSP',
  'Investigasi Polri',
  'Manajemen Tanggap Darurat Berbasis Sistem Komando Insiden',
  'Marine Accident And Incident Investigation',
  'Penanggulangan Pencemaran Tingkat I',
  'CSO – ISPS Code',
  'IMO Model Course 3.21 (PFSO)',
  'Internal Auditor ISPS Code Model Course 3.21 (PFSO)',
]

export const RECRUITMENT_REQUIREMENTS = [
  'Ijazah minimal SLTA sederajat',
  'Tinggi minimal 167 cm',
  'Berat minimal 60 kg',
  'SKCK / Surat Keterangan Catatan Kepolisian',
  'Usia minimal 24 maksimal 30 tahun',
  'Surat Keterangan Domisili',
  'Lulus test kesehatan',
  'Lulus test kesamaptaan jasmani',
  'Lulus psikotes',
  'Lulus test mental ideologi',
]

export const TRAINING_PROGRAM = {
  durationDays: 14,
  durationHours: 232,
  pattern: 'Pola standar Polri',
  commitment:
    'Setelah penempatan kerja, PT Bisma Konindo berkomitmen melaksanakan pembinaan anggota security secara rutin sebulan sekali, pukul 07.30–11.30, berupa teori dan praktik.',
  theoryExamples: 'Tupoksi, kepolisian terbatas, pembuatan BAP, investigasi, dll.',
  practiceExamples:
    'Senam borgol & tongkat security, PBB, bela diri, pembinaan fisik, dll.',
}

export const CURRICULUM = [
  'Pendidikan jasmani / olahraga',
  'Pendidikan baris-berbaris (PBB)',
  'Senam borgol & senam tongkat',
  'Pengetahuan deteksi dini bom',
  'Pengetahuan penanggulangan huru-hara / aksi massa (Dalmas)',
  'Pengetahuan pemadaman kebakaran',
  'Pengetahuan P3K',
  'Pengawalan VIP',
  'Service excellent (moral dan etika security)',
  'Pengetahuan hukum pidana / perdata / KUHP',
  'Pembuatan berita acara (BAP)',
  'Prosedur patroli',
  'Pemeriksaan kendaraan, personil, dan barang bawaan',
  'Pengendalian lalu lintas (Dal Lalin) termasuk parkir',
  'Pelatihan penanggulangan tindak kejahatan',
  'Pengetahuan TPTKP (tindakan pertama di tempat kejadian perkara)',
  'Evakuasi personil',
  'Intelijen perusahaan',
  'Pengetahuan negosiator',
  'Pengetahuan teknis penangkapan dan penggeledahan',
  'Pengetahuan komunikasi',
  'Pengetahuan bahasa Inggris praktis',
  'Bela diri praktis',
  'Interpersonal skill',
  'Tupok Siran (tugas pokok fungsi dan peranan)',
  'Gerak jalan',
  'Jurit malam',
  'Lempar pisau',
]

export const CLIENT_BENEFITS = [
  'SOP yang terinci, mudah dipahami untuk dilaksanakan oleh anggota satpam',
  'Personil staff yang profesional sesuai bidangnya',
  'Personil yang sudah terlatih melalui pendidikan satpam',
  'Korlap menggunakan anggota TNI/Polri',
  'Mudah untuk berkoordinasi',
  'Mudah berkoordinasi dengan aparat terkait (lintas kesatuan)',
  'Apabila perusahaan mem-PHK security, tidak memikirkan pesangon',
  'Apabila ada security yang kurang baik, perusahaan tinggal meminta ganti personil',
  'Perusahaan pemakai jasa tidak direpotkan dengan masalah ketenagakerjaan',
]

export const ADVANTAGES = [
  'Penyaluran kerja dengan dukungan TNI – Polri',
  'Memiliki program pelatihan bela diri, manajemen sekuriti, dan manajemen bencana tingkat internasional',
  'Memiliki tim yang berpengalaman melayani perusahaan multinasional, jasa pengaman khusus, dan berpikiran terbuka',
  'Memiliki konsultan yang ahli dalam bidang keamanan, operasional, telekomunikasi, dan manajemen perubahan',
]

export const SCOPE_OF_WORK = [
  'Pengatur dan menertibkan parkir kendaraan sejenis apapun di area / lokasi kerja',
  'Mencegah dan melarang para pemulung untuk masuk di area',
  'Melaksanakan tugas-tugas yang diberikan oleh perusahaan',
  'Menjaga dan memelihara harta benda milik pribadi maupun inventaris gedung',
  'Mencegah para pedagang kaki lima berjualan di area lokasi yang mengganggu ketertiban',
  'Mencegah para pedagang asongan melakukan kegiatan di dalam lingkungan kerja',
  'Mencegah semua tindakan yang mengakibatkan kerugian bagi perusahaan',
  'Penjagaan terhadap batas gedung, pagar luar atas gangguan yang dapat mengakibatkan rusaknya gedung dan fasilitas',
  'Koordinasi dengan keamanan lingkungan termasuk Polsek, Koramil, Polres, Kodim',
  'Menjaga nama baik dan loyal kepada perusahaan',
  'Melaksanakan segala peraturan dan policy yang dikeluarkan management',
  'Menjaga serta memelihara keamanan dan ketertiban di dalam lingkungan kerja',
  'Memberikan pelayanan keamanan kepada karyawan dan pengunjung / tamu dengan sebaik-baiknya',
  'Mengawasi, mengamati, dan melarang orang yang bukan karyawan masuk di area lokasi',
  'Memeriksa semua kendaraan dan personil yang keluar masuk di area lokasi tanpa terkecuali',
  'Melarang karyawan menginap di area, selain petugas atau yang disetujui pimpinan dengan surat/perintah lembur',
  'Melakukan pengamanan preventif yang bersifat proaktif',
  'Dapat menetralisir daerah rawan dan pencegahannya',
]

export const SECURITY_CONCEPTS = {
  physical:
    'Pengamanan fisik ditujukan kepada pencegahan dengan menggunakan alat dan tindakan fisik terhadap gangguan, ancaman, hambatan yang ditimbulkan oleh alam, manusia, hewan, teknis, dan lain-lain.',
  nonPhysical:
    'Pengamanan non fisik adalah segala usaha kegiatan untuk mengamankan instansi, industri, dan sebagainya terhadap ancaman, gangguan yang menyangkut kebijaksanaan perusahaan.',
  preventive:
    'Melindungi suatu obyek terhadap gangguan berupa larangan, pembatasan, dan dilakukan secara preventif aktif, persuasif maupun paksaan.',
  responsive:
    'Tindakan yang diambil bilamana pengamanan pencegahan tidak berhasil; satpam menyelesaikannya sesuai prosedur pengamanan dan hukum yang berlaku.',
  direct:
    'Bentuk pengamanan dengan segala tindakan dan usaha secara langsung pada obyek dengan menempatkan personil jaga di pos-pos tertentu maupun patroli secara rutin.',
  indirect:
    'Bentuk pengamanan dengan segala tindakan dan usaha melalui monitor, penyelidikan, dan intelijen.',
}

export const SECURED_OBJECTS = {
  personnel: [
    'Personil perusahaan, pengelola / penghuni (untuk apartemen)',
    'Pemilik pertokoan / karyawan',
    'Personil tamu / pengunjung',
  ],
  material: [
    'Kendaraan-kendaraan milik perusahaan',
    'Kendaraan pengunjung / tamu',
    'Aset-aset perusahaan yang berada di lingkup kerja',
  ],
}

export const ACTION_TYPES = {
  persuasive: [
    'Penanganan masalah yang timbul di lapangan dengan pendekatan orang ke orang',
    'Negosiasi dengan pimpinan massa / organisasi yang timbul',
    'Pendekatan secara kekeluargaan terhadap masyarakat sekitar lokasi',
  ],
  preventive:
    'Kegiatan operasional security bersifat preventif dalam rangka memberikan upaya pengamanan, pelayanan, dan perlindungan serta memelihara keselamatan orang / benda di lingkungan kerja.',
  repressive:
    'Kegiatan represif untuk menangkap, memborgol, mengikat, dan membuat berita acara dan laporan kejadian untuk pelaksanaan tertib hukum di lingkungan kerja.',
  curative:
    'Kegiatan kuratif apabila menemukan tindak kejahatan pengrusakan; tindakan untuk pertanggungjawaban dan pengganti kerugian di lingkungan kerja.',
}

export const ROLE_DUTIES = {
  coordinator: [
    'Memimpin, mengendalikan, mengawasi satpam dalam melaksanakan tugas dan kewajiban',
    'Membina personil satpam agar memiliki keterampilan di bidang masing-masing',
    'Menandatangani surat-surat',
    'Mengevaluasi pelaksanaan tugas satpam dan melaporkan kepada perusahaan',
    'Bertanggung jawab kepada perwakilan perusahaan yang ditunjuk',
  ],
  danru: [
    'Memimpin shift dalam pengecekan, pengawasan, dan pengendalian anggota di pos masing-masing',
    'Membuat laporan tentang kejadian-kejadian di perusahaan',
    'Melaksanakan tugas lain dari koordinator / menggantikan koordinator bila berhalangan',
    'Melaksanakan serah terima penjagaan dengan danru pengganti',
    'Melaporkan setiap kejadian darurat kepada koordinator',
    'Bertanggung jawab kepada koordinator',
  ],
  security: [
    'Mengamankan semua aset perusahaan',
    'Mengawasi, mengamati, mengenali, serta menegur orang-orang yang mencurigakan',
    'Melarang orang yang tidak berkepentingan masuk ke area yang dilarang',
    'Melaksanakan peraturan dan tata tertib dari koordinator',
    'Melaporkan kepada danru setiap masalah yang terjadi saat bertugas',
    'Selama bertugas security harus berpakaian rapi',
    'Bertanggung jawab kepada danru',
  ],
}

export const DUTY_MECHANISM = {
  preparation: [
    'Melaksanakan apel',
    'Absensi',
    'Pembinaan postur tubuh, latihan PBB bila memungkinkan',
    'Pembagian tugas pos sesuai jadwal',
    'Penyampaian instruksi khusus',
  ],
  operation: [
    'Selesaikan apel, serah terima pos jaga dengan pengecekan jurnal dan inventaris',
    'Selama operasional jaga, dilarang meninggalkan area tanggung jawab',
    'Mobilisasi batas pengamanan antar pos pengaman',
  ],
  closing: [
    'Danru membuat laporan regu jaga (jurnal) untuk diserahkan ke regu baru',
    'Pengecekan inventaris pada waktu serah terima',
    'Menindaklanjuti kejadian yang belum terselesaikan',
    'Serah terima dengan regu pengganti',
  ],
}

export const PERSONNEL_ADMIN = {
  activePersonnel:
    'PT Bisma Konindo menyediakan tenaga pengamanan khusus dari TNI / Polri yang masih aktif sebagai Korlap.',
  structure: ['Danru', 'Anggota security'],
  equipmentProvider: [
    'Seragam PDL, PDH & safari',
    'Borgol',
    'Tongkat',
    'KTA satpam dan KTA borgol',
    'Buku jurnal dan ATK',
    'Surat-surat',
    'Helm PKD',
    'Lampu lalin',
    'ID card',
    'Kartu tamu',
    'Radio HT',
    'Senter',
  ],
  equipmentClient: [
    'APAR (alat pemadam api ringan)',
    'Telepon',
    'Pos penjagaan beserta inventaris',
    'Tanda lalu lintas',
    'Metal detector',
    'Mirror detector',
  ],
}

export const FIELD_CLOSING_POINTS = [
  'Satuan pengamanan berpengalaman mudah dalam pengendalian serta mengetahui fungsi, tugas pokok, dan tanggung jawab.',
  'Tugas, tanggung jawab, dan sistem pengoperasian diatur oleh koordinator.',
  'Pelaksanaan tugas dilengkapi perlengkapan perorangan.',
  'Selalu terbuka dan menerima kritik untuk evaluasi kegiatan lapangan.',
  'Hal-hal yang belum tercantum dalam proposal disampaikan secara terpisah di lapangan.',
]

export const PROPOSAL_HUB = [
  {
    href: '/tentang',
    bab: 'Kenali Bisma',
    index: '01',
    title: 'Tentang Kami',
    summary: 'Siapa kami dan mengapa outsourcing keamanan jadi pilihan cerdas.',
  },
  {
    href: '/legalitas',
    bab: 'Kredensial',
    index: '02',
    title: 'Legalitas & Sertifikasi',
    summary: 'Izin resmi, NIB/KBLI, dan kualifikasi yang bisa diverifikasi.',
  },
  {
    href: '/pelatihan',
    bab: 'Standar kami',
    index: '03',
    title: 'Pelatihan & Persyaratan',
    summary: 'Seleksi ketat, 14 hari / 232 jam, dan pembinaan berkelanjutan.',
  },
  {
    href: '/keunggulan',
    bab: 'Nilai kami',
    index: '04',
    title: 'Keunggulan & Ruang Lingkup',
    summary: 'Apa yang membedakan kami dan apa yang kami lindungi.',
  },
  {
    href: '/struktur-organisasi',
    bab: 'Tim & struktur',
    index: '05',
    title: 'Struktur Organisasi',
    summary: 'Rantai komando yang jelas dari koordinator hingga lapangan.',
  },
  {
    href: '/pelaksanaan-keamanan',
    bab: 'Layanan',
    index: '06',
    title: 'Pelaksanaan Keamanan',
    summary: 'Layanan pengamanan yang disusun mengikuti kebutuhan bisnis Anda.',
  },
  {
    href: '/operasional',
    bab: 'Cara kami bekerja',
    index: '07',
    title: 'Operasional & Shift',
    summary: 'Shift terstruktur, supervisi ketat, dan serah terima terdokumentasi.',
  },
  {
    href: '/personil-administrasi',
    bab: 'Dukungan penuh',
    index: '08',
    title: 'Personil & Administrasi',
    summary: 'Korlap berpengalaman dan perlengkapan siap operasi.',
  },
  {
    href: '/sistem-lapangan',
    bab: 'Di lapangan',
    index: '09',
    title: 'Sistem di Lapangan',
    summary: 'Disiplin yang terlihat: patroli, akses, dan supervisi site.',
  },
  {
    href: '/kontak',
    bab: 'Mulai kerja sama',
    index: '10',
    title: 'Hubungi Kami',
    summary: 'Ceritakan kebutuhan site Anda — kami siap menilai dan merespons.',
  },
] as const
