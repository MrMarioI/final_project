const router = new require('express').Router()
const CategoryModel = require('./../models/Category')

// GET : /categories (toutes les catégories)
router.get('/', async (req, res, next) => {

  try {
    const category = await CategoryModel.find(); 
    console.log("ici")
    res.json(category)
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

// GET (récupérer une catégorie de la bdd grâce à son _id )
router.get('/:id', async (req, res, next) => {
  try {
    const category = await CategoryModel.findById(req.params.id)
    res.json(category)
  } catch (err) {
    next(err)
  }
})

// POST (créer une nouvelle catégorie)
router.post('/add_category', async (req, res, next) => {
  try {
    const newCategory = await CategoryModel.create(req.body)
    res.json(newCategory)
  } catch (err) {
    next(err)
  }
})

// DELETE (supprimer une categorie de la bdd grâce à son _id)
router.delete('/delete/:id', async (req, res, next) => {
  try {
    const deletedCategory = await CategoryModel.findByIdAndDelete(req.params.id) 
    res.json(deletedCategory)
  } catch (err) {
    next(err)
  }
})

// PATCH (mettre à jour une catégorie)
router.patch('/update_categories/:id', async (req, res, next) => {
  try {
    const updatedCategory = await CategoryModel.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true } 
    )
    res.json(updatedCategory)
  } catch (err) {
    next(err)
  }
})

module.exports = router