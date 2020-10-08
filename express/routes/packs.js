// const router = new require('express').Router()
// const packsModel = require('./../models/Packs')

// // GET : /packs (tous les packs)

// router.get('/', async (req, res, next) => {

//   try {
//     const packs = await packsModel.find();
//     console.log("ici")
//     res.json(packs)
//   } catch (err) {
//     next(err)
//   }
// })

// // router.get("/sort-by-price", async (req, res, next) => {
// //   try {
// //     if (!req.query.sort) throw new Error("Missing sort query parameter");
// //     const products = await ProductModel.find().sort({ price: req.query.sort === "asc" ? 1 : -1 });
// //     res.json(products);
// //   } catch (err) {
// //     next(err);
// //   }
// // });

// // GET (récupérer un pack de la bdd grâce à son _id )

// router.get('/:id', async (req, res, next) => {
//   try {
//     const packs = await packsModel.findById(req.params.id)
//     res.json(packs)
//   } catch (err) {
//     next(err)
//   }
// })

// console.log("Pack")
// // POST (créer un nouveau pack)

// router.post('/add_packs', async (req, res, next) => {
//   console.log(">>Dedans Pack>>")
//   try {
//     const newPack = await packsModel.create(req.body)
//     res.json(newPack)
//   } catch (err) {
//     next(err)
//   }
// })
// console.log(">>>>>>>")
// // DELETE (supprimer un pack de la bdd grâce à son _id)

// router.delete('/delete/:id', async (req, res, next) => {
//   try {
//     const deletedPack = await packsModel.findByIdAndDelete(req.params.id)
//     res.json(deletedPack)
//   } catch (err) {
//     next(err)
//   }
// })

// // PATCH (mettre à jour un pack)

// router.patch('/update_packs/:id', async (req, res, next) => {
//   try {
//     const updatedPack = await packsModel.findByIdAndUpdate(
//       req.params.id, 
//       req.body, 
//       { new: true })
//     res.json(updatedPack)
//   } catch (err) {
//     next(err)
//   }
// })

// module.exports = router