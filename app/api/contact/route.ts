import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  if (!name || !email || !message) return NextResponse.json({ ok:false, error:'Missing' }, { status: 400 });
  try {
    const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 587), secure: false, auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } });
    const info = await transporter.sendMail({ from: `ASSI Web <${process.env.SMTP_FROM || process.env.SMTP_USER}>`, to: process.env.CONTACT_TO || process.env.SMTP_USER, subject: 'Nuevo contacto desde ASSI', replyTo: email, text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}` });
    return NextResponse.json({ ok:true, id: info.messageId });
  } catch (e:any) { console.error('Mailer error', e?.message || e); return NextResponse.json({ ok:false, error:'Mailer error' }, { status: 500 }); }
}
