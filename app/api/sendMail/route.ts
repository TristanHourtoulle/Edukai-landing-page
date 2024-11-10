import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MailAdress,
    pass: process.env.MailPassword,
  },
});

export async function POST(req: NextRequest) {
  const res = await req.json();

  try {
    await transporter.sendMail({
      from: res.email,
      to: "tristan.hourtoulle@epitech.eu",
      subject: `Nouveau message de ${res.name}: ${res.subject}`,
      text: res.message,
      html: `<p>${res.message}</p>`,
    });

    return Response.json(
      { success: true, message: "Email envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return Response.json(
      { success: false, message: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
}
