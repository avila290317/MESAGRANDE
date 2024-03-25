const nodemailer = require('nodemailer');

// Configura nodemailer con tus detalles SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahnatalia25@gmail.com',
    pass: 'ofpiqbvozxznzqyt', 
  },
});


const sendMail = (req, res) => {
    const { name, phone, mail, message } = req.body;

    const mailOptions = {
      from: `${mail}`,
      to: 'ahnatalia25@gmail.com', 
      subject: 'Correo Electrónico desde la página web',
      text: `Nombre: ${name}\nTelefono: ${phone}\nEmail: ${mail}\nMensaje: ${message}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Correo enviado: ' + info.response);
    });
  };


  const sendJobMail = (req, res) => {
    const { nombre, email, telefono, direccion, experiencia, educacion, habilidades, proyecto } = req.body;
    let emailAEnviar = "";
    if (proyecto == "calvillo") {
      emailAEnviar = "avilahernandeznatalia123@gmail.com";
    } else if (proyecto == "california") {
      emailAEnviar = "ahnatalia25@gmail.com";
    }
  
    const mailOptions = {
      from: `${email}`,
      to: emailAEnviar, 
      subject: 'Solicitud de empleo',
      text: `Nombre: ${nombre}\nTelefono: ${telefono}\nEmail: ${email}\nDireccion: ${direccion}\nExperiencia: ${experiencia}\nEducacion: ${educacion}\nHabilidades: ${habilidades}\nProyecto: ${proyecto}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Correo enviado: ' + info.response);
    });
  };

  module.exports = {sendMail, sendJobMail};