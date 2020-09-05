const router = new require('express').Router()
const UserModel = require('./../models/User');




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





// GET : /user (récupérer tous les users)
router.get('/', async (req, res, next) => {
  try {
    const users = await UserModel.find(); // products est un array d'objets JS
    res.json(users) // ici on le converti en String JSON
  } catch (err) {
    pp
    next(err)
  }
})

// GET (récupérer un user de la bdd grâce à son _id )
router.get('/:id', async (req, res, next) => {
  try {
    const users = await (await UserModel.findById(req.params.id)).populate('Galeries').populate('Photos')
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// POST : /api/ (créer un nouveau user)
router.post('/add_user', async (req, res, next) => {
  try {
    const newUser = await UserModel.create(req.body) // req.body contient TOUJOURS les informations postées
    transporter.sendMail({
      to: req.body.email,
      from: 'CralCompagny@gmail.com',
      subject: 'Vous êtes bien inscrit à notre site',
      html: `<h1> Bienvenue sur notre site !</h1>
      <p>Voici votre identifiant et votre mot de passe</p>
      <br>
      <br>
      <p>
      - Idendifiant : ${req.body.email} <br>
      - Mot de passe : ${req.body.password}</p>
      `
  })











    res.json(newUser)
  } catch (err) {
    next(err)
  }
})

// DELETE (supprimer un user de la bdd grâce à son _id)
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id) // req.params.id correspond à l'id passé en URL
    res.json(deletedUser)
  } catch (err) {
    next(err)
  }
})

// PATCH (mettre à jour un user)
router.patch('update_users/:id', async (req, res, next) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id, // req.params.id correspond à l'id passé en URL
      req.body, // les données de mise à jour
      { new: true } // cette option est requise si vous souhaitez récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
    )
    res.json(UserPhoto)
  } catch (err) {
    next(err)
  }
})

module.exports = router
