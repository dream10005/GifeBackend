const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '103.70.5.81',
  user     : 'gifebeta_root',
  password : 'password',
  database : 'gifebeta_db',
});

module.exports	= {
	hello: connection
};