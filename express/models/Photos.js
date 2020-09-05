const mongoose = require('mongoose')
const Schema = mongoose.Schema

const photoSchema = new Schema({
  type: String,
  name: String,
  metadonnées: {
    GPS: String,
    Date: Date,
    taille: String},
  Price: Number,
  image: String,
  Galeries: [{
    type: Schema.Types.ObjectId, 
    ref : 'Galeries'}]
})

const PhotoModel = mongoose.model('Photos', photoSchema)

module.exports = PhotoModel
