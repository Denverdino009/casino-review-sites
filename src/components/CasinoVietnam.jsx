import React, { useState } from 'react';
import { Star, Shield, Award, Search, Calendar, User, Tag, ArrowRight, Zap } from 'lucide-react';

export default function CasinoVietnam() {
  const [selectedCategory, setSelectedCategory] = useState('tat-ca');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCasino, setSelectedCasino] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Link cloaking function - makes affiliate links look like internal redirects
  const cloakLink = (originalLink, displayText) => {
    return (
      <a 
        href={originalLink}
        rel="noopener noreferrer"
        target="_blank"
        className="text-red-500 hover:text-red-600 underline"
        onClick={(e) => {
          // Track the click
          console.log(`Affiliate link clicked: ${displayText}`);
        }}
      >
        {displayText}
      </a>
    );
  };

  const casinos = [
    {
      id: 1,
      ten: '1WIN - Casino & Cược Thể Thao',
      rating: 4.95,
      reviews: 5847,
      category: 'premium',
      bonus: '500% Thưởng Lên Tới 2.5 Triệu VNĐ',
      features: ['Giấy Phép Curaçao', 'Hỗ Trợ Tiếng Việt 24/7', 'Rút Tiền Tức Thì'],
      image: '🏆',
      description: 'Nền tảng cược hàng đầu với 500% thưởng chào mừng và hơn 5,000 trò chơi từ nhà cung cấp top thế giới.',
      providers: ['Pragmatic Play', 'Evolution Gaming', 'NetEnt', 'Microgaming'],
      isAffiliate: true,
      affiliateLink: 'https://lktu.cc/177920',
      featured: true
    },
    {
      id: 2,
      ten: 'Melbet - Sòng Bạc Trực Tuyến',
      rating: 4.92,
      reviews: 4562,
      category: 'premium',
      bonus: '100% Thưởng Miễn Phí + Vòng Quay Miễn Phí',
      features: ['Giấy Phép Malta', 'Thanh Toán Địa Phương', 'Cược Thể Thao'],
      image: '⭐',
      description: 'Casino uy tín với thưởng 100% cho tất cả người chơi mới và vòng quay miễn phí hằng ngày.',
      providers: ['Pragmatic Play', 'Play\'n GO', 'Evolution Gaming'],
      isAffiliate: true,
      affiliateLink: 'https://refpa3665.com/L?tag=d_5984968m_66329c_home&site=5984968&ad=66329',
      featured: true
    },
    {
      id: 3,
      ten: 'Fun88 Việt Nam',
      rating: 4.8,
      reviews: 2845,
      category: 'contin-dung',
      bonus: 'Lên đến 5.000.000 VNĐ Khuyến Mãi',
      features: ['Giấy Phép Malta', 'Hỗ Trợ Tiếng Việt', 'Rút Nhanh'],
      image: '🎰',
      description: 'Nền tảng cược trực tuyến hàng đầu Việt Nam với đa dạng trò chơi và mức bonus cao.',
      providers: ['Pragmatic Play', 'NetEnt', 'Evolution Gaming']
    },
    {
      id: 4,
      ten: 'Bet365 Việt Nam',
      rating: 4.8,
      reviews: 2456,
      category: 'contin-dung',
      bonus: 'Lên đến 3.000.000 VNĐ Thưởng Chào Mừng',
      features: ['Giấy Phép Curacao', 'Mobile Thân Thiện', 'Thanh Toán Địa Phương'],
      image: '🎲',
      description: 'Nền tảng cược đáng tin cậy với hỗ trợ tiếng Việt và phương thức thanh toán địa phương.',
      providers: ['Pragmatic Play', 'Play\'n GO', 'Isoftbet']
    },
    {
      id: 5,
      ten: 'LuckBet Việt Nam',
      rating: 4.7,
      reviews: 2134,
      category: 'noi-bat',
      bonus: 'Lên đến 4.500.000 VNĐ + 100 Vòng Miễn Phí',
      features: ['Giấy Phép Gibraltar', 'Hỗ Trợ Địa Phương', 'Chương Trình VIP'],
      image: '👑',
      description: 'Casino cao cấp với giấy phép quốc tế và tập trung vào thị trường Việt Nam.',
      providers: ['Pragmatic Play', 'Evolution Gaming', 'Big Time Gaming']
    },
    {
      id: 6,
      ten: 'TigerBet Online',
      rating: 4.6,
      reviews: 1987,
      category: 'popular',
      bonus: 'Lên đến 2.500.000 VNĐ + 50 Vòng Miễn Phí',
      features: ['Ứng Dụng Di Động', 'Giải Đấu Hàng Tuần', 'Chương Trình VIP'],
      image: '🌟',
      description: 'Nền tảng với các giải đấu hàng tuần và chương trình VIP hấp dẫn.',
      providers: ['Pragmatic Play', 'Red Tiger', 'Yggdrasil']
    }
  ];

  const blogArticles = [
    {
      id: 1,
      title: '1WIN & Melbet: Những Sòng Bạc Trực Tuyến Tốt Nhất Cho Người Chơi Việt Nam 2026',
      slug: 'casino-top-vietnam-2026',
      excerpt: 'So sánh chi tiết 1WIN và Melbet - hai sòng bạc có thưởng cao nhất và hỗ trợ tiếng Việt tốt nhất.',
      content: `Năm 2026, hai sòng bạc trực tuyến nổi bật nhất cho người chơi Việt Nam là 1WIN và Melbet.

Tại Sao 1WIN Là Lựa Chọn Hàng Đầu?
1WIN cung cấp thưởng chào mừng 500% - cao nhất hiện nay. Nền tảng hỗ trợ tiếng Việt 24/7 và có hơn 5,000 trò chơi từ các nhà cung cấp hàng đầu thế giới. Thanh toán cực nhanh và an toàn với giấy phép Curaçao.

Melbet - Lựa Chọn Thứ Hai Đáng Tin Cậy
Melbet cung cấp 100% thưởng và vòng quay miễn phí hằng ngày. Giấy phép Malta đảm bảo độ an toàn cao. Nền tảng này tuyệt vời cho những người chơi muốn cân bằng giữa thưởng và tính ổn định.

Cách Lựa Chọn Giữa Hai Nền Tảng
Chọn 1WIN nếu bạn muốn thưởng cao nhất và muốn thử nghiệm nhiều trò chơi. Chọn Melbet nếu bạn ưa thích sự ổn định và vòng quay miễn phí.

Bảo Mật Và Thanh Toán
Cả hai nền tảng đều có mã hóa SSL 256-bit và hỗ trợ thanh toán qua ngân hàng Việt, ví điện tử và chuyển tiền di động.

Để bắt đầu, hãy truy cập 1WIN hoặc Melbet ngay hôm nay và nhận thưởng chào mừng của bạn.`,
      metaDesc: '1WIN vs Melbet: So sánh chi tiết hai sòng bạc hàng đầu cho người Việt. Thưởng cao, hỗ trợ tiếng Việt, an toàn.',
      keywords: ['1win', 'melbet', 'casino việt nam', 'sòng bạc trực tuyến', 'thưởng cao'],
      category: 'Bài Viết Chính',
      author: 'Admin',
      date: '2026-08-18',
      featured: true,
      image: '🏆'
    },
    {
      id: 2,
      title: 'Hướng Dẫn Chọn Casino Trực Tuyến Đáng Tin Cậy Tại Việt Nam 2026',
      slug: 'huong-dan-chon-casino-dang-tin-cap',
      excerpt: 'Tìm hiểu cách chọn casino an toàn, có giấy phép và đáng tin cậy. Hướng dẫn đầy đủ cho người chơi Việt.',
      content: `Chọn casino trực tuyến đúng là bước đầu tiên hướng tới trải nghiệm chơi an toàn và thú vị.

Kiểm Tra Giấy Phép Và Quy Định
Casino trực tuyến đáng tin cậy phải có giấy phép từ các cơ quan quốc tế như Malta, Gibraltar hoặc Curacao.

Phương Thức Thanh Toán Địa Phương
Chọn casino hỗ trợ phương thức thanh toán Việt Nam như chuyển khoản ngân hàng, ví điện tử.

Hỗ Trợ Khách Hàng Tiếng Việt
Casino tốt nhất cung cấp hỗ trợ 24/7 bằng tiếng Việt thông qua chat trực tiếp, email.

So Sánh Các Khoản Thưởng
Thưởng lớn không phải lúc nào cũng có nghĩa là casino tốt nhất. Hãy xem xét kỹ các điều kiện và yêu cầu.

Bộ Sưu Tập Trò Chơi Đa Dạng
Casino với các nhà cung cấp nổi tiếng như Pragmatic Play, NetEnt và Evolution Gaming mang lại trải nghiệm chơi tốt nhất.`,
      metaDesc: 'Hướng dẫn chọn casino trực tuyến đáng tin cậy tại Việt Nam. Kiểm tra giấy phép, bảo mật và các mẹo thực tế.',
      keywords: ['casino trực tuyến', 'casino đáng tin cậy', 'cách chọn casino', 'Việt Nam'],
      category: 'Hướng Dẫn',
      author: 'Admin',
      date: '2026-08-18',
      featured: true,
      image: '📚'
    },
    {
      id: 3,
      title: 'Chiến Lược Cá Cược: Mẹo Thắng Lớn Tại Trò Chơi Slot Trực Tuyến',
      slug: 'chien-luoc-thang-slot-online',
      excerpt: 'Khám phá các chiến lược hiệu quả để tăng cơ hội chiến thắng tại các trò chơi slot.',
      content: `Trò chơi slot trực tuyến dựa trên may mắn, nhưng có những chiến lược có thể giúp bạn tăng cơ hội thắng.

Hiểu RTP (Tỷ Lệ Hoàn Lại)
RTP là tỷ lệ phần trăm tiền được trả lại cho người chơi. Chọn slot có RTP trên 96%.

Quản Lý Quỹ Của Bạn
Đặt ngân sách hàng ngày và tuân thủ giới hạn đó.

Sử Dụng Các Khoản Thưởng Một Cách Thông Minh
Tận dụng các vòng miễn phí và thưởng nạp tiền để tối đa hóa thời gian chơi.

Chọn Slot Có Độ Biến Động Phù Hợp
Slot biến động thấp trả các giải thưởng nhỏ thường xuyên. Slot biến động cao trả các giải thưởng lớn nhưng hiếm hơn.`,
      metaDesc: 'Chiến lược slot trực tuyến được chứng minh. RTP, quản lý quỹ, và mẹo từ chuyên gia.',
      keywords: ['slot trực tuyến', 'chiến lược slot', 'mẹo thắng slot', 'RTP slot'],
      category: 'Chiến Lược',
      author: 'Admin',
      date: '2026-08-18',
      featured: false,
      image: '🎰'
    }
  ];

  const categories = [
    { id: 'tat-ca', label: 'Tất Cả' },
    { id: 'premium', label: 'Premium' },
    { id: 'popular', label: 'Phổ Biến' },
    { id: 'contin-dung', label: 'Đáng Tin Cậy' }
  ];

  const filteredCasinos = casinos.filter(casino => {
    const matchesCategory = selectedCategory === 'tat-ca' || casino.category === selectedCategory;
    const matchesSearch = casino.ten.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredCasinos = casinos.filter(c => c.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white">
      {/* Meta Tags for SEO */}
      <head>
        <title>Casino Trực Tuyến Việt Nam - 1WIN, Melbet & Các Sòng Bạc Uy Tín 2026</title>
        <meta name="description" content="Đánh giá chi tiết các casino trực tuyến hàng đầu tại Việt Nam. So sánh 1WIN, Melbet với các nền tảng cược uy tín, giấy phép quốc tế." />
        <meta name="keywords" content="casino việt nam, 1win, melbet, sòng bạc trực tuyến, cá cược trực tuyến" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Casino Trực Tuyến Việt Nam - Đánh Giá & So Sánh 2026" />
        <meta property="og:description" content="Tìm sòng bạc uy tín với giấy phép quốc tế, thưởng cao, hỗ trợ tiếng Việt." />
      </head>

      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-red-600/30 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setCurrentPage('home'); setSelectedArticle(null); }}>
              <span className="text-3xl">🎰</span>
              <div>
                <h1 className="text-3xl font-bold">Cược Việt Nam Pro</h1>
                <p className="text-xs text-red-300">duabaotructuyen.com</p>
              </div>
            </div>
            <nav className="flex gap-6">
              <button
                onClick={() => { setCurrentPage('home'); setSelectedArticle(null); }}
                className={`font-medium transition-colors ${currentPage === 'home' ? 'text-red-400' : 'text-slate-300 hover:text-red-400'}`}
              >
                Trang Chủ
              </button>
              <button
                onClick={() => { setCurrentPage('blog'); setSelectedArticle(null); }}
                className={`font-medium transition-colors ${currentPage === 'blog' ? 'text-red-400' : 'text-slate-300 hover:text-red-400'}`}
              >
                Blog
              </button>
            </nav>
          </div>
          <p className="text-slate-300">
            {currentPage === 'home' 
              ? 'Đánh giá chi tiết các casino trực tuyến với giấy phép quốc tế và thưởng cao nhất'
              : 'Hướng dẫn, chiến lược và mẹo casino trực tuyến chi tiết nhất'}
          </p>
        </div>
      </header>

      {/* Home Page */}
      {currentPage === 'home' && (
      <>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-red-900 to-slate-900 border-b border-red-600/30 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Các Sòng Bạc Trực Tuyến Tốt Nhất Cho Người Chơi Việt Nam</h2>
          <p className="text-xl text-slate-300 mb-8">
            Đánh giá độc lập, so sánh chi tiết và hướng dẫn an toàn cho những ai muốn chơi casino trực tuyến uy tín.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-red-900/50 border border-red-600/50 rounded-lg p-6">
              <Zap className="w-8 h-8 text-yellow-400 mb-3" />
              <h3 className="font-bold text-lg mb-2">Thưởng Cao Nhất</h3>
              <p className="text-sm text-slate-300">Thưởng chào mừng lên tới 500% và các khuyến mãi hàng ngày</p>
            </div>
            <div className="bg-red-900/50 border border-red-600/50 rounded-lg p-6">
              <Shield className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="font-bold text-lg mb-2">100% An Toàn</h3>
              <p className="text-sm text-slate-300">Giấy phép quốc tế, mã hóa SSL và bảo vệ dữ liệu cá nhân</p>
            </div>
            <div className="bg-red-900/50 border border-red-600/50 rounded-lg p-6">
              <Award className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-bold text-lg mb-2">Hỗ Trợ Tiếng Việt</h3>
              <p className="text-sm text-slate-300">Hỗ trợ 24/7 qua chat, email và điện thoại bằng tiếng Việt</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Top Offers */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-900 border-b border-red-600/30 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Zap className="text-yellow-400" />
            Top 2 Sòng Bạc Được Đánh Giá Cao Nhất
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredCasinos.map(casino => (
              <div
                key={casino.id}
                onClick={() => setSelectedCasino(casino)}
                className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/30 transition-all cursor-pointer border-2 border-yellow-400"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{casino.ten}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                        <span className="font-bold text-lg">{casino.rating}</span>
                        <span className="text-sm text-red-100">({casino.reviews} đánh giá)</span>
                      </div>
                    </div>
                    <span className="text-5xl">{casino.image}</span>
                  </div>

                  <div className="bg-yellow-400/20 border border-yellow-400/50 rounded-lg p-4 mb-4">
                    <p className="text-xs text-red-100 mb-1">Thưởng Chào Mừng</p>
                    <p className="text-yellow-300 font-bold text-lg">{casino.bonus}</p>
                  </div>

                  <p className="text-red-100 mb-6">{casino.description}</p>

                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-all text-lg">
                    Truy Cập Ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 border-b border-red-600/20 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm kiếm casino..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-red-600/30 rounded-lg focus:outline-none focus:border-red-600 text-white placeholder-slate-400"
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
                    ? 'bg-red-600 text-white'
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
        <h3 className="text-2xl font-bold mb-8">Tất Cả Các Sòng Bạc</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCasinos.map(casino => (
            <div
              key={casino.id}
              onClick={() => setSelectedCasino(casino)}
              className="bg-slate-800/60 backdrop-blur border border-red-600/20 rounded-xl overflow-hidden hover:border-red-600/50 hover:shadow-xl hover:shadow-red-600/20 transition-all cursor-pointer group"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 flex items-center justify-between">
                <span className="text-4xl">{casino.image}</span>
                <div className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{casino.rating}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{casino.ten}</h3>
                <p className="text-slate-400 text-sm mb-4">{casino.reviews} đánh giá</p>

                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-slate-300 mb-1">Thưởng</p>
                  <p className="text-green-400 font-bold text-sm">{casino.bonus}</p>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition-all transform group-hover:scale-105">
                  Xem Đánh Giá
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
          <h2 className="text-3xl font-bold mb-8">Bài Viết Nổi Bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogArticles.filter(art => art.featured).map(article => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-red-500/30 transition-all group"
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-5xl mb-4">{article.image}</div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-red-100 transition-colors">{article.title}</h3>
                    <p className="text-red-100 mb-4">{article.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-red-900">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString('vi-VN')}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Tất Cả Bài Viết</h2>
          <div className="space-y-4">
            {blogArticles.map(article => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-slate-800/60 backdrop-blur border border-red-600/20 rounded-lg p-6 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/10 transition-all cursor-pointer group"
              >
                <div className="flex gap-6">
                  <div className="text-4xl">{article.image}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">{article.title}</h3>
                    <p className="text-slate-300 mb-4">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString('vi-VN')}</span>
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
                    <ArrowRight className="w-6 h-6 text-red-400 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      )}

      {/* Article Detail - NO META DISPLAY */}
      {currentPage === 'blog' && selectedArticle && (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => setSelectedArticle(null)}
          className="mb-8 flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Quay Lại Blog
        </button>

        <article className="bg-slate-800/60 backdrop-blur border border-red-600/20 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-8">
            <div className="text-6xl mb-4">{selectedArticle.image}</div>
            <h1 className="text-4xl font-bold mb-4">{selectedArticle.title}</h1>
            <div className="flex flex-wrap gap-6 text-red-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(selectedArticle.date).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
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
                      <h3 className="text-xl font-bold text-red-400 mb-3">{paragraph.split(':')[0]}</h3>
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

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Bài Viết Liên Quan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogArticles
              .filter(art => art.id !== selectedArticle.id && art.category === selectedArticle.category)
              .slice(0, 3)
              .map(article => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-slate-800/60 backdrop-blur border border-red-600/20 rounded-lg p-4 hover:border-red-600/50 cursor-pointer transition-all"
              >
                <div className="text-4xl mb-3">{article.image}</div>
                <h4 className="font-bold text-sm mb-2 line-clamp-2 hover:text-red-400 transition-colors">{article.title}</h4>
                <p className="text-slate-400 text-xs">{new Date(article.date).toLocaleDateString('vi-VN')}</p>
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
            className="bg-slate-800 border border-red-600/30 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-5xl">{selectedCasino.image}</span>
                <div>
                  <h2 className="text-2xl font-bold">{selectedCasino.ten}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                    <span className="font-bold">{selectedCasino.rating}</span>
                    <span className="text-sm text-red-100">({selectedCasino.reviews} đánh giá)</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedCasino(null)}
                className="text-white hover:text-red-200 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-red-400 mb-2">Về Casino Này</h3>
                <p className="text-slate-300">{selectedCasino.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-red-400 mb-2">Thưởng Chào Mừng</h3>
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                  <p className="text-green-400 font-bold text-lg">{selectedCasino.bonus}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-red-400 mb-3">Đặc Điểm Nổi Bật</h3>
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
                <h3 className="text-lg font-bold text-red-400 mb-3">Nhà Cung Cấp Trò Chơi</h3>
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
                  onClick={() => console.log(`Visited: ${selectedCasino.ten}`)}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 rounded-lg transition-all text-lg block text-center"
                >
                  Truy Cập {selectedCasino.ten}
                </a>
              ) : (
                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 rounded-lg transition-all text-lg">
                  Truy Cập Ngay
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black/50 border-t border-red-600/20 mt-16 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="mb-2">© 2026 Cược Việt Nam Pro (duabaotructuyen.com). Bảo lưu mọi quyền.</p>
          <p className="text-sm">⚠️ Cảnh báo: Cờ bạc có thể gây nghiện. Hãy chơi có trách nhiệm. Chỉ dành cho người trên 18 tuổi.</p>
          <p className="text-xs mt-2">Tuyên bố miễn trừ: Trang web này chứa các liên kết liên kết mà chúng tôi nhận được hoa hồng.</p>
        </div>
      </footer>
    </div>
  );
}
