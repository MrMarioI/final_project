const router = new require('express').Router()
const galerieModel = require('./../models/Galeries');
const photoModel = require('./../models/Photos');

// GET : /galeries (toutes les galeries)
router.get('/', async (req, res, next) => {
  try {
    const galerie = await galerieModel.find(req.params).populate('Photos')
    res.json(galerie)
  } catch (err) {
    next(err)
  }
})

// GET (récupérer une galerie de la bdd grâce à son _id )
router.get('/:id', async (req, res, next) => {
  try {
    const galerie = await galerieModel.findById(req.params.id).populate('Photos')
    res.json(galerie)
  } catch (err) {
    next(err)
  }
})

// POST (créer une nouvelle galerie)
router.post('/add_galerie', async (req, res, next) => {
  try {
    const newGalerie = await galerieModel.create(req.body)
    res.json(newGalerie)
  } catch (err) {
    next(err)
  }
})

// DELETE (supprimer une galerie de la bdd grâce à son _id)
router.delete('/delete/:id', async (req, res, next) => {
  try {
    const deletedGalerie = await galerieModel.findByIdAndDelete(req.params.id)
    res.json(deletedGalerie)
  } catch (err) {
    next(err)
  }
})

// PATCH (mettre à jour une galerie)
router.patch('/update_galeries/:id', async (req, res, next) => {
  try {
    const updatedGalerie = await galerieModel.findByIdAndUpdate(
      req.params.id, 
      req.body,
      { new: true }
    )
    res.json(updatedGalerie)
  } catch (err) {
    next(err)
  }
})

module.exports = router