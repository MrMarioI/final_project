const { query } = require('../config/mysql');

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