import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#09090b] text-neutral-400 text-xs border-t border-neutral-800">
      
      {/* 4 Architectural Value Proposition Bento Blocks */}
      <div className="border-b border-neutral-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-lg bg-neutral-900/50 border border-neutral-800">
            <div className="font-mono text-emerald-400 font-bold mb-1">[01 // АВТОНОМНОСТЬ]</div>
            <div className="font-bold text-white text-sm mb-1">Без облачных серверов</div>
            <div className="text-neutral-400 text-[11px] leading-relaxed">
              Все данные и заказы обрабатываются напрямую на вашем хостинге без посредников.
            </div>
          </div>

          <div className="p-5 rounded-lg bg-neutral-900/50 border border-neutral-800">
            <div className="font-mono text-emerald-400 font-bold mb-1">[02 // ЭКОНОМИКА]</div>
            <div className="font-bold text-white text-sm mb-1">0 ₽ абонентской платы</div>
            <div className="text-neutral-400 text-[11px] leading-relaxed">
              Разовая лицензия навсегда. Никаких ежемесячных списаний за объемы трафика.
            </div>
          </div>

          <div className="p-5 rounded-lg bg-neutral-900/50 border border-neutral-800">
            <div className="font-mono text-emerald-400 font-bold mb-1">[03 // СКОРОСТЬ]</div>
            <div className="font-bold text-white text-sm mb-1">Выдача за 60 секунд</div>
            <div className="text-neutral-400 text-[11px] leading-relaxed">
              Автоматическая отправка архива с плагином и ключа лицензии сразу после оплаты.
            </div>
          </div>

          <div className="p-5 rounded-lg bg-neutral-900/50 border border-neutral-800">
            <div className="font-mono text-emerald-400 font-bold mb-1">[04 // ГАРАНТИЯ]</div>
            <div className="font-bold text-white text-sm mb-1">14 дней возврата</div>
            <div className="text-neutral-400 text-[11px] leading-relaxed">
              Полная гарантия совместимости и техническая поддержка штатных инженеров.
            </div>
          </div>
        </div>
      </div>

      {/* Main Structural Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="font-black text-xl text-white mb-2 tracking-tight">
              WORDPRESS<span className="text-neutral-500">.ВЕЛАР+</span>
            </div>
            <p className="text-[11px] text-neutral-500 leading-relaxed mb-4">
              Инженерная платформа готовых модулей интеграции для платформ WordPress, WooCommerce и OpenCart. Разработано в соответствии со стандартами GPLv2 и PSR-12.
            </p>
            <div className="font-mono text-[11px] text-neutral-400 space-y-1">
              <div>ENGINEERING SUPPORT: 24/7</div>
              <div>EMAIL: help@velarplus.ru</div>
              <div>TELEGRAM: @velarplus_support</div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-mono font-bold text-white text-xs uppercase tracking-wider mb-4">
              // НАВИГАЦИЯ
            </div>
            <ul className="space-y-2 text-xs">
              <li><Link href="/catalog" className="hover:text-white transition-colors">Реестр всех модулей</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Архитектурная база знаний</Link></li>
              <li><Link href="/blog/podklyuchenie-yookassa-k-wordpress" className="hover:text-white transition-colors">Интеграция ЮKassa и 54-ФЗ</Link></li>
              <li><Link href="/blog/uskorenie-wordpress-keshirovanie" className="hover:text-white transition-colors">Оптимизация производительности</Link></li>
              <li><Link href="/en" className="hover:text-white transition-colors">Global English Marketplace</Link></li>
            </ul>
          </div>

          {/* Popular Solutions */}
          <div>
            <div className="font-mono font-bold text-white text-xs uppercase tracking-wider mb-4">
              // ИНТЕГРАЦИИ
            </div>
            <ul className="space-y-2 text-xs">
              <li><Link href="/product/amocrm-and-contact-form-7-integration" className="hover:text-white transition-colors">amoCRM для Contact Form 7</Link></li>
              <li><Link href="/product/woocommerce-and-bitrix24-integration" className="hover:text-white transition-colors">Битрикс24 для WooCommerce</Link></li>
              <li><Link href="/product/woocommerce-and-wildberries-integration" className="hover:text-white transition-colors">Wildberries API Синхронизация</Link></li>
              <li><Link href="/product/integrations-ozon-and-opencart" className="hover:text-white transition-colors">Ozon Seller для OpenCart</Link></li>
              <li><Link href="/product/integrations-cdek-and-woocommerce" className="hover:text-white transition-colors">СДЭК 2.0 Калькулятор и ПВЗ</Link></li>
            </ul>
          </div>

          {/* Compliance & Security */}
          <div>
            <div className="font-mono font-bold text-white text-xs uppercase tracking-wider mb-4">
              // БЕЗОПАСНОСТЬ И ПРАВО
            </div>
            <p className="text-[11px] text-neutral-500 mb-3 leading-relaxed">
              Платежные операции проводятся через шлюз ЮKassa с шифрованием TLS 1.3 и отправкой фискальных чеков согласно 54-ФЗ.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px] font-bold text-neutral-300">
              <span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800">МИР</span>
              <span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800">СБП</span>
              <span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800">ЮKASSA</span>
              <span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800">54-ФЗ</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-600">
          <div>
            &copy; 2026 WORDPRESS.ВЕЛАР+. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/catalog" className="hover:text-white transition-colors">КАТАЛОГ</Link>
            <Link href="/blog" className="hover:text-white transition-colors">ЖУРНАЛ</Link>
            <Link href="/en" className="hover:text-white transition-colors">GLOBAL [EN]</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
