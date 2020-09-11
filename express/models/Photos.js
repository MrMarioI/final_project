const { query } = require('../config/mysql');

class Photos {

  constructor(photo) {
    this.photoId = photo.photoId;
    this.date = photo.date;
    this.taille = photo.taille;
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

// faire la requête afin d'afficher la photo correspondant à la gallerie séléctionnée.
  static async getByType(typeId) {
    const request = 'SELECT * FROM Photos WHERE typeId = ?';
    return query(request, [typeId]);
  }

  static async getById(photoId) {
    const request = 'SELECT * FROM Photos WHERE photoId = ?';
    return query(request, [photoId]);
  }
}

module.exports = Photos;