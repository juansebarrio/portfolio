// src/pages/api/login.ts
export const prerender = false;

import type { APIRoute } from 'astro';
import { createAuthCookie, COOKIE_NAME, COOKIE_MAX_AGE } from '../../lib/auth';

export const POST: APIRoute = async ({ request, redirect, cookies }) => {
  const form = await request.formData();
  const password = form.get('password')?.toString() ?? '';
  const requestedRedirect = form.get('redirect')?.toString() || '/portfolio';

  // Solo aceptar redirects a rutas relativas internas (previene open redirects)
  const safeRedirect =
    requestedRedirect.startsWith('/') && !requestedRedirect.startsWith('//')
      ? requestedRedirect
      : '/portfolio';

  const expected = import.meta.env.PORTFOLIO_PASSWORD;
  const secret = import.meta.env.PORTFOLIO_AUTH_SECRET;

  if (!expected || !secret) {
    return new Response('Server misconfigured: missing env vars', { status: 500 });
  }

  if (password !== expected) {
    return redirect(
      `/acceso?error=1&redirect=${encodeURIComponent(safeRedirect)}`,
      303,
    );
  }

  const token = await createAuthCookie(secret);
  cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    path: '/',
    maxAge: COOKIE_MAX_AGE,
  });

  return redirect(safeRedirect, 303);
};
