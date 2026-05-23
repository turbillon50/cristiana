import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://comunidad-doce.vercel.app';
  const now = new Date();
  const paths = ['', '/welcome', '/login', '/dashboard', '/formacion', '/personas', '/crear', '/mas'];
  return paths.map((p) => ({
    url: `${base}${p || '/'}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : 0.7,
  }));
}
