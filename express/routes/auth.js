const bcrypt = require('bcrypt')
const mysql = require('mysql')
const express = require('express')
const router = express.Router()
const UserModel = require('./../models/User')


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
})

router.get('/signin', async (req, res, next) => {
  try {
    res.json('signin')
  } catch (err) {
    next(err)
  }
})

// router.post('/signup', (req, res, next) => {
//   try {
//     const user = new UserModel(req.body)
//     if (user) {
//       connection.query('INSERT INTO Users VALUES ?', user, (error, results) => {
//         if (results && results.length > 0) {
//           req.session.loggedin = true
//           req.session.email = email
//         } else {
//           res.send('Incorrect Email and/or Password!')
//         }
//         res.end()
//       })
//     } else {
//       res.send('Please enter Username and Password!')
//       res.end()
//     }
//     res.json(user)
//   } catch (err) {
//     next(err)
//   }
// })

// POST (créer un nouveau user)
router.post('/signup', async (req, res, next) => {
const { first_name, last_name, email, password } = req.body;
  // console.log(">>A>>", req.body.email);
  // console.log(">>B>>", req.body.password);
  // console.log(">>C>>", req.body.first_name);
  // console.log(">>D>>", req.body.last_name);
  console.log("SALUT BB", req.body)
  //   console.log("TEST GOOD", user.email);
  if (!first_name || !last_name || !email || !password) {
    return res.status(422).json({
      msg: 'Merci de remplir tous les champs requis.',
      level: 'warning'
    })
  }
    try {
      const previousUser = await UserModel.getByMail({ email })
      console.log("BB C'EST ICI =>", previousUser);
      if (previousUser.length === 1) {
        return res.status(422).json({
          msg: "Désolé, cet email n'est pas disponible.",
          level: 'warning'
        })
       
      }
      const user = new UserModel(req.body)
      console.log('HEY HEY HEY', user)
      // si le programme est lu jusqu'ici, on converti le mot de passe en chaîne cryptée
      const salt = bcrypt.genSaltSync(10)
      const hashed = bcrypt.hashSync(password, salt)
      // console.log("password crypté >>>", hashed);
      user.password = hashed // on remplace le mot de passe "en clair" par sa version cryptée

      // finalement on insère le nouvel utilisateur en base de données
      await user.addNew()
      return res.status(200).json({ msg: 'signed up !', level: 'success' })
    } catch (err) {
      next(err)
    }

})

module.exports = router
