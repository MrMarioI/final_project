const {
  query
} = require('../config/mysql');

class UserModel {

  constructor(user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.password = user.password;
  }

  // Create

  async addNew() {
    const request = `INSERT INTO Users (first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, 2)`;
    return query(request, [this.first_name, this.last_name, this.email, this.password]);
  }

  // Read

  //Tous les users inscrits
  static async getAll() {
    const request = 'SELECT * FROM Users';
    return query(request);
  }

  // Trouver les users par leur email
  static async getByMail(email) {
    const request = 'SELECT * FROM Users WHERE email = ?';
    return query(request, [email]);
  }

  // Trouver les users par leur ID.
  static async getById(userId) {
    const request = 'SELECT first_name, email FROM Users WHERE userId = ?';
    return query(request, [userId]);
  }
}

module.exports = UserModel;