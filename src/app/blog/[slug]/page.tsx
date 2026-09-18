import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import articles from '@/data/blog_articles.json';
import ruPlugins from '@/data/ru_plugins.json';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | Блог WordPress.велар+`,
    description: article.meta_description,
    keywords: [article.primary_keyword, ...(article.secondary_keywords || [])].join(', '),
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const pluginMap = new Map(ruPlugins.map((p) => [p.slug, p]));
  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.meta_description,
    datePublished: article.published_date,
    dateModified: article.published_date,
    author: {
      '@type': 'Organization',
      name: 'WordPress.велар+',
    },
    publisher: {
      '@type': 'Organization',
      name: 'WordPress.велар+',
      url: 'https://velarplus.ru',
    },
  };

  return (
    <>
      <Header />
      <main className="flex-grow bg-slate-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Breadcrumbs */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
            <nav className="flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-blue-600 transition-colors">Главная</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">Блог</Link>
              <span>/</span>
              <span className="text-slate-900 font-medium truncate max-w-xs sm:max-w-md">{article.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white border-b border-slate-200 py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3.5 py-1 text-xs font-bold rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                {article.category}
              </span>
              <span className="text-xs text-slate-400">⏱ {article.read_time} чтения</span>
              <span className="text-xs text-slate-400">📅 {article.published_date}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
              {article.hero.subtitle}
            </p>

            {/* Key Benefit Banner */}
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/70 rounded-2xl p-5 sm:p-6 flex items-start gap-4">
              <div className="text-2xl mt-0.5">💡</div>
              <div>
                <div className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">Ключевое преимущество</div>
                <div className="text-slate-800 font-semibold text-base sm:text-lg">
                  {article.hero.key_benefit}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Body with 2-column layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Table of contents sidebar */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
                    <span>📑</span> Содержание статьи
                  </h3>
                  <nav className="space-y-2">
                    {article.sections.map((sec: any, idx: number) => (
                      <a
                        key={idx}
                        href={`#${sec.id || `sec-${idx}`}`}
                        className="block text-sm text-slate-600 hover:text-blue-600 transition-colors line-clamp-1 py-1"
                      >
                        {idx + 1}. {sec.heading}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Quick Catalog Widget in sidebar */}
                <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-6 text-white shadow-md">
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">Каталог решений</div>
                  <h4 className="text-lg font-bold mb-2">57+ плагинов для вашего сайта</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Все модули с разовой оплатой и пожизненной поддержкой без абонентской платы.
                  </p>
                  <Link
                    href="/catalog"
                    className="block w-full py-2.5 text-center bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-semibold transition-colors"
                  >
                    Открыть каталог плагинов →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content Sections */}
            <div className="lg:col-span-8 space-y-12">
              {article.sections.map((section: any, idx: number) => {
                const sectionId = section.id || `sec-${idx}`;

                return (
                  <section key={idx} id={sectionId} className="scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 text-sm flex items-center justify-center flex-shrink-0 font-bold">
                        {idx + 1}
                      </span>
                      {section.heading}
                    </h2>

                    {/* Section Type: Text */}
                    {section.type === 'text' && (
                      <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                        {section.content.paragraphs.map((p: string, pIdx: number) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                    )}

                    {/* Section Type: Comparison Table */}
                    {section.type === 'comparison_table' && (
                      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm my-6">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-sm">
                            <thead className="bg-slate-100/80 text-slate-900 font-bold border-b border-slate-200">
                              <tr>
                                {section.content.headers.map((h: string, hIdx: number) => (
                                  <th key={hIdx} className="px-5 py-3.5 whitespace-nowrap">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-slate-700">
                              {section.content.rows.map((row: string[], rIdx: number) => (
                                <tr key={rIdx} className={rIdx === 0 ? 'bg-blue-50/40 font-medium' : 'hover:bg-slate-50/50'}>
                                  {row.map((cell: string, cIdx: number) => (
                                    <td key={cIdx} className="px-5 py-3.5 leading-snug">{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Section Type: Steps */}
                    {section.type === 'steps' && (
                      <div className="space-y-4 my-6">
                        {section.content.items.map((step: any, sIdx: number) => (
                          <div key={sIdx} className="bg-white rounded-2xl border border-slate-200 p-6 flex gap-4 shadow-sm hover:border-blue-300 transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center flex-shrink-0 text-lg shadow-sm shadow-blue-500/30">
                              {sIdx + 1}
                            </div>
                            <div>
                              <h3 className="font-bold text-slate-900 text-lg mb-1">{step.title}</h3>
                              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Section Type: Tips */}
                    {section.type === 'tips' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                        {section.content.items.map((tip: any, tIdx: number) => (
                          <div key={tIdx} className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5">
                            <div className="font-bold text-amber-900 text-base mb-2 flex items-center gap-2">
                              <span>⭐</span> {tip.title}
                            </div>
                            <p className="text-amber-800/90 text-sm leading-relaxed">{tip.text}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Section Type: Product Recommendations */}
                    {section.type === 'product_recommendations' && (
                      <div className="my-8">
                        {section.content.intro && (
                          <p className="text-slate-600 mb-6 text-base sm:text-lg leading-relaxed">
                            {section.content.intro}
                          </p>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {section.content.products.map((rec: any, pIdx: number) => {
                            const pData = pluginMap.get(rec.slug);
                            return (
                              <div key={pIdx} className="bg-white rounded-2xl border border-blue-200 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                                <div>
                                  <div className="flex items-center justify-between gap-2 mb-2">
                                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-700">
                                      {pData ? pData.platform : 'WordPress'}
                                    </span>
                                    {pData && (
                                      <span className="text-lg font-extrabold text-slate-900">
                                        {pData.price_rub.toLocaleString('ru-RU')} ₽
                                      </span>
                                    )}
                                  </div>
                                  <h4 className="text-lg font-bold text-slate-900 mb-2">{rec.name}</h4>
                                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{rec.why}</p>
                                </div>
                                <Link
                                  href={`/product/${rec.slug}`}
                                  className="w-full text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors mt-2"
                                >
                                  Подробнее о плагине →
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Section Type: FAQ */}
                    {section.type === 'faq' && (
                      <div className="space-y-4 my-6">
                        {section.content.items.map((faqItem: any, fIdx: number) => (
                          <div key={fIdx} className="bg-white rounded-2xl border border-slate-200 p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                              <span className="text-blue-600 font-bold">Q:</span> {faqItem.q}
                            </h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-6">
                              {faqItem.a}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Section Type: CTA */}
                    {section.type === 'cta' && (
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-10 text-white my-8 shadow-xl">
                        <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">{section.heading}</h3>
                        <p className="text-blue-100 text-base mb-6 leading-relaxed max-w-2xl">{section.content.text}</p>
                        <Link
                          href={section.content.button_url || '/catalog'}
                          className="inline-block px-8 py-3.5 bg-white text-blue-700 font-bold rounded-xl text-base hover:bg-blue-50 transition-colors shadow-md"
                        >
                          {section.content.button_text} →
                        </Link>
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          </div>
        </div>

        {/* Other Articles Block */}
        <section className="bg-white border-t border-slate-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Вам также может быть интересно</h2>
              <Link href="/blog" className="text-blue-600 font-semibold hover:underline text-sm sm:text-base">
                Все статьи блога →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherArticles.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{other.category}</span>
                    <h3 className="font-bold text-slate-900 text-lg mt-2 mb-2 line-clamp-2">{other.title}</h3>
                    <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed mb-4">{other.meta_description}</p>
                  </div>
                  <div className="text-blue-600 font-semibold text-sm flex items-center gap-1">
                    Читать →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
