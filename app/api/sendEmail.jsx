import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Vérifier que la méthode est POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Valider les données reçues
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }

    // Configurer le transporteur d'email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // exemple: 'smtp.gmail.com'
      port: process.env.EMAIL_PORT, // exemple: 587
      secure: process.env.EMAIL_SECURE === 'true', // true pour 465, false pour d'autres ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Préparer les options d'email
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO, // Où vous voulez recevoir les emails
      replyTo: email,
      subject: `Formulaire de contact: ${subject}`,
      text: `
Nom: ${name}
Email: ${email}
Sujet: ${subject}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2>Nouveau message du formulaire de contact</h2>
  <p><strong>Nom:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Sujet:</strong> ${subject}</p>
  <div style="margin-top: 20px;">
    <p><strong>Message:</strong></p>
    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
      ${message.replace(/\n/g, '<br>')}
    </div>
  </div>
</div>
      `,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    // Retourner une réponse de succès
    return res
      .status(200)
      .json({ success: true, message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return res
      .status(500)
      .json({ success: false, message: "Erreur lors de l'envoi de l'email" });
  }
}
