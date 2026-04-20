# AISCO PHP API

## Setup

1. Install dependencies (from this folder):

   ```bash
   composer install
   ```

2. Copy `.env.example` to `.env` and set MySQL and SMTP values.

3. **Apache (XAMPP)**  
   - Enable `mod_rewrite`.  
   - Map the URL prefix used by the frontend (default `/api`) to this directory’s `public` folder.

   **Option A — `Alias` (typical for XAMPP on port 80)**

   In `httpd.conf` or `httpd-vhosts.conf`:

   ```apache
   # Use the real path to this repository’s api/public folder on your machine.
   Alias /api "C:/xampp/htdocs/Work/Workability/AISCO/api/public"
   <Directory "C:/xampp/htdocs/Work/Workability/AISCO/api/public">
       AllowOverride All
       Require all granted
   </Directory>
   ```

   Then open `http://localhost/api/health` — you should see JSON `{"status":"ok",...}`.

   **Option B — site in a subfolder**

   If the API is served at `http://localhost/AISCO/api/...`, set in `api/.env`:

   ```env
   API_PATH_PREFIX=/AISCO/api
   ```

4. **Vite dev** (`npm run dev`): root [`vite.config.ts`](../vite.config.ts) registers a dev-server proxy for `/api` when you run `vite` (not gated on `NODE_ENV`, which is often unset on Windows). By default it forwards to `http://localhost` (Apache on port 80). Override the proxy target only if needed:

   ```env
   # Optional, in repo root .env — where Vite should forward /api (not the browser base URL)
   VITE_DEV_PROXY_TARGET=http://localhost
   ```

   Leave root **`VITE_API_URL`** unset so the browser calls same-origin `/api/...` and the proxy handles it. Apache must be running so `http://localhost/api/health` works before forms will work from `http://localhost:5173`.

## Verify connectivity

1. With XAMPP Apache started, open **`http://localhost/api/health`** in a browser. Expect JSON with `"status":"ok"`. For MySQL, use **`http://localhost/api/health?db=1`** — the `database` field should show `"ok":true` when `api/.env` credentials match your server.
2. If that fails, fix the **`Alias`** / `Directory` paths and `mod_rewrite` first; the Vite app cannot fix a missing Apache route.
3. Then run the frontend (`npm run dev`) and submit a form. A **404** on `http://localhost:5173/api/...` with an HTML body usually means the Vite proxy is still not forwarding (check you restarted the dev server after changing `vite.config.ts`).

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check (PHP up) |
| GET | `/api/health?db=1` | Same, plus MySQL connectivity via `Db::pdo()` |
| POST | `/api/quote` | Quote form |
| POST | `/api/contact` | Contact form |
| POST | `/api/inquiry` | Product inquiry |
| POST | `/api/test-email` | SMTP test (optional) |

Request/response JSON matches the former Express API.
