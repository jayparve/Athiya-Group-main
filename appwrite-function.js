import nodemailer from 'nodemailer';

export default async function(context) {
  const { name, email, phone, landType, plotSize } = JSON.parse(context.req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'jayparve44@gmail.com',
    subject: `New Land Inquiry from ${name}`,
    html: `
      <h2>New Land Inquiry Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Land Type:</strong> ${landType}</p>
      <p><strong>Plot Size:</strong> ${plotSize || 'Not specified'}</p>
      <hr>
      <p><em>This inquiry was submitted through the Athiya Developers website.</em></p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return context.res.json({ 
      success: true, 
      message: 'Inquiry submitted successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return context.res.json({ 
      success: false, 
      error: error.message 
    });
  }
} 