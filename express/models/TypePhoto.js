const { query } = require('../config/mysql');

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

  static async getAll(){
    const request = 'SELECT * FROM TypePhoto';
    return query(request);
  }

  static async getByName(typePhotoName) {
    const request = 'SELECT * FROM TypePhoto WHERE typePhotoName = ?';
    return query(request, [typePhotoName]);
  }

  static async getById(typePhotoId) {
    const request = 'SELECT typePhotoId FROM TypePhoto WHERE typePhotoId = ?';
    return query(request, [typePhotoId]);
  }
}

module.exports = TypeModel;