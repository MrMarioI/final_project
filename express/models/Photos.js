const {
  query
} = require('../config/mysql');

class PhotosModel {

  constructor(Photos) {
    this.typePhotosId = Photos[1];
    this.src = Photos[0];
    this.user = Photos[1];
  }

  // Create

  async addPhoto() {
    // console.log("ADDNEW", this.typePhotosId);
    const request = `INSERT INTO Photos (typePhotosId, src, userId) VALUES ( ?, ?, ?)`;
    return query(request, [this.typePhotosId, this.src, this.user]);
  }
  // Read

  // Toutes les photos ajoutées.
  static async getAll(Photos) {
    const request = 'SELECT * FROM Photos';
    return query(request, [Photos]);
  }

  // faire la requête afin d'afficher la photo correspondant à la galerie séléctionnée.
  static async getByType(typePhotoId) {
    const request = 'SELECT * FROM Photos WHERE typePhotosId = ?';
    return query(request, [typePhotoId]);
  }


  static async getById(photoId) {
    const request = 'SELECT * FROM Photos WHERE photoId = ?';
    return query(request, [photoId]);
  }

  //  Il faut récupérer les photos correspondant à un user

  static async getPhotoUser(Photos) {
    const request = 'SELECT * FROM Photos WHERE userId = ?;';
    return query(request, [Photos]);
  }

  static async deletePhoto(photoId){
    const request = 'DELETE FROM Photos WHERE photoId = ?';
    return query(request, [photoId])
  }

}

module.exports = PhotosModel;