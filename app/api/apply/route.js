import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      profile,
      location,
      hearAbout,
      faithJourney,
      expectations,
    } = data;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'First name, last name, and email are required.' },
        { status: 400 },
      );
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing SMTP environment variables');
      return NextResponse.json(
        {
          error:
            'Email service is not configured yet. Please contact us directly at pogm22@gmail.com while we fix this.',
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const receiver = process.env.APPLICATION_RECEIVER_EMAIL || 'pogm22@gmail.com';

    const plainText = `New Peace Mentorship Program Application

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'N/A'}
Profile: ${profile || 'N/A'}
Location: ${location || 'N/A'}
How they heard: ${hearAbout || 'N/A'}

Faith journey:
${faithJourney || ''}

What they hope to gain:
${expectations || ''}
`;

    const formatParagraph = (value) => (value || '').replace(/\n/g, '<br />');

    const html = `
      <h2>New Peace Mentorship Program Application</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Profile:</strong> ${profile || 'N/A'}</p>
      <p><strong>Location:</strong> ${location || 'N/A'}</p>
      <p><strong>How they heard:</strong> ${hearAbout || 'N/A'}</p>
      <h3>Faith journey</h3>
      <p>${formatParagraph(faithJourney)}</p>
      <h3>What they hope to gain</h3>
      <p>${formatParagraph(expectations)}</p>
    `;

    await transporter.sendMail({
      from: `"Peace Mentorship Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: receiver,
      subject: `New Peace Mentorship Application — ${firstName} ${lastName}`,
      text: plainText,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error handling /api/apply', error);
    return NextResponse.json(
      { error: 'Something went wrong submitting your application. Please try again or email us directly.' },
      { status: 500 },
    );
  }
}
