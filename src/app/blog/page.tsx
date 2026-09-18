import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import articles from '@/data/blog_articles.json';

export const metadata = {
  title: 'Блог об автоматизации WordPress и OpenCart | WordPress.велар+',
  description: 'Экспертные руководства, практические гайды и обзоры плагинов для интеграции CRM, платежных систем, маркетплейсов и служб доставки.',
};

export default function BlogIndex() {
  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <>
      <Header />
      <main className="flex-grow bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Header section */}
          <div className="max-w-3xl mb-12">
            <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">База знаний и руководства</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2 mb-4">
              Блог об интеграциях и автоматизации
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Пошаговые гайды без лишней воды. Узнайте, как связать сайт с CRM, подключить онлайн-оплату и автоматизировать выгрузку на маркетплейсы без дорогих программистов.
            </p>
          </div>

          {/* Featured Article Banner */}
          {featuredArticle && (
            <div className="mb-14 bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3.5 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-800">
                      {featuredArticle.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      ⏱ {featuredArticle.read_time} чтения
                    </span>
                  </div>
                  <Link href={`/blog/${featuredArticle.slug}`}>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 hover:text-blue-600 transition-colors leading-tight mb-4">
                      {featuredArticle.title}
                    </h2>
                  </Link>
                  <p className="text-slate-600 text-base sm:text-lg mb-6 leading-relaxed">
                    {featuredArticle.meta_description}
                  </p>
                  <div className="flex items-center gap-4">
                    <Link
                      href={`/blog/${featuredArticle.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-sm"
                    >
                      Читать руководство →
                    </Link>
                    <span className="text-xs text-slate-400">
                      Обновлено: {featuredArticle.published_date}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100/60">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Главный инсайт</div>
                  <div className="text-slate-800 font-semibold text-base mb-3 leading-snug">
                    {featuredArticle.hero.key_benefit}
                  </div>
                  <div className="text-xs text-slate-500">
                    Ключевой запрос: <span className="font-mono text-slate-700">{featuredArticle.primary_keyword}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of articles */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Все статьи и гайды ({articles.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-blue-300 transition-all"
                >
                  <div className="p-7 flex flex-col flex-grow">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                        {article.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        {article.read_time}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-slate-500 text-sm line-clamp-3 mb-6 leading-relaxed flex-grow">
                      {article.meta_description}
                    </p>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <span className="text-xs font-medium text-slate-400">
                        Тег: {article.primary_keyword}
                      </span>
                      <span className="text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Читать →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 mt-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Нужен плагин под вашу задачу?</h2>
              <p className="text-slate-300 max-w-xl text-sm sm:text-base">
                В нашем каталоге собрано 57+ готовых модулей интеграции для WordPress и OpenCart с пожизненными обновлениями.
              </p>
            </div>
            <Link
              href="/catalog"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold whitespace-nowrap transition-all shadow-lg hover:shadow-blue-600/30"
            >
              Перейти в каталог решений →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
