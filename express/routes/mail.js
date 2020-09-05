const express = require('express')
const router = new require('express').Router()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));

router.post('http://localhost:3001/contact', function (req, res, next) {

console.log(req.email);
  const nodemailer = require('nodemailer')
  const sendgridTransport = require('nodemailer-sendgrid-transport')
  const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key:
          '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'
      }
    })
  )
  console.log('quelque chose :', req)
  transporter.sendMail({
    to: req.body.email,
    from: 'ivanovic.mario@gmail.com',
    subject: 'Votre message a été envoyé',
    html: `<h1> Bienvenue sur notre site !</h1>
    <p>Voici votre identifiant et votre mot de passe</p>
    <br>
    <br>
    <p>
   Votre nom : ${req.name} <br>
   Votre mail : ${req.email} <br>
   Votre ville : ${req.ville} <br>
   Votre message : ${req.message} </p>
    `
  })
  res.render('contact')




})

module.exports = router;