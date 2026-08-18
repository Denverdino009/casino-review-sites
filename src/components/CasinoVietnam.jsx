import React, { useState } from 'react';
import { Star, Shield, Award, Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';

export default function CasinoReviewVN() {
  const [selectedCategory, setSelectedCategory] = useState('tat-ca');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCasino, setSelectedCasino] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const casinos = [
    {
      id: 1,
      ten: 'Fun88 Việt Nam',
      rating: 4.9,
      reviews: 2845,
      category: 'premium',
      bonus: 'Lên đến 5.000.000 VNĐ Khuyến Mãi',
      features: ['Giấy Phép Malta', 'Hỗ Trợ Tiếng Việt', 'Rút Nhanh'],
      image: '🎰',
      description: 'Nền tảng cược trực tuyến hàng đầu Việt Nam với đa dạng trò chơi và mức bonus cao nhất.',
      providers: ['Pragmatic Play', 'NetEnt', 'Evolution Gaming']
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
      ten: 'TigerBet Online',
      rating: 4.6,
      reviews: 1987,
      category: 'popular',
      bonus: 'Lên đến 2.500.000 VNĐ + 50 Vòng Miễn Phí',
      features: ['Ứng Dụng Di Động', 'Giải Đấu Hàng Tuần', 'Chương Trình VIP'],
      image: '🌟',
      description: 'Nền tảng với các giải đấu hàng tuần và chương trình VIP hấp dẫn.',
      providers: ['Pragmatic Play', 'Red Tiger', 'Yggdrasil']
    },
    {
      id: 5,
      ten: 'Viet Casino Pro',
      rating: 4.9,
      reviews: 3124,
      category: 'premium',
      bonus: 'Lên đến 6.000.000 VNĐ Khuyến Mãi',
      features: ['Giấy Phép Malta', 'Thanh Toán Tiền Điện Tử', 'Rút Tiền Tức Thì'],
      image: '💎',
      description: 'Casino đáng tin cậy nhất với hệ thống thanh toán nhanh nhất tại Việt Nam.',
      providers: ['Pragmatic Play', 'NetEnt', 'Evolution Gaming']
    },
    {
      id: 6,
      ten: 'Golden Luck Casino',
      rating: 4.5,
      reviews: 1756,
      category: 'contin-dung',
      bonus: 'Lên đến 2.000.000 VNĐ + 150 Vòng Miễn Phí',
      features: ['Không Xác Minh', 'Rút Nhanh', 'Slots Đa Dạng'],
      image: '🎯',
      description: 'Casino tập trung vào trò chơi slot với mức thưởng hào phóng và rút nhanh.',
      providers: ['Pragmatic Play', 'Slot Thunder', 'PG Soft']
    }
  ];

  const blogArticles = [
    {
      id: 1,
      title: 'Hướng Dẫn Chọn Casino Trực Tuyến Đáng Tin Cậy Tại Việt Nam 2024',
      slug: 'huong-dan-chon-casino-dang-tin-cap',
      excerpt: 'Tìm hiểu cách chọn casino an toàn, có giấy phép và đáng tin cậy. Hướng dẫn đầy đủ cho người chơi Việt.',
      content: `Chọn casino trực tuyến đúng là bước đầu tiên hướng tới trải nghiệm chơi an toàn và thú vị. Với rất nhiều lựa chọn, điều quan trọng là biết những gì cần tìm.

Kiểm Tra Giấy Phép Và Quy Định
Casino trực tuyến đáng tin cậy phải có giấy phép từ các cơ quan quốc tế như Malta, Gibraltar hoặc Curacao. Giấy phép này cho thấy casino đã tuân thủ các tiêu chuẩn bảo mật cao nhất.

Phương Thức Thanh Toán Địa Phương
Chọn casino hỗ trợ phương thức thanh toán Việt Nam như chuyển khoản ngân hàng, ví điện tử và nạp qua điện thoại. Điều này giúp giao dịch dễ dàng và nhanh chóng.

Hỗ Trợ Khách Hàng Tiếng Việt
Casino tốt nhất cung cấp hỗ trợ 24/7 bằng tiếng Việt thông qua chat trực tiếp, email và điện thoại.

So Sánh Các Khoản Thưởng
Để so sánh các khoản thưởng quan trọng, hãy lưu ý rằng thưởng lớn không phải lúc nào cũng có nghĩa là casino tốt nhất. Hãy xem xét kỹ các điều kiện và yêu cầu.

Bộ Sưu Tập Trò Chơi Đa Dạng
Casino với các nhà cung cấp nổi tiếng như Pragmatic Play, NetEnt và Evolution Gaming mang lại trải nghiệm chơi tốt nhất.

Để hiểu rõ hơn, hãy đọc các đánh giá chi tiết casino của chúng tôi để xem đánh giá đầy đủ.`,
      metaDesc: 'Hướng dẫn chọn casino trực tuyến đáng tin cậy tại Việt Nam 2024. Kiểm tra giấy phép, bảo mật và các mẹo thực tế.',
      keywords: ['casino trực tuyến', 'casino đáng tin cậy', 'cách chọn casino', 'Việt Nam'],
      category: 'Hướng Dẫn',
      author: 'Admin',
      date: '2024-01-15',
      featured: true,
      image: '📚'
    },
    {
      id: 2,
      title: 'Chiến Lược Cá Cược: Mẹo Thắng Lớn Tại Trò Chơi Slot Trực Tuyến',
      slug: 'chien-luoc-thang-slot-online',
      excerpt: 'Khám phá các chiến lược hiệu quả để tăng cơ hội chiến thắng tại các trò chơi slot trực tuyến.',
      content: `Trò chơi slot trực tuyến dựa trên may mắn, nhưng có những chiến lược có thể giúp bạn tăng cơ hội thắng.

Hiểu RTP (Tỷ Lệ Hoàn Lại)
RTP là tỷ lệ phần trăm tiền được trả lại cho người chơi trong dài hạn. Chọn slot có RTP trên 96%.

Quản Lý Quỹ Của Bạn
Đặt ngân sách hàng ngày và tuân thủ giới hạn đó. Không bao giờ cược nhiều hơn những gì bạn có thể mất.

Sử Dụng Các Khoản Thưởng Một Cách Thông Minh
Tận dụng các vòng miễn phí và thưởng nạp tiền để tối đa hóa thời gian chơi mà không tăng rủi ro.

Chọn Slot Có Độ Biến Động Phù Hợp
Slot biến động thấp trả các giải thưởng nhỏ thường xuyên. Slot biến động cao trả các giải thưởng lớn nhưng hiếm hơn.

Chơi Để Giải Trí
Nhớ rằng slot là giải trí, không phải cách kiếm tiền. Chơi với mục đích giải trí sẽ tạo ra trải nghiệm vui vẻ hơn.

Để có danh sách đầy đủ các casino slot tốt nhất, hãy xem các đánh giá casino của chúng tôi.`,
      metaDesc: 'Chiến lược slot trực tuyến được chứng minh để tăng cơ hội thắng. RTP, quản lý quỹ, và mẹo từ chuyên gia.',
      keywords: ['slot trực tuyến', 'chiến lược slot', 'mẹo thắng slot', 'RTP slot'],
      category: 'Chiến Lược',
      author: 'Admin',
      date: '2024-01-14',
      featured: true,
      image: '🎰'
    },
    {
      id: 3,
      title: 'Các Khoản Thưởng Casino Tốt Nhất: Tối Đa Hóa Lợi Nhuận Của Bạn',
      slug: 'khoan-thuong-casino-tot-nhat',
      excerpt: 'Các loại thưởng casino và cách tận dụng chúng để lợi nhuận tối đa với chiến lược thông minh.',
      content: `Các khoản thưởng casino là cách tốt nhất để bắt đầu với vốn bổ sung. Tìm hiểu các loại thưởng có sẵn.

Thưởng Chào Mừng
Thưởng này được cấp khi bạn đăng ký. Thường là tỷ lệ phần trăm thưởng cho đến một số tiền tối đa. Yêu cầu: cần phải đáp ứng một số lượt chơi nhất định trước khi có thể rút tiền.

Vòng Miễn Phí
Thưởng vòng miễn phí dành riêng cho các trò chơi slot. Các chiến thắng từ vòng miễn phí có thể được chuyển đổi thành tiền thật.

Thưởng Nạp Lại
Thưởng được cấp khi bạn nạp tiền lại. Thường nhỏ hơn thưởng chào mừng nhưng được cung cấp thường xuyên.

Hoàn Tiền
Hoàn lại tỷ lệ phần trăm của thua lỗ của bạn. Loại thưởng công bằng nhất vì không có yêu cầu turnover chặt chẽ.

Chương Trình VIP
Chương Trình Khách Hàng Thân Thiết dành cho người chơi thường xuyên với phần thưởng độc quyền.

Để so sánh các khoản thưởng chi tiết, hãy xem các đánh giá casino của chúng tôi.`,
      metaDesc: 'Các loại thưởng casino, cách tận dụng, và mẹo nhận thưởng tối đa với turnover thấp.',
      keywords: ['thưởng casino', 'thưởng chào mừng', 'vòng miễn phí', 'turnover'],
      category: 'Thưởng',
      author: 'Admin',
      date: '2024-01-13',
      featured: false,
      image: '🎁'
    },
    {
      id: 4,
      title: 'Casino Trực Tiếp: Trải Nghiệm Chơi Casino Thực Từ Nhà',
      slug: 'casino-truc-tiep-huong-dan',
      excerpt: 'Hướng dẫn đầy đủ về casino trực tiếp với dealers thực và cách chơi.',
      content: `Casino trực tiếp mang lại trải nghiệm casino thực sự với dealers thực và tương tác theo thời gian thực.

Casino Trực Tiếp Là Gì?
Casino trực tiếp phát các trò chơi trực tiếp từ các studio với dealers thực. Bạn có thể tương tác với dealer và những người chơi khác.

Các Trò Chơi Casino Trực Tiếp Phổ Biến
- Roulette Trực Tiếp: Chơi roulette với dealer thực
- Blackjack Trực Tiếp: Trò chơi bài cổ điển
- Baccarat Trực Tiếp: Trò chơi bài nhanh
- Poker Trực Tiếp: Chơi poker chống lại những người chơi khác
- Sicbo Trực Tiếp: Trò chơi xúc sắc phương Đông

Lợi Ích Của Casino Trực Tiếp
- Tương tác với dealers thực
- Minh bạch tuyệt đối trong trò chơi
- Kết bạn với những người chơi khác
- Trải nghiệm thực và thú vị hơn

Mẹo Chơi Casino Trực Tiếp
- Duy trì kỷ luật và quản lý quỹ
- Học các quy tắc trò chơi trước khi chơi
- Sử dụng tính năng chat một cách khôn ngoan
- Chơi khi bạn tập trung và bình tĩnh

Để tìm các casino trực tiếp tốt nhất, hãy xem các đánh giá casino của chúng tôi.`,
      metaDesc: 'Casino trực tiếp Việt Nam: dealer thực, các trò chơi phổ biến, mẹo và chiến lược.',
      keywords: ['casino trực tiếp', 'live dealer', 'roulette trực tiếp', 'blackjack trực tiếp'],
      category: 'Hướng Dẫn',
      author: 'Admin',
      date: '2024-01-12',
      featured: false,
      image: '🎬'
    },
    {
      id: 5,
      title: 'Bảo Mật Casino Trực Tuyến: Bảo Vệ Tài Khoản Của Bạn',
      slug: 'bao-mat-casino-online',
      excerpt: 'Các mẹo bảo mật quan trọng để bảo vệ dữ liệu cá nhân và tài khoản casino của bạn.',
      content: `Bảo mật là ưu tiên hàng đầu khi chơi casino trực tuyến. Làm theo những mẹo này để bảo vệ tài khoản của bạn.

Sử Dụng Mật Khẩu Mạnh
Mật khẩu của bạn phải kết hợp chữ cái, số và ký hiệu với ít nhất 12 ký tự. Đừng sử dụng thông tin cá nhân dễ đoán.

Kích Hoạt Xác Thực Hai Yếu Tố
2FA thêm một lớp bảo mật bổ sung. Ngoài mật khẩu, bạn cũng cần nhập mã từ ứng dụng xác thực.

Xác Minh Giấy Phép Casino
Xác nhận rằng casino có giấy phép hợp lệ từ một cơ quan quản lý. Kiểm tra trang web của cơ quan để xác minh.

Sử Dụng Kết Nối An Toàn
Không bao giờ chơi casino trực tuyến bằng WiFi công cộng. Sử dụng mạng cá nhân hoặc VPN để bảo mật tốt hơn.

Cập Nhật Phần Mềm Thường Xuyên
Luôn cập nhật hệ điều hành, trình duyệt và phần mềm bảo mật của bạn. Các bản cập nhật này chứa các bản vá cho các lỗ hổng bảo mật.

Tránh Phishing
Hãy cẩn thận với email hoặc tin nhắn yêu cầu dữ liệu đăng nhập. Casino hợp pháp sẽ không bao giờ yêu cầu mật khẩu của bạn.`,
      metaDesc: 'Bảo mật casino trực tuyến: bảo vệ dữ liệu, mật khẩu mạnh, 2FA và cách tránh lừa đảo.',
      keywords: ['bảo mật casino', 'bảo vệ dữ liệu', 'mật khẩu casino', 'xác thực'],
      category: 'Bảo Mật',
      author: 'Admin',
      date: '2024-01-11',
      featured: false,
      image: '🔒'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-amber-500/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setCurrentPage('home'); setSelectedArticle(null); }}>
              <span className="text-3xl">🎰</span>
              <h1 className="text-3xl font-bold">Cược Việt Nam</h1>
            </div>
            <nav className="flex gap-6">
              <button
                onClick={() => { setCurrentPage('home'); setSelectedArticle(null); }}
                className={`font-medium transition-colors ${currentPage === 'home' ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'}`}
              >
                Trang Chủ
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
              ? 'Đánh giá chi tiết các casino trực tuyến với giấy phép quốc tế'
              : 'Hướng dẫn, chiến lược và mẹo casino trực tuyến chi tiết nhất'}
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
                placeholder="Tìm kiếm casino..."
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
                <h2 className="text-2xl font-bold">Casino Nổi Bật</h2>
                <p className="text-amber-100">{filteredCasinos[0].ten}</p>
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
                <h3 className="text-xl font-bold mb-1">{casino.ten}</h3>
                <p className="text-slate-400 text-sm mb-4">{casino.reviews} đánh giá</p>

                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-slate-300 mb-1">Thưởng Chào Mừng</p>
                  <p className="text-green-400 font-bold">{casino.bonus}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-slate-400 mb-2">Đặc Điểm Nổi Bật:</p>
                  <div className="flex flex-wrap gap-2">
                    {casino.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-slate-700/50 text-amber-300 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 rounded-lg transition-all transform group-hover:scale-105">
                  Xem Đánh Giá
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCasinos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">Không tìm thấy casino nào</p>
          </div>
        )}
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
          Quay Lại Blog
        </button>

        <article className="bg-slate-800/60 backdrop-blur border border-amber-500/20 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-8">
            <div className="text-6xl mb-4">{selectedArticle.image}</div>
            <h1 className="text-4xl font-bold mb-4">{selectedArticle.title}</h1>
            <div className="flex flex-wrap gap-6 text-amber-100">
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
              <p className="text-slate-400 text-sm mb-3">Từ Khóa: </p>
              <div className="flex flex-wrap gap-2">
                {selectedArticle.keywords.map((keyword, idx) => (
                  <span key={idx} className="bg-slate-700/50 text-amber-300 px-3 py-1 rounded-full text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-700/30 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Meta Mô Tả (SEO):</p>
              <p className="text-slate-300 italic">{selectedArticle.metaDesc}</p>
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
                className="bg-slate-800/60 backdrop-blur border border-amber-500/20 rounded-lg p-4 hover:border-amber-500/50 cursor-pointer transition-all"
              >
                <div className="text-4xl mb-3">{article.image}</div>
                <h4 className="font-bold text-sm mb-2 line-clamp-2 hover:text-amber-400 transition-colors">{article.title}</h4>
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
            className="bg-slate-800 border border-amber-500/30 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
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
                    <span className="text-sm text-amber-100">({selectedCasino.reviews} đánh giá)</span>
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
                <h3 className="text-lg font-bold text-amber-400 mb-2">Về Điều Này</h3>
                <p className="text-slate-300">{selectedCasino.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-amber-400 mb-2">Thưởng Chào Mừng</h3>
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                  <p className="text-green-400 font-bold text-lg">{selectedCasino.bonus}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-amber-400 mb-3">Đặc Điểm Nổi Bật</h3>
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
                <h3 className="text-lg font-bold text-amber-400 mb-3">Nhà Cung Cấp Trò Chơi</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCasino.providers.map((provider, idx) => (
                    <span key={idx} className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm">
                      {provider}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-3 rounded-lg transition-all text-lg">
                Đăng Ký & Nhận Thưởng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black/50 border-t border-amber-500/20 mt-16 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="mb-2">© 2024 Cược Việt Nam. Bảo lưu mọi quyền.</p>
          <p className="text-sm">Cảnh báo: Cờ bạc có thể gây nghiện. Hãy chơi có trách nhiệm.</p>
        </div>
      </footer>
    </div>
  );
}