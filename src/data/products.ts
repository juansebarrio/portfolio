// Fuente de verdad única para los productos JS80 que muestran los menús
// (Layout desktop + mobile y LayoutJS80). Todos son enlaces externos.
export interface Product {
  key: string;
  href: string;
  labels: { es: string; en: string };
  featured?: boolean;
}

export const productLabel = (p: Product, isEnglish: boolean) =>
  p.labels[isEnglish ? 'en' : 'es'];

export const PRODUCTS: Product[] = [
  {
    key: 'aure',
    href: 'https://aure-ebon.vercel.app/',
    labels: { es: 'AURE Real Estate', en: 'AURE Real Estate' },
    featured: true,
  },
  {
    key: 'leads',
    href: 'https://www.js80.studio/proyectos/leads-tablero/',
    labels: { es: 'Tablero de leads', en: 'Leads Dashboard' },
  },
  {
    key: 'vidriera',
    href: 'https://www.js80.studio/vidriera',
    labels: { es: 'VidrierAI', en: 'VidrierAI' },
  },
  {
    key: 'cardio',
    href: 'https://consulcardiologico.vercel.app/',
    labels: { es: 'Cardiología B·S', en: 'Cardiología B·S' },
  },
  {
    key: 'aranda',
    href: 'https://institucionalmultiple.js80.studio/',
    labels: { es: 'Hospital Aranda', en: 'Hospital Aranda' },
  },
  {
    key: 'inmobiliaria',
    href: 'https://www.js80.studio/trabajo/inmobiliaria',
    labels: { es: 'Tablero para Inmobiliaria', en: 'Real Estate Dashboard' },
  },
];
