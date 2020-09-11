const router = new require('express').Router()
const nodemailer = require('nodemailer')
const mail_host = 'smtp.mailtrap.io'
const mail_host_port = 2525
const mail_user_address = '09d4329566-61eb40@inbox.mailtrap.io'
const mail_user_name = '48d3cc39c195a5'
const mail_user_pass = 'c81bc82fadc602'

// LA DOC
// https://blog.mailtrap.io/sending-emails-with-nodemailer/
// https://nodemailer.com/usage/using-gmail/
// https://blog.mailtrap.io/nodemailer-gmail/

// async..await is not allowed in global scope, must use a wrapper
async function sendMail (infos) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: mail_host,
    port: mail_host_port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: mail_user_name, // generated ethereal user
      pass: mail_user_pass // generated ethereal password
    }
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `👻 ${infos.from} 👻`, // sender address
    to: mail_user_address, // list of receivers
    ville: infos.ville, // Subject line
    text: infos.message, // plain text body
    html: `<div>${infos.message}</div>` // html body
  })

  console.log('Message sent: %s', info.messageId)
}

router.post('/', async (req, res, next) => {
  console.log('-------------->', req.body)
  sendMail(req.body)
    .then(() => {
      console.log('?? mail res')
      res.status(200).json('/contact')
    })
    .catch(err => {
      console.error('???', err)
      res.status(500).json('/contact')
    })
})

module.exports = router
