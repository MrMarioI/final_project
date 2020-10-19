const bcrypt = require('bcrypt')
const mysql = require('mysql')
const express = require('express')
const router = express.Router()
const auth = require('./../auth/auth')
const uploader = require('./../config/cloudinary')
const PhotosModel = require('./../models/Photos');
const TypeModel = require('./../models/TypePhoto');

// GET : /photos (on récupère toutes les photos)
router.get('/', async (req, res, next) => {
  const photos = await PhotosModel.getAll();
  res.send(photos)
})

// GET (récupérer une photo de la db grâce à son Id )
router.get('/', async (req, res, next) => {
  try {
    const photos = await PhotoModel.getByType()
    res.send(photos)
  } catch (err) {
    next(err)
  }
})

// POST (poster une nouvelle photo)
router.post('/add_photos', uploader.single("photos"), async (req, res, next) => {
  // ajouter cloudinary  ici (ref auth signup)
  const newPicture = req.body;
  // console.log(">>>>>>>>>>>=========>>>>>>>>>>>> PICTURE", req.body);
  // const { photos } = req.file;
  // console.log(" ON TEST BODY.FILE >>>>>>>>>>>>>>>>>>>>>", req.file);
  if (req.file) newPicture.photos = req.file.path;
  // console.log("HEY HEY", req.file.path)
  try {
    if (!req.file) {
      return res.status(400).json({
        msg: "Attention, vous n'avez ajouter aucune photo.",
        level: "warning",
      });
    }

    const photo = new PhotosModel([req.file.path, req.body.typePhotosId]);
    // console.log("HEY TOI =====>", ["photo:", req.file.path, "type:", req.body.typePhotosId]);

    await photo.addPhoto();
    return res.status(200).json({
      msg: "Photo ajoutée !",
      level: "success"
    });

  } catch (err) {
    res.status(500).json({
      msg: 'Il y a une erreur, vérifier vos champs !' + err
    })
  }
})

// DELETE (supprimer une photo de la db grâce à son Id)
router.delete('/delete/:photoId', async (req, res, next) => {
  try {
    const {
      photoId
    } = req.params;
    const deletedPhoto = await PhotoModel.getById(photoId)
    res.json(deletedPhoto)
  } catch (err) {
    next(err)
  }
})

module.exports = router