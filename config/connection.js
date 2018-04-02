var mysql = require('mysql');

var connection;

if(process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  conecction = mysql.createConnection({
    port: 8081,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bugers_db'
  })
};

conecction.connect(function(err) {
  if(err) {
    console.log('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

module.exports = connection;
