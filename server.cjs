require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const { sendQuoteRequestEmail, sendContactInquiryEmail } = require('./emailService.cjs');

const app = express();
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Trust proxy (for nginx reverse proxy)
app.set('trust proxy', true);

// CORS configuration for production
const corsOptions = {
  origin: process.env.CLIENT_URL || (NODE_ENV === 'production' ? false : 'http://localhost:5173'),
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// Serve static files in production (if serving frontend from same server)
if (NODE_ENV === 'production' && process.env.SERVE_STATIC === 'true') {
  app.use(express.static(path.join(__dirname, 'dist')));
}

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'aisco'
});

db.connect(err => {
  if (err) {
    console.error('DB connection error:', err);
    process.exit(1);
  }
  console.log('MySQL connected.');
});

// Quote Form endpoint
app.post('/api/quote', (req, res) => {
  const q = req.body;
  const sql = `INSERT INTO quote_requests (fullName, companyName, countryCode, phoneNumber, whatsappCountryCode, whatsappNumber, emailAddress, projectLocation, productType, quantityRange, requiredDiameter, deliveryRequired, deliveryLocation, projectTimeline, message, agreeToTerms, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`;
  db.query(sql, [
    q.fullName, q.companyName, q.countryCode, q.phoneNumber, q.whatsappCountryCode, q.whatsappNumber, q.emailAddress, q.projectLocation, q.productType, q.quantityRange, Array.isArray(q.requiredDiameter) ? q.requiredDiameter.join(',') : '', q.deliveryRequired, q.deliveryLocation, q.projectTimeline, q.message, q.agreeToTerms
  ], async (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    
    // Send email notification (non-blocking - don't fail request if email fails)
    sendQuoteRequestEmail(q).catch(emailErr => {
      console.error('Failed to send quote request email:', emailErr);
    });
    
    res.json({ success: true, id: result.insertId });
  });
});

// Contact Form endpoint
app.post('/api/contact', (req, res) => {
  const c = req.body;
  const sql = `INSERT INTO contact_inquiries (fullName, company, countryCode, phone, email, subject, message, agreeToPrivacy, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`;
  db.query(sql, [
    c.fullName, c.company, c.countryCode, c.phone, c.email, c.subject, c.message, c.agreeToPrivacy
  ], async (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    
    // Send email notification (non-blocking - don't fail request if email fails)
    sendContactInquiryEmail(c).catch(emailErr => {
      console.error('Failed to send contact inquiry email:', emailErr);
    });
    
    res.json({ success: true, id: result.insertId });
  });
});

// Product Inquiry endpoint -> save into quote_requests
app.post('/api/inquiry', (req, res) => {
  const p = req.body;
  const sql = `INSERT INTO quote_requests (fullName, companyName, countryCode, phoneNumber, whatsappCountryCode, whatsappNumber, emailAddress, projectLocation, productType, quantityRange, requiredDiameter, deliveryRequired, deliveryLocation, projectTimeline, message, agreeToTerms, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`;
  db.query(sql, [
    p.name || '',                 // fullName
    p.company || '',              // companyName
    '',                           // countryCode (not provided in product inquiry)
    p.phone || '',                // phoneNumber
    null,                         // whatsappCountryCode
    null,                         // whatsappNumber
    p.email || '',                // emailAddress
    p.deliveryLocation || '',     // projectLocation (best fit)
    p.projectType || '',          // productType (best fit)
    p.quantity || '',             // quantityRange (best fit)
    p.rebarDiameter || '',        // requiredDiameter (single value)
    0,                            // deliveryRequired (unknown -> false)
    p.deliveryLocation || '',     // deliveryLocation
    p.timeline || '',             // projectTimeline
    p.message || '',              // message
    1                             // agreeToTerms (treat as true to satisfy NOT NULL)
  ], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, id: result.insertId });
  });
});

// Helper function to check email configuration and log status
const checkEmailConfiguration = () => {
  console.log('\n📧 ========== EMAIL CONFIGURATION CHECK ==========');
  
  const hasHost = !!process.env.SMTP_HOST;
  const hasUser = !!process.env.SMTP_USER;
  const hasPassword = !!process.env.SMTP_PASSWORD;
  const hasPort = !!process.env.SMTP_PORT;
  
  console.log(`📋 SMTP_HOST: ${hasHost ? '✅ Configured' : '❌ Missing'} ${hasHost ? `(${process.env.SMTP_HOST})` : ''}`);
  console.log(`📋 SMTP_PORT: ${hasPort ? '✅ Configured' : '⚠️  Using default'} ${hasPort ? `(${process.env.SMTP_PORT})` : '(465)'}`);
  console.log(`📋 SMTP_USER: ${hasUser ? '✅ Configured' : '❌ Missing'} ${hasUser ? `(${process.env.SMTP_USER})` : ''}`);
  console.log(`📋 SMTP_PASSWORD: ${hasPassword ? '✅ Configured' : '❌ Missing'} ${hasPassword ? '(***hidden***)' : ''}`);
  console.log(`📋 SMTP_RECIPIENT: ${process.env.SMTP_RECIPIENT ? `✅ Set (${process.env.SMTP_RECIPIENT})` : '⚠️  Not set (will use SMTP_USER)'}`);
  console.log(`📋 SMTP_SECURE: ${process.env.SMTP_SECURE || 'auto'}`);
  
  const isConfigured = hasHost && hasUser && hasPassword;
  console.log(`\n${isConfigured ? '✅ EMAIL IS CONFIGURED' : '❌ EMAIL IS NOT FULLY CONFIGURED'}`);
  console.log('===============================================\n');
  
  return {
    isConfigured,
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || '465',
    user: process.env.SMTP_USER,
    hasPassword,
    recipient: process.env.SMTP_RECIPIENT || process.env.SMTP_USER
  };
};

// Test Email endpoint (no DB write, just sends a test email)
app.post('/api/test-email', async (req, res) => {
  const requestId = Date.now();
  const timestamp = new Date().toISOString();
  
  console.log(`\n🔔 [${timestamp}] [Request #${requestId}] Test Email API Called`);
  console.log(`📍 Request Body:`, JSON.stringify(req.body || {}, null, 2));
  
  try {
    // Check email configuration first
    console.log(`\n🔍 [Request #${requestId}] Checking email configuration...`);
    const config = checkEmailConfiguration();
    
    if (!config.isConfigured) {
      console.error(`❌ [Request #${requestId}] Email configuration incomplete - cannot send test email`);
      return res.status(400).json({ 
        success: false, 
        error: 'Email configuration incomplete. Please configure SMTP_HOST, SMTP_USER, and SMTP_PASSWORD in .env file',
        configStatus: {
          hasHost: !!config.host,
          hasUser: !!config.user,
          hasPassword: config.hasPassword,
          hasPort: !!config.port
        }
      });
    }
    
    const { toEmail, subject, message } = req.body || {};
    const recipientEmail = toEmail || config.recipient;
    
    console.log(`\n📤 [Request #${requestId}] Preparing to send test email...`);
    console.log(`   From: ${config.user}`);
    console.log(`   To: ${recipientEmail}`);
    console.log(`   Subject: ${subject || 'AISCO Test Email from API'}`);
    
    // Build a minimal formData object compatible with sendContactInquiryEmail
    const formData = {
      fullName: 'Test User',
      company: 'AISCO Test',
      countryCode: '',
      phone: '',
      email: recipientEmail,
      subject: subject || 'AISCO Test Email from API',
      message: message || 'This is a test email sent via the /api/test-email endpoint.'
    };

    console.log(`\n🚀 [Request #${requestId}] Attempting to send email...`);
    const sendStartTime = Date.now();
    
    const result = await sendContactInquiryEmail(formData);
    
    const sendDuration = Date.now() - sendStartTime;
    
    if (!result.success) {
      console.error(`\n❌ [Request #${requestId}] Email sending FAILED after ${sendDuration}ms`);
      console.error(`   Error: ${result.error || 'Unknown error'}`);
      console.log(`\n✅ [Request #${requestId}] Request completed with error\n`);
      
      return res.status(500).json({ 
        success: false, 
        error: result.error || 'Failed to send test email',
        duration: `${sendDuration}ms`
      });
    }

    console.log(`\n✅ [Request #${requestId}] Email sent SUCCESSFULLY in ${sendDuration}ms`);
    console.log(`   Message ID: ${result.messageId || 'N/A'}`);
    console.log(`   Recipient: ${recipientEmail}`);
    console.log(`\n✅ [Request #${requestId}] Request completed successfully\n`);
    
    res.json({
      success: true,
      message: 'Test email sent successfully',
      messageId: result.messageId,
      recipient: recipientEmail,
      duration: `${sendDuration}ms`,
      timestamp
    });
  } catch (error) {
    console.error(`\n💥 [Request #${requestId}] EXCEPTION in test-email endpoint:`);
    console.error(`   Error Type: ${error.constructor.name}`);
    console.error(`   Error Message: ${error.message}`);
    if (error.stack) {
      console.error(`   Stack Trace:\n${error.stack}`);
    }
    console.log(`\n✅ [Request #${requestId}] Request completed with exception\n`);
    
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Internal server error',
      timestamp
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server - listen on all interfaces for VPS deployment
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
  if (NODE_ENV === 'production') {
    console.log('Production mode - ensure nginx is configured correctly');
  }
});


