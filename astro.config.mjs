// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://juansebarrio.com',
  output: 'static',
  adapter: vercel(),
  redirects: {
    // Casos JS80 deprecados: los productos viven en sus sitios externos
    '/js80/cardiologia-barrio-scarano': 'https://consulcardiologico.vercel.app/',
    '/en/js80/cardiologia-barrio-scarano': 'https://consulcardiologico.vercel.app/',
    '/js80/turnero-digital': '/js80',
    '/en/js80/turnero-digital': '/en/js80',
  },
  integrations: [
    sitemap({
      // Fuera del sitemap: páginas utilitarias y casos bajo NDA (noindex)
      filter: (page) =>
        !/\/(acceso|port)\/?$/.test(page) &&
        !/\/portfolio\/(csat-semantico|pfm|rediseno-cuentas|upgrade)\/?$/.test(page),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-AR',
          en: 'en-US',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
