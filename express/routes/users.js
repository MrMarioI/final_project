const router = new require('express').Router()
const bcrypt = require('bcrypt')
const auth = require('./../auth/auth')
const mysql = require('mysql')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const UserModel = require('./../models/User')

// GET : /user (récupérer tous les users)
router.get('/', async (req, res, next) => {
	const users = await UserModel.getAll();
    res.send(users);
})

// GET (récupérer un user de la bdd grâce à son _id )
router.get('/:id', async (req, res, next) => {
  try {
    const user = await UserModel.getById(req.params.id)
    res.json(user)
  } catch (err) {
    next(err)
  }
})


router.get("/get-user-by-token", (req, res) => {
  try {
    const user = auth.decodeToken(req.header("x-authenticate"));
    const userId = user.infos._id;
    console.log("should be user", user);
    res.redirect("/api/users/" + userId);
  } catch (err) {
    res.status(500).json(err.message);
  }
});


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


// const connection = mysql.createConnection({
// 	host     : 'localhost',
// 	user     : 'root',
// 	password : '',
// 	database : 'Users'
// });

// const app = express();
// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));
// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());

// app.post('/signup', function(request, response) {
// 	const first_name = request.body.first_name;
//   const last_name = request.body.last_name;password;
//   const email = request.body.email;
//   const password = request.body.password;
// 	if (first_name && last_name && email && password) {
// 		connection.query('SELECT * FROM accounts WHERE first_name = ? AND last_name = ? AND email = ? AND password = ?', [first_name, last_name, email, password], function(error, results, fields) {
// 			if (results.length > 0) {
// 				request.session.loggedin = true;
// 				request.session.email = email;
// 				response.redirect('/');
// 			} else {
// 				response.send('Incorrect Email and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });