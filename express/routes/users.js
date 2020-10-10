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
router.put('profil_edit/', async (req, res, next) => {
  try {
    const updatedUser = await UserModel.put(
      req.params.first_name,
       req.params.last_name, 
       req.params.email,
       req.params.userId, // req.params.id correspond à l'id passé en URL
    )
    console.log('CURRENT USER', currentUser);
    res.json(Users)
  } catch (err) {
    next(err)
  }
})
module.exports = router