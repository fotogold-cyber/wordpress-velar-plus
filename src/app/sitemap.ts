import type { MetadataRoute } from 'next';
import ruPlugins from '@/data/ru_plugins.json';
import enPlugins from '@/data/en_plugins.json';
import ruArticles from '@/data/blog_articles.json';
import enArticles from '@/data/en_blog_articles.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://velarplus.ru';
  const lastModified = new Date();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/catalog`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/catalog`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  // RU Product routes (57 plugins)
  const ruProductRoutes: MetadataRoute.Sitemap = ruPlugins.map((plugin) => ({
    url: `${baseUrl}/product/${plugin.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // EN Product routes (20 plugins)
  const enProductRoutes: MetadataRoute.Sitemap = enPlugins.map((plugin) => ({
    url: `${baseUrl}/en/product/${plugin.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // RU Blog routes (12 articles)
  const ruBlogRoutes: MetadataRoute.Sitemap = ruArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // EN Blog routes (6 articles)
  const enBlogRoutes: MetadataRoute.Sitemap = enArticles.map((article) => ({
    url: `${baseUrl}/en/blog/${article.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...ruProductRoutes,
    ...enProductRoutes,
    ...ruBlogRoutes,
    ...enBlogRoutes,
  ];
}
