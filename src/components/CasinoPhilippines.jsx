import React, { useMemo, useState } from "react";
import {
  Award,
  BadgeCheck,
  BookOpen,
  ChevronRight,
  CircleDollarSign,
  ExternalLink,
  Gift,
  Globe2,
  Home,
  Menu,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  X,
} from "lucide-react";

const casinos = [
  {
    id: 1,
    name: "1WIN",
    rating: 4.9,
    score: 98,
    category: ["premium", "popular", "trusted"],
    bonus: "Hanggang 500% Bonus",
    bonusDetails: "Malaking welcome bonus package para sa mga bagong manlalaro.",
    currency: "USD",
    description:
      "Isang sikat na international gaming platform na may casino games, live dealer titles, at mabilis na mobile experience.",
    features: [
      "Malaking welcome bonus",
      "Live casino games",
      "Mobile-friendly platform",
      "Maraming pagpipiliang laro",
    ],
    link: "https://lkmn.cc/dc546c",
    badge: "Pinakamahusay",
    featured: true,
  },
  {
    id: 2,
    name: "Melbet",
    rating: 4.8,
    score: 96,
    category: ["premium", "popular", "trusted"],
    bonus: "100% Deposit Bonus",
    bonusDetails:
      "Welcome deposit promotion para sa mga kwalipikadong bagong account.",
    currency: "USD",
    description:
      "Established international platform na may online casino, slots, table games, at live dealer selection.",
    features: [
      "100% deposit bonus",
      "Live dealer casino",
      "Malawak na game selection",
      "Responsive mobile website",
    ],
    link: "https://refpa18631.com/L?tag=d_5984966m_59717c_home&site=5984966&ad=59717",
    badge: "Popular",
    featured: true,
  },
  {
    id: 3,
    name: "PinoyPlay Casino",
    rating: 4.6,
    score: 92,
    category: ["popular", "trusted"],
    bonus: "Welcome Rewards",
    bonusDetails: "Promotional rewards para sa mga bagong miyembro.",
    currency: "PHP",
    description:
      "Isang sample casino listing para ipakita ang ranking at comparison layout ng Casino Philippines Pro.",
    features: [
      "PHP-friendly",
      "Mobile access",
      "Slots at table games",
      "Simple registration",
    ],
    link: "#",
    badge: "Trusted",
    featured: false,
    demo: true,
  },
  {
    id: 4,
    name: "Manila Spins",
    rating: 4.5,
    score: 90,
    category: ["popular"],
    bonus: "New Player Bonus",
    bonusDetails: "Promotional package para sa bagong players.",
    currency: "PHP",
    description:
      "Sample listing para sa casino comparison section ng website.",
    features: [
      "Mobile optimized",
      "Casino slots",
      "Game categories",
      "Player promotions",
    ],
    link: "#",
    badge: "Popular",
    featured: false,
    demo: true,
  },
];

const articles = [
  {
    id: "paano-pumili-online-casino-philippines",
    title: "1WIN vs Melbet: Which Online Casino Offers Better Bonuses for Filipino Players in 2026?",
    excerpt:
      "Alamin ang mahahalagang bagay na dapat tingnan bago pumili ng online casino, mula sa seguridad hanggang sa bonus terms at payment methods.",
    metaDesc:
      "Compare 1WIN (500% bonus) and Melbet (100% bonus) for Filipino players. Find which casino best suits your gaming style.",
    date: "2026-08-18",
    readTime: "6 minutong basa",
    content: [
      {
        heading: "Hindi lang bonus ang dapat tingnan",
        text:
          "Maraming manlalaro ang unang tumitingin sa laki ng welcome bonus. Mahalaga ito, pero hindi ito dapat ang tanging basehan. Tingnan din ang reputasyon ng platform, kalidad ng mga laro, payment options, customer support, at ang mga kondisyon ng bawat promotion.",
      },
      {
        heading: "Basahin ang bonus terms",
        text:
          "Bago mag-deposito, suriin ang wagering requirements, minimum deposit, maximum withdrawal restrictions, eligible games, at expiration period ng promotion. Ang malaking bonus ay maaaring hindi praktikal kung napakahirap ng requirements.",
      },
      {
        heading: "Mobile experience",
        text:
          "Maraming Filipino players ang gumagamit ng smartphone, kaya mahalagang mabilis at madaling gamitin ang casino sa mobile. Tingnan kung responsive ang website at kung madaling ma-access ang slots, live casino, cashier, at account settings.",
      },
      {
        heading: "Responsible gambling",
        text:
          "Tratuhin ang casino bilang entertainment at hindi bilang paraan para kumita ng garantisadong income. Magtakda ng malinaw na budget at huwag habulin ang pagkatalo.",
      },
    ],
  },
  {
    id: "casino-bonus-guide-pilipinas",
    title: "Complete Guide: How to Choose a Safe and Licensed Online Casino in Philippines",
    excerpt:
      "Ano ba talaga ang ibig sabihin ng 100%, 200%, o 500% casino bonus? Narito ang simpleng gabay bago ka mag-claim.",
    metaDesc:
      "Learn how to identify licensed and safe online casinos with GCash, BDO payment methods and English support for Philippines.",
    date: "2026-08-18",
    readTime: "5 minutong basa",
    content: [
      {
        heading: "Ano ang deposit bonus?",
        text:
          "Ang deposit bonus ay karaniwang promotional credit na nakabase sa halaga ng iyong kwalipikadong deposit. Halimbawa, ang 100% bonus ay maaaring tumbasan ang deposit hanggang sa nakasaad na maximum promotional amount.",
      },
      {
        heading: "Ano ang wagering requirement?",
        text:
          "Ito ang requirement kung ilang beses kailangang ma-play ang bonus o qualifying balance bago maging eligible ang ilang withdrawals. Iba-iba ang rules sa bawat operator kaya kailangang basahin ang eksaktong terms.",
      },
      {
        heading: "Mas malaking bonus ba ay mas mahusay?",
        text:
          "Hindi palagi. Mas mahalagang ikumpara ang maximum bonus, wagering requirement, game contribution, expiration period, at withdrawal restrictions kaysa tumingin lamang sa headline percentage.",
      },
      {
        heading: "Tip para sa beginners",
        text:
          "Huwag mag-deposito nang higit sa iyong normal na entertainment budget dahil lamang sa promotional offer. Pumili ng promotion na naiintindihan mo ang lahat ng kondisyon.",
      },
    ],
  },
  {
    id: "live-casino-slots-philippines",
    title: "Best Slot Game Strategies for Filipino Online Casino Players - Expert Tips & Tactics",
    excerpt:
      "Ikumpara ang live dealer casino at online slots para malaman kung anong gaming experience ang mas angkop sa iyong preference.",
    metaDesc:
      "Proven slot strategies to increase your winning chances at online casinos. Tips from expert Filipino players.",
    date: "2026-08-18",
    readTime: "4 minutong basa",
    content: [
      {
        heading: "Live casino",
        text:
          "Ang live casino ay naglalayong gayahin ang atmosphere ng physical casino gamit ang real-time video stream at live dealers. Karaniwang available ang blackjack, roulette, baccarat, at game-show style titles.",
      },
      {
        heading: "Online slots",
        text:
          "Mas mabilis at mas simple ang slots para sa maraming casual players. Maraming themes, paylines, volatility levels, at bonus mechanics ang available depende sa game provider.",
      },
      {
        heading: "Alin ang dapat piliin?",
        text:
          "Kung gusto mo ng social at interactive experience, maaaring mas interesting ang live casino. Kung gusto mo naman ng mabilis na gameplay at maraming themes, maaaring mas bagay ang slots.",
      },
      {
        heading: "Tandaan ang budget",
        text:
          "Anuman ang game type, mahalagang magtakda ng spending limit at ituring ang paglalaro bilang entertainment.",
      },
    ],
  },
];

const categories = [
  { id: "all", label: "Lahat" },
  { id: "premium", label: "Premium" },
  { id: "popular", label: "Sikat" },
  { id: "trusted", label: "Pinagkakatiwalaan" },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={
            star <= Math.round(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "text-slate-300"
          }
        />
      ))}
      <span className="ml-1 text-sm font-bold text-slate-800">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function CasinoPhilippines() {
  const [page, setPage] = useState("home");
  const [category, setCategory] = useState("all");
  const [selectedCasino, setSelectedCasino] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const filteredCasinos = useMemo(() => {
    if (category === "all") return casinos;
    return casinos.filter((casino) => casino.category.includes(category));
  }, [category]);

  const navigate = (destination) => {
    setPage(destination);
    setSelectedArticle(null);
    setMobileMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openArticle = (article) => {
    setSelectedArticle(article);
    setPage("article");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const visitCasino = (casino) => {
    if (casino.demo) return;
    window.open(casino.link, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <head>
        <title>
          Best Online Casinos Philippines 2026 - 1WIN, Melbet & Top Licensed Gaming Sites
        </title>
        <meta
          name="description"
          content="Find the best online casinos for Filipino players in 2026. Compare 1WIN (500% bonus), Melbet and licensed platforms. High bonuses, GCash/BDO payment, 24/7 English support, and instant withdrawals."
        />
        <meta
          name="keywords"
          content="online casino philippines, casino philippines, 1win philippines, melbet philippines, best online casino philippines 2026"
        />
        <meta
          property="og:title"
          content="Best Online Casinos Philippines 2026 - 1WIN, Melbet & Top Licensed Gaming Sites"
        />
        <meta
          property="og:description"
          content="Compare top online casinos, bonuses, payment options and licensed gaming platforms for Filipino players in 2026."
        />
        <meta property="og:url" content="https://casinofilipinas.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://casinofilipinas.com/" />
      </head>

      <div className="min-h-screen bg-slate-50 text-slate-900">
        <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
            <button
              onClick={() => navigate("home")}
              className="flex items-center gap-3 text-left"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 shadow-lg shadow-blue-200">
                <Trophy className="text-yellow-300" size={24} />
              </div>
              <div>
                <div className="text-lg font-black tracking-tight text-blue-950">
                  Casino Philippines Pro
                </div>
                <div className="text-xs font-semibold text-blue-600">
                  casinofilipinas.com
                </div>
              </div>
            </button>

            <nav className="hidden items-center gap-2 md:flex">
              <button
                onClick={() => navigate("home")}
                className={`rounded-lg px-5 py-2.5 text-sm font-bold transition ${
                  page === "home"
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => navigate("blog")}
                className={`rounded-lg px-5 py-2.5 text-sm font-bold transition ${
                  page === "blog" || page === "article"
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                Blog
              </button>
            </nav>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="rounded-lg p-2 text-blue-900 md:hidden"
              aria-label="Buksan ang menu"
            >
              {mobileMenu ? <X /> : <Menu />}
            </button>
          </div>

          {mobileMenu && (
            <div className="border-t border-blue-100 bg-white p-4 md:hidden">
              <button
                onClick={() => navigate("home")}
                className="flex w-full items-center gap-2 rounded-lg px-4 py-3 font-semibold hover:bg-blue-50"
              >
                <Home size={18} />
                Home
              </button>
              <button
                onClick={() => navigate("blog")}
                className="flex w-full items-center gap-2 rounded-lg px-4 py-3 font-semibold hover:bg-blue-50"
              >
                <BookOpen size={18} />
                Blog
              </button>
            </div>
          )}
        </header>

        {page === "home" && (
          <>
            <section className="overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 text-white">
              <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
                <div className="flex flex-col justify-center">
                  <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-sm font-bold text-yellow-300">
                    <Sparkles size={16} />
                    Updated para sa 2026
                  </div>
                  <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
                    Top-Rated Online Casinos & Gaming Platforms for Filipino Players 2026
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                    Expert review of 1WIN and Melbet - the #1 choice for Filipino gamers with 500% welcome bonus and instant payouts
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      onClick={() =>
                        document
                          .getElementById("casino-list")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3.5 font-black text-blue-950 shadow-lg transition hover:scale-[1.02]"
                    >
                      Tingnan ang Rankings
                    </button>
                    <button
                      onClick={() => navigate("blog")}
                      className="rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur hover:bg-white/20"
                    >
                      Basahin ang Blog
                    </button>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-5 text-sm text-blue-100">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={18} className="text-yellow-300" />
                      Casino comparisons
                    </div>
                    <div className="flex items-center gap-2">
                      <BadgeCheck size={18} className="text-yellow-300" />
                      Updated reviews
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe2 size={18} className="text-yellow-300" />
                      Para sa Filipino market
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-yellow-300">
                          #1 Featured Casino
                        </div>
                        <div className="mt-1 text-3xl font-black">1WIN</div>
                      </div>
                      <div className="rounded-2xl bg-yellow-400 px-4 py-3 text-center text-blue-950">
                        <div className="text-xs font-black uppercase">Rating</div>
                        <div className="text-2xl font-black">4.9</div>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-5">
                      <Gift className="mb-3 text-yellow-300" />
                      <div className="text-sm font-semibold text-blue-100">
                        Welcome Offer
                      </div>
                      <div className="mt-1 text-3xl font-black text-white">
                        Hanggang 500%
                      </div>
                      <div className="text-sm text-blue-100">
                        Bonus package sa USD
                      </div>
                    </div>

                    <button
                      onClick={() => visitCasino(casinos[0])}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 font-black text-blue-950 hover:from-yellow-300 hover:to-yellow-400"
                    >
                      Bisitahin ang 1WIN
                      <ExternalLink size={18} />
                    </button>

                    <p className="mt-3 text-center text-xs text-blue-200">
                      Nalalapat ang terms at eligibility requirements.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 py-10">
              <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mb-6">
                  <div className="text-sm font-black uppercase tracking-widest text-yellow-300">
                    Featured
                  </div>
                  <h2 className="mt-1 text-3xl font-black text-white">
                    Mga Tampok na Casino
                  </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {casinos
                    .filter((casino) => casino.featured)
                    .map((casino) => (
                      <div
                        key={casino.id}
                        className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="mb-2 inline-flex rounded-full bg-yellow-400 px-3 py-1 text-xs font-black text-blue-950">
                              {casino.badge}
                            </div>
                            <h3 className="text-2xl font-black text-white">
                              {casino.name}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-blue-100">
                              {casino.description}
                            </p>
                          </div>
                          <div className="rounded-xl bg-white p-3 text-center">
                            <div className="text-2xl font-black text-blue-700">
                              {casino.score}
                            </div>
                            <div className="text-xs font-bold text-slate-500">
                              /100
                            </div>
                          </div>
                        </div>

                        <div className="my-5 rounded-xl bg-blue-950/50 p-4">
                          <div className="flex items-center gap-2 text-yellow-300">
                            <Gift size={18} />
                            <span className="font-black">{casino.bonus}</span>
                          </div>
                          <div className="mt-1 text-xs text-blue-200">
                            Currency: {casino.currency}
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedCasino(casino)}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-blue-700 hover:bg-blue-50"
                        >
                          Tingnan ang Review
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </section>

            <section
              id="casino-list"
              className="mx-auto max-w-7xl px-4 py-16 lg:px-8"
            >
              <div className="max-w-3xl">
                <div className="text-sm font-black uppercase tracking-widest text-blue-600">
                  Casino Rankings
                </div>
                <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
                  Top Philippine Online Casino Listings
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  Ihambing ang casino ratings, offers at pangunahing features
                  upang makahanap ng platform na mas angkop sa iyong preference.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCategory(item.id)}
                    className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                      category === item.id
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-8 space-y-5">
                {filteredCasinos.map((casino, index) => (
                  <article
                    key={casino.id}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <div className="grid lg:grid-cols-[110px_1fr_280px]">
                      <div className="flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 p-6">
                        <div className="text-center">
                          <div className="text-xs font-bold text-yellow-300">
                            RANK
                          </div>
                          <div className="text-4xl font-black text-white">
                            #{index + 1}
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-black">{casino.name}</h3>
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
                            {casino.badge}
                          </span>
                        </div>
                        <div className="mt-3">
                          <StarRating rating={casino.rating} />
                        </div>
                        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
                          {casino.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {casino.features.slice(0, 3).map((feature) => (
                            <span
                              key={feature}
                              className="flex items-center gap-1 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                            >
                              <BadgeCheck
                                size={14}
                                className="text-blue-600"
                              />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col justify-center border-t border-slate-100 bg-slate-50 p-6 lg:border-l lg:border-t-0">
                        <div className="flex items-center gap-2 text-sm font-bold text-blue-600">
                          <Gift size={18} />
                          Welcome Offer
                        </div>
                        <div className="mt-2 text-2xl font-black">
                          {casino.bonus}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          Nalalapat ang mga tuntunin.
                        </div>
                        <button
                          onClick={() => setSelectedCasino(casino)}
                          className="mt-5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-3 font-black text-white hover:from-blue-500 hover:to-blue-700"
                        >
                          Buong Review
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="border-y border-blue-100 bg-blue-50 py-14">
              <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 lg:px-8">
                <div>
                  <ShieldCheck size={32} className="mb-4 text-blue-600" />
                  <h3 className="text-lg font-black">
                    Seguridad at Reputasyon
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Isinasaalang-alang namin ang publicly available operator
                    information at pangkalahatang reputasyon bago gumawa ng
                    comparison.
                  </p>
                </div>
                <div>
                  <CircleDollarSign size={32} className="mb-4 text-blue-600" />
                  <h3 className="text-lg font-black">Bonus at Promotions</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Tinitingnan namin ang headline offers kasama ang kahalagahan
                    ng pagbabasa ng bonus conditions at wagering requirements.
                  </p>
                </div>
                <div>
                  <Award size={32} className="mb-4 text-blue-600" />
                  <h3 className="text-lg font-black">Gaming Experience</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Kasama sa comparison ang mobile usability, game selection at
                    pangkalahatang player experience.
                  </p>
                </div>
              </div>
            </section>

            <BlogPreview openArticle={openArticle} navigate={navigate} />
          </>
        )}

        {page === "blog" && <BlogPage openArticle={openArticle} />}

        {page === "article" && selectedArticle && (
          <ArticlePage
            article={selectedArticle}
            onBack={() => navigate("blog")}
          />
        )}

        <footer className="bg-slate-950 text-slate-400">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                    <Trophy size={21} className="text-yellow-300" />
                  </div>
                  <div>
                    <div className="font-black text-white">
                      Casino Philippines Pro
                    </div>
                    <div className="text-xs text-blue-400">
                      casinofilipinas.com
                    </div>
                  </div>
                </div>
                <p className="mt-4 max-w-lg text-sm leading-6">
                  Casino review at comparison website para sa Filipino market.
                  Ang impormasyon sa site ay para lamang sa informational at
                  entertainment purposes.
                </p>
              </div>

              <div className="md:text-right">
                <div className="font-bold text-white">Responsible Gambling</div>
                <p className="mt-3 text-sm leading-6">
                  18+ lamang. Ang pagsusugal ay may financial risk at hindi
                  garantisadong paraan upang kumita. Huwag magsugal ng perang
                  hindi mo kayang mawala at palaging sundin ang mga batas at
                  regulasyong naaangkop sa iyong lokasyon.
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-800 pt-6 text-xs leading-5">
              <p>
                Affiliate disclosure: Maaaring makatanggap ang
                casinofilipinas.com ng commission kapag bumisita o nag-register
                ang user sa ilang external websites gamit ang links sa site.
                Hindi nito dapat baguhin ang halaga na binabayaran ng user.
              </p>
              <p className="mt-3">
                © 2026 Casino Philippines Pro. Lahat ng karapatan ay nakalaan.
              </p>
            </div>
          </div>
        </footer>

        {selectedCasino && (
          <CasinoModal
            casino={selectedCasino}
            onClose={() => setSelectedCasino(null)}
            onVisit={visitCasino}
          />
        )}
      </div>
    </>
  );
}

function BlogPreview({ openArticle, navigate }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-sm font-black uppercase tracking-widest text-blue-600">
            Casino Philippines Blog
          </div>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            Mga Gabay para sa Filipino Players
          </h2>
        </div>

        <button
          onClick={() => navigate("blog")}
          className="flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800"
        >
          Lahat ng Artikulo
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <BlogCard
            key={article.id}
            article={article}
            openArticle={openArticle}
          />
        ))}
      </div>
    </section>
  );
}

function BlogPage({ openArticle }) {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-950 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-sm font-black uppercase tracking-widest text-yellow-300">
            Blog
          </div>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Online Casino Guides sa Pilipinas
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Mga simpleng Tagalog guide tungkol sa casino bonuses, online gaming
            at pagpili ng casino platform.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <BlogCard
              key={article.id}
              article={article}
              openArticle={openArticle}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function BlogCard({ article, openArticle }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-44 items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
          <BookOpen size={42} className="text-yellow-300" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        <h3 className="mt-3 text-xl font-black leading-7">{article.title}</h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {article.excerpt}
        </p>

        <button
          onClick={() => openArticle(article)}
          className="mt-5 flex items-center gap-2 text-sm font-black text-blue-600 hover:text-blue-800"
        >
          Basahin ang Artikulo
          <ChevronRight size={17} />
        </button>
      </div>
    </article>
  );
}

function ArticlePage({ article, onBack }) {
  return (
    <>
      <head>
        <title>{article.title} | Casino Philippines Pro</title>
        <meta name="description" content={article.metaDesc || article.excerpt} />
      </head>

      <main>
        <section className="bg-gradient-to-br from-blue-950 to-blue-700 text-white">
          <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
            <button
              onClick={onBack}
              className="mb-8 text-sm font-bold text-blue-200 hover:text-white"
            >
              ← Bumalik sa Blog
            </button>

            <div className="text-sm font-bold text-yellow-300">
              {article.date} • {article.readTime}
            </div>

            <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              {article.excerpt}
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-4 py-14 lg:px-8">
          {article.content.map((section, index) => (
            <section key={index} className="mb-9">
              <h2 className="text-2xl font-black text-slate-900">
                {section.heading}
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                {section.text}
              </p>
            </section>
          ))}

          <div className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <ShieldCheck className="text-blue-600" size={30} />

            <h3 className="mt-3 text-xl font-black">
              Paalala tungkol sa pagsusugal
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Ang online gambling ay may financial risk. Magtakda ng budget,
              huwag habulin ang losses at tiyaking pinapayagan kang gumamit ng
              online gambling services ayon sa mga regulasyong naaangkop sa
              iyong lokasyon.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}

function CasinoModal({ casino, onClose, onVisit }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-gradient-to-br from-blue-900 to-blue-600 p-7 text-white">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 hover:bg-white/20"
            aria-label="Isara"
          >
            <X size={20} />
          </button>

          <div className="inline-flex rounded-full bg-yellow-400 px-3 py-1 text-xs font-black text-blue-950">
            {casino.badge}
          </div>

          <h2 className="mt-3 text-4xl font-black">{casino.name}</h2>

          <div className="mt-3">
            <StarRating rating={casino.rating} />
          </div>
        </div>

        <div className="p-7">
          <div className="rounded-2xl bg-blue-50 p-5">
            <div className="flex items-center gap-2 font-black text-blue-700">
              <Gift size={20} />
              Welcome Offer
            </div>

            <div className="mt-2 text-3xl font-black">{casino.bonus}</div>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {casino.bonusDetails}
            </p>
          </div>

          <p className="mt-6 leading-7 text-slate-600">{casino.description}</p>

          <h3 className="mt-7 font-black">Pangunahing Features</h3>

          <div className="mt-3 space-y-3">
            {casino.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <BadgeCheck size={19} className="text-blue-600" />
                <span className="text-sm font-semibold text-slate-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {!casino.demo ? (
            <button
              onClick={() => onVisit(casino)}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 py-4 font-black text-white shadow-lg shadow-blue-200 hover:from-blue-500 hover:to-blue-800"
            >
              Bisitahin ang {casino.name}
              <ExternalLink size={18} />
            </button>
          ) : (
            <div className="mt-8 rounded-xl bg-slate-100 px-4 py-3 text-center text-sm font-bold text-slate-500">
              Demo casino listing lamang
            </div>
          )}

          <p className="mt-4 text-center text-xs leading-5 text-slate-400">
            18+ lamang. Nalalapat ang operator terms, eligibility requirements
            at local regulations.
          </p>
        </div>
      </div>
    </div>
  );
}
