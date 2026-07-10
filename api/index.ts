import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/submit-request", async (req, res) => {
  try {
    const { name, email, serviceId, description, date, time } = req.body;

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log("Mock Email Sent:");
      console.log(`Subject: Incoming request form - ${name} for ${serviceId} on ${date}`);
      console.log(`Body:\nName: ${name}\nEmail: ${email}\nService: ${serviceId}\nRequested Time: ${date} at ${time}\nDescription: ${description}`);
      return res.json({ success: true, mock: true });
    }

    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Ask Andrew Booking" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || "wattsmart@gmail.com",
      subject: `Incoming request form - ${name} for ${serviceId} on ${date}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${serviceId}\nRequested Time: ${date} at ${time}\n\nDescription:\n${description}`,
    });

    res.json({ success: true });
  } catch (error: any) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

export default app;
