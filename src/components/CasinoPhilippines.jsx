import React, { useState } from 'react';
import { Star, Shield, Award, Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';

export default function CasinoReviewPH() {
  const [selectedCategory, setSelectedCategory] = useState('lahat');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCasino, setSelectedCasino] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const casinos = [
    {
      id: 1,
      pangalan: 'Bet365 Pilipinas',
      rating: 4.9,
      reviews: 3156,
      category: 'premium',
      bonus: 'Hanggang ₱50,000 Bonus',
      features: ['Lisensya Malta', 'Suporta Pilipinas', 'Mabilis na Payout'],
      image: '🎰',
      description: 'Nangungunang platform sa online betting sa Pilipinas na may pinakamalawak na koleksyon ng laro.',
      providers: ['Pragmatic Play', 'NetEnt', 'Evolution Gaming']
    },
    {
      id: 2,
      pangalan: 'LeoVegas Pilipinas',
      rating: 4.8,
      reviews: 2734,
      category: 'mapagkakatiwalaan',
      bonus: 'Hanggang ₱30,000 + 100 Free Spins',
      features: ['Lisensya Curacao', 'Mobile Friendly', 'Weekly Promos'],
      image: '🎲',
      description: 'Mapagkakatiwalaang casino platform na may suporta sa Filipino at local payment methods.',
      providers: ['Pragmatic Play', 'Play\'n GO', 'Isoftbet']
    },
    {
      id: 3,
      pangalan: 'Royal Fortune PH',
      rating: 4.7,
      reviews: 2456,
      category: 'mapagkakatiwalaan',
      bonus: 'Hanggang ₱40,000 + 80 Free Spins',
      features: ['Lisensya Gibraltar', 'Local Support', 'OFW Friendly'],
      image: '👑',
      description: 'Premium casino na may international license at dedicated support para sa Filipino players.',
      providers: ['Pragmatic Play', 'Evolution Gaming', 'Big Time Gaming']
    },
    {
      id: 4,
      pangalan: 'Spin Manila',
      rating: 4.6,
      reviews: 1987,
      category: 'popular',
      bonus: 'Hanggang ₱25,000 + 50 Free Spins',
      features: ['Mobile App', 'Weekly Tournaments', 'VIP Program'],
      image: '🌟',
      description: 'Casino na may weekly tournaments at active community ng Filipino players.',
      providers: ['Pragmatic Play', 'Red Tiger', 'Yggdrasil']
    },
    {
      id: 5,
      pangalan: 'Diamond Casino PH',
      rating: 4.9,
      reviews: 3342,
      category: 'premium',
      bonus: 'Hanggang ₱60,000 Bonus',
      features: ['Lisensya Malta', 'Cryptocurrency', 'Instant Payout'],
      image: '💎',
      description: 'Pinaka-mapagkakatiwalaang casino na may pinakamabilis na system ng pagbabayad.',
      providers: ['Pragmatic Play', 'NetEnt', 'Evolution Gaming']
    },
    {
      id: 6,
      pangalan: 'Phoenix Slots',
      rating: 4.5,
      reviews: 1654,
      category: 'mapagkakatiwalaan',
      bonus: 'Hanggang ₱20,000 + 150 Free Spins',
      features: ['Walang Verification', 'Mabilis na Withdrawals', 'Maraming Slots'],
      image: '🎯',
      description: 'Casino na nakatuon sa slot games na may generous bonuses at mabilis na payout.',
      providers: ['Pragmatic Play', 'Slot Thunder', 'PG Soft']
    }
  ];

  const blogArticles = [
    {
      id: 1,
      title: 'Kumpleto Gabay: Paano Pumili ng Mapagkakatiwalaang Online Casino sa Pilipinas 2024',
      slug: 'gabay-pumili-casino-mapagkakatiwalaan',
      excerpt: 'Matuto kung paano makilala ang ligtas at mapagkakatiwalaang online casinos sa Pilipinas.',
      content: `Ang pagpili ng tamang online casino ay mahalagang hakbang tungo sa ligtas at masayang karanasan. Sa maraming opsyon, mahalaga ang malaman kung ano ang dapat paghanap.

Pagsusuri ng Lisensya at Regulasyon
Ang mga mapagkakatiwalaang online casino ay dapat may lisensya mula sa international authorities tulad ng Malta, Gibraltar o Curacao. Ang lisensya na ito ay nagpapakita na ang casino ay sumusunod sa pinakamataas na security standards.

Lokal na Paraan ng Pagbabayad
Pumili ng casino na sumusuporta sa local Filipino payment methods tulad ng bank transfer, e-wallet at GCash. Ginagawang mas madali at mabilis ang mga transaksyon.

Filipino Customer Support
Ang pinakamahusay na casino ay nag-aalok ng 24/7 support sa Filipino through live chat, email at phone.

Kumpara ng Mga Bonus
Mahalaga ang pagcompare ng welcome bonus, ngunit tandaan na malaking bonus ay hindi palaging nangangahulugang best casino. Basahin ang terms and conditions.

Malawak na Koleksyon ng Laro
Ang mga casino na may kilalang providers tulad ng Pragmatic Play, NetEnt at Evolution Gaming ay nag-aalok ng pinakamahusay na laro.

Para sa detalyadong review, basahin ang aming comprehensive casino reviews.`,
      metaDesc: 'Gabay sa pagpili ng mapagkakatiwalaang online casino sa Pilipinas. License verification, security at practical tips.',
      keywords: ['online casino', 'casino pilipinas', 'mapagkakatiwalaan', 'casino tips'],
      category: 'Gabay',
      author: 'Admin',
      date: '2024-01-15',
      featured: true,
      image: '📚'
    },
    {
      id: 2,
      title: 'Estratehiya sa Slots: Proven Tips Para Manalo sa Online Slot Games',
      slug: 'estratehiya-slots-online',
      excerpt: 'Matuto ng epektibong strategy at tips para tumulad sa slot games online.',
      content: `Ang slot online ay batay sa swerte, ngunit may mga estratehiya na makakatulong na mapataas ang inyong mga pagkakataon.

Maintindihan ang RTP (Return to Player)
Ang RTP ay ang porsyento ng pera na ibabalik sa mga manlalaro sa long term. Piliin ang slots na may RTP na higit sa 96%.

Pamahalaan ang Inyong Pera
Magtakda ng araw-araw na badyet at panatilihin ang limitasyong iyon. Huwag mangutang ng higit sa kayang ninyong mawalan.

Gumamit ng Bonus ng Matalino
Samantalahin ang free spins at deposit bonuses para ma-maximize ang inyong playtime nang walang dagdag na panganib.

Pumili ng Tamang Volatility
Ang low volatility slots ay nagbabayad ng maliit na premyo nang mas madalas. High volatility slots ay nagbabayad ng malalaking premyo ngunit mas bihira.

Laruin Para sa Kasiyahan
Tandaan na ang slots ay libangan, hindi paraan para kumita ng pera. Laruin ito para sa kasiyahan.

Para sa listahan ng best slot casinos, basahin ang aming detailed casino reviews.`,
      metaDesc: 'Estratehiya sa slot games: RTP, bankroll management, at expert tips para manalo.',
      keywords: ['slot online', 'slot strategy', 'tips manalo', 'RTP slots'],
      category: 'Estratehiya',
      author: 'Admin',
      date: '2024-01-14',
      featured: true,
      image: '🎰'
    },
    {
      id: 3,
      title: 'Mga Bonus Casino: Maximize Ang Inyong Panalo',
      slug: 'casino-bonus-maximize',
      excerpt: 'Alamin ang iba\'t ibang uri ng casino bonus at paano gamitin ito ng matalino.',
      content: `Ang casino bonuses ay magandang paraan para magsimula ng may extra credits. Matuto ng available na bonus types.

Welcome Bonus
Ibinibigay kapag nag-sign up kayo. Karaniwang percentage of deposit up to maximum amount. Kailangan: umabot sa certain turnover bago makuha ang pera.

Free Spins
Exclusive bonus para sa slot games. Pwedeng i-convert ang winnings sa real money.

Reload Bonus
Ibinibigay sa bagong deposits. Mas maliit kaysa welcome bonus pero regular.

Cashback
Pagbabalik ng percentage ng inyong natalo. Puno-puno ng bonus dahil walang mahigpit na turnover.

VIP Program
Loyalty program para sa regular players na may exclusive rewards.

Para makita ang detailed bonus breakdown, basahin ang aming comprehensive casino reviews.`,
      metaDesc: 'Mga uri ng casino bonus sa Pilipinas: welcome bonus, free spins, cashback at VIP programs.',
      keywords: ['casino bonus', 'welcome bonus', 'free spins', 'turnover'],
      category: 'Bonus',
      author: 'Admin',
      date: '2024-01-13',
      featured: false,
      image: '🎁'
    },
    {
      id: 4,
      title: 'Live Casino: Tunay na Karanasan ng Casino mula sa Bahay',
      slug: 'live-casino-experience',
      excerpt: 'Kumpleto gabay sa live casino na may tunay na mga dealer at paano laruin.',
      content: `Ang live casino ay nag-aalok ng authentic casino experience na may tunay na dealers at real-time interaction.

Ano ang Live Casino?
Ang live casino ay nagho-host ng live games mula sa studios na may tunay na dealers. Pwede kayong makipag-ugnayan sa dealer at ibang players.

Popular Live Casino Games
- Live Roulette: Roulette na may tunay na dealer
- Live Blackjack: Klasikong card game
- Live Baccarat: Mabilis na card game
- Live Poker: Laro laban sa ibang players
- Live Sicbo: Oriental dice game

Benepisyo ng Live Casino
- Tunay na interaction sa dealers
- Transparent gameplay
- Makipag-socialize sa ibang players
- Mas authentic na karanasan

Tips Para sa Live Casino
- Panatilihing disciplined sa pera
- Matuto ng game rules bago maglaro
- Gumamit ng chat nang responsable
- Maglaro kapag focused at calm

Para sa best live casinos, tingnan ang aming detailed casino reviews.`,
      metaDesc: 'Live casino Pilipinas: live dealers, popular games, at strategic tips.',
      keywords: ['live casino', 'live dealer', 'live roulette', 'live blackjack'],
      category: 'Gabay',
      author: 'Admin',
      date: '2024-01-12',
      featured: false,
      image: '🎬'
    },
    {
      id: 5,
      title: 'Seguridad ng Online Casino: Protektahan ang Inyong Account',
      slug: 'seguridad-casino-online',
      excerpt: 'Essential security tips para protektahan ang personal data at casino account.',
      content: `Ang seguridad ay top priority sa online casino. Sundin ang tips na ito para protektahan ang account.

Gumamit ng Malakas na Password
Ang password ay dapat may combination ng letters, numbers at symbols na minimum 12 characters. Huwag gamitin ang personal info.

I-enable ang Two-Factor Authentication
Ang 2FA ay nag-add ng extra security layer. Kailangan ng password at code mula sa authenticator app.

Verify ang Casino License
Kumpirmahin na may valid license ang casino mula sa regulatory authority. Tingnan ang official website.

Gumamit ng Secure Connection
Huwag maglaro sa public WiFi. Gamitin ang personal network o VPN.

I-update Regularly ang Software
Laging update ang operating system, browser at security software. May security patches ang updates.

Iwasan ang Phishing
Maging ingat sa emails o messages na humihingi ng login data. Ang legitimate casinos ay hindi hihilingin ang password.`,
      metaDesc: 'Seguridad ng casino online: proteksyon ng data, strong passwords, 2FA at anti-fraud measures.',
      keywords: ['casino security', 'data protection', 'password', 'authentication'],
      category: 'Seguridad',
      author: 'Admin',
      date: '2024-01-11',
      featured: false,
      image: '🔒'
    }
  ];

  const categories = [
    { id: 'lahat', label: 'Lahat ng Casino' },
    { id: 'premium', label: 'Premium' },
    { id: 'popular', label: 'Popular' },
    { id: 'mapagkakatiwalaan', label: 'Mapagkakatiwalaan' }
  ];

  const filteredCasinos = casinos.filter(casino => {
    const matchesCategory = selectedCategory === 'lahat' || casino.category === selectedCategory;
    const matchesSearch = casino.pangalan.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-amber-500/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setCurrentPage('home'); setSelectedArticle(null); }}>
              <span className="text-3xl">🎰</span>
              <h1 className="text-3xl font-bold">Casino Pilipinas</h1>
            </div>
            <nav className="flex gap-6">
              <button
                onClick={() => { setCurrentPage('home'); setSelectedArticle(null); }}
                className={`font-medium transition-colors ${currentPage === 'home' ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'}`}
              >
                Tahanan
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
              ? 'Kumpleto at mapagkakatiwalaang reviews ng online casinos'
              : 'Gabay, estratehiya at tips para sa online casinos'}
          </p>
        </div>
      </header>

      {/* Home Page */}
      {currentPage === 'home' && (
      <>
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 border-b border-amber-500/20 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Maghanap ng casino..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-amber-500/30 rounded-lg focus:outline-none focus:border-amber-500 text-white placeholder-slate-400"
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

      {filteredCasinos.length > 0 && (
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4">
              <Award className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">Featured Casino ngayong Buwan</h2>
                <p className="text-amber-100">{filteredCasinos[0].pangalan}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCasinos.map(casino => (
            <div
              key={casino.id}
              onClick={() => setSelectedCasino(casino)}
              className="bg-slate-800/60 backdrop-blur border border-amber-500/20 rounded-xl overflow-hidden hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/20 transition-all cursor-pointer group"
            >
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-4 flex items-center justify-between">
                <span className="text-4xl">{casino.image}</span>
                <div className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold">{casino.rating}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">{casino.pangalan}</h3>
                <p className="text-slate-400 text-sm mb-4">{casino.reviews} reviews</p>

                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-slate-300 mb-1">Welcome Bonus</p>
                  <p className="text-green-400 font-bold">{casino.bonus}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-slate-400 mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {casino.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-slate-700/50 text-amber-300 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 rounded-lg transition-all transform group-hover:scale-105">
                  Basahin ang Review
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCasinos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">Walang casino na nahanap</p>
          </div>
        )}
      </main>
      </>
      )}

      {/* Blog Page */}
      {currentPage === 'blog' && !selectedArticle && (
      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
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
                    <span>{new Date(article.date).toLocaleDateString('en-PH')}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Lahat ng Articles</h2>
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
                    <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">{article.title}</h3>
                    <p className="text-slate-300 mb-4">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString('en-PH')}</span>
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
          Bumalik sa Blog
        </button>

        <article className="bg-slate-800/60 backdrop-blur border border-amber-500/20 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-8">
            <div className="text-6xl mb-4">{selectedArticle.image}</div>
            <h1 className="text-4xl font-bold mb-4">{selectedArticle.title}</h1>
            <div className="flex flex-wrap gap-6 text-amber-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(selectedArticle.date).toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
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

            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-slate-400 text-sm mb-3">Keywords: </p>
              <div className="flex flex-wrap gap-2">
                {selectedArticle.keywords.map((keyword, idx) => (
                  <span key={idx} className="bg-slate-700/50 text-amber-300 px-3 py-1 rounded-full text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-700/30 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Meta Description (SEO):</p>
              <p className="text-slate-300 italic">{selectedArticle.metaDesc}</p>
            </div>
          </div>
        </article>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogArticles
              .filter(art => art.id !== selectedArticle.id && art.category === selectedArticle.category)
              .slice(0, 3)
              .map(article => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-slate-800/60 backdrop-blur border border-amber-500/20 rounded-lg p-4 hover:border-amber-500/50 cursor-pointer transition-all"
              >
                <div className="text-4xl mb-3">{article.image}</div>
                <h4 className="font-bold text-sm mb-2 line-clamp-2 hover:text-amber-400 transition-colors">{article.title}</h4>
                <p className="text-slate-400 text-xs">{new Date(article.date).toLocaleDateString('en-PH')}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      )}

      {/* Casino Modal */}
      {selectedCasino && currentPage === 'home' && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCasino(null)}
        >
          <div
            className="bg-slate-800 border border-amber-500/30 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-5xl">{selectedCasino.image}</span>
                <div>
                  <h2 className="text-2xl font-bold">{selectedCasino.pangalan}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                    <span className="font-bold">{selectedCasino.rating}</span>
                    <span className="text-sm text-amber-100">({selectedCasino.reviews} reviews)</span>
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
                <h3 className="text-lg font-bold text-amber-400 mb-2">Tungkol sa Casino</h3>
                <p className="text-slate-300">{selectedCasino.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-amber-400 mb-2">Welcome Bonus</h3>
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                  <p className="text-green-400 font-bold text-lg">{selectedCasino.bonus}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-amber-400 mb-3">Highlights</h3>
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
                <h3 className="text-lg font-bold text-amber-400 mb-3">Game Providers</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCasino.providers.map((provider, idx) => (
                    <span key={idx} className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm">
                      {provider}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-3 rounded-lg transition-all text-lg">
                Mag-Sign Up at Kunin ang Bonus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black/50 border-t border-amber-500/20 mt-16 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="mb-2">© 2024 Casino Pilipinas. Lahat ng karapatan ay nakalaan.</p>
          <p className="text-sm">Babala: Ang pagsusugal ay maaaring magdulot ng addikson. Maglaro nang may pananagutan.</p>
        </div>
      </footer>
    </div>
  );
}