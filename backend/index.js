require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan"); // Import morgan for logging

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies
app.use(morgan("combined")); // Log HTTP requests

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send an email
const sendEmail = async (from, to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from, // Sender address
      to, // Recipient address
      subject, // Subject line
      text, // Plain text body
      html, // HTML body
    });
    console.log("Message sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};

// Route to handle form submissions and send emails
app.post("https://port2-seven.vercel.app/send-email", async (req, res) => {
  const { name, email, question } = req.body;
  console.log(req.body);
  // Customize the email details
  const subject = "New Contact Form Submission";
  const text = `You have a new contact form submission:

Name: ${name}
Email: ${email}
Question: ${question}`;
  const html = `<p>You have a new contact form submission:</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Question:</strong> ${question}</p>`;

  // Send email
  const result = await sendEmail(
    email,
    (to = "wiserfeed@gmail.com"),
    subject,
    text,
    html
  );

  if (result.success) {
    res.status(200).json({
      message: "Email sent successfully",
      messageId: result.messageId,
    });
  } else {
    res
      .status(500)
      .json({ message: "Failed to send email", error: result.error });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (error) => {
  if (error) {
    console.error(`Something went wrong: ${error}`);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
