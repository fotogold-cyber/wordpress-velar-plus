import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const manrope = Manrope({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const baseUrl = 'https://velarplus.ru';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'WordPress.велар+ // Инженерный маркетплейс интеграций для E-Commerce',
    template: '%s | WordPress.велар+',
  },
  description: 'Профессиональные модули синхронизации для WordPress, WooCommerce и OpenCart. CRM, маркетплейсы, эквайринг, логистика. Чистая архитектура, официальные API, пожизненные лицензии.',
  keywords: [
    'плагины wordpress',
    'модули woocommerce',
    'интеграция amocrm wordpress',
    'интеграция битрикс24 woocommerce',
    'плагин wildberries woocommerce',
    'плагин ozon opencart',
    'эквайринг юkassa contact form 7',
    'калькулятор сдэк woocommerce',
  ],
  authors: [{ name: 'WordPress.велар+' }],
  creator: 'WordPress.велар+',
  publisher: 'WordPress.велар+',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'ru-RU': baseUrl,
      'en-US': `${baseUrl}/en`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    alternateLocale: 'en_US',
    url: baseUrl,
    siteName: 'WordPress.велар+',
    title: 'WordPress.велар+ // Инженерный маркетплейс интеграций',
    description: 'Готовые модули для связи интернет-магазинов с CRM, маркетплейсами, эквайрингом и доставкой.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress.велар+ // Инженерный маркетплейс интеграций',
    description: 'Готовые модули для связи интернет-магазинов с CRM, маркетплейсами, эквайрингом и доставкой.',
  },
  verification: {
    google: 'SO0ttZo-ZiY3zeO_RnJXTwaAA9ncZsNq-pGbnvxiAcA',
    yandex: 'd63317b8f21d0348',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WordPress.велар+',
    url: baseUrl,
    logo: `${baseUrl}/favicon.ico`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'help@velarplus.ru',
      contactType: 'customer support',
      availableLanguage: ['Russian', 'English'],
    },
  };

  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'WordPress.велар+',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/catalog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="ru" className={manrope.variable}>
      <head>
        <meta name="google-site-verification" content="SO0ttZo-ZiY3zeO_RnJXTwaAA9ncZsNq-pGbnvxiAcA" />
        <meta name="yandex-verification" content="d63317b8f21d0348" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className={`${manrope.className} bg-[#fbfbfd] text-[#09090b] min-h-screen flex flex-col antialiased selection:bg-[#09090b] selection:text-white`}>
        {children}

        {/* Счётчик посетителей (асинхронный, без задержки загрузки страницы) */}
        <Script
          id="visitor-stat-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `fetch('https://v0-stat-cloud.vercel.app/api/track', { mode: 'no-cors' }).catch(() => {});`,
          }}
        />
      </body>
    </html>
  );
}
