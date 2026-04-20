# Deployment Changes Summary

## Stack

- **Frontend**: React + Vite (unchanged); production build is static files under `dist/`.
- **Backend API**: **PHP** (`api/public/index.php` + Composer: PHPMailer, vlucas/phpdotenv), **not** Node/Express.
- **Database**: MySQL — same tables as `aisco.sql`.

## Frontend API configuration

- `ContactForm.tsx`, `QuoteForm.tsx`, `ProductInquiry.tsx` use `VITE_API_URL` or empty string (relative `/api/...`).
- Development: Vite proxies `/api` to `http://localhost` (Apache/XAMPP on port 80).

## Vite (`vite.config.ts`)

- Dev proxy: `/api` → `http://localhost` (PHP), not port 4000.

## Environment

- Root `.env.example`: optional `VITE_API_URL`; PHP settings live in **`api/.env`** (see `api/.env.example`).

## Nginx (`nginx.conf.example`)

- `/api` is handled by **PHP-FPM** via `fastcgi_param SCRIPT_FILENAME` → `api/public/index.php`.

## Guides

- **`DEPLOY_VPS.md`**: nginx + PHP-FPM + MySQL + `composer install` in `api/`.
- **`api/README.md`**: XAMPP / Apache `Alias` for `/api`.

## Health check

```bash
curl http://localhost/api/health
```

(On production, use your domain and HTTPS as appropriate.)
