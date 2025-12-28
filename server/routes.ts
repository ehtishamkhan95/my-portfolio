import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

const contactMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const result = contactMessageSchema.safeParse(req.body);
      if (!result.success) {
        return res
          .status(400)
          .json({ error: fromZodError(result.error).message });
      }

      const message = result.data;

      // Email integration
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.example.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const templatePath = path.resolve(
        process.cwd(),
        "server/templates/contact-email.ejs"
      );
      const html = await ejs.renderFile(templatePath, {
        name: message.name,
        email: message.email,
        message: message.message,
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.FROM_EMAIL}>`,
        to: process.env.CONTACT_EMAIL || process.env.FROM_EMAIL,
        subject: `New Contact Message from ${message.name}`,
        html,
      });

      res.json(message);
    } catch (error: any) {
      console.error("Contact error:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
