# 🚨 Important: Email Setup Required

## The Problem
You're using your **regular Gmail password** (`Priyanshi@25`), but **Gmail doesn't allow regular passwords** for SMTP. You need an **App Password**.

## The Solution (2 Minutes)

### Step 1: Get Your Gmail App Password

1. Go to: https://myaccount.google.com/apppasswords
   - (You must enable 2-Step Verification first if prompted)

2. Select:
   - **App**: Mail
   - **Device**: Other (Custom name)
   - **Name**: AISCO Contact Form
   - Click **Generate**

3. **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)

### Step 2: Update Your .env File

Open `.env` in the project folder and replace this line:

**Old (won't work):**
```env
SMTP_PASSWORD=Priyanshi@25
```

**New (replace with your App Password):**
```env
SMTP_PASSWORD=abcd-efgh-ijkl-mnop
```
*(Use the actual 16-character password from Google, remove spaces)*

### Step 3: Restart the Server

In Terminal 1 (stop current server with Ctrl+C, then):
```bash
npm run server
```

### Step 4: Test Again

1. Go to http://localhost:5173/contact
2. Fill the form with your email
3. Submit
4. Check your inbox!

---

## Alternative: Test Without Real Email

If you want to test without setting up Gmail, I can update the code to skip email sending temporarily.

## What Happens After Fix?

✅ Form data → Saved to PostgreSQL database
✅ Confirmation email → Sent to user's email
✅ Beautiful email template with inquiry details

---

**Need Help?** Just say "update email config" and I'll help you!

