# AISCO - Frontend Only

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the frontend:
   ```bash
   npm run dev
   ```

The app will run on port 5173 (or another available port).

## Features
- Contact and quote forms (frontend only, no backend, no emails).
- Modern React, Vite, and Tailwind CSS stack.

---

This project is now frontend only. All backend (Node, server, database, email, API) logic has been removed for simple static/function hosting.

## Backend API (MySQL) Setup

1. Make sure XAMPP/MySQL service is running, and you have created a database called `aisco`.

2. Add a new `.env` file (at project root):

```
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=aisco
PORT=4000
```

3. Start the backend API:

```
node server.cjs
```

4. Use POST `/api/quote`, `/api/contact`, `/api/inquiry` to receive form submissions from frontend and store in MySQL tables.

**You must manually create the required tables in your database** (see structure in `server.js` or ask for CREATE TABLE statements).

