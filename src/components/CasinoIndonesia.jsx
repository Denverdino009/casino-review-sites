import React, { useState } from 'react';
import { Star, Shield, Award, Search, Calendar, User, Tag, ArrowRight, Zap } from 'lucide-react';

export default function CasinoIndonesia() {
  const [selectedCategory, setSelectedCategory] = useState('tat-ca');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCasino, setSelectedCasino] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const casinos = [
    {
      id: 1,
      ten: '1WIN - Kasino & Taruhan Olahraga',
      rating: 4.95,
      reviews: 5847,
      category: 'premium',
      bonus: 'Bonus 500% Hingga Rp 12.5 Juta',
      features: ['Lisensi Curaçao', 'Dukungan Bahasa Indonesia', 'Penarikan Instan'],
      image: '🏆',
      description: 'Platform taruhan terkemuka dengan bonus selamat datang 500% dan lebih dari 5.000 permainan dari penyedia terbaik dunia.',
      providers: ['Pragmatic Play', 'Evolution Gaming', 'NetEnt', 'Microgaming'],
      isAffiliate: true,
      affiliateLink: 'https://lkyv.cc/d252db',
      featured: true
    },
    {
      id: 2,
      ten: 'Melbet - Kasino Daring',
      rating: 4.92,
      reviews: 4562,
      category: 'premium',
      bonus: 'Bonus 100% + 300 Putaran Gratis',
      features: ['Lisensi Malta', 'Pembayaran Lokal', 'Taruhan Olahraga'],
      image: '⭐',
      description: 'Kasino terpercaya dengan bonus 100% untuk semua pemain baru dan putaran gratis harian.',
      providers: ['Pragmatic Play', 'Play\'n GO', 'Evolution Gaming'],
      isAffiliate: true,
      affiliateLink: 'https://refpa3665.com/L?tag=d_5984964m_2559c_home&site=5984964&ad=2559',
      featured: true
    },
    {
      id: 3,
      ten: 'Fun88 Indonesia',
      rating: 4.8,
      reviews: 2845,
      category: 'contin-dung',
      bonus: 'Bonus Selamat Datang Hingga Rp 25 Juta',
      features: ['Lisensi Malta', 'Dukungan Bahasa Indonesia', 'Penarikan Cepat'],
      image: '🎰',
      description: 'Platform taruhan online terkemuka Indonesia dengan berbagai permainan dan bonus tinggi.',
      providers: ['Pragmatic Play', 'NetEnt', 'Evolution Gaming']
    },
    {
      id: 4,
      ten: 'Bet365 Indonesia',
      rating: 4.8,
      reviews: 2456,
      category: 'contin-dung',
      bonus: 'Bonus Sambutan Hingga Rp 15 Juta',
      features: ['Lisensi Curaçao', 'Mobile Ramah', 'Pembayaran Lokal'],
      image: '🎲',
      description: 'Platform taruhan terpercaya dengan dukungan bahasa Indonesia dan metode pembayaran lokal.',
      providers: ['Pragmatic Play', 'Play\'n GO', 'Isoftbet']
    },
    {
      id: 5,
      ten: 'LuckBet Indonesia',
      rating: 4.7,
      reviews: 2134,
      category: 'noi-bat',
      bonus: 'Bonus Hingga Rp 22.5 Juta + 100 Putaran Gratis',
      features: ['Lisensi Gibraltar', 'Dukungan Lokal', 'Program VIP'],
      image: '👑',
      description: 'Kasino premium dengan lisensi internasional dan fokus pada pasar Indonesia.',
      providers: ['Pragmatic Play', 'Evolution Gaming', 'Big Time Gaming']
    },
    {
      id: 6,
      ten: 'TigerBet Online',
      rating: 4.6,
      reviews: 1987,
      category: 'popular',
      bonus: 'Bonus Hingga Rp 12.5 Juta + 50 Putaran Gratis',
      features: ['Aplikasi Seluler', 'Turnamen Mingguan', 'Program VIP'],
      image: '🌟',
      description: 'Platform dengan turnamen mingguan dan program VIP yang menarik.',
      providers: ['Pragmatic Play', 'Red Tiger', 'Yggdrasil']
    }
  ];

  const blogArticles = [
    {
      id: 1,
      title: '1WIN & Melbet: Kasino Daring Terbaik untuk Pemain Indonesia 2026',
      slug: 'casino-top-indonesia-2026',
      excerpt: 'Perbandingan detail 1WIN dan Melbet - dua kasino dengan bonus tertinggi dan dukungan bahasa Indonesia terbaik.',
      content: `Tahun 2026, dua kasino daring paling menonjol untuk pemain Indonesia adalah 1WIN dan Melbet.

Mengapa 1WIN Menjadi Pilihan Utama?
1WIN menyediakan bonus selamat datang 500% - yang tertinggi saat ini. Platform mendukung bahasa Indonesia 24/7 dan memiliki lebih dari 5.000 permainan. Penarikan cepat dan aman dengan lisensi Curaçao.

Melbet - Pilihan Kedua Terpercaya
Melbet menyediakan bonus 100% dan putaran gratis harian. Lisensi Malta menjamin keamanan tinggi. Platform ini sempurna untuk pemain yang menginginkan keseimbangan antara bonus dan stabilitas.

Cara Memilih Antara Kedua Platform
Pilih 1WIN jika menginginkan bonus tertinggi dan ingin mencoba banyak permainan. Pilih Melbet jika menyukai stabilitas dan putaran gratis harian.

Keamanan dan Pembayaran
Kedua platform menggunakan enkripsi SSL 256-bit dan mendukung pembayaran melalui bank lokal, e-wallet, dan transfer uang.

Untuk memulai, kunjungi 1WIN atau Melbet hari ini dan terima bonus selamat datang Anda.`,
      metaDesc: '1WIN vs Melbet: Perbandingan detail dua kasino terbaik untuk pemain Indonesia. Bonus tinggi, dukungan bahasa Indonesia, aman.',
      keywords: ['1win', 'melbet', 'kasino indonesia', 'taruhan online', 'bonus casino'],
      category: 'Artikel Utama',
      author: 'Admin',
      date: '2026-08-18',
      featured: true,
      image: '🏆'
    },
    {
      id: 2,
      title: 'Panduan Memilih Kasino Daring Terpercaya di Indonesia 2026',
      slug: 'panduan-memilih-casino-terpercaya',
      excerpt: 'Pelajari cara memilih kasino aman, berlisensi dan terpercaya. Panduan lengkap untuk pemain Indonesia.',
      content: `Memilih kasino daring yang tepat adalah langkah pertama menuju pengalaman bermain yang aman dan menyenangkan.

Periksa Lisensi dan Regulasi
Kasino daring terpercaya harus memiliki lisensi dari badan internasional seperti Malta, Gibraltar, atau Curaçao.

Metode Pembayaran Lokal
Pilih kasino yang mendukung metode pembayaran Indonesia seperti transfer bank lokal, e-wallet, dan GCash.

Dukungan Pelanggan Bahasa Indonesia
Kasino terbaik menyediakan dukungan 24/7 dalam bahasa Indonesia melalui chat langsung, email, dan telepon.

Bandingkan Bonus
Bonus besar tidak selalu berarti kasino terbaik. Periksa syarat dan ketentuan dengan cermat.

Koleksi Permainan Beragam
Kasino dengan penyedia terkenal seperti Pragmatic Play, NetEnt, dan Evolution Gaming memberikan pengalaman bermain terbaik.`,
      metaDesc: 'Panduan memilih kasino daring terpercaya di Indonesia. Periksa lisensi, keamanan, dan bonus terbaik.',
      keywords: ['kasino indonesia', 'kasino terpercaya', 'cara memilih casino', 'lisensi'],
      category: 'Panduan',
      author: 'Admin',
      date: '2026-08-18',
      featured: true,
      image: '📚'
    },
    {
      id: 3,
      title: 'Strategi Bertaruh: Tips Menang Besar di Permainan Slot Daring',
      slug: 'strategi-menang-slot-online',
      excerpt: 'Temukan strategi efektif untuk meningkatkan peluang kemenangan di permainan slot daring.',
      content: `Permainan slot daring bergantung pada keberuntungan, tetapi ada strategi yang dapat meningkatkan peluang Anda.

Pahami RTP (Return to Player)
RTP adalah persentase uang yang dikembalikan ke pemain dalam jangka panjang. Pilih slot dengan RTP di atas 96%.

Kelola Anggaran Anda
Tetapkan anggaran harian dan patuhi batasnya. Jangan pernah bertaruh lebih dari yang bisa Anda kehilangan.

Gunakan Bonus dengan Bijak
Manfaatkan putaran gratis dan bonus deposit untuk memaksimalkan waktu bermain tanpa meningkatkan risiko.

Pilih Slot dengan Volatilitas Tepat
Slot volatilitas rendah membayar hadiah kecil secara teratur. Slot volatilitas tinggi membayar hadiah besar tetapi jarang.`,
      metaDesc: 'Strategi slot daring terbukti untuk meningkatkan peluang kemenangan. RTP, manajemen modal, dan tips dari ahli.',
      keywords: ['slot online', 'strategi slot', 'tips menang slot', 'RTP slot'],
      category: 'Strategi',
      author: 'Admin',
      date: '2026-08-18',
      featured: false,
      image: '🎰'
    }
  ];

  const categories = [
    { id: 'tat-ca', label: 'Semua' },
    { id: 'premium', label: 'Premium' },
    { id: 'popular', label: 'Populer' },
    { id: 'contin-dung', label: 'Terpercaya' }
  ];

  const filteredCasinos = casinos.filter(casino => {
    const matchesCategory = selectedCategory === 'tat-ca' || casino.category === selectedCategory;
    const matchesSearch = casino.ten.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredCasinos = casinos.filter(c => c.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900 text-white">
      <head>
        <title>Kasino Daring Indonesia - 1WIN, Melbet & Platform Taruhan Terpercaya 2026</title>
        <meta name="description" content="Tinjauan detail kasino daring terbaik di Indonesia. Bandingkan 1WIN, Melbet dengan platform taruhan berlisensi internasional." />
        <meta name="keywords" content="kasino indonesia, 1win, melbet, taruhan online, kasino daring" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Kasino Daring Indonesia - Tinjauan & Perbandingan 2026" />
        <meta property="og:description" content="Temukan kasino terpercaya dengan lisensi internasional, bonus tinggi, dukungan bahasa Indonesia." />
      </head>

      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-amber-600/30 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setCurrentPage('home'); setSelectedArticle(null); }}>
              <span className="text-3xl">🎰</span>
              <div>
                <h1 className="text-3xl font-bold">Kasino Indonesia Pro</h1>
                <p className="text-xs text-amber-300">kasinoindonesia.id</p>
              </div>
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
              ? 'Tinjauan detail kasino daring dengan lisensi internasional dan bonus tertinggi'
              : 'Panduan, strategi, dan tips taruhan daring paling lengkap'}
          </p>
        </div>
      </header>

      {/* Home Page */}
      {currentPage === 'home' && (
      <>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-amber-900 to-slate-900 border-b border-amber-600/30 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Kasino Daring Terbaik untuk Pemain Indonesia</h2>
          <p className="text-xl text-slate-300 mb-8">
            Tinjauan independen, perbandingan detail, dan panduan keamanan untuk pemain yang ingin bergabung dengan kasino daring terpercaya.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-amber-900/50 border border-amber-600/50 rounded-lg p-6">
              <Zap className="w-8 h-8 text-yellow-400 mb-3" />
              <h3 className="font-bold text-lg mb-2">Bonus Tertinggi</h3>
              <p className="text-sm text-slate-300">Bonus selamat datang hingga 500% dan promosi harian</p>
            </div>
            <div className="bg-amber-900/50 border border-amber-600/50 rounded-lg p-6">
              <Shield className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="font-bold text-lg mb-2">100% Aman</h3>
              <p className="text-sm text-slate-300">Lisensi internasional, enkripsi SSL, dan perlindungan data</p>
            </div>
            <div className="bg-amber-900/50 border border-amber-600/50 rounded-lg p-6">
              <Award className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-bold text-lg mb-2">Dukungan Bahasa Indonesia</h3>
              <p className="text-sm text-slate-300">Layanan 24/7 melalui chat, email, dan telepon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Casinos */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-900 border-b border-amber-600/30 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Zap className="text-yellow-400" />
            2 Kasino Teratas Dengan Rating Tertinggi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredCasinos.map(casino => (
              <div
                key={casino.id}
                onClick={() => setSelectedCasino(casino)}
                className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-amber-500/30 transition-all cursor-pointer border-2 border-yellow-400"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{casino.ten}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                        <span className="font-bold text-lg">{casino.rating}</span>
                        <span className="text-sm text-amber-100">({casino.reviews} review)</span>
                      </div>
                    </div>
                    <span className="text-5xl">{casino.image}</span>
                  </div>

                  <div className="bg-yellow-400/20 border border-yellow-400/50 rounded-lg p-4 mb-4">
                    <p className="text-xs text-amber-100 mb-1">Bonus Sambutan</p>
                    <p className="text-yellow-300 font-bold text-lg">{casino.bonus}</p>
                  </div>

                  <p className="text-amber-100 mb-6">{casino.description}</p>

                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-all text-lg">
                    Kunjungi Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 border-b border-amber-600/20 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari kasino..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-amber-600/30 rounded-lg focus:outline-none focus:border-amber-600 text-white placeholder-slate-400"
              />
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Casino Grid */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-8">Semua Kasino Daring</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCasinos.map(casino => (
            <div
              key={casino.id}
              onClick={() => setSelectedCasino(casino)}
              className="bg-slate-800/60 backdrop-blur border border-amber-600/20 rounded-xl overflow-hidden hover:border-amber-600/50 hover:shadow-xl hover:shadow-amber-600/20 transition-all cursor-pointer group"
            >
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-4 flex items-center justify-between">
                <span className="text-4xl">{casino.image}</span>
                <div className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{casino.rating}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{casino.ten}</h3>
                <p className="text-slate-400 text-sm mb-4">{casino.reviews} review</p>

                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-slate-300 mb-1">Bonus</p>
                  <p className="text-green-400 font-bold text-sm">{casino.bonus}</p>
                </div>

                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 rounded-lg transition-all transform group-hover:scale-105">
                  Lihat Tinjauan
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      </>
      )}

      {/* Blog Page */}
      {currentPage === 'blog' && !selectedArticle && (
      <main className="max-w-6xl mx-auto px-4 py-12">
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
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-100 transition-colors">{article.title}</h3>
                    <p className="text-amber-100 mb-4">{article.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-amber-900">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString('id-ID')}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Semua Artikel</h2>
          <div className="space-y-4">
            {blogArticles.map(article => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-slate-800/60 backdrop-blur border border-amber-600/20 rounded-lg p-6 hover:border-amber-600/50 hover:shadow-lg hover:shadow-amber-600/10 transition-all cursor-pointer group"
              >
                <div className="flex gap-6">
                  <div className="text-4xl">{article.image}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">{article.title}</h3>
                    <p className="text-slate-300 mb-4">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString('id-ID')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        <span>{article.category}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
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

      {/* Article Detail */}
      {currentPage === 'blog' && selectedArticle && (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => setSelectedArticle(null)}
          className="mb-8 flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Kembali ke Blog
        </button>

        <article className="bg-slate-800/60 backdrop-blur border border-amber-600/20 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-8">
            <div className="text-6xl mb-4">{selectedArticle.image}</div>
            <h1 className="text-4xl font-bold mb-4">{selectedArticle.title}</h1>
            <div className="flex flex-wrap gap-6 text-amber-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(selectedArticle.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{selectedArticle.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5" />
                <span>{selectedArticle.category}</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            <p className="text-lg text-slate-300 mb-8 italic">{selectedArticle.excerpt}</p>
            
            <div className="prose prose-invert max-w-none">
              {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                <div key={idx} className="mb-6">
                  {paragraph.includes(':') && !paragraph.startsWith(' ') ? (
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
          </div>
        </article>
      </main>
      )}

      {/* Casino Modal */}
      {selectedCasino && currentPage === 'home' && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCasino(null)}
        >
          <div
            className="bg-slate-800 border border-amber-600/30 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-5xl">{selectedCasino.image}</span>
                <div>
                  <h2 className="text-2xl font-bold">{selectedCasino.ten}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                    <span className="font-bold">{selectedCasino.rating}</span>
                    <span className="text-sm text-amber-100">({selectedCasino.reviews} review)</span>
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

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-amber-400 mb-2">Tentang Kasino Ini</h3>
                <p className="text-slate-300">{selectedCasino.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-amber-400 mb-2">Bonus Sambutan</h3>
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                  <p className="text-green-400 font-bold text-lg">{selectedCasino.bonus}</p>
                </div>
              </div>

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

              <div>
                <h3 className="text-lg font-bold text-amber-400 mb-3">Penyedia Permainan</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCasino.providers.map((provider, idx) => (
                    <span key={idx} className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm">
                      {provider}
                    </span>
                  ))}
                </div>
              </div>

              {selectedCasino.isAffiliate ? (
                <a
                  href={selectedCasino.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3 rounded-lg transition-all text-lg block text-center"
                >
                  Kunjungi {selectedCasino.ten}
                </a>
              ) : (
                <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3 rounded-lg transition-all text-lg">
                  Kunjungi Sekarang
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black/50 border-t border-amber-600/20 mt-16 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="mb-2">© 2026 Kasino Indonesia Pro (kasinoindonesia.id). Semua hak dilindungi.</p>
          <p className="text-sm">⚠️ Peringatan: Perjudian dapat menyebabkan kecanduan. Mainlah dengan bertanggung jawab. Hanya untuk usia 18+.</p>
          <p className="text-xs mt-2">Penafian: Situs web ini berisi tautan afiliasi yang memberikan kami komisi.</p>
        </div>
      </footer>
    </div>
  );
}
