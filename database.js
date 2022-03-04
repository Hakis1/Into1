const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'test_user2',
  password: 'xxxx',
  database: 'test_db'
});
module.exports = connection;