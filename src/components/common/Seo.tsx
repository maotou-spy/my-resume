import { Helmet } from 'react-helmet-async';
import { site } from '@/constants/site';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
}

export function Seo({ title, description = site.description, path = '/' }: SeoProps) {
  const fullTitle = title ? `${title} | ${site.shortTitle}` : site.title;
  const url = `${site.url}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site.shortTitle} />
      <meta property="og:locale" content={site.locale} />
      <meta property="og:image" content={`${site.url}/og-image.png`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${site.url}/og-image.png`} />
    </Helmet>
  );
}
