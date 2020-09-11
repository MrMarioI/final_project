const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer"); // convertit les fichiers uploadés et le met à disposition dans req.file

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  folder: "galeries",
  //Si besoin d'uploader de la video ...
  /*
    params: { resource_type: "raw" }
    */
});

const fileUploader = multer({ storage });

module.exports = fileUploader;