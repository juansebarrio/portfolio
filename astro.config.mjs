// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

/**
 * El adapter de Vercel compila cada redirect como regex exacta (`^/ruta$`),
 * pero las URLs viejas indexadas/compartidas llevan barra final. Este hook
 * relaja esas regex a `^/ruta/?$` en el config.json emitido.
 * @returns {import('astro').AstroIntegration}
 */
const redirectsTrailingSlash = () => ({
  name: 'redirects-trailing-slash',
  hooks: {
    'astro:build:done': () => {
      const p = '.vercel/output/config.json';
      if (!existsSync(p)) return;
      const cfg = JSON.parse(readFileSync(p, 'utf8'));
      for (const r of cfg.routes ?? []) {
        if (r.headers?.Location && typeof r.src === 'string' && r.src.endsWith('$') && !r.src.endsWith('/?$')) {
          r.src = r.src.replace(/\$$/, '/?$');
        }
      }
      writeFileSync(p, JSON.stringify(cfg));
    },
  },
});

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
    // Páginas retiradas cuyos links pueden seguir vivos en emails/chats.
    // /port era la entrada pre-autorizada para recruiters → conserva esa
    // función vía el token; /acceso era la página de contraseña → abre el gate.
    '/port': '/portfolio?acceso=reclutador',
    '/acceso': '/portfolio?unlock=1',
  },
  integrations: [
    redirectsTrailingSlash(),
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
