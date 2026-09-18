'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-neutral-200/90 transition-all">
      {/* Top Architectural Telemetry Bar */}
      <div className="bg-[#09090b] text-neutral-400 text-[11px] font-mono py-1.5 px-4 sm:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {isEn ? 'CORE TELEMETRY: 99.98% API UPTIME' : 'СИСТЕМА: ВСЕ ШЛЮЗЫ И API ОНЛАЙН'}
            </span>
            <span className="hidden sm:inline text-neutral-700">/</span>
            <span className="hidden sm:inline text-neutral-400">
              {isEn ? 'PHP 7.4 - 8.3 NATIVE • REST API' : 'PHP 7.4 - 8.3 NATIVE • REST API'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-neutral-300">
              {isEn ? 'ZERO SUBSCRIPTIONS • LIFETIME LICENSE' : '0 ₽ АБОНЕНТСКИХ ПЛАТ • БЕССРОЧНЫЙ ДОСТУП'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Structural Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          
          {/* Brand Mark */}
          <Link href={isEn ? '/en' : '/'} className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-9 h-9 rounded-lg bg-[#09090b] text-white flex items-center justify-center font-black text-sm tracking-tighter border border-neutral-800 shadow-sm group-hover:bg-neutral-800 transition-colors">
              W+
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight leading-none text-[#09090b]">
                WordPress<span className="text-neutral-400">.велар+</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mt-0.5">
                {isEn ? 'B2B Extension Market' : 'Инженерные модули'}
              </span>
            </div>
          </Link>

          {/* Quick Catalog Trigger Button */}
          <Link
            href={isEn ? '/en/catalog' : '/catalog'}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#09090b] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0"
          >
            <span className="w-3.5 h-3.5 flex flex-col justify-between py-0.5">
              <span className="w-full h-0.5 bg-white"></span>
              <span className="w-2.5 h-0.5 bg-white"></span>
              <span className="w-full h-0.5 bg-white"></span>
            </span>
            <span>{isEn ? 'Catalog (20+)' : 'Каталог (57+)'}</span>
          </Link>

          {/* Precision Search Box */}
          <div className="flex-grow max-w-xl relative">
            <form action={isEn ? '/en/catalog' : '/catalog'} method="GET" className="relative flex items-center">
              <input
                type="text"
                name="q"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isEn ? "Search integrations by keyword (CRM, Stripe, Amazon)..." : "Поиск модулей: amoCRM, Битрикс24, ЮKassa, Wildberries..."}
                className="w-full pl-3.5 pr-20 py-2 rounded-lg bg-neutral-100/80 hover:bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all"
              />
              <div className="absolute right-2 flex items-center gap-1.5 pointer-events-none">
                <span className="px-1.5 py-0.5 rounded border border-neutral-300 bg-white text-[10px] font-mono text-neutral-500 font-semibold shadow-2xs">
                  ⌘K
                </span>
              </div>
            </form>
          </div>

          {/* Secondary Structural Links */}
          <div className="flex items-center gap-3 sm:gap-6 flex-shrink-0 text-xs font-semibold">
            <Link
              href={isEn ? '/en/blog' : '/blog'}
              className="text-neutral-600 hover:text-neutral-950 transition-colors hidden md:inline"
            >
              {isEn ? 'Architecture Guides' : 'База знаний'}
            </Link>

            <Link
              href={isEn ? '/en/catalog' : '/catalog'}
              className="text-neutral-600 hover:text-neutral-950 transition-colors hidden md:inline"
            >
              {isEn ? 'Extensions' : 'Решения'}
            </Link>

            {/* Language Switcher Button */}
            <div className="flex items-center p-0.5 rounded-lg border border-neutral-200 bg-neutral-100 text-[11px] font-mono font-bold">
              <Link
                href={pathname.replace(/^\/en/, '') || '/'}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  !isEn ? 'bg-white text-neutral-950 shadow-2xs' : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                RU
              </Link>
              <Link
                href={`/en${pathname.replace(/^\/en/, '')}`}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  isEn ? 'bg-white text-neutral-950 shadow-2xs' : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                EN
              </Link>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
