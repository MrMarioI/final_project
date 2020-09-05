const mongoose = require('mongoose')
const Schema = mongoose.Schema

const packsSchema = new Schema({
  Photos: [{
    type: Schema.Types.ObjectId,
    ref: "Photo"
  }],
  packs: String,
  status: {
    type: String,
    enum: ['en préparation', 'en livraison', 'livrée']
  },
  date: Date,
  Price: Number
})

const packsModel = mongoose.model('Packs', packsSchema)

module.exports = packsModel
