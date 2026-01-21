const nodemailer = require('nodemailer');

// Create reusable transporter object using SMTP
const createTransporter = () => {
  const port = parseInt(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  
  console.log(`   🔧 Creating SMTP transporter...`);
  console.log(`      Host: ${process.env.SMTP_HOST}`);
  console.log(`      Port: ${port}`);
  console.log(`      Secure: ${secure} (${secure ? 'SSL' : 'STARTTLS'})`);
  console.log(`      User: ${process.env.SMTP_USER}`);
  console.log(`      Password: ${process.env.SMTP_PASSWORD ? '***configured***' : 'NOT SET'}`);
  
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: port,
    secure: secure, // true for 465, false for other ports (STARTTLS)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    },
    // For port 587 (STARTTLS), ensure TLS is enabled
    tls: {
      rejectUnauthorized: false // Allow self-signed certificates if needed
    },
    // Enable debug logging
    debug: true,
    logger: true
  });
};

// Format form data into readable HTML email
const formatQuoteRequestEmail = (formData) => {
  const requiredDiameter = Array.isArray(formData.requiredDiameter) 
    ? formData.requiredDiameter.join(', ') 
    : formData.requiredDiameter || 'N/A';

  return `
    <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
      New Quote Request Form Submission
    </h2>
    
    <div style="margin-top: 20px; line-height: 1.8;">
      <h3 style="color: #374151; margin-top: 15px;">Contact Information:</h3>
      <p><strong>Full Name:</strong> ${formData.fullName || 'N/A'}</p>
      <p><strong>Company Name:</strong> ${formData.companyName || 'N/A'}</p>
      <p><strong>Email Address:</strong> ${formData.emailAddress || 'N/A'}</p>
      <p><strong>Phone Number:</strong> ${formData.countryCode || ''} ${formData.phoneNumber || 'N/A'}</p>
      ${formData.whatsappNumber ? `<p><strong>WhatsApp:</strong> ${formData.whatsappCountryCode || ''} ${formData.whatsappNumber}</p>` : ''}
    </div>

    <div style="margin-top: 20px; line-height: 1.8;">
      <h3 style="color: #374151; margin-top: 15px;">Project Details:</h3>
      <p><strong>Project Location:</strong> ${formData.projectLocation || 'N/A'}</p>
      <p><strong>Product Type:</strong> ${formData.productType || 'N/A'}</p>
      <p><strong>Quantity Range:</strong> ${formData.quantityRange || 'N/A'}</p>
      <p><strong>Required Diameter:</strong> ${requiredDiameter}</p>
      <p><strong>Project Timeline:</strong> ${formData.projectTimeline || 'N/A'}</p>
      <p><strong>Delivery Required:</strong> ${formData.deliveryRequired ? 'Yes' : 'No'}</p>
      ${formData.deliveryLocation ? `<p><strong>Delivery Location:</strong> ${formData.deliveryLocation}</p>` : ''}
    </div>

    ${formData.message ? `
    <div style="margin-top: 20px;">
      <h3 style="color: #374151; margin-top: 15px;">Additional Message:</h3>
      <p style="background: #f3f4f6; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${formData.message}</p>
    </div>
    ` : ''}

    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
      <p>Submitted at: ${new Date().toLocaleString()}</p>
    </div>
  `;
};

const formatContactInquiryEmail = (formData) => {
  return `
    <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
      New Quick Inquiry Form Submission
    </h2>
    
    <div style="margin-top: 20px; line-height: 1.8;">
      <h3 style="color: #374151; margin-top: 15px;">Contact Information:</h3>
      <p><strong>Full Name:</strong> ${formData.fullName || 'N/A'}</p>
      ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
      <p><strong>Email Address:</strong> ${formData.email || 'N/A'}</p>
      <p><strong>Phone Number:</strong> ${formData.countryCode || ''} ${formData.phone || 'N/A'}</p>
      <p><strong>Subject:</strong> ${formData.subject || 'N/A'}</p>
    </div>

    <div style="margin-top: 20px;">
      <h3 style="color: #374151; margin-top: 15px;">Message:</h3>
      <p style="background: #f3f4f6; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${formData.message || 'N/A'}</p>
    </div>

    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
      <p>Submitted at: ${new Date().toLocaleString()}</p>
    </div>
  `;
};

// Send email for Quote Request
const sendQuoteRequestEmail = async (formData) => {
  console.log(`\n📧 ========== EMAIL SERVICE: SENDING QUOTE REQUEST ==========`);
  const startTime = Date.now();
  
  try {
    // Check if email credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD || !process.env.SMTP_HOST) {
      console.warn('❌ Email credentials not configured. Skipping email send.');
      return { success: false, error: 'Email credentials not configured' };
    }

    const transporter = createTransporter();
    
    // Verify connection first
    try {
      await transporter.verify();
      console.log(`   ✅ SMTP connection verified`);
    } catch (verifyError) {
      console.error(`   ❌ SMTP verification failed: ${verifyError.message}`);
      throw verifyError;
    }
    
    // Use SMTP_RECIPIENT if set, otherwise default to SMTP_USER
    const recipientEmail = process.env.SMTP_RECIPIENT || process.env.SMTP_USER;

    const mailOptions = {
      from: `"AISCO Website" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: formData.emailAddress || process.env.SMTP_USER,
      subject: `New Quote Request from ${formData.fullName || 'Customer'}`,
      html: formatQuoteRequestEmail(formData)
    };

    console.log(`   Sending to: ${recipientEmail}`);
    const info = await transporter.sendMail(mailOptions);
    const duration = Date.now() - startTime;
    
    console.log(`✅ Quote request email sent in ${duration}ms - Message ID: ${info.messageId}`);
    console.log(`===============================================\n`);
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`❌ Error sending quote request email after ${duration}ms: ${error.message}`);
    console.log(`===============================================\n`);
    return { success: false, error: error.message };
  }
};

// Send email for Contact/Quick Inquiry
const sendContactInquiryEmail = async (formData) => {
  console.log(`\n📧 ========== EMAIL SERVICE: SENDING EMAIL ==========`);
  const startTime = Date.now();
  
  try {
    // Check if email credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD || !process.env.SMTP_HOST) {
      console.warn('❌ Email credentials not configured. Skipping email send.');
      console.log(`   Missing: ${!process.env.SMTP_HOST ? 'SMTP_HOST ' : ''}${!process.env.SMTP_USER ? 'SMTP_USER ' : ''}${!process.env.SMTP_PASSWORD ? 'SMTP_PASSWORD' : ''}`);
      return { success: false, error: 'Email credentials not configured' };
    }

    console.log(`\n🔌 Step 1: Creating SMTP transporter...`);
    const transporter = createTransporter();
    
    console.log(`\n🔍 Step 2: Verifying SMTP connection...`);
    try {
      await transporter.verify();
      console.log(`   ✅ SMTP connection verified successfully!`);
    } catch (verifyError) {
      console.error(`   ❌ SMTP verification FAILED:`);
      console.error(`      Error: ${verifyError.message}`);
      if (verifyError.code) {
        console.error(`      Error Code: ${verifyError.code}`);
      }
      throw verifyError;
    }
    
    // Use SMTP_RECIPIENT if set, otherwise use formData.email or default to SMTP_USER
    const recipientEmail = formData.email || process.env.SMTP_RECIPIENT || process.env.SMTP_USER;
    
    console.log(`\n📝 Step 3: Preparing email message...`);
    const mailOptions = {
      from: `"AISCO Website" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: formData.email || process.env.SMTP_USER,
      subject: `New Quick Inquiry: ${formData.subject || 'No Subject'}`,
      html: formatContactInquiryEmail(formData)
    };
    
    console.log(`   From: ${mailOptions.from}`);
    console.log(`   To: ${mailOptions.to}`);
    console.log(`   Reply-To: ${mailOptions.replyTo}`);
    console.log(`   Subject: ${mailOptions.subject}`);
    
    console.log(`\n📤 Step 4: Sending email via SMTP server...`);
    const sendStartTime = Date.now();
    const info = await transporter.sendMail(mailOptions);
    const sendDuration = Date.now() - sendStartTime;
    
    const totalDuration = Date.now() - startTime;
    console.log(`\n✅ EMAIL SENT SUCCESSFULLY!`);
    console.log(`   Message ID: ${info.messageId || 'N/A'}`);
    console.log(`   Response: ${info.response || 'N/A'}`);
    console.log(`   Accepted: ${info.accepted ? info.accepted.join(', ') : 'N/A'}`);
    console.log(`   Rejected: ${info.rejected ? info.rejected.join(', ') : 'None'}`);
    console.log(`   Send Duration: ${sendDuration}ms`);
    console.log(`   Total Duration: ${totalDuration}ms`);
    console.log(`===============================================\n`);
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    const totalDuration = Date.now() - startTime;
    console.error(`\n❌ EMAIL SENDING FAILED after ${totalDuration}ms`);
    console.error(`   Error Type: ${error.constructor.name}`);
    console.error(`   Error Message: ${error.message}`);
    if (error.code) {
      console.error(`   Error Code: ${error.code}`);
    }
    if (error.command) {
      console.error(`   Failed Command: ${error.command}`);
    }
    if (error.response) {
      console.error(`   SMTP Response: ${error.response}`);
    }
    if (error.responseCode) {
      console.error(`   SMTP Response Code: ${error.responseCode}`);
    }
    if (error.stack) {
      console.error(`   Stack Trace:\n${error.stack}`);
    }
    console.log(`===============================================\n`);
    return { success: false, error: error.message };
  }
};

module.exports = {
  sendQuoteRequestEmail,
  sendContactInquiryEmail
};

