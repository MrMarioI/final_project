const express = require('express')
const router = new require('express').Router()
const bodyParser = require('body-parser')
// const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

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

app.post('/contact', (req, res) => {
  console.log('><><><', req.email)


  // transporter.sendMail({
  //   to: 'mario@mrmarioi.fr',
  //   from: req.body.email,
  //   subject: 'Votre message a été envoyé',
  //   html: `<h1> Bienvenue sur notre site !</h1>
  //     <p>Voici votre identifiant et votre mot de passe</p>
  //     <br>
  //     <br>
  //     <p>
  //    Votre nom : ${req.body.name} <br>
  //    Votre mail : ${req.body.email} <br>
  //    Votre ville : ${req.body.ville} <br>
  //    Votre message : ${req.body.message} </p>
  //     `
  // })
})

module.exports = app;
