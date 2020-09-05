const mongoose = require('mongoose')
const Schema = mongoose.Schema

const galerieSchema = new Schema({
  type: String,
  name: String,
  enum: ['public', 'privée'],
  // owner: [{
  //   type: Schema.Types.ObjectId, 
  //   ref : 'User'}],
  Photos: [{
    type: Schema.Types.ObjectId, 
    ref : 'Photos'}],
    image: String
})

const galerieModel = mongoose.model('Galeries', galerieSchema)

module.exports = galerieModel
