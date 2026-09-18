import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CatalogView from '@/components/CatalogView';
import enPlugins from '@/data/en_plugins.json';

export const metadata = {
  title: 'Global Integration Extensions Catalog | WordPress.velar+',
  description: 'Production-ready extensions for Shopify, WooCommerce, Magento 2, and BigCommerce. Multi-channel sync, payments, and automation.',
};

export default function EnCatalogPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-[#f6f6f9]">
        <CatalogView plugins={enPlugins} isEn={true} />
      </main>
      <Footer />
    </>
  );
}
