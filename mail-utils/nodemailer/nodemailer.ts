import nodemailer, { SendMailOptions } from "nodemailer";

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USERNAME, // replace with your email address
    pass: process.env.SMTP_PASSWORD, // replace with your password
  },
});

// setup email data
const mailOptions: SendMailOptions = {
  from: `"Your Name" <${process.env.SMTP_FROM_EMAIL}>`, // replace with your name and email address
  to: "recipient@example.com", // replace with recipient's email address
  subject: "Hello from Nodemailer", // replace with email subject
  text: "Hello, this is a test email sent using Nodemailer!", // replace with email body
  html: "<b>Hello, this is a test email sent using Nodemailer!</b>", // replace with HTML email body (optional)
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});
