require('dotenv').config();
const nodemailer = require('nodemailer');

// Create SMTP transporter
const createTransporter = () => {
  // Handle password with special characters
  const password = process.env.SMTP_PASSWORD;
  const port = parseInt(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  
  const config = {
    host: process.env.SMTP_HOST,
    port: port,
    secure: secure, // true for 465, false for other ports (STARTTLS)
    auth: {
      user: process.env.SMTP_USER,
      pass: password
    },
    // For port 587 (STARTTLS), ensure TLS is enabled
    tls: {
      rejectUnauthorized: false // Allow self-signed certificates if needed
    },
    // Try AUTH LOGIN method (some servers prefer this)
    authMethod: 'LOGIN',
    // Add debug option for troubleshooting
    debug: true,
    logger: true
  };
  
  console.log('   Password length:', password ? password.length : 0);
  console.log('   Password starts with:', password ? password.substring(0, 2) + '...' : 'N/A');
  console.log('   Password value (first 4 chars):', password ? password.substring(0, 4) + '***' : 'N/A');
  console.log('   Connection type:', secure ? 'SSL' : 'STARTTLS');
  
  return nodemailer.createTransport(config);
};

// Test email function
const sendTestEmail = async () => {
  try {
    // Check if email credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD || !process.env.SMTP_HOST) {
      console.error('❌ Email credentials not configured in .env file');
      console.log('\nRequired environment variables:');
      console.log('  - SMTP_HOST');
      console.log('  - SMTP_PORT');
      console.log('  - SMTP_USER');
      console.log('  - SMTP_PASSWORD');
      console.log('  - SMTP_SECURE (optional)');
      process.exit(1);
    }

    console.log('📧 Testing SMTP Configuration...');
    console.log(`   Host: ${process.env.SMTP_HOST}`);
    console.log(`   Port: ${process.env.SMTP_PORT}`);
    console.log(`   User: ${process.env.SMTP_USER}`);
    console.log(`   Secure: ${process.env.SMTP_SECURE || 'auto'}`);
    console.log('');
    
    // Try different username formats if needed
    const usernameFormats = [
      process.env.SMTP_USER, // Full email
      process.env.SMTP_USER.split('@')[0], // Just username part
    ];
    console.log('   Will try username formats:', usernameFormats);
    console.log('');

    const transporter = createTransporter();

    // Verify connection
    console.log('🔌 Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully!\n');

    // Send test email
    const recipientEmail = process.env.SMTP_RECIPIENT || process.env.SMTP_USER;
    console.log(`📤 Sending test email to: ${recipientEmail}`);

    const mailOptions = {
      from: `"AISCO Test" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      subject: 'AISCO SMTP Test Email',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            ✅ SMTP Test Email
          </h2>
          
          <div style="margin-top: 20px; line-height: 1.8;">
            <p>This is a test email to verify your SMTP configuration is working correctly.</p>
            
            <div style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <h3 style="color: #374151; margin-top: 0;">Configuration Details:</h3>
              <p><strong>SMTP Host:</strong> ${process.env.SMTP_HOST}</p>
              <p><strong>SMTP Port:</strong> ${process.env.SMTP_PORT}</p>
              <p><strong>SMTP User:</strong> ${process.env.SMTP_USER}</p>
              <p><strong>SSL/TLS:</strong> ${process.env.SMTP_SECURE === 'true' ? 'Enabled' : 'Auto'}</p>
            </div>
            
            <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
              If you received this email, your SMTP configuration is working perfectly! 🎉
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Test sent at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `This is a test email to verify your SMTP configuration is working correctly.

Configuration Details:
- SMTP Host: ${process.env.SMTP_HOST}
- SMTP Port: ${process.env.SMTP_PORT}
- SMTP User: ${process.env.SMTP_USER}
- SSL/TLS: ${process.env.SMTP_SECURE === 'true' ? 'Enabled' : 'Auto'}

If you received this email, your SMTP configuration is working perfectly!

Test sent at: ${new Date().toLocaleString()}`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log(`   Message ID: ${info.messageId}`);
    console.log(`   Response: ${info.response}`);
    console.log(`\n📬 Please check ${recipientEmail} for the test email.`);
    
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Error sending test email:');
    console.error(`   ${error.message}`);
    
    if (error.code) {
      console.error(`   Error Code: ${error.code}`);
    }
    
    if (error.response) {
      console.error(`   Server Response: ${error.response}`);
    }
    
    console.error('\n💡 Troubleshooting tips:');
    console.error('   1. Verify SMTP credentials in .env file');
    console.error('   2. Check if port 465 is open (firewall)');
    console.error('   3. Verify SSL/TLS settings');
    console.error('   4. Check SMTP server logs');
    
    process.exit(1);
  }
};

// Run the test
sendTestEmail();
