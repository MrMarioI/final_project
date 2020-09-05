const router = new require('express').Router()
const PhotoModel = require('./../models/Photos')
const galeriesModel = require('./../models/Galeries')

// GET : /photos (toutes les photos)
router.get('/', async (req, res, next) => {
  try {
    const photos = await PhotoModel.find()
    console.log("ici")
    res.json(photos)
  } catch (err) {
    next(err)
  }
})

// router.get("/sort-by-price", async (req, res, next) => {
//   try {
//     if (!req.query.sort) throw new Error("Missing sort query parameter");
//     const products = await ProductModel.find().sort({ price: req.query.sort === "asc" ? 1 : -1 });
//     res.json(products);
//   } catch (err) {
//     next(err);
//   }
// });

// GET (récupérer une photo de la bdd grâce à son _id )
router.get('/:id', async (req, res, next) => {
  try {
    const photos = await PhotoModel.findById(req.params.id)
    res.json(photos)
  } catch (err) {
    next(err)
  }
})

// POST (poster une nouvelle photo)
router.post('/add_photos', async (req, res, next) => {
  try {
    const newPhoto = await PhotoModel.create(req.body)
    res.json(newPhoto)
  } catch (err) {
    next(err)
  }
})
// DELETE (supprimer une photo de la bdd grâce à son _id)
router.delete('/delete/:id', async (req, res, next) => {
  try {
    const deletedPhoto = await PhotoModel.findByIdAndDelete(req.params.id)
    res.json(deletedPhoto)
  } catch (err) {
    next(err)
  }
})

// PATCH (mettre à jour une photo)
router.patch('/update_photos/:id', async (req, res, next) => {
  try {
    const updatedPhoto = await PhotoModel.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    )
    res.json(updatedPhoto)
  } catch (err) {
    next(err)
  }
})

module.exports = router
