'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import PluginCard from '@/components/PluginCard';

interface Plugin {
  slug: string;
  name: string;
  description: string;
  category: string;
  price_rub: number;
  platform: string;
  version: string;
  bonus?: number;
}

export default function CatalogView({ plugins, isEn = false }: { plugins: Plugin[]; isEn?: boolean }) {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');
  const [priceMax, setPriceMax] = useState<number>(10000);
  const [search, setSearch] = useState<string>('');

  // Filter & Sort
  const filtered = useMemo(() => {
    let list = plugins.filter((p) => {
      // Platform filter
      if (selectedPlatform !== 'all' && p.platform.toLowerCase() !== selectedPlatform.toLowerCase()) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'crm' && !p.slug.includes('crm') && !p.slug.includes('bitrix') && !p.slug.includes('amocrm') && !p.slug.includes('pipedrive') && !p.slug.includes('zoho')) return false;
        if (selectedCategory === 'payment' && !p.slug.includes('pay') && !p.slug.includes('yookassa') && !p.slug.includes('sber') && !p.slug.includes('tbank') && !p.slug.includes('robokassa')) return false;
        if (selectedCategory === 'marketplace' && !p.slug.includes('wildberries') && !p.slug.includes('ozon') && !p.slug.includes('1c') && !p.slug.includes('moysklad')) return false;
        if (selectedCategory === 'delivery' && !p.slug.includes('cdek') && !p.slug.includes('delivery')) return false;
      }
      // Price filter
      if (p.price_rub > priceMax) return false;
      // Search filter
      if (search.trim() !== '') {
        const q = search.toLowerCase();
        return p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q);
      }
      return true;
    });

    // Sorting
    if (sortBy === 'price_asc') {
      list.sort((a, b) => a.price_rub - b.price_rub);
    } else if (sortBy === 'price_desc') {
      list.sort((a, b) => b.price_rub - a.price_rub);
    } else if (sortBy === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [plugins, selectedPlatform, selectedCategory, sortBy, priceMax, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Breadcrumb Header */}
      <div className="font-mono text-xs text-neutral-400 mb-4 flex items-center gap-2 uppercase tracking-wider">
        <Link href={isEn ? '/en' : '/'} className="hover:text-neutral-900 transition-colors">
          {isEn ? 'CORE' : 'ГЛАВНАЯ'}
        </Link>
        <span>/</span>
        <span className="text-neutral-900 font-bold">{isEn ? 'CATALOG_REGISTRY' : 'КАТАЛОГ_МОДУЛЕЙ'}</span>
      </div>

      {/* Catalog Title & Sort Bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-6 border-b border-neutral-200">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#09090b] tracking-tight">
            {isEn ? 'Integration Registry' : 'Реестр инженерных модулей'}
          </h1>
          <p className="font-mono text-xs text-neutral-500 mt-1 uppercase tracking-wider">
            {filtered.length} {isEn ? 'ACTIVE EXTENSIONS READY FOR DEPLOYMENT' : 'ДОСТУПНЫХ РЕШЕНИЙ С МГНОВЕННОЙ АКТИВАЦИЕЙ'}
          </p>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-1.5 font-mono text-xs">
          <span className="text-neutral-400 hidden sm:inline uppercase mr-1">SORT:</span>
          {[
            { id: 'popular', label: isEn ? 'Popular' : 'Популярные' },
            { id: 'price_asc', label: isEn ? 'Price ↑' : 'Дешевле' },
            { id: 'price_desc', label: isEn ? 'Price ↓' : 'Дороже' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSortBy(item.id)}
              className={`px-3 py-1.5 rounded-md font-bold uppercase transition-all cursor-pointer ${
                sortBy === item.id
                  ? 'bg-[#09090b] text-white'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Structural Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Filter Sidebar */}
        <aside className="lg:col-span-3">
          <div className="bg-white rounded-xl border border-neutral-200 p-5 sticky top-24 space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <span className="font-mono text-xs font-bold text-[#09090b] uppercase tracking-wider">
                // ПАРАМЕТРЫ ФИЛЬТРА
              </span>
              <button
                onClick={() => {
                  setSelectedPlatform('all');
                  setSelectedCategory('all');
                  setPriceMax(10000);
                  setSearch('');
                }}
                className="font-mono text-[11px] text-neutral-400 hover:text-neutral-900 uppercase cursor-pointer"
              >
                [СБРОС]
              </button>
            </div>

            {/* Keyword search input */}
            <div>
              <label className="font-mono text-[11px] font-bold text-neutral-600 block mb-2 uppercase">
                Поиск по ключевым словам
              </label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="amoCRM, Сбербанк, СДЭК..."
                className="w-full px-3 py-2 text-xs rounded-md bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-neutral-900"
              />
            </div>

            {/* Platform Filter */}
            <div>
              <label className="font-mono text-[11px] font-bold text-neutral-600 block mb-2 uppercase">
                Платформа CMS
              </label>
              <div className="space-y-1.5 text-xs text-neutral-700">
                {[
                  { id: 'all', label: 'Все платформы' },
                  { id: 'wordpress', label: 'WordPress / WooCommerce' },
                  { id: 'opencart', label: 'OpenCart 2.x - 3.x' },
                  { id: 'shopify', label: 'Shopify Global' },
                  { id: 'magento', label: 'Magento 2 / Adobe' },
                ].map((item) => (
                  <label key={item.id} className="flex items-center gap-2 cursor-pointer hover:text-neutral-950 font-medium">
                    <input
                      type="radio"
                      name="platform"
                      checked={selectedPlatform === item.id}
                      onChange={() => setSelectedPlatform(item.id)}
                      className="accent-[#09090b]"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="font-mono text-[11px] font-bold text-neutral-600 block mb-2 uppercase">
                Специализация
              </label>
              <div className="space-y-1.5 text-xs text-neutral-700">
                {[
                  { id: 'all', label: 'Все категории' },
                  { id: 'crm', label: 'CRM (amoCRM, Битрикс24)' },
                  { id: 'payment', label: 'Эквайринг (ЮKassa, Сбер)' },
                  { id: 'marketplace', label: 'Маркетплейсы (WB, Ozon)' },
                  { id: 'delivery', label: 'Службы доставки (СДЭК)' },
                ].map((item) => (
                  <label key={item.id} className="flex items-center gap-2 cursor-pointer hover:text-neutral-950 font-medium">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === item.id}
                      onChange={() => setSelectedCategory(item.id)}
                      className="accent-[#09090b]"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Max Price Slider */}
            <div>
              <div className="flex justify-between items-center font-mono text-[11px] font-bold text-neutral-600 mb-1 uppercase">
                <span>ЛИМИТ ЦЕНЫ:</span>
                <span className="text-[#09090b]">{priceMax.toLocaleString('ru-RU')} ₽</span>
              </div>
              <input
                type="range"
                min={500}
                max={10000}
                step={500}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-[#09090b] cursor-pointer"
              />
            </div>

          </div>
        </aside>

        {/* Right Products Grid */}
        <div className="lg:col-span-9">
          {filtered.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-neutral-200">
              <div className="font-mono text-xs text-neutral-400 mb-2 uppercase">// РЕЗУЛЬТАТ НЕ НАЙДЕН</div>
              <h3 className="text-base font-bold text-[#09090b] mb-1">По заданным фильтрам модули не найдены</h3>
              <p className="text-xs text-neutral-500 mb-4">Попробуйте изменить параметры выборки или сбросить фильтрацию</p>
              <button
                onClick={() => {
                  setSelectedPlatform('all');
                  setSelectedCategory('all');
                  setPriceMax(10000);
                  setSearch('');
                }}
                className="px-5 py-2 rounded-lg bg-[#09090b] text-white font-mono text-xs font-bold uppercase cursor-pointer"
              >
                Сбросить фильтры
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((plugin) => (
                <PluginCard key={plugin.slug} plugin={plugin} isEn={isEn} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
