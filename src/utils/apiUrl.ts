/**
 * Join optional API origin with a path without duplicating slashes.
 * When VITE_API_URL is unset, returns a same-origin path for the Vite proxy.
 */
export function apiUrl(path: string): string {
  const raw = import.meta.env.VITE_API_URL ?? '';
  const base = String(raw).replace(/\/+$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return base ? `${base}${p}` : p;
}
