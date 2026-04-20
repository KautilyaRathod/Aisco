# AISCO

React (Vite) frontend with a **PHP** backend API (MySQL + SMTP), suitable for **XAMPP** (Apache + MySQL + phpMyAdmin) on Windows or Linux with nginx + PHP-FPM.

## Quick start (frontend)

```bash
npm install
npm run dev
```

The app runs on port 5173 (or the next free port). In development, `/api/*` is proxied to Apache on port 80 (see `vite.config.ts`).

## Backend (PHP API)

1. Start **Apache** and **MySQL** in XAMPP (or your stack).
2. Create the `aisco` database and tables (see [`aisco.sql`](aisco.sql) or phpMyAdmin import).
3. In the `api/` folder:

   ```bash
   cd api
   composer install
   cp .env.example .env
   ```

   Edit `api/.env` with MySQL credentials and SMTP settings (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD`, etc.).

4. **Apache**: map the URL prefix `/api` to `api/public` (see [`api/README.md`](api/README.md) and [`api/apache-alias-example.conf`](api/apache-alias-example.conf)). Enable `mod_rewrite`.
5. Verify: open `http://localhost/api/health` — you should see JSON with `"status":"ok"`.

Form endpoints: `POST /api/quote`, `POST /api/contact`, `POST /api/inquiry` (same JSON contract as before).

## Production build

```bash
npm run build
```

Output is in `dist/`. Serve `dist/` with nginx (or Apache) and route `/api` to PHP (see [`DEPLOY_VPS.md`](DEPLOY_VPS.md) and [`nginx.conf.example`](nginx.conf.example)).

## Features

- Marketing site and forms (quote, contact, product inquiry).
- Stack: React, TypeScript, Vite, Tailwind CSS.
- API: PHP 8+, PDO, PHPMailer (Composer).
