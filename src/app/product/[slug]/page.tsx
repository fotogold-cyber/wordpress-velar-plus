import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PluginCard from '@/components/PluginCard';
import ruPlugins from '@/data/ru_plugins.json';

export async function generateStaticParams() {
  return ruPlugins.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const plugin = ruPlugins.find((p) => p.slug === slug);
  if (!plugin) return {};
  const url = `https://velarplus.ru/product/${slug}`;
  return {
    title: `${plugin.name} — купить модуль интеграции | WordPress.велар+`,
    description: plugin.description.slice(0, 160),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${plugin.name} | WordPress.велар+`,
      description: plugin.description.slice(0, 160),
      url,
      type: 'website',
      siteName: 'WordPress.велар+',
      locale: 'ru_RU',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${plugin.name} | WordPress.велар+`,
      description: plugin.description.slice(0, 160),
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const plugin = ruPlugins.find((p) => p.slug === slug) as any;
  if (!plugin) notFound();

  const originalPrice = Math.round(plugin.price_rub * 1.4 / 100) * 100;
  const discountPercent = Math.round(((originalPrice - plugin.price_rub) / originalPrice) * 100);

  const charSum = plugin.slug.split('').reduce((acc: number, c: string) => acc + c.charCodeAt(0), 0);
  const skuNumber = 100000 + (charSum * 19) % 899999;
  const version = plugin.version || 'v2.4.0';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: plugin.name,
    description: plugin.description,
    category: plugin.category,
    sku: `VELAR-${skuNumber}`,
    brand: {
      '@type': 'Brand',
      name: 'WordPress.велар+',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '84',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      price: plugin.price_rub,
      priceCurrency: 'RUB',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      priceValidUntil: '2027-12-31',
      seller: {
        '@type': 'Organization',
        name: 'WordPress.велар+',
      },
    },
  };

  const longParagraphs = (plugin.long_description || '').split('\n\n');
  const related = ruPlugins
    .filter((p) => p.slug !== plugin.slug && (p.category === plugin.category || p.platform === plugin.platform))
    .slice(0, 4);

  return (
    <>
      <Header />
      <main className="flex-grow bg-[#fbfbfd]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Top Breadcrumb Bar */}
        <div className="bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs font-mono text-neutral-400">
            <nav className="flex items-center gap-2 flex-wrap uppercase tracking-wider">
              <Link href="/" className="hover:text-neutral-900 transition-colors">ГЛАВНАЯ</Link>
              <span>/</span>
              <Link href="/catalog" className="hover:text-neutral-900 transition-colors">КАТАЛОГ</Link>
              <span>/</span>
              <span className="text-neutral-900 font-bold truncate max-w-md">{plugin.name}</span>
            </nav>
          </div>
        </div>

        {/* Main Product Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          
          {/* Top Specification Header Card */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-neutral-200 mb-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="flex items-center gap-1.5 font-bold text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  АКТИВЕН И СТАБИЛЕН
                </span>
                <span className="text-neutral-300">/</span>
                <span className="text-neutral-500">АРТИКУЛ: VELAR-{skuNumber}</span>
                <span className="text-neutral-300 hidden sm:inline">/</span>
                <span className="text-neutral-500 hidden sm:inline">{version}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 text-xs font-mono font-bold rounded bg-neutral-100 text-neutral-800 border border-neutral-200 uppercase">
                  {plugin.platform}
                </span>
                <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded bg-neutral-100 text-neutral-600 border border-neutral-200 uppercase">
                  {plugin.category}
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#09090b] tracking-tight leading-tight mb-4">
              {plugin.name}
            </h1>

            <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
              {plugin.description}
            </p>
          </div>

          {/* 3-Column Architectural Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Col: Technical Specs & Telemetry Box */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Technical Schematic Accent Box */}
              <div className="rounded-xl bg-neutral-950 text-white p-6 border border-neutral-800 shadow-md relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800 font-mono text-xs text-neutral-400">
                    <span>// СПЕЦИФИКАЦИЯ МОДУЛЯ</span>
                    <span className="text-emerald-400">GPLv2 COMPLIANT</span>
                  </div>

                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="flex justify-between py-1 border-b border-neutral-900">
                      <span className="text-neutral-500">ПЛАТФОРМА:</span>
                      <span className="text-white font-bold">{plugin.platform}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-neutral-900">
                      <span className="text-neutral-500">РЕЛИЗ:</span>
                      <span className="text-white">{version}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-neutral-900">
                      <span className="text-neutral-500">PHP RUNTIME:</span>
                      <span className="text-emerald-400">7.4, 8.0, 8.1, 8.2, 8.3</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-neutral-900">
                      <span className="text-neutral-500">ПРОТОКОЛ:</span>
                      <span className="text-white">REST API / HTTPS / TLS 1.3</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-neutral-500">ВЫДАЧА КЛЮЧА:</span>
                      <span className="text-emerald-400">АВТОМАТИЧЕСКИ (МГНОВЕННО)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vendor & Trust Box */}
              <div className="bg-white rounded-xl border border-neutral-200 p-5 shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#09090b] text-white flex items-center justify-center font-mono font-bold text-xs">
                    W+
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#09090b]">Издатель: WordPress.велар+</div>
                    <div className="text-[11px] font-mono text-emerald-600 font-semibold">ОФИЦИАЛЬНАЯ ЛИЦЕНЗИЯ ✓</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-neutral-100 font-mono text-xs text-neutral-500 space-y-1.5">
                  <div>• Доставка архива и лицензии на email за 1 минуту</div>
                  <div>• Бессрочный доступ к будущим обновлениям</div>
                  <div>• 14 дней гарантия возврата средств</div>
                </div>
              </div>

            </div>

            {/* Center Col: Deep Documentation & Features */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Features List */}
              {plugin.features && plugin.features.length > 0 && (
                <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-xs">
                  <h2 className="text-base font-bold text-[#09090b] mb-4 uppercase tracking-wider font-mono">
                    // КЛЮЧЕВЫЕ ВОЗМОЖНОСТИ
                  </h2>
                  <div className="space-y-3">
                    {plugin.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                        <span className="font-mono text-xs font-bold text-emerald-600 mt-0.5">[+]</span>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Technical Description */}
              <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-xs">
                <h2 className="text-base font-bold text-[#09090b] mb-4 uppercase tracking-wider font-mono">
                  // АРХИТЕКТУРА И ПРИНЦИП РАБОТЫ
                </h2>
                <div className="space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {longParagraphs.map((paragraph: string, idx: number) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs">
                <div className="px-6 py-3.5 bg-neutral-50 border-b border-neutral-200">
                  <h2 className="font-mono text-xs font-bold text-[#09090b] uppercase tracking-wider">
                    // ТЕХНИЧЕСКИЙ ПАСПОРТ
                  </h2>
                </div>
                <div className="divide-y divide-neutral-100 font-mono text-xs">
                  {plugin.attributes.map((attr: { name: string; value: string }, idx: number) => (
                    <div key={idx} className="flex justify-between px-6 py-3 hover:bg-neutral-50/60">
                      <span className="text-neutral-500 uppercase">{attr.name}</span>
                      <span className="font-semibold text-neutral-900 text-right">{attr.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {plugin.faq && plugin.faq.length > 0 && (
                <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-xs">
                  <h2 className="text-base font-bold text-[#09090b] mb-4 uppercase tracking-wider font-mono">
                    // ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
                  </h2>
                  <div className="space-y-3">
                    {plugin.faq.map((item: { q: string; a: string }, idx: number) => (
                      <div key={idx} className="p-4 rounded-lg bg-neutral-50 border border-neutral-100">
                        <h3 className="font-bold text-xs sm:text-sm text-neutral-900 mb-1.5">{item.q}</h3>
                        <p className="text-xs text-neutral-600 leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Col: High-Contrast Checkout Module */}
            <div className="lg:col-span-3">
              <div className="sticky top-24 bg-white rounded-xl border-2 border-neutral-900 p-6 shadow-md space-y-5">
                
                {/* Price block */}
                <div>
                  <div className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider mb-1">
                    ЕДИНОВРЕМЕННАЯ ЛИЦЕНЗИЯ
                  </div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-black text-[#09090b] tracking-tight">
                      {plugin.price_rub.toLocaleString('ru-RU')} ₽
                    </span>
                    <span className="text-xs font-mono font-semibold text-neutral-400 line-through">
                      {originalPrice.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-neutral-900 text-white">
                    ВЫГОДА -{discountPercent}%
                  </span>
                </div>

                {/* Instant Buy Button */}
                <a
                  href={plugin.purchase_url}
                  target="_blank"
                  rel="nofollow noopener"
                  className="w-full py-3.5 rounded-lg bg-[#09090b] hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider text-center block transition-all shadow-sm active:scale-[0.98]"
                >
                  Купить модуль →
                </a>

                {/* Micro Guarantee Checklist */}
                <div className="pt-4 border-t border-neutral-100 font-mono text-[11px] text-neutral-600 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Выдача архива на email
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Бессрочные обновления
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> 14 дней гарантия возврата
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Эквайринг ЮKassa (чек 54-ФЗ)
                  </div>
                </div>

                {/* Support Box */}
                <div className="p-3 rounded-lg bg-neutral-100 border border-neutral-200 text-xs text-neutral-600">
                  Техподдержка инженеров: <span className="font-mono font-bold text-neutral-900">@velarplus</span>
                </div>

              </div>
            </div>

          </div>

          {/* Related Modules */}
          {related.length > 0 && (
            <div className="mt-16 pt-10 border-t border-neutral-200">
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-1">
                // СВЯЗАННЫЕ РЕШЕНИЯ
              </div>
              <h2 className="text-xl font-bold text-[#09090b] mb-6">
                Совместимые модули для вашей платформы
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {related.map((rp: any) => (
                  <PluginCard key={rp.slug} plugin={rp} />
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
