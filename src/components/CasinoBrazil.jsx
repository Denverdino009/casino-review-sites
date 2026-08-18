import React, { useState } from 'react';
import { Star, Shield, Award, Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';

export default function SlotsReviewBR() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCasino, setSelectedCasino] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const casinos = [
    {
      id: 1,
      nome: 'Pragmatic Slots Brasil',
      rating: 4.9,
      reviews: 3456,
      category: 'premium',
      bonus: 'Até R$ 6.000 + 200 Giros Grátis',
      features: ['Licença Malta', 'Slots Premium', 'Suporte PT 24/7'],
      image: '🎰',
      descricao: 'Plataforma especializada em slots com maior variedade de jogos Pragmatic Play do Brasil.',
      providers: ['Pragmatic Play', 'NetEnt', 'Big Time Gaming'],
      speciality: 'Slots'
    },
    {
      id: 2,
      nome: 'Golden Spins Casino',
      rating: 4.8,
      reviews: 2987,
      category: 'confiavel',
      bonus: 'Até R$ 4.500 + 150 Giros Grátis',
      features: ['Licença Curacao', 'Slots Exclusivos', 'Saque Rápido'],
      image: '✨',
      descricao: 'Cassino focado em slots com bônus generosos e melhor experiência de jogo.',
      providers: ['Pragmatic Play', 'Red Tiger', 'Play\'n GO'],
      speciality: 'Slots'
    },
    {
      id: 3,
      nome: 'Jackpot Slots Brasil',
      rating: 4.7,
      reviews: 2654,
      category: 'popular',
      bonus: 'Até R$ 3.500 + 100 Giros Grátis',
      features: ['Slots Variados', 'Torneios Slots', 'Cashback 5%'],
      image: '🎯',
      descricao: 'Especialista em slots com torneios semanais e sistema de cashback.',
      providers: ['Pragmatic Play', 'Isoftbet', 'PG Soft'],
      speciality: 'Slots'
    },
    {
      id: 4,
      nome: 'Diamond Slots Brasil',
      rating: 4.9,
      reviews: 3234,
      category: 'premium',
      bonus: 'Até R$ 7.000 + 250 Giros Grátis',
      features: ['Licença Malta', 'Slots 5-Star', 'VIP Program'],
      image: '💎',
      descricao: 'Plataforma premium com a maior quantidade de slots 5-star e programa VIP exclusivo.',
      providers: ['Pragmatic Play', 'NetEnt', 'Evolution Gaming'],
      speciality: 'Slots'
    },
    {
      id: 5,
      nome: 'Mega Spins Online',
      rating: 4.6,
      reviews: 2145,
      category: 'confiavel',
      bonus: 'Até R$ 3.000 + 200 Giros Grátis',
      features: ['Mega Slots', 'Bonus Diário', 'App Mobile'],
      image: '🌟',
      descricao: 'Cassino com mega slots e bônus diário para fidelizar os jogadores.',
      providers: ['Pragmatic Play', 'Yggdrasil', 'Slot Thunder'],
      speciality: 'Slots'
    },
    {
      id: 6,
      nome: 'Fortune Slots Casino',
      rating: 4.5,
      reviews: 1876,
      category: 'popular',
      bonus: 'Até R$ 2.500 + 100 Giros Grátis',
      features: ['Lucky Slots', 'Saque Instant', 'Sem Rollover Alto'],
      image: '🍀',
      descricao: 'Casino focado em slots de sorte com rollover baixo e saque instantâneo.',
      providers: ['Pragmatic Play', 'Slot Thunder', 'PG Soft'],
      speciality: 'Slots'
    }
  ];

  const blogArticles = [
    {
      id: 1,
      titulo: 'Melhores Slots Brasil 2024: Guia Completo de Jogos com RTP Alto',
      slug: 'melhores-slots-brasil-rtp-alto',
      excerpt: 'Descubra os melhores jogos de slot do Brasil com RTP alto e bônus generosos.',
      conteudo: `Os jogos de slot são os mais populares em casinos online. Encontrar os melhores slots é essencial para maximizar suas chances de ganho.

Entenda o RTP (Retorno ao Jogador)
O RTP é o percentual de dinheiro retornado aos jogadores em longo prazo. Slots com RTP acima de 96% são considerados altos. Procure por:
- Pragmatic Play: média 96.5% RTP
- NetEnt: média 96.8% RTP
- Play\'n GO: média 96.2% RTP

Slots com Maior Potencial de Ganho
Os melhores slots para ganho incluem:
- Sweet Bonanza: RTP 96.48%, volatilidade alta
- Gates of Olympus: RTP 96.5%, prêmios em cascata
- Wolf Gold: RTP 96%, prêmios frequentes
- Book of Dead: RTP 96.21%, rodada de bonus

Gerencie Seu Bankroll
Defina um orçamento diário e mantenha a disciplina. Nunca aposte mais do que pode perder. Use bônus para estender seu tempo de jogo sem risco adicional.

Maximize os Giros Grátis
Aproveite os bônus de giros grátis para acumular ganhos sem investir mais dinheiro. Cada casino oferece diferentes quantidades de giros grátis.

Para lista completa dos melhores casinos de slots, veja nossas avaliações detalhadas de casinos.`,
      metaDesc: 'Melhores slots Brasil com RTP alto. Guia de jogos em 2024, dicas de estratégia e bônus slots.',
      keywords: ['melhores slots', 'slots RTP alto', 'jogos slot Brasil', 'sweet bonanza'],
      category: 'Guia de Slots',
      autor: 'Admin',
      data: '2024-01-15',
      destaque: true,
      image: '🎰'
    },
    {
      id: 2,
      titulo: 'Estratégia de Slots: Como Ganhar Mais nos Caça-Níqueis Online',
      slug: 'estrategia-ganhar-slots-online',
      excerpt: 'Aprenda estratégias comprovadas para aumentar seus ganhos em slots online.',
      conteudo: `Embora slots sejam jogos de azar, existem estratégias que podem melhorar seus resultados.

Escolha Slots com Volatilidade Apropriada
Slots com volatilidade baixa pagam pequenos prêmios frequentemente. Slots com volatilidade alta pagam prêmios maiores raramente.
- Baixa volatilidade: bom para jogadores cautelosos
- Alta volatilidade: bom para buscadores de jackpots

Maximize o Uso dos Bônus
Use bônus de boas-vindas e giros grátis:
- Giros grátis aumentam seu saldo sem risco
- Bônus de depósito duplicam seu crédito
- Rodadas de bonus dentro do jogo multiplicam ganhos

Jogue Slots Populares
Os slots mais populares geralmente têm melhor RTP:
- Slots Pragmatic Play
- Slots NetEnt
- Slots Play\'n GO

Mantenha a Disciplina
- Defina limites de ganho e perda
- Nunca jogue com emoção
- Pare quando atingir seu objetivo

Para encontrar os melhores casinos de slots, consulte nossas avaliações completas.`,
      metaDesc: 'Estratégia de slots: dicas para ganhar mais, volatilidade, RTP e gerenciamento de bankroll.',
      keywords: ['estratégia slots', 'como ganhar slots', 'dicas slots', 'volatilidade slots'],
      category: 'Estratégia',
      autor: 'Admin',
      data: '2024-01-14',
      destaque: true,
      image: '🎯'
    },
    {
      id: 3,
      titulo: 'Slots vs Jogos de Mesa: Qual Oferece Melhor Retorno?',
      slug: 'slots-vs-jogos-mesa-comparacao',
      excerpt: 'Comparação entre slots e jogos de mesa para determinar qual oferece melhor RTP.',
      conteudo: `Muitos jogadores se perguntam qual é a melhor opção entre slots e jogos de mesa.

Comparação de RTP
Slots:
- RTP médio: 95-97%
- Melhor potencial: 96-97%
- Exemplos: Sweet Bonanza, Gates of Olympus

Jogos de Mesa:
- Blackjack: 99% com estratégia básica
- Roulette: 97.3% (europeia)
- Baccarat: 98.6% (banco)

Diferenças Principais
Slots:
- Maior variedade de jogos
- Giros rápidos
- Potencial de ganho alto
- RTP variável

Jogos de Mesa:
- RTP mais previsível
- Requer estratégia
- Rodadas mais lentas
- Menor variância

Qual Escolher?
Se quer diversão e giros rápidos → Slots
Se quer melhor RTP → Blackjack
Se quer algo balanceado → Baccarat

Para encontrar casinos com ambos, veja nossas avaliações de casinos.`,
      metaDesc: 'Slots vs Jogos de Mesa: comparação de RTP, estratégia e qual é mais lucrativo.',
      keywords: ['slots vs mesa', 'RTP comparação', 'blackjack slots', 'melhor jogo casino'],
      category: 'Comparação',
      autor: 'Admin',
      data: '2024-01-13',
      destaque: false,
      image: '⚖️'
    },
    {
      id: 4,
      titulo: 'Bônus de Slots: Como Maximizar os Giros Grátis',
      slug: 'bonus-slots-giros-gratis',
      excerpt: 'Guia completo de bônus de slots e como aproveitar ao máximo os giros grátis.',
      conteudo: `Os bônus são a melhor parte dos slots online. Saiba como maximizar seu valor.

Tipos de Bônus de Slots
Giros Grátis:
- Dados ao registrar
- Dados em depósitos
- Ganhos são de verdade
- Sem aposta adicional necessária

Bônus de Depósito:
- Percentual do seu depósito
- Até um máximo
- Pode ter requisitos de aposta
- Aumenta seu saldo

Rodadas de Bonus:
- Dentro do próprio jogo
- Multiplicam seus ganhos
- Ativadas aleatoriamente
- Maior potencial de ganho

Como Maximizar Giros Grátis
1. Jogue slots com RTP alto
2. Escolha slots que pagam frequentemente
3. Acumule múltiplos bônus
4. Não gaste desnecessariamente
5. Reinvista pequenos ganhos

Slots Melhores para Bônus
- Slots Pragmatic Play: muitos bônus internos
- Sweet Bonanza: giros pagam bem
- Gates of Olympus: rodadas caras

Para ver casinos com melhor bonificação, consulte nossas avaliações.`,
      metaDesc: 'Bônus de slots: giros grátis, bônus depósito e como maximizar ganhos com bônus.',
      keywords: ['bonus slots', 'giros grátis', 'free spins', 'bonus deposito slots'],
      category: 'Bônus',
      autor: 'Admin',
      data: '2024-01-12',
      destaque: false,
      image: '🎁'
    },
    {
      id: 5,
      titulo: 'Slots Mais Lucrativos em 2024: Top 20 Jogos Recomendados',
      slug: 'slots-lucrativos-2024-top-20',
      excerpt: 'Lista dos 20 slots mais lucrativos de 2024 com RTP alto e grande potencial.',
      conteudo: `Existem centenas de slots disponíveis. Aqui estão os 20 mais lucrativos.

Top 5 Slots Pragmatic Play
1. Sweet Bonanza - RTP 96.48%
2. Gates of Olympus - RTP 96.5%
3. Wolf Gold - RTP 96%
4. Aztec Blazes - RTP 96.3%
5. Starlight Princess - RTP 96.5%

Top 5 Slots NetEnt
6. Starburst - RTP 96.09%
7. Gonzo's Quest - RTP 95.97%
8. Jack and the Beanstalk - RTP 96.3%
9. Blood Suckers - RTP 98%
10. Mega Fortune - RTP 96.6%

Top 5 Slots Play\'n GO
11. Book of Dead - RTP 96.21%
12. Ninja Fruits - RTP 96.5%
13. Sakura Fortune - RTP 96.1%
14. Ancient Egypt - RTP 95.9%
15. Space Wars - RTP 96.5%

Top 5 Slots Outras Provedoras
16. Thunderstruck II (Microgaming) - RTP 96.65%
17. Immortal Romance (Microgaming) - RTP 96.86%
18. Reactoonz (Play\'n GO) - RTP 96.22%
19. Just for the Win (Yggdrasil) - RTP 96.1%
20. Vikings (NetEnt) - RTP 96.05%

Dicas Finais
Combine RTP alto com diversão pessoal. Alguns slots pagam bem mas não divertem. Encontre seu equilíbrio.

Para casinos com estes slots, veja nossas avaliações.`,
      metaDesc: 'Slots mais lucrativos 2024: top 20 jogos com RTP alto, potencial de ganho máximo.',
      keywords: ['slots lucrativos', 'top slots 2024', 'sweet bonanza', 'gates of olympus'],
      category: 'Recomendação',
      autor: 'Admin',
      data: '2024-01-11',
      destaque: false,
      image: '🏆'
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todos Casinos Slots' },
    { id: 'premium', label: 'Premium' },
    { id: 'popular', label: 'Populares' },
    { id: 'confiavel', label: 'Confiáveis' }
  ];

  const filteredCasinos = casinos.filter(casino => {
    const matchesCategory = selectedCategory === 'todos' || casino.category === selectedCategory;
    const matchesSearch = casino.nome.toLowerCase().includes(searchTerm.toLowerCase());
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
              <h1 className="text-3xl font-bold">Slots Brasil</h1>
            </div>
            <nav className="flex gap-6">
              <button
                onClick={() => { setCurrentPage('home'); setSelectedArticle(null); }}
                className={`font-medium transition-colors ${currentPage === 'home' ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'}`}
              >
                Início
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
              ? 'Melhores casinos especializados em slots online do Brasil'
              : 'Guias, dicas e estratégias para ganhar em slots'}
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
                placeholder="Procurar casino de slots..."
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
                <h2 className="text-2xl font-bold">Melhor Casino de Slots Este Mês</h2>
                <p className="text-amber-100">{filteredCasinos[0].nome}</p>
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
                <h3 className="text-xl font-bold mb-1">{casino.nome}</h3>
                <p className="text-slate-400 text-sm mb-4">{casino.reviews} avaliações</p>

                <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-slate-300 mb-1">Especialidade: {casino.speciality}</p>
                  <p className="text-purple-400 font-bold text-sm">Slots Premium</p>
                </div>

                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-slate-300 mb-1">Bônus de Boas-vindas</p>
                  <p className="text-green-400 font-bold">{casino.bonus}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-slate-400 mb-2">Destaques:</p>
                  <div className="flex flex-wrap gap-2">
                    {casino.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-slate-700/50 text-amber-300 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 rounded-lg transition-all transform group-hover:scale-105">
                  Ver Avaliação
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCasinos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">Nenhum casino encontrado</p>
          </div>
        )}
      </main>
      </>
      )}

      {/* Blog Page */}
      {currentPage === 'blog' && !selectedArticle && (
      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Artigos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogArticles.filter(art => art.destaque).map(article => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-amber-500/30 transition-all group"
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-5xl mb-4">{article.image}</div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-100 transition-colors">{article.titulo}</h3>
                    <p className="text-amber-100 mb-4">{article.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-amber-900">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.data).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Todos os Artigos</h2>
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
                    <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">{article.titulo}</h3>
                    <p className="text-slate-300 mb-4">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.data).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        <span>{article.category}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{article.autor}</span>
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
          Voltar para Blog
        </button>

        <article className="bg-slate-800/60 backdrop-blur border border-amber-500/20 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-8">
            <div className="text-6xl mb-4">{selectedArticle.image}</div>
            <h1 className="text-4xl font-bold mb-4">{selectedArticle.titulo}</h1>
            <div className="flex flex-wrap gap-6 text-amber-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(selectedArticle.data).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{selectedArticle.autor}</span>
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
              {selectedArticle.conteudo.split('\n\n').map((paragraph, idx) => (
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
              <p className="text-slate-400 text-sm mb-3">Palavras-chave: </p>
              <div className="flex flex-wrap gap-2">
                {selectedArticle.keywords.map((keyword, idx) => (
                  <span key={idx} className="bg-slate-700/50 text-amber-300 px-3 py-1 rounded-full text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-700/30 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Meta Descrição (SEO):</p>
              <p className="text-slate-300 italic">{selectedArticle.metaDesc}</p>
            </div>
          </div>
        </article>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Artigos Relacionados</h3>
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
                <h4 className="font-bold text-sm mb-2 line-clamp-2 hover:text-amber-400 transition-colors">{article.titulo}</h4>
                <p className="text-slate-400 text-xs">{new Date(article.data).toLocaleDateString('pt-BR')}</p>
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
                  <h2 className="text-2xl font-bold">{selectedCasino.nome}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                    <span className="font-bold">{selectedCasino.rating}</span>
                    <span className="text-sm text-amber-100">({selectedCasino.reviews} avaliações)</span>
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
                <h3 className="text-lg font-bold text-amber-400 mb-2">Sobre</h3>
                <p className="text-slate-300">{selectedCasino.descricao}</p>
              </div>

              <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-4">
                <p className="text-purple-300 font-bold">Especialidade: {selectedCasino.speciality} Premium</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-amber-400 mb-2">Bônus de Boas-vindas</h3>
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                  <p className="text-green-400 font-bold text-lg">{selectedCasino.bonus}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-amber-400 mb-3">Destaques</h3>
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
                <h3 className="text-lg font-bold text-amber-400 mb-3">Provedores de Slots</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCasino.providers.map((provider, idx) => (
                    <span key={idx} className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm">
                      {provider}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-3 rounded-lg transition-all text-lg">
                Registre-se e Ganhe Bônus Slots
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black/50 border-t border-amber-500/20 mt-16 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="mb-2">© 2024 Slots Brasil. Todos os direitos reservados.</p>
          <p className="text-sm">Aviso: Jogos de azar podem causar vício. Jogue com responsabilidade.</p>
        </div>
      </footer>
    </div>
  );
}