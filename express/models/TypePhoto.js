const {
  query
} = require('../config/mysql');

class TypeModel {

  constructor(galerie) {
    this.typePhotoName = galerie.typePhotoName;
    this.typePhotoId = galerie.typePhotoId;
  }

  // Create

  async addNew() {
    const request = `INSERT INTO TypePhoto (typePhotoName, TypePhotoId) VALUES (?, ?)`;
    return query(request, [this.typePhotoName, this.typePhotoId]);
  }

  // Read
  // Tout
  static async getAll() {
    const request = 'SELECT * FROM TypePhoto';
    return query(request);
  }

  // Par nom de galerie
  static async getByName(typePhotoName) {
    const request = 'SELECT * FROM TypePhoto WHERE typePhotoName = ?';
    return query(request, [typePhotoName]);
  }

  // Par ID de galerie
  static async getById(typePhotoId) {
    const request = 'SELECT typePhotoId FROM TypePhoto WHERE typePhotoId = ?';
    return query(request, [typePhotoId]);
  }

  static async getByType(typePhoto) {
    const request = 'SELECT * FROM Photos WHERE typePhotoId = ?';
    return query(request, [typePhoto]);
  }

}

module.exports = TypeModel;