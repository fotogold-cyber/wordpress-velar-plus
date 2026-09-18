import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CatalogView from '@/components/CatalogView';
import ruPlugins from '@/data/ru_plugins.json';

export const metadata = {
  title: 'Каталог плагинов и модулей | WordPress.велар+',
  description: 'Большой выбор плагинов для WordPress и OpenCart: CRM-системы, платежные шлюзы, маркетплейсы Wildberries и Ozon, доставка СДЭК.',
};

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-[#f6f6f9]">
        <CatalogView plugins={ruPlugins} isEn={false} />
      </main>
      <Footer />
    </>
  );
}
