import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'backend',
  port: '3306',
});
  
export default db;