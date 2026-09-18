import Link from 'next/link';

interface PluginCardProps {
  plugin: {
    slug: string;
    name: string;
    description: string;
    category: string;
    price_rub: number;
    platform: string;
    version: string;
    bonus?: number;
  };
  isEn?: boolean;
}

export default function PluginCard({ plugin, isEn = false }: PluginCardProps) {
  const productUrl = isEn ? `/en/product/${plugin.slug}` : `/product/${plugin.slug}`;
  
  // Calculate original price comparison
  const originalPrice = Math.round(plugin.price_rub * 1.4 / 100) * 100;
  const discountPercent = Math.round(((originalPrice - plugin.price_rub) / originalPrice) * 100);

  // Generate deterministic technical metrics
  const charSum = plugin.slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const latency = 8 + (charSum % 15);
  const version = plugin.version || 'v2.4.0';

  // Determine category badge color
  let techTag = 'REST API';
  if (plugin.slug.includes('crm')) techTag = 'CRM SYNC';
  if (plugin.slug.includes('pay') || plugin.slug.includes('kassa')) techTag = '54-ФЗ / TLS 1.3';
  if (plugin.slug.includes('wildberries') || plugin.slug.includes('ozon')) techTag = 'MARKETPLACE API';
  if (plugin.slug.includes('cdek') || plugin.slug.includes('delivery')) techTag = 'CALC & PVZ';

  return (
    <div className="bento-card rounded-xl p-5 flex flex-col justify-between group relative bg-white">
      
      {/* Top Header Row with Technical Badges */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>{plugin.platform}</span>
            <span className="text-neutral-300">/</span>
            <span>{version}</span>
          </div>

          <span className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded border border-neutral-200 bg-neutral-50 text-neutral-600">
            -{discountPercent}%
          </span>
        </div>

        {/* Accent Technical Rectangular Container */}
        <Link href={productUrl} className="block mb-4">
          <div className="rounded-lg bg-neutral-950 p-4 text-white relative overflow-hidden border border-neutral-800 group-hover:border-neutral-700 transition-colors">
            {/* Background Grid Pattern inside card */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-md bg-white/10 border border-white/15 flex items-center justify-center font-mono font-bold text-xs text-white">
                  {plugin.platform.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                    {techTag}
                  </div>
                  <div className="font-mono text-[10px] text-emerald-400">
                    LATENCY: ~{latency}ms
                  </div>
                </div>
              </div>

              <div className="text-neutral-500 group-hover:text-white transition-colors text-xs font-mono">
                [DETAILS →]
              </div>
            </div>
          </div>
        </Link>

        {/* Title */}
        <Link href={productUrl} className="block mb-2">
          <h3 className="font-bold text-base text-[#09090b] group-hover:text-neutral-700 transition-colors line-clamp-2 leading-snug">
            {plugin.name}
          </h3>
        </Link>

        {/* Technical Description */}
        <p className="text-neutral-500 text-xs line-clamp-2 leading-relaxed mb-4">
          {plugin.description}
        </p>
      </div>

      {/* Bottom Architectural Pricing & Action Container */}
      <div className="pt-3.5 border-t border-neutral-100 mt-auto">
        <div className="flex items-end justify-between gap-3">
          
          {/* Price Block */}
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-black text-xl text-[#09090b] tracking-tight">
                {plugin.price_rub.toLocaleString('ru-RU')} ₽
              </span>
              <span className="text-xs text-neutral-400 line-through font-mono">
                {originalPrice.toLocaleString('ru-RU')} ₽
              </span>
            </div>
            <div className="font-mono text-[10px] text-emerald-600 font-semibold mt-0.5">
              ✓ МГНОВЕННАЯ ВЫДАЧА НА EMAIL
            </div>
          </div>

          {/* Action CTA Button */}
          <Link
            href={productUrl}
            className="px-3.5 py-2 rounded-lg bg-[#09090b] hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1 group-hover:px-4"
          >
            <span>{isEn ? 'Buy' : 'Купить'}</span>
            <span className="text-neutral-400 group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>

        </div>
      </div>

    </div>
  );
}
