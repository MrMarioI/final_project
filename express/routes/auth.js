const bcrypt = require('bcrypt')
const mysql = require('mysql')
const express = require('express')
const router = express.Router()
const auth = require('./../auth/auth')
const UserModel = require('./../models/User')

// POST (créer un nouveau user)

// On va d'abord vérifier que tous les champs sont bien remplis (bloc ligne 35 à 29) puis rechercher en DB par le mail si l'user est déjà inscrit avec ce mail (bloc 41 à 48), 
// puis ensuite, on créer un nouvel user si les conditions précédentes sont fausses (bloc 52 à 62).
router.post('/signup', async (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    password
  } = req.body;
  console.log(">>>>>>> REQ")
  // console.log(">>C>>", req.body.first_name);
  // console.log(">>D>>", req.body.last_name);
  // console.log("SALUT BB", req.body)
  if (!first_name || !last_name || !email || !password) {
    return res.status(422).json({
      msg: 'Merci de remplir tous les champs requis.',
      level: 'warning'
    })
  }
  try {
    const previousUser = await UserModel.getByMail({
      email
    })
    // console.log("BB C'EST ICI =>", previousUser);
    if (previousUser.length === 1) {
      return res.status(422).json({
        msg: "Désolé, cet email n'est pas disponible.",
        level: 'warning'
      })
    }
    const user = new UserModel(req.body)
    // console.log('HEY HEY HEY', user)
    // si le programme est lu jusqu'ici, on converti le mot de passe en chaîne cryptée
    const salt = bcrypt.genSaltSync(10)
    const hashed = bcrypt.hashSync(password, salt)
    // console.log("password crypté >>>", hashed);
    user.password = hashed // on remplace le mot de passe "en clair" par sa version cryptée

    // finalement on insère le nouvel utilisateur en base de données
    await user.addNew(user)
    return res.status(200).json({
      msg: 'signed up !',
      level: 'success'
    })
  } catch (err) {
    res.status(500).json({
      msg : 'Il y a une erreur, vérifier vos champs !' + err })
  }

})

router.get("/get-user-by-token", (req, res) => {
  try {
    const user = auth.decodeToken(req.header("x-authenticate"));
    const userId = user.infos.userId;
    console.log("should be user", user);
    console.log("should show :", userId);
    res.redirect("/users/" + userId);
  } catch (err) {
    res.status(500).json(err.message);
  }
});


// Connection si user inscrit.

router.post("/signin", async (req, res, next) => {
  const {email, password} = req.body; //
  // console.log("HEY GAMIN >>>>", req.body);
  // check que mail et mdp sont renseignés
  if (!email || !password) {
    // never trust user input !
    // si non : retourner message warning.
    return res.status(401).json({
      msg: "Identifiants incorrects",
      level: "error",
    });
  }
  // si oui : vérifier que mail et mdp correspondent en bdd
  console.log("On se retrouve ici", req.body);
  // 1 - récupérer l'utilisateur avec le mail fourni 
  try{
    const currentUser = await UserModel.getByMail(email) 
    // console.log("HEY MAN TEST ------> ICI --->", await UserModel.getByMail(email))
  //console.log("Un peu plus dans signin", req.body);
  //console.log(" => ESSAI :", currentUser, email);
      if (!currentUser[0]) {
        // vaut null si pas d'user trouvé pour le mail
        return res.status(401).json({
          msg: "Identifiants incorrects",
          level: "error",
        });
      }
      console.log("ON ARRIVE ICI")
      // si oui comparer le mdp crypté stocké en bdd avec la chaîne en clair envoyée depuis le formulaire
      console.log("PASSWORD CURRENTUSER--->", currentUser[0].password);
      console.log("PASSWORD --->", password);
      const checkPassword = bcrypt.compareSync(
        password,
        currentUser[0].password

         // password provenant du form "texte plein"
         // password stocké en bdd (encrypté)
      ); // checkPassword vaut true || false
console.log("Encore plus loin signin");
      // si le mdp est incorrect: retourner message error sur signin
      if (checkPassword === false) {
        // req.flash("error", "Identifiants incorrects");
        return res.status(401).json({
          msg: "Identifiants incorrects",
          level: "error",
        });
      }
console.log("Toujours plus loin signin", currentUser[0]);
      // si oui : stocker les infos de l'user en session pour lui permettre de naviguer jusqu'au signout
      const user = currentUser[0];
      const clone = {...user}; // On clone l'user 
      console.log(clone)
      delete clone.password; // par sécurité, on supprime le mdp du clone (pas besoin de le stocker ailleurs qu'en bdd)
      console.log("ALALALALALALALALALALALALALAAL")
      // req.session.user = clone; // On inscris le clone dans la session (pour maintenir un état de connexion)
      
      const token = auth.createToken(clone, req.userId); // createToken retourne un jeton (token) créé avec JWT
console.log("fin de signin");
      return res
        .header("x-authenticate", token) // On renvoie le token au client dans l'entête de la réponse pour l'authentification
        .status(200)
        .send({
          user: clone,
          token,
          msg: "logged in !",
          level: "success"
        });
    }catch (err) {
      console.log("----> FIN SIGNIN <-----", req.body);
      res.status(500).json({
        msg : 'Il y a une erreur, vérifier vos champs !' + err })
    }
});

// Destruction de la session (déconnection de l'user)
router.get("/signout", (req, res) => {
  // todo invalidate token
  const x = req.session.destroy();
  res.json(x);
});

module.exports = router;