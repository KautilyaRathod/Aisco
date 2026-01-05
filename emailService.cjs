const nodemailer = require('nodemailer');

// Create reusable transporter object using Gmail SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
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
  try {
    // Check if email credentials are configured
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.warn('Email credentials not configured. Skipping email send.');
      return { success: false, error: 'Email credentials not configured' };
    }

    const transporter = createTransporter();
    // Use GMAIL_RECIPIENT if set, otherwise default to GMAIL_USER
    const recipientEmail = process.env.GMAIL_RECIPIENT || process.env.GMAIL_USER;

    const mailOptions = {
      from: `"AISCO Website" <${process.env.GMAIL_USER}>`,
      to: recipientEmail,
      replyTo: formData.emailAddress || process.env.GMAIL_USER,
      subject: `New Quote Request from ${formData.fullName || 'Customer'}`,
      html: formatQuoteRequestEmail(formData)
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Quote request email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending quote request email:', error);
    return { success: false, error: error.message };
  }
};

// Send email for Contact/Quick Inquiry
const sendContactInquiryEmail = async (formData) => {
  try {
    // Check if email credentials are configured
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.warn('Email credentials not configured. Skipping email send.');
      return { success: false, error: 'Email credentials not configured' };
    }

    const transporter = createTransporter();
    // Use GMAIL_RECIPIENT if set, otherwise default to GMAIL_USER
    const recipientEmail = process.env.GMAIL_RECIPIENT || process.env.GMAIL_USER;

    const mailOptions = {
      from: `"AISCO Website" <${process.env.GMAIL_USER}>`,
      to: recipientEmail,
      replyTo: formData.email || process.env.GMAIL_USER,
      subject: `New Quick Inquiry: ${formData.subject || 'No Subject'}`,
      html: formatContactInquiryEmail(formData)
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Contact inquiry email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending contact inquiry email:', error);
    return { success: false, error: error.message };
  }
};

module.exports = {
  sendQuoteRequestEmail,
  sendContactInquiryEmail
};

