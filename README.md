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

# Email Configuration (for form notifications)
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-digit-app-password
# Optional: Send emails to a different recipient (defaults to GMAIL_USER if not set)
GMAIL_RECIPIENT=recipient-email@gmail.com
```

3. **Email Setup (Gmail App Password)**:
   - Go to https://myaccount.google.com/apppasswords
   - Enable 2-Step Verification if not already enabled
   - Generate an App Password for "Mail" and "Other (Custom name)"
   - Copy the 16-character password and add it to `.env` as `GMAIL_APP_PASSWORD`
   - Add your Gmail address as `GMAIL_USER` (this account will send emails)
   - **Optional**: Add `GMAIL_RECIPIENT` if you want emails sent to a different address (defaults to `GMAIL_USER`)

4. Start the backend API:

```
node server.cjs
```

5. Use POST `/api/quote`, `/api/contact`, `/api/inquiry` to receive form submissions from frontend and store in MySQL tables.

**Email Notifications**: When users submit the "Quick Inquiry Form" (`/api/contact`) or "Quote Request Form" (`/api/quote`), an email notification with all form data will be automatically sent:
- **FROM**: `GMAIL_USER` (authenticated with `GMAIL_APP_PASSWORD`)
- **TO**: `GMAIL_RECIPIENT` if set, otherwise `GMAIL_USER` (default)
- **REPLY-TO**: Customer's email from the form (so you can reply directly)

**You must manually create the required tables in your database** (see structure in `server.js` or ask for CREATE TABLE statements).

