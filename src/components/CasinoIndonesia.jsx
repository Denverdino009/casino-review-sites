import React, { useState } from 'react';
import { Star, Shield, Zap, Award, Search, ChevronDown, Calendar, User, Tag, ArrowRight } from 'lucide-react';

export default function CasinoReview() {
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCasino, setSelectedCasino] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const casinos = [
    {
      id: 1,
      nama: 'LuxeBet Casino',
      rating: 4.8,
      reviews: 2847,
      kategori: 'premium',
      bonus: '200% hingga Rp 5.000.000',
      features: ['Lisensi Malta', 'Live Chat 24/7', 'Withdrawal Cepat'],
      image: '🎰',
      deskripsi: 'Kasino premium dengan koleksi game terlengkap dan bonus terbaik.',
      providerGame: ['Pragmatic Play', 'NetEnt', 'Microgaming']
    },
    {
      id: 2,
      nama: 'Golden Spin',
      rating: 4.6,
      reviews: 1924,
      kategori: 'populer',
      bonus: '150% hingga Rp 3.000.000',
      features: ['Lisensi Curacao', 'Mobile Friendly', 'Bonus Mingguan'],
      image: '🎲',
      deskripsi: 'Platform kasino yang user-friendly dengan promosi menarik setiap minggu.',
      providerGame: ['Pragmatic Play', 'Play\'n GO', 'Isoftbet']
    },
    {
      id: 3,
      nama: 'Royal Fortune',
      rating: 4.7,
      reviews: 2156,
      kategori: 'terpercaya',
      bonus: '180% hingga Rp 4.500.000',
      features: ['Lisensi Gibraltar', 'Support Lokal', 'Metode Lokal'],
      image: '👑',
      deskripsi: 'Kasino terpercaya dengan lisensi internasional dan dukungan lokal Indonesia.',
      providerGame: ['Pragmatic Play', 'Evolution Gaming', 'Big Time Gaming']
    },
    {
      id: 4,
      nama: 'Spin Paradise',
      rating: 4.5,
      reviews: 1635,
      kategori: 'populer',
      bonus: '140% hingga Rp 2.500.000',
      features: ['Mobile App', 'Live Tournament', 'VIP Program'],
      image: '🌟',
      deskripsi: 'Kasino dengan turnamen mingguan dan program VIP yang menguntungkan.',
      providerGame: ['Pragmatic Play', 'Red Tiger', 'Yggdrasil']
    },
    {
      id: 5,
      nama: 'Diamond Casino',
      rating: 4.9,
      reviews: 3214,
      kategori: 'premium',
      bonus: '250% hingga Rp 6.000.000',
      features: ['Lisensi Malta', 'Cryptonasium', 'Instant Payout'],
      image: '💎',
      deskripsi: 'Kasino paling terpercaya dengan sistem pembayaran tercepat di industri.',
      providerGame: ['Pragmatic Play', 'NetEnt', 'Evolution Gaming']
    },
    {
      id: 6,
      nama: 'Elite Slots',
      rating: 4.4,
      reviews: 1456,
      kategori: 'terpercaya',
      bonus: '120% hingga Rp 2.000.000',
      features: ['No Verification', 'Fast Withdraw', 'Slot Terbaik'],
      image: '🎯',
      deskripsi: 'Fokus pada slot games dengan ribuan pilihan game terbaru.',
      providerGame: ['Pragmatic Play', 'Slot Thunder', 'PG Soft']
    }
  ];

  const blogArticles = [
    {
      id: 1,
      judul: 'Panduan Lengkap Memilih Kasino Online Terpercaya di Indonesia 2024',
      slug: 'panduan-memilih-kasino-online-terpercaya',
      excerpt: 'Pelajari cara memilih kasino online yang aman, berlisensi, dan terpercaya. Panduan lengkap untuk pemain Indonesia.',
      konten: `Memilih kasino online yang tepat adalah langkah pertama menuju pengalaman bermain yang menyenangkan dan aman. Dengan banyaknya pilihan yang tersedia, penting untuk mengetahui apa yang harus dicari.

Lisensi dan Regulasi
Kasino online terpercaya harus memiliki lisensi dari otoritas internasional seperti Malta, Gibraltar, atau Curacao. Lisensi ini menunjukkan bahwa kasino telah memenuhi standar keamanan tertinggi.

Metode Pembayaran Lokal
Pilih kasino yang mendukung metode pembayaran lokal Indonesia seperti transfer bank, e-wallet, dan deposit pulsa. Ini membuat transaksi lebih mudah dan cepat.

Dukungan Pelanggan
Kasino terbaik menyediakan dukungan pelanggan 24/7 dalam bahasa Indonesia melalui live chat, email, dan telepon.

Bonus dan Promosi
Bandingkan bonus selamat datang yang ditawarkan, tetapi ingat bahwa bonus besar tidak selalu berarti kasino terbaik. Perhatikan syarat dan ketentuan dengan cermat.

Koleksi Game
Kasino dengan provider terkemuka seperti Pragmatic Play, NetEnt, dan Evolution Gaming menawarkan pengalaman bermain terbaik.`,
      metaDesc: 'Panduan lengkap memilih kasino online terpercaya di Indonesia 2024. Tips, lisensi, dan kriteria kasino berkualitas.',
      keywords: ['kasino online', 'kasino terpercaya', 'cara memilih kasino', 'Indonesia'],
      kategori: 'Panduan',
      penulis: 'Admin',
      tanggal: '2024-01-15',
      featured: true,
      image: '📚'
    },
    {
      id: 2,
      judul: 'Strategi Slot Online: Tips Menang di Mesin Slot Modern',
      slug: 'strategi-menang-slot-online',
      excerpt: 'Pelajari strategi dan tips efektif untuk meningkatkan peluang menang di mesin slot online dengan RTP tinggi.',
      konten: `Slot online adalah permainan yang didasarkan pada keberuntungan, tetapi ada strategi yang dapat meningkatkan peluang Anda.

Pahami RTP (Return to Player)
RTP adalah persentase uang yang dikembalikan kepada pemain dalam jangka panjang. Pilih slot dengan RTP minimal 96%.

Kelola Bankroll Anda
Tetapkan budget harian dan patuhi batas tersebut. Jangan pernah bertaruh lebih dari yang mampu Anda kehilangan.

Gunakan Bonus Dengan Bijak
Manfaatkan bonus bebas putaran dan bonus deposit untuk memaksimalkan waktu bermain tanpa menambah risiko.

Pilih Slot Dengan Volatilitas Tepat
Slot volatilitas rendah memberikan kemenangan kecil lebih sering. Slot volatilitas tinggi menawarkan kemenangan besar tetapi lebih jarang.

Mainkan untuk Hiburan
Ingat bahwa slot adalah hiburan, bukan cara untuk menghasilkan uang. Bermain dengan tujuan hiburan membuat pengalaman lebih menyenangkan.`,
      metaDesc: 'Strategi slot online terbukti untuk meningkatkan peluang menang. Tips RTP, manajemen bankroll, dan pemilihan slot terbaik.',
      keywords: ['slot online', 'strategi slot', 'tips menang slot', 'RTP slot'],
      kategori: 'Strategi',
      penulis: 'Admin',
      tanggal: '2024-01-14',
      featured: true,
      image: '🎰'
    },
    {
      id: 3,
      judul: 'Bonus Kasino Online Terbaik: Maksimalkan Keuntungan Anda',
      slug: 'bonus-kasino-online-terbaik',
      excerpt: 'Jenis-jenis bonus kasino dan cara memanfaatkannya untuk keuntungan maksimal dengan strategi cerdas.',
      konten: `Bonus kasino adalah cara terbaik untuk memulai dengan modal tambahan. Pelajari berbagai jenis bonus yang tersedia.

Welcome Bonus (Bonus Sambutan)
Bonus ini diberikan ketika Anda mendaftar. Biasanya berupa persentase bonus deposit hingga jumlah maksimal. Persyaratan: perlu untuk memenuhi turnover tertentu sebelum bisa withdraw.

Free Spins (Putaran Gratis)
Bonus free spins khusus untuk permainan slot. Kemenangan dari free spins dapat dikonversi menjadi uang nyata.

Reload Bonus
Bonus yang diberikan saat Anda melakukan deposit kembali. Biasanya sebesar persentase dari deposit Anda.

Cashback
Bonus pengembalian persentase dari kerugian Anda. Jenis bonus paling adil karena tidak memiliki persyaratan turnover yang ketat.

Bonus VIP
Program loyalitas untuk pemain setia dengan hadiah eksklusif dan rate yang lebih baik.`,
      metaDesc: 'Jenis-jenis bonus kasino online, cara memanfaatkan, dan tips mendapatkan bonus maksimal dengan turnover rendah.',
      keywords: ['bonus kasino', 'welcome bonus', 'free spins', 'turnover bonus'],
      kategori: 'Bonus',
      penulis: 'Admin',
      tanggal: '2024-01-13',
      featured: false,
      image: '🎁'
    },
    {
      id: 4,
      judul: 'Live Casino: Pengalaman Bermain Kasino Langsung dari Rumah',
      slug: 'live-casino-panduan-lengkap',
      excerpt: 'Panduan lengkap tentang live casino, permainan yang tersedia, dan cara bermain dengan dealer nyata.',
      konten: `Live casino membawa pengalaman kasino tradisional ke layar Anda dengan dealer nyata dan interaksi real-time.

Apa itu Live Casino?
Live casino adalah permainan kasino yang disiarkan langsung dari studio dengan dealer nyata. Anda dapat berinteraksi dengan dealer dan pemain lain.

Permainan Live Casino Populer
- Live Roulette: Mainkan rolet dengan dealer nyata
- Live Blackjack: Permainan kartu klasik dengan strategi real-time
- Live Baccarat: Permainan kartu sederhana dan cepat
- Live Poker: Bermain poker melawan pemain lain
- Live Sicbo: Permainan dadu tradisional Tiongkok

Keuntungan Bermain Live Casino
- Interaksi dengan dealer nyata
- Transparansi penuh dalam permainan
- Sosialisasi dengan pemain lain
- Pengalaman lebih autentik dan menyenangkan

Tips Bermain Live Casino
- Pertahankan disiplin dan manajemen bankroll
- Pelajari aturan permainan sebelum bermain
- Gunakan fitur chat dengan bijak
- Mainkan pada saat Anda fokus dan tenang`,
      metaDesc: 'Panduan live casino: permainan live, cara bermain dengan dealer nyata, tips dan strategi untuk pemain Indonesia.',
      keywords: ['live casino', 'live dealer', 'live roulette', 'live blackjack'],
      kategori: 'Panduan',
      penulis: 'Admin',
      tanggal: '2024-01-12',
      featured: false,
      image: '🎬'
    },
    {
      id: 5,
      judul: 'Keamanan Data di Kasino Online: Cara Melindungi Akun Anda',
      slug: 'keamanan-kasino-online',
      excerpt: 'Tips keamanan penting untuk melindungi data pribadi dan akun kasino Anda dari ancaman cyber.',
      konten: `Keamanan adalah prioritas utama saat bermain kasino online. Ikuti tips ini untuk melindungi akun Anda.

Gunakan Password Kuat
Password harus terdiri dari kombinasi huruf, angka, dan simbol minimal 12 karakter. Jangan gunakan informasi pribadi yang mudah ditebak.

Aktifkan Autentikasi Dua Faktor (2FA)
2FA menambah lapisan keamanan ekstra. Selain password, Anda juga perlu memasukkan kode dari aplikasi authenticator.

Verifikasi Lisensi Kasino
Pastikan kasino memiliki lisensi resmi dari otoritas internasional. Cek situs resmi otoritas untuk verifikasi.

Gunakan Koneksi Internet Aman
Jangan pernah bermain kasino online menggunakan WiFi publik. Gunakan jaringan pribadi atau VPN untuk keamanan lebih.

Update Software Secara Berkala
Selalu perbarui sistem operasi, browser, dan aplikasi keamanan Anda. Update ini berisi patch untuk lubang keamanan.

Hindari Phishing
Hati-hati dengan email atau pesan yang meminta data login. Kasino resmi tidak akan pernah meminta password Anda.`,
      metaDesc: 'Panduan keamanan kasino online: proteksi data, password kuat, 2FA, dan cara menghindari penipuan cyber.',
      keywords: ['keamanan kasino', 'proteksi data', 'password kasino', '2FA kasino'],
      kategori: 'Keamanan',
      penulis: 'Admin',
      tanggal: '2024-01-11',
      featured: false,
      image: '🔒'
    }
  ];

  const filteredCasinos = casinos.filter(casino => {
    const matchesCategory = selectedCategory === 'semua' || casino.kategori === selectedCategory;
    const matchesSearch = casino.nama.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'semua', label: 'Semua Kasino' },
    { id: 'premium', label: 'Premium' },
    { id: 'populer', label: 'Populer' },
    { id: 'terpercaya', label: 'Terpercaya' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-amber-500/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setCurrentPage('home'); setSelectedArticle(null); }}>
              <span className="text-3xl">🎰</span>
              <h1 className="text-3xl font-bold">Kasino Terbaik Indonesia</h1>
            </div>
            <nav className="flex gap-6">
              <button
                onClick={() => { setCurrentPage('home'); setSelectedArticle(null); }}
                className={`font-medium transition-colors ${currentPage === 'home' ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'}`}
              >
                Beranda
              </button>
              <button
                onClick={() => { setCurrentPage('blog'); setSelectedArticle(null); }}
                className={`font-medium transition-colors ${currentPage === 'blog' ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'}`}
              >
                Blog
              </button>
            </nav>
          </div>
          <p className="text-slate-300">
            {currentPage === 'home' 
              ? 'Ulasan komprehensif kasino online dengan lisensi internasional'
              : 'Tips, strategi, dan panduan kasino online terlengkap'}
          </p>
        </div>
      </header>

      {/* Conditional Rendering: Home Page Content */}
      {currentPage === 'home' && (
      <>
      {/* Search & Filter */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 border-b border-amber-500/20 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari kasino..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-amber-500/30 rounded-lg focus:outline-none focus:border-amber-500 text-white placeholder-slate-400"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-3 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-black'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Casino */}
      {filteredCasinos.length > 0 && (
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4">
              <Award className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">Kasino Terdepan Bulan Ini</h2>
                <p className="text-amber-100">{filteredCasinos[0].nama}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Casino Cards */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCasinos.map(casino => (
            <div
              key={casino.id}
              onClick={() => setSelectedCasino(casino)}
              className="bg-slate-800/60 backdrop-blur border border-amber-500/20 rounded-xl overflow-hidden hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/20 transition-all cursor-pointer group"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-4 flex items-center justify-between">
                <span className="text-4xl">{casino.image}</span>
                <div className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold">{casino.rating}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">{casino.nama}</h3>
                <p className="text-slate-400 text-sm mb-4">{casino.reviews} ulasan</p>

                {/* Bonus */}
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-slate-300 mb-1">Bonus Selamat Datang</p>
                  <p className="text-green-400 font-bold">{casino.bonus}</p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <p className="text-xs text-slate-400 mb-2">Fitur Unggulan:</p>
                  <div className="flex flex-wrap gap-2">
                    {casino.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-slate-700/50 text-amber-300 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 rounded-lg transition-all transform group-hover:scale-105">
                  Kunjungi Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCasinos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">Tidak ada kasino yang ditemukan</p>
          </div>
        )}
      </main>
      </>
      )}

      {/* Blog Page Content */}
      {currentPage === 'blog' && !selectedArticle && (
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Artikel Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogArticles.filter(art => art.featured).map(article => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-amber-500/30 transition-all group"
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-5xl mb-4">{article.image}</div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-100 transition-colors">{article.judul}</h3>
                    <p className="text-amber-100 mb-4">{article.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-amber-900">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.tanggal).toLocaleDateString('id-ID')}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* All Articles */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Semua Artikel</h2>
          <div className="space-y-4">
            {blogArticles.map(article => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-slate-800/60 backdrop-blur border border-amber-500/20 rounded-lg p-6 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all cursor-pointer group"
              >
                <div className="flex gap-6">
                  <div className="text-4xl">{article.image}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">{article.judul}</h3>
                    <p className="text-slate-300 mb-4">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.tanggal).toLocaleDateString('id-ID')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        <span>{article.kategori}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{article.penulis}</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center">
                    <ArrowRight className="w-6 h-6 text-amber-400 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      )}

      {/* Blog Article Detail Page */}
      {currentPage === 'blog' && selectedArticle && (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => setSelectedArticle(null)}
          className="mb-8 flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Kembali ke Blog
        </button>

        <article className="bg-slate-800/60 backdrop-blur border border-amber-500/20 rounded-xl overflow-hidden">
          {/* Article Header */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-8">
            <div className="text-6xl mb-4">{selectedArticle.image}</div>
            <h1 className="text-4xl font-bold mb-4">{selectedArticle.judul}</h1>
            <div className="flex flex-wrap gap-6 text-amber-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(selectedArticle.tanggal).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{selectedArticle.penulis}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5" />
                <span>{selectedArticle.kategori}</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8">
            <p className="text-lg text-slate-300 mb-8 italic">{selectedArticle.excerpt}</p>
            
            <div className="prose prose-invert max-w-none">
              {selectedArticle.konten.split('\n\n').map((paragraph, idx) => (
                <div key={idx} className="mb-6">
                  {paragraph.startsWith('-') ? (
                    <ul className="list-disc list-inside space-y-2">
                      {paragraph.split('\n').filter(line => line.startsWith('-')).map((item, i) => (
                        <li key={i} className="text-slate-300">{item.substring(1).trim()}</li>
                      ))}
                    </ul>
                  ) : paragraph.includes(':') && !paragraph.startsWith(' ') ? (
                    <>
                      <h3 className="text-xl font-bold text-amber-400 mb-3">{paragraph.split(':')[0]}</h3>
                      <p className="text-slate-300">{paragraph.split(':')[1]}</p>
                    </>
                  ) : (
                    <p className="text-slate-300 leading-relaxed">{paragraph}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Keywords */}
            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-slate-400 text-sm mb-3">Kata kunci: </p>
              <div className="flex flex-wrap gap-2">
                {selectedArticle.keywords.map((keyword, idx) => (
                  <span key={idx} className="bg-slate-700/50 text-amber-300 px-3 py-1 rounded-full text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Meta Description */}
            <div className="mt-8 p-4 bg-slate-700/30 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Meta Description (SEO):</p>
              <p className="text-slate-300 italic">{selectedArticle.metaDesc}</p>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Artikel Terkait</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogArticles
              .filter(art => art.id !== selectedArticle.id && art.kategori === selectedArticle.kategori)
              .slice(0, 3)
              .map(article => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-slate-800/60 backdrop-blur border border-amber-500/20 rounded-lg p-4 hover:border-amber-500/50 cursor-pointer transition-all"
              >
                <div className="text-4xl mb-3">{article.image}</div>
                <h4 className="font-bold text-sm mb-2 line-clamp-2 hover:text-amber-400 transition-colors">{article.judul}</h4>
                <p className="text-slate-400 text-xs">{new Date(article.tanggal).toLocaleDateString('id-ID')}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      )}

      {/* Casino Modal Detail */}
      {selectedCasino && currentPage === 'home' && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCasino(null)}
        >
          <div
            className="bg-slate-800 border border-amber-500/30 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-5xl">{selectedCasino.image}</span>
                <div>
                  <h2 className="text-2xl font-bold">{selectedCasino.nama}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                    <span className="font-bold">{selectedCasino.rating}</span>
                    <span className="text-sm text-amber-100">({selectedCasino.reviews} ulasan)</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedCasino(null)}
                className="text-white hover:text-amber-200 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Deskripsi */}
              <div>
                <h3 className="text-lg font-bold text-amber-400 mb-2">Tentang</h3>
                <p className="text-slate-300">{selectedCasino.deskripsi}</p>
              </div>

              {/* Bonus */}
              <div>
                <h3 className="text-lg font-bold text-amber-400 mb-2">Bonus Selamat Datang</h3>
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                  <p className="text-green-400 font-bold text-lg">{selectedCasino.bonus}</p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-bold text-amber-400 mb-3">Fitur Unggulan</h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedCasino.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Provider Game */}
              <div>
                <h3 className="text-lg font-bold text-amber-400 mb-3">Provider Game</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCasino.providerGame.map((provider, idx) => (
                    <span key={idx} className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm">
                      {provider}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-3 rounded-lg transition-all text-lg">
                Daftar dan Dapatkan Bonus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black/50 border-t border-amber-500/20 mt-16 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="mb-2">© 2024 Kasino Terbaik Indonesia. Semua hak dilindungi.</p>
          <p className="text-sm">Peringatan: Perjudian dapat menyebabkan kecanduan. Bermain dengan bijak.</p>
        </div>
      </footer>
    </div>
  );
}