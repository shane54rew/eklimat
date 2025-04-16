
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });

  const { email, link } = req.body;
  if (!email || !link) return res.status(400).json({ error: 'Missing email or link' });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'eklimat@gmail.com',
      pass: 'srod gbbu wilf uutb',
    },
  });

  try {
    await transporter.sendMail({
      from: 'eKlimat <eklimat@gmail.com>',
      to: email,
      subject: 'Link do płatności online - eKlimat',
      html: `<p>Dziękujemy za odwiedzenie gminy!</p>
             <p>Kliknij link poniżej, aby dokonać opłaty klimatycznej:</p>
             <a href="${link}">${link}</a>`
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Błąd wysyłki e-maila:', err);
    return res.status(500).json({ error: 'Błąd podczas wysyłania e-maila' });
  }
}
