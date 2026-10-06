import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.dkmobilewash.com';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.querySelector(selector);
  if (el) {
    el.setAttribute('content', content);
  } else {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    el.setAttribute('content', content);
    document.head.appendChild(el);
  }
}

function setCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (link) {
    link.href = href;
  } else {
    link = document.createElement('link');
    link.rel = 'canonical';
    link.href = href;
    document.head.appendChild(link);
  }
}

function applyMeta(title: string, description: string, keywords: string | undefined, canonical: string | undefined, pathname: string, ogImage: string | undefined, ogType: string | undefined) {
  document.title = title;

  setMeta('name', 'description', description);
  setMeta('name', 'robots', 'index, follow');

  if (keywords) {
    setMeta('name', 'keywords', keywords);
  }

  const url = canonical || `${SITE_URL}${pathname === '/' ? '' : pathname}`;

  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:type', ogType || 'website');
  setMeta('property', 'og:site_name', 'DK Mobile Wash');

  if (ogImage) {
    setMeta('property', 'og:image', ogImage);
  }

  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);

  setCanonical(url);
}

export default function SEO({ title, description, keywords, canonical, ogImage, ogType }: SEOProps) {
  const { pathname } = useLocation();
  const lastApplied = useRef('');

  const key = `${pathname}::${title}`;
  if (lastApplied.current !== key) {
    lastApplied.current = key;
    applyMeta(title, description, keywords, canonical, pathname, ogImage, ogType);
  }

  return null;
}
