const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dilawaralikhi@gmail.com',
    pass: 'kazmi234',
  },
  tls: {
    rejectUnauthorized: false,
  },
})

var mailOptions = {
  from: 'dilawaralikhi@gmail.com',
  to: 'dilawarali5@hotmail.com',
  subject: 'NEW MAIL',
  text: `hello there little programmer`,
}

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error)
  } else {
    console.log('Email sent: ' + info.response)
  }
})
