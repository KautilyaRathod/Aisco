# Email Configuration Guide

## 📧 SMTP Email Setup

Your contact form now sends automatic confirmation emails when someone submits the form!

### Gmail SMTP Setup

If you want to use Gmail for sending emails, follow these steps:

#### Step 1: Enable 2-Step Verification
1. Go to your Google Account: https://myaccount.google.com/security
2. Enable 2-Step Verification if you haven't already

#### Step 2: Generate App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" and "Other (Custom name)"
3. Enter "AISCO Contact Form"
4. Click "Generate"
5. Copy the 16-character password (without spaces)

#### Step 3: Update .env File
Edit the `.env` file in the project directory and update these values:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-actual-email@gmail.com
SMTP_PASSWORD=your-16-digit-app-password
SMTP_FROM_NAME=AISCO Team
CLIENT_URL=http://localhost:5173
```

**Important:** Use the app password (16 characters), NOT your regular Gmail password.

### Other Email Providers

#### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

#### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASSWORD=your-app-password
```

#### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASSWORD=your-password
```

### Testing the Email

1. Restart your server:
   ```bash
   npm run server
   ```

2. Submit the contact form on your website

3. Check the server console for:
   ```
   ✅ Confirmation email sent to: user@example.com
   ```

4. Check the user's email inbox for the confirmation email

### Email Template

The confirmation email includes:
- Professional AISCO branding
- Thank you message
- Complete inquiry details (name, email, phone, subject, message)
- Submission timestamp
- What happens next information

### Troubleshooting

#### Email Not Sending
- ✅ Check SMTP credentials in `.env`
- ✅ Verify app password is correct (for Gmail)
- ✅ Check firewall/antivirus blocking port 587
- ✅ Check server console for error messages

#### "Invalid login" Error
- Make sure you're using an App Password (Gmail)
- Verify 2-Step Verification is enabled (Gmail)
- Double-check username and password in `.env`

#### Emails Going to Spam
- The sender email domain should match your domain
- For production, use a professional email service (SendGrid, AWS SES, etc.)
- Configure SPF, DKIM, and DMARC records

### Production Deployment

For production, consider using:
- **SendGrid** (500 emails/day free tier)
- **AWS SES** (Very affordable)
- **Mailgun** (5,000 emails/month free tier)
- **Postmark** (100 emails/month free tier)

These services provide better deliverability and tracking.

