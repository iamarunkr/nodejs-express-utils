const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// setup email data
let mailOptions = {
  from: `"Your Name" <${process.env.EMAIL_USER}>`,
  to: "recipient@example.com",
  subject: "Hello from Nodemailer",
  text: "Hello, this is a test email sent using Nodemailer!",
  html: "<b>Hello, this is a test email sent using Nodemailer!</b>",
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});
