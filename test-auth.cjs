require('dotenv').config();

console.log('=== SMTP Configuration Check ===\n');
console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);
console.log('SMTP_SECURE:', process.env.SMTP_SECURE);
console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('SMTP_PASSWORD:', process.env.SMTP_PASSWORD ? 
  process.env.SMTP_PASSWORD.substring(0, 4) + '***' : 'NOT SET');
console.log('SMTP_PASSWORD Length:', process.env.SMTP_PASSWORD ? process.env.SMTP_PASSWORD.length : 0);
console.log('\n=== Password Characters ===');
if (process.env.SMTP_PASSWORD) {
  const pwd = process.env.SMTP_PASSWORD;
  console.log('Full password (for verification):', JSON.stringify(pwd));
  console.log('Character codes:', pwd.split('').map(c => c.charCodeAt(0)).join(', '));
}