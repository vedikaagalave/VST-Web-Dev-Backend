const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: 'vedikaagalave001@gmail.com', 
      pass: 'gpef ngdx tfhc fype', 
    },
  });

  const mailOptions = {
    from: 'vedikaagalave001@gmail.com',
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };