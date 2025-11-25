// mailer.js (Updated)
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,  // ✅ Use 465 for SSL or 587 for TLS
    secure: false, // ✅ Must be true for 465, false for 587
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendOrderConfirmation = async (buyerEmail, buyerName, foodName, buyerAddress) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: buyerEmail,
            subject: "Order Confirmation",
            text: `Dear ${buyerName},\n\nYour order for ${foodName} has been placed successfully.\n\nDelivery Address: ${buyerAddress}\n\nThank you for using our service!`
        });
        console.log("✅ Order confirmation email sent to:", buyerEmail);
    } catch (error) {
        console.error("❌ Email sending failed:", error);
    }
};

module.exports = { sendOrderConfirmation };
