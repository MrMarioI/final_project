const mysql = require('mysql');
const bluebird = require('bluebird');

const sql = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3306,
  // socketPath: "/tmp/mysql.sock"
});
// Pool (plusieurs connexion à la DB) permet de mieux gérer la connection que createConnection (connexion unique à la DB)



// sql.connect( (error) =>{
//   if(error){
//     console.log("Hey ==>", error)
//   } else {
//     console.log("HEY, c'est connecté à la db, t'es bon !!")
//   }
// })

sql.query = bluebird.promisify(sql.query);
async function query(req, params) {
  return sql.query(req, params);
}

module.exports = {
  query
};