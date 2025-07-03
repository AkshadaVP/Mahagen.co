require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,     // your Gmail
    pass: process.env.EMAIL_PASS,     // your App Password
  },
});

const mailOptions = {
  from: `<${process.env.EMAIL_USER}>`,
  to: 'your-own-email@gmail.com', // test with your email
  subject: '🔧 Test Email from Mahajan.co',
  text: '✅ If you received this, nodemailer is working!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('❌ Email sending failed:', error);
  }
  console.log('✅ Test email sent:', info.response);
});
