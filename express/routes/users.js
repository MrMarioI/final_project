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
  try {
    const users = await UserModel.getAll()

    res.send()
  } catch (err) {
    next(err)
  }
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


// POST (créer un nouveau user)

// router.post('/signup', async (req, res, next) => {
//   const user = new UserModel(req.body);
//   if (!user.first_name || !user.last_name || !user.password || !user.email) {
//     return res.status(422).json({
//       msg: 'Merci de remplir tous les champs requis.',
//       level: 'warning'
//     })
//   } else {
//     try {
//       const previousUser = await userModel.getbyId({ email: user.email })
//       console.log(previousUser)
//       if (previousUser) {
//         return res.status(422).json({
//           msg: "Désolé, cet email n'est pas disponible.",
//           level: 'warning'
//         })
//       }

//       // si le programme est lu jusqu'ici, on converti le mot de passe en chaîne cryptée
//       const salt = bcrypt.genSaltSync(10)
//       const hashed = bcrypt.hashSync(user.password, salt)
//       // console.log("password crypté >>>", hashed);
//       user.password = hashed // on remplace le mot de passe "en clair" par sa version cryptée

//       // finalement on insère le nouvel utilisateur en base de données
//       await UserModel.addNew(user)
//       return res.status(200).json({ msg: 'signed up !', level: 'success' })
//     } catch (err) {
//       next(err)
//     }
//   }
// })

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


// Déconnexion de la session
router.get("/signout", (req, res) => {
  // todo invalidate token
  const x = req.session.destroy();
  res.json(x);
});


// Sign In :

router.post("/signin", async (req, res, next) => {
  const userInfos = req.body; //
  // MAIL & MDP sont-ils renseignés ?
  if (!userInfos.email || !userInfos.password) {
    // never trust user input !!!
    // si négatif : balancer un message warning au client
    res.status(401).json({
      msg: " Les identifiants sont incorrects",
      level: "error",
    });
  }
  // si positif : vérifier que mail et mdp correspondent en bdd
  // On récupére l'utilisateur avec le mail fourni.
  userModel
    .getById({ email: userInfos.email })
    .then((user) => {
      if (!user) {
        // vaut null si pas d'user trouvé pour ce mail
        // si non on retourne une erreur au client
        return res.status(401).json({
          msg: "Vos identifiants sont incorrects",
          level: "error",
        });
      }
      // si oui comparer le mdp crypté stocké en bdd avec la chaîne en clair envoyée depuis le formulaire
      const checkPassword = bcrypt.compareSync(
        userInfos.password, // password qui provient du form "texte plein"
        user.password // password stocké en bdd (encrypté)
      ); // checkPassword vaut true || false

      // Mdp est incorrect => retourne un message error sur signin
      if (checkPassword === false) {
        // req.flash("error", "Identifiants incorrects");
        return res.status(401).json({
          msg: "Identifiants incorrects",
          level: "error",
        });
      }

      // Oui => stocker les infos de l'user en session pour lui permettre de naviguer jusqu'au signout
      const { _doc: clone } = { ...user }; // l'user est cloné
      delete clone.password; // Par sécurité, on supprime le mdp du clone (pas besoin de le stocker ailleurs qu'en bdd)
      req.session.currentUser = clone; // On inscris le clone dans la session (pour maintenir un état de connexion)

      const token = auth.createToken(user, req.ip); // createToken retourne un jeton (token) créé avec JWT

      return res
        .header("x-authenticate", token) // On renvoie le token au client dans l'entête de la réponse pour l'authentification
        .status(200)
        .send({ user: clone, token, msg: "logged in !", level: "success" });
    })
    .catch(next);
});
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