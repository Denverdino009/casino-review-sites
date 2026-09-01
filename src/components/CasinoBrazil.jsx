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
    bonus: "Bônus de até 500%",
    bonusDetails:
      "Pacote promocional de boas-vindas para novos jogadores elegíveis.",
    currency: "BRL / USD",
    description:
      "Uma plataforma internacional popular com cassino online, jogos ao vivo, slots e uma experiência otimizada para dispositivos móveis.",
    features: [
      "Bônus de até 500%",
      "Cassino ao vivo",
      "Experiência mobile",
      "Grande variedade de jogos",
    ],
    link: "https://lkrh.pro/81b9c158",
    badge: "Melhor Escolha",
    featured: true,
  },
  {
    id: 2,
    name: "Melbet",
    rating: 4.8,
    score: 96,
    category: ["premium", "popular", "trusted"],
    bonus: "100% Bônus de Primeiro Depósito",
    bonusDetails:
      "Promoção de primeiro depósito para novos usuários elegíveis, sujeita aos termos da operadora.",
    currency: "BRL / USD",
    description:
      "Plataforma internacional com slots, jogos de mesa, cassino ao vivo e uma ampla seleção de opções de entretenimento.",
    features: [
      "100% no primeiro depósito",
      "Cassino ao vivo",
      "Muitos jogos disponíveis",
      "Site responsivo",
    ],
    link: "https://refpa3665.com/L?tag=d_5984963m_2170c_home&site=5984963&ad=2170",
    badge: "Popular",
    featured: true,
  },
  {
    id: 3,
    name: "Brasil Slots",
    rating: 4.6,
    score: 92,
    category: ["popular", "trusted"],
    bonus: "Oferta de Boas-Vindas",
    bonusDetails:
      "Oferta promocional para novos jogadores, sujeita aos termos aplicáveis.",
    currency: "BRL",
    description:
      "Exemplo de listagem usado para demonstrar o formato de comparação e classificação do Slots Brasil Pro.",
    features: [
      "Compatível com BRL",
      "Acesso mobile",
      "Slots e jogos de mesa",
      "Cadastro simplificado",
    ],
    link: "#",
    badge: "Confiável",
    featured: false,
    demo: true,
  },
  {
    id: 4,
    name: "Rio Spins",
    rating: 4.5,
    score: 90,
    category: ["popular"],
    bonus: "Bônus para Novos Jogadores",
    bonusDetails:
      "Pacote promocional de exemplo para novos usuários.",
    currency: "BRL",
    description:
      "Listagem demonstrativa criada para completar a seção de comparação de cassinos.",
    features: [
      "Otimizado para celular",
      "Jogos de slots",
      "Várias categorias",
      "Promoções para jogadores",
    ],
    link: "#",
    badge: "Popular",
    featured: false,
    demo: true,
  },
];

const articles = [
  {
    id: "como-escolher-cassino-online-brasil",
    title: "1WIN vs Melbet: Qual Cassino Online Oferece Melhores Bônus para Jogadores Brasileiros em 2026?",
    excerpt:
      "Veja os principais critérios para comparar cassinos online, incluindo segurança, bônus, métodos de pagamento e experiência no celular.",
    date: "2026-08-18",
    metaDesc: "Compare 1WIN (bônus 500%) e Melbet (bônus 100%) para jogadores brasileiros. Descubra qual cassino se adequa melhor ao seu estilo de jogo.",
    readTime: "6 min de leitura",
    content: [
      {
        heading: "Não escolha apenas pelo tamanho do bônus",
        text:
          "Um bônus chamativo pode ser interessante, mas não deve ser o único critério. Também vale analisar a reputação da plataforma, a variedade de jogos, a facilidade de saque, os métodos de pagamento e a qualidade do suporte ao cliente.",
      },
      {
        heading: "Leia os termos da promoção",
        text:
          "Antes de depositar, verifique os requisitos de apostas, depósito mínimo, limites de saque, jogos elegíveis e prazo de validade da oferta. Uma porcentagem alta de bônus pode vir acompanhada de condições mais exigentes.",
      },
      {
        heading: "Experiência no celular",
        text:
          "Muitos jogadores brasileiros acessam cassinos pelo smartphone. Por isso, é importante verificar se o site funciona bem em telas menores e se áreas como jogos, caixa, conta e suporte são fáceis de usar.",
      },
      {
        heading: "Jogue com responsabilidade",
        text:
          "Cassino deve ser tratado como entretenimento, e não como uma forma garantida de renda. Defina um orçamento claro e nunca tente recuperar perdas aumentando o valor das apostas.",
      },
    ],
  },
  {
    id: "guia-bonus-cassino-online-brasil",
    title: "Guia Completo: Como Escolher um Cassino Online Seguro e Licenciado no Brasil",
    excerpt:
      "Entenda o que significam bônus de 100%, 200% ou 500% e quais condições devem ser verificadas antes de aceitar uma promoção.",
    date: "2026-08-18",
    metaDesc: "Aprenda a identificar cassinos online licenciados e seguros com suporte em português, PIX e transferência bancária para Brasil.",
    readTime: "5 min de leitura",
    content: [
      {
        heading: "O que é um bônus de depósito?",
        text:
          "Um bônus de depósito normalmente adiciona crédito promocional com base no valor depositado. Em uma oferta de 100%, por exemplo, a operadora pode igualar o depósito até um limite máximo definido nos termos.",
      },
      {
        heading: "O que são requisitos de apostas?",
        text:
          "Os requisitos de apostas indicam quantas vezes determinado valor precisa ser apostado antes que certos saques sejam liberados. As regras variam entre operadoras e promoções, por isso é essencial conferir os termos atualizados.",
      },
      {
        heading: "Bônus maior é sempre melhor?",
        text:
          "Não necessariamente. É mais útil comparar o valor máximo do bônus, os requisitos de apostas, a contribuição dos jogos, o prazo de validade e possíveis restrições de saque.",
      },
      {
        heading: "Dica para iniciantes",
        text:
          "Não aumente seu depósito apenas para atingir o valor máximo de uma promoção. Escolha uma oferta compatível com seu orçamento e cujas condições você realmente compreenda.",
      },
    ],
  },
  {
    id: "cassino-ao-vivo-ou-slots",
    title: "Melhores Estratégias de Slots para Jogadores de Cassino Online - Dicas e Táticas de Especialistas",
    excerpt:
      "Compare cassino ao vivo e caça-níqueis online para descobrir qual estilo de jogo combina melhor com suas preferências.",
    date: "2026-08-18",
    metaDesc: "Estratégias de slots comprovadas para aumentar suas chances de ganho em cassinos online. Dicas de jogadores brasileiros especialistas.",
    readTime: "4 min de leitura",
    content: [
      {
        heading: "Cassino ao vivo",
        text:
          "O cassino ao vivo busca reproduzir parte da experiência de uma mesa física usando transmissão em tempo real e dealers. Entre os jogos mais comuns estão blackjack, roleta, bacará e game shows.",
      },
      {
        heading: "Slots online",
        text:
          "Os slots costumam oferecer jogabilidade rápida, muitos temas e diferentes recursos. Cada jogo pode ter volatilidade, linhas de pagamento e mecânicas de bônus próprias.",
      },
      {
        heading: "Qual escolher?",
        text:
          "Se você prefere uma experiência mais interativa, o cassino ao vivo pode ser mais interessante. Se gosta de sessões rápidas e uma grande variedade de temas, os slots podem ser mais adequados.",
      },
      {
        heading: "Controle seu orçamento",
        text:
          "Independentemente do tipo de jogo, estabeleça limites de gasto e trate o cassino apenas como entretenimento.",
      },
    ],
  },
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "premium", label: "Premium" },
  { id: "popular", label: "Popular" },
  { id: "trusted", label: "Confiável" },
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

export default function CasinoBrazil() {
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
        <title>Melhores Cassinos Online Brasil 2026 - 1WIN, Melbet & Plataformas Licenciadas Confiáveis</title>
        <meta
          name="description"
          content="Descubra os melhores cassinos online para jogadores brasileiros em 2026. Compare 1WIN (bônus 500%), Melbet e plataformas licenciadas internacionalmente. Bônus altos, suporte em português 24/7, pagamento via PIX e saques instantâneos."
        />
        <meta
          name="keywords"
          content="cassino online brasil, cassino brasil, 1win brasil, melbet brasil, melhores cassinos online 2026, slots brasil"
        />
        <meta
          property="og:title"
          content="Melhores Cassinos Online Brasil 2026 - 1WIN, Melbet & Plataformas Licenciadas Confiáveis"
        />
        <meta
          property="og:description"
          content="Avaliações de cassinos, comparações, bônus e guias para jogadores brasileiros."
        />
        <meta property="og:url" content="https://slotsbrasilieiros.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://slotsbrasilieiros.com/" />
      </head>

      <div className="min-h-screen bg-slate-50 text-slate-900">
        <header className="sticky top-0 z-40 border-b border-green-100 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
            <button
              onClick={() => navigate("home")}
              className="flex items-center gap-3 text-left"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-green-900 shadow-lg shadow-green-200">
                <Trophy className="text-yellow-300" size={24} />
              </div>

              <div>
                <div className="text-lg font-black tracking-tight text-green-950">
                  Slots Brasil Pro
                </div>
                <div className="text-xs font-semibold text-green-600">
                  slotsbrasilieiros.com
                </div>
              </div>
            </button>

            <nav className="hidden items-center gap-2 md:flex">
              <button
                onClick={() => navigate("home")}
                className={`rounded-lg px-5 py-2.5 text-sm font-bold transition ${
                  page === "home"
                    ? "bg-green-600 text-white"
                    : "text-slate-600 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                Início
              </button>

              <button
                onClick={() => navigate("blog")}
                className={`rounded-lg px-5 py-2.5 text-sm font-bold transition ${
                  page === "blog" || page === "article"
                    ? "bg-green-600 text-white"
                    : "text-slate-600 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                Blog
              </button>
            </nav>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="rounded-lg p-2 text-green-900 md:hidden"
              aria-label="Abrir menu"
            >
              {mobileMenu ? <X /> : <Menu />}
            </button>
          </div>

          {mobileMenu && (
            <div className="border-t border-green-100 bg-white p-4 md:hidden">
              <button
                onClick={() => navigate("home")}
                className="flex w-full items-center gap-2 rounded-lg px-4 py-3 font-semibold hover:bg-green-50"
              >
                <Home size={18} />
                Início
              </button>

              <button
                onClick={() => navigate("blog")}
                className="flex w-full items-center gap-2 rounded-lg px-4 py-3 font-semibold hover:bg-green-50"
              >
                <BookOpen size={18} />
                Blog
              </button>
            </div>
          )}
        </header>

        {page === "home" && (
          <>
            <section className="overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-green-600 text-white">
              <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
                <div className="flex flex-col justify-center">
                  <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-sm font-bold text-yellow-300">
                    <Sparkles size={16} />
                    Atualizado para 2026
                  </div>

                  <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">Os Melhores Cassinos Online e Plataformas de Slots para Jogadores Brasileiros 2026</h1>

                  <p className="mt-6 max-w-xl text-lg leading-8 text-green-100">
                    Análise expert de 1WIN e Melbet - a escolha #1 dos jogadores brasileiros com bônus de 500% e saques imediatos
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      onClick={() =>
                        document
                          .getElementById("casino-list")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3.5 font-black text-green-950 shadow-lg transition hover:scale-[1.02]"
                    >
                      Ver Ranking
                    </button>

                    <button
                      onClick={() => navigate("blog")}
                      className="rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur hover:bg-white/20"
                    >
                      Ler o Blog
                    </button>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-5 text-sm text-green-100">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={18} className="text-yellow-300" />
                      Comparações de cassino
                    </div>

                    <div className="flex items-center gap-2">
                      <BadgeCheck size={18} className="text-yellow-300" />
                      Avaliações atualizadas
                    </div>

                    <div className="flex items-center gap-2">
                      <Globe2 size={18} className="text-yellow-300" />
                      Conteúdo para o Brasil
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-yellow-300">
                          #1 Cassino em Destaque
                        </div>
                        <div className="mt-1 text-3xl font-black">1WIN</div>
                      </div>

                      <div className="rounded-2xl bg-yellow-400 px-4 py-3 text-center text-green-950">
                        <div className="text-xs font-black uppercase">
                          Nota
                        </div>
                        <div className="text-2xl font-black">4.9</div>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-r from-green-600 to-green-500 p-5">
                      <Gift className="mb-3 text-yellow-300" />

                      <div className="text-sm font-semibold text-green-100">
                        Oferta de Boas-Vindas
                      </div>

                      <div className="mt-1 text-3xl font-black text-white">
                        Bônus de até 500%
                      </div>

                      <div className="text-sm text-green-100">
                        Sujeito aos termos da promoção
                      </div>
                    </div>

                    <button
                      onClick={() => visitCasino(casinos[0])}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 font-black text-green-950 hover:from-yellow-300 hover:to-yellow-400"
                    >
                      Visitar 1WIN
                      <ExternalLink size={18} />
                    </button>

                    <p className="mt-3 text-center text-xs text-green-200">
                      Aplicam-se termos, condições e requisitos de elegibilidade.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-green-700 via-green-600 to-green-800 py-10">
              <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mb-6">
                  <div className="text-sm font-black uppercase tracking-widest text-yellow-300">
                    Destaques
                  </div>
                  <h2 className="mt-1 text-3xl font-black text-white">
                    Cassinos em Destaque
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
                            <div className="mb-2 inline-flex rounded-full bg-yellow-400 px-3 py-1 text-xs font-black text-green-950">
                              {casino.badge}
                            </div>

                            <h3 className="text-2xl font-black text-white">
                              {casino.name}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-green-100">
                              {casino.description}
                            </p>
                          </div>

                          <div className="rounded-xl bg-white p-3 text-center">
                            <div className="text-2xl font-black text-green-700">
                              {casino.score}
                            </div>
                            <div className="text-xs font-bold text-slate-500">
                              /100
                            </div>
                          </div>
                        </div>

                        <div className="my-5 rounded-xl bg-green-950/50 p-4">
                          <div className="flex items-center gap-2 text-yellow-300">
                            <Gift size={18} />
                            <span className="font-black">{casino.bonus}</span>
                          </div>

                          <div className="mt-1 text-xs text-green-200">
                            Moeda: {casino.currency}
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedCasino(casino)}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-green-700 hover:bg-green-50"
                        >
                          Ver Avaliação
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
                <div className="text-sm font-black uppercase tracking-widest text-green-600">
                  Ranking de Cassinos
                </div>

                <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
                  Melhores Cassinos Online para Jogadores Brasileiros
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Compare notas, ofertas e recursos para encontrar uma plataforma
                  que combine melhor com suas preferências.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCategory(item.id)}
                    className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                      category === item.id
                        ? "bg-green-600 text-white shadow-lg shadow-green-200"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-green-300 hover:text-green-700"
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
                      <div className="flex items-center justify-center bg-gradient-to-br from-green-600 to-green-900 p-6">
                        <div className="text-center">
                          <div className="text-xs font-bold text-yellow-300">
                            POSIÇÃO
                          </div>
                          <div className="text-4xl font-black text-white">
                            #{index + 1}
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-black">
                            {casino.name}
                          </h3>

                          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-black text-green-700">
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
                                className="text-green-600"
                              />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col justify-center border-t border-slate-100 bg-slate-50 p-6 lg:border-l lg:border-t-0">
                        <div className="flex items-center gap-2 text-sm font-bold text-green-600">
                          <Gift size={18} />
                          Oferta de Boas-Vindas
                        </div>

                        <div className="mt-2 text-2xl font-black">
                          {casino.bonus}
                        </div>

                        <div className="mt-1 text-xs text-slate-500">
                          Aplicam-se termos e condições.
                        </div>

                        <button
                          onClick={() => setSelectedCasino(casino)}
                          className="mt-5 rounded-xl bg-gradient-to-r from-green-600 to-green-800 px-5 py-3 font-black text-white hover:from-green-500 hover:to-green-700"
                        >
                          Avaliação Completa
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="border-y border-green-100 bg-green-50 py-14">
              <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 lg:px-8">
                <div>
                  <ShieldCheck size={32} className="mb-4 text-green-600" />
                  <h3 className="text-lg font-black">
                    Segurança e Reputação
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Consideramos informações públicas da operadora, reputação e
                    aspectos gerais da plataforma ao elaborar comparações.
                  </p>
                </div>

                <div>
                  <CircleDollarSign
                    size={32}
                    className="mb-4 text-green-600"
                  />
                  <h3 className="text-lg font-black">
                    Bônus e Promoções
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Avaliamos as ofertas anunciadas e destacamos a importância de
                    conferir requisitos de apostas e demais condições.
                  </p>
                </div>

                <div>
                  <Award size={32} className="mb-4 text-green-600" />
                  <h3 className="text-lg font-black">
                    Experiência de Jogo
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A comparação considera usabilidade no celular, variedade de
                    jogos e facilidade de navegação.
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600">
                    <Trophy size={21} className="text-yellow-300" />
                  </div>

                  <div>
                    <div className="font-black text-white">
                      Slots Brasil Pro
                    </div>
                    <div className="text-xs text-green-400">
                      slotsbrasilieiros.com
                    </div>
                  </div>
                </div>

                <p className="mt-4 max-w-lg text-sm leading-6">
                  Site de avaliação e comparação de cassinos online voltado ao
                  público brasileiro. O conteúdo é apenas informativo e de
                  entretenimento.
                </p>
              </div>

              <div className="md:text-right">
                <div className="font-bold text-white">
                  Jogo Responsável
                </div>

                <p className="mt-3 text-sm leading-6">
                  18+ somente. Jogos de azar envolvem risco financeiro e não são
                  uma forma garantida de obter renda. Nunca aposte dinheiro que
                  você não pode perder e respeite as leis e regras aplicáveis à
                  sua localização.
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-800 pt-6 text-xs leading-5">
              <p>
                Divulgação de afiliados: o slotsbrasilieiros.com pode receber
                comissão quando um usuário visita ou se cadastra em determinados
                sites externos através dos links apresentados nesta página.
              </p>

              <p className="mt-3">
                © 2026 Slots Brasil Pro. Todos os direitos reservados.
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
          <div className="text-sm font-black uppercase tracking-widest text-green-600">
            Blog Slots Brasil
          </div>

          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            Guias para Jogadores Brasileiros
          </h2>
        </div>

        <button
          onClick={() => navigate("blog")}
          className="flex items-center gap-2 font-bold text-green-600 hover:text-green-800"
        >
          Ver Todos os Artigos
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
      <section className="bg-gradient-to-r from-green-950 to-green-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-sm font-black uppercase tracking-widest text-yellow-300">
            Blog
          </div>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Guias de Cassino Online no Brasil
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-green-100">
            Conteúdo em português sobre bônus, slots, cassino ao vivo e como
            comparar plataformas de cassino online.
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
      <div className="flex h-44 items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-green-500">
        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
          <BookOpen size={42} className="text-yellow-300" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-bold text-green-600">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        <h3 className="mt-3 text-xl font-black leading-7">
          {article.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {article.excerpt}
        </p>

        <button
          onClick={() => openArticle(article)}
          className="mt-5 flex items-center gap-2 text-sm font-black text-green-600 hover:text-green-800"
        >
          Ler Artigo
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
        <title>{article.title} | Slots Brasil Pro</title>
        <meta name="description" content={article.metaDesc || article.excerpt} />
      </head>

      <main>
        <section className="bg-gradient-to-br from-green-950 to-green-700 text-white">
          <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
            <button
              onClick={onBack}
              className="mb-8 text-sm font-bold text-green-200 hover:text-white"
            >
              ← Voltar ao Blog
            </button>

            <div className="text-sm font-bold text-yellow-300">
              {article.date} • {article.readTime}
            </div>

            <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-100">
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

          <div className="mt-12 rounded-2xl border border-green-100 bg-green-50 p-6">
            <ShieldCheck className="text-green-600" size={30} />

            <h3 className="mt-3 text-xl font-black">
              Lembrete sobre jogo responsável
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Jogos de azar envolvem risco financeiro. Defina um orçamento,
              evite perseguir perdas e verifique sempre as regras aplicáveis à
              sua localização antes de usar uma plataforma de cassino online.
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
        <div className="relative bg-gradient-to-br from-green-900 to-green-600 p-7 text-white">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 hover:bg-white/20"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>

          <div className="inline-flex rounded-full bg-yellow-400 px-3 py-1 text-xs font-black text-green-950">
            {casino.badge}
          </div>

          <h2 className="mt-3 text-4xl font-black">
            {casino.name}
          </h2>

          <div className="mt-3">
            <StarRating rating={casino.rating} />
          </div>
        </div>

        <div className="p-7">
          <div className="rounded-2xl bg-green-50 p-5">
            <div className="flex items-center gap-2 font-black text-green-700">
              <Gift size={20} />
              Oferta de Boas-Vindas
            </div>

            <div className="mt-2 text-3xl font-black">
              {casino.bonus}
            </div>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {casino.bonusDetails}
            </p>
          </div>

          <p className="mt-6 leading-7 text-slate-600">
            {casino.description}
          </p>

          <h3 className="mt-7 font-black">
            Principais Recursos
          </h3>

          <div className="mt-3 space-y-3">
            {casino.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3"
              >
                <BadgeCheck
                  size={19}
                  className="text-green-600"
                />
                <span className="text-sm font-semibold text-slate-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {!casino.demo ? (
            <button
              onClick={() => onVisit(casino)}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 via-green-700 to-green-900 py-4 font-black text-white shadow-lg shadow-green-200 hover:from-green-500 hover:to-green-800"
            >
              Visitar {casino.name}
              <ExternalLink size={18} />
            </button>
          ) : (
            <div className="mt-8 rounded-xl bg-slate-100 px-4 py-3 text-center text-sm font-bold text-slate-500">
              Listagem demonstrativa
            </div>
          )}

          <p className="mt-4 text-center text-xs leading-5 text-slate-400">
            18+ somente. Aplicam-se os termos da operadora, requisitos de
            elegibilidade e regras locais.
          </p>
        </div>
      </div>
    </div>
  );
}
