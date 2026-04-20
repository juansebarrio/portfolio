// src/lib/auth.ts
// HMAC-SHA256 cookie signing usando Web Crypto API (compatible con edge runtime de Vercel)

export const COOKIE_NAME = 'portfolio_auth';
export const COOKIE_MAX_AGE = 30 * 24 * 60 * 60; // 30 días en segundos

async function hmacSign(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return bufferToBase64Url(sig);
}

function bufferToBase64Url(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

/**
 * Crea un token firmado: "<timestamp>.<hmac>"
 */
export async function createAuthCookie(secret: string): Promise<string> {
  const ts = Math.floor(Date.now() / 1000).toString();
  const sig = await hmacSign(secret, ts);
  return `${ts}.${sig}`;
}

/**
 * Verifica que el token es válido y no expiró.
 */
export async function verifyAuthCookie(token: string, secret: string): Promise<boolean> {
  if (!token || !secret) return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;

  const [ts, sig] = parts;
  const tsNum = parseInt(ts, 10);
  if (Number.isNaN(tsNum)) return false;

  const nowSec = Math.floor(Date.now() / 1000);
  const age = nowSec - tsNum;
  if (age < 0 || age > COOKIE_MAX_AGE) return false;

  const expected = await hmacSign(secret, ts);
  return timingSafeEqual(sig, expected);
}
