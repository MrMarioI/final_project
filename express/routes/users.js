const bcrypt = require('bcrypt')
const mysql = require('mysql')
const express = require('express')
const router = express.Router()
const auth = require('./../auth/auth')
const UserModel = require('./../models/User')

// GET : /user (récupérer tous les users)
router.get('/', async (req, res, next) => {
	const users = await UserModel.getAll();
    res.send(users);
})

// GET (récupérer un user de la bdd grâce à son _id )
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await UserModel.getById(req.params.userId)
    console.log("TEST USRE", user);
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// DELETE (supprimer un user de la bdd grâce à son _id)
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedUser = await UserModel.delete(req.params.userId) // req.params.id correspond à l'id passé en URL
    res.json(deletedUser)
  } catch (err) {
    next(err)
  }
})
// PUT (mettre à jour un user)
// router.patch('/profil_edit/:userId', async (req, res, next) => {
//   console.log(" TEST UPDATE",req.body);
//   try {
//     const updatedUser = await UserModel.put(
//       req.params.first_name,
//        req.params.last_name, 
//        req.params.email,
//        req.params.userId,
//       { new: true }
//     );
//     res.json(updatedUser);
//   } catch (err) {
//     next(err)
//   }
// })
module.exports = router