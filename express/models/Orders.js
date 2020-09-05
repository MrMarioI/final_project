const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  User: [{
    type: Schema.Types.ObjectId,
    ref: "User"
   }],
  packs: String,
  status: {
    type: String,
    enum: ['en préparation', 'en livraison', 'livrée']
  },
  date: Date,
  price: Number
})

const orderModel = mongoose.model('Orders', orderSchema)

module.exports = orderModel
