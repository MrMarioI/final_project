const mysql = require('mysql');
const promisify = require('bluebird');

const sql = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  multipleStatements: true
});
// Pool (plusieurs connexion à la DB) permet de mieux gérer la connection que createConnection (connexion unique à la DB)

// db.connect( (error) =>{
//   if(error){
//     console.log("Hey ==>", error)
//   } else {
//     console.log("HEY, c'est connecté à la db, t'es bon !!")
//   }
// })

 async function query(req, params){
  return sql.query(req, params);
}

module.exports = { query };