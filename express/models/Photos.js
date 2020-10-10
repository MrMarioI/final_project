const { query } = require('../config/mysql');

class Photos {

  constructor(photo) {
    this.photoId = photo.photoId;
    this.date = photo.date;
    this.type = photo.typePhotosId;
    this.taille = photo.taille;
    this.user = photo.userId;
  }

  // Create

  async addNew() {
    const request = `INSERT INTO Photos (photoId, date, taille) VALUES (?, ?, ?)`;
    return query(request, [this.photoId, this.date, this.taille]);
  }

  // Read

  static async getAll(){
    const request = 'SELECT * FROM Photos';
    return query(request);
  }

// faire la requête afin d'afficher la photo correspondant à la galerie séléctionnée.
  static async getByType(typeId) {
    const request = 'SELECT * FROM Photos WHERE typeId = ?';
    return query(request, [typeId]);
  }

  static async getById(photoId) {
    const request = 'SELECT * FROM Photos WHERE photoId = ?';
    return query(request, [photoId]);
  }

  //  Il faut récupérer les photos correspondant à un user

  static async getPhotoUser(Photos) {
const request = 'SELECT * FROM Photos WHERE ownerId = ?;';
return query(request, [Photos]);
  }

}

module.exports = Photos;