'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PluginCard from '@/components/PluginCard';
import enPlugins from '@/data/en_plugins.json';

export default function EnHome() {
  const [activePlatform, setActivePlatform] = useState('all');

  const filteredPlugins = enPlugins.filter((p) => {
    if (activePlatform === 'all') return true;
    return p.platform.toLowerCase() === activePlatform.toLowerCase();
  });

  const featured = filteredPlugins.slice(0, 12);

  return (
    <>
      <Header />
      <main className="flex-grow bg-[#fbfbfd]">
        
        {/* ============================================================ */}
        {/* HERO SECTION: BENTO GRID ARCHITECTURE                       */}
        {/* ============================================================ */}
        <section className="border-b border-neutral-200 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-neutral-200 bg-neutral-50 text-[11px] font-mono text-neutral-600 uppercase tracking-wider mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>GLOBAL EXTENSION PLATFORM // 2026 RELEASE</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#09090b] leading-[1.08] mb-6">
                  Engineered ecommerce integrations <br className="hidden sm:inline" />
                  <span className="text-neutral-400">for modern retail.</span>
                </h1>

                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mb-8">
                  Connect Shopify, WooCommerce, Magento 2, and BigCommerce to Amazon FBA, QuickBooks, Stripe, and enterprise CRMs. Zero recurring subscription fees.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/en/catalog"
                    className="px-6 py-3.5 rounded-lg bg-[#09090b] hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                  >
                    View All Extensions ({enPlugins.length}) →
                  </Link>
                  <Link
                    href="/en/blog"
                    className="px-6 py-3.5 rounded-lg border border-neutral-300 hover:border-neutral-900 bg-white text-neutral-900 font-mono text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Engineering Guides
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-neutral-100">
                  <div>
                    <div className="font-mono text-2xl font-black text-[#09090b]">20+</div>
                    <div className="font-mono text-[11px] text-neutral-500 uppercase mt-0.5">NATIVE EXTENSIONS</div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl font-black text-[#09090b]">$0</div>
                    <div className="font-mono text-[11px] text-neutral-500 uppercase mt-0.5">MONTHLY SUBSCRIPTIONS</div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl font-black text-emerald-600">~15ms</div>
                    <div className="font-mono text-[11px] text-neutral-500 uppercase mt-0.5">WEBHOOK LATENCY</div>
                  </div>
                </div>
              </div>

              {/* Right Bento Box */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#09090b] text-white p-6 border border-neutral-800 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                      <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                        // ACTIVE TELEMETRY GATES
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        GATEWAYS ONLINE
                      </span>
                    </div>

                    <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                      <div>
                        <div className="font-mono text-xs font-bold text-white">Amazon FBA • WooCommerce</div>
                        <div className="text-[11px] text-neutral-400">Bi-directional inventory sync & auto-tracking</div>
                      </div>
                      <span className="font-mono text-[11px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                        200 OK
                      </span>
                    </div>

                    <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                      <div>
                        <div className="font-mono text-xs font-bold text-white">Shopify • Multi-Channel Sync</div>
                        <div className="text-[11px] text-neutral-400">Real-time stock balance across Amazon & eBay</div>
                      </div>
                      <span className="font-mono text-[11px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                        ACTIVE
                      </span>
                    </div>

                    <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                      <div>
                        <div className="font-mono text-xs font-bold text-white">Stripe Elements • Magento 2</div>
                        <div className="text-[11px] text-neutral-400">PCI-DSS Level 1 tokenized Apple Pay & 3DS 2.0</div>
                      </div>
                      <span className="font-mono text-[11px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                        SECURE
                      </span>
                    </div>

                    <div className="pt-2 text-[11px] font-mono text-neutral-400 text-center">
                      RUNS 100% ON-PREMISE VIA OFFICIAL REST APIS
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* PLATFORM ARCHITECTURE FILTER & GRID                          */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-1">
                // SYSTEM EXTENSIONS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09090b] tracking-tight">
                Production Extensions ({filteredPlugins.length})
              </h2>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
              {[
                { id: 'all', label: 'All Modules' },
                { id: 'shopify', label: 'Shopify' },
                { id: 'woocommerce', label: 'WooCommerce' },
                { id: 'magento', label: 'Magento 2' },
                { id: 'bigcommerce', label: 'BigCommerce' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePlatform(tab.id)}
                  className={`px-3.5 py-1.5 rounded-md font-mono text-xs font-bold uppercase transition-all cursor-pointer whitespace-nowrap ${
                    activePlatform === tab.id
                      ? 'bg-[#09090b] text-white'
                      : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {featured.map((plugin) => (
              <PluginCard key={plugin.slug} plugin={plugin} isEn={true} />
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
