// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Semua field wajib diisi." }, { status: 400 });
  }

  // Konfigurasi transporter (gunakan Gmail, atau SMTP lain)
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // masukkan email pengirim di .env.local
      pass: process.env.EMAIL_PASS, // password app Gmail / SMTP
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO, // email tujuan
      subject: "Pesan dari Form Kontak Website",
      html: `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email gagal dikirim:", error);
    return NextResponse.json({ error: "Gagal mengirim pesan." }, { status: 500 });
  }
}
