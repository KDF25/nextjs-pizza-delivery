import { IMailData } from '@shared/ui';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { to, subject, html }: IMailData = await req.json();
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 465,
        secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    const mailOptions = {
      from: process.env.MAIL_NAME,
      to,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return NextResponse.json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    // return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
  }
}
