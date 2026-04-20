// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';
import { verifyAuthCookie, COOKIE_NAME } from './lib/auth';

const PROTECTED_PREFIX = '/portfolio';

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, redirect } = context;

  // Solo proteger rutas bajo /portfolio
  if (!url.pathname.startsWith(PROTECTED_PREFIX)) {
    return next();
  }

  const token = cookies.get(COOKIE_NAME)?.value;
  const secret = import.meta.env.PORTFOLIO_AUTH_SECRET;

  if (token && secret && (await verifyAuthCookie(token, secret))) {
    return next();
  }

  // No autenticado → redirigir a /acceso con el destino original
  const redirectTo = encodeURIComponent(url.pathname + url.search);
  return redirect(`/acceso?redirect=${redirectTo}`);
});
