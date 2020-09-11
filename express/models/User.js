const { query } = require('../config/mysql');

class UserModel {

  constructor(user) {
    this.name = user.name;
    this.mail = user.mail;
    this.password = user.password;
  }

  // Create

  async addNew() {
    const request = `INSERT INTO Users (name, mail, password) VALUES (?, ?, ?)`;
    return query(request, [this.name, this.mail, this.password]);
  }

  // Read

  static async getAll(){
    const request = 'SELECT * FROM Users';
    return query(request);
  }

  static async getByMail(mail) {
    const request = 'SELECT * FROM Users WHERE mail = ?';
    return query(request, [mail]);
  }

  static async getById(userId) {
    const request = 'SELECT pseudo, mail, typeId FROM Users WHERE accountId = ?';
    return query(request, [userId]);
  }
}

module.exports = UserModel;