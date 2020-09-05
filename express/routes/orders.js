const router = new require('express').Router()
const orderModel = require('./../models/Orders')

// GET : /packs (tous les packs)

router.get('/', async (req, res, next) => {

  try {
    const orders = await orderModel.find();
    console.log("ici")
    res.json(orders)
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

// GET (récupérer un pack de la bdd grâce à son _id )

router.get('/:id', async (req, res, next) => {
  try {
    const orders = await orderModel.findById(req.params.id)
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

console.log("Orders")
// POST (créer un nouveau pack)

router.post('/add_orders', async (req, res, next) => {
  console.log(">>Dedans Orders>>")
  try {
    const newOrder = await orderModel.create(req.body)
    res.json(newOrder)
  } catch (err) {
    next(err)
  }
})


console.log(">>>>>>>")

// DELETE (supprimer un pack de la bdd grâce à son _id)

router.delete('/delete/:id', async (req, res, next) => {
  try {
    const deletedOrder = await orderModel.findByIdAndDelete(req.params.id)
    res.json(deletedOrder)
  } catch (err) {
    next(err)
  }
})

// PATCH (mettre à jour un pack)

router.patch('/update_order/:id', async (req, res, next) => {
  try {
    const updatedOrder = await orderModel.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true })
    res.json(updatedOrder)
  } catch (err) {
    next(err)
  }
})

module.exports = router