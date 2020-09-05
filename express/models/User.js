const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  address: {
    rue: String,
    Numero: Number,
    Zipcode: Number,
    city: String
  },
  email: String,
  role: {
    type: String,
    enum: ['Admin', 'User'],
    default: 'User'
  }
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel
