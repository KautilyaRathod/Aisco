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


