'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PluginCard from '@/components/PluginCard';
import ruPlugins from '@/data/ru_plugins.json';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPlugins = ruPlugins.filter((p) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'crm') {
      return p.slug.includes('amocrm') || p.slug.includes('bitrix') || p.slug.includes('pipedrive') || p.slug.includes('zoho') || p.slug.includes('retailcrm') || p.slug.includes('hubspot');
    }
    if (activeCategory === 'payment') {
      return p.slug.includes('yookassa') || p.slug.includes('sber') || p.slug.includes('tbank') || p.slug.includes('robokassa') || p.slug.includes('pay') || p.slug.includes('alfa');
    }
    if (activeCategory === 'marketplace') {
      return p.slug.includes('wildberries') || p.slug.includes('ozon') || p.slug.includes('1c') || p.slug.includes('moysklad') || p.slug.includes('sbis');
    }
    if (activeCategory === 'delivery') {
      return p.slug.includes('cdek') || p.slug.includes('delivery');
    }
    return true;
  });

  const featured = filteredPlugins.slice(0, 12);

  return (
    <>
      <Header />
      <main className="flex-grow bg-[#fbfbfd]">
        
        {/* ============================================================ */}
        {/* HERO SECTION: ARCHITECTURAL BENTO GRID                      */}
        {/* ============================================================ */}
        <section className="border-b border-neutral-200 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Editorial Headline & Search */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-neutral-200 bg-neutral-50 text-[11px] font-mono text-neutral-600 uppercase tracking-wider mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>WordPress.велар+ // Релиз 2026</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#09090b] leading-[1.08] mb-6">
                  Инженерные модули интеграций <br className="hidden sm:inline" />
                  <span className="text-neutral-400">для e-commerce.</span>
                </h1>

                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mb-8">
                  Связывайте интернет-магазины с CRM, маркетплейсами, онлайн-эквайрингом и службами доставки. Без абонентских плат, без внешних серверов-посредников, напрямую через официальные API.
                </p>

                {/* Action Row */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/catalog"
                    className="px-6 py-3.5 rounded-lg bg-[#09090b] hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                  >
                    Каталог решений ({ruPlugins.length}) →
                  </Link>
                  <Link
                    href="/blog"
                    className="px-6 py-3.5 rounded-lg border border-neutral-300 hover:border-neutral-900 bg-white text-neutral-900 font-mono text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Архитектурные гайды
                  </Link>
                </div>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-neutral-100">
                  <div>
                    <div className="font-mono text-2xl font-black text-[#09090b]">57+</div>
                    <div className="font-mono text-[11px] text-neutral-500 uppercase mt-0.5">МОДУЛЕЙ В БАЗЕ</div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl font-black text-[#09090b]">0 ₽</div>
                    <div className="font-mono text-[11px] text-neutral-500 uppercase mt-0.5">ПОДПИСОК / МЕСЯЦ</div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl font-black text-emerald-600">~12мс</div>
                    <div className="font-mono text-[11px] text-neutral-500 uppercase mt-0.5">ОТКЛИК WEBHOOK</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Accent Bento Container (Live Module Telemetry) */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#09090b] text-white p-6 border border-neutral-800 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

                  <div className="relative z-10 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                      <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                        // ТЕЛЕМЕТРИЯ ШЛЮЗОВ
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        СИСТЕМА АКТИВНА
                      </span>
                    </div>

                    {/* Telemetry Item 1 */}
                    <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                      <div>
                        <div className="font-mono text-xs font-bold text-white">amoCRM • Contact Form 7</div>
                        <div className="text-[11px] text-neutral-400">Автоматический маппинг полей + UTM</div>
                      </div>
                      <span className="font-mono text-[11px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                        200 OK
                      </span>
                    </div>

                    {/* Telemetry Item 2 */}
                    <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                      <div>
                        <div className="font-mono text-xs font-bold text-white">Wildberries API • WooCommerce</div>
                        <div className="text-[11px] text-neutral-400">Двусторонняя синхронизация остатков FBS</div>
                      </div>
                      <span className="font-mono text-[11px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                        SYNCED
                      </span>
                    </div>

                    {/* Telemetry Item 3 */}
                    <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                      <div>
                        <div className="font-mono text-xs font-bold text-white">ЮKassa Эквайринг • 54-ФЗ</div>
                        <div className="text-[11px] text-neutral-400">Фискализация чеков, СБП, SberPay, карты</div>
                      </div>
                      <span className="font-mono text-[11px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                        ACTIVE
                      </span>
                    </div>

                    {/* Telemetry Item 4 */}
                    <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                      <div>
                        <div className="font-mono text-xs font-bold text-white">СДЭК Доставка 2.0 • Карта ПВЗ</div>
                        <div className="text-[11px] text-neutral-400">Автогенерация накладных и трек-номеров</div>
                      </div>
                      <span className="font-mono text-[11px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                        ONLINE
                      </span>
                    </div>

                    {/* Bottom Prompt */}
                    <div className="pt-2 text-[11px] font-mono text-neutral-400 text-center">
                      ВСЕ МОДУЛИ РАБОТАЮТ НА ВАШЕМ ХОСТИНГЕ БЕЗ СТОРОННИХ ОБЛАКОВ
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FOUR ACCENT BENTO RECTANGLES (CATEGORY ARCHITECTURE)         */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-1">
                // СТРУКТУРА КАТАЛОГА
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09090b] tracking-tight">
                Четыре ключевых направления автоматизации
              </h2>
            </div>
            <Link href="/catalog" className="font-mono text-xs font-bold text-[#09090b] hover:underline uppercase">
              Все категории (57) →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Bento Card 1: CRM */}
            <div 
              onClick={() => setActiveCategory('crm')}
              className={`p-6 rounded-xl border transition-all cursor-pointer ${
                activeCategory === 'crm' 
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-md' 
                  : 'bg-white text-neutral-900 border-neutral-200 hover:border-neutral-900'
              }`}
            >
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-3">01 // CRM СИСТЕМЫ</div>
              <h3 className="font-bold text-lg mb-2">amoCRM & Битрикс24</h3>
              <p className={`text-xs leading-relaxed mb-4 ${activeCategory === 'crm' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                Автоматическая передача лидов из любых контактных форм, создание сделок, привязка UTM-меток.
              </p>
              <div className="font-mono text-xs font-bold text-emerald-500">
                15+ МОДУЛЕЙ →
              </div>
            </div>

            {/* Bento Card 2: Payments */}
            <div 
              onClick={() => setActiveCategory('payment')}
              className={`p-6 rounded-xl border transition-all cursor-pointer ${
                activeCategory === 'payment' 
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-md' 
                  : 'bg-white text-neutral-900 border-neutral-200 hover:border-neutral-900'
              }`}
            >
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-3">02 // ЭКВАЙРИНГ</div>
              <h3 className="font-bold text-lg mb-2">ЮKassa, Сбер, Т-Банк</h3>
              <p className={`text-xs leading-relaxed mb-4 ${activeCategory === 'payment' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                Прием оплаты на сайте без тяжелой корзины. Поддержка СБП, банковских карт и чеков по 54-ФЗ.
              </p>
              <div className="font-mono text-xs font-bold text-emerald-500">
                13+ ШЛЮЗОВ →
              </div>
            </div>

            {/* Bento Card 3: Marketplaces */}
            <div 
              onClick={() => setActiveCategory('marketplace')}
              className={`p-6 rounded-xl border transition-all cursor-pointer ${
                activeCategory === 'marketplace' 
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-md' 
                  : 'bg-white text-neutral-900 border-neutral-200 hover:border-neutral-900'
              }`}
            >
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-3">03 // МАРКЕТПЛЕЙСЫ</div>
              <h3 className="font-bold text-lg mb-2">Wildberries & Ozon</h3>
              <p className={`text-xs leading-relaxed mb-4 ${activeCategory === 'marketplace' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                Синхронизация остатков, цен и статусов заказов по схеме FBS. Исключение штрафов за отмену заказов.
              </p>
              <div className="font-mono text-xs font-bold text-emerald-500">
                10+ МОДУЛЕЙ →
              </div>
            </div>

            {/* Bento Card 4: Logistics */}
            <div 
              onClick={() => setActiveCategory('delivery')}
              className={`p-6 rounded-xl border transition-all cursor-pointer ${
                activeCategory === 'delivery' 
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-md' 
                  : 'bg-white text-neutral-900 border-neutral-200 hover:border-neutral-900'
              }`}
            >
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-3">04 // ЛОГИСТИКА</div>
              <h3 className="font-bold text-lg mb-2">СДЭК & Яндекс Доставка</h3>
              <p className={`text-xs leading-relaxed mb-4 ${activeCategory === 'delivery' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                Расчет тарифов, интерактивная карта ПВЗ, выгрузка транспортных накладных в 1 клик.
              </p>
              <div className="font-mono text-xs font-bold text-emerald-500">
                5+ МОДУЛЕЙ →
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* PRODUCT BENTO GRID WITH CATEGORY CHIPS                       */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-neutral-200">
          
          {/* Header & Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-1">
                // РЕШЕНИЯ В КАТАЛОГЕ
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09090b] tracking-tight">
                Инженерный стек решений ({filteredPlugins.length})
              </h2>
            </div>

            {/* Category Toggle Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
              {[
                { id: 'all', label: 'Все модули' },
                { id: 'crm', label: 'CRM' },
                { id: 'payment', label: 'Платежи' },
                { id: 'marketplace', label: 'Маркетплейсы' },
                { id: 'delivery', label: 'Доставка' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-md font-mono text-xs font-bold uppercase transition-all cursor-pointer whitespace-nowrap ${
                    activeCategory === tab.id
                      ? 'bg-[#09090b] text-white'
                      : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {featured.map((plugin) => (
              <PluginCard key={plugin.slug} plugin={plugin} />
            ))}
          </div>

          {/* Bottom Catalog Callout */}
          <div className="mt-12 p-8 rounded-xl bg-white border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-[#09090b] mb-1">
                Нужен модуль под нестандартную конфигурацию?
              </h3>
              <p className="text-xs text-neutral-500">
                В нашем полном каталоге доступно более 57 решений для WordPress, WooCommerce и OpenCart.
              </p>
            </div>
            <Link
              href="/catalog"
              className="px-6 py-3 rounded-lg bg-[#09090b] hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors"
            >
              Смотреть все 57 решений →
            </Link>
          </div>

        </section>

        {/* ============================================================ */}
        {/* ENGINEERING BENCHMARKS (4 CONTRAST BENTO BLOCKS)             */}
        {/* ============================================================ */}
        <section className="border-t border-neutral-200 bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-1">
                // АРХИТЕКТУРНЫЕ СТАНДАРТЫ
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09090b] tracking-tight">
                Почему инженеры и владельцы бизнеса выбирают наши решения
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl border border-neutral-200 bg-[#fbfbfd]">
                <div className="font-mono text-xs text-neutral-400 mb-2">01 // АВТОНОМНОСТЬ</div>
                <h4 className="font-bold text-base text-[#09090b] mb-2">Работает на вашем сервере</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Данные клиентов и заказы не проходят через чужие облачные сервисы (Zapier / Albato). Полный контроль за приватностью по 152-ФЗ.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-neutral-200 bg-[#fbfbfd]">
                <div className="font-mono text-xs text-neutral-400 mb-2">02 // ЭКОНОМИКА</div>
                <h4 className="font-bold text-base text-[#09090b] mb-2">Никаких подписок</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Вы покупаете модуль один раз. Никаких ежемесячных списаний за количество переданных лидов или обновлений остатков.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-neutral-200 bg-[#fbfbfd]">
                <div className="font-mono text-xs text-neutral-400 mb-2">03 // СОВМЕСТИМОСТЬ</div>
                <h4 className="font-bold text-base text-[#09090b] mb-2">PHP 8.0 - 8.3 Native</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Код протестирован на последних релизах PHP и WooCommerce. Асинхронная обработка событий, минимальная нагрузка на БД.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-neutral-200 bg-[#fbfbfd]">
                <div className="font-mono text-xs text-neutral-400 mb-2">04 // НАДЕЖНОСТЬ</div>
                <h4 className="font-bold text-base text-[#09090b] mb-2">14 дней гарантия</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Полная гарантия совместимости. Если модуль не решает задачу в вашей конфигурации, мы обеспечиваем техническую помощь или возврат.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
