const bcrypt = require('bcrypt')
const mysql = require('mysql')
const express = require('express')
const router = express.Router()
const UserModel = require('./../models/User')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mrmarioi'
})

router.get('/signin', async (req, res, next) => {
  try {
    res.json('signin')
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const email = req.body.email
    const password = req.body.password
    if (first_name && last_name && email && password) {
      connection.query(
        'SELECT * FROM Users WHERE first_name = ? AND last_name = ? AND email = ? AND password = ?',
        [first_name, last_name, email, password],
        function (error, results, fields) {
          if (results.length > 0) {
            req.session.loggedin = true
            req.session.email = email
          } else {
            res.send('Incorrect Email and/or Password!')
          }
          res.end()
        }
      )
    } else {
      res.send('Please enter Username and Password!')
      res.end()
    }
    // res.json(user)
  } catch (err) {
    next(err)
  }
})

module.exports = router
